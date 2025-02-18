local isUIOpen = false
local camera = nil

function openUI()
    if not isUIOpen then 
        isUIOpen = true
        SetNuiFocus(true, true)
        SendNuiMessage(json.encode{
            action = 'open'
        })
    else
        isUIOpen = false
        SetNuiFocus(false, false)
        SendNuiMessage(json.encode{
            action = 'close'
        })
    end
end

function spawnPed()
    if pedSpawn then return end

    local hash = GetHashKey("a_m_o_acult_02")
    RequestModel(hash)

    while not HasModelLoaded(hash) do
        Wait(20)
    end

    ped = CreatePed(4, hash, 845.3752, -951.5170, 26.5211 - 1, 263.3360, false, true)
    SetBlockingOfNonTemporaryEvents(ped, true)
    SetEntityInvincible(ped, true)
    FreezeEntityPosition(ped, true)

    exports.ox_target:addLocalEntity(ped, {
        {
            name = 'ped_interaction',
            label = 'Ouvrir Le Black Market',
            icon = 'fa-solid fa-user',
            distance = 4.0, 
            onSelect = function()
                openUI()
                setCam()
            end
        }
    })

    SetModelAsNoLongerNeeded(hash)

    pedSpawn = true
end

Citizen.CreateThread(function()
    spawnPed()
    while true do
        if not isUIOpen then
            removeCam()
        end
        Citizen.Wait(0)
    end
end)

RegisterNuiCallback('closeall', function ()
    if isUIOpen then
        openUI()
    end
end)

RegisterNuiCallback('buy', function ()  
    if isUIOpen then
        TriggerServerEvent('give', 'tablette_ill', 800)
        openUI()
    end
end)

function setCam()
    camera = CreateCam("DEFAULT_SCRIPTED_CAMERA", true)
    SetCamCoord(camera, 846.6313, -951.4543, 28.0724-1)
    SetCamRot(camera, 0.0, 0.0, 92.1715, 2) 
    SetCamActive(camera, true)
    RenderScriptCams(true, false, 0, true, true)
end


function removeCam()
    if camera then
        RenderScriptCams(false, false, 0, true, true)
        DestroyCam(camera, false)
        camera = nil
    end
end