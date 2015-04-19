
	function swapDisplay(a, b) {
		var tmp = document.getElementById(a).style.display;
		document.getElementById(a).style.display = document.getElementById(b).style.display;
		document.getElementById(b).style.display = tmp;
	}

	function submitFormTriggeringCallback(formName, callbackKey, value) {
		if (value)
			{
				var ele = document.createElement("input");
				ele.type = "hidden";
				ele.name = callbackKey;
				ele.value = value;
				document.forms[formName].appendChild(ele)
			}
		submitForm(formName)
	}

	function submitForm(formName) {
		document.forms[formName].submit();
	}

	function chooseOther(select, hiddenId, p) {
		value = prompt(p);
		document.getElementById(hiddenId).value = value;
		select.options[select.options.length-1].text = value;
	}

	function enableChoice(enableID, disableID) {
		document.getElementById(enableID).disabled = false;
		document.getElementById(disableID).disabled = true;
	}

	function setFocus(elementId) {
		document.getElementById(elementId).focus();
	}

	function setSelection(elementId, start, stop) {
		var input = document.getElementById(elementId);
		input.focus();
		/* When stop parameter not supplied, all field is selected */
		if (!start) start = 1;
		if (!stop) stop = input.value.length + 1;
		if (typeof document.selection != "undefined") {
	    		/* Place selection in MS-IE */
	    		var range = document.selection.createRange();
	     	range.moveStart("character", start - 1);
	     	range.moveEnd("character", stop - start);
	 		range.select();
	  	} else if (typeof input.selectionStart != "undefined") {
		  	/* Place selection in Gecko browsers */
	    		input.selectionStart = start - 1;
	    		input.selectionEnd = stop - 1;
	  	} else {
	  		/* Other browsers, please feel free to implement */
			alert("unknown browser");
		}
	}

