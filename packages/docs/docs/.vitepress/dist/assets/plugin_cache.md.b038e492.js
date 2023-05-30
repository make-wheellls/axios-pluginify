import{_ as l,H as o,o as p,c as e,C as a,a as s,J as t,V as c}from"./chunks/framework.d97f05f3.js";const x=JSON.parse('{"title":"@axios-plugin/cache","description":"","frontmatter":{},"headers":[],"relativePath":"plugin/cache.md","filePath":"plugin/cache.md","lastUpdated":1685417450000}'),r={name:"plugin/cache.md"},i={id:"axios-plugin-cache",tabindex:"-1"},y=a("a",{class:"header-anchor",href:"#axios-plugin-cache","aria-label":'Permalink to "@axios-plugin/cache <Badge type="tip" text="^0.0.5" />"'},"​",-1),D=c(`<p>将请求结果存储在可配置的存储中，以防止不需要的网络请求。</p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">yarn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@axios-plugin/cache</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CachePlugin</span><span style="color:#A6ACCD;">(type</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span></span></code></pre></div><p>使用 CachePlugin 可以设置type：MemoryStorage, LocalStorage, SessionStorage</p><h3 id="web-storage-api" tabindex="-1">Web Storage API <a class="header-anchor" href="#web-storage-api" aria-label="Permalink to &quot;Web Storage API&quot;">​</a></h3><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CachePlugin</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StorageType</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@axios-plugin/cache</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> axiosInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pluginify</span><span style="color:#A6ACCD;">(axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AxiosStatic</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CachePlugin</span><span style="color:#A6ACCD;">(StorageType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Memory))</span></span>
<span class="line"><span style="color:#A6ACCD;">                        </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p>StorageType 有三个可选值: MemoryStorage, LocalStorage, SessionStorage</p><ul><li>当使用 LocalStorage, SessionStorage 时，会默认在存储中加上前缀：<code>axios-cache:</code></li><li>使用 Web Storage API，第二个参数不起作用</li></ul><h3 id="memory-storage" tabindex="-1">Memory Storage <a class="header-anchor" href="#memory-storage" aria-label="Permalink to &quot;Memory Storage&quot;">​</a></h3><p>在使用 Memory 时，CachePlugin 可接收第二个参数</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">CachePlugin</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">StorageType</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">Options</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@axios-plugin/cache</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> options</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cloneData</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">cleanupInterval</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">36000</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">maxEntries</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">300</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">axiosInstance </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">pluginify</span><span style="color:#A6ACCD;">(axios</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">create</span><span style="color:#A6ACCD;">() </span><span style="color:#89DDFF;font-style:italic;">as</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AxiosStatic</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">use</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">CachePlugin</span><span style="color:#A6ACCD;">(StorageType</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">MemoryStorage</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options))</span></span>
<span class="line"><span style="color:#A6ACCD;">                  </span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">generate</span><span style="color:#A6ACCD;">()</span></span></code></pre></div><p><strong>参数</strong></p><ul><li>cloneData: 用于指定是否克隆存储在缓存中的数据。默认情况下为false，即不进行克隆。</li><li>cleanupInterval: 清理间隔：避免内存泄漏</li><li>maxEntries: 用于指定缓存中最大条目数。如果超出这个数量，缓存将自动删除最旧的缓存项。如果设置为false，则不会限制缓存中的条目数。</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">Options </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">cloneData</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">boolean</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">cleanupInterval</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">maxEntries</span><span style="color:#89DDFF;">?:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">number</span><span style="color:#F07178;"> </span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>使用这些可选参数可以根据具体的应用场景来优化缓存设置:</p><ul><li>例如，如果你的缓存中的数据比较大或者需要保证缓存数据的独立性，可以将cloneData设置为true, 比如数据过多，后面同名的进行覆盖，导致存储数据出错</li><li>如果你希望定期清理过期的缓存数据，可以设置cleanupInterval</li><li>如果你希望避免缓存占用过多内存，可以设置maxEntries</li></ul><h2 id="注意" tabindex="-1">注意 <a class="header-anchor" href="#注意" aria-label="Permalink to &quot;注意&quot;">​</a></h2><p>在使用 TimeoutPlugin 时，首先需要使用 pluginify 将 <code>axios</code>变成基于插件的请求库. pluginify 内置在 <a href="https://www.npmjs.com/package/@axios-plugin/core" target="_blank" rel="noreferrer">@axios-plugin/core</a> 中.</p>`,20);function C(A,F,g,h,d,u){const n=o("Badge");return p(),e("div",null,[a("h1",i,[s("@axios-plugin/cache "),t(n,{type:"tip",text:"^0.0.5"}),s(),y]),D])}const b=l(r,[["render",C]]);export{x as __pageData,b as default};