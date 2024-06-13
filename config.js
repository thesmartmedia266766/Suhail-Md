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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+2348151394881";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_56_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcyLFxuICAgICAgICA1MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDcsXG4gICAgICAgIDY2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM2LFxuICAgICAgICA3OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxODcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDMzLFxuICAgICAgICA3NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA1MixcbiAgICAgICAgMTM3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxLFxuICAgICAgICAyNyxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDU2LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDksXG4gICAgICAgIDU0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTU2LFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDc4LFxuICAgICAgICA1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDgzLFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDczLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAyNixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgNjgsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDQsXG4gICAgICAgIDg3LFxuICAgICAgICA5MSxcbiAgICAgICAgMjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDExNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYzLFxuICAgICAgICAyMyxcbiAgICAgICAgMTk2LFxuICAgICAgICA2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxODksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDcyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDY4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNzQsXG4gICAgICAgIDE3MixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjUwLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjBaMkFxeW93Qzh2V2NGZzhScEZTb2l1KzQ1K2hTajZRWVFES2dqSnEzMTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInhZWEM3bmJnUW5TX0RSMkFpeVNzR1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjVlM2ZmMmUtZDI5OS00MmZiLTg1MjctYjgxNjdkNWVjYTE3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDgwLFxuICAgICAgMTMsXG4gICAgICA4NyxcbiAgICAgIDEyNSxcbiAgICAgIDU5LFxuICAgICAgMjI4LFxuICAgICAgNjksXG4gICAgICAxMTYsXG4gICAgICAyMDEsXG4gICAgICAxNjIsXG4gICAgICAyMzksXG4gICAgICA3NyxcbiAgICAgIDE0NyxcbiAgICAgIDIsXG4gICAgICAyNCxcbiAgICAgIDkwLFxuICAgICAgNyxcbiAgICAgIDExMixcbiAgICAgIDEyMCxcbiAgICAgIDE3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTksXG4gICAgICAxNDYsXG4gICAgICA4MyxcbiAgICAgIDQ2LFxuICAgICAgMTgyLFxuICAgICAgMjEzLFxuICAgICAgMzYsXG4gICAgICAxOTUsXG4gICAgICAxMTIsXG4gICAgICA1MyxcbiAgICAgIDI1NSxcbiAgICAgIDE0NSxcbiAgICAgIDkyLFxuICAgICAgMzAsXG4gICAgICAxNDMsXG4gICAgICA0MyxcbiAgICAgIDEyMixcbiAgICAgIDEwMixcbiAgICAgIDIyNCxcbiAgICAgIDExMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzVlJOOExITlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE1MTM5NDg4MTo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNTUyNDA5Mzk5MzEwNzo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xibml0VUNFSnl0ckxNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwialJJOTJ1OU83VmNheDBOTG1Oa2dCRENGT2pUd2JZRGM4aXppei8zcGdFMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIremZCc2pRVVg0dGxVSGhucHE0TWo1R3FNdXpaYU1JZ3lmRWYvZmdJbGo0MktMcWV6Zy9hQ29xbzRtSlBvL25UYUdBUGoyS21IZk5oZ0R6YUVzY1VBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJtc3lRUGwzUkhTdzRBSzZWTGhYbWhLMTdWaFNLQ2FCYWNNYnBja2RtQ1VNaUtIaXFuU2dwdUI4Q1NDaXJjR2NLNWpBaHJZelhSOVFZckYzR2h0SlFqZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTUxMzk0ODgxOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTgyOTQxNzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJSUFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlJQS5qc29uIjogIntcImtleURhdGFcIjpcIlFmUkhKc1pNL1dueXB2WUhrVzlDdXhuN0ZmWjFqd1dWdmQ2dklLT1VHOGs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NzE1MzA1OTAyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzE3OTczODczOTc5XCJ9Igp9"  // PUT your SESSION_ID 


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
