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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_46_06_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTAxLFxuICAgICAgICA2NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIsXG4gICAgICAgIDEwLFxuICAgICAgICAxOSxcbiAgICAgICAgMTM1LFxuICAgICAgICA5NyxcbiAgICAgICAgOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDc1LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NSxcbiAgICAgICAgODUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjksXG4gICAgICAgIDIwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDc3LFxuICAgICAgICA2NyxcbiAgICAgICAgODUsXG4gICAgICAgIDc0LFxuICAgICAgICA3MSxcbiAgICAgICAgMjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDY5LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDExMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDkyLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2LFxuICAgICAgICA1OCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTU2LFxuICAgICAgICAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzLFxuICAgICAgICA0NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTk3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTA2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTAsXG4gICAgICAgIDI2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTksXG4gICAgICAgIDcyLFxuICAgICAgICA0MyxcbiAgICAgICAgMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MixcbiAgICAgICAgNTcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMxLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU2LFxuICAgICAgICAzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzNSxcbiAgICAgICAgODAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTgxLFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MixcbiAgICAgICAgMTg3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE2LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMjQsXG4gICAgICAgIDg4LFxuICAgICAgICAyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA3MixcbiAgICAgICAgNzcsXG4gICAgICAgIDMzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICA1MyxcbiAgICAgICAgMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTEzLFxuICAgICAgICA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTksXG4gICAgICAgIDcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICA4OCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxMixcbiAgICAgICAgMzQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDUzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDU5LFxuICAgICAgICA0MSxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgNzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyLFxuICAgICAgICAyOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICA4NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJXdXBZUmttQ3FGQmV2MWFsOUxhWm8wNTJ1TEpBd1lqZU5qKzU3MWRwZGRrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJpTV9ZSE1HY1FTcVo2ci1Xd24tYXBBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjg5MGJiYmFkLTcxNDktNDAwZC04NDM4LWNkZTM5ZmU4ODIyZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyLFxuICAgICAgMTcwLFxuICAgICAgODUsXG4gICAgICAyMjIsXG4gICAgICAxOSxcbiAgICAgIDE3MSxcbiAgICAgIDEyNixcbiAgICAgIDIyLFxuICAgICAgMjIyLFxuICAgICAgMzMsXG4gICAgICAxMjIsXG4gICAgICAxNjUsXG4gICAgICA3OCxcbiAgICAgIDEwOSxcbiAgICAgIDE3NCxcbiAgICAgIDE1OSxcbiAgICAgIDc5LFxuICAgICAgMjQsXG4gICAgICA4MSxcbiAgICAgIDMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOCxcbiAgICAgIDE5MSxcbiAgICAgIDEyNyxcbiAgICAgIDU4LFxuICAgICAgMTk5LFxuICAgICAgMSxcbiAgICAgIDIsXG4gICAgICA2NSxcbiAgICAgIDI1MSxcbiAgICAgIDEyMCxcbiAgICAgIDg5LFxuICAgICAgMTQwLFxuICAgICAgNzcsXG4gICAgICAxMzEsXG4gICAgICA0NSxcbiAgICAgIDE0MCxcbiAgICAgIDE2OSxcbiAgICAgIDIxLFxuICAgICAgNzQsXG4gICAgICAyNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTjcxSE5SWFlcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNTEzOTQ4ODE6OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzU1MjQwOTM5OTMxMDc6OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMYm5pdFVDRVBPQ3FiTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImpSSTkydTlPN1ZjYXgwTkxtTmtnQkRDRk9qVHdiWURjOGl6aXovM3BnRTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidFByeUpjSGdNMTBqQTBHV3cwVHpCaFdSUzBHVTBQOHlHTlJ3K3pSejZFc2FBQ2J5ekgwWU5BUXd1ckhIZXlNZnhmYkthZmxXRG9HeGFzV1NpTnR4Qmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXU2WGhoTFNlanBYeGc2cUxocDN5QXF6MHZieitkaUVFTTRnbVo3Q3NLTEtiRjdlNGcrQzQ2aDRBV0ZDTHZwWmtFNWhIdklvZFlNZUk2UW1RMWZaaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE1MTM5NDg4MTo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE4MjM5NjA3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSUlBXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJSUEuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJRZlJISnNaTS9XbnlwdllIa1c5Q3V4bjdGZloxandXVnZkNnZJS09VRzhrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjcxNTMwNTkwMixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzk3Mzg3Mzk3OVwifSIKfQ=="  // PUT your SESSION_ID 


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
