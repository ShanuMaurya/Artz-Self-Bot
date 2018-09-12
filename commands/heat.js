exports.run = (client, message, args) => {
	message.channel.send('**IM HEATING**').then(async msg => {
		setTimeout(() => {
			msg.edit('`heating 1%`');
		}, 500);
		setTimeout(() => {
			msg.edit('`heating 10%`');
		}, 1500);
		setTimeout(() => {
			msg.edit('`heating 29%`');
		}, 2500);
		setTimeout(() => {
			msg.edit('`heating 30%`');
		}, 3500);
		setTimeout(() => {
			msg.edit('`heating 49%`');
		}, 4500);
		setTimeout(() => {
			msg.edit('`heating 52%`');
		}, 5500);
		setTimeout(() => {
			msg.edit('`heating 79%`');
		}, 6500);
		setTimeout(() => {
			msg.edit('`heating 99%`');
		}, 7500);
		setTimeout(() => {
			msg.edit('💥');
		}, 8000);
		setTimeout(() => {
			msg.edit('💥💥');
		}, 8500);
		setTimeout(() => {
			msg.edit('💥💥💥');
		}, 9000);
		setTimeout(() => {
			msg.edit('**D3D**');
		}, 9500);
	});
};
module.exports.help = {
	category: 'fun',
	name: 'heat',
	description: 'For instant death 💀'
};
