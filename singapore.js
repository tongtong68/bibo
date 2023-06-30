// ==UserScript==
// @name         visitsingapore.com/booking-details
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  hello, world!
// @author       You
// @match        https://singaporewards.visitsingapore.com/en/experiences/booking-details
// @grant        none
// @require https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==

(function() {
    'use strict';

    // var PrefixContent = 'China (+86)'

    function setInputValue(inputElement, value) {
        let lastValue = inputElement.value;
        inputElement.value = value;
        let event = new Event('input', { bubbles: true });
        // hack React15
        event.simulated = true;
        // hack React16 内部定义了descriptor拦截value，此处重置状态
        let tracker = inputElement._valueTracker;
        if (tracker) {
          tracker.setValue(lastValue);
        }
        inputElement.dispatchEvent(event);
      }

      function setComboboxValue(inputElement, value) {
        inputElement.focus(); // 确保输入框获取焦点

        // 创建并触发一个键盘事件，模拟用户输入
        const event = new KeyboardEvent('keydown', { key: value, bubbles: true });
        inputElement.dispatchEvent(event);

        // 触发 change 事件，以便触发相应的行为
        inputElement.dispatchEvent(new Event('change'));
      }


function test() {
    var PrefixContent = 'China (+86)'
    var MobileContent = '15927195387'

    var Prefix = document.querySelector("#headlessui-combobox-input-\\:re\\:");
    var Mobile = document.querySelector("#mobileNumber");

    if (Prefix) {
        setInputValue(Prefix, PrefixContent);
    }
    if (Mobile) {
        setInputValue(Mobile, MobileContent);
    }
    console.log('test ')

    waitForKeyElements (
        "#headlessui-combobox-option-\\:rg\\:",
        activatePrefixDropdown
    );


}

function activatePrefixDropdown (jNode) {
    console.log('activatePrefixDropdown ' + jNode[0].id)
    // triggerMouseEvent (jNode[0], "click");

    triggerMouseEvent (jNode[0], "mouseover");
    triggerMouseEvent (jNode[0], "mousedown");
    triggerMouseEvent (jNode[0], "mouseup");

    
    // const buttonElement = $('[data-gti="review-booking-button"]');
    // if (buttonElement) {
    //     buttonElement.click();
    // }

    //-- Setup step 2.
    // waitForKeyElements (
    //     "ul.absolute inset-x-0 right-0 z-20 bg-white border-focus mt-2 max-h-[244px] max-w-[78vw] w-fit min-w-full overflow-auto no-scrollbar rounded-lg border-2 li span:contains('" + PrefixContent + "')",
    //     selectDesiredPrefixSize
    // );
}

function selectDesiredPrefixSize (jNode) {
    /*-- Because the selector for this node is vulnerable to false positives,
        we need an additional check here.
    */
        console.log('selectDesiredPrefixSize start')
    if ($.trim (jNode.text () ) === PrefixContent) {
        
        //-- This node needs a triplex event
        triggerMouseEvent (jNode[0], "mouseover");
        triggerMouseEvent (jNode[0], "mousedown");
        triggerMouseEvent (jNode[0], "mouseup");
        console.log('selectDesiredPrefixSize')
        //-- Setup steps 3 and 4.
        // waitForKeyElements (
        //     "div.footwear form.add-to-cart-form span.sizeDropdown a.selectBox "
        //     + "span.selectBox-label:contains('(" + targetShoeSize + ")')",
        //     waitForShoeSizeDisplayAndAddToCart
        // );
    }
}

function triggerMouseEvent (node, eventType) {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initEvent (eventType, true, true);
    node.dispatchEvent (clickEvent);
}


function fill_form() {
        console.log('start grab')
        var firstNameContent = "Tong";
        var lastNameContent = "Peng";
        var passportNumberContent = "E52647671"
        var confirmPassportNumberContent = "E52647671"
        var NationalityContent = 'CHINESE\/HONG\ KONG\/MACAO'
        var porContent = 'CHINA\, Guangzhou \/ Canton'
        var dobContent = '24 Jun 1993'
        var doaisContent = '1 Jul 2023'
        var dodfsContent = '20 Jul 2023'
        var fnContent = 'TR905'
        // var PrefixContent = 'China \(\+86\)'
        var PrefixContent = '\+86'
        var MobileContent = '15927195387'

        // var formElement = document.forms[0];


        var firstName = document.querySelector("#travellers\\.0\\.firstName");
        var lastName = document.querySelector("#travellers\\.0\\.lastName");
        var passportNumber = document.querySelector("#travellers\\.0\\.passportNumber");
        var confirmPassportNumber = document.querySelector("#travellers\\.0\\.confirmPassportNumber");
        var Nationality = document.querySelector("#headlessui-combobox-input-\\:r2\\:");
        var por = document.querySelector("#headlessui-combobox-input-\\:r8\\:");
        var dob = document.querySelector("#travellers\\.0\\.dateOfBirth");
        var doais = document.querySelector("#travellers\\.0\\.dateOfArrivalInSg");
        var dodfs = document.querySelector("#travellers\\.0\\.dateOfDepartureInSg");
        var fn = document.querySelector("#travellers\\.0\\.flightNumber");
        var Prefix = document.querySelector("#headlessui-combobox-input-\\:re\\:");
        var Mobile = document.querySelector("#mobileNumber");

        if (firstName) {
            setInputValue(firstName, firstNameContent);
        }
        if (lastName) {
            setInputValue(lastName, lastNameContent);
        }
        if (passportNumber) {
            setInputValue(passportNumber, passportNumberContent);
        }
        if (confirmPassportNumber) {
            setInputValue(confirmPassportNumber, confirmPassportNumberContent);
        }
        if (Nationality) {
            setInputValue(Nationality, NationalityContent);
        }
        if (por) {
            setInputValue(por, porContent);
        }
        if (dob) {
            setInputValue(dob, dobContent);
        }
        if (doais) {
            setInputValue(doais, doaisContent);
        }
        if (dodfs) {
            setInputValue(dodfs, dodfsContent);
        }
        if (fn) {
            setInputValue(fn, fnContent);
        }
        if (Prefix) {
            setComboboxValue(Prefix, PrefixContent);
        }
        if (Mobile) {
            setInputValue(Mobile, MobileContent);
        }

        const buttonElement = document.querySelector('[data-gti="review-booking-button"]');
        if (buttonElement) {
            buttonElement.click();
        }
}

    //跳转页面
    // fill_form()
    // test()


    $(document).ready(function() {
        test()
        // fill_form()


    });
})();