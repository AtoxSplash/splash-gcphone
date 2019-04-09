function TwitterAddMessage (source, message)
	local identifier = GetPlayerIdentifiers(source)[1]
	local xPlayer = ESX.GetPlayerFromIdentifier(identifier)

	local result = MySQL.Sync.fetchAll('SELECT firstname, lastname FROM users WHERE identifier = @identifier', {
		['@identifier'] = xPlayer.identifier
	})

	local handle = "@".. result[1].firstname.. "_".. result[1].lastname

	local Query = "INSERT INTO phone_twitter (`identifier`, `handle`, `message`) VALUES(@identifier, @handle, @message);"
	local Query2 = 'SELECT * from phone_twitter WHERE `id` = (SELECT LAST_INSERT_ID());'
	local Parameters = {
		['@identifier'] = identifier,
		['@handle'] = handle,
		['@message'] = message
	}
	MySQL.Async.fetchAll(Query .. Query2, Parameters, function (reponse)
		TriggerClientEvent('gcPhone:twitter_receive', -1, reponse[2][1])
	end)
end

RegisterServerEvent('gcPhone:twitter_addMessage')
AddEventHandler('gcPhone:twitter_addMessage', function(message)
  	TwitterAddMessage(source, message)
end)

function TwitterGetMessageChannel (cb)
  	MySQL.Async.fetchAll("SELECT * FROM phone_twitter ORDER BY time DESC LIMIT 100", {}, cb)
end

RegisterServerEvent('gcPhone:twitter_messages')
AddEventHandler('gcPhone:twitter_messages', function()
	local sourcePlayer = tonumber(source)

	TwitterGetMessageChannel(function (messages)
		TriggerClientEvent('gcPhone:twitter_messages_c', sourcePlayer, messages)
	end)
end)

TriggerEvent('es:addGroupCommand', 'deletetweet', "admin", function(source, args, user)
  	local sourcePlayer = tonumber(source)

  	MySQL.Async.execute('DELETE FROM phone_twitter WHERE identifier = @query OR handle = @query', {
		['@query'] = args[1]
	})

  	TriggerClientEvent("gcPhone:delete_twitter", sourcePlayer, args[1])
end, function(source, args, user)
  	TriggerClientEvent('chatMessage', source, "deletetweet", {255, 0, 0}, "Insufficienct permissions!")
end, {help = "Get position", params = {name = "Identifier or twitter handle", help = "Example: steam:110000107cb978f or @twitter_user"}})