export const careerStages = [
  { id:'direction', label:'选方向', question:'我要解决什么问题？', outcome:'一份目标岗位与差距表', topics:['start'] },
  { id:'foundation', label:'打基础', question:'哪些能力所有岗位都要？', outcome:'能独立编码并解释原理', topics:['coding','cs','ml','transformer'] },
  { id:'specialize', label:'建专长', question:'目标岗位考什么？', outcome:'能比较方案并处理失败', topics:['application','rag','agent','finetuning','deployment','backend','frontend','system'] },
  { id:'evidence', label:'做项目', question:'我如何证明自己会做？', outcome:'代码、评测、指标与复盘', topics:['project'] },
  { id:'application', label:'投简历', question:'怎样让证据被看见？', outcome:'岗位匹配简历与投递记录', topics:['resume'] },
  { id:'interview', label:'过面试', question:'能否在追问中讲清取舍？', outcome:'技术口述、模拟面试与复盘', topics:['interview','behavior'] },
  { id:'career', label:'入职成长', question:'下一步怎样持续交付？', outcome:'Offer 比较与入职学习计划', topics:['career'] },
];
export const careerTopics = [
  {id:'start',label:'岗位定位与路线',color:'green',desc:'理解应用、算法、Infra 和开发岗的职责，用 JD 建立差距清单。',prerequisites:[],check:'写出目标岗位、已有证据和三项优先补齐的能力。'},
  {id:'coding',label:'算法与编码',color:'purple',desc:'按数组、哈希、树、图、动态规划训练，再练习讲解复杂度和边界。',prerequisites:['start'],check:'在限定时间内完成实现、边界测试和复杂度说明。'},
  {id:'cs',label:'计算机基础',color:'blue',desc:'操作系统、网络、数据库、并发与语言基础是工程判断的共同底座。',prerequisites:['start'],check:'能把一次请求从进程、网络、存储到响应完整解释。'},
  {id:'ml',label:'数学与机器学习',color:'green',desc:'概率、统计、优化、模型与评估；理解数据泄漏和偏差，而非只记定义。',prerequisites:['coding'],check:'能选择基线、评价指标，并解释训练与验证的差异。'},
  {id:'transformer',label:'LLM 与模型原理',color:'blue',desc:'分词、Embedding、Q/K/V、位置编码与 Transformer，把结构讲到能推导。',prerequisites:['coding','ml'],check:'能手写小规模 Attention，并解释形状、权重与复杂度。'},
  {id:'application',label:'模型应用与评估',color:'orange',desc:'Prompt、结构化输出、工具调用、流式响应、上下文和质量评估。',prerequisites:['coding','cs'],check:'交付有错误处理、成本统计和评测集的模型应用。'},
  {id:'rag',label:'RAG 与检索',color:'green',desc:'从文档解析到检索、重排、引用与评测，关注召回失败的原因。',prerequisites:['application','transformer'],check:'用固定问题集定位切片、召回、重排或生成的失败环节。'},
  {id:'agent',label:'Agent 与工具',color:'orange',desc:'规划、工具契约、状态、记忆、恢复和评估，说明为何需要自主循环。',prerequisites:['application','rag'],check:'展示一条可观察、可恢复、有预算边界的工具执行轨迹。'},
  {id:'finetuning',label:'训练、微调与对齐',color:'purple',desc:'预训练、SFT、LoRA、偏好优化和分布式训练，理解数据与资源取舍。',prerequisites:['ml','transformer'],check:'记录数据、基线、配置、指标与失败分析，说明为何需要微调。'},
  {id:'deployment',label:'推理与 AI Infra',color:'blue',desc:'KV Cache、量化、推理服务、GPU、并行、调度、延迟与容量。',prerequisites:['cs','transformer'],check:'提交吞吐、延迟、显存、成本和容量的可复现实验。'},
  {id:'backend',label:'后端与数据工程',color:'blue',desc:'Java、数据库、缓存、消息队列与分布式，训练故障和场景题判断。',prerequisites:['coding','cs'],check:'能解释一致性、事务、幂等、热点和故障恢复方案。'},
  {id:'frontend',label:'前端工程',color:'purple',desc:'HTML、CSS、JavaScript、浏览器、性能、可访问性与组件设计。',prerequisites:['coding','cs'],check:'交付可用组件并解释状态、性能、网络和交互边界。'},
  {id:'system',label:'系统设计',color:'blue',desc:'需求、规模、数据模型、接口、容量与故障，从约束推导架构。',prerequisites:['cs'],check:'用目标与规模解释方案，并说明瓶颈、代价和演进路径。'},
  {id:'project',label:'项目与证据',color:'orange',desc:'把专业知识做成可运行成果，保留指标、贡献、选型和复盘证据。',prerequisites:['coding','system'],check:'准备一个主项目的代码、架构、指标、个人贡献和三层追问。'},
  {id:'resume',label:'简历与投递',color:'green',desc:'按岗位匹配证据，清晰表达贡献和结果；用记录改进投递与反馈。',prerequisites:['project'],check:'每条项目描述都能指向真实成果，建立投递与反馈表。'},
  {id:'interview',label:'题库、面经与复盘',color:'yellow',desc:'用题库检查能力，用面经理解轮次与追问，再通过模拟暴露缺口。',prerequisites:['resume'],check:'录一次完整模拟面试，按编码、原理、项目和设计记录反馈。'},
  {id:'behavior',label:'沟通与行为面试',color:'orange',desc:'自我介绍、协作、冲突、失败与影响，围绕事实和行动讲清经历。',prerequisites:['project'],check:'准备成功、失败、冲突、协作四类真实故事与反问。'},
  {id:'career',label:'Offer 与入职成长',color:'green',desc:'比较职责、团队、成长与工作条件，并建立入职后的学习和交付计划。',prerequisites:['interview','behavior'],check:'完成 Offer 比较和入职 30/60/90 天目标草案。'},
];
const common=['start','coding','cs','system','project','resume','interview','behavior','career'];
const roleDefinitions = [
  {id:'all',label:'全体系',description:'看完整地图，再选择自己的岗位路线。',topics:careerTopics.map(t=>t.id)},
  {id:'app',label:'AI 应用 / Agent',description:'从可靠的模型调用，到可评估的 RAG 和 Agent 项目。',topics:[...common,'transformer','application','rag','agent','deployment']},
  {id:'ml',label:'算法 / ML / LLM',description:'补齐数学与评估，再深入模型、训练和实验。',topics:[...common,'ml','transformer','finetuning','deployment','rag']},
  {id:'infra',label:'AI Infra / 推理',description:'从系统与模型瓶颈出发，用性能实验建立证据。',topics:[...common,'transformer','finetuning','deployment','backend']},
  {id:'backend',label:'后端开发',description:'夯实语言、数据和分布式，再扩展 AI 应用。',topics:[...common,'backend','application','rag']},
  {id:'frontend',label:'前端开发',description:'理解浏览器与交互，练习组件和前端系统设计。',topics:[...common,'frontend','application']},
  {id:'cpp',label:'C / C++ / 系统',description:'语言、内存、并发与系统设计，形成可验证的工程能力。',topics:[...common]},
];
export const careerRoles=roleDefinitions.map(role=>{const topics=new Set(role.topics);function add(id){for(const p of careerTopics.find(t=>t.id===id).prerequisites)if(!topics.has(p)){topics.add(p);add(p);}}for(const id of role.topics)add(id);return {...role,topics:[...topics]};});
export const normalizeTopic = id => ({orient:'start',llm:'transformer',training:'finetuning',serving:'deployment'}[id]||id);
export function classifyCareer(path, fallback='interview') {
  const s=path.toLowerCase();
  const rules=[['behavior',/behavior|behaviour|self.introduction|star面试|行为面试|自我介绍/],['resume',/resume|cv\b|简历|投递/],['career',/negotiat|compensation|offer|career.growth|choosing.between|入职|薪酬|职业|成长|就业/],['start',/landscape|roles|岗位要求|岗位版图|学习路线|roadmap|study.plan|personalization|company.comparison/],['project',/project|项目|工程实践/],['rag',/rag|chunk|embedding.vector|retriev|检索|向量数据库/],['agent',/agent|mcp|function.call|工具调用|上下文|memory/],['finetuning',/fine.tun|finetun|lora|qlora|sft|dpo|ppo|grpo|rlhf|pretrain|训练|微调|对齐|蒸馏/],['deployment',/inferenc|infra|kv.cache|paged|flash.attention|quantiz|serving|推理|部署|量化|gpu|cuda|并行|性能/],['frontend',/front.end|javascript|typescript|css|html|react|browser|浏览器|前端/],['system',/system.design|design.md|系统设计|architecture|架构|distributed|分布式/],['transformer',/rmsnorm|layernorm|swiglu|ffn|gqa|mha|注意力|前馈网络|模型组装|分词/],['cs',/operating|network|computer.science|database|sql|linux|进程|线程|操作系统|网络|数据库|计算机基础|并发/],['backend',/java|spring|redis|mysql|kafka|后端|缓存|消息队列|数据工程/],['coding',/algorithm|leetcode|coding|data.structure|算法|数据结构|手撕|动态规划|链表|二叉树|哈希/],['ml',/machine.learning|math|probab|statistic|calculus|线性代数|概率|统计|机器学习|pytorch|优化器/],['transformer',/transformer|attention|rope|token|模型架构|模型基础|llm.basics|大模型基础|词嵌入|分词/],['application',/prompt|eval|stream|结构化|模型应用|评估|提示词/],['interview',/面经|interview|question|面试|题库|追问/]];
  return rules.find(([,regex])=>regex.test(s))?.[0]||normalizeTopic(fallback);
}
export function eligibleDocument(path) {
  if(!/\.(md|mdx|pdf|ipynb)$/i.test(path))return false;
  if(/(^|\/)(\.github|node_modules|_book|_style|superpowers|agents|specs|plans|scripts|tests|src|advertise)(\/|$)/i.test(path))return false;
  if(/(^|\/)(agents|skill|contributing|code_of_conduct|changelog|push_to_github|promo|demo-script|translation[s]?|create-list)(\.[^/]*)?$/i.test(path))return false;
  if(/(^|\/)(i18n|translations?|translation)\//i.test(path)&&!/(zh-cn|zh-hans|chinese|简体)/i.test(path))return false;
  if(/readme[-_.](ja|en|ru|ko|fr|es|pt|tw|zh-tw|it|pl)/i.test(path))return false;
  return true;
}
export function sourceNotePath(sourceId,path){return `library/${sourceId}/${path}`;}
export function sourceFileUrl(source,path){return `${source.url}/blob/${source.revision}/${path.split('/').map(encodeURIComponent).join('/')}`;}
