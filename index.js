// Discord.js bot
const Discord = require('discord.js'),
	moment = require('moment');
	
 
client = new Discord.Client(),
   
      fs = require('fs'),
      winstonLogger = require('./classes/logger.js');
winston = require('winston'),
      chalk = require('chalk');
const snekfetch = require('snekfetch');
const winstonClass = new winstonLogger(); 
client.on('ready', () => {
    client.user.setActivity('My Delights', {type: 'WATCHING'});
});

client.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
	if (err) {
		logger.error(err);
	}
	const jsFiles = files.filter(f => f.split('.').pop() === 'js');
	if (jsFiles.length <= 0) {
		logger.info('No commands to load');
		return;
	}
	logger.info(`Loading ${jsFiles.length} commands`);

	try {
		jsFiles.forEach((f, i) => {
			const props = require(`./commands/${f}`);
			logger.info(`${i + 1}) => ${f} Has been loaded successfully`);
			client.commands.set(props.help.name, props);
		});
	} catch (e) {
		logger.error(e);
	}
});
const prefix = '=';
client.on('message', async message => {
	if (message.author.id !== '400359111834861568') {
		return;
	}
	if (message.author.bot) {
		return;
	}
	client.on("message", (message) => {
  if(message.content === "pls kill me") {
    message.channel.send("_revives you_!");
  }
});


	const guild = message.guild;
	const args = message.content.split(' ').slice(1).join(' ');
	const command = message.content.split(' ')[0];
	if (!command.startsWith(prefix)) {
		return;
	}

	const cmd = client.commands.get(command.slice(prefix.length));
	if (cmd) {
		try {
			cmd.run(client, message, args);
			logger.info(`${chalk.cyan(cmd.help.name)} just been executed by ${chalk.magenta(message.author.username)} inside ${chalk.yellow(message.guild.name)}`);
		} catch (e) {
			logger.error(e);
		}
	}
	
	
  });
	
	
client.login(process.env.TOKEN);



    
