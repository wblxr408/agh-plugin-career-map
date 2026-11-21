import { careerRoles, careerStages, careerTopics } from './career-model.mjs'
import { schema, serve, string, tool } from './stdio.mjs'

const map = 'https://llm-master-web.vercel.app/#/map'
const links = {
  start: 'roadmap/beginner.md',
  transformer: 'topics/transformer.md',
  rag: 'topics/rag.md',
  agent: 'topics/agent.md',
  finetuning: 'topics/finetuning.md',
  deployment: 'topics/deployment.md',
  interview: 'roadmap/interview.md',
  application: 'roadmap/application.md',
}
const sources = 'https://github.com/wblxr408/llm-career-map/blob/cc7f8a9507bd24848c4bef24f43aa2feed6c373e/content/docs/'
const topics = careerTopics.map((topic) => ({ ...topic, source: links[topic.id] ? sources + links[topic.id] : map }))
await serve('career-map', [
  tool('career_roles', 'List career routes and their topic IDs.', schema({}), () => careerRoles),
  tool('career_route', 'Read a role route with prerequisites and completion criteria.', schema({ role: string(70) }, 'role'), ({ role }) => {
    const selected = careerRoles.find(({ id, label }) => id === role || label === role)
    if (!selected) throw new Error('Use an ID from career_roles.')
    const route = topics.filter(({ id }) => selected.topics.includes(id))
    return { ...selected, topics: route, stages: careerStages.filter(({ topics }) => topics.some(id => selected.topics.includes(id))), map }
  }),
  tool('career_search', 'Search topic names, descriptions, prerequisites and completion criteria.', schema({ query: string(120) }, 'query'), ({ query }) => {
    const terms = query.trim().toLowerCase().split(/\s+/)
    return topics.filter((topic) => {
      const haystack = [topic.id, topic.label, topic.desc, topic.check, ...topic.prerequisites].join(' ').toLowerCase()
      return terms.every((term) => haystack.includes(term))
    })
  }),
])
