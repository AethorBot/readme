<script context="module" lang="ts">
	export const ssr = true;
	export const prerender = true;
	export const hydrate = false;
	export const router = false;
	const commands = {
		config: [
			{ n: ['configs'], d: 'view the configs of Aethor', s: '*configs ', a: ['configs', 'pf'] },
			{ n: ['prefix'], d: 'view the prefix of Aethor', s: '*prefix <set>', a: ['prefix', 'pf'] },
			{ n: ['prefix', 'set'], d: "set Aethor's prefix", s: '*prefix set [prefix]', a: ['set'] }
		],
		general: [
			{
				n: ['autopublish'],
				d: 'Automatically publish messages',
				s: '*autopublish <channel>',
				a: ['autopublish', 'publish']
			},
			{ n: ['avatar'], d: 'View the avatar of a user', s: '*avatar <member>', a: ['av', 'avatar'] },
			{ n: ['help'], d: 'Aethor Help Command', s: '*help <command>', a: ['ls', 'h'] },
			{ n: ['invite'], d: 'Invite Aethor to your server', s: '*invite ', a: ['invite'] },
			{ n: ['support'], d: 'Support server :)', s: '*support ', a: ['support'] }
		],
		fun: [
			{
				n: [null],
				d: 'Ask a question for the magic 8ball to answer',
				s: '*8ball <question>',
				a: ['8ball', 'itriedmybest', 'mok']
			},
			{ n: ['crab'], d: 'Ultimate crab', s: '*crab [crab]', a: ['crab'] },
			{ n: ['iqtest'], d: 'Do a iqtest', s: '*iqtest <member>', a: ['iqtest', 'iq', 'testiq'] },
			{
				n: ['math'],
				d: 'Do some math',
				s: '*math <easy> <normal> <hard> <impossible>',
				a: ['math']
			},
			{ n: ['math', 'easy'], d: 'easy math question', s: '*math easy ', a: ['easy'] },
			{
				n: ['math', 'impossible'],
				d: 'impossible math question',
				s: '*math impossible ',
				a: ['impossible']
			},
			{ n: ['math', 'normal'], d: 'normal math question', s: '*math normal ', a: ['normal'] },
			{ n: ['blame'], d: 'Blame someone', s: '*blame [text]', a: ['blame'] }
		],
		information: [
			{
				n: ['githubuser'],
				d: 'View some information about a github user',
				s: '*githubuser [user]',
				a: ['githubuser']
			},
			{ n: ['ping'], d: 'Ping the bot', s: '*ping ', a: ['ping', 'pong'] },
			{ n: ['raw'], d: 'View the raw text of your message', s: '*raw <text>', a: ['raw'] },
			{
				n: ['server'],
				d: 'Get some information about this server',
				s: '*server ',
				a: ['server', 'guild']
			},
			{
				n: ['stats'],
				d: 'Sends some general stats of the bot',
				s: '*stats ',
				a: ['stats', 'botinfo']
			},
			{
				n: ['userinfo'],
				d: 'View the information about a user',
				s: '*userinfo <member>',
				a: ['userinfo', 'u', 'user']
			}
		],
		moderation: [
			{
				n: ['ban'],
				d: 'Ban users from your server',
				s: '*ban [user] <reason> <deletemessages>',
				a: ['ban']
			},
			{
				n: ['clearlogs'],
				d: 'clearlogs a user',
				s: '*clearlogs [user]',
				a: ['clearlogs', 'clearwarns']
			},
			{
				n: ['moderation'],
				d: 'modify moderation settings',
				s: '*moderation <banmessage> <kickmessage> <mutemessage> <warnmessage> <modlogchannel> <publicmodlogchannel> <addmod>',
				a: ['moderation']
			},
			{
				n: ['moderation', 'banmessage'],
				d: 'set the footer',
				s: '*moderation banmessage <footer>',
				a: ['banmessage']
			},
			{
				n: ['moderation', 'kickmessage'],
				d: 'set the footer',
				s: '*moderation kickmessage <footer>',
				a: ['kickmessage']
			},
			{
				n: ['moderation', 'mutemessage'],
				d: 'set the footer',
				s: '*moderation mutemessage <footer>',
				a: ['mutemessage']
			},
			{
				n: ['moderation', 'warnmessage'],
				d: 'set the footer',
				s: '*moderation warnmessage <footer>',
				a: ['warnmessage']
			},
			{
				n: ['moderation', 'publicmodlogchannel'],
				d: 'The channel infractions will be posted in to the public',
				s: '*moderation publicmodlogchannel <channel>',
				a: ['publicmodlogchannel']
			},
			{
				n: ['moderation', 'modlogchannel'],
				d: 'the channel modlogs will be posted in',
				s: '*moderation modlogchannel <channel>',
				a: ['modlogchannel']
			},
			{
				n: ['moderation', 'addmod'],
				d: 'allow a user or role to do all moderation actions',
				s: '*moderation addmod <user> <role>',
				a: ['addmod']
			},
			{ n: ['modlogs'], d: 'modlogs a user', s: '*modlogs [user]', a: ['modlogs', 'warns'] },
			{
				n: ['mute'],
				d: 'mute in your server',
				s: '*mute [user] <reason> <time>',
				a: ['mute', 'silence']
			},
			{
				n: ['reason'],
				d: 'Set the reason of a infraction',
				s: '*reason [id] [reason]',
				a: ['reason', 'reson']
			},
			{ n: [null], d: 'Give a user a role', s: '*role <user> <role>', a: ['role'] },
			{
				n: ['slowmode'],
				d: 'Set the slowmode of a channel',
				s: '*slowmode [time]',
				a: ['slowmode', 'sm']
			},
			{ n: ['warn'], d: 'warn a user', s: '*warn [user] <reason>', a: ['warn'] },
			{
				n: ['kick'],
				d: 'Kick users from your server',
				s: '*kick [user] <reason>',
				a: ['kick', 'yeet']
			}
		],
		suggestions: [
			{
				n: ['suggestion'],
				d: 'Entry point for the suggestions commands',
				s: '*suggestion <of> <deny> <edit> <view> <channel> <comment> <deniedchannel> <accept> <acomment> <chart> <top> <restore> <silentdelete> <acceptedchannel> <emojis> <suggest> <down> <suggestions> <startthreadbutton> <search>',
				a: ['suggestion', 'suggestioninfo', 'sug', 's']
			},
			{
				n: ['suggestion', 'accept'],
				d: 'Accept a suggestions',
				s: '*suggestion accept <suggestion> <reason>',
				a: ['accept', 'acceptsuggestion', 'done']
			},
			{
				n: ['suggestion', 'acceptedchannel'],
				d: 'Set the accepted channel',
				s: '*suggestion acceptedchannel <channel>',
				a: ['acceptedchannel']
			},
			{
				n: ['suggestion', 'acomment'],
				d: 'Comment on a suggestion without showing your identity',
				s: '*suggestion acomment <suggestion> <reason>',
				a: ['acomment', 'acommentsuggestion']
			},
			{
				n: ['suggestion', 'chart'],
				d: 'Displays the suggestions made per day',
				s: '*suggestion chart ',
				a: ['chart']
			},
			{
				n: ['suggestion', 'comment'],
				d: 'Comment on a suggestion',
				s: '*suggestion comment <suggestion> <reason>',
				a: ['comment', 'commentsuggestion']
			},
			{
				n: ['suggestion', 'deniedchannel'],
				d: 'Set the denied channel',
				s: '*suggestion deniedchannel <channel>',
				a: ['deniedchannel', 'denychannel']
			},
			{
				n: ['suggestion', 'deny'],
				d: 'deny a suggestion',
				s: '*suggestion deny [suggestion] <reason>',
				a: ['delsuggestion', 'deletesuggestion', 'deny', 'denysuggestion', 'delete']
			},
			{
				n: ['suggestion', 'down'],
				d: 'Displays the most down voted suggestions in this guild',
				s: '*suggestion down ',
				a: ['down', 'shittiestsuggestions']
			},
			{
				n: ['suggestion', 'edit'],
				d: 'Edit a suggestion',
				s: '*suggestion edit <suggestion> <content>',
				a: ['editsuggestion', 'edit']
			},
			{
				n: ['suggestion', 'emojis'],
				d: 'Set the emojis to be used in suggestions HAS TO BE CUSTOM ONES',
				s: '*suggestion emojis [emojis]',
				a: ['emojis', 'voteemojis']
			},
			{
				n: ['suggestion', 'restore'],
				d: 'Restore  a suggestion',
				s: '*suggestion restore <suggestion>',
				a: ['restore', 'restoresuggestion']
			},
			{
				n: ['suggestion', 'search'],
				d: 'Search for a suggestion',
				s: '*suggestion search [query]',
				a: ['search', 'searchsuggestion']
			},
			{
				n: ['suggestion', 'silentdelete'],
				d: 'Delete a sugggestion silently',
				s: '*suggestion silentdelete <suggestion>',
				a: ['silentdelete']
			},
			{
				n: ['suggestion', 'startthreadbutton'],
				d: 'Adds a button to suggestions to start a thread',
				s: '*suggestion startthreadbutton <msg>',
				a: ['startthreadbutton', 'thread']
			},
			{
				n: ['suggestion', 'suggestions'],
				d: 'Displays the top suggestions in this guild',
				s: '*suggestion suggestions [suggestions]',
				a: ['suggestions', 'list']
			},
			{
				n: ['suggestion', 'topsuggestions'],
				s: '*suggestion topsuggestions ',
				a: ['top', 'topsuggestions']
			},
			{
				n: ['suggestion', 'view'],
				d: 'view a suggestion',
				s: '*suggestion view [suggestion]',
				a: ['suggestion', 'suggestioninfo', 'sug', 's', 'view']
			},
			{ n: ['suggestion', 'blacklist'], s: '*suggestion blacklist [user]', a: ['blacklist'] },
			{
				n: ['suggestion', 'channel'],
				d: 'Set the channel suggestions will be send in',
				s: '*suggestion channel <channel>',
				a: ['suggestionschannel', 'channel', 'suggestionschannel', 'suggestionchannel']
			},
			{
				n: ['suggestion', 'suggest'],
				d: 'Suggest something',
				s: '*suggestion suggest [suggestion]',
				a: ['suggest', 'create']
			},
			{
				n: ['suggestion', 'of'],
				d: 'View the cool suggestions other users have made',
				s: '*suggestion of [user]',
				a: ['suggestionsof', 'my', 'of']
			}
		],
		threads: [
			{
				n: ['supportping'],
				d: 'Set a role to be pinged on every support thread',
				s: '*supportping <role>',
				a: ['supportping']
			},
			{
				n: ['threadsupport'],
				d: 'Enable threadsupport to make support easier #stafflife',
				s: '*threadsupport <thread>',
				a: ['threadsupport', 'threadsup', 'supportthread']
			},
			{ n: [null], s: '*yeetkid <member>', a: ['yeetkid', 'removekid'] }
		],
		vip: [
			{
				n: ['piratechannel'],
				d: 'no please noooooooooooO!',
				s: '*piratechannel ',
				a: ['piratechannel']
			},
			{ n: ['quote'], d: 'quote a message', s: '*quote <link>', a: ['quote', 'qt'] },
			{
				n: ['buttonroles'],
				d: 'Button reaction roles',
				s: '*buttonroles <roles>',
				a: ['buttonroles', 'reactionroles', 'rr', 'br']
			},
			{
				n: ['tag'],
				d: 'Display a tag',
				s: '*tag <all> <raw> <dtag> <view> <delete> <add>',
				a: ['tag', 't', 'addtag', 'tags']
			},
			{
				n: ['tag', 'add'],
				d: 'Add a tag',
				s: '*tag add <name> <content>',
				a: ['addtag', 'create', '+', 'create', '+=', 'update', 'add']
			},
			{
				n: ['tag', 'delete'],
				d: 'Delete a tag',
				s: '*tag delete <tag>',
				a: ['deletetag', 'deltag', 'delete', 'remove', 'del']
			},
			{
				n: ['tag', 'dtag'],
				d: 'Show a tag but also delete your message',
				s: '*tag dtag <tag>',
				a: ['dtag']
			},
			{ n: ['tag', 'raw'], d: "Shows a tag's raw data", s: '*tag raw <tag>', a: ['rawtag', 'raw'] },
			{ n: ['tag', 'view'], d: 'Shows a tag', s: '*tag view <tag>', a: ['tag', 'view'] },
			{
				n: ['tag', 'all'],
				d: 'Displays the tags in this server',
				s: '*tag all ',
				a: ['tags', 'all', 'list']
			},
			{
				n: ['temprole'],
				d: 'Give a user a role temporaily',
				s: '*temprole [user] [role] [time]',
				a: ['temprole']
			},
			{ n: ['uwuchannel'], d: 'no please noooooooooooO!', s: '*uwuchannel ', a: ['uwuchannel'] }
		],
		malware: [
			{
				n: ['report'],
				d: 'Report a malicous user',
				s: '*report [user] [reason] [evidence]',
				a: ['report']
			},
			{ n: ['list'], d: 'List reported users', s: '*list ', a: ['list'] },
			{
				n: ['feed'],
				d: 'Sends a message in your server when someone has gotten reported',
				s: '*feed <channel>',
				a: ['feed']
			}
		]
	};
</script>

<div class="border-2 border-cyan-300 rounded-lg w-full py-2">
	<h1 class="text-3xl text-cyan-500 w-full">Aethor</h1>

	<p class="w-full">
		Aethor is the best <a href="#suggestions" class="text-blue-900 font-bold">suggestions</a> bot
	</p>
	<p class="w-full">
		Discord-suggestions created using aethor will have buttens attached to them allowing users to
		vote on<a href="#suggestions" class="text-blue-900 font-bold"> suggestions</a>
	</p>
</div>
<div class="py-2" />
<img
	alt="aethor suggestion"
	class="border-2 border-cyan-500 rounded-lg"
	src="https://ascella.wtf/v2/ascella/view/jwI9ubO"
/>
<div class="py-2" />
<img
	alt="aethor delete"
	class="border-2 border-cyan-500 rounded-lg"
	src="https://ascella.wtf/v2/ascella/view/ruyLiSK"
/>

{#each Object.entries(commands) as [name, commands]}
	<div class="group-ac" id={name}>
		<div class="group-a">
			{name[0].toUpperCase() + name.slice(1)} Commands
		</div>
		<div class="grid-a">
			{#each commands as command}
				<div class="grid-item-a">
					<p class="text-xl" id={command.n.join('-')}>
						{command.s}
					</p>

					<p class="command-desc">
						{command.d || ''}
					</p>
				</div>
			{/each}
		</div>
	</div>
{/each}

<style lang="postcss">
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.group-ac {
		@apply py-4 grid grid-cols-1 gap-2;
	}
	.command-desc {
		@apply text-gray-800 dark:text-zinc-300 text-lg;
	}
	.grid-a {
		@apply grid grid-cols-1 gap-4;
	}
	.group-a {
		@apply text-purple-700 dark:text-emerald-500 text-2xl p-2 bg-zinc-300 dark:bg-slate-900 rounded-lg border-2;
	}
	.grid-item-a {
		@apply bg-white text-gray-900 dark:bg-slate-800 dark:text-zinc-200 p-4 rounded-lg border-2;
	}
</style>
