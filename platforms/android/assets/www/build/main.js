webpackJsonp([0],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__contact_us_contact_us__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__children_children__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__set_password_set_password__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(77);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, _state, _util, menu, push) {
        this.navCtrl = navCtrl;
        this._state = _state;
        this._util = _util;
        this.menu = menu;
        this.push = push;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__children_children__["a" /* ChildrenPage */];
        this.childrenPage = __WEBPACK_IMPORTED_MODULE_3__children_children__["a" /* ChildrenPage */];
        this.setPasswordPage = __WEBPACK_IMPORTED_MODULE_7__set_password_set_password__["a" /* SetPasswordPage */];
        this.contactUsPage = __WEBPACK_IMPORTED_MODULE_0__contact_us_contact_us__["a" /* ContactUsPage */];
    }
    HomePage.prototype.ionViewDidLoad = function () {
    };
    HomePage.prototype.goToPage = function (page) {
        this.rootPage = page;
        this.menu.close();
    };
    HomePage.prototype.logOut = function () {
        // Cookie.delete('token')
        var pushObject = this.push.init({});
        pushObject.unregister();
        globalToken = '';
        this._state.clearState();
        this._util.removeStorage('userProfile');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\home\home.html"*/'<ion-menu class="dark-bg" [content]="content">\n    <ion-header class="padding-10">\n        <!-- <ion-toolbar>\n            <ion-title>Menu</ion-title>\n        </ion-toolbar> -->\n        <ion-grid>\n            <ion-row>\n                <img src="assets/img/logo.png" style="height:200px" />\n            </ion-row>\n        </ion-grid>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item (click)="goToPage(childrenPage)">\n        Children\n      </button>\n            <button ion-item (click)="goToPage(setPasswordPage)">\n        Change Password\n      </button>\n            <button ion-item>\n        Contact Options\n      </button>\n            <button ion-item ion-item (click)="goToPage(contactUsPage)">\n        Contact us\n      </button>\n            <button ion-item (click)="logOut()">\n      Log Out\n      </button>\n        </ion-list>\n        <ion-grid class="padding-0">\n            <ion-row style="\n            position: absolute;\n            bottom: 10px;\n            align-self: center;\n        ">\n                <img src="assets/img/ecm-logo.png" />\n            </ion-row>\n        </ion-grid>\n    </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_state_state__["a" /* StateProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_utilities_utilities__["a" /* UtilitiesProvider */],
        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* MenuController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_apollo_apollo__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the SetPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetPasswordPage = (function () {
    function SetPasswordPage(navCtrl, navParams, apollo, _fb, _util, _state) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.apollo = apollo;
        this._fb = _fb;
        this._util = _util;
        this._state = _state;
        this.passwordForm = this._fb.group({
            password1: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
                ])],
            password2: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/)
                ])]
        });
        this.showMenuButton = false;
    }
    SetPasswordPage.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._util.getStorage('userProfile')
            .then(function (data) {
            if (data != null)
                _this.showMenuButton = true;
        });
    };
    SetPasswordPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad SetPasswordPage');
    };
    SetPasswordPage.prototype.nextStep = function () {
        var _this = this;
        var _a = this.passwordForm.controls, password1 = _a.password1, password2 = _a.password2;
        if (password1.value != password2.value) {
            this._util.alertMessage('Invalid Password', 'Password must match with re-type password');
        }
        else {
            var state = this._state.getState();
            this._util.loading('');
            this.apollo.setPassword(state['email'], password1.value)
                .subscribe(function (res) {
                _this._util.loaded();
                if (res.data['parentPasswordUpdate'] != null) {
                    if (!res.data['parentPasswordUpdate']['status']) {
                        _this._util.alertMessage('Failed!!!', 'Please contact to your company for assistance.');
                    }
                    else {
                        _this._util.setStorage('passFirstRegister', true);
                        _this._state.clearState();
                        _this._util.removeStorage('userProfile');
                        _this._util.alertMessage('Success!!!', 'You can use your email to login now.', 'checkImg');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                        globalToken = "";
                    }
                }
                else {
                    _this._util.alertMessage('Failed!!!', 'Please contact to your company for assistance.');
                }
            });
        }
    };
    return SetPasswordPage;
}());
SetPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-set-password',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\set-password\set-password.html"*/'<!--\n  Generated template for the SetPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle icon-only *ngIf="showMenuButton">\n            <ion-icon name=\'menu\'></ion-icon>\n          </button>\n        <!-- <ion-title>setPassword</ion-title> -->\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content class="main-bg">\n    <ion-grid>\n        <ion-row justify-content-center>\n            <img src="assets/img/logo.png" class="main-logo" />\n        </ion-row>\n        <form [formGroup]="passwordForm" novalidate>\n            <ion-row justify-content-center class="margin-top-15">\n                <ion-input class="input-box" type="password" name="password1" placeholder="Set Password" formControlName="password1"></ion-input>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-15">\n                <ion-input class="input-box" type="password" name="password2" placeholder="Re-type Password" formControlName="password2"></ion-input>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-10">\n                <button ion-button block color="sugar" [disabled]="passwordForm.invalid" (click)="nextStep()">Next</button>\n            </ion-row>\n        </form>\n    </ion-grid>\n    <ion-grid class="footer" ion-fixed>\n        <ion-row justify-content-center>\n            <div class="normal-text text-align-center">\n                <span>\n                  Your password must contain a minimum of 8 characters, with at least one uppercase letter,\n                  at least one lowercase letter and at least one number\n                </span>\n            </div>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\set-password\set-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_6__providers_apollo_apollo__["a" /* ApolloProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__["a" /* UtilitiesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_state_state__["a" /* StateProvider */]])
], SetPasswordPage);

//# sourceMappingURL=set-password.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_apollo_apollo__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__otp_otp__ = __webpack_require__(396);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, _fb, util, state, apollo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this.util = util;
        this.state = state;
        this.apollo = apollo;
        this.registerForm = this._fb.group({
            email: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
        // alert(this.navCtrl.canGoBack())
        if (this.navCtrl.canGoBack())
            this.showBackButton = true;
        else
            this.showBackButton = false;
        this.canSkipRegistered = this.navParams.get('canSkipRegistered');
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.skipRegister = function () {
        this.util.setStorage('passFirstRegister', true);
        this.state.clearState();
        this.util.removeStorage('userProfile');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* LoginPage */]);
    };
    RegisterPage.prototype.nextStep = function () {
        var _this = this;
        var email = this.registerForm.controls.email;
        if (email.value == '') {
            this.util.alertMessage('Invalid Email Address', 'Please input your email.');
            return false;
        }
        else if (!/^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)) {
            this.util.alertMessage('Invalid Email Address', 'Please check your email pattern.');
            return false;
        }
        this.util.loading('');
        this.util.prepareEmailVerify(email.value)
            .then(function (res) {
            // alert(res.data['token'])
            if (res.data['token'] == '') {
                _this.util.alertMessage('Invalid Email Address', 'The email address you have entered is not recognised. Please contact your company for assistance.');
            }
            else {
                globalToken = res.data['token'];
                // Cookie.set('token',res.data['token'])
                // alert(globalToken)
                setTimeout(function () {
                    _this.apollo.getParent(email.value)
                        .subscribe(function (res) {
                        var otp = Math.floor(Math.random() * 900000) + 100000;
                        _this.state.setState({ otp: otp, email: email.value });
                        var phone = res.data['parentGlobalSelect']['phone'];
                        _this.util.callSms(phone, 'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute, ' + otp)
                            .then(function (res) {
                            _this.util.loaded();
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__otp_otp__["a" /* OtpPage */], { phone_m: phone });
                        })
                            .catch(function (err) {
                            _this.util.alertMessage('Call SMS', err.message);
                            _this.util.loaded();
                        });
                    }, function (err) {
                        _this.util.alertMessage('Invalid Email Address', err.message);
                        _this.util.loaded();
                    });
                }, 1000);
            }
        });
        // this.apollo.getParent(email.value)
        // .subscribe(
        //   res => {
        //     // alert(res.data['parent'])
        //     if(res.data['parent'] != null) {
        //       var otp = Math.floor(Math.random() * 900000) + 100000;
        //       this.state.setState({otp:otp,email:email.value})
        //       var phone = res.data['parent']['phone_m']
        //       this.util.callSms(phone,'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute, ' + otp)
        //       .then((res)=>{
        //         // alert(res)
        //         this.util.loaded()
        //         this.navCtrl.push(OtpPage,{phone_m: phone})
        //       })
        //       .catch((err)=>{
        //         this.util.alertMessage('Call SMS',err.message)
        //         this.util.loaded()
        //       })
        //     }else{
        //       this.util.alertMessage('Invalid Email Address','The email address you have entered is not recognised. Please contact your company for assistance.')
        //     }
        //   },
        //   err => {
        //     // alert(err.message)
        //     this.util.alertMessage('Invalid Email Address',err.message)
        //     this.util.loaded()
        //   }
        // )
    };
    return RegisterPage;
}());
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header *ngIf="showBackButton">\n\n    <ion-navbar>\n        <!-- <ion-title>register</ion-title> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n    <ion-grid>\n        <ion-row justify-content-center>\n            <img src="assets/img/logo.png" class="main-logo" />\n        </ion-row>\n        <form [formGroup]="registerForm" novalidate>\n            <ion-row justify-content-center class="margin-top-15">\n                <ion-input class="input-box" type="email" placeholder="Email" formControlName="email"></ion-input>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-10">\n                <button ion-button block color="sugar" (click)="nextStep()">Next</button>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-5" *ngIf="canSkipRegistered">\n                <button ion-button block color="sugar" (click)="skipRegister()">Skip</button>\n            </ion-row>\n        </form>\n    </ion-grid>\n    <ion-grid class="footer" ion-fixed>\n        <ion-row justify-content-center>\n            <div class="normal-text text-align-center">\n                <span>Please enter the email address you have registered with your company and press next to continue</span>\n            </div>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utilities_utilities__["a" /* UtilitiesProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_state_state__["a" /* StateProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_apollo_apollo__["a" /* ApolloProvider */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 192;

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilitiesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(523);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// const SignInApi = 'http://localhost:3000/login'
// const SendSMSApi = 'http://localhost:3000/sendSMS'
// const EmailVerifyApi = 'http://localhost:3000/prepareEmailVerify'
var SignInApi = 'http://schoolsafe.sg.ecoachmanager.com/login';
var SendSMSApi = 'http://schoolsafe.sg.ecoachmanager.com/sendSMS';
var EmailVerifyApi = 'http://schoolsafe.sg.ecoachmanager.com/prepareEmailVerify';
/*
  Generated class for the UtilitiesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UtilitiesProvider = (function () {
    function UtilitiesProvider(alert, loader, storage) {
        this.alert = alert;
        this.loader = loader;
        this.storage = storage;
        this.alertItem = null;
        this.loaderItem = null;
    }
    UtilitiesProvider.prototype.signIn = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(SignInApi, { username: email, password: password });
    };
    UtilitiesProvider.prototype.prepareEmailVerify = function (email) {
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(EmailVerifyApi, { email: email });
    };
    UtilitiesProvider.prototype.alertMessage = function (title, message, iconClass) {
        if (iconClass === void 0) { iconClass = "closeImg"; }
        this.alertItem = this.alert.create({
            title: "<div class=\"" + iconClass + " pull-left\"></div><div class=\"pull-left margin-left-10 font-size-16\">" + title + "</div>",
            message: message,
            cssClass: 'alert-danger',
            buttons: ['OK']
        });
        this.alertItem.present();
    };
    UtilitiesProvider.prototype.notificationMessage = function (message) {
    };
    UtilitiesProvider.prototype.loading = function (message) {
        this.loaderItem = this.loader.create({
            content: message
        });
        this.loaderItem.present();
    };
    UtilitiesProvider.prototype.loaded = function () {
        if (this.loaderItem != null) {
            this.loaderItem.dismiss();
            this.loaderItem = null;
        }
    };
    UtilitiesProvider.prototype.callSms = function (phonenumber, msg) {
        // let smsAuthURL = `https://api.clickatell.com/http/sendmsg?user=${smsapi.username}&password=${smsapi.password}&api_id=${smsapi.apiid}&to=${phonenumber}&text=${msg}`
        // let smsCallback = ""
        // return this.http.get(smsAuthURL)
        // var xhr = new XMLHttpRequest();
        // xhr.open("GET" , smsAuthURL)
        // xhr.onreadystatechange = function(){
        //     if (xhr.readyState == 4 && xhr.status == 200) {
        //         console.log('success');
        //     }
        // };
        // xhr.send();
        var config = {
            headers: {
                'authorization': "Bearer " + globalToken,
                'Content-Type': 'application/json'
            }
        };
        var bodyParameters = JSON.stringify({
            "text": msg,
            "to": phonenumber
        });
        return __WEBPACK_IMPORTED_MODULE_3_axios___default.a.post(SendSMSApi, bodyParameters, config);
    };
    UtilitiesProvider.prototype.setStorage = function (key, value) {
        return this.storage.set(key, value);
    };
    UtilitiesProvider.prototype.getStorage = function (key) {
        return this.storage.get(key);
    };
    UtilitiesProvider.prototype.clearStorage = function () {
        return this.storage.clear();
    };
    UtilitiesProvider.prototype.removeStorage = function (key) {
        return this.storage.remove(key);
    };
    return UtilitiesProvider;
}());
UtilitiesProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
], UtilitiesProvider);

//# sourceMappingURL=utilities.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterSplashScreenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AfterSplashScreenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterSplashScreenPage = (function () {
    function AfterSplashScreenPage(navCtrl, navParams, _util, _state) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._util = _util;
        this._state = _state;
    }
    AfterSplashScreenPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // console.log('ionViewDidLoad AfterSplashScreenPage');
        this._util.loading('');
        this._util.getStorage('passFirstRegister')
            .then(function (data) {
            setTimeout(function () {
                _this._util.loaded();
                if (data != null) {
                    _this._util.getStorage('userProfile')
                        .then(function (data) {
                        if (data != null) {
                            _this._util.signIn(data['email'], data['password'])
                                .then(function (response) {
                                _this._util.loaded();
                                if (response.status == 200) {
                                    _this._state.setState(response.data.user);
                                    var userProfile = Object.assign({}, response.data.user, { password: data['password'] });
                                    _this._util.setStorage('userProfile', userProfile);
                                    globalToken = response.data.token;
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                                }
                                else if (response.status == 401) {
                                    globalToken = '';
                                    _this._util.alertMessage('Authenticate', 'Your password changed. Please contact your company for assistance.');
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                                }
                            })
                                .catch(function () {
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                            });
                        }
                        else {
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                        }
                    });
                }
                else {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */], { canSkipRegistered: true });
                }
            }, 1000);
        });
    };
    return AfterSplashScreenPage;
}());
AfterSplashScreenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-after-splash-screen',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\after-splash-screen\after-splash-screen.html"*/'<!--\n  Generated template for the AfterSplashScreenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>afterSplashScreen</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="main-bg">\n    <ion-grid>\n        <ion-row justify-content-center>\n            <img src="assets/img/logo.png" class="main-logo" />\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\after-splash-screen\after-splash-screen.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* StateProvider */]])
], AfterSplashScreenPage);

//# sourceMappingURL=after-splash-screen.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_apollo_apollo__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactUsPage = (function () {
    function ContactUsPage(navCtrl, navParams, _apollo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._apollo = _apollo;
        this.schoolData = {};
    }
    ContactUsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this._apollo.getSchoolContact()
            .subscribe(function (res) {
            if (res.data['schoolContact'] != null) {
                _this.schoolData = res.data['schoolContact'][0];
                console.log(_this.schoolData);
            }
        });
    };
    return ContactUsPage;
}());
ContactUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-contact-us',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\contact-us\contact-us.html"*/'<!--\n  Generated template for the ContactUsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n          <ion-icon name=\'menu\'></ion-icon>\n        </button>\n        <ion-title>Contact Us</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n    <ion-grid class="padding-left-20 padding-right-20" *ngIf="schoolData">\n        <ion-row justify-content-center class="margin-top-40">\n            <img src="assets/img/logo.png" class="contact-logo" />\n        </ion-row>\n        <ion-row class="margin-top-30 font-size-5-vw normal-text">\n            <div>\n                {{schoolData.name}}\n            </div>\n        </ion-row>\n        <ion-row class="margin-top-20 font-size-4-vw normal-text">\n            <ion-col col-1>\n                <ion-icon ios="ios-home" md="ios-home"></ion-icon>\n            </ion-col>\n            <ion-col col-11>\n                <div>\n                    {{schoolData.address}}\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row class="margin-top-0 font-size-4-vw normal-text">\n            <ion-col col-1>\n                <ion-icon ios="ios-call" md="ios-call"></ion-icon>\n            </ion-col>\n            <ion-col col-11>\n                <div>\n                    {{schoolData.phone}}\n                </div>\n            </ion-col>\n        </ion-row>\n        <ion-row class="margin-top-40">\n            <a ion-button block icon-start color="sugar" href="tel:{{schoolData.phone}}">\n                <ion-icon ios="ios-call" md="ios-call" class="margin-right-10"></ion-icon> Call Us\n            </a>\n        </ion-row>\n        <ion-row class="margin-top-5">\n            <a ion-button block icon-start color="sugar" href="mailto:{{schoolData.email}}">\n                <ion-icon ios="ios-mail" md="ios-mail" class="margin-right-10"></ion-icon> Email Us\n            </a>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\contact-us\contact-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_apollo_apollo__["a" /* ApolloProvider */]])
], ContactUsPage);

//# sourceMappingURL=contact-us.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrenPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_apollo_apollo__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_animations__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tracking_tracking__ = __webpack_require__(395);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { Cookie } from 'ng2-cookies/ng2-cookies';

var ChildrenPage = (function () {
    // loading: boolean
    function ChildrenPage(navCtrl, navParams, _util, apollo, _state) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._util = _util;
        this.apollo = apollo;
        this._state = _state;
        // this.loading = true
        this.arrowIcon = [];
        this.showPassengerRoute = [];
        this.passengerBySchool = [];
        this.passengerRoutes = [];
        this._moment = __WEBPACK_IMPORTED_MODULE_5_moment__;
        this._passengerRoutesData = [];
    }
    ChildrenPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad ChildrenPage');
        this.loadPassengers();
    };
    // doRefresh(refresher) {
    //   var state = this._state.getState()
    //   this.apollo.getParentPassengers(state['parent_id'])
    //   .subscribe(
    //     res => {
    //       this.passengers = res.data['parentPassenger']
    //       this.passengers.forEach(()=>{this.arrowIcon.push('ios-arrow-back')})
    //     }
    //   )
    // }
    ChildrenPage.prototype.loadPassengers = function () {
        var _this = this;
        this._util.loading('');
        setTimeout(function () {
            var state = _this._state.getState();
            _this.apollo.getParentPassengers(state['email'])
                .subscribe(function (res) {
                _this._util.loaded();
                // this.loading = res.loading
                _this.passengerBySchool = res.data['parentPassengers'];
                _this.passengerBySchool.forEach(function (school) {
                    school.passengers.map(function (item) {
                        _this.arrowIcon.push('ios-arrow-back');
                        _this.showPassengerRoute.push(false);
                    });
                });
            }, function (err) {
                _this._util.loaded();
            });
        }, 500);
    };
    ChildrenPage.prototype.toggleDetail = function (index) {
        this.arrowIcon[index] = (this.arrowIcon[index] == 'ios-arrow-down') ? 'ios-arrow-back' : 'ios-arrow-down';
        this.showPassengerRoute[index] = !this.showPassengerRoute[index];
        // if(this.arrowIcon[index] == 'ios-arrow-down') {
        //   if(this.passengerRoutes[index] == undefined) {
        // this._util.removeStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`)
        // this._util.getStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`)
        // .then((data)=>{
        //   if(data != null) {
        //     this.passengerRoutes[index] = data
        //   }
        //   else {
        //     this._util.loading('')
        //     this.apollo.getPassengerRouteToday(this.passengers[index].passenger_id)
        //     .subscribe(
        //       res => {
        //         if(res.data['passengerRouteToday'] != null) {
        //           this.passengerRoutes[index] = res.data['passengerRouteToday']
        //           // this._util.setStorage(`passenger_${this.passengers[index].passenger_id}_date_${this._moment().format('DD/MM/YYYY')}`,res.data['passengerRouteToday'])
        //         }
        //         this._util.loaded()
        //       }
        //     )
        //   }
        // })
        // this._util.loading('')
        // if(this._passengerRoutesData[index]) {
        //   this._passengerRoutesData[index].refetch()
        //   this._passengerRoutesData[index].subscribe(
        //     res => {
        //       if(res.data['passengerRouteToday'] != null) {
        //         this.passengerRoutes[index] = res.data['passengerRouteToday']
        //       }
        //       this._util.loaded()
        //     }
        //   )
        // }else{
        //   this._passengerRoutesData[index] = this.apollo.getPassengerRouteToday(this.passengers[index].passenger_id)
        //   this._passengerRoutesData[index].subscribe(
        //     res => {
        //       if(res.data['passengerRouteToday'] != null) {
        //         this.passengerRoutes[index] = res.data['passengerRouteToday']
        //       }
        //       this._util.loaded()
        //     }
        //   )
        // }
        //   }
        // }else{
        //   this.passengerRoutes[index] = undefined
        // }
    };
    ChildrenPage.prototype.peroidText = function (peroid) {
        if (peroid == 'current')
            return 'Currrent Journey';
        else if (peroid == 'next')
            return 'Next Journey';
        else
            return 'Previous Journey';
    };
    ChildrenPage.prototype.checkRouteLog = function (routeLog, route_type) {
        // should have only 1 row
        // console.log(routeLog)
        // return false;
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == route_type); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    ChildrenPage.prototype.wrongBoarding = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == 1 && route.log_type_code == 3); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    ChildrenPage.prototype.wrongAlighting = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == 0 && route.log_type_code == 5); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    ChildrenPage.prototype.showWrongPickUp = function (routeDetail) {
        if (routeDetail['passenger_log'].length > 0) {
            var log = routeDetail['passenger_log'].filter(function (route) { return (route.route_type == 1 && route.log_type_code == 3); });
            return log[0].address.collection;
        }
        else {
            return 'N/A';
        }
    };
    ChildrenPage.prototype.showWrongDropOff = function (routeDetail) {
        if (routeDetail['passenger_log'].length > 0) {
            var log = routeDetail['passenger_log'].filter(function (route) { return (route.route_type == 0 && route.log_type_code == 5); });
            return log[0].address.destination;
        }
        else {
            return 'N/A';
        }
    };
    ChildrenPage.prototype.showActualTime = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return route.route_type == 1; });
            return this._moment(log[0]['date_time_scan'], 'DD-MM-YYYY HH:mm:ss').format('HH:mm');
        }
        else {
            return 'N/A';
        }
    };
    ChildrenPage.prototype.showAlightingTime = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return route.route_type == 0; });
            return this._moment(log[0]['date_time_scan'], 'DD-MM-YYYY HH:mm:ss').format('HH:mm');
        }
        else {
            return 'N/A';
        }
    };
    // wrongPickUp(routeLog: Array<any>) {
    //   if(routeLog.length > 0) {
    //     var log = routeLog.filter((route)=>route.route_type == 1 && route.log_type_code == 2);
    //     return log[0]['address'] || ''
    //   }else{
    //     return ''
    //   }
    // }
    // wrongPickUpTime(routeLog: Array<any>){
    //   if(routeLog.length > 0) {
    //     var log = routeLog.filter((route)=>route.route_type == 1 && route.log_type_code == 2);
    //     var datetime = log[0]['date_time_scan'].split(' ')
    //     return datetime[1].substr(0, datetime[1].length - 3) || ''
    //   }else {
    //     return ''
    //   }
    // }
    ChildrenPage.prototype.goToTracking = function (routeData, passenger) {
        // console.log(routeData)
        // console.log(passenger)
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tracking_tracking__["a" /* TrackingPage */], { routeData: routeData, passenger: passenger });
    };
    return ChildrenPage;
}());
ChildrenPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-children',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\children\children.html"*/'<!--\n  Generated template for the ChildrenPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <button ion-button menuToggle icon-only>\n          <ion-icon name=\'menu\'></ion-icon>\n        </button>\n        <ion-title>Children</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <!-- <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content>\n        </ion-refresher-content>\n    </ion-refresher> -->\n    <ion-grid class="padding-0" *ngFor="let items of passengerBySchool">\n        <!-- <ion-row justify-content-start class="schoolLabel padding-left-10">\n            <ion-icon ios="ios-school" md="ios-school" class="margin-right-10"></ion-icon>\n            <div>{{items.school_name}}</div>\n        </ion-row> -->\n        <ion-grid class="padding-0" *ngFor="let item of items.passengers;let i = index">\n            <ion-row [@fadeInAnimation]="" class="childList" (click)="toggleDetail(i)">\n                <ion-col class="text-align-right">\n                    <ion-icon ios="ios-person" md="ios-person"></ion-icon>\n                </ion-col>\n                <ion-col class="text-align-center">\n                    <div>{{item.first_name}} {{item.surname}}</div>\n                </ion-col>\n                <ion-col class="text-align-right">\n                    <ion-icon class="margin-right-10" [ios]="arrowIcon[i]" [md]="arrowIcon[i]"></ion-icon>\n                </ion-col>\n            </ion-row>\n            <ion-row [@fadeInAnimation]="" *ngFor="let route of item.routeToday;let j = index">\n                <ion-grid class="padding-0 journey-box" *ngIf="showPassengerRoute[i]" (click)="goToTracking(route,item)">\n                    <ion-row justify-content-between [ngClass]="{\n                \'normal-text\':true ,\n                \'current-movement\': route.peroid == \'current\',\n                \'previous-movement\': route.peroid == \'previous\',\n                \'next-movement\': route.peroid == \'next\'\n              }">\n                        <div>\n                            <ion-icon ios="md-bus" md="md-bus"></ion-icon>\n                            <span>{{peroidText(route.peroid)}}</span>\n                        </div>\n                        <div>\n                            <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                            <span>{{route.date_today}}</span>\n                        </div>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-4 class="silver-box">\n                            <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n                            <span>Pick Up</span>\n                        </ion-col>\n                        <ion-col col-8>\n                            <span>{{route.collection_address.address}}</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="wrongBoarding(route.collection_address.passenger_log)">\n                        <ion-grid class="padding-0">\n                            <ion-row>\n                                <ion-col class="padding-0">\n                                    <div class="red-box">Wrong Pick Up</div>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col class="padding-0">\n                                    <div class="red-text padding-10">\n                                        {{showWrongPickUp(route.collection_address)}}\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-row>\n                    <ion-row>\n                        <ion-col col-4 class="silver-box">\n                            <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n                            <span>Drop Off</span>\n                        </ion-col>\n                        <ion-col col-8>\n                            <span>{{route.destination_address.address}}</span>\n                        </ion-col>\n                    </ion-row>\n                    <ion-row *ngIf="wrongAlighting(route.destination_address.passenger_log)">\n                        <ion-grid class="padding-0">\n                            <ion-row>\n                                <ion-col class="padding-0">\n                                    <div class="red-box">Wrong Drop Off</div>\n                                </ion-col>\n                            </ion-row>\n                            <ion-row>\n                                <ion-col class="padding-0">\n                                    <div class="red-text padding-10">\n                                        {{showWrongDropOff(route.destination_address)}}\n                                    </div>\n                                </ion-col>\n                            </ion-row>\n                        </ion-grid>\n                    </ion-row>\n                    <ion-row justify-content-between class="silver-box">\n                        <div>\n                            <span>Scheduled Boarding Time</span>\n                        </div>\n                        <div>\n                            <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                            <span>{{route.collection_address.time_start}}</span>\n                        </div>\n                    </ion-row>\n                    <ion-row justify-content-between [ngClass]="{\'red-text\':wrongBoarding(route.collection_address.passenger_log),\'silver-box\':true}" *ngIf="checkRouteLog(route.collection_address.passenger_log , 1)">\n                        <div>\n                            <span>Actual Boarding Time</span>\n                        </div>\n                        <div>\n                            <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                            <span>{{showActualTime(route.collection_address.passenger_log)}}</span>\n                        </div>\n                    </ion-row>\n                    <ion-row justify-content-between class="silver-box">\n                        <div>\n                            <span>Scheduled Alighting Time</span>\n                        </div>\n                        <div>\n                            <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                            <span>{{route.destination_address.time_end}}</span>\n                        </div>\n                    </ion-row>\n                    <ion-row justify-content-between [ngClass]="{\'red-text\':wrongAlighting(route.destination_address.passenger_log),\'silver-box\':true}" *ngIf="checkRouteLog(route.destination_address.passenger_log , 0)">\n                        <div>\n                            <span>Actual Alighting Time</span>\n                        </div>\n                        <div>\n                            <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                            <span>{{showAlightingTime(route.destination_address.passenger_log)}}</span>\n                        </div>\n                    </ion-row>\n                </ion-grid>\n            </ion-row>\n        </ion-grid>\n    </ion-grid>\n</ion-content>\n\n\n<!-- <ng-template #loaderBox>\n    <div>Loading...</div>\n</ng-template> -->'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\children\children.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["i" /* trigger */])('fadeInAnimation', [
                // route 'enter' transition
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':enter', [
                    // css styles at start of transition
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }),
                    // animation and styles at end of transition
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["h" /* transition */])(':leave', [
                    // css styles at start of transition
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 1 }),
                    // animation and styles at end of transition
                    Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_6__angular_animations__["g" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_apollo_apollo__["a" /* ApolloProvider */],
        __WEBPACK_IMPORTED_MODULE_3__providers_state_state__["a" /* StateProvider */]])
], ChildrenPage);

//# sourceMappingURL=children.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the StateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var StateProvider = (function () {
    function StateProvider() {
        this.state = {};
        // this.state = new Subject<any>()
    }
    StateProvider.prototype.setState = function (data) {
        // setTimeout(()=>this.state.next(data),0)
        this.state = Object.assign({}, this.state, data);
    };
    StateProvider.prototype.getState = function () {
        return this.state;
    };
    StateProvider.prototype.clearState = function () {
        this.state = {};
    };
    return StateProvider;
}());
StateProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StateProvider);

//# sourceMappingURL=state.js.map

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApolloProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_angular__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_graphql_tag__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import * as md5 from 'md5';
// import * as moment from 'moment';
/*
  Generated class for the ApolloProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var setPassword = (_a = ["\nmutation parentPasswordUpdate($input: UpdatePasswordInput!) {\n  parentPasswordUpdate(input: $input) {\n    msg\n    status\n  }\n}\n"], _a.raw = ["\nmutation parentPasswordUpdate($input: UpdatePasswordInput!) {\n  parentPasswordUpdate(input: $input) {\n    msg\n    status\n  }\n}\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_a));
var setPushToken = (_b = ["\n  mutation parentPushTokenCreate($input: CreateParentPushTokenInput!) {\n    parentPushTokenCreate(input: $input) {\n      msg\n      status\n    }\n  }\n"], _b.raw = ["\n  mutation parentPushTokenCreate($input: CreateParentPushTokenInput!) {\n    parentPushTokenCreate(input: $input) {\n      msg\n      status\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_b));
var getParent = (_c = ["\nquery parentGlobalSelect($email: String!) {\n  parentGlobalSelect(email: $email) {\n    phone\n  }\n}\n"], _c.raw = ["\nquery parentGlobalSelect($email: String!) {\n  parentGlobalSelect(email: $email) {\n    phone\n  }\n}\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_c));
var getParentPassenger = (_d = ["\n  query parentPassengers($email: String!) {\n    parentPassengers(email: $email){\n      school_name\n      passengers {\n        passenger_id\n        first_name\n        surname\n        routeToday {\n          j_id\n          collection_address {\n            time_start\n            progress\n            address\n            latlng\n            passenger_log {\n              log_type_code\n              route_type\n              date_time_scan\n              address {\n                collection\n                destination\n              }\n            }\n          }\n          destination_address {\n            time_end\n            progress\n            address\n            latlng\n            passenger_log {\n              log_type_code\n              route_type\n              date_time_scan\n              address {\n                collection\n                destination\n              }\n            }\n          }\n          peroid\n          date_today\n          extra_address {\n            movement_order\n            latlng\n          }\n          tracking {\n            lat\n            lng\n            timestamp\n            j_id\n          }\n        }\n      }\n    }\n  }\n"], _d.raw = ["\n  query parentPassengers($email: String!) {\n    parentPassengers(email: $email){\n      school_name\n      passengers {\n        passenger_id\n        first_name\n        surname\n        routeToday {\n          j_id\n          collection_address {\n            time_start\n            progress\n            address\n            latlng\n            passenger_log {\n              log_type_code\n              route_type\n              date_time_scan\n              address {\n                collection\n                destination\n              }\n            }\n          }\n          destination_address {\n            time_end\n            progress\n            address\n            latlng\n            passenger_log {\n              log_type_code\n              route_type\n              date_time_scan\n              address {\n                collection\n                destination\n              }\n            }\n          }\n          peroid\n          date_today\n          extra_address {\n            movement_order\n            latlng\n          }\n          tracking {\n            lat\n            lng\n            timestamp\n            j_id\n          }\n        }\n      }\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_d));
// const getPassengerRouteToday = gql`
//   query passengerRouteToday($passenger_id: Int!) {
//     passengerRouteToday(passenger_id: $passenger_id) {
//       j_id
//       collection_address {
//         time_start
//         progress
//         address
//         latlng
//         passenger_log {
//           log_type_code
//           route_type
//           date_time_scan
//           address {
//             collection
//             destination
//           }
//         }
//       }
//       destination_address {
//         time_end
//         progress
//         address
//         latlng
//         passenger_log {
//           log_type_code
//           route_type
//           date_time_scan
//           address {
//             collection
//             destination
//           }
//         }
//       }
//       peroid
//       date_today
//       extra_address {
//         movement_order
//         latlng
//       }
//       tracking {
//         lat
//         lng
//         timestamp
//         j_id
//       }
//     }
//   }
// `;
// const watchTracking = gql`
//   query watchTracking($j_id: Int!) {
//     watchTracking(j_id: $j_id) {
//       lat
//       lng
//       timestamp
//       j_id
//     }
//   }
// `;
var schoolContact = (_e = ["\n  query schoolContact {\n    schoolContact {\n      name\n      address\n      phone\n      email\n    }\n  }\n"], _e.raw = ["\n  query schoolContact {\n    schoolContact {\n      name\n      address\n      phone\n      email\n    }\n  }\n"], __WEBPACK_IMPORTED_MODULE_2_graphql_tag___default()(_e));
// const PARENT_APP_KEY = md5('parent_voova_' + moment().utc().format('DD-MM-YYYY'))
var ApolloProvider = (function () {
    function ApolloProvider(apollo) {
        this.apollo = apollo;
        // console.log('Hello ApolloProvider Provider');
    }
    ApolloProvider.prototype.getParent = function (email) {
        return this.apollo.watchQuery({
            query: getParent,
            variables: {
                email: email
            }
        });
    };
    ApolloProvider.prototype.setPassword = function (email, password) {
        return this.apollo.mutate({
            mutation: setPassword,
            variables: {
                input: {
                    email: email,
                    password: password
                }
            }
        });
    };
    ApolloProvider.prototype.getParentPassengers = function (email) {
        return this.apollo.watchQuery({
            query: getParentPassenger,
            variables: {
                email: email
            }
        });
    };
    // getPassengerRouteToday(passenger_id: number) {
    //   return this.apollo.watchQuery({
    //     query:getPassengerRouteToday ,
    //     variables: {
    //       passenger_id
    //     }
    //   })
    // }
    // trackingVehicle(j_id: number) {
    //   return this.apollo.watchQuery({
    //     query: watchTracking,
    //     pollInterval: 5000,
    //     variables: {
    //       j_id
    //     }
    //   })
    // }
    ApolloProvider.prototype.setPushToken = function (push_token) {
        return this.apollo.mutate({
            mutation: setPushToken,
            variables: {
                input: {
                    push_token: push_token
                }
            }
        });
    };
    ApolloProvider.prototype.getSchoolContact = function () {
        return this.apollo.query({
            query: schoolContact
        });
    };
    return ApolloProvider;
}());
ApolloProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_apollo_angular__["a" /* Apollo */]])
], ApolloProvider);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=apollo.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrackingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_apollo_apollo__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_animations__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TrackingPage = (function () {
    function TrackingPage(navCtrl, navParams, _util, _apollo) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._util = _util;
        this._apollo = _apollo;
        this.routeData = {};
        this.routeData = Object.assign({}, this.navParams.data.routeData);
        // this.routeData = this.navParams.data.routeData
        // console.log(this.routeData)
        // console.log(Object.getOwnPropertyDescriptor(this.routeData,'tracking'))
        this.routes = [];
        this.routes.push(this.routeData);
        this.passenger = this.navParams.data.passenger;
        this.arrowIcon = "ios-arrow-back";
        this.showJourney = false;
        this._moment = __WEBPACK_IMPORTED_MODULE_4_moment__;
    }
    TrackingPage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad TrackingPage');
    };
    TrackingPage.prototype.toggleShowJourney = function () {
        this.arrowIcon = (this.arrowIcon == 'ios-arrow-down') ? 'ios-arrow-back' : 'ios-arrow-down';
        if (this.arrowIcon == 'ios-arrow-down')
            this.showJourney = true;
        else
            this.showJourney = false;
    };
    TrackingPage.prototype.ngAfterViewInit = function () {
        this.loadMap();
    };
    TrackingPage.prototype.ionViewDidLeave = function () {
        for (var i = 0; i < this.markerArray.length; i++) {
            this.markerArray[i].setMap(null);
        }
        this.map = null;
    };
    TrackingPage.prototype.showSteps = function (directionResult) {
        var _this = this;
        var myRoute = directionResult.routes[0].legs;
        if (myRoute.length == 1) {
            var marker = new google.maps.Marker({
                position: myRoute[0].start_location,
                map: this.map,
                icon: 'assets/img/bus-stop-icon-blue.png'
            });
            this.markerArray.push(marker);
            marker = new google.maps.Marker({
                position: myRoute[0].end_location,
                map: this.map,
                icon: 'assets/img/bus-stop-icon.png'
            });
            this.markerArray.push(marker);
        }
        else if (myRoute.length > 1) {
            myRoute.forEach(function (route, index) {
                var icon = 'assets/img/bus-stop-icon-black.png';
                var marker = null;
                if (index == 0) {
                    marker = new google.maps.Marker({
                        position: route.start_location,
                        map: _this.map,
                        icon: 'assets/img/bus-stop-icon-blue.png'
                    });
                    _this.markerArray.push(marker);
                    marker = new google.maps.Marker({
                        position: route.end_location,
                        map: _this.map,
                        icon: icon
                    });
                    _this.markerArray.push(marker);
                }
                else if (index == myRoute.length - 1) {
                    marker = new google.maps.Marker({
                        position: route.start_location,
                        map: _this.map,
                        icon: icon
                    });
                    _this.markerArray.push(marker);
                    marker = new google.maps.Marker({
                        position: route.end_location,
                        map: _this.map,
                        icon: 'assets/img/bus-stop-icon.png'
                    });
                    _this.markerArray.push(marker);
                }
                else {
                    marker = new google.maps.Marker({
                        position: route.start_location,
                        map: _this.map,
                        icon: icon
                    });
                    _this.markerArray.push(marker);
                    marker = new google.maps.Marker({
                        position: route.end_location,
                        map: _this.map,
                        icon: icon
                    });
                    _this.markerArray.push(marker);
                }
            });
        }
    };
    TrackingPage.prototype.loadMap = function () {
        var _this = this;
        var element = this.mapElement.nativeElement;
        var directionsService = new google.maps.DirectionsService;
        var latlng = this.routeData.collection_address.latlng;
        var Latlng = new google.maps.LatLng(parseFloat(latlng.split(',')[0]), parseFloat(latlng.split(',')[1]));
        this.markerArray = [];
        this.map = new google.maps.Map(element, {
            center: Latlng,
            zoom: 8
        });
        var rendererOptions = {
            map: this.map,
            suppressMarkers: true
        };
        var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
        directionsService.route({
            origin: this.routeData.collection_address.latlng,
            destination: this.routeData.destination_address.latlng,
            waypoints: this.routeData.extra_address.map(function (extra) {
                return {
                    location: extra.latlng
                };
            }),
            optimizeWaypoints: true,
            travelMode: 'DRIVING'
        }, function (response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                _this.showSteps(response);
                if (_this.routeData.tracking != null) {
                    var vehicleMarker = new google.maps.Marker({
                        position: new google.maps.LatLng(_this.routeData.tracking.lat, _this.routeData.tracking.lng),
                        map: _this.map,
                        icon: 'assets/img/green.png'
                    });
                }
                // this.tracking = this._apollo.trackingVehicle(this.routeData.j_id)
                // this.tracking.subscribe(trackingData=>{
                //     if(trackingData.data['watchTracking'] != null) {
                //       this.routeData.tracking = trackingData.data['watchTracking']
                //       vehicleMarker.setMap(null)
                //       vehicleMarker = null
                //       vehicleMarker = new google.maps.Marker({
                //         position: new google.maps.LatLng(this.routeData.tracking.lat,this.routeData.tracking.lng),
                //         map: this.map,
                //         icon: 'assets/img/green.png'
                //       })
                //     }
                //   // Object.defineProperty(this.routeData, "tracking", {value: trackingData.data['watchTracking'], configurable: true});
                //   }
                // )
            }
            else {
                _this._util.alertMessage('Map Issue', 'Directions request failed due to ' + status);
            }
        });
    };
    TrackingPage.prototype.subScribeTracking = function (trackingData) {
        this.routeData.tracking = trackingData;
    };
    TrackingPage.prototype.checkRouteLog = function (routeLog, route_type) {
        // should have only 1 row
        // console.log(routeLog)
        // return false;
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == route_type); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    TrackingPage.prototype.wrongBoarding = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == 1 && route.log_type_code == 3); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    TrackingPage.prototype.wrongAlighting = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return (route.route_type == 0 && route.log_type_code == 5); });
            if (log.length == 0)
                return false;
            else
                return true;
        }
        else {
            return false;
        }
    };
    TrackingPage.prototype.showWrongPickUp = function (routeDetail) {
        if (routeDetail['passenger_log'].length > 0) {
            var log = routeDetail['passenger_log'].filter(function (route) { return (route.route_type == 1 && route.log_type_code == 3); });
            return log[0].address.collection;
        }
        else {
            return 'N/A';
        }
    };
    TrackingPage.prototype.showWrongDropOff = function (routeDetail) {
        if (routeDetail['passenger_log'].length > 0) {
            var log = routeDetail['passenger_log'].filter(function (route) { return (route.route_type == 0 && route.log_type_code == 5); });
            return log[0].address.destination;
        }
        else {
            return 'N/A';
        }
    };
    TrackingPage.prototype.showActualTime = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return route.route_type == 1; });
            return this._moment(log[0]['date_time_scan'], 'DD-MM-YYYY HH:mm:ss').format('HH:mm');
        }
        else {
            return 'N/A';
        }
    };
    TrackingPage.prototype.showAlightingTime = function (routeLog) {
        if (routeLog.length > 0) {
            var log = routeLog.filter(function (route) { return route.route_type == 0; });
            return this._moment(log[0]['date_time_scan'], 'DD-MM-YYYY HH:mm:ss').format('HH:mm');
        }
        else {
            return 'N/A';
        }
    };
    TrackingPage.prototype.peroidText = function (peroid) {
        if (peroid == 'current')
            return 'Currrent Journey';
        else if (peroid == 'next')
            return 'Next Journey';
        else
            return 'Previous Journey';
    };
    return TrackingPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], TrackingPage.prototype, "mapElement", void 0);
TrackingPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tracking',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\tracking\tracking.html"*/'<!--\n  Generated template for the TrackingPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <ion-title>Tracking</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n    <div #map style="height:100%;width:100%;"></div>\n    <ion-grid [@fadeInAnimation]="" class="padding-0" style="position:absolute;top:0px">\n        <ion-row justify-content-between class="passenger-box" (click)="toggleShowJourney()">\n            <ion-col class="text-align-right">\n                <ion-icon ios="ios-person" md="ios-person"></ion-icon>\n            </ion-col>\n            <ion-col class="text-align-center">\n                <div>{{passenger.first_name}} {{passenger.surname}}</div>\n            </ion-col>\n            <ion-col class="text-align-right">\n                <ion-icon class="margin-right-10" [ios]="arrowIcon" [md]="arrowIcon"></ion-icon>\n            </ion-col>\n        </ion-row>\n        <ion-row [@fadeInAnimation]="" *ngIf="showJourney">\n            <ion-grid class="padding-0 journey-box" *ngFor="let route of routes;let j = index">\n                <ion-row justify-content-between [ngClass]="{\n                  \'normal-text\':true ,\n                  \'current-movement\': route.peroid == \'current\',\n                  \'previous-movement\': route.peroid == \'previous\',\n                  \'next-movement\': route.peroid == \'next\'\n                }">\n                    <div>\n                        <ion-icon ios="md-bus" md="md-bus"></ion-icon>\n                        <span>{{peroidText(route.peroid)}}</span>\n                    </div>\n                    <div>\n                        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                        <span>{{route.date_today}}</span>\n                    </div>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4 class="dark-box">\n                        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n                        <span>Pick Up</span>\n                    </ion-col>\n                    <ion-col col-8 class="dark-gray-box">\n                        <span>{{route.collection_address.address}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="wrongBoarding(route.collection_address.passenger_log)">\n                    <ion-grid class="padding-0">\n                        <ion-row>\n                            <ion-col col-4 class="padding-0 dark-box">\n                                <div class="red-box">Wrong Pick Up</div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-8 class="padding-0 dark-gray-box">\n                                <div class="red-text padding-10">\n                                    {{showWrongPickUp(route.collection_address)}}\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-row>\n                <ion-row>\n                    <ion-col col-4 class="dark-box">\n                        <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n                        <span>Drop Off</span>\n                    </ion-col>\n                    <ion-col col-8 class="dark-gray-box">\n                        <span>{{route.destination_address.address}}</span>\n                    </ion-col>\n                </ion-row>\n                <ion-row *ngIf="wrongAlighting(route.destination_address.passenger_log)">\n                    <ion-grid class="padding-0">\n                        <ion-row>\n                            <ion-col col-4 class="padding-0 dark-box">\n                                <div class="red-box">Wrong Drop Off</div>\n                            </ion-col>\n                        </ion-row>\n                        <ion-row>\n                            <ion-col col-8 class="padding-0 dark-gray-box">\n                                <div class="red-text padding-10">\n                                    {{showWrongDropOff(route.destination_address)}}\n                                </div>\n                            </ion-col>\n                        </ion-row>\n                    </ion-grid>\n                </ion-row>\n                <ion-row justify-content-between class="dark-box">\n                    <div>\n                        <span>Scheduled Boarding Time</span>\n                    </div>\n                    <div>\n                        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                        <span>{{route.collection_address.time_start}}</span>\n                    </div>\n                </ion-row>\n                <ion-row justify-content-between [ngClass]="{\'red-text\':wrongBoarding(route.collection_address.passenger_log),\'dark-box\':true}" *ngIf="checkRouteLog(route.collection_address.passenger_log , 1)">\n                    <div>\n                        <span>Actual Boarding Time</span>\n                    </div>\n                    <div>\n                        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                        <span>{{showActualTime(route.collection_address.passenger_log)}}</span>\n                    </div>\n                </ion-row>\n                <ion-row justify-content-between class="dark-box">\n                    <div>\n                        <span>Scheduled Alighting Time</span>\n                    </div>\n                    <div>\n                        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                        <span>{{route.destination_address.time_end}}</span>\n                    </div>\n                </ion-row>\n                <ion-row justify-content-between [ngClass]="{\'red-text\':wrongAlighting(route.destination_address.passenger_log),\'silver-box\':true}" *ngIf="checkRouteLog(route.destination_address.passenger_log , 0)">\n                    <div>\n                        <span>Actual Alighting Time</span>\n                    </div>\n                    <div>\n                        <ion-icon ios="ios-time-outline" md="ios-time-outline"></ion-icon>\n                        <span>{{showAlightingTime(route.destination_address.passenger_log)}}</span>\n                    </div>\n                </ion-row>\n            </ion-grid>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\tracking\tracking.html"*/,
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["i" /* trigger */])('fadeInAnimation', [
                // route 'enter' transition
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':enter', [
                    // css styles at start of transition
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }),
                    // animation and styles at end of transition
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["h" /* transition */])(':leave', [
                    // css styles at start of transition
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 1 }),
                    // animation and styles at end of transition
                    Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["e" /* animate */])('.3s', Object(__WEBPACK_IMPORTED_MODULE_5__angular_animations__["g" /* style */])({ opacity: 0 }))
                ])
            ])
        ]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_utilities_utilities__["a" /* UtilitiesProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_apollo_apollo__["a" /* ApolloProvider */]])
], TrackingPage);

//# sourceMappingURL=tracking.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__set_password_set_password__ = __webpack_require__(141);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpPage = (function () {
    function OtpPage(navCtrl, navParams, elementRef, _state, _util) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._state = _state;
        this._util = _util;
        this.elements = elementRef;
        this.otp = {
            a: '',
            b: '',
            c: '',
            d: '',
            e: '',
            f: ''
        };
        this.currentKey = 'a';
        this.phone_m = this.navParams.get('phone_m');
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var inputs = this.elements.nativeElement.querySelectorAll('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].setAttribute('maxLength', 1);
        }
        setTimeout(function () { return _this.elements.nativeElement.querySelector("input[name='" + _this.currentKey + "']").focus(); }, 1000);
    };
    OtpPage.prototype.change = function (move, before) {
        this.currentKey = before;
        if (this.otp[this.currentKey] != '') {
            this.currentKey = move;
            this.elements.nativeElement.querySelector("input[name='" + this.currentKey + "']").focus();
        }
    };
    OtpPage.prototype.validateOTP = function () {
        var controls = this.otp;
        var otp = Object.keys(controls).map(function (key) { return controls[key].toString(); }).join('');
        var state = this._state.getState();
        if (state['otp'] != otp) {
            this._util.alertMessage('Invalid OTP', 'The OTP you have entered is incorrect. Please try again or contact your company for assistance.');
        }
        else {
            this._util.alertMessage('Success!!!', 'Registration was successful, Please set a password to login', 'checkImg');
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__set_password_set_password__["a" /* SetPasswordPage */]);
        }
    };
    OtpPage.prototype.requestOTP = function () {
        var _this = this;
        this._util.loading('');
        var otp = Math.floor(Math.random() * 900000) + 100000;
        this._state.setState({ otp: otp });
        this._util.callSms(this.phone_m, 'Here is your one-time 6 digit verification code for the Parent App. This code will expire in 5 minute, ' + otp)
            .then(function (data) {
            _this._util.loaded();
        })
            .catch(function () {
            _this._util.loaded();
        });
    };
    return OtpPage;
}());
OtpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-otp',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\otp\otp.html"*/'<!--\n  Generated template for the OtpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n        <!-- <ion-title>otp</ion-title> -->\n    </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="main-bg">\n    <ion-grid>\n        <ion-row justify-content-center>\n            <img src="assets/img/logo.png" class="main-logo" />\n        </ion-row>\n        <form novalidate>\n            <ion-row class="margin-top-10" style="padding:0px 30px;">\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="a" [(ngModel)]="otp.a" (ngModelChange)="change(\'b\',\'a\')"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="b" [(ngModel)]="otp.b" (ngModelChange)="change(\'c\',\'b\')"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="c" [(ngModel)]="otp.c" (ngModelChange)="change(\'d\',\'c\')"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="d" [(ngModel)]="otp.d" (ngModelChange)="change(\'e\',\'d\')"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="e" [(ngModel)]="otp.e" (ngModelChange)="change(\'f\',\'e\')"></ion-input>\n                </ion-col>\n                <ion-col>\n                    <ion-input type="tel" class="input-otp" name="f" [(ngModel)]="otp.f"></ion-input>\n                </ion-col>\n            </ion-row>\n        </form>\n        <ion-row justify-content-center class="margin-top-10">\n            <div class="normal-text text-align-center">\n                You should recieve an sms with a 6 digits OTP (One Time Password) code. Please enter that code above and press next.\n            </div>\n        </ion-row>\n        <ion-row justify-content-center class="margin-top-10">\n            <button ion-button block color="sugar" (click)="validateOTP()">Next</button>\n        </ion-row>\n        <ion-row justify-content-center class=" margin-top-5 ">\n            <button ion-button block color="sugar" (click)="requestOTP()">Request new OTP code</button>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\otp\otp.html"*/,
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */],
        __WEBPACK_IMPORTED_MODULE_2__providers_state_state__["a" /* StateProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__["a" /* UtilitiesProvider */]])
], OtpPage);

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(411);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideClient */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_apollo_client__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_apollo_angular__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_broadcaster__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_component__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_login_login__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_register_register__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_lost_password_lost_password__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tracking_tracking__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_after_splash_screen_after_splash_screen__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_set_password_set_password__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_children_children__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_contact_us_contact_us__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_directives_module__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_apollo_apollo__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { AngularFireModule } from 'angularfire2';
// import 'firebase';
// import { CloudModule , CloudSettings } from '@ionic/cloud-angular';















// const networkInterface = createNetworkInterface('http://127.0.0.1:3000/graphql');
var networkInterface = Object(__WEBPACK_IMPORTED_MODULE_6_apollo_client__["b" /* createNetworkInterface */])('http://schoolsafe.sg.ecoachmanager.com/graphql');
networkInterface.use([{
        applyMiddleware: function (req, next) {
            if (!req.options.headers) {
                req.options.headers = {};
            }
            req.options.headers.authorization = 'Bearer ' + globalToken;
            next();
        }
    }]);
var client = new __WEBPACK_IMPORTED_MODULE_6_apollo_client__["a" /* ApolloClient */]({
    networkInterface: networkInterface
});
// const firebase = {
//   apiKey: 'AIzaSyD7B3zdaQ4G63tS2Xny7gFts8Yi-stNh-w',
//   projectId: 'driverapp-1470129684507',
//   messagingSenderId: '25666590030'
// }
// const cloudSetting: CloudSettings = {
//   core:{
//     app_id: "38910cff"
//   },
//   push: {
//     sender_id: "25666590030",
//     pluginConfig: {
//       android: {
//         iconColor: '#097cd2'
//       }
//     }
//   }
// }
function provideClient() {
    return client;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_lost_password_lost_password__["a" /* LostPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__["a" /* OtpPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_set_password_set_password__["a" /* SetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_after_splash_screen_after_splash_screen__["a" /* AfterSplashScreenPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tracking_tracking__["a" /* TrackingPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_contact_us_contact_us__["a" /* ContactUsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["e" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_29__directives_directives_module__["a" /* DirectivesModule */],
            __WEBPACK_IMPORTED_MODULE_7_apollo_angular__["b" /* ApolloModule */].withClient(provideClient),
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                name: '__parentapp',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_16__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_lost_password_lost_password__["a" /* LostPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_otp_otp__["a" /* OtpPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_set_password_set_password__["a" /* SetPasswordPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_after_splash_screen_after_splash_screen__["a" /* AfterSplashScreenPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_children_children__["a" /* ChildrenPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tracking_tracking__["a" /* TrackingPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_contact_us_contact_us__["a" /* ContactUsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_27__providers_utilities_utilities__["a" /* UtilitiesProvider */],
            __WEBPACK_IMPORTED_MODULE_28__providers_state_state__["a" /* StateProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_apollo_apollo__["a" /* ApolloProvider */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_broadcaster__["a" /* Broadcaster */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_push__["a" /* Push */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_file__["a" /* File */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_native_broadcaster__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_after_splash_screen_after_splash_screen__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { HomePage } from '../pages/home/home';
// import { LoginPage } from '../pages/login/login';
// import { RegisterPage } from '../pages/register/register';

// import { ContactUsPage } from './../pages/contact-us/contact-us';
// declare var TestFairy:any;
var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, backgroundMode, broadCaster, push, event) {
        var _this = this;
        this.platform = platform;
        this.backgroundMode = backgroundMode;
        this.broadCaster = broadCaster;
        this.push = push;
        this.event = event;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_after_splash_screen_after_splash_screen__["a" /* AfterSplashScreenPage */];
        platform.ready().then(function () {
            // TestFairy.begin("62c8089044d2af45ac43191018bea59a8f127e6a");
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.initPushNotification();
            if (platform.is('android')) {
                backgroundMode.enable();
                backgroundMode.setDefaults({ silent: true });
                // setInterval(()=>{
                //   console.log(Date.now())
                // },1000)
                _this.event.subscribe('recievedMessage', function (data) { console.log('recieved event', data); });
            }
        });
    }
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        if (!this.platform.is('cordova')) {
            console.warn('Push notifications not initialized. Cordova is not available - Run in physical device');
            return;
        }
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('notification').subscribe(function (data) {
            console.log('message -> ' + data.message);
            console.log(data);
            //if user using app and push notification comes
            _this.event.publish('recievedMessage', data);
            if (data.additionalData.foreground) {
                // if application open, show popup
                alert(data.message);
            }
            else {
                //if user NOT using app and push notification comes
                //TODO: Your logic on click of push notification directly
                // this.navCtrl.push(DetailsPage, { message: data.message });
                // console.log('Push notification clicked');
            }
        });
        pushObject.on('error').subscribe(function (error) { return console.error('Error with Push plugin' + error); });
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\www\parent-app-journey\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\www\parent-app-journey\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_0__ionic_native_broadcaster__["a" /* Broadcaster */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 543:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 280,
	"./af.js": 280,
	"./ar": 281,
	"./ar-dz": 282,
	"./ar-dz.js": 282,
	"./ar-kw": 283,
	"./ar-kw.js": 283,
	"./ar-ly": 284,
	"./ar-ly.js": 284,
	"./ar-ma": 285,
	"./ar-ma.js": 285,
	"./ar-sa": 286,
	"./ar-sa.js": 286,
	"./ar-tn": 287,
	"./ar-tn.js": 287,
	"./ar.js": 281,
	"./az": 288,
	"./az.js": 288,
	"./be": 289,
	"./be.js": 289,
	"./bg": 290,
	"./bg.js": 290,
	"./bn": 291,
	"./bn.js": 291,
	"./bo": 292,
	"./bo.js": 292,
	"./br": 293,
	"./br.js": 293,
	"./bs": 294,
	"./bs.js": 294,
	"./ca": 295,
	"./ca.js": 295,
	"./cs": 296,
	"./cs.js": 296,
	"./cv": 297,
	"./cv.js": 297,
	"./cy": 298,
	"./cy.js": 298,
	"./da": 299,
	"./da.js": 299,
	"./de": 300,
	"./de-at": 301,
	"./de-at.js": 301,
	"./de-ch": 302,
	"./de-ch.js": 302,
	"./de.js": 300,
	"./dv": 303,
	"./dv.js": 303,
	"./el": 304,
	"./el.js": 304,
	"./en-au": 305,
	"./en-au.js": 305,
	"./en-ca": 306,
	"./en-ca.js": 306,
	"./en-gb": 307,
	"./en-gb.js": 307,
	"./en-ie": 308,
	"./en-ie.js": 308,
	"./en-nz": 309,
	"./en-nz.js": 309,
	"./eo": 310,
	"./eo.js": 310,
	"./es": 311,
	"./es-do": 312,
	"./es-do.js": 312,
	"./es.js": 311,
	"./et": 313,
	"./et.js": 313,
	"./eu": 314,
	"./eu.js": 314,
	"./fa": 315,
	"./fa.js": 315,
	"./fi": 316,
	"./fi.js": 316,
	"./fo": 317,
	"./fo.js": 317,
	"./fr": 318,
	"./fr-ca": 319,
	"./fr-ca.js": 319,
	"./fr-ch": 320,
	"./fr-ch.js": 320,
	"./fr.js": 318,
	"./fy": 321,
	"./fy.js": 321,
	"./gd": 322,
	"./gd.js": 322,
	"./gl": 323,
	"./gl.js": 323,
	"./gom-latn": 324,
	"./gom-latn.js": 324,
	"./he": 325,
	"./he.js": 325,
	"./hi": 326,
	"./hi.js": 326,
	"./hr": 327,
	"./hr.js": 327,
	"./hu": 328,
	"./hu.js": 328,
	"./hy-am": 329,
	"./hy-am.js": 329,
	"./id": 330,
	"./id.js": 330,
	"./is": 331,
	"./is.js": 331,
	"./it": 332,
	"./it.js": 332,
	"./ja": 333,
	"./ja.js": 333,
	"./jv": 334,
	"./jv.js": 334,
	"./ka": 335,
	"./ka.js": 335,
	"./kk": 336,
	"./kk.js": 336,
	"./km": 337,
	"./km.js": 337,
	"./kn": 338,
	"./kn.js": 338,
	"./ko": 339,
	"./ko.js": 339,
	"./ky": 340,
	"./ky.js": 340,
	"./lb": 341,
	"./lb.js": 341,
	"./lo": 342,
	"./lo.js": 342,
	"./lt": 343,
	"./lt.js": 343,
	"./lv": 344,
	"./lv.js": 344,
	"./me": 345,
	"./me.js": 345,
	"./mi": 346,
	"./mi.js": 346,
	"./mk": 347,
	"./mk.js": 347,
	"./ml": 348,
	"./ml.js": 348,
	"./mr": 349,
	"./mr.js": 349,
	"./ms": 350,
	"./ms-my": 351,
	"./ms-my.js": 351,
	"./ms.js": 350,
	"./my": 352,
	"./my.js": 352,
	"./nb": 353,
	"./nb.js": 353,
	"./ne": 354,
	"./ne.js": 354,
	"./nl": 355,
	"./nl-be": 356,
	"./nl-be.js": 356,
	"./nl.js": 355,
	"./nn": 357,
	"./nn.js": 357,
	"./pa-in": 358,
	"./pa-in.js": 358,
	"./pl": 359,
	"./pl.js": 359,
	"./pt": 360,
	"./pt-br": 361,
	"./pt-br.js": 361,
	"./pt.js": 360,
	"./ro": 362,
	"./ro.js": 362,
	"./ru": 363,
	"./ru.js": 363,
	"./sd": 364,
	"./sd.js": 364,
	"./se": 365,
	"./se.js": 365,
	"./si": 366,
	"./si.js": 366,
	"./sk": 367,
	"./sk.js": 367,
	"./sl": 368,
	"./sl.js": 368,
	"./sq": 369,
	"./sq.js": 369,
	"./sr": 370,
	"./sr-cyrl": 371,
	"./sr-cyrl.js": 371,
	"./sr.js": 370,
	"./ss": 372,
	"./ss.js": 372,
	"./sv": 373,
	"./sv.js": 373,
	"./sw": 374,
	"./sw.js": 374,
	"./ta": 375,
	"./ta.js": 375,
	"./te": 376,
	"./te.js": 376,
	"./tet": 377,
	"./tet.js": 377,
	"./th": 378,
	"./th.js": 378,
	"./tl-ph": 379,
	"./tl-ph.js": 379,
	"./tlh": 380,
	"./tlh.js": 380,
	"./tr": 381,
	"./tr.js": 381,
	"./tzl": 382,
	"./tzl.js": 382,
	"./tzm": 383,
	"./tzm-latn": 384,
	"./tzm-latn.js": 384,
	"./tzm.js": 383,
	"./uk": 385,
	"./uk.js": 385,
	"./ur": 386,
	"./ur.js": 386,
	"./uz": 387,
	"./uz-latn": 388,
	"./uz-latn.js": 388,
	"./uz.js": 387,
	"./vi": 389,
	"./vi.js": 389,
	"./x-pseudo": 390,
	"./x-pseudo.js": 390,
	"./yo": 391,
	"./yo.js": 391,
	"./zh-cn": 392,
	"./zh-cn.js": 392,
	"./zh-hk": 393,
	"./zh-hk.js": 393,
	"./zh-tw": 394,
	"./zh-tw.js": 394
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 543;

/***/ }),

/***/ 544:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LostPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LostPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LostPasswordPage = (function () {
    function LostPasswordPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LostPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LostPasswordPage');
    };
    return LostPasswordPage;
}());
LostPasswordPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-lost-password',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\lost-password\lost-password.html"*/'<!--\n  Generated template for the LostPasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>lostPassword</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\lost-password\lost-password.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], LostPasswordPage);

//# sourceMappingURL=lost-password.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DirectivesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__autofocus_autofocus__ = __webpack_require__(546);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DirectivesModule = (function () {
    function DirectivesModule() {
    }
    return DirectivesModule;
}());
DirectivesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__autofocus_autofocus__["a" /* AutofocusDirective */]],
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__autofocus_autofocus__["a" /* AutofocusDirective */]]
    })
], DirectivesModule);

//# sourceMappingURL=directives.module.js.map

/***/ }),

/***/ 546:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutofocusDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutofocusDirective = (function () {
    function AutofocusDirective(el) {
        this.el = el;
    }
    AutofocusDirective.prototype.ngAfterViewInit = function () {
        this.el.nativeElement.focus();
    };
    return AutofocusDirective;
}());
AutofocusDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
        selector: '[autofocus]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
], AutofocusDirective);

//# sourceMappingURL=autofocus.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_state_state__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_apollo_apollo__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__register_register__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(271);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, _fb, _util, _state, push, platform, _apollo, backgroundMode, transfer, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._fb = _fb;
        this._util = _util;
        this._state = _state;
        this.push = push;
        this.platform = platform;
        this._apollo = _apollo;
        this.backgroundMode = backgroundMode;
        this.transfer = transfer;
        this.file = file;
        this.loginForm = this._fb.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(/^(([^<>()\[\]\\.,;:\s@]+(\.[^<>()\[\]\\.,;:\s@]+)*)|(.+))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                    __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required
                ])
            ],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    LoginPage.prototype.ionViewWillEnter = function () {
        // if(this.platform.is('cordova')) {this.push.unregister()}
    };
    LoginPage.prototype.registerFCMToken = function () {
        var _this = this;
        var options = {
            android: {},
            ios: {
                alert: 'true',
                badge: false,
                sound: 'true'
            },
            windows: {}
        };
        var pushObject = this.push.init(options);
        pushObject.on('registration').subscribe(function (data) {
            console.log('device token -> ' + data.registrationId);
            _this._apollo.setPushToken(data.registrationId)
                .subscribe(function (res) {
                _this._util.loaded();
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            });
            //TODO - send device token to server
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var _a = this.loginForm.controls, email = _a.email, password = _a.password;
        this._util.loading('');
        this._util.signIn(email.value, password.value)
            .then(function (response) {
            if (response.status == 200) {
                _this._state.setState(response.data.user);
                var userProfile = Object.assign({}, response.data.user, { password: password.value });
                _this._util.setStorage('userProfile', userProfile);
                globalToken = response.data.token;
                if (_this.platform.is('cordova')) {
                    _this.registerFCMToken();
                    userProfile.companiesLogo.forEach(function (item) {
                        _this.download(item.logo, item.companyName + 'school.jpg');
                    });
                }
                else {
                    _this._util.loaded();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
                }
            }
            else {
                _this._util.alertMessage('Failed login', 'Email address or password not valid');
            }
        })
            .catch(function (err) {
            _this._util.alertMessage('Failed login', err.message);
            _this._util.loaded();
        });
    };
    LoginPage.prototype.download = function (urlImage, fileName) {
        var fileTransfer = this.transfer.create();
        var url = encodeURI(urlImage);
        fileTransfer.download(url, this.file.dataDirectory + fileName)
            .then(function (entry) {
            console.log('download complete: ' + entry.toURL());
        }, function (error) {
            console.log("error", "Error file transfert");
        });
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\www\parent-app-journey\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n\n  <ion-navbar>\n    <ion-title>login</ion-title>\n  </ion-navbar>\n\n</ion-header> -->\n\n\n<ion-content class="main-bg">\n    <ion-grid>\n        <ion-row justify-content-center>\n            <img src="assets/img/logo.png" class="main-logo" />\n        </ion-row>\n        <form [formGroup]="loginForm" novalidate>\n            <ion-row justify-content-center class="margin-top-15">\n                <ion-input class="input-box" type="email" name="email" formControlName="email" placeholder="Email"></ion-input>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-5">\n                <ion-input class="input-box" type="password" name="password" formControlName="password" placeholder="Password"></ion-input>\n            </ion-row>\n            <ion-row justify-content-center class="margin-top-10">\n                <button ion-button block color="sugar" (click)="login()" [disabled]="loginForm.invalid">Login</button>\n            </ion-row>\n        </form>\n    </ion-grid>\n    <ion-grid class="footer">\n        <ion-row justify-content-center>\n            <div class="normal-text" (click)="register()">\n                <ion-icon name="help" class="circle-icon"></ion-icon><span> Lost Password or Register</span>\n            </div>\n        </ion-row>\n    </ion-grid>\n</ion-content>'/*ion-inline-end:"D:\www\parent-app-journey\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__providers_utilities_utilities__["a" /* UtilitiesProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_state_state__["a" /* StateProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_push__["a" /* Push */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_apollo_apollo__["a" /* ApolloProvider */],
        __WEBPACK_IMPORTED_MODULE_9__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_file_transfer__["a" /* FileTransfer */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.js.map