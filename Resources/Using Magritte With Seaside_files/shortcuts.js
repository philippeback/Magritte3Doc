

	var shortcutKeys = [];
	var shortcutElements = [];

	function resetShortcuts() {
		shortcutKeys = [];
		shortcutElements = [];
	}

	function addShortcut(shortcut, elementID) {
		var elem = document.getElementById(elementID);
		if ((elem.tagName == "INPUT" & (elem.type == "submit" || elem.type == "checkbox" || elem.type == "radio")) || elem.tagName == "A")
			{
			shortcutKeys[shortcutKeys.length] = shortcut;
			shortcutElements[shortcutElements.length] = elem;
			}
		else alert("Attempt to assign a shortcut (" + shortcut + ") to something that is not clickable");
	}

	function onKeyDown(event) {
		var keyname = "";
		var element;
		var nav;
		if (navigator.userAgent.indexOf("Safari") > 0)
			nav = "Safari";
		else if (navigator.product == "Gecko")
			nav = "Gecko";
		else
			nav = "IE";
		// cope with MS-IE
		if (event == null) event = window.event;
		if (event) {
			if (event.ctrlKey) keyname = keyname + "Ctrl-";
			if (event.altKey) keyname = keyname + "Alt-";
			if (event.metaKey) keyname = keyname + "Meta-";
			// cope with Netscape
			var keyCode = event.which;
			if (keyCode == null) keyCode = event.keyCode;
			if (keyCode == null) keyCode = event.charCode;
			if (keyCode != 0) {
				var character = String.fromCharCode(keyCode);
				character = character.toLowerCase();
				if (event.shiftKey) character = character.toUpperCase();
				// cope with special keys, designated with some logical names
				if (keyCode == 27) character = "Esc";
				if (keyCode == 8) character = "Backspace";
				if (keyCode == 9) character = "Tab";
				if (keyCode == 13) character = "Return";
				if (keyCode == 37) character = "Left";
				if (keyCode == 38) character = "Up";
				if (keyCode == 39) character = "Right";
				if (keyCode == 40) character = "Down";
				// cope with func-keys (some keys not intercepted for MS-IE)
				if ((keyCode >= 112) & (keyCode <= 123)) character = "F" + (keyCode - 112 + 1);
				for ( var x = 1 ; x <= shortcutKeys.length ; x++ ) {
					if (shortcutKeys[x-1] == keyname+character) {
						// alert("key=" + keyCode + " " + keyname + character);
						element = shortcutElements[x-1];
						if (element.tagName == "A" & nav != "IE") {
							if (element.onclick)
								element.onclick.call();
							else
								/* This does not work for anchor in IE */
								location.href = element.href;
						} else  {
							element.click();
						}
					}
				}
				return false;
			}
		}
	}

