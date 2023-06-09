import { setupCache, buildMemoryStorage, buildWebStorage } from 'axios-cache-interceptor';

var StorageType;
(function (StorageType) {
    StorageType["MemoryStorage"] = "MemoryStorage";
    StorageType["LocalStorage"] = "LocalStorage";
    StorageType["SessionStorage"] = "SessionStorage";
})(StorageType || (StorageType = {}));
/**
 * 使用这些可选参数可以根据具体的应用场景来优化缓存设置。
 * 例如，如果你的缓存中的数据比较大或者需要保证缓存数据的独立性，可以将cloneData设置为true；
 * 如果你希望定期清理过期的缓存数据，可以设置cleanupInterval；
 * 如果你希望避免缓存占用过多内存，可以设置maxEntries。
 *
 * cloneData 的场景在 https://github.com/arthurfiorette/axios-cache-interceptor/issues/163，数据过多，后面同名的进行覆盖，导致存储数据出错
 */
class CachePlugin {
    constructor(memory, options) {
        this.memory = memory;
        this.options = options;
        this.memory = memory;
        this.options = Object.assign({
            cloneData: false,
            clearInterval: false,
            maxEntries: false
        }, options);
    }
    created(axiosInstance, config) {
        if (this.memory === "MemoryStorage") {
            setupCache(axiosInstance, {
                storage: buildMemoryStorage(this.options.cloneData, this.options.cleanupInterval, this.options.maxEntries)
            });
        }
        else if (this.memory === "LocalStorage") {
            setupCache(axiosInstance, {
                // As localStorage is a public storage, you can add a prefix
                // to all keys to avoid collisions with other code.
                storage: buildWebStorage(localStorage, 'axios-cache:')
            });
        }
        else if (this.memory === "SessionStorage") {
            setupCache(axiosInstance, {
                // As sessionStorage is a public storage, you can add a prefix
                // to all keys to avoid collisions with other code.
                storage: buildWebStorage(sessionStorage, 'axios-cache:')
            });
        }
    }
}

export { CachePlugin, StorageType };
