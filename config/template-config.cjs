/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '~乖乖早上好~',
    desc: `

      🗓️ {{date.DATA}}

      今天是我们在一起的第{{love_day.DATA}}天，爱你❤️

      ---
      
      {{birthday_message.DATA}}

      {{earthy_love_words.DATA}}
      
      ---
      
      **{{poetry_title.DATA}}**
      
      *{{poetry_dynasty.DATA}} {{poetry_author.DATA}}*
      
      {{poetry_content.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
  {
    id: '0003',
    title: '早上好',
    desc: `
      **{{date.DATA}}**

      今天是我们相识的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG