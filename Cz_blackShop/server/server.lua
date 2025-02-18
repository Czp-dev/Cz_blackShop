ESX = exports["es_extended"]:getSharedObject() 

RegisterNetEvent('give')
AddEventHandler('give', function(item, cost)
    local xPlayer = ESX.GetPlayerFromId(source)
    
    if xPlayer then

        if xPlayer.getMoney() >= cost then
            if xPlayer.canCarryItem(item, 1) then
                xPlayer.addInventoryItem(item, 1)
                xPlayer.removeMoney(cost)
                TriggerClientEvent('esx:showNotification', source, "Vous avez acheté ~b~1x " .. item .. "~s~ pour ~g~" .. cost .. "$")
            else
                TriggerClientEvent('esx:showNotification', source, "Vous n'avez ~r~pas assez de place~s~ dans votre inventaire !")
            end
        else
            TriggerClientEvent('esx:showNotification', source, "Vous n'avez ~r~pas assez d'argent~s~ !")
        end
    end
end)
