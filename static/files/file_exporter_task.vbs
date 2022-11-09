Dim WinScriptHost
Set WinScriptHost = CreateObject("WScript.Shell")
WinScriptHost.Run Chr(34) & "C:\Program Files\eln_exporter\efw.exe" & Chr(34), 0
Set WinScriptHost = Nothing
