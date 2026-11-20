; Give the uninstaller a visible entry next to the app in the Start menu.
!macro customInstall
  CreateDirectory "$SMPROGRAMS\Verci"
  CreateShortCut "$SMPROGRAMS\Verci\Uninstall Verci.lnk" "$INSTDIR\Uninstall Verci.exe" "/currentuser"
!macroend

!macro customUnInstall
  Delete "$SMPROGRAMS\Verci\Uninstall Verci.lnk"
  RMDir "$SMPROGRAMS\Verci"
!macroend
