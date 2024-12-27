!function(e){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}(function(){function g(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}return function e(l){function C(e,n,o){var t;if("undefined"!=typeof document){if(1<arguments.length){if("number"==typeof(o=g({path:"/"},C.defaults,o)).expires){var r=new Date;r.setMilliseconds(r.getMilliseconds()+864e5*o.expires),o.expires=r}o.expires=o.expires?o.expires.toUTCString():"";try{t=JSON.stringify(n),/^[\{\[]/.test(t)&&(n=t)}catch(e){}n=l.write?l.write(n,e):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var i="";for(var c in o)o[c]&&(i+="; "+c,!0!==o[c]&&(i+="="+o[c]));return document.cookie=e+"="+n+i}e||(t={});for(var a=document.cookie?document.cookie.split("; "):[],s=/(%[0-9A-Z]{2})+/g,f=0;f<a.length;f++){var p=a[f].split("="),d=p.slice(1).join("=");this.json||'"'!==d.charAt(0)||(d=d.slice(1,-1));try{var u=p[0].replace(s,decodeURIComponent);if(d=l.read?l.read(d,u):l(d,u)||d.replace(s,decodeURIComponent),this.json)try{d=JSON.parse(d)}catch(e){}if(e===u){t=d;break}e||(t[u]=d)}catch(e){}}return t}}return(C.set=C).get=function(e){return C.call(C,e)},C.getJSON=function(){return C.apply({json:!0},[].slice.call(arguments))},C.defaults={},C.remove=function(e,n){C(e,"",g(n,{expires:-1}))},C.withConverter=e,C}(function(){})});
var eucookie_Cookies = Cookies.noConflict();

if (typeof gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
}

var cookieConsent = function(options) {
    var config = {
        clientId: null,
        backgroundColor  : 'rgb(47, 47, 47)',
        fontFamily: 'Helvetica, Arial, sans-serif',
        fontSize: '12px',
        fontColor: '#ffffff',
        position: 'bottomLeft',
        linkColor: '#bababa',
        buttonBackground: '#48a554',
        buttonTextColor: '#ffffff',
        rejectButton: false,
        rejectBackground: 'rgb(96, 96, 96)',
        rejectTextColor: '#fff',
        language: 'en',
        demo: false,
        hostUrl: 'https://www.eucookie.eu/',
        allowGtagApi: false,
        disablePrecheck: false
    };

    var root = this;

    /*
     * Constructor
     */
    this.construct = function(options){
        this.extend(config , options);
    };

    this.extend = function(a, b){
        for(var key in b)
            if(b.hasOwnProperty(key))
                a[key] = b[key];
        return a;
    }

    this.demo = function() {
        options = {demo: true}
        this.extend(config , options);
        this.run();
    }

    this.changeConsent = function() {
        eucookie_Cookies.remove('_altmrCookieConsent');
        this.run();
    }

    this.run = function() {
            if(config.clientId == null) {
                console.error('No clientId specified, please register on www.eucookie.eu.');
                return false;
            }

            var css_link = document.createElement('link');
            css_link.setAttribute('rel', 'stylesheet');
            css_link.setAttribute('type', 'text/css');
            css_link.setAttribute('href', config.hostUrl + 'public/gdpr-cookie-consent.css');
            document.head.appendChild(css_link);

            if(!eucookie_Cookies.get('_altmrCookieConsent') || config.demo===true) {
                var url = config.hostUrl + "gdpr/?clientId=" + config.clientId + '&host=' + window.location.hostname + '&lang=' + config.language + '&default=' + config.precheck;

                var request = new XMLHttpRequest();
                request.open('GET', url, true);

                request.onload = function() {
                    if (request.status >= 200 && request.status < 400) {
                        var data = request.responseText;
                        if(!data) {
                            console.error('Invalid clientId, please check your settings or register on www.eucookie.eu.');
                            return false;
                        }

                        if(config.allowGtagApi===true) {
                            // set default values
                            gtag('consent', 'default', {
                                'ad_storage': 'denied',
                                'analytics_storage': 'denied',
                                'functionality_storage' : 'granted',
                                'personalization_storage' : 'denied',
                                'security_storage' : 'granted'
                            });
                        }

                        docBody = document.body;
                        gdprDiv = document.createElement("div");
                        gdprDiv.innerHTML = data.trim();

                        var gdprCookieConsent = gdprDiv.getElementsByClassName('altamira-gdpr-cookie-consent');

                        gdprCookieConsent[0].style.backgroundColor = config.backgroundColor;
                        gdprCookieConsent[0].style.border = config.border;
                        gdprCookieConsent[0].style.fontFamily = config.fontFamily;
                        gdprCookieConsent[0].style.color = config.fontColor;
                        gdprCookieConsent[0].style.fontSize = config.fontSize;

                        if(config.position=='bottomLeft') {
                            gdprCookieConsent[0].style.left = '0px';
                            gdprCookieConsent[0].style.bottom = '0px';
                        } else if(config.position=='bottomRight') {
                            gdprCookieConsent[0].style.right = '0px';
                            gdprCookieConsent[0].style.bottom = '0px';
                        } else if(config.position=='topRight') {
                            gdprCookieConsent[0].style.right = '0px';
                            gdprCookieConsent[0].style.top = '0px';
                        } else if(config.position=='topLeft') {
                            gdprCookieConsent[0].style.left = '0px';
                            gdprCookieConsent[0].style.top = '0px';
                        }

                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-help-link')[0].style.color = config.linkColor;
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-help-link')[1].style.color = config.linkColor;
						gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-label')[0].style.color = config.fontColor;
						gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-label')[1].style.color = config.fontColor;
						gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-label')[2].style.color = config.fontColor;
						gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-label')[3].style.color = config.fontColor;
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-save')[0].style.backgroundColor = config.buttonBackground;
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-save')[0].style.color = config.buttonTextColor;
                        var reject = gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-reject');
                        if ( reject.length ) {
                            reject[0].style.display = config.rejectButton ? '' : 'none';
                            reject[0].style.backgroundColor = config.rejectBackground;
                            reject[0].style.color = config.rejectTextColor;
                        }
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-close')[0].style.display = config.rejectButton ? '' : 'none';
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-close')[0].style.backgroundColor = config.rejectBackground;
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-close')[0].style.setProperty( '--close-color', config.rejectTextColor );
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-paragraph')[0].style.color = config.fontColor;
                        gdprCookieConsent[0].getElementsByClassName('altamira-gdpr-cookie-consent-paragraph')[1].style.color = config.fontColor;
                        docBody.insertBefore(gdprDiv, docBody.firstChild);

                    } else {


                    }
                };

                request.onerror = function() {

                };

                request.send();

            } else {
                var consents = JSON.parse(eucookie_Cookies.get('_altmrCookieConsent'));

                if(config.allowGtagApi===true) {

                    if(consents.analytical==1) {
                        gtag('consent', 'update', {
                          'analytics_storage': 'granted'
                        });
                        dataLayer.push({'analytics_storage': 'granted'});
                    }

                    if(consents.marketing==1) {
                        gtag('consent', 'update', {
                          'ad_storage': 'granted'
                        });
                        dataLayer.push({'ad_storage': 'granted'});
                    }

                    if(consents.preferences==1) {
                        gtag('consent', 'update', {
                          'personalization_storage': 'granted'
                        });
                        dataLayer.push({'personalization_storage': 'granted'});
                    }

                    dataLayer.push({'event': 'eucookie'});

                }

                var allScripts = document.querySelectorAll('[data-cookie-if]');

                allScripts = Array.prototype.slice.call(allScripts, 0);

                allScripts.forEach(function(element) {
                    if(consents[element.getAttribute('data-cookie-if')]==1) {
                        if(element.getAttribute('src')) {
                            var addScript = document.createElement('script');
                            addScript.setAttribute('src', element.getAttribute('src'));
                            addScript.setAttribute('type', 'text/javascript');
                             document.head.appendChild(addScript);
                        } else {
                            var addScript = document.createElement('script');
                            addScript.innerHTML = element.innerHTML;
                            addScript.setAttribute('type', 'text/javascript');
                             document.head.appendChild(addScript);
                        }
                        element.outerHTML = "";
                        delete element;
                    }
                });
            }
    }

    this.storeConsent = function(hostUrl) {
        if(hostUrl=='') {
            hostUrl = 'https://www.eucookie.eu/';
        }

        if(!config.disablePrecheck) {
            document.getElementById('analytical').checked = 'checked';
            document.getElementById('marketing').checked = 'checked';
            document.getElementById('preferences').checked = 'checked';
        }

        var uuid = createGuid();
        var postData = serialize(document.getElementById('altamira-gdpr-cookie-consent-form'));
        postData += '&uuid=' + uuid + '&host=' + window.location.hostname + '&url=' + window.location.href;
        var request = new XMLHttpRequest();
        request.open('POST', hostUrl + 'gdpr/savesettings/', true);
        request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        request.send(postData);

        var params = postData.split("&");
        var resultArray = {};
        for (var i=0; i < params.length; i++) {
            resultArray[params[i].split("=")[0]] = params[i].split("=")[1];
        }
        var cookieArgs = { expires: 365 };
        if ( self !== top ) {
            cookieArgs.sameSite = 'none';
            cookieArgs.secure = true;
        }
        eucookie_Cookies.set('_altmrCookieConsent', JSON.stringify(resultArray), cookieArgs);
        var consents = resultArray;
        var allScripts = document.querySelectorAll('[data-cookie-if]');
    	allScripts = Array.prototype.slice.call(allScripts, 0);

        allScripts.forEach(function(element) {
            if(consents[element.getAttribute('data-cookie-if')]==1) {
                if(element.getAttribute('src')) {
                    var addScript = document.createElement('script');
                    addScript.setAttribute('src', element.getAttribute('src'));
                    addScript.setAttribute('type', 'text/javascript');
                    document.head.appendChild(addScript);
                } else {
                    var addScript = document.createElement('script');
                    addScript.innerHTML = element.innerHTML;
                    addScript.setAttribute('type', 'text/javascript');
                    document.head.appendChild(addScript);
                }
                element.outerHTML = "";
                delete element;
            }
        });

        if(config.allowGtagApi===true) {

            if(resultArray.analytical==1) {
                gtag('consent', 'update', {
                  'analytics_storage': 'granted'
                });
                dataLayer.push({'analytics_storage': 'granted'});
            }

            if(resultArray.marketing==1) {
                gtag('consent', 'update', {
                  'ad_storage': 'granted'
                });
                dataLayer.push({'ad_storage': 'granted'});
            }

            if(resultArray.preferences==1) {
                gtag('consent', 'update', {
                  'personalization_storage': 'granted'
                });
                dataLayer.push({'personalization_storage': 'granted'});
            }

            dataLayer.push({'event': 'eucookie'});

        }

        var consentDiv = document.getElementsByClassName('altamira-gdpr-cookie-consent');
        consentDiv[0].outerHTML = "";
        delete consentDiv[0];
        return false;
    }

    this.construct(options);

    this.changeAltamiraSettingCookies = function() {
        config.disablePrecheck = true;
        document.getElementById('altamira-gdpr-cookie-consent-save').innerHTML = document.getElementById('altamira-gdpr-cookie-consent-save').getAttribute('data-selected-wording');
        var block = document.getElementById('altamira-gdpr-cookie-settings-block');
        if (block.style.display === 'block') {
            block.style.display = 'none';
        } else {
            block.style.display = 'block';
        }
        return false;
    }

    this.rejectCookies = function() {
        config.disablePrecheck = true;
        document.getElementById('analytical').checked = '';
        document.getElementById('marketing').checked = '';
        document.getElementById('preferences').checked = '';

        document.getElementById('altamira-gdpr-cookie-consent-save').click();
        return false;
    }

}

function createGuid() { return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();}
function s4() { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1); }
function serialize(form){if(!form||form.nodeName!=="FORM"){return }var i,j,q=[];for(i=form.elements.length-1;i>=0;i=i-1){if(form.elements[i].name===""){continue}switch(form.elements[i].nodeName){case"INPUT":switch(form.elements[i].type){case"text":case"hidden":case"password":case"button":case"reset":case"submit":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"checkbox":case"radio":if(form.elements[i].checked){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value))}break;case"file":break}break;case"TEXTAREA":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"SELECT":switch(form.elements[i].type){case"select-one":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break;case"select-multiple":for(j=form.elements[i].options.length-1;j>=0;j=j-1){if(form.elements[i].options[j].selected){q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].options[j].value))}}break}break;case"BUTTON":switch(form.elements[i].type){case"reset":case"submit":case"button":q.push(form.elements[i].name+"="+encodeURIComponent(form.elements[i].value));break}break}}return q.join("&")};
