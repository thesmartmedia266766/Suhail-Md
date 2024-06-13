const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+234 815 139 4881";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_44_06_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOCxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDMsXG4gICAgICAgIDczLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzksXG4gICAgICAgIDQwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjksXG4gICAgICAgIDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAxOCxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTY1LFxuICAgICAgICA5NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTQsXG4gICAgICAgIDk4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjQzLFxuICAgICAgICA5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDMzLFxuICAgICAgICA3NSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc2LFxuICAgICAgICA1OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDcwLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NSxcbiAgICAgICAgMTc3LFxuICAgICAgICA2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICA5NSxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDExNyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNTUsXG4gICAgICAgIDUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzksXG4gICAgICAgIDgwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDU2LFxuICAgICAgICA3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTFcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODksXG4gICAgICAgIDk3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDczLFxuICAgICAgICA3LFxuICAgICAgICAzMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDExLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyNTAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNixcbiAgICAgICAgMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDM3LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjI3LFxuICAgICAgICA2LFxuICAgICAgICA5MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkU4UWp0dGczaTFQdk8yTnByWkJISmJCMzA0dnd2b055c0dUTXI1QW9sS0U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkowai1FZW5CVEsyVUZ1c3JXTjlVWndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMTU5MzdlY2QtY2M0OS00Mjg5LWI4NjItYzVjYWUzZDc5N2RmXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU1LFxuICAgICAgMTc4LFxuICAgICAgMjQyLFxuICAgICAgOTAsXG4gICAgICAxNjMsXG4gICAgICAxNjAsXG4gICAgICAyNDQsXG4gICAgICAxODcsXG4gICAgICAyNDIsXG4gICAgICAyMjMsXG4gICAgICAyMTgsXG4gICAgICA2OCxcbiAgICAgIDE1NSxcbiAgICAgIDEsXG4gICAgICAxNTYsXG4gICAgICA5MSxcbiAgICAgIDgxLFxuICAgICAgMTQ5LFxuICAgICAgNTMsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI4LFxuICAgICAgOTksXG4gICAgICA1OCxcbiAgICAgIDExMyxcbiAgICAgIDM1LFxuICAgICAgOTMsXG4gICAgICAxODIsXG4gICAgICA1MCxcbiAgICAgIDE4OCxcbiAgICAgIDE5LFxuICAgICAgMTU5LFxuICAgICAgMTM1LFxuICAgICAgMTEyLFxuICAgICAgMTk1LFxuICAgICAgODAsXG4gICAgICA1NixcbiAgICAgIDE2LFxuICAgICAgMTAxLFxuICAgICAgMzMsXG4gICAgICAxOTlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlpaTjFYV1NcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTEzOTQ4ODE6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzU1MjQwOTM5OTMxMDc6N0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMWG5pdFVDRU1QbHFMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpSSTkydTlPN1ZjYXgwTkxtTmtnQkRDRk9qVHdiWURjOGl6aXovM3BnRTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieU9BL1RBSVJtOHhxWEtqYitVSHh2UjkxdFpsNE02RjltZDJpWVZPSlBNcCtPUEhBVlFLczc5dEdlVllTU0FGdFExMDlCODhKQ2JQemJ3c1VLMUFZQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieHBvT2RreDB2WFFyUWdHSTZlVGZHUllMV1hpT1dNTEY5UnNvV1ZDUnJwdmNONlhYMXgzQmxBZkFkUDlTRWZqK0xNcWc3OTh3QXFXYjUzejBvb1YxRHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1MTM5NDg4MTo3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjM1ODQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRZlJISnNaTS9XbnlwdllIa1c5Q3V4bjdGZloxandXVnZkNnZJS09VRzhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNTMwNTkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzk3Mzg3Mzk3OVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
