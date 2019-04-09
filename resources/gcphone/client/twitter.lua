ESX = nil

Citizen.CreateThread(function()
    while ESX == nil do
        TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
        Citizen.Wait(0)
    end
end)

RegisterNetEvent("gcPhone:twitter_receive")
AddEventHandler("gcPhone:twitter_receive", function(message)
  SendNUIMessage({event = 'twitter_receive', message = message})
end)

RegisterNetEvent("gcPhone:twitter_messages_c")
AddEventHandler("gcPhone:twitter_messages_c", function(messages)
  SendNUIMessage({event = 'twitter_messages', messages = messages})
end)

RegisterNUICallback('twitter_addMessage', function(data, cb)
  TriggerServerEvent('gcPhone:twitter_addMessage', data.message)
end)

RegisterNUICallback('twitter_getMessages', function(cb)
  TriggerServerEvent('gcPhone:twitter_messages')
end)

RegisterNetEvent("gcPhone:delete_twitter")
AddEventHandler("gcPhone:delete_twitter", function(string)
  SendNUIMessage({event = 'twitter_delete', string})
end)