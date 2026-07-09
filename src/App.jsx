import { useState, useEffect } from 'react'
import './App.css'
import { base } from 'vite'
const NAV = [
  { id: 'about', label: '单位介绍' },
  { id: 'isf', label: 'ISF 诊断系统' },
  { id: 'works', label: '其他产品' },
  { id: 'contact', label: '联系方式' },
]

function App() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ob = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
    }, { threshold: 0.3 })
    document.querySelectorAll('section[id]').forEach(s => ob.observe(s))
    return () => ob.disconnect()
  }, [])
  const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (<>
    {/* ===== Nav ===== */}
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="logo-icon">科</div>
          <span>甘肃省科学院自动化研究所</span>
        </a>
        <div className="nav-links">
          {NAV.map(n => (
            <a key={n.id} onClick={() => scrollTo(n.id)}
              style={{ color: active === n.id ? 'var(--fg)' : undefined }}>{n.label}</a>
          ))}
        </div>
      </div>
    </nav>

    {/* ===== Hero ===== */}
    <section className="hero">
      <div className="hero-bg"/><div className="hero-grid"/>
      <div className="hero-content">
        <div className="hero-subtitle">Gansu Academy of Sciences · Institute of Automation</div>
        <h1>以科技赋能<br/>多元场景 <span>·</span> 智创未来</h1>
        <p>我们专注于智能装备研发、工业智能诊断、文化遗产数字化与智慧农业四大方向，<br/>以数据驱动和人工智能技术赋能传统行业，提供从技术攻关到成果转化的全栈解决方案。</p>
        <div className="hero-actions">
          <a className="btn btn-primary" onClick={() => scrollTo('about')}>了解研究所 →</a>
          <a className="btn btn-ghost" onClick={() => scrollTo('contact')}>联系我们</a>
        </div>
      </div>
      <div className="scroll-indicator"><span>SCROLL</span><div className="scroll-dot"/></div>
    </section>

    {/* ===== About ===== */}
    <section className="section" id="about">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">About</span>
          <h2>单位介绍</h2>
        </div>

        <div className="about-brief">
          <p>甘肃省科学院自动化研究所是甘肃省从事自动化和智能化技术研究的重要科研机构，长期致力于<strong style={{color:'var(--fg)'}}>工业过程自动化、智能装备与系统集成、人工智能与机器视觉、文化遗产数字化保护</strong>等领域的研发与成果转化。</p>
          <p style={{marginTop:16}}>团队成员均具有多年一线研发经验，覆盖控制系统设计、嵌入式开发、数据挖掘与人工智能、软件工程等专业技术方向，近年来围绕有色冶金、生态治理、文化遗产保护、智慧农业等重点方向，联合企业承担了多项国家及省级科技计划项目。</p>
        </div>

        {/* Project domains */}
        <h4 style={{fontSize:17,fontWeight:700,color:'var(--fg)',marginBottom:20,textAlign:'center'}}>重点研发方向</h4>
        <div className="about-domains">
          <div className="domain-card">
            <div className="icon">🏭</div>
            <h4>智能制造与工业诊断</h4>
            <p style={{fontSize:13,lineHeight:1.7,color:'var(--fg2)'}}>面向有色金属冶炼、流程工业等场景，研发基于数据驱动的智能诊断与决策系统，实现核心设备的状态监测、故障诊断与操作决策支持。</p>
            <div className="tags"><span className="tag-item">ISF诊断系统</span><span className="tag-item">炉况预测</span><span className="tag-item">数据驱动</span></div>
          </div>
          <div className="domain-card">
            <div className="icon">🤖</div>
            <h4>智能装备研发</h4>
            <p style={{fontSize:13,lineHeight:1.7,color:'var(--fg2)'}}>自主研发特种作业机器人及智能装备，覆盖光伏清扫、沙漠治理、智慧农业等领域，实现高危场景的自动化、智能化作业。</p>
            <div className="tags"><span className="tag-item">草方格机器人</span><span className="tag-item">智能装备</span><span className="tag-item">光伏清扫</span></div>
          </div>
          <div className="domain-card">
            <div className="icon">🏛️</div>
            <h4>文化遗产数字化</h4>
            <p style={{fontSize:13,lineHeight:1.7,color:'var(--fg2)'}}>运用百亿像素级图像采集与AI处理技术，开展字画文物高精度数字化复刻、石窟壁画数字档案建设、古籍文献数字化保护等工作。</p>
            <div className="tags"><span className="tag-item">百亿像素复刻</span><span className="tag-item">数字档案</span><span className="tag-item">壁画数字化</span></div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-stats">
          <div className="stat-card">
            <div className="stat-number" style={{background:'linear-gradient(135deg,var(--accent),#6366F1)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>10+</div>
            <div className="stat-label">研发团队</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" style={{background:'linear-gradient(135deg,var(--blue),#818CF8)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>10+</div>
            <div className="stat-label">知识产权</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" style={{background:'linear-gradient(135deg,var(--green),#6EE7B7)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>4</div>
            <div className="stat-label">研发方向</div>
          </div>
          <div className="stat-card">
            <div className="stat-number" style={{background:'linear-gradient(135deg,var(--orange),#FCD34D)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>60+</div>
            <div className="stat-label">项目经费(万)</div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== ISF ===== */}
    <section className="section" id="isf" style={{ background: 'var(--bg-section)' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag" style={{borderColor:'rgba(139,92,246,.2)'}}>Flagship Product</span>
          <h2>ISF 密闭鼓风炉智能诊断与决策系统</h2>
          <p>全球 15 座 ISF 炉专用 · 国内首套智能化诊断与决策平台</p>
        </div>

        <div className="isf-hero">
          <div className="isf-hero-text">
            <h3>让操作工从"凭经验"到"依据数据"</h3>
            <p className="lead">ISF 密闭鼓风炉是铅锌火法冶炼的核心设备。全球仅 15 座在运行，几乎全部在中国。其生产过程高度复杂——多输入多输出、非线性、强耦合、大滞后，炉内高温高压三相共存。</p>
            <p className="body">系统通过独创的<strong style={{color:'var(--fg)'}}>风焦比/炭锌比双指标体系</strong>，首次实现了 ISF 炉实时配比量化，让操作工知道"现在风/焦/烧的配比到底合不合理、该调哪个参数、调多少"。</p>
            <div style={{marginTop:24,display:'flex',gap:12,flexWrap:'wrap'}}>
              <span style={{padding:'4px 12px',borderRadius:6,fontSize:12,background:'rgba(139,92,246,.1)',color:'var(--accent)'}}>全栈自主开发</span>
              <span style={{padding:'4px 12px',borderRadius:6,fontSize:12,background:'rgba(59,130,246,.1)',color:'#3B82F6'}}>8层决策树 · 19条路径</span>
              <span style={{padding:'4px 12px',borderRadius:6,fontSize:12,background:'rgba(34,197,94,.1)',color:'#22C55E'}}>DTW 休风预测</span>
              <span style={{padding:'4px 12px',borderRadius:6,fontSize:12,background:'rgba(249,115,22,.1)',color:'#F97316'}}>双阈值滤波</span>
            </div>
          </div>
          <div className="isf-hero-image">
            <img src={`${base}screenshots/01-主页全貌.png`} alt="ISF V6 主页" />
          </div>
        </div>

        <div className="isf-metrics">
          <div className="metric-card"><div className="metric-num" style={{color:'var(--accent)'}}>4</div><div className="metric-label">核心创新点</div></div>
          <div className="metric-card"><div className="metric-num" style={{color:'var(--blue)'}}>19</div><div className="metric-label">诊断路径</div></div>
          <div className="metric-card"><div className="metric-num" style={{color:'var(--green)'}}>500+</div><div className="metric-label">仿真验证(小时)</div></div>
          <div className="metric-card"><div className="metric-num" style={{color:'var(--orange)'}}>2</div><div className="metric-label">EI 论文</div></div>
        </div>

        <h4 style={{fontSize:20,fontWeight:700,color:'var(--fg)',marginBottom:24,textAlign:'center'}}>四大核心技术</h4>
        <div className="card-grid card-grid-4" style={{marginBottom:48}}>
          <div className="glass-card">
            <div className="icon">📊</div>
            <h4>风焦比/炭锌比</h4>
            <p>国内外首次在 ISF 炉上实现 60 分窗批去重实时配比量化。风焦比正常 4500-5500，炭锌比正常 0.8-1.1。</p>
          </div>
          <div className="glass-card">
            <div className="icon">🔄</div>
            <h4>CUSUM + 稳态带</h4>
            <p>CUSUM 过滤单点噪声只对持续趋势敏感。稳态带区分"风量联动"与"真实阻力增加"，避免误报。</p>
          </div>
          <div className="glass-card">
            <div className="icon">🧠</div>
            <h4>8层决策树</h4>
            <p>19 条决策路径，独创矛盾/一致方向检测——焦炭对两比值方向相反，同时异常不等同于焦炭问题。</p>
          </div>
          <div className="glass-card">
            <div className="icon">🔮</div>
            <h4>DTW 休风预测</h4>
            <p>线性外推+历史周期动态时间规整匹配。置信度随周期积累自动升级（低→中→高）。</p>
          </div>
        </div>

        <h4 style={{fontSize:17,fontWeight:700,color:'var(--fg)',marginBottom:16}}>技术规格</h4>
        <div style={{overflow:'hidden',borderRadius:12,border:'1px solid var(--border-glass)',marginBottom:48}}>
          <table className="spec-table">
            <tr><th style={{width:140}}>维度</th><th>内容</th></tr>
            <tr><td>架构</td><td>Python 3.12 + FastAPI + SQLite + ECharts</td></tr>
            <tr><td>通信协议</td><td>Modbus RTU/TCP（仿真/生产模式），S7-300（开发中）</td></tr>
            <tr><td>部署方式</td><td>PyInstaller 单文件 / 源码 + 离线包</td></tr>
            <tr><td>数据窗口</td><td>60 分钟滚动，batch_id 去重累加</td></tr>
            <tr><td>诊断频率</td><td>自动：每批次触发 / 手动：即时诊断</td></tr>
            <tr><td>预测算法</td><td>Prophet + 线性回归 + DTW 周期匹配</td></tr>
            <tr><td>预警层级</td><td>配置超限（红）/ 稳态带偏离（橙）/ CUSUM 趋势（黄）</td></tr>
            <tr><td>知识产权</td><td>发明专利 2025103493051 · 软著 2 件 · EI 论文 2 篇</td></tr>
            <tr><td>项目资助</td><td>甘肃省科学院重点研发项目</td></tr>
          </table>
        </div>

        <h4 style={{fontSize:17,fontWeight:700,color:'var(--fg)',marginBottom:20,textAlign:'center'}}>系统界面展示</h4>
        <div className="img-grid img-grid-3">
          <div><div className="img-item"><img src={`${base}screenshots/02-诊断详情弹窗.png`} alt="诊断详情"/></div><div className="img-caption">诊断详情弹窗</div></div>
          <div><div className="img-item"><img src={`${base}screenshots/04-周期对比炉压.png`} alt="周期对比"/></div><div className="img-caption">多周期炉压轨迹对比</div></div>
          <div><div className="img-item"><img src={`${base}screenshots/05-综合炉况指数.png`} alt="综合炉况"/></div><div className="img-caption">综合炉况指数（只降不升）</div></div>
          <div><div className="img-item"><img src={`${base}screenshots/06-异常密度.png`} alt="异常密度"/></div><div className="img-caption">异常密度分布</div></div>
          <div><div className="img-item"><img src={`${base}screenshots/07-历史查询筛选.png`} alt="历史查询"/></div><div className="img-caption">历史查询筛选</div></div>
          <div><div className="img-item"><img src={`${base}screenshots/08-参数配置.png`} alt="参数配置"/></div><div className="img-caption">实时参数配置</div></div>
        </div>
      </div>
    </section>

    {/* ===== Other Products ===== */}
    <section className="section" id="works">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag" style={{borderColor:'rgba(34,197,94,.2)',color:'var(--green)'}}>More Products</span>
          <h2>其他产品</h2>
          <p>更多自主研发的智能装备与工业软件</p>
        </div>
        <div className="products-grid">
          <div className="product-card">
            <div className="product-card-image"><div className="ph">◆</div></div>
            <div className="product-card-body">
              <span className="product-tag" style={{background:'rgba(34,197,94,.1)',color:'#22C55E'}}>智能装备</span>
              <h3>全地形防风固沙草方格自主铺设机器人</h3>
              <p>融合多线激光雷达、GPS定位、液压铺设作业系统，实现开槽、输草、压草、回填全流程自动化。铺设效率较人工提升80%。</p>
              <a className="product-link" style={{opacity:.5,cursor:'default'}}>详细页筹备中</a>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"><div className="ph">🏛️</div></div>
            <div className="product-card-body">
              <span className="product-tag" style={{background:'rgba(249,115,22,.1)',color:'#F97316'}}>文化科技</span>
              <h3>字画百亿像素复刻 &amp; 数字档案</h3>
              <p>运用超高精度扫描与AI图像处理技术，实现字画文物、石窟壁画、古籍文献的百亿像素级数字化复刻与永久保存。</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"><div className="ph">🌱</div></div>
            <div className="product-card-body">
              <span className="product-tag" style={{background:'rgba(59,130,246,.1)',color:'#3B82F6'}}>智慧农业</span>
              <h3>智能温室大棚监控系统</h3>
              <p>集成环境传感器、自动控制与数据分析平台，实现温室内温湿度、光照、CO₂浓度等参数的智能调节与远程管控。</p>
            </div>
          </div>
          <div className="product-card">
            <div className="product-card-image"><div className="ph">☀️</div></div>
            <div className="product-card-body">
              <span className="product-tag" style={{background:'rgba(139,92,246,.1)',color:'var(--accent)'}}>智能装备</span>
              <h3>光伏板智能清扫机器人</h3>
              <p>自主导航的智能清扫平台，实现大面积光伏电站的太阳能板自动化清洁维护，提升发电效率。</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Contact ===== */}
    <section className="section" id="contact" style={{ background: 'var(--bg-section)' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag">Contact</span>
          <h2>联系方式</h2>
          <p>欢迎咨询合作与技术交流</p>
        </div>
        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="ci-icon">📍</div>
              <div><h4>地址</h4><p>甘肃省兰州市定西南路229号<br/>甘肃省科学院自动化研究所</p></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">📞</div>
              <div><h4>电话</h4><p>席磊 17794273971 / 范阳明 18153635699</p></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">✉️</div>
              <div><h4>邮箱</h4><p>53163155@163.com</p></div>
            </div>
            <div className="contact-item">
              <div className="ci-icon">🏢</div>
              <div><h4>合作单位</h4><p>白银有色集团股份有限公司第三冶炼厂<br/>兰州理工大学电气工程与信息工程学院</p></div>
            </div>
          </div>
          <div style={{background:'var(--bg-glass)',border:'1px solid var(--border-glass)',borderRadius:12,padding:40,display:'flex',alignItems:'center',justifyContent:'center',aspectRatio:'16/9'}}>
            <div style={{textAlign:'center'}}>
              <div style={{fontSize:32,marginBottom:12}}>📍</div>
              <p>甘肃省科学院自动化研究所</p>
              <p style={{fontSize:11,color:'var(--fg3)',marginTop:8}}>兰州市定西南路229号</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ===== Footer ===== */}
    <footer className="footer">
      <p>© 2026 甘肃省科学院自动化研究所 &nbsp;|&nbsp; All Rights Reserved</p>
      <p>甘肃省科技计划资助（25YFGA066）&nbsp;|&nbsp; 53163155@163.com</p>
    </footer>
  </>)
}

export default App