var Di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lu=0,Ec=1,Nu=2;var Jr=1,Io=2,ks=3,Ni=0,on=1,Pn=2,Ki=0,Gs=1,Cc=2,Rc=3,Pc=4,Uu=5;var $i=100,Fu=101,Ou=102,Bu=103,zu=104,ku=200,Gu=201,Vu=202,Hu=203,Ic=204,Dc=205,Wu=206,Xu=207,qu=208,Yu=209,Zu=210,Ju=211,Ku=212,$u=213,ju=214,Ja=0,Ka=1,$a=2,bs=3,ja=4,Qa=5,eo=6,to=7,Lc=0,Qu=1,ed=2,Yn=0,Nc=1,Uc=2,Fc=3,Kr=4,Oc=5,Bc=6,zc=7;var kc=300,ji=301,Vs=302,Hs=303,Do=304,ws=1e3,Cn=1001,no=1002,Yt=1003,td=1004;var $r=1005;var Ut=1006,Lo=1007;var Zn=1008;var pn=1009,Gc=1010,Vc=1011,Ws=1012,No=1013,On=1014,ln=1015,cn=1016,Uo=1017,Fo=1018,Qi=1020,Hc=35902,Wc=35899,Xc=1021,qc=1022,Bn=1023,hi=1026,di=1027,Oo=1028,Bo=1029,Ui=1030,zo=1031;var ko=1033,jr=33776,Qr=33777,ea=33778,ta=33779,Go=35840,Vo=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Jo=37489,na=37490,Ko=37491,$o=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,ia=36285,gl=36286;var dr=2300,io=2301,Ya=2302,pc=2303,mc=2400,gc=2401,_c=2402;var nd=3200;var _l=0,id=1,fi="",sn="srgb",Xi="srgb-linear",fr="linear",vt="srgb";var Za=7680;var sd=519,rd=512,ad=513,od=514,Yc=515,ld=516,cd=517,Zc=518,Jc=519,hd=35044;var Kc="300 es",Rn=2e3,As=2001;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ts(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){let i=Ts("canvas");return i.style.display="block",i}var $h={},Es=null;function $c(...i){let e="THREE."+i.shift();Es?Es("log",e,...i):console.log(e,...i)}function dd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=dd(i);let e="THREE."+i.shift();if(Es)Es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function je(...i){i=dd(i);let e="THREE."+i.shift();if(Es)Es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Wi(...i){let e=i.join(" ");e in $h||($h[e]=!0,Ze(...i))}function fd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var pd={[Ja]:Ja,[$a]:eo,[ja]:ja,[bs]:Qa,[Ka]:Ka,[eo]:$a,[to]:to,[Qa]:bs},Un=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],jh=1234567,lr=Math.PI/180,Cs=180/Math.PI;function es(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[t&63|128]+Kt[t>>8&255]+"-"+Kt[t>>16&255]+Kt[t>>24&255]+Kt[n&255]+Kt[n>>8&255]+Kt[n>>16&255]+Kt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function jc(i,e){return(i%e+e)%e}function Yf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zf(i,e,t){return i!==e?(t-i)/(e-i):0}function cr(i,e,t){return(1-t)*i+t*e}function Jf(i,e,t,n){return cr(i,e,1-Math.exp(-t*n))}function Kf(i,e=1){return e-Math.abs(jc(i,e*2)-e)}function $f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ep(i,e){return i+Math.random()*(e-i)}function tp(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(jh=i);let e=jh+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(i){return i*lr}function sp(i){return i*Cs}function rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*f,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*f,o*c);break;case"ZXZ":i.set(l*f,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*d,o*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function eh(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function md(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function gd(i,e){if(e.constructor===Float32Array)return i;let t=eh(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var th={DEG2RAD:lr,RAD2DEG:Cs,generateUUID:es,clamp:at,euclideanModulo:jc,mapLinear:Yf,inverseLerp:Zf,lerp:cr,damp:Jf,pingpong:Kf,smoothstep:$f,smootherstep:jf,randInt:Qf,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:ap,floorPowerOfTwo:Qc,setQuaternionFromProperEuler:op,normalize:gd,denormalize:md},oh=class oh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};oh.prototype.isVector2=!0;var Oe=oh,an=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==p||c!==m||d!==g){let u=l*p+c*m+d*g+f*y;u<0&&(p=-p,m=-m,g=-g,y=-y,u=-u);let h=1-o;if(u<.9995){let x=Math.acos(u),b=Math.sin(x);h=Math.sin(h*x)/b,o=Math.sin(o*x)/b,l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+y*o}else{l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+y*o;let x=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=x,c*=x,d*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*f+l*m-c*p,e[t+1]=l*g+d*p+c*f-o*m,e[t+2]=c*g+d*m+o*p-l*f,e[t+3]=d*g-o*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"YXZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"ZXY":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"ZYX":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"YZX":this._x=p*d*f+c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f-p*m*g;break;case"XZY":this._x=p*d*f-c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f+p*m*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],p=n+o+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},lh=class lh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Xl.copy(this).projectOnVector(e),this.sub(Xl)}reflect(e){return this.sub(Xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};lh.prototype.isVector3=!0;var Z=lh,Xl=new Z,Qh=new an,ch=class ch{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],m=n[5],g=n[8],y=s[0],u=s[3],h=s[6],x=s[1],b=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=a*y+o*x+l*T,r[3]=a*u+o*b+l*S,r[6]=a*h+o*M+l*_,r[1]=c*y+d*x+f*T,r[4]=c*u+d*b+f*S,r[7]=c*h+d*M+f*_,r[2]=p*y+m*x+g*T,r[5]=p*u+m*b+g*S,r[8]=p*h+m*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*r,m=c*r-a*l,g=t*f+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=p*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Wi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ql.makeScale(e,t)),this}rotate(e){return Wi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ql.makeRotation(-e)),this}translate(e,t){return Wi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ql.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ch.prototype.isMatrix3=!0;var it=ch,ql=new it,eu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tu=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:Xi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=vs(s.r),s.g=vs(s.g),s.b=vs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Xi]:{primaries:e,whitePoint:n,transfer:fr,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:sn},outputColorSpaceConfig:{drawingBufferColorSpace:sn}},[sn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:eu,fromXYZ:tu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:sn}}}),i}var pt=lp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function vs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var rs,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{rs===void 0&&(rs=Ts("canvas")),rs.width=e.width,rs.height=e.height;let s=rs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=rs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ts("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cp=0,Rs=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=es(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Yl(s[a].image)):r.push(Yl(s[a]))}else r=Yl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Yl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var hp=0,Zl=new Z,Qt=class i extends Un{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Ut,a=Zn,o=Bn,l=pn,c=i.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=es(),this.name="",this.source=new Rs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ws:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ws:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=kc;Qt.DEFAULT_ANISOTROPY=1;var hh=class hh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],y=l[2],u=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(m+1)/2,T=(h+1)/2,S=(d+p)/4,_=(f+y)/4,v=(g+u)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=v/r),this.set(n,s,r,t),this}let x=Math.sqrt((u-g)*(u-g)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(u-g)/x,this.y=(f-y)/x,this.z=(p-d)/x,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};hh.prototype.isVector4=!0;var Et=hh,ro=class extends Un{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rs(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sn=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Po=class Po{constructor(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u)}set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=m,h[7]=g,h[11]=y,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/as.setFromMatrixColumn(e,0).length(),r=1/as.setFromMatrixColumn(e,1).length(),a=1/as.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*d,m=a*f,g=o*d,y=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-y*c,t[9]=-o*l,t[2]=y-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*d,m=l*f,g=c*d,y=c*f;t[0]=p+y*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=y+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*d,m=l*f,g=c*d,y=c*f;t[0]=p-y*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=y-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*d,m=a*f,g=o*d,y=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=p*c+y,t[1]=l*f,t[5]=y*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-p*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=p-y*f}else if(e.order==="XZY"){let p=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=p*f+y,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,n){let s=this.elements;return yn.subVectors(e,t),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),_i.crossVectors(n,yn),_i.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),_i.crossVectors(n,yn)),_i.normalize(),wa.crossVectors(yn,_i),s[0]=_i.x,s[4]=wa.x,s[8]=yn.x,s[1]=_i.y,s[5]=wa.y,s[9]=yn.y,s[2]=_i.z,s[6]=wa.z,s[10]=yn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],m=n[13],g=n[2],y=n[6],u=n[10],h=n[14],x=n[3],b=n[7],M=n[11],T=n[15],S=s[0],_=s[4],v=s[8],C=s[12],E=s[1],I=s[5],U=s[9],D=s[13],R=s[2],B=s[6],G=s[10],O=s[14],Y=s[3],F=s[7],H=s[11],k=s[15];return r[0]=a*S+o*E+l*R+c*Y,r[4]=a*_+o*I+l*B+c*F,r[8]=a*v+o*U+l*G+c*H,r[12]=a*C+o*D+l*O+c*k,r[1]=d*S+f*E+p*R+m*Y,r[5]=d*_+f*I+p*B+m*F,r[9]=d*v+f*U+p*G+m*H,r[13]=d*C+f*D+p*O+m*k,r[2]=g*S+y*E+u*R+h*Y,r[6]=g*_+y*I+u*B+h*F,r[10]=g*v+y*U+u*G+h*H,r[14]=g*C+y*D+u*O+h*k,r[3]=x*S+b*E+M*R+T*Y,r[7]=x*_+b*I+M*B+T*F,r[11]=x*v+b*U+M*G+T*H,r[15]=x*C+b*D+M*O+T*k,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],g=e[3],y=e[7],u=e[11],h=e[15],x=l*m-c*p,b=o*m-c*f,M=o*p-l*f,T=a*m-c*d,S=a*p-l*d,_=a*f-o*d;return t*(y*x-u*b+h*M)-n*(g*x-u*T+h*S)+s*(g*b-y*T+h*_)-r*(g*M-y*S+u*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],g=e[12],y=e[13],u=e[14],h=e[15],x=t*o-n*a,b=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,_=s*c-r*l,v=d*y-f*g,C=d*u-p*g,E=d*h-m*g,I=f*u-p*y,U=f*h-m*y,D=p*h-m*u,R=x*D-b*U+M*I+T*E-S*C+_*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let B=1/R;return e[0]=(o*D-l*U+c*I)*B,e[1]=(s*U-n*D-r*I)*B,e[2]=(y*_-u*S+h*T)*B,e[3]=(p*S-f*_-m*T)*B,e[4]=(l*E-a*D-c*C)*B,e[5]=(t*D-s*E+r*C)*B,e[6]=(u*M-g*_-h*b)*B,e[7]=(d*_-p*M+m*b)*B,e[8]=(a*U-o*E+c*v)*B,e[9]=(n*E-t*U-r*v)*B,e[10]=(g*S-y*M+h*x)*B,e[11]=(f*M-d*S-m*x)*B,e[12]=(o*C-a*I-l*v)*B,e[13]=(t*I-n*C+s*v)*B,e[14]=(y*b-g*T-u*x)*B,e[15]=(d*T-f*b+p*x)*B,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,p=r*c,m=r*d,g=r*f,y=a*d,u=a*f,h=o*f,x=l*c,b=l*d,M=l*f,T=n.x,S=n.y,_=n.z;return s[0]=(1-(y+h))*T,s[1]=(m+M)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(m-M)*S,s[5]=(1-(p+h))*S,s[6]=(u+x)*S,s[7]=0,s[8]=(g+b)*_,s[9]=(u-x)*_,s[10]=(1-(p+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=as.set(s[0],s[1],s[2]).length(),o=as.set(s[4],s[5],s[6]).length(),l=as.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let c=1/a,d=1/o,f=1/l;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=d,Dn.elements[5]*=d,Dn.elements[6]*=d,Dn.elements[8]*=f,Dn.elements[9]*=f,Dn.elements[10]*=f,t.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Rn,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Rn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===As)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Rn,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Rn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===As)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var _t=Po,as=new Z,Dn=new _t,up=new Z(0,0,0),dp=new Z(1,1,1),_i=new Z,wa=new Z,yn=new Z,nu=new _t,iu=new an,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return nu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(nu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return iu.setFromEuler(this),this.setFromQuaternion(iu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var Ps=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fp=0,su=new Z,os=new an,ti=new _t,Aa=new Z,tr=new Z,pp=new Z,mp=new an,ru=new Z(1,0,0),au=new Z(0,1,0),ou=new Z(0,0,1),lu={type:"added"},gp={type:"removed"},ls={type:"childadded",child:null},Jl={type:"childremoved",child:null},Zt=class i extends Un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Z,t=new Fn,n=new an,s=new Z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new it}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ps,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.multiply(os),this}rotateOnWorldAxis(e,t){return os.setFromAxisAngle(e,t),this.quaternion.premultiply(os),this}rotateX(e){return this.rotateOnAxis(ru,e)}rotateY(e){return this.rotateOnAxis(au,e)}rotateZ(e){return this.rotateOnAxis(ou,e)}translateOnAxis(e,t){return su.copy(e).applyQuaternion(this.quaternion),this.position.add(su.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ru,e)}translateY(e){return this.translateOnAxis(au,e)}translateZ(e){return this.translateOnAxis(ou,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),tr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(tr,Aa,this.up):ti.lookAt(Aa,tr,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),os.setFromRotationMatrix(ti),this.quaternion.premultiply(os.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lu),ls.child=e,this.dispatchEvent(ls),ls.child=null):je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Jl.child=e,this.dispatchEvent(Jl),Jl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lu),ls.child=e,this.dispatchEvent(ls),ls.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tr,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Zt.DEFAULT_UP=new Z(0,1,0);Zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends Zt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},Is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let u=t.getJointPose(y,n),h=this._getHandJoint(c,y);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_d={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Kl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=jc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Kl(a,r,e+1/3),this.g=Kl(a,r,e),this.b=Kl(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=sn){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sn){let n=_d[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sn){return pt.workingToColorSpace($t.copy(this),e),Math.round(at($t.r*255,0,255))*65536+Math.round(at($t.g*255,0,255))*256+Math.round(at($t.b*255,0,255))}getHexString(e=sn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace($t.copy(this),t);let n=$t.r,s=$t.g,r=$t.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=sn){pt.workingToColorSpace($t.copy(this),e);let t=$t.r,n=$t.g,s=$t.b;return e!==sn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ta);let n=cr(xi.h,Ta.h,t),s=cr(xi.s,Ta.s,t),r=cr(xi.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$t=new rt;rt.NAMES=_d;var mr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},gr=class extends Zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new Z,ni=new Z,$l=new Z,ii=new Z,cs=new Z,hs=new Z,cu=new Z,jl=new Z,Ql=new Z,ec=new Z,tc=new Et,nc=new Et,ic=new Et,Si=class i{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ni.subVectors(n,t),$l.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ni),l=Ln.dot($l),c=ni.dot(ni),d=ni.dot($l),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-o*d)*p,g=(a*d-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return tc.setScalar(0),nc.setScalar(0),ic.setScalar(0),tc.fromBufferAttribute(e,t),nc.fromBufferAttribute(e,n),ic.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(tc,r.x),a.addScaledVector(nc,r.y),a.addScaledVector(ic,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ni.subVectors(e,t),Ln.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;cs.subVectors(s,n),hs.subVectors(r,n),jl.subVectors(e,n);let l=cs.dot(jl),c=hs.dot(jl);if(l<=0&&c<=0)return t.copy(n);Ql.subVectors(e,s);let d=cs.dot(Ql),f=hs.dot(Ql);if(d>=0&&f<=d)return t.copy(s);let p=l*f-d*c;if(p<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(cs,a);ec.subVectors(e,r);let m=cs.dot(ec),g=hs.dot(ec);if(g>=0&&m<=g)return t.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(hs,o);let u=d*g-m*f;if(u<=0&&f-d>=0&&m-g>=0)return cu.subVectors(r,s),o=(f-d)/(f-d+(m-g)),t.copy(s).addScaledVector(cu,o);let h=1/(u+y+p);return a=y*h,o=p*h,t.copy(n).addScaledVector(cs,a).addScaledVector(hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(r,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(nr),Ca.subVectors(this.max,nr),us.subVectors(e.a,nr),ds.subVectors(e.b,nr),fs.subVectors(e.c,nr),yi.subVectors(ds,us),vi.subVectors(fs,ds),ki.subVectors(us,fs);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-ki.z,ki.y,yi.z,0,-yi.x,vi.z,0,-vi.x,ki.z,0,-ki.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-ki.y,ki.x,0];return!sc(t,us,ds,fs,Ca)||(t=[1,0,0,0,1,0,0,0,1],!sc(t,us,ds,fs,Ca))?!1:(Ra.crossVectors(yi,vi),t=[Ra.x,Ra.y,Ra.z],sc(t,us,ds,fs,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Nn=new Z,Ea=new Xn,us=new Z,ds=new Z,fs=new Z,yi=new Z,vi=new Z,ki=new Z,nr=new Z,Ca=new Z,Ra=new Z,Gi=new Z;function sc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gi.fromArray(i,r);let o=s.x*Math.abs(Gi.x)+s.y*Math.abs(Gi.y)+s.z*Math.abs(Gi.z),l=e.dot(Gi),c=t.dot(Gi),d=n.dot(Gi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var oi=xp();function xp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function yp(i){Math.abs(i)>65504&&Ze("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),oi.floatView[0]=i;let e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function vp(i){let e=i>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(i&1023)]+oi.exponentTable[e],oi.floatView[0]}var bi=class{static toHalfFloat(e){return yp(e)}static fromHalfFloat(e){return vp(e)}},Bt=new Z,Pa=new Oe,Mp=0,Mn=class extends Un{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hd,this.updateRanges=[],this.gpuType=ln,this.version=0,this._normalizationScale=e!==void 0?eh(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):md(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):gd(e,this.array)}};var _r=class extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var xr=class extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var wt=class extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sp=new Xn,ir=new Z,rc=new Z,wi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ir.subVectors(e,this.center);let t=ir.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ir.copy(e.center).add(rc)),this.expandByPoint(ir.copy(e.center).sub(rc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bp=0,En=new _t,ac=new Zt,ps=new Z,vn=new Xn,sr=new Xn,qt=new Z,dn=class i extends Un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?xr:_r)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return ac.lookAt(e),ac.updateMatrix(),this.applyMatrix4(ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new wt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];vn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sr.setFromBufferAttribute(o),this.morphTargetsRelative?(qt.addVectors(vn.min,sr.min),vn.expandByPoint(qt),qt.addVectors(vn.max,sr.max),vn.expandByPoint(qt)):(vn.expandByPoint(sr.min),vn.expandByPoint(sr.max))}vn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)qt.fromBufferAttribute(o,c),l&&(ps.fromBufferAttribute(e,c),qt.add(ps)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let C=0;C<n.count;C++)o[C]=new Z,l[C]=new Z;let d=new Z,f=new Z,p=new Z,m=new Oe,g=new Oe,y=new Oe,u=new Z,h=new Z;function x(C,E,I){c[C]=c[E]=c[I]=1,d.fromBufferAttribute(n,C),f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,I),m.fromBufferAttribute(r,C),g.fromBufferAttribute(r,E),y.fromBufferAttribute(r,I),f.sub(d),p.sub(d),g.sub(m),y.sub(m);let U=1/(g.x*y.y-y.x*g.y);isFinite(U)&&(u.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(U),h.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(U),o[C].add(u),o[E].add(u),o[I].add(u),l[C].add(h),l[E].add(h),l[I].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let C=0,E=b.length;C<E;++C){let I=b[C],U=I.start,D=I.count;for(let R=U,B=U+D;R<B;R+=3)x(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let M=new Z,T=new Z,S=new Z,_=new Z;function v(C){S.fromBufferAttribute(s,C),_.copy(S);let E=o[C];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),T.crossVectors(_,E);let U=T.dot(l[C])<0?-1:1;a.setXYZW(C,M.x,M.y,M.z,U)}for(let C=0,E=n.count;C<E;++C)c[C]&&v(C);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,d=new Z,f=new Z;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),y=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,u),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,u),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d),m=0,g=0;for(let y=0,u=l.length;y<u;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let h=0;h<d;h++)p[g++]=c[m++]}return new Mn(p,d,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){let p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var oc=new Z,wp=new Z,Ap=new it,rn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=oc.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(oc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ap.getNormalMatrix(e),s=this.coplanarPoint(oc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tp=0,Ai=class extends Un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=es(),this.name="",this.type="Material",this.blending=Gs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ic,this.blendDst=Dc,this.blendEquation=$i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Oe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Oe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ri=new Z,lc=new Z,Ia=new Z,Da=new Z,qi=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){lc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),Da.copy(this.origin).sub(lc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=Da.dot(this.direction),l=-Da.dot(Ia),c=Da.lengthSq(),d=Math.abs(1-a*a),f,p,m,g;if(d>0)if(f=a*l-o,p=a*o-l,g=r*d,f>=0)if(p>=-g)if(p<=g){let y=1/d;f*=y,p*=y,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(lc).addScaledVector(Ia,p),m}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,p=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,u=t.z-a.z,h=n.x-a.x,x=n.y-a.y,b=n.z-a.z,M=Math.abs(l),T=Math.abs(c),S=Math.abs(d),_,v,C,E,I,U,D,R,B,G,O,Y;if(M>=T&&M>=S?(C=l,U=f,B=g,Y=h,l>=0?(_=c,v=d,E=p,I=m,D=y,R=u,G=x,O=b):(_=d,v=c,E=m,I=p,D=u,R=y,G=b,O=x)):T>=S?(C=c,U=p,B=y,Y=x,c>=0?(_=d,v=l,E=m,I=f,D=u,R=g,G=b,O=h):(_=l,v=d,E=f,I=m,D=g,R=u,G=h,O=b)):(C=d,U=m,B=u,Y=b,d>=0?(_=l,v=c,E=f,I=p,D=g,R=y,G=h,O=x):(_=c,v=l,E=p,I=f,D=y,R=g,G=x,O=h)),C===0)return null;let F=_/C,H=v/C,k=1/C,te=E-F*U,ie=I-H*U,$=D-F*B,L=R-H*B,z=G-F*Y,q=O-H*Y,K=z*L-q*$,J=te*q-ie*z,de=$*ie-L*te;if(s){if(K<0||J<0||de<0)return null}else if((K<0||J<0||de<0)&&(K>0||J>0||de>0))return null;let he=K+J+de;if(he===0)return null;let De=k*(K*U+J*B+de*Y);return(he>0?De<0:De>0)?null:this.at(De/he,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ds=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},hu=new _t,Vi=new qi,La=new wi,uu=new Z,Na=new Z,Ua=new Z,Fa=new Z,cc=new Z,Oa=new Z,du=new Z,Ba=new Z,fn=class extends Zt{constructor(e=new dn,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],f=r[l];d!==0&&(cc.fromBufferAttribute(f,e),a?Oa.addScaledVector(cc,d):Oa.addScaledVector(cc.sub(t),d))}t.add(Oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Vi.copy(e.ray).recast(e.near),!(La.containsPoint(Vi.origin)===!1&&(Vi.intersectSphere(La,uu)===null||Vi.origin.distanceToSquared(uu)>(e.far-e.near)**2))&&(hu.copy(r).invert(),Vi.copy(e.ray).applyMatrix4(hu),!(n.boundingBox!==null&&Vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=p.length;g<y;g++){let u=p[g],h=a[u.materialIndex],x=Math.max(u.start,m.start),b=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let M=x,T=b;M<T;M+=3){let S=o.getX(M),_=o.getX(M+1),v=o.getX(M+2);s=za(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let u=g,h=y;u<h;u+=3){let x=o.getX(u),b=o.getX(u+1),M=o.getX(u+2);s=za(this,a,e,n,c,d,f,x,b,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=p.length;g<y;g++){let u=p[g],h=a[u.materialIndex],x=Math.max(u.start,m.start),b=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=x,T=b;M<T;M+=3){let S=M,_=M+1,v=M+2;s=za(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let u=g,h=y;u<h;u+=3){let x=u,b=u+1,M=u+2;s=za(this,a,e,n,c,d,f,x,b,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};function Ep(i,e,t,n,s,r,a,o){let l;if(e.side===on?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Na),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Fa);let d=Ep(i,e,t,n,Na,Ua,Fa,du);if(d){let f=new Z;Si.getBarycoord(du,Na,Ua,Fa,f),s&&(d.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new Oe)),r&&(d.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new Oe)),a&&(d.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new Z,materialIndex:0};Si.getNormal(Na,Ua,Fa,p.normal),d.face=p,d.barycoord=f}return d}var Yi=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Yt,d=Yt,f,p){super(null,a,o,l,c,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yr=class extends Mn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ms=new _t,fu=new _t,ka=[],pu=new Xn,Cp=new _t,rr=new fn,ar=new wi,vr=class extends fn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),pu.copy(e.boundingBox).applyMatrix4(ms),this.boundingBox.union(pu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ms),ar.copy(e.boundingSphere).applyMatrix4(ms),this.boundingSphere.union(ar)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),e.ray.intersectsSphere(ar)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ms),fu.multiplyMatrices(n,ms),rr.matrixWorld=fu,rr.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new yr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yi(new Float32Array(s*this.count),s,this.count,Oo,ln));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Hi=new wi,Rp=new Oe(.5,.5),Ga=new Z,Ti=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],p=r[6],m=r[7],g=r[8],y=r[9],u=r[10],h=r[11],x=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,m-d,h-g,T-x).normalize(),s[1].setComponents(c+a,m+d,h+g,T+x).normalize(),s[2].setComponents(c+o,m+f,h+y,T+b).normalize(),s[3].setComponents(c-o,m-f,h-y,T-b).normalize(),n)s[4].setComponents(l,p,u,M).normalize(),s[5].setComponents(c-l,m-p,h-u,T-M).normalize();else if(s[4].setComponents(c-l,m-p,h-u,T-M).normalize(),t===Rn)s[5].setComponents(c+l,m+p,h+u,T+M).normalize();else if(t===As)s[5].setComponents(l,p,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(e){Hi.center.set(0,0,0);let t=Rp.distanceTo(e.center);return Hi.radius=.7071067811865476+t,Hi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},mu=new _t,oo=class i{constructor(){this.coordinateSystem=Rn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];mu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(mu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ti),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Mr=class extends Qt{constructor(e=[],t=ji,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Sr=class extends Qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends Qt{constructor(e,t,n=On,s,r,a,o=Yt,l=Yt,c,d=hi,f=1){if(d!==hi&&d!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rs(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},br=class extends ui{constructor(e,t=On,n=ji,s,r,a=Yt,o=Yt,l,c=hi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},wr=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class i extends dn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],f=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2));function g(y,u,h,x,b,M,T,S,_,v,C){let E=M/_,I=T/v,U=M/2,D=T/2,R=S/2,B=_+1,G=v+1,O=0,Y=0,F=new Z;for(let H=0;H<G;H++){let k=H*I-D;for(let te=0;te<B;te++){let ie=te*E-U;F[y]=ie*x,F[u]=k*b,F[h]=R,c.push(F.x,F.y,F.z),F[y]=0,F[u]=0,F[h]=S>0?1:-1,d.push(F.x,F.y,F.z),f.push(te/_),f.push(1-H/v),O+=1}}for(let H=0;H<v;H++)for(let k=0;k<_;k++){let te=p+k+B*H,ie=p+k+B*(H+1),$=p+(k+1)+B*(H+1),L=p+(k+1)+B*H;l.push(te,ie,L),l.push(ie,$,L),Y+=6}o.addGroup(m,Y,C),m+=Y,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var Ar=class i extends dn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],g=0,y=[],u=n/2,h=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new wt(f,3)),this.setAttribute("normal",new wt(p,3)),this.setAttribute("uv",new wt(m,2));function x(){let M=new Z,T=new Z,S=0,_=(t-e)/n;for(let v=0;v<=r;v++){let C=[],E=v/r,I=E*(t-e)+e;for(let U=0;U<=s;U++){let D=U/s,R=D*l+o,B=Math.sin(R),G=Math.cos(R);T.x=I*B,T.y=-E*n+u,T.z=I*G,f.push(T.x,T.y,T.z),M.set(B,_,G).normalize(),p.push(M.x,M.y,M.z),m.push(D,1-E),C.push(g++)}y.push(C)}for(let v=0;v<s;v++)for(let C=0;C<r;C++){let E=y[C][v],I=y[C+1][v],U=y[C+1][v+1],D=y[C][v+1];(e>0||C!==0)&&(d.push(E,I,D),S+=3),(t>0||C!==r-1)&&(d.push(I,U,D),S+=3)}c.addGroup(h,S,0),h+=S}function b(M){let T=g,S=new Oe,_=new Z,v=0,C=M===!0?e:t,E=M===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,u*E,0),p.push(0,E,0),m.push(.5,.5),g++;let I=g;for(let U=0;U<=s;U++){let R=U/s*l+o,B=Math.cos(R),G=Math.sin(R);_.x=C*G,_.y=u*E,_.z=C*B,f.push(_.x,_.y,_.z),p.push(0,E,0),S.x=B*.5+.5,S.y=G*.5*E+.5,m.push(S.x,S.y),g++}for(let U=0;U<s;U++){let D=T+U,R=I+U;M===!0?d.push(R,R+1,D):d.push(R+1,R,D),v+=3}c.addGroup(h,v,M===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(a-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Oe:new Z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,s=[],r=[],a=[],o=new Z,l=new _t;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new Z)}r[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(at(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(at(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ls=class extends bn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Oe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*f+this.aX,c=p*f+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends Ls{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function nh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,f){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+f)+(l-o)/f;p*=d,m*=d,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var gu=new Z,_u=new Z,hc=new nh,uc=new nh,dc=new nh,co=class extends bn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(_u.subVectors(s[0],s[1]).add(s[0]),c=_u);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(gu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=gu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(d),m);y<1e-4&&(y=1),g<1e-4&&(g=y),u<1e-4&&(u=y),hc.initNonuniformCatmullRom(c.x,f.x,p.x,d.x,g,y,u),uc.initNonuniformCatmullRom(c.y,f.y,p.y,d.y,g,y,u),dc.initNonuniformCatmullRom(c.z,f.z,p.z,d.z,g,y,u)}else this.curveType==="catmullrom"&&(hc.initCatmullRom(c.x,f.x,p.x,d.x,this.tension),uc.initCatmullRom(c.y,f.y,p.y,d.y,this.tension),dc.initCatmullRom(c.z,f.z,p.z,d.z,this.tension));return n.set(hc.calc(l),uc.calc(l),dc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function xu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pp(i,e){let t=1-i;return t*t*e}function Ip(i,e){return 2*(1-i)*i*e}function Dp(i,e){return i*i*e}function hr(i,e,t,n){return Pp(i,e)+Ip(i,t)+Dp(i,n)}function Lp(i,e){let t=1-i;return t*t*t*e}function Np(i,e){let t=1-i;return 3*t*t*i*e}function Up(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function ur(i,e,t,n,s){return Lp(i,e)+Np(i,t)+Up(i,n)+Fp(i,s)}var Tr=class extends bn{constructor(e=new Oe,t=new Oe,n=new Oe,s=new Oe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(e,s.x,r.x,a.x,o.x),ur(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends bn{constructor(e=new Z,t=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ur(e,s.x,r.x,a.x,o.x),ur(e,s.y,r.y,a.y,o.y),ur(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Er=class extends bn{constructor(e=new Oe,t=new Oe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Oe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Oe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends bn{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cr=class extends bn{constructor(e=new Oe,t=new Oe,n=new Oe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Oe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(e,s.x,r.x,a.x),hr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends bn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(hr(e,s.x,r.x,a.x),hr(e,s.y,r.y,a.y),hr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rr=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Oe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(xu(o,l.x,c.x,d.x,f.x),xu(o,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Oe().fromArray(s))}return this}},yu=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:co,CubicBezierCurve:Tr,CubicBezierCurve3:ho,EllipseCurve:Ls,LineCurve:Er,LineCurve3:uo,QuadraticBezierCurve:Cr,QuadraticBezierCurve3:fo,SplineCurve:Rr}),po=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new yu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Pr=class extends po{constructor(e){super(),this.type="Path",this.currentPoint=new Oe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Er(this.currentPoint.clone(),new Oe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Cr(this.currentPoint.clone(),new Oe(e,t),new Oe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Tr(this.currentPoint.clone(),new Oe(e,t),new Oe(n,s),new Oe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Rr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ls(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ns=class extends Pr{constructor(e){super(e),this.uuid=es(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Pr().fromJSON(s))}return this}};function Op(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=xd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,f=l;for(let p=t;p<s;p+=t){let m=i[p],g=i[p+1];m<o&&(o=m),g<l&&(l=g),m>d&&(d=m),g>f&&(f=g)}c=Math.max(d-o,f-l),c=c!==0?32767/c:0}return Ir(r,a,t,o,l,c,0),a}function xd(i,e,t,n,s){let r;if(s===Qp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=vu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=vu(a/n|0,i[a],i[a+1],r);return r&&Us(r,r.next)&&(Lr(r),r=r.next),r}function Zi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Us(t,t.next)||Pt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Ir(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Yp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zp(i,n,s,r):Bp(i)){e.push(l.i,i.i,c.i),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kp(Zi(i),e),Ir(i,e,t,n,s,r,2)):a===2&&Gp(i,e,t,n,s,r):Ir(Zi(i),e,t,n,s,r,1);break}}}function Bp(i){let e=i.prev,t=i,n=i.next;if(Pt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),f=Math.min(o,l,c),p=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=p&&g.y>=f&&g.y<=m&&or(s,o,r,l,a,c,g.x,g.y)&&Pt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Pt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,f=r.y,p=a.y,m=Math.min(o,l,c),g=Math.min(d,f,p),y=Math.max(o,l,c),u=Math.max(d,f,p),h=xc(m,g,e,t,n),x=xc(y,u,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=h&&M&&M.z<=x;){if(b.x>=m&&b.x<=y&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&or(o,d,l,f,c,p,b.x,b.y)&&Pt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=m&&M.x<=y&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&or(o,d,l,f,c,p,M.x,M.y)&&Pt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=y&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&or(o,d,l,f,c,p,b.x,b.y)&&Pt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=y&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&or(o,d,l,f,c,p,M.x,M.y)&&Pt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Us(n,s)&&vd(n,t,t.next,s)&&Dr(n,s)&&Dr(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return Zi(t)}function Gp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kp(a,o)){let l=Md(a,o);a=Zi(a,a.next),l=Zi(l,l.next),Ir(a,e,t,n,s,r,0),Ir(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=xd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Hp);for(let r=0;r<s.length;r++)t=Wp(s[r],t);return t}function Hp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wp(i,e){let t=Xp(i,e);if(!t)return e;let n=Md(t,i);return Zi(n,n.next),Zi(t,t.next)}function Xp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Us(i,t))return t;do{if(Us(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&yd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Dr(t,i)&&(f<d||f===d&&(t.x>a.x||t.x===a.x&&qp(a,t)))&&(a=t,d=f)}t=t.next}while(t!==o);return a}function qp(i,e){return Pt(i.prev,i,e.prev)<0&&Pt(e.next,i,i.next)<0}function Yp(i,e,t,n){let s=i;do s.z===0&&(s.z=xc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function xc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function yd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function or(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&yd(i,e,t,n,s,r,a,o)}function Kp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$p(i,e)&&(Dr(i,e)&&Dr(e,i)&&jp(i,e)&&(Pt(i.prev,i,e.prev)||Pt(i,e.prev,e))||Us(i,e)&&Pt(i.prev,i,i.next)>0&&Pt(e.prev,e,e.next)>0)}function Pt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Us(i,e){return i.x===e.x&&i.y===e.y}function vd(i,e,t,n){let s=Ha(Pt(i,e,t)),r=Ha(Pt(i,e,n)),a=Ha(Pt(t,n,i)),o=Ha(Pt(t,n,e));return!!(s!==r&&a!==o||s===0&&Va(i,t,e)||r===0&&Va(i,n,e)||a===0&&Va(t,i,n)||o===0&&Va(t,e,n))}function Va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function $p(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&vd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Dr(i,e){return Pt(i.prev,i,i.next)<0?Pt(i,e,i.next)>=0&&Pt(i,i.prev,e)>=0:Pt(i,e,i.prev)<0||Pt(i,i.next,e)<0}function jp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Md(i,e){let t=yc(i.i,i.x,i.y),n=yc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function vu(i,e,t,n){let s=yc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function yc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var vc=class{static triangulate(e,t,n=2){return Op(e,t,n)}},Ms=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Mu(e),Su(n,e);let a=e.length;t.forEach(Mu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Su(n,t[l]);let o=vc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Su(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ji=class i extends dn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,p=t/l,m=[],g=[],y=[],u=[];for(let h=0;h<d;h++){let x=h*p-a;for(let b=0;b<c;b++){let M=b*f-r;g.push(M,-x,0),y.push(0,0,1),u.push(b/o),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){let b=x+c*h,M=x+c*(h+1),T=x+1+c*(h+1),S=x+1+c*h;m.push(b,M,S),m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Nr=class i extends dn{constructor(e=new Ns([new Oe(0,.5),new Oe(-.5,-.5),new Oe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new wt(s,3)),this.setAttribute("normal",new wt(r,3)),this.setAttribute("uv",new wt(a,2));function c(d){let f=s.length/3,p=d.extractPoints(t),m=p.shape,g=p.holes;Ms.isClockWise(m)===!1&&(m=m.reverse());for(let u=0,h=g.length;u<h;u++){let x=g[u];Ms.isClockWise(x)===!0&&(g[u]=x.reverse())}let y=Ms.triangulateShape(m,g);for(let u=0,h=g.length;u<h;u++){let x=g[u];m=m.concat(x)}for(let u=0,h=m.length;u<h;u++){let x=m[u];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let u=0,h=y.length;u<h;u++){let x=y[u],b=x[0]+f,M=x[1]+f,T=x[2]+f;n.push(b,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return em(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function em(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Ur=class i extends dn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],f=new Z,p=new Z,m=[],g=[],y=[],u=[];for(let h=0;h<=n;h++){let x=[],b=h/n,M=a+b*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),_=0;h===0&&a===0?_=.5/t:h===n&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){let C=v/t,E=s+C*r;f.x=-S*Math.cos(E),f.y=T,f.z=S*Math.sin(E),g.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),u.push(C+_,1-b),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<t;x++){let b=d[h][x+1],M=d[h][x],T=d[h+1][x],S=d[h+1][x+1];(h!==0||a>0)&&m.push(b,M,S),(h!==n-1||l<Math.PI)&&m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new wt(g,3)),this.setAttribute("normal",new wt(y,3)),this.setAttribute("uv",new wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Fr=class i extends dn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],f=[],p=new Z,m=new Z,g=new Z;for(let y=0;y<=n;y++){let u=a+y/n*o;for(let h=0;h<=s;h++){let x=h/s*r;m.x=(e+t*Math.cos(u))*Math.cos(x),m.y=(e+t*Math.cos(u))*Math.sin(x),m.z=t*Math.sin(u),c.push(m.x,m.y,m.z),p.x=e*Math.cos(x),p.y=e*Math.sin(x),g.subVectors(m,p).normalize(),d.push(g.x,g.y,g.z),f.push(h/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let u=1;u<=s;u++){let h=(s+1)*y+u-1,x=(s+1)*(y-1)+u-1,b=(s+1)*(y-1)+u,M=(s+1)*y+u;l.push(h,x,M),l.push(x,b,M)}this.setIndex(l),this.setAttribute("position",new wt(c,3)),this.setAttribute("normal",new wt(d,3)),this.setAttribute("uv",new wt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ts(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(bu(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(bu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function en(i){let e={};for(let t=0;t<i.length;t++){let n=ts(i[t]);for(let s in n)e[s]=n[s]}return e}function bu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ih(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Sd={clone:ts,merge:en},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ts(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Oe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Et().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends qn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Fs=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Or=class extends Fs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Wi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var go=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function gs(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:mc,endingEnd:mc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gc:r=e,o=2*t-n;break;case _c:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case gc:a=e,l=2*n-t;break;case _c:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,u=y*g,h=-p*u+2*p*y-p*g,x=(1+p)*u+(-1.5-2*p)*y+(-.5+p)*g+1,b=(-1-m)*u+(1.5+m)*y+.5*g,M=m*u-m*y;for(let T=0;T!==o;++T)r[T]=h*a[d+T]+x*a[c+T]+b*a[l+T]+M*a[f+T];return r}},yo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),f=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*d;return r}},vo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(s-t),y=1-g;for(let u=0;u!==o;++u)r[u]=a[c+u]*y+a[l+u]*g;return r}let p=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[c+g],u=a[l+g],h=m*p+g*2,x=f[h],b=f[h+1],M=e*p+g*2,T=d[M],S=d[M+1],_=rm(n,t,x,T,s);r[g]=bd(_,y,b,S,u)}return r}};function bd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=bd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var wn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gs(t,this.TimeBufferType),this.values=gs(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gs(e.times,Array),values:gs(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wa(e.settings)&&(n.settings={inTangents:gs(e.settings.inTangents,Array),outTangents:gs(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case dr:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case pc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return dr;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wa(this.settings)&&(wu(this.settings.inTangents,e),wu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wa(this.settings)&&(Au(this.settings.inTangents,e),Au(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(je("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(je("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){je("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){je("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){je("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[p+g]||y!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function wu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Au(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}wn.prototype.ValueTypeName="";wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=io;var Ri=class extends wn{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=dr;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var wo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)an.slerpFlat(r,0,a,c-o,a,c,l);return r}},Br=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Br.prototype.ValueTypeName="quaternion";Br.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends wn{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=dr;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends wn{constructor(e,t,n,s){super(e,t,n,s)}};Ao.prototype.ValueTypeName="vector";var Ss={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Tu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Tu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Tu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var To=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wd=new To,Ii=class{constructor(e){this.manager=e!==void 0?e:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},Mc=class extends Error{constructor(e,t){super(e),this.response=t}},Eo=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ss.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=ai[e],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0,y=0,u=new ReadableStream({start(h){x();function x(){f.read().then(({done:b,value:M})=>{if(b)h.close();else{y+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let S=0,_=d.length;S<_;S++){let v=d[S];v.onProgress&&v.onProgress(T)}h.enqueue(M),x()}},b=>{h.error(b)})}}});return new Response(u)}else throw new Mc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{Ss.add(`file:${e}`,c);let d=ai[e];delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let d=ai[e];if(d===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var _s=new WeakMap,Co=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ss.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=_s.get(a);f===void 0&&(f=[],_s.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Ts("img");function l(){d(),t&&t(this);let f=_s.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onLoad&&m.onLoad(this)}_s.delete(this),r.manager.itemEnd(e)}function c(f){d(),s&&s(f),Ss.remove(`image:${e}`);let p=_s.get(this)||[];for(let m=0;m<p.length;m++){let g=p[m];g.onError&&g.onError(f)}_s.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ss.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var zr=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Yi,o=new Eo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(d){s!==void 0?s(d):je(d);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new Yi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:Cn,e.wrapT=t.wrapT!==void 0?t.wrapT:Cn,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Zn),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},kr=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new Qt,a=new Co(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Os=class extends Zt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Gr=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},fc=new _t,Eu=new Z,Cu=new Z,Vr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=pn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Eu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eu),Cu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Cu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){fc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(fc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===As||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(fc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new Z,qa=new an,Wn=new Z,Hr=class extends Zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Rn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Wn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,Wn),Wn.x===1&&Wn.y===1&&Wn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Wn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new Z,Ru=new Oe,Pu=new Oe,jt=class extends Hr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Cs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(lr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Cs*2*Math.atan(Math.tan(lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Ru,Pu),t.subVectors(Pu,Ru)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(lr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Sc=class extends Vr{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Wr=class extends Os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Sc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Xr=class extends Hr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bc=class extends Vr{constructor(){super(new Xr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},qr=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Zt.DEFAULT_UP),this.updateMatrix(),this.target=new Zt,this.shadow=new bc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var xs=-90,ys=1,Bs=class extends Zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(xs,ys,e,t);s.layers=this.layers,this.add(s);let r=new jt(xs,ys,e,t);r.layers=this.layers,this.add(r);let a=new jt(xs,ys,e,t);a.layers=this.layers,this.add(a);let o=new jt(xs,ys,e,t);o.layers=this.layers,this.add(o);let l=new jt(xs,ys,e,t);l.layers=this.layers,this.add(l);let c=new jt(xs,ys,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===As)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ro=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var sh="\\[\\]\\.:\\/",am=new RegExp("["+sh+"]","g"),rh="[^"+sh+"]",om="[^"+sh.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",rh),cm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rh),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rh),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],wc=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(am,"")}static parseTrackName(e){let t=dm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){je("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){je("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){je("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){je("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){je("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){je("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;je("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){je("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=wc;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ty=new Float32Array(1);var Iu=new _t,Yr=class{constructor(e,t,n=0,s=1/0){this.ray=new qi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ps,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Iu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Iu),this}intersectObject(e,t=!0,n=[]){return Ac(e,this,n,t),n.sort(Du),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ac(e[s],this,n,t);return n.sort(Du),n}};function Du(i,e){return i.distance-e.distance}function Ac(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Ac(r[a],e,t,!0)}}var zs=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var uh=class uh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};uh.prototype.isMatrix2=!0;var Tc=uh;var Zr=class extends Un{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function ah(i,e,t,n){let s=pm(n);switch(t){case Xc:return i*e;case Oo:return i*e/s.components*s.byteLength;case Bo:return i*e/s.components*s.byteLength;case Ui:return i*e*2/s.components*s.byteLength;case zo:return i*e*2/s.components*s.byteLength;case qc:return i*e*3/s.components*s.byteLength;case Bn:return i*e*4/s.components*s.byteLength;case ko:return i*e*4/s.components*s.byteLength;case jr:case Qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Ho:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case na:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ia:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pm(i){switch(i){case pn:case Gc:return{byteLength:1,components:1};case Ws:case Vc:case cn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case On:case No:case ln:return{byteLength:4,components:1};case Hc:case Wc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function qd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gm(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){let g=f[p],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ym=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Am=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Tm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Em=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rm=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Im=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,km=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Gm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Vm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ym=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Jm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$m=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,eg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,tg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ng=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ig=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,og=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,cg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hg=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ug=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,pg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,mg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,_g=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xg=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,yg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,wg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ag=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Tg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Eg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pg=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ig=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ug=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,zg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Xg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,qg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,e0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,t0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,n0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,s0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r0=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,a0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,h0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,u0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,d0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,f0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,m0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y0=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,A0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,T0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,P0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,I0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,L0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,U0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,F0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,O0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,B0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,z0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,k0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,G0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,X0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Y0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:_m,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:vm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:wm,batching_pars_vertex:Am,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Dm,clipping_planes_pars_fragment:Lm,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Um,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:km,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Hm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:$m,envmap_physical_pars_fragment:lg,envmap_vertex:jm,fog_vertex:Qm,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:_g,lightprobes_pars_fragment:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:bg,map_pars_fragment:wg,map_particle_fragment:Ag,map_particle_pars_fragment:Tg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Dg,morphtarget_vertex:Lg,normal_fragment_begin:Ng,normal_fragment_maps:Ug,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Hg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:y0,cube_vert:v0,cube_frag:M0,depth_vert:S0,depth_frag:b0,distance_vert:w0,distance_frag:A0,equirect_vert:T0,equirect_frag:E0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:D0,meshlambert_frag:L0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:H0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},ze={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Kn={basic:{uniforms:en([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:en([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:en([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:en([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:en([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new rt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:en([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:en([ze.points,ze.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:en([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:en([ze.common,ze.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:en([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:en([ze.sprite,ze.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:en([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:en([ze.lights,ze.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Kn.physical={uniforms:en([Kn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var xl={r:0,b:0,g:0},K0=new _t,Yd=new it;Yd.set(-1,0,0,0,1,0,0,0,1);function $0(i,e,t,n,s,r){let a=new rt(0),o=s===!0?0:1,l,c,d=null,f=0,p=null;function m(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let M=x.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(x){let b=!1,M=m(x);M===null?u(a,o):M&&M.isColor&&(u(M,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,b){let M=m(b);M&&M.isCubeTexture?(c===void 0&&(c=new fn(new Ei(1,1,1),new qn({name:"BackgroundCubeMaterial",uniforms:ts(Kn.backgroundCube.uniforms),vertexShader:Kn.backgroundCube.vertexShader,fragmentShader:Kn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Yd),c.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new fn(new Ji(2,2),new qn({name:"BackgroundMaterial",uniforms:ts(Kn.background.uniforms),vertexShader:Kn.background.vertexShader,fragmentShader:Kn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,b){x.getRGB(xl,ih(i)),t.buffers.color.setClear(xl.r,xl.g,xl.b,b,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,u(a,o)},render:g,addToRenderList:y,dispose:h}}function j0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(I,U,D,R,B){let G=!1,O=f(I,R,D,U);r!==O&&(r=O,c(r.object)),G=m(I,R,D,B),G&&g(I,R,D,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(I,U,D,R),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function f(I,U,D,R){let B=R.wireframe===!0,G=n[U.id];G===void 0&&(G={},n[U.id]=G);let O=I.isInstancedMesh===!0?I.id:0,Y=G[O];Y===void 0&&(Y={},G[O]=Y);let F=Y[D.id];F===void 0&&(F={},Y[D.id]=F);let H=F[B];return H===void 0&&(H=p(l()),F[B]=H),H}function p(I){let U=[],D=[],R=[];for(let B=0;B<t;B++)U[B]=0,D[B]=0,R[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:D,attributeDivisors:R,object:I,attributes:{},index:null}}function m(I,U,D,R){let B=r.attributes,G=U.attributes,O=0,Y=D.getAttributes();for(let F in Y)if(Y[F].location>=0){let k=B[F],te=G[F];if(te===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),k===void 0||k.attribute!==te||te&&k.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==R}function g(I,U,D,R){let B={},G=U.attributes,O=0,Y=D.getAttributes();for(let F in Y)if(Y[F].location>=0){let k=G[F];k===void 0&&(F==="instanceMatrix"&&I.instanceMatrix&&(k=I.instanceMatrix),F==="instanceColor"&&I.instanceColor&&(k=I.instanceColor));let te={};te.attribute=k,k&&k.data&&(te.data=k.data),B[F]=te,O++}r.attributes=B,r.attributesNum=O,r.index=R}function y(){let I=r.newAttributes;for(let U=0,D=I.length;U<D;U++)I[U]=0}function u(I){h(I,0)}function h(I,U){let D=r.newAttributes,R=r.enabledAttributes,B=r.attributeDivisors;D[I]=1,R[I]===0&&(i.enableVertexAttribArray(I),R[I]=1),B[I]!==U&&(i.vertexAttribDivisor(I,U),B[I]=U)}function x(){let I=r.newAttributes,U=r.enabledAttributes;for(let D=0,R=U.length;D<R;D++)U[D]!==I[D]&&(i.disableVertexAttribArray(D),U[D]=0)}function b(I,U,D,R,B,G,O){O===!0?i.vertexAttribIPointer(I,U,D,B,G):i.vertexAttribPointer(I,U,D,R,B,G)}function M(I,U,D,R){y();let B=R.attributes,G=D.getAttributes(),O=U.defaultAttributeValues;for(let Y in G){let F=G[Y];if(F.location>=0){let H=B[Y];if(H===void 0&&(Y==="instanceMatrix"&&I.instanceMatrix&&(H=I.instanceMatrix),Y==="instanceColor"&&I.instanceColor&&(H=I.instanceColor)),H!==void 0){let k=H.normalized,te=H.itemSize,ie=e.get(H);if(ie===void 0)continue;let $=ie.buffer,L=ie.type,z=ie.bytesPerElement,q=L===i.INT||L===i.UNSIGNED_INT||H.gpuType===No;if(H.isInterleavedBufferAttribute){let K=H.data,J=K.isInterleavedBuffer===!0?K.stride:K.itemSize,de=H.offset;if(K.isInstancedInterleavedBuffer||K.isInstancedBufferAttribute){for(let he=0;he<F.locationSize;he++)h(F.location+he,K.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let he=0;he<F.locationSize;he++)u(F.location+he);i.bindBuffer(i.ARRAY_BUFFER,$);for(let he=0;he<F.locationSize;he++)b(F.location+he,te/F.locationSize,L,k,J*z,(de+te/F.locationSize*he)*z,q)}else{if(H.isInstancedBufferAttribute){for(let K=0;K<F.locationSize;K++)h(F.location+K,H.meshPerAttribute);I.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let K=0;K<F.locationSize;K++)u(F.location+K);i.bindBuffer(i.ARRAY_BUFFER,$);for(let K=0;K<F.locationSize;K++)b(F.location+K,te/F.locationSize,L,k,te*z,te/F.locationSize*K*z,q)}}else if(O!==void 0){let k=O[Y];if(k!==void 0)switch(k.length){case 2:i.vertexAttrib2fv(F.location,k);break;case 3:i.vertexAttrib3fv(F.location,k);break;case 4:i.vertexAttrib4fv(F.location,k);break;default:i.vertexAttrib1fv(F.location,k)}}}}x()}function T(){C();for(let I in n){let U=n[I];for(let D in U){let R=U[D];for(let B in R){let G=R[B];for(let O in G)d(G[O].object),delete G[O];delete R[B]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let U=n[I.id];for(let D in U){let R=U[D];for(let B in R){let G=R[B];for(let O in G)d(G[O].object),delete G[O];delete R[B]}}delete n[I.id]}function _(I){for(let U in n){let D=n[U];for(let R in D){let B=D[R];if(B[I.id]===void 0)continue;let G=B[I.id];for(let O in G)d(G[O].object),delete G[O];delete B[I.id]}}}function v(I){for(let U in n){let D=n[U],R=I.isInstancedMesh===!0?I.id:0,B=D[R];if(B!==void 0){for(let G in B){let O=B[G];for(let Y in O)d(O[Y].object),delete O[Y];delete B[G]}delete D[R],Object.keys(D).length===0&&delete n[U]}}}function C(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:u,disableUnusedAttributes:x}}function Q0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let p=0;for(let m=0;m<d;m++)p+=c[m];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Bn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let v=_===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==pn&&_!==ln&&!v&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:S}}function t_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new rn,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,y=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?d(null):c();else{let x=r?0:n,b=x*4,M=h.clippingState||null;l.value=M,M=d(g,p,b,m);for(let T=0;T!==b;++T)M[T]=t[T];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,g){let y=f!==null?f.length:0,u=null;if(y!==0){if(u=l.value,g!==!0||u===null){let h=m+y*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<h)&&(u=new Float32Array(h));for(let b=0,M=m;b!==y;++b,M+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(u,M),u[M+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,u}}var aa=class extends Sn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Mr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ei(5,5,5),r=new qn({name:"CubemapFromEquirect",uniforms:ts(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:on,blending:Ki});r.uniforms.tEquirect.value=t;let a=new fn(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Ut),new Bs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ad=256,n_=3,i_=20,Zd=256,Jd=16,s_=3,r_=new Z,a_=new rt,vl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Bs(1,10,null),this._boxMesh=new fn(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=r_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,p=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(a_));let u=new Bs(n,s,d);return u.position.copy(o),u.update(l,e),l.autoClear=f,l.autoClearColor=p,l.autoClearDepth=m,l.autoClearStencil=g,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ed(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ad,Qc(e))}_fromTexture(e,t){e.mapping===ji||e.mapping===Vs?this._setSize(e.image.length===0?Ad:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Td(e,!1,!1),n=Math.log2(e)-n_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Td(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ji||e.mapping===Vs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ed()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=o_(),this._integrationMaterial=l_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Jd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-s_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Zd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=c_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Td(i,e,t){return new aa(i,{minFilter:Zn,generateMipmaps:e,type:cn,colorSpace:Xi,depthBuffer:t})}function oa(i,e,t){return new qn({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:on,blending:Ki,depthTest:!1,depthWrite:!1})}function o_(){return oa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Zd}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function l_(){return oa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Jd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function c_(){return oa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${i_}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ed(){return oa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cd(){return oa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function h_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?a(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===Hs||m===Do)if(e.has(p)){let g=e.get(p).texture;return o(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let y=new aa(g.height);return y.fromEquirectangularTexture(i,p),e.set(p,y),p.addEventListener("dispose",c),o(y.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,g=m===Hs||m===Do,y=m===ji||m===Vs;if(g||y){let u=t.get(p),h=u!==void 0?u.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return n===null&&(n=new vl(i)),u=g?n.fromEquirectangular(p,u):n.fromCubemap(p,u),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),u.texture;if(u!==void 0)return u.texture;{let x=p.image;return g&&x&&x.height>0||y&&x&&l(x)?(n===null&&(n=new vl(i)),u=g?n.fromEquirectangular(p):n.fromCubemap(p),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),p.addEventListener("dispose",d),u.texture):null}}}return p}function o(p,m){return m===Hs?p.mapping=ji:m===Do&&(p.mapping=Vs),p}function l(p){let m=0,g=6;for(let y=0;y<g;y++)p[y]!==void 0&&m++;return m===g}function c(p){let m=p.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function u_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Wi("WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let u in g.attributes)e.remove(g.attributes[u]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function d(g){let y=g.attributes;for(let u in y)e.update(y[u],i.ARRAY_BUFFER)}function f(g){let y=g.index,u=g.attributes.position,h=0;if(u===void 0)return;let x=y!==null?y.array.length:u.array.length/3-1,b=u.count>=65535?xr:_r,M=new b(Math.ceil(x/3)*6,1),T=M.array;if(y!==null){let _=y.array;h=y.version;for(let v=0,C=0;v<x;v+=3){let E=_[v+0],I=_[v+1],U=_[v+2];T[C++]=E,T[C++]=I,T[C++]=I,T[C++]=U,T[C++]=U,T[C++]=E}}else{h=u.version;for(let _=0,v=0;_<x;_+=3){let C=_+0,E=_+1,I=_+2;T[v++]=C,T[v++]=E,T[v++]=E,T[v++]=I,T[v++]=I,T[v++]=C}}M.version=h;let S=r.get(g);S&&e.remove(S),r.set(g,M)}function p(g){let y=r.get(g);if(y){let u=g.index;u!==null&&y.version<u.version&&f(g)}else f(g);return r.get(g)}function m(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:p,dispose:m}}function f_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*a,m),t.update(p,n,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let y=0;for(let u=0;u<m;u++)y+=p[u];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function p_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){let n=new WeakMap,s=new Et;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==f){let C=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",C)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;m===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let M=o.attributes.position.count*b,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*f),_=new pr(S,M,T,f);_.type=ln,_.needsUpdate=!0;let v=b*4;for(let E=0;E<f;E++){let I=u[E],U=h[E],D=x[E],R=M*T*4*E;for(let B=0;B<I.count;B++){let G=B*v;m===!0&&(s.fromBufferAttribute(I,B),S[R+G+0]=s.x,S[R+G+1]=s.y,S[R+G+2]=s.z,S[R+G+3]=0),g===!0&&(s.fromBufferAttribute(U,B),S[R+G+4]=s.x,S[R+G+5]=s.y,S[R+G+6]=s.z,S[R+G+7]=0),y===!0&&(s.fromBufferAttribute(D,B),S[R+G+8]=s.x,S[R+G+9]=s.y,S[R+G+10]=s.z,S[R+G+11]=D.itemSize===4?s.w:1)}}p={count:f,texture:_,size:new Oe(M,T)},n.set(o,p),o.addEventListener("dispose",C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function g_(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var __={[Nc]:"LINEAR_TONE_MAPPING",[Uc]:"REINHARD_TONE_MAPPING",[Fc]:"CINEON_TONE_MAPPING",[Kr]:"ACES_FILMIC_TONE_MAPPING",[Bc]:"AGX_TONE_MAPPING",[zc]:"NEUTRAL_TONE_MAPPING",[Oc]:"CUSTOM_TONE_MAPPING"};function x_(i,e,t,n,s,r){let a=new Sn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new dn;d.setAttribute("position",new wt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new wt([0,2,0,0,2,0],2));let f=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new fn(d,f),m=new Xr(-1,1,1,-1,0,1),g=null,y=null,u=!1,h,x=null,b=[],M=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<b.length;_++){let v=b[_];v.setSize&&v.setSize(T,S)}},this.setEffects=function(T){b=T,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,_=a.height;b.length>0&&o===null&&(o=new Sn(S,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}),l=new Sn(S,_,{type:cn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&b.some(C=>C.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new ui(S,_),r===!0&&(c.format=di,c.type=Qi)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let C=0;C<b.length;C++){let E=b[C];E.setSize&&E.setSize(S,_),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(T,S){if(u||T.toneMapping===Yn&&b.length===0)return!1;if(x=S,S!==null){let _=S.width,v=S.height;(a.width!==_||a.height!==v)&&this.setSize(_,v)}return M===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=Yn,!0},this.hasRenderPass=function(){return M},this.end=function(T,S){T.toneMapping=h,u=!0;let _=a,v=o;for(let C=0;C<b.length;C++){let E=b[C];E.enabled!==!1&&(E.render(T,v,_,S),E.needsSwap!==!1&&(_=v,v=v===o?l:o))}if(g!==T.outputColorSpace||y!==T.toneMapping){g=T.outputColorSpace,y=T.toneMapping,f.defines={},pt.getTransfer(g)===vt&&(f.defines.SRGB_TRANSFER="");let C=__[y];C&&(f.defines[C]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(p,m),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var Kd=new Qt,$d=new ui(1,1),jd=new br(1),Qd=new pr,ef=new ao,tf=new Mr,Rd=[],Pd=[],Id=new Float32Array(16),Dd=new Float32Array(9),Ld=new Float32Array(4);function qs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Rd[s];if(r===void 0&&(r=new Float32Array(s),Rd[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sl(i,e){let t=Pd[e];t===void 0&&(t=new Int32Array(e),Pd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Ld.set(n),i.uniformMatrix2fv(this.addr,!1,Ld),Vt(t,n)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Dd.set(n),i.uniformMatrix3fv(this.addr,!1,Dd),Vt(t,n)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Id.set(n),i.uniformMatrix4fv(this.addr,!1,Id),Vt(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function bl(i){return i.version===0&&(i.compareFunction=Jc,i.needsUpdate=!0),i}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bl($d):r=Kd,t.setTexture2D(e||r,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||ef,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bl(jd):r=tf,t.setTextureCube(e||r,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Qd,s)}function B_(i){switch(i){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return I_;case 36295:return D_;case 36296:return L_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,e){i.uniform1fv(this.addr,e)}function k_(i,e){let t=qs(e,this.size,2);i.uniform2fv(this.addr,t)}function G_(i,e){let t=qs(e,this.size,3);i.uniform3fv(this.addr,t)}function V_(i,e){let t=qs(e,this.size,4);i.uniform4fv(this.addr,t)}function H_(i,e){let t=qs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W_(i,e){let t=qs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){let t=qs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q_(i,e){i.uniform1iv(this.addr,e)}function Y_(i,e){i.uniform2iv(this.addr,e)}function Z_(i,e){i.uniform3iv(this.addr,e)}function J_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function $_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function Q_(i,e){i.uniform4uiv(this.addr,e)}function ex(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bl($d):a=Kd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tx(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||ef,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bl(jd):a=tf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ix(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qd,r[a])}function sx(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return G_;case 35666:return V_;case 35674:return H_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return $_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},mh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},gh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},dh=/(\w+)(\])?(\[|\.)?/g;function Nd(i,e){i.seq.push(e),i.map[e.id]=e}function rx(i,e,t){let n=i.name,s=n.length;for(dh.lastIndex=0;;){let r=dh.exec(n),a=dh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nd(t,c===void 0?new ph(o,i,e):new mh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new gh(o),Nd(t,f)),t=f}}}var Xs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ud(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ax=37297,ox=0;function lx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Fd=new it;function cx(i){pt._getMatrix(Fd,pt.workingColorSpace,i);let e=`mat3( ${Fd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case fr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Od(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lx(i.getShaderSource(e),o)}else return r}function hx(i,e){let t=cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ux={[Nc]:"Linear",[Uc]:"Reinhard",[Fc]:"Cineon",[Kr]:"ACESFilmic",[Bc]:"AgX",[zc]:"Neutral",[Oc]:"Custom"};function dx(i,e){let t=ux[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yl=new Z;function fx(){pt.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ra).join(`
`)}function mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ra(i){return i!==""}function Bd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function zd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function _h(i){return i.replace(_x,xx)}function xx(i,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return _h(t)}var yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kd(i){return i.replace(yx,vx)}function vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Mx={[Jr]:"SHADOWMAP_TYPE_PCF",[ks]:"SHADOWMAP_TYPE_VSM"};function Sx(i){return Mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bx={[Vs]:"ENVMAP_MODE_REFRACTION"};function wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ax={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[Qu]:"ENVMAP_BLENDING_MIX",[ed]:"ENVMAP_BLENDING_ADD"};function Tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[i.combine]||"ENVMAP_BLENDING_NONE"}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Sx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=wx(t),f=Tx(t),p=px(t),m=mx(r),g=s.createProgram(),y,u,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ra).join(`
`),y.length>0&&(y+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ra).join(`
`),u.length>0&&(u+=`
`)):(y=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ra).join(`
`),u=[Gd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yn?"#define TONE_MAPPING":"",t.toneMapping!==Yn?ot.tonemapping_pars_fragment:"",t.toneMapping!==Yn?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ra).join(`
`)),a=_h(a),a=Bd(a,t),a=zd(a,t),o=_h(o),o=Bd(o,t),o=zd(o,t),a=kd(a),o=kd(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,u=["#define varying in",t.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=h+y+a,b=h+u+o,M=Ud(s,s.VERTEX_SHADER,x),T=Ud(s,s.FRAGMENT_SHADER,b);s.attachShader(g,M),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(E){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",U=s.getShaderInfoLog(M)||"",D=s.getShaderInfoLog(T)||"",R=I.trim(),B=U.trim(),G=D.trim(),O=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{let F=Od(s,M,"vertex"),H=Od(s,T,"fragment");je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+R+`
`+F+`
`+H)}else R!==""?Ze("WebGLProgram: Program Info Log:",R):(B===""||G==="")&&(Y=!1);Y&&(E.diagnostics={runnable:O,programLog:R,vertexShader:{log:B,prefix:y},fragmentShader:{log:G,prefix:u}})}s.deleteShader(M),s.deleteShader(T),_=new Xs(s,g),v=gx(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(g,ax)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var Cx=0,xh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new yh(e),t.set(e,n)),n}},yh=class{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}};function Rx(i){return i===Ui||i===na||i===ia}function Px(i,e,t,n,s,r){let a=new Ps,o=new xh,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,v,C,E,I,U){let D=E.fog,R=I.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||B,G),Y=p[_.type],F=n.precision;_.precision!==null&&(F=n.getMaxPrecision(_.precision),F!==_.precision&&Ze("WebGLProgram.getParameters:",_.precision,"not supported, using",F,"instead."));let H=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,k=H!==void 0?H.length:0,te=0;R.morphAttributes.position!==void 0&&(te=1),R.morphAttributes.normal!==void 0&&(te=2),R.morphAttributes.color!==void 0&&(te=3);let ie,$,L,z;if(Y){let be=Kn[Y];ie=be.vertexShader,$=be.fragmentShader}else{ie=_.vertexShader,$=_.fragmentShader;let be=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,be,st),L=be.id,z=st.id}let q=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),J=I.isInstancedMesh===!0,de=I.isBatchedMesh===!0,he=!!_.map,De=!!_.matcap,ge=!!O,ne=ge&&O.isPMREMTexture===!0,fe=!!_.aoMap,Ae=!!_.lightMap,xe=!!_.bumpMap&&_.wireframe===!1,me=!!_.normalMap,Re=!!_.displacementMap,Be=!!_.emissiveMap,Ne=!!_.metalnessMap,Ue=!!_.roughnessMap,ke=_.anisotropy>0,W=_.clearcoat>0,It=_.diffuseRoughness>0,ut=_.dispersion>0,mt=_.retroreflectivity>0,Le=_.iridescence>0,Ct=_.sheen>0,Ye=_.transmission>0,Je=ke&&!!_.anisotropyMap,N=W&&!!_.clearcoatMap,w=W&&!!_.clearcoatNormalMap,ee=W&&!!_.clearcoatRoughnessMap,_e=It&&!!_.diffuseRoughnessMap,ue=Le&&!!_.iridescenceMap,we=Le&&!!_.iridescenceThicknessMap,Pe=Ct&&!!_.sheenColorMap,le=Ct&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ee=!!_.specularColorMap,V=!!_.specularIntensityMap,ce=Ye&&!!_.transmissionMap,ae=Ye&&!!_.thicknessMap,Me=!!_.gradientMap,Se=!!_.alphaMap,Te=_.alphaTest>0,We=!!_.alphaHash,tt=!!_.extensions,ye=Yn;_.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(ye=i.toneMapping);let qe=ne?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Qe={shaderID:Y,shaderType:_.type,shaderName:_.name,vertexShader:ie,fragmentShader:$,defines:_.defines,customVertexShaderID:L,customFragmentShaderID:z,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:F,batching:de,batchingColor:de&&I._colorsTexture!==null,instancing:J,instancingColor:J&&I.instanceColor!==null,instancingMorph:J&&I.morphTexture!==null,outputColorSpace:q===null?i.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:he,matcap:De,envMap:ge,envMapMode:ge&&O.mapping,envMapPMREM:ne,envMapMaxLod:ne?qe.length-1:null,envMapSize:ne?qe[0].width:null,aoMap:fe,lightMap:Ae,bumpMap:xe,normalMap:me,displacementMap:Re,emissiveMap:Be,normalMapObjectSpace:me&&_.normalMapType===id,normalMapTangentSpace:me&&_.normalMapType===_l,packedNormalMap:me&&_.normalMapType===_l&&Rx(_.normalMap.format),metalnessMap:Ne,roughnessMap:Ue,anisotropy:ke,anisotropyMap:Je,clearcoat:W,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:ee,diffuseRoughness:It,diffuseRoughnessMap:_e,dispersion:ut,retroreflection:mt,iridescence:Le,iridescenceMap:ue,iridescenceThicknessMap:we,sheen:Ct,sheenColorMap:Pe,sheenRoughnessMap:le,specularMap:oe,specularColorMap:Ee,specularIntensityMap:V,transmission:Ye,transmissionMap:ce,thicknessMap:ae,gradientMap:Me,opaque:_.transparent===!1&&_.blending===Gs&&_.alphaToCoverage===!1,alphaMap:Se,alphaTest:Te,alphaHash:We,combine:_.combine,mapUv:he&&m(_.map.channel),aoMapUv:fe&&m(_.aoMap.channel),lightMapUv:Ae&&m(_.lightMap.channel),bumpMapUv:xe&&m(_.bumpMap.channel),normalMapUv:me&&m(_.normalMap.channel),displacementMapUv:Re&&m(_.displacementMap.channel),emissiveMapUv:Be&&m(_.emissiveMap.channel),metalnessMapUv:Ne&&m(_.metalnessMap.channel),roughnessMapUv:Ue&&m(_.roughnessMap.channel),anisotropyMapUv:Je&&m(_.anisotropyMap.channel),clearcoatMapUv:N&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:_e&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:ue&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:we&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&m(_.sheenRoughnessMap.channel),specularMapUv:oe&&m(_.specularMap.channel),specularColorMapUv:Ee&&m(_.specularColorMap.channel),specularIntensityMapUv:V&&m(_.specularIntensityMap.channel),transmissionMapUv:ce&&m(_.transmissionMap.channel),thicknessMapUv:ae&&m(_.thicknessMap.channel),alphaMapUv:Se&&m(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(me||ke),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!R.attributes.uv&&(he||Se),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&me===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:K,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:U.filter(be=>be.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:ye,decodeVideoTexture:he&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Pn,flipSided:_.side===on,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:tt&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(tt&&_.extensions.multiDraw===!0||de)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Qe.vertexUv1s=l.has(1),Qe.vertexUv2s=l.has(2),Qe.vertexUv3s=l.has(3),l.clear(),Qe}function y(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let C in _.defines)v.push(C),v.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(u(v,_),h(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function u(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function h(_,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let v=p[_.type],C;if(v){let E=Kn[v];C=Sd.clone(E.uniforms)}else C=_.uniforms;return C}function b(_,v){let C=d.get(v);return C!==void 0?++C.usedTimes:(C=new Ex(i,v,_,s),c.push(C),d.set(v,C)),C}function M(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:S}}function Ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Dx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Vd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,g,y,u,h){let x=i[e];return x===void 0?(x={id:p.id,object:p,geometry:m,material:g,materialVariant:a(p),groupOrder:y,renderOrder:p.renderOrder,z:u,group:h},i[e]=x):(x.id=p.id,x.object=p,x.geometry=m,x.material=g,x.materialVariant=a(p),x.groupOrder=y,x.renderOrder=p.renderOrder,x.z=u,x.group=h),e++,x}function l(p,m,g,y,u,h,x){x.reversedDepth===!0&&(u=-u);let b=o(p,m,g,y,u,h);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(p,m,g,y,u,h){let x=o(p,m,g,y,u,h);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function d(p,m){t.length>1&&t.sort(p||Dx),n.length>1&&n.sort(m||Vd),s.length>1&&s.sort(m||Vd)}function f(){for(let p=e,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function Lx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Hd,i.set(n,[a])):s>=r.length?(a=new Hd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new rt};break;case"SpotLight":t={position:new Z,direction:new Z,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function Ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fx=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bx(i){let e=new Nx,t=Ux(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new _t,a=new _t;function o(c){let d=0,f=0,p=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,y=0,u=0,h=0,x=0,b=0,M=0,T=0,S=0,_=0,v=0,C=0,E=0;c.sort(Ox);for(let U=0,D=c.length;U<D;U++){let R=c[U],B=R.color,G=R.intensity,O=R.distance,Y=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Ui?Y=R.shadow.map.texture:Y=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=B.r*G,f+=B.g*G,p+=B.b*G;else if(R.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(R.sh.coefficients[F],G);E++}else if(R.isSunLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,k=t.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize.copy(H.mapSize).multiply(H.getFrameExtents()),n.sunShadow[g]=k,n.sunShadowMap[g]=Y;let te=H.getViewportCount();for(let ie=0;ie<te;ie++)n.sunShadowMatrix[y+ie]=H.getMatrix(ie),n.sunShadowCascade[y+ie]=H._cascadeData[ie];y+=te,g++}n.sun[m]=F,m++}else if(R.isDirectionalLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let H=R.shadow,k=t.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.directionalShadow[u]=k,n.directionalShadowMap[u]=Y,n.directionalShadowMatrix[u]=R.shadow.matrix,T++}n.directional[u]=F,u++}else if(R.isSpotLight){let F=e.get(R);F.position.setFromMatrixPosition(R.matrixWorld),F.color.copy(B).multiplyScalar(G),F.distance=O,F.coneCos=Math.cos(R.angle),F.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),F.decay=R.decay,n.spot[x]=F;let H=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,H.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=H.matrix,R.castShadow){let k=t.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,n.spotShadow[x]=k,n.spotShadowMap[x]=Y,_++}x++}else if(R.isRectAreaLight){let F=e.get(R);F.color.copy(B).multiplyScalar(G),F.halfWidth.set(R.width*.5,0,0),F.halfHeight.set(0,R.height*.5,0),n.rectArea[b]=F,b++}else if(R.isPointLight){let F=e.get(R);if(F.color.copy(R.color).multiplyScalar(R.intensity),F.distance=R.distance,F.decay=R.decay,R.castShadow){let H=R.shadow,k=t.get(R);k.shadowIntensity=H.intensity,k.shadowBias=H.bias,k.shadowNormalBias=H.normalBias,k.shadowRadius=H.radius,k.shadowMapSize=H.mapSize,k.shadowCameraNear=H.camera.near,k.shadowCameraFar=H.camera.far,n.pointShadow[h]=k,n.pointShadowMap[h]=Y,n.pointShadowMatrix[h]=R.shadow.matrix,S++}n.point[h]=F,h++}else if(R.isHemisphereLight){let F=e.get(R);F.skyColor.copy(R.color).multiplyScalar(G),F.groundColor.copy(R.groundColor).multiplyScalar(G),n.hemi[M]=F,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let I=n.hash;(I.sunLength!==m||I.directionalLength!==u||I.pointLength!==h||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==v||I.numLightProbes!==E)&&(n.sun.length=m,n.directional.length=u,n.spot.length=x,n.rectArea.length=b,n.point.length=h,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-C,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=E,I.sunLength=m,I.directionalLength=u,I.pointLength=h,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=v,I.numLightProbes=E,n.version=Fx++)}function l(c,d){let f=0,p=0,m=0,g=0,y=0,u=0,h=d.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let M=c[x];if(M.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),f++}else if(M.isDirectionalLight){let T=n.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),p++}else if(M.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(M.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(M.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){let T=n.hemi[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),u++}}}return{setup:o,setupView:l,state:n}}function Wd(i){let e=new Bx(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function c(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Wd(i),e.set(s,[o])):r>=a.length?(o=new Wd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Vx=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Hx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Xd=new _t,sa=new Z,fh=new Z;function Wx(i,e,t){let n=new Ti,s=new Oe,r=new Oe,a=new Et,o=new go,l=new _o,c={},d=t.maxTextureSize,f={[Ni]:on,[on]:Ni,[Pn]:Pn},p=new qn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:kx,fragmentShader:Gx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new dn;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new fn(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jr;let h=this.type;this.render=function(S,_,v){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;this.type===Io&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Jr);let C=i.getRenderTarget(),E=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ki),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let D=h!==this.type;D&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(B=>B.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,B=S.length;R<B;R++){let G=S[R],O=G.shadow;if(O===void 0){Ze("WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let Y=O.getFrameExtents();s.multiply(Y),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Y.x),s.x=r.x*Y.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Y.y),s.y=r.y*Y.y,O.mapSize.y=r.y));let F=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=F,O.map===null||D===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ks){if(G.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Sn(s.x,s.y,{format:Ui,type:cn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),O.map.texture.name=G.name+".shadowMap",O.map.depthTexture=new ui(s.x,s.y,ln),O.map.depthTexture.name=G.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else G.isPointLight?(O.map=new aa(s.x),O.map.depthTexture=new br(s.x,On)):(O.map=new Sn(s.x,s.y),O.map.depthTexture=new ui(s.x,s.y,On)),O.map.depthTexture.name=G.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Jr?(O.map.depthTexture.compareFunction=F?Zc:Yc,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let H=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();G.isPointLight!==!0&&O.updateMatrices(G,v);let k=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:v.layers;for(let te=0;te<H;te++){let ie=O.getCamera(te);if(G.isPointLight){let $=O.camera,L=O.matrix,z=G.distance||$.far;z!==$.far&&($.far=z,$.updateProjectionMatrix()),sa.setFromMatrixPosition(G.matrixWorld),$.position.copy(sa),fh.copy($.position),fh.add(Vx[te]),$.up.copy(Hx[te]),$.lookAt(fh),$.updateMatrixWorld(),L.makeTranslation(-sa.x,-sa.y,-sa.z),Xd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Xd,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,te),i.clear();else{te===0&&(i.setRenderTarget(O.map),i.clear());let $=O.getViewport(te);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),U.viewport(a)}n=O.getFrustum(te),M(_,v,ie,G,k,this.type)}O.isPointLightShadow!==!0&&this.type===ks&&x(O,v),O.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(C,E,I)};function x(S,_){let v=e.update(y);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new Sn(s.x,s.y,{format:Ui,type:cn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,v,p,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,v,m,y,null)}function b(S,_,v,C){let E=null,I=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)E=I;else if(E=v.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=E.uuid,D=_.uuid,R=c[U];R===void 0&&(R={},c[U]=R);let B=R[D];B===void 0&&(B=E.clone(),R[D]=B,_.addEventListener("dispose",T)),E=B}if(E.visible=_.visible,E.wireframe=_.wireframe,C===ks?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let U=i.properties.get(E);U.light=v}return E}function M(S,_,v,C,E,I){if(S.visible===!1)return;if(S.layers.test(E)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===ks)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let R=e.update(S),B=S.material;if(Array.isArray(B)){let G=R.groups;for(let O=0,Y=G.length;O<Y;O++){let F=G[O],H=B[F.materialIndex];if(H&&H.visible){let k=b(S,H,C,I);S.onBeforeShadow(i,S,_,v,R,k,F),i.renderBufferDirect(v,null,R,k,S,F),S.onAfterShadow(i,S,_,v,R,k,F)}}}else if(B.visible){let G=b(S,B,C,I);S.onBeforeShadow(i,S,_,v,R,G,null),i.renderBufferDirect(v,null,R,G,S,null),S.onAfterShadow(i,S,_,v,R,G,null)}}let D=S.children;for(let R=0,B=D.length;R<B;R++)M(D[R],_,v,C,E,I)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let C=c[v],E=S.target.uuid;E in C&&(C[E].dispose(),delete C[E])}}}function Xx(i,e){function t(){let V=!1,ce=new Et,ae=null,Me=new Et(0,0,0,0);return{setMask:function(Se){ae!==Se&&!V&&(i.colorMask(Se,Se,Se,Se),ae=Se)},setLocked:function(Se){V=Se},setClear:function(Se,Te,We,tt,ye){ye===!0&&(Se*=tt,Te*=tt,We*=tt),ce.set(Se,Te,We,tt),Me.equals(ce)===!1&&(i.clearColor(Se,Te,We,tt),Me.copy(ce))},reset:function(){V=!1,ae=null,Me.set(-1,0,0,0)}}}function n(){let V=!1,ce=!1,ae=null,Me=null,Se=null;return{setReversed:function(Te){if(ce!==Te){let We=e.get("EXT_clip_control");Te?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ce=Te;let tt=Se;Se=null,this.setClear(tt)}},getReversed:function(){return ce},setTest:function(Te){Te?K(i.DEPTH_TEST):J(i.DEPTH_TEST)},setMask:function(Te){ae!==Te&&!V&&(i.depthMask(Te),ae=Te)},setFunc:function(Te){if(ce&&(Te=pd[Te]),Me!==Te){switch(Te){case Ja:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Me=Te}},setLocked:function(Te){V=Te},setClear:function(Te){Se!==Te&&(Se=Te,ce&&(Te=1-Te),i.clearDepth(Te))},reset:function(){V=!1,ae=null,Me=null,Se=null,ce=!1}}}function s(){let V=!1,ce=null,ae=null,Me=null,Se=null,Te=null,We=null,tt=null,ye=null;return{setTest:function(qe){V||(qe?K(i.STENCIL_TEST):J(i.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!V&&(i.stencilMask(qe),ce=qe)},setFunc:function(qe,Qe,be){(ae!==qe||Me!==Qe||Se!==be)&&(i.stencilFunc(qe,Qe,be),ae=qe,Me=Qe,Se=be)},setOp:function(qe,Qe,be){(Te!==qe||We!==Qe||tt!==be)&&(i.stencilOp(qe,Qe,be),Te=qe,We=Qe,tt=be)},setLocked:function(qe){V=qe},setClear:function(qe){ye!==qe&&(i.clearStencil(qe),ye=qe)},reset:function(){V=!1,ce=null,ae=null,Me=null,Se=null,Te=null,We=null,tt=null,ye=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,d={},f={},p={},m=new WeakMap,g=[],y=null,u=!1,h=null,x=null,b=null,M=null,T=null,S=null,_=null,v=new rt(0,0,0),C=0,E=!1,I=null,U=null,D=null,R=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,Y=0,F=i.getParameter(i.VERSION);F.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(F)[1]),O=Y>=1):F.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),O=Y>=2);let H=null,k={},te=i.getParameter(i.SCISSOR_BOX),ie=i.getParameter(i.VIEWPORT),$=new Et().fromArray(te),L=new Et().fromArray(ie);function z(V,ce,ae,Me){let Se=new Uint8Array(4),Te=i.createTexture();i.bindTexture(V,Te),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<ae;We++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,Me,0,i.RGBA,i.UNSIGNED_BYTE,Se):i.texImage2D(ce+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Se);return Te}let q={};q[i.TEXTURE_2D]=z(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),K(i.DEPTH_TEST),a.setFunc(bs),xe(!1),me(Ec),K(i.CULL_FACE),fe(Ki);function K(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function J(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function de(V,ce){return p[V]!==ce?(i.bindFramebuffer(V,ce),p[V]=ce,V===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),V===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function he(V,ce){let ae=g,Me=!1;if(V){ae=m.get(ce),ae===void 0&&(ae=[],m.set(ce,ae));let Se=V.textures;if(ae.length!==Se.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Te=0,We=Se.length;Te<We;Te++)ae[Te]=i.COLOR_ATTACHMENT0+Te;ae.length=Se.length,Me=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,Me=!0);Me&&i.drawBuffers(ae)}function De(V){return y!==V?(i.useProgram(V),y=V,!0):!1}let ge={[$i]:i.FUNC_ADD,[Fu]:i.FUNC_SUBTRACT,[Ou]:i.FUNC_REVERSE_SUBTRACT};ge[Bu]=i.MIN,ge[zu]=i.MAX;let ne={[ku]:i.ZERO,[Gu]:i.ONE,[Vu]:i.SRC_COLOR,[Ic]:i.SRC_ALPHA,[Zu]:i.SRC_ALPHA_SATURATE,[qu]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Hu]:i.ONE_MINUS_SRC_COLOR,[Dc]:i.ONE_MINUS_SRC_ALPHA,[Yu]:i.ONE_MINUS_DST_COLOR,[Xu]:i.ONE_MINUS_DST_ALPHA,[Ju]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[$u]:i.CONSTANT_ALPHA,[ju]:i.ONE_MINUS_CONSTANT_ALPHA};function fe(V,ce,ae,Me,Se,Te,We,tt,ye,qe){if(V===Ki){u===!0&&(J(i.BLEND),u=!1);return}if(u===!1&&(K(i.BLEND),u=!0),V!==Uu){if(V!==h||qe!==E){if((x!==$i||T!==$i)&&(i.blendEquation(i.FUNC_ADD),x=$i,T=$i),qe)switch(V){case Gs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Pc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:je("WebGLState: Invalid blending: ",V);break}else switch(V){case Gs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Cc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rc:je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pc:je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:je("WebGLState: Invalid blending: ",V);break}b=null,M=null,S=null,_=null,v.set(0,0,0),C=0,h=V,E=qe}return}Se=Se||ce,Te=Te||ae,We=We||Me,(ce!==x||Se!==T)&&(i.blendEquationSeparate(ge[ce],ge[Se]),x=ce,T=Se),(ae!==b||Me!==M||Te!==S||We!==_)&&(i.blendFuncSeparate(ne[ae],ne[Me],ne[Te],ne[We]),b=ae,M=Me,S=Te,_=We),(tt.equals(v)===!1||ye!==C)&&(i.blendColor(tt.r,tt.g,tt.b,ye),v.copy(tt),C=ye),h=V,E=!1}function Ae(V,ce){V.side===Pn?J(i.CULL_FACE):K(i.CULL_FACE);let ae=V.side===on;ce&&(ae=!ae),xe(ae),V.blending===Gs&&V.transparent===!1?fe(Ki):fe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let Me=V.stencilWrite;o.setTest(Me),Me&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Be(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?K(i.SAMPLE_ALPHA_TO_COVERAGE):J(i.SAMPLE_ALPHA_TO_COVERAGE)}function xe(V){I!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),I=V)}function me(V){V!==Lu?(K(i.CULL_FACE),V!==U&&(V===Ec?i.cullFace(i.BACK):V===Nu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):J(i.CULL_FACE),U=V}function Re(V){V!==D&&(O&&i.lineWidth(V),D=V)}function Be(V,ce,ae){V?(K(i.POLYGON_OFFSET_FILL),(R!==ce||B!==ae)&&(R=ce,B=ae,a.getReversed()&&(ce=-ce,ae=-ae),i.polygonOffset(ce,ae))):J(i.POLYGON_OFFSET_FILL)}function Ne(V){V?K(i.SCISSOR_TEST):J(i.SCISSOR_TEST)}function Ue(V){V===void 0&&(V=i.TEXTURE0+G-1),H!==V&&(i.activeTexture(V),H=V)}function ke(V,ce,ae){ae===void 0&&(H===null?ae=i.TEXTURE0+G-1:ae=H);let Me=k[ae];Me===void 0&&(Me={type:void 0,texture:void 0},k[ae]=Me),(Me.type!==V||Me.texture!==ce)&&(H!==ae&&(i.activeTexture(ae),H=ae),i.bindTexture(V,ce||q[V]),Me.type=V,Me.texture=ce)}function W(){let V=k[H];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function It(){try{i.compressedTexImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function mt(){try{i.texSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function Le(){try{i.texSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function Ct(){try{i.compressedTexSubImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function Je(){try{i.texStorage2D(...arguments)}catch(V){je("WebGLState:",V)}}function N(){try{i.texStorage3D(...arguments)}catch(V){je("WebGLState:",V)}}function w(){try{i.texImage2D(...arguments)}catch(V){je("WebGLState:",V)}}function ee(){try{i.texImage3D(...arguments)}catch(V){je("WebGLState:",V)}}function _e(V){return f[V]!==void 0?f[V]:i.getParameter(V)}function ue(V,ce){f[V]!==ce&&(i.pixelStorei(V,ce),f[V]=ce)}function we(V){$.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),$.copy(V))}function Pe(V){L.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),L.copy(V))}function le(V,ce){let ae=c.get(ce);ae===void 0&&(ae=new WeakMap,c.set(ce,ae));let Me=ae.get(V);Me===void 0&&(Me=i.getUniformBlockIndex(ce,V.name),i.uniformBlockBinding(ce,Me,Me),ae.set(V,Me))}function oe(V,ce,ae){let Se=c.get(ce).get(V);l[Se]!==ae&&(i.bindBufferBase(i.UNIFORM_BUFFER,Se,ae),l[Se]=ae)}function Ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},H=null,k={},p={},l={},m=new WeakMap,g=[],y=null,u=!1,h=null,x=null,b=null,M=null,T=null,S=null,_=null,v=new rt(0,0,0),C=0,E=!1,I=null,U=null,D=null,R=null,B=null,$.set(0,0,i.canvas.width,i.canvas.height),L.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:K,disable:J,bindFramebuffer:de,drawBuffers:he,useProgram:De,setBlending:fe,setMaterial:Ae,setFlipSided:xe,setCullFace:me,setLineWidth:Re,setPolygonOffset:Be,setScissorTest:Ne,activeTexture:Ue,bindTexture:ke,unbindTexture:W,compressedTexImage2D:It,compressedTexImage3D:ut,texImage2D:w,texImage3D:ee,pixelStorei:ue,getParameter:_e,updateUBOMapping:le,uniformBlockBinding:oe,texStorage2D:Je,texStorage3D:N,texSubImage2D:mt,texSubImage3D:Le,compressedTexSubImage2D:Ct,compressedTexSubImage3D:Ye,scissor:we,viewport:Pe,reset:Ee}}function qx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Oe,d=new WeakMap,f=new Set,p,m=new WeakMap,g=new Set,y=new FinalizationRegistry(N=>g.delete(N)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(N,w){return u?new OffscreenCanvas(N,w):Ts("canvas")}function x(N,w,ee){let _e=1,ue=Je(N);if((ue.width>ee||ue.height>ee)&&(_e=ee/Math.max(ue.width,ue.height)),_e<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let we=Math.floor(_e*ue.width),Pe=Math.floor(_e*ue.height);p===void 0&&(p=h(we,Pe));let le=w?h(we,Pe):p;return le.width=we,le.height=Pe,le.getContext("2d").drawImage(N,0,0,we,Pe),Ze("WebGLRenderer: Texture has been resized from ("+ue.width+"x"+ue.height+") to ("+we+"x"+Pe+")."),le}else return"data"in N&&Ze("WebGLRenderer: Image in DataTexture is too big ("+ue.width+"x"+ue.height+")."),N;return N}function b(N){return N.generateMipmaps}function M(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(N,w,ee,_e,ue,we=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Pe;_e&&(Pe=e.get("EXT_texture_norm16"),Pe||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=w;if(w===i.RED&&(ee===i.FLOAT&&(le=i.R32F),ee===i.HALF_FLOAT&&(le=i.R16F),ee===i.UNSIGNED_BYTE&&(le=i.R8),ee===i.UNSIGNED_SHORT&&Pe&&(le=Pe.R16_EXT),ee===i.SHORT&&Pe&&(le=Pe.R16_SNORM_EXT)),w===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.R8UI),ee===i.UNSIGNED_SHORT&&(le=i.R16UI),ee===i.UNSIGNED_INT&&(le=i.R32UI),ee===i.BYTE&&(le=i.R8I),ee===i.SHORT&&(le=i.R16I),ee===i.INT&&(le=i.R32I)),w===i.RG&&(ee===i.FLOAT&&(le=i.RG32F),ee===i.HALF_FLOAT&&(le=i.RG16F),ee===i.UNSIGNED_BYTE&&(le=i.RG8),ee===i.UNSIGNED_SHORT&&Pe&&(le=Pe.RG16_EXT),ee===i.SHORT&&Pe&&(le=Pe.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RG8UI),ee===i.UNSIGNED_SHORT&&(le=i.RG16UI),ee===i.UNSIGNED_INT&&(le=i.RG32UI),ee===i.BYTE&&(le=i.RG8I),ee===i.SHORT&&(le=i.RG16I),ee===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGB16UI),ee===i.UNSIGNED_INT&&(le=i.RGB32UI),ee===i.BYTE&&(le=i.RGB8I),ee===i.SHORT&&(le=i.RGB16I),ee===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),ee===i.UNSIGNED_INT&&(le=i.RGBA32UI),ee===i.BYTE&&(le=i.RGBA8I),ee===i.SHORT&&(le=i.RGBA16I),ee===i.INT&&(le=i.RGBA32I)),w===i.RGB&&(ee===i.UNSIGNED_SHORT&&Pe&&(le=Pe.RGB16_EXT),ee===i.SHORT&&Pe&&(le=Pe.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),w===i.RGBA){let oe=we?fr:pt.getTransfer(ue);ee===i.FLOAT&&(le=i.RGBA32F),ee===i.HALF_FLOAT&&(le=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(le=oe===vt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&Pe&&(le=Pe.RGBA16_EXT),ee===i.SHORT&&Pe&&(le=Pe.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function _(N,w){let ee;return N?w===null||w===On||w===Qi?ee=i.DEPTH24_STENCIL8:w===ln?ee=i.DEPTH32F_STENCIL8:w===Ws&&(ee=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===On||w===Qi?ee=i.DEPTH_COMPONENT24:w===ln?ee=i.DEPTH_COMPONENT32F:w===Ws&&(ee=i.DEPTH_COMPONENT16),ee}function v(N,w){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==Yt&&N.minFilter!==Ut?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function C(N){let w=new WeakRef(N);n.get(N).__ref=w,g.add(w),y.register(N,w,w)}function E(N){let w=n.get(N).__ref;w!==void 0&&(g.delete(w),y.unregister(w))}function I(N){D(N.target)}function U(N){R(N.target)}function D(N){N.removeEventListener("dispose",I),E(N),G(N),N.isVideoTexture&&d.delete(N),N.isHTMLTexture&&f.delete(N)}function R(N){N.removeEventListener("dispose",U),E(N),Y(N)}function B(){for(let N of g){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?R(w):D(w))}g.clear(),f.clear()}function G(N){let w=n.get(N);if(w.__webglInit===void 0)return;let ee=N.source,_e=m.get(ee);if(_e){let ue=_e[w.__cacheKey];ue.usedTimes--,ue.usedTimes===0&&O(N),Object.keys(_e).length===0&&m.delete(ee)}n.remove(N)}function O(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let ee=N.source,_e=m.get(ee);delete _e[w.__cacheKey],a.memory.textures--}function Y(N){let w=n.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let ee=N.depthTexture;if(ee&&ee.renderTarget===N&&D(ee),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(w.__webglFramebuffer[ue]))for(let we=0;we<w.__webglFramebuffer[ue].length;we++)i.deleteFramebuffer(w.__webglFramebuffer[ue][we]);else i.deleteFramebuffer(w.__webglFramebuffer[ue]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ue])}else{if(Array.isArray(w.__webglFramebuffer))for(let ue=0;ue<w.__webglFramebuffer.length;ue++)i.deleteFramebuffer(w.__webglFramebuffer[ue]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ue=0;ue<w.__webglColorRenderbuffer.length;ue++)w.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ue]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let _e=N.textures;for(let ue=0,we=_e.length;ue<we;ue++){let Pe=n.get(_e[ue]);Pe.__webglTexture&&(i.deleteTexture(Pe.__webglTexture),a.memory.textures--),n.remove(_e[ue])}n.remove(N)}let F=0;function H(){F=0}function k(){return F}function te(N){F=N}function ie(){let N=F;return N>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),F+=1,N}function $(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function L(N,w){let ee=n.get(N);if(N.isVideoTexture&&Ct(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){let _e=N.image;if(_e===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(_e.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Ae(ee,N,w);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+w)}function z(N,w){let ee=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Ae(ee,N,w);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+w)}function q(N,w){let ee=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Ae(ee,N,w);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+w)}function K(N,w){let ee=n.get(N);if(N.version>0&&ee.__version!==N.version){xe(ee,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+w)}let J={[ws]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},de={[Yt]:i.NEAREST,[td]:i.NEAREST_MIPMAP_NEAREST,[$r]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},he={[rd]:i.NEVER,[Jc]:i.ALWAYS,[ad]:i.LESS,[Yc]:i.LEQUAL,[od]:i.EQUAL,[Zc]:i.GEQUAL,[ld]:i.GREATER,[cd]:i.NOTEQUAL};function De(N,w){if(w.type===ln&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ut||w.magFilter===Lo||w.magFilter===$r||w.magFilter===Zn||w.minFilter===Ut||w.minFilter===Lo||w.minFilter===$r||w.minFilter===Zn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,J[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,J[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,J[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,de[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,de[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,he[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Yt||w.minFilter!==$r&&w.minFilter!==Zn||w.type===ln&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ge(N,w){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",I),C(w));let _e=w.source,ue=m.get(_e);ue===void 0&&(ue={},m.set(_e,ue));let we=$(w);if(we!==N.__cacheKey){ue[we]===void 0&&(ue[we]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,ee=!0),ue[we].usedTimes++;let Pe=ue[N.__cacheKey];Pe!==void 0&&(ue[N.__cacheKey].usedTimes--,Pe.usedTimes===0&&O(w)),N.__cacheKey=we,N.__webglTexture=ue[we].texture}return ee}function ne(N,w,ee){return Math.floor(Math.floor(N/ee)/w)}function fe(N,w,ee,_e){let we=N.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,ee,_e,w.data);else{we.sort((V,ce)=>V.start-ce.start);let Pe=0;for(let V=1;V<we.length;V++){let ce=we[Pe],ae=we[V],Me=ce.start+ce.count,Se=ne(ae.start,w.width,4),Te=ne(ce.start,w.width,4);ae.start<=Me+1&&Se===Te&&ne(ae.start+ae.count-1,w.width,4)===Se?ce.count=Math.max(ce.count,ae.start+ae.count-ce.start):(++Pe,we[Pe]=ae)}we.length=Pe+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ee=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let V=0,ce=we.length;V<ce;V++){let ae=we[V],Me=Math.floor(ae.start/4),Se=Math.ceil(ae.count/4),Te=Me%w.width,We=Math.floor(Me/w.width),tt=Se,ye=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,Te,We,tt,ye,ee,_e,w.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ee)}}function Ae(N,w,ee){let _e=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(_e=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(_e=i.TEXTURE_3D);let ue=ge(N,w),we=w.source;t.bindTexture(_e,N.__webglTexture,i.TEXTURE0+ee);let Pe=n.get(we);if(we.version!==Pe.__version||ue===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let ye=pt.getPrimaries(pt.workingColorSpace),qe=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),Qe=w.colorSpace===fi||ye===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=x(w.image,!1,s.maxTextureSize);oe=Ye(w,oe);let Ee=r.convert(w.format,w.colorSpace),V=r.convert(w.type),ce=S(w.internalFormat,Ee,V,w.normalized,w.colorSpace,w.isVideoTexture);De(_e,w);let ae,Me=w.mipmaps,Se=w.isVideoTexture!==!0,Te=Pe.__version===void 0||ue===!0,We=we.dataReady,tt=v(w,oe);if(w.isDepthTexture)ce=_(w.format===di,w.type),Te&&(Se?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,V,null));else if(w.isDataTexture)if(Me.length>0){Se&&Te&&t.texStorage2D(i.TEXTURE_2D,tt,ce,Me[0].width,Me[0].height);for(let ye=0,qe=Me.length;ye<qe;ye++)ae=Me[ye],Se?We&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ae.width,ae.height,Ee,V,ae.data):t.texImage2D(i.TEXTURE_2D,ye,ce,ae.width,ae.height,0,Ee,V,ae.data);w.generateMipmaps=!1}else Se?(Te&&t.texStorage2D(i.TEXTURE_2D,tt,ce,oe.width,oe.height),We&&fe(w,oe,Ee,V)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ee,V,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Se&&Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ce,Me[0].width,Me[0].height,oe.depth);for(let ye=0,qe=Me.length;ye<qe;ye++)if(ae=Me[ye],w.format!==Bn)if(Ee!==null)if(Se){if(We)if(w.layerUpdates.size>0){let Qe=ah(ae.width,ae.height,w.format,w.type);for(let be of w.layerUpdates){let st=ae.data.subarray(be*Qe/ae.data.BYTES_PER_ELEMENT,(be+1)*Qe/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,be,ae.width,ae.height,1,Ee,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ae.width,ae.height,oe.depth,Ee,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,ce,ae.width,ae.height,oe.depth,0,ae.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Se?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,ae.width,ae.height,oe.depth,Ee,V,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,ce,ae.width,ae.height,oe.depth,0,Ee,V,ae.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{Se&&Te&&t.texStorage2D(i.TEXTURE_2D,tt,ce,Me[0].width,Me[0].height);for(let ye=0,qe=Me.length;ye<qe;ye++)ae=Me[ye],w.format!==Bn?Ee!==null?Se?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,ae.width,ae.height,Ee,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,ce,ae.width,ae.height,0,ae.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Se?We&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ae.width,ae.height,Ee,V,ae.data):t.texImage2D(i.TEXTURE_2D,ye,ce,ae.width,ae.height,0,Ee,V,ae.data)}else if(w.isDataArrayTexture)if(Se){if(Te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,tt,ce,oe.width,oe.height,oe.depth),We)if(w.layerUpdates.size>0){let ye=ah(oe.width,oe.height,w.format,w.type);for(let qe of w.layerUpdates){let Qe=oe.data.subarray(qe*ye/oe.data.BYTES_PER_ELEMENT,(qe+1)*ye/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,oe.width,oe.height,1,Ee,V,Qe)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ee,V,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ee,V,oe.data);else if(w.isData3DTexture)Se?(Te&&t.texStorage3D(i.TEXTURE_3D,tt,ce,oe.width,oe.height,oe.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ee,V,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ee,V,oe.data);else if(w.isFramebufferTexture){if(Te)if(Se)t.texStorage2D(i.TEXTURE_2D,tt,ce,oe.width,oe.height);else{let ye=oe.width,qe=oe.height;for(let Qe=0;Qe<tt;Qe++)t.texImage2D(i.TEXTURE_2D,Qe,ce,ye,qe,0,Ee,V,null),ye>>=1,qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let ye=i.canvas;if(ye.hasAttribute("layoutsubtree")||ye.setAttribute("layoutsubtree","true"),oe.parentNode!==ye){ye.appendChild(oe),f.add(w),ye.onpaint=qe=>{let Qe=qe.changedElements;for(let be of f)Qe.includes(be.image)&&(be.needsUpdate=!0)},ye.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let Qe=i.RGBA,be=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Qe,be,st,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Me.length>0){if(Se&&Te){let ye=Je(Me[0]);t.texStorage2D(i.TEXTURE_2D,tt,ce,ye.width,ye.height)}for(let ye=0,qe=Me.length;ye<qe;ye++)ae=Me[ye],Se?We&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ee,V,ae):t.texImage2D(i.TEXTURE_2D,ye,ce,Ee,V,ae);w.generateMipmaps=!1}else if(Se){if(Te){let ye=Je(oe);t.texStorage2D(i.TEXTURE_2D,tt,ce,ye.width,ye.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ee,V,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ee,V,oe);b(w)&&w.mipmapsAutoUpdate===!0&&M(_e),Pe.__version=we.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function xe(N,w,ee){if(w.image.length!==6)return;let _e=ge(N,w),ue=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ee);let we=n.get(ue);if(ue.version!==we.__version||_e===!0){t.activeTexture(i.TEXTURE0+ee);let Pe=pt.getPrimaries(pt.workingColorSpace),le=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),oe=w.colorSpace===fi||Pe===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ee=w.isCompressedTexture||w.image[0].isCompressedTexture,V=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let be=0;be<6;be++)!Ee&&!V?ce[be]=x(w.image[be],!0,s.maxCubemapSize):ce[be]=V?w.image[be].image:w.image[be],ce[be]=Ye(w,ce[be]);let ae=ce[0],Me=r.convert(w.format,w.colorSpace),Se=r.convert(w.type),Te=S(w.internalFormat,Me,Se,w.normalized,w.colorSpace),We=w.isVideoTexture!==!0,tt=we.__version===void 0||_e===!0,ye=ue.dataReady,qe=v(w,ae);De(i.TEXTURE_CUBE_MAP,w);let Qe;if(w.isDepthTexture){if(Te=_(w.format===di,w.type),tt)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Te,ae.width,ae.height);else for(let be=0;be<6;be++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,ae.width,ae.height,0,Me,Se,null)}else if(Ee){We&&tt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Te,ae.width,ae.height);for(let be=0;be<6;be++){Qe=ce[be].mipmaps;for(let st=0;st<Qe.length;st++){let Ft=Qe[st];w.format!==Bn?Me!==null?We?ye&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,0,0,Ft.width,Ft.height,Me,Ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,Te,Ft.width,Ft.height,0,Ft.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,0,0,Ft.width,Ft.height,Me,Se,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st,Te,Ft.width,Ft.height,0,Me,Se,Ft.data)}}}else{if(Qe=w.mipmaps,We&&tt){Qe.length>0&&qe++;let be=Je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,Te,be.width,be.height)}for(let be=0;be<6;be++)if(V){We?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,ce[be].width,ce[be].height,Me,Se,ce[be].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,ce[be].width,ce[be].height,0,Me,Se,ce[be].data);for(let st=0;st<Qe.length;st++){let $n=Qe[st].image[be].image;We?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,0,0,$n.width,$n.height,Me,Se,$n.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,Te,$n.width,$n.height,0,Me,Se,$n.data)}}else{We?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,0,0,Me,Se,ce[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0,Te,Me,Se,ce[be]);for(let st=0;st<Qe.length;st++){let Ft=Qe[st];We?ye&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,0,0,Me,Se,Ft.image[be]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+be,st+1,Te,Me,Se,Ft.image[be])}}}b(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),we.__version=ue.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function me(N,w,ee,_e,ue,we){let Pe=r.convert(ee.format,ee.colorSpace),le=r.convert(ee.type),oe=S(ee.internalFormat,Pe,le,ee.normalized,ee.colorSpace),Ee=n.get(w),V=n.get(ee);if(V.__renderTarget=w,!Ee.__hasExternalTextures){let ce=Math.max(1,w.width>>we),ae=Math.max(1,w.height>>we);ue===i.TEXTURE_3D||ue===i.TEXTURE_2D_ARRAY?t.texImage3D(ue,we,oe,ce,ae,w.depth,0,Pe,le,null):t.texImage2D(ue,we,oe,ce,ae,0,Pe,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ue,V.__webglTexture,0,mt(w)):(ue===i.TEXTURE_2D||ue>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ue<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,_e,ue,V.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Re(N,w,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let _e=w.depthTexture,ue=_e&&_e.isDepthTexture?_e.type:null,we=_(w.stencilBuffer,ue),Pe=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(w),we,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(w),we,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,we,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,N)}else{let _e=w.textures;for(let ue=0;ue<_e.length;ue++){let we=_e[ue],Pe=r.convert(we.format,we.colorSpace),le=r.convert(we.type),oe=S(we.internalFormat,Pe,le,we.normalized,we.colorSpace);Le(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(w),oe,w.width,w.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Be(N,w,ee){let _e=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ue=n.get(w.depthTexture);ue.__renderTarget=w;let we=_e?w.depthTexture.image[0]:w.depthTexture.image;(!ue.__webglTexture||we.width!==w.width||we.height!==w.height)&&(we.width=w.width,we.height=w.height,w.depthTexture.needsUpdate=!0),_e?K(w.depthTexture,0):L(w.depthTexture,0);let Pe=ue.__webglTexture,le=mt(w),oe=_e?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,Ee=w.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===hi)Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Pe,0);else if(w.depthTexture.format===di)Le(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,oe,Pe,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,oe,Pe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ne(N){let w=n.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let _e=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),_e){let ue=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,_e.removeEventListener("dispose",ue)};_e.addEventListener("dispose",ue),w.__depthDisposeCallback=ue}w.__boundDepthTexture=_e}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(ee)for(let _e=0;_e<6;_e++)Be(w.__webglFramebuffer[_e],N,_e);else N.texture.mipmaps.length>0?Be(w.__webglFramebuffer[0],N,0):Be(w.__webglFramebuffer,N,0);else if(ee){w.__webglDepthbuffer=[];for(let _e=0;_e<6;_e++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[_e]),w.__webglDepthbuffer[_e]===void 0)w.__webglDepthbuffer[_e]=i.createRenderbuffer(),Re(w.__webglDepthbuffer[_e],N,!1);else{let ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer[_e];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,we)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Re(w.__webglDepthbuffer,N,!1);else{let ue=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,we)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(N,w,ee){let _e=n.get(N);w!==void 0&&me(_e.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Ne(N)}function ke(N){let w=N.texture,ee=n.get(N),_e=n.get(w);N.addEventListener("dispose",U),C(N);let ue=N.textures,we=N.isWebGLCubeRenderTarget===!0,Pe=ue.length>1;if(Pe||(_e.__webglTexture===void 0&&(_e.__webglTexture=i.createTexture()),_e.__version=w.version,a.memory.textures++),we){ee.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps.length>0){ee.__webglFramebuffer[le]=[];for(let oe=0;oe<w.mipmaps.length;oe++)ee.__webglFramebuffer[le][oe]=i.createFramebuffer()}else ee.__webglFramebuffer[le]=i.createFramebuffer()}else{if(w.mipmaps.length>0){ee.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)ee.__webglFramebuffer[le]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let le=0,oe=ue.length;le<oe;le++){let Ee=n.get(ue[le]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Le(N)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let le=0;le<ue.length;le++){let oe=ue[le];ee.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[le]);let Ee=r.convert(oe.format,oe.colorSpace),V=r.convert(oe.type),ce=S(oe.internalFormat,Ee,V,oe.normalized,oe.colorSpace,N.isXRRenderTarget===!0),ae=mt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,ae,ce,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,ee.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),Re(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,_e.__webglTexture),De(i.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)me(ee.__webglFramebuffer[le][oe],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else me(ee.__webglFramebuffer[le],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);b(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Pe){for(let le=0,oe=ue.length;le<oe;le++){let Ee=ue[le],V=n.get(Ee),ce=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,V.__webglTexture),De(ce,Ee),me(ee.__webglFramebuffer,N,Ee,i.COLOR_ATTACHMENT0+le,ce,0),b(Ee)&&M(ce)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,_e.__webglTexture),De(le,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)me(ee.__webglFramebuffer[oe],N,w,i.COLOR_ATTACHMENT0,le,oe);else me(ee.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,le,0);b(w)?M(le):w.mipmaps.length>0&&i.texParameteri(le,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&Ne(N)}function W(N){let w=N.textures;for(let ee=0,_e=w.length;ee<_e;ee++){let ue=w[ee];if(b(ue)&&ue.mipmapsAutoUpdate===!0){let we=T(N),Pe=n.get(ue).__webglTexture;t.bindTexture(we,Pe),M(we),t.unbindTexture()}}}let It=[];function ut(N){if(N.samples>0){if(Le(N)===!1){let w=N.textures,ee=N.width,_e=N.height,ue=i.COLOR_BUFFER_BIT,we=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(N),le=w.length>1;if(le)for(let Ee=0;Ee<w.length;Ee++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ee=0;Ee<w.length;Ee++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ue|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ue|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let V=n.get(w[Ee]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,V,0)}i.blitFramebuffer(0,0,ee,_e,0,0,ee,_e,ue,i.NEAREST),l===!0&&(It.length=0,It.push(i.COLOR_ATTACHMENT0+Ee),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&It.push(we),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,It))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ee=0;Ee<w.length;Ee++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ee]);let V=n.get(w[Ee]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,V,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function mt(N){return Math.min(s.maxSamples,N.samples)}function Le(N){let w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ct(N){let w=a.render.frame;d.get(N)!==w&&(d.set(N,w),N.update())}function Ye(N,w){let ee=N.colorSpace,_e=N.format,ue=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==Xi&&ee!==fi&&(pt.getTransfer(ee)===vt?(_e!==Bn||ue!==pn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):je("WebGLTextures: Unsupported texture color space:",ee)),w}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ie,this.resetTextureUnits=H,this.getTextureUnits=k,this.setTextureUnits=te,this.setTexture2D=L,this.setTexture2DArray=z,this.setTexture3D=q,this.setTextureCube=K,this.rebindTextures=Ue,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Le,this.dispose=B}function Yx(i,e){function t(n,s=fi){let r,a=pt.getTransfer(s);if(n===pn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Gc)return i.BYTE;if(n===Vc)return i.SHORT;if(n===Ws)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===ln)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===Xc)return i.ALPHA;if(n===qc)return i.RGB;if(n===Bn)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===jr||n===Qr||n===ea||n===ta)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ta)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Ho||n===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===na||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===na)return r.COMPRESSED_RG11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===ia||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ia)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jx=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,vh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new wr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qn({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Ji(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mh=class extends Un{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,g=null,y=typeof XRWebGLBinding<"u",u=new vh,h={},x=t.getContextAttributes(),b=null,M=null,T=[],S=[],_=new Oe,v=null,C=null,E=new jt;E.viewport=new Et;let I=new jt;I.viewport=new Et;let U=[E,I],D=new Ro,R=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let L=T[$];return L===void 0&&(L=new Is,T[$]=L),L.getTargetRaySpace()},this.getControllerGrip=function($){let L=T[$];return L===void 0&&(L=new Is,T[$]=L),L.getGripSpace()},this.getHand=function($){let L=T[$];return L===void 0&&(L=new Is,T[$]=L),L.getHandSpace()};function G($){let L=S.indexOf($.inputSource);if(L===-1)return;let z=T[L];z!==void 0&&(z.update($.inputSource,$.frame,c||a),z.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",Y);for(let $=0;$<T.length;$++){let L=S[$];L!==null&&(S[$]=null,T[$].disconnect(L))}R=null,B=null,u.reset();for(let $ in h)delete h[$];if(e.setRenderTarget(b),m=null,p=null,f=null,s=null,M=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),C!==null){let $=C.camera;$.fov=C.fov,$.zoom=C.zoom,$.updateProjectionMatrix(),C=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",O),s.addEventListener("inputsourceschange",Y),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let z=null,q=null,K=null;x.depth&&(K=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=x.stencil?di:hi,q=x.stencil?Qi:On);let J={colorFormat:t.RGBA8,depthFormat:K,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(J),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new Sn(p.textureWidth,p.textureHeight,{format:Bn,type:pn,depthTexture:new ui(p.textureWidth,p.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,z),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new Sn(m.framebufferWidth,m.framebufferHeight,{format:Bn,type:pn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function Y($){for(let L=0;L<$.removed.length;L++){let z=$.removed[L],q=S.indexOf(z);q>=0&&(S[q]=null,T[q].disconnect(z))}for(let L=0;L<$.added.length;L++){let z=$.added[L],q=S.indexOf(z);if(q===-1){for(let J=0;J<T.length;J++)if(J>=S.length){S.push(z),q=J;break}else if(S[J]===null){S[J]=z,q=J;break}if(q===-1)break}let K=T[q];K&&K.connect(z)}}function F($,L){L===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(L.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let L=$.near,z=$.far;u.texture!==null&&(u.depthNear>0&&(L=u.depthNear),u.depthFar>0&&(z=u.depthFar)),D.near=I.near=E.near=L,D.far=I.far=E.far=z,(R!==D.near||B!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),R=D.near,B=D.far),D.layers.mask=$.layers.mask|6,E.layers.mask=D.layers.mask&-5,I.layers.mask=D.layers.mask&-3;let q=$.parent,K=D.cameras;F(D,q);for(let J=0;J<K.length;J++)F(K[J],q);D.projectionMatrix.copy(E.projectionMatrix),D.projectionMatrixInverse.copy(E.projectionMatrixInverse),C===null&&$.isPerspectiveCamera&&(C={camera:$,fov:$.fov,zoom:$.zoom}),H($,D,q)};function H($,L,z){z===null?$.matrix.copy(L.matrixWorld):($.matrix.copy(z.matrixWorld),$.matrix.invert(),$.matrix.multiply(L.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(L.projectionMatrix),$.projectionMatrixInverse.copy(L.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Cs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(D)},this.getCameraTexture=function($){return h[$]};let k=null;function te($,L){if(d=L.getViewerPose(c||a),g=L,d!==null){let z=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let q=!1;z.length!==D.cameras.length&&(D.cameras.length=0,q=!0);for(let he=0;he<z.length;he++){let De=z[he],ge=null;if(m!==null)ge=m.getViewport(De);else{let fe=f.getViewSubImage(p,De);ge=fe.viewport,he===0&&(e.setRenderTargetTextures(M,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(M))}let ne=U[he];ne===void 0&&(ne=new jt,ne.layers.enable(he),ne.viewport=new Et,U[he]=ne),ne.matrix.fromArray(De.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(De.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(ge.x,ge.y,ge.width,ge.height),he===0&&(D.matrix.copy(ne.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),q===!0&&D.cameras.push(ne)}let K=s.enabledFeatures;if(K&&K.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let he=f.getDepthInformation(z[0]);he&&he.isValid&&he.texture&&u.init(he,s.renderState)}if(K&&K.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let he=0;he<z.length;he++){let De=z[he].camera;if(De){let ge=h[De];ge||(ge=new wr,h[De]=ge);let ne=f.getCameraImage(De);ge.sourceTexture=ne}}}}for(let z=0;z<T.length;z++){let q=S[z],K=T[z];q!==null&&K!==void 0&&K.update(q,L,c||a)}k&&k($,L),L.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:L}),g=null}let ie=new qd;ie.setAnimationLoop(te),this.setAnimationLoop=function($){k=$},this.dispose=function(){}}},Kx=new _t,nf=new it;nf.set(-1,0,0,0,1,0,0,0,1);function $x(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,ih(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function s(u,h,x,b,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(u,h):h.isMeshLambertMaterial?(r(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(u,h),f(u,h)):h.isMeshPhongMaterial?(r(u,h),d(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(u,h),p(u,h),h.isMeshPhysicalMaterial&&m(u,h,M)):h.isMeshMatcapMaterial?(r(u,h),g(u,h)):h.isMeshDepthMaterial?r(u,h):h.isMeshDistanceMaterial?(r(u,h),y(u,h)):h.isMeshNormalMaterial?r(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?l(u,h,x,b):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===on&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===on&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let x=e.get(h),b=x.envMap,M=x.envMapRotation;b&&(u.envMap.value=b,u.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(nf),u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,x,b){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*x,u.scale.value=b*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,x){u.ior.value=h.ior,h.diffuseRoughness>0&&(u.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===on&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.retroreflectivity>0&&(u.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function y(u,h){let x=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={};function a(x,b){let M=b.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,b){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",u));let T=b.program;n.updateUBOMapping(x,T);let S=e.render.frame;r[x.id]!==S&&(c(x),r[x.id]=S)}function l(x){let b=i.createBuffer(),M=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(x){let b=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,_=M.length;S<_;S++){let v=M[S];if(Array.isArray(v))for(let C=0,E=v.length;C<E;C++)d(v[C],S,C,T);else d(v,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,M,T){if(p(x,b,M,T)===!0){let S=x.__offset,_=x.value;if(Array.isArray(_)){let v=0;for(let C=0;C<_.length;C++){let E=_[C],I=y(E,!0);f(E,x.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function f(x,b,M){typeof x=="number"||typeof x=="boolean"?b[M]=x:x.isMatrix3?(b[M]=x.elements[0],b[M+1]=x.elements[1],b[M+2]=x.elements[2],b[M+3]=0,b[M+4]=x.elements[3],b[M+5]=x.elements[4],b[M+6]=x.elements[5],b[M+7]=0,b[M+8]=x.elements[6],b[M+9]=x.elements[7],b[M+10]=x.elements[8],b[M+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-M),M):x.toArray(b,M)}function p(x,b,M,T){let S=x.value,_=b+"_"+M;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let v=T[_],C=!1;for(let E=0;E<S.length;E++)m(S[E],v,E)===!0&&(C=!0);return C}return m(S,T,_)}function m(x,b,M){if(b[M]===void 0)return typeof x=="number"||typeof x=="boolean"?b[M]=x:ArrayBuffer.isView(x)?b[M]=x.slice():b[M]=x.clone(),!0;{let T=b[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(x){let b=x.uniforms,M=0,T=16;for(let _=0,v=b.length;_<v;_++){let C=Array.isArray(b[_])?b[_]:[b[_]];for(let E=0,I=C.length;E<I;E++){let U=C[E],D=Array.isArray(U.value)?U.value:[U.value],R=Array.isArray(b[_])||Array.isArray(U.value),B=M;for(let O=0,Y=D.length;O<Y;O++){let F=D[O],H=y(F,R),k=M%T,te=k%H.boundary,ie=k+te;M+=te,ie!==0&&T-ie<H.storage&&(M+=T-ie),O===0&&(B=M),M+=H.storage}let G=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new G((M-B)/Float32Array.BYTES_PER_ELEMENT),U.__offset=B}}let S=M%T;return S>0&&(M+=T-S),x.__size=M,x.__cache={},this}function y(x,b){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function u(x){let b=x.target;b.removeEventListener("dispose",u),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:h}}var Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Jn=null;function ey(){return Jn===null&&(Jn=new Yi(Qx,16,16,Ui,cn),Jn.name="DFG_LUT",Jn.minFilter=Ut,Jn.magFilter=Ut,Jn.wrapS=Cn,Jn.wrapT=Cn,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}var Ml=class{constructor(e={}){let{canvas:t=ud(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=pn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,u=new Set([ko,zo,Bo]),h=new Set([pn,On,Ws,Qi,Uo,Fo]),x=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],v=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,I=!1,U=null,D=null,R=null,B=null;this._outputColorSpace=sn;let G=0,O=0,Y=null,F=-1,H=null,k=new Et,te=new Et,ie=null,$=new rt(0),L=0,z=t.width,q=t.height,K=1,J=null,de=null,he=new Et(0,0,z,q),De=new Et(0,0,z,q),ge=!1,ne=new Ti,fe=new oo,Ae=!1,xe=!1,me=new _t,Re=new Z,Be=new Et,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function ke(){return Y===null?K:1}let W=n;function It(A,X){return t.getContext(A,X)}let ut,mt,Le,Ct,Ye,Je,N,w,ee,_e,ue,we,Pe,le,oe,Ee,V,ce,ae,Me,Se,Te,We;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",Qe,!1),t.addEventListener("webglcontextcreationerror",be,!1),W===null){let X="webgl2";if(W=It(X,A),W===null)throw It(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(A){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),je("WebGLRenderer: "+A.message),A}function tt(){ut=new u_(W),ut.init(),Se=new Yx(W,ut),mt=new e_(W,ut,e,Se),Le=new Xx(W,ut),mt.reversedDepthBuffer&&p&&Le.buffers.depth.setReversed(!0),D=W.createFramebuffer(),R=W.createFramebuffer(),B=W.createFramebuffer(),Ct=new p_(W),Ye=new Ix,Je=new qx(W,ut,Le,Ye,mt,Se,Ct),N=new h_(E),w=new gm(W),Te=new j0(W,w),ee=new d_(W,w,Ct,Te),_e=new g_(W,ee,w,Te,Ct),ce=new m_(W,mt,Je),oe=new t_(Ye),ue=new Px(E,N,ut,mt,Te,oe),we=new $x(E,Ye),Pe=new Lx,le=new zx(ut),V=new $0(E,N,Le,_e,g,l),Ee=new Wx(E,_e,mt),We=new jx(W,Ct,mt,Le),ae=new Q0(W,ut,Ct),Me=new f_(W,ut,Ct),Ct.programs=ue.programs,E.capabilities=mt,E.extensions=ut,E.properties=Ye,E.renderLists=Pe,E.shadowMap=Ee,E.state=Le,E.info=Ct}y!==pn&&(C=new x_(y,t.width,t.height,o,s,r));let ye=new Mh(E,W);this.xr=ye,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){let A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(z,q,!1))},this.getSize=function(A){return A.set(z,q)},this.setSize=function(A,X,se=!0){if(ye.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}z=A,q=X,t.width=Math.floor(A*K),t.height=Math.floor(X*K),se===!0&&(t.style.width=A+"px",t.style.height=X+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(z*K,q*K).floor()},this.setDrawingBufferSize=function(A,X,se){z=A,q=X,K=se,t.width=Math.floor(A*se),t.height=Math.floor(X*se),this.setViewport(0,0,A,X)},this.setEffects=function(A){if(y===pn){je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let X=0;X<A.length;X++)if(A[X].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(he)},this.setViewport=function(A,X,se,j){A.isVector4?he.set(A.x,A.y,A.z,A.w):he.set(A,X,se,j),Le.viewport(k.copy(he).multiplyScalar(ke()).round())},this.getScissor=function(A){return A.copy(De)},this.setScissor=function(A,X,se,j){A.isVector4?De.set(A.x,A.y,A.z,A.w):De.set(A,X,se,j),Le.scissor(te.copy(De).multiplyScalar(ke()).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(A){Le.setScissorTest(ge=A)},this.setOpaqueSort=function(A){J=A},this.setTransparentSort=function(A){de=A},this.getClearColor=function(A){return A.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(A=!0,X=!0,se=!0){let j=0;if(A){let Q=!1;if(Y!==null){let Ie=Y.texture.format;Q=u.has(Ie)}if(Q){let Ie=Y.texture.type,He=h.has(Ie),Ce=V.getClearColor(),Fe=V.getClearAlpha(),Xe=Ce.r,nt=Ce.g,lt=Ce.b;He?(x[0]=Xe,x[1]=nt,x[2]=lt,x[3]=Fe,W.clearBufferuiv(W.COLOR,0,x)):(b[0]=Xe,b[1]=nt,b[2]=lt,b[3]=Fe,W.clearBufferiv(W.COLOR,0,b))}else j|=W.COLOR_BUFFER_BIT}X&&(j|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(j|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&W.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),U=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",Qe,!1),t.removeEventListener("webglcontextcreationerror",be,!1),V.dispose(),Pe.dispose(),le.dispose(),Je.dispose(),Ye.dispose(),N.dispose(),_e.dispose(),ee.dispose(),Te.dispose(),We.dispose(),ue.dispose(),ye.dispose(),ye.removeEventListener("sessionstart",In),ye.removeEventListener("sessionend",gn),zn.stop()};function qe(A){A.preventDefault(),$c("WebGLRenderer: Context Lost."),I=!0}function Qe(){$c("WebGLRenderer: Context Restored."),I=!1;let A=Ct.autoReset,X=Ee.enabled,se=Ee.autoUpdate,j=Ee.needsUpdate,Q=Ee.type;tt(),Ct.autoReset=A,Ee.enabled=X,Ee.autoUpdate=se,Ee.needsUpdate=j,Ee.type=Q}function be(A){je("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){let X=A.target;X.removeEventListener("dispose",st),Ft(X)}function Ft(A){$n(A),Ye.remove(A)}function $n(A){let X=Ye.get(A).programs;X!==void 0&&(X.forEach(function(se){ue.releaseProgram(se)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,se,j,Q,Ie){X===null&&(X=Ne);let He=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Ce=_a(A,X,se,j,Q);Le.setMaterial(j,He);let Fe=se.index,Xe=1;if(j.wireframe===!0){if(Fe=ee.getWireframeAttribute(se),Fe===void 0)return;Xe=2}let nt=se.drawRange,lt=se.attributes.position,Ve=nt.start*Xe,ct=(nt.start+nt.count)*Xe;Ie!==null&&(Ve=Math.max(Ve,Ie.start*Xe),ct=Math.min(ct,(Ie.start+Ie.count)*Xe)),Fe!==null?(Ve=Math.max(Ve,0),ct=Math.min(ct,Fe.count)):lt!=null&&(Ve=Math.max(Ve,0),ct=Math.min(ct,lt.count));let Rt=ct-Ve;if(Rt<0||Rt===1/0)return;Te.setup(Q,j,Ce,se,Fe);let Mt,yt=ae;if(Fe!==null&&(Mt=w.get(Fe),yt=Me,yt.setIndex(Mt)),Q.isMesh)j.wireframe===!0?(Le.setLineWidth(j.wireframeLinewidth*ke()),yt.setMode(W.LINES)):yt.setMode(W.TRIANGLES);else if(Q.isLine){let zt=j.linewidth;zt===void 0&&(zt=1),Le.setLineWidth(zt*ke()),Q.isLineSegments?yt.setMode(W.LINES):Q.isLineLoop?yt.setMode(W.LINE_LOOP):yt.setMode(W.LINE_STRIP)}else Q.isPoints?yt.setMode(W.POINTS):Q.isSprite&&yt.setMode(W.TRIANGLES);if(Q.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))yt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let zt=Q._multiDrawStarts,Ge=Q._multiDrawCounts,Wt=Q._multiDrawCount,ht=Fe?w.get(Fe).bytesPerElement:1,Vn=Ye.get(j).currentProgram.getUniforms();for(let Dt=0;Dt<Wt;Dt++)Vn.setValue(W,"_gl_DrawID",Dt),yt.render(zt[Dt]/ht,Ge[Dt])}else if(Q.isInstancedMesh)yt.renderInstances(Ve,Rt,Q.count);else if(se.isInstancedBufferGeometry){let zt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ge=Math.min(se.instanceCount,zt);yt.renderInstances(Ve,Rt,Ge)}else yt.render(Ve,Rt)};function Fl(A,X,se,j){U!==null&&A.isNodeMaterial&&U.setObject(j,A),Ae===!0&&oe.setState(A,se,!1),A.transparent===!0&&A.side===Pn&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,zi(A,X,j),A.side=Ni,A.needsUpdate=!0,zi(A,X,j),A.side=Pn):zi(A,X,j)}this.compile=function(A,X,se=null){se===null&&(se=A),U!==null&&U.renderStart(A,X,se),S=le.get(se),S.init(X),v.push(S),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),A!==se&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(X.layers)&&(S.pushLight(Q),Q.castShadow&&S.pushShadow(Q))}),S.setupLights(),U!==null&&U.updateLights(S.state.lightsArray),xe=this.localClippingEnabled,Ae=oe.init(this.clippingPlanes,xe),Ae===!0&&oe.setGlobalState(this.clippingPlanes,X),U!==null&&Ee.render(S.state.shadowsArray,se,X);let j=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let He=0;He<Ie.length;He++){let Ce=Ie[He];Fl(Ce,se,X,Q),j.add(Ce)}else Fl(Ie,se,X,Q),j.add(Ie)}),S=v.pop(),U!==null&&U.renderEnd(),j},this.compileAsync=function(A,X,se=null){let j=this.compile(A,X,se);return new Promise(Q=>{function Ie(){if(j.forEach(function(He){let Fe=Ye.get(He).currentProgram;(Fe===void 0||Fe.isReady())&&j.delete(He)}),j.size===0){Q(A);return}setTimeout(Ie,10)}ut.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let pa=null;function Oi(A){pa&&pa(A)}function In(){zn.stop()}function gn(){zn.start()}let zn=new qd;zn.setAnimationLoop(Oi),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(A){pa=A,ye.setAnimationLoop(A),A===null?zn.stop():zn.start()},ye.addEventListener("sessionstart",In),ye.addEventListener("sessionend",gn),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;U!==null&&U.renderStart(A,X);let se=ye.enabled===!0&&ye.isPresenting===!0,j=C!==null&&(Y===null||se)&&C.begin(E,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ye.enabled===!0&&ye.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ye.cameraAutoUpdate===!0&&ye.updateCamera(X),X=ye.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,X,Y),S=le.get(A,v.length),S.init(X),S.state.textureUnits=Je.getTextureUnits(),v.push(S),me.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),X.isArrayCamera?fe.setFromArrayCamera(X):ne.setFromProjectionMatrix(me,Rn,X.reversedDepth),xe=this.localClippingEnabled,Ae=oe.init(this.clippingPlanes,xe),T=Pe.get(A,_.length),T.init(),_.push(T),this.info.render.frame++,ye.enabled===!0&&ye.isPresenting===!0){let He=E.xr.getDepthSensingMesh();He!==null&&ma(He,X,-1/0,E.sortObjects)}ma(A,X,0,E.sortObjects),T.finish(),U!==null&&U.updateLights(S.state.lightsArray),E.sortObjects===!0&&T.sort(J,de),Ue=ye.enabled===!1||ye.isPresenting===!1||ye.hasDepthSensing()===!1,Ue&&V.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),Ae===!0&&oe.beginShadows();let Q=S.state.shadowsArray;if(Ee.render(Q,A,X),Ae===!0&&oe.endShadows(),(j&&C.hasRenderPass())===!1){let He=T.opaque,Ce=T.transmissive;if(S.setupLights(),X.isArrayCamera){let Fe=X.cameras;if(Ce.length>0)for(let Xe=0,nt=Fe.length;Xe<nt;Xe++){let lt=Fe[Xe];jn(He,Ce,A,lt)}Ue&&V.render(A);for(let Xe=0,nt=Fe.length;Xe<nt;Xe++){let lt=Fe[Xe];kn(T,A,lt,lt.viewport)}}else Ce.length>0&&jn(He,Ce,A,X),Ue&&V.render(A),kn(T,A,X)}Y!==null&&O===0&&(Je.updateMultisampleRenderTarget(Y),Je.updateRenderTargetMipmap(Y)),j&&C.end(E),A.isScene===!0&&A.onAfterRender(E,A,X),Te.resetDefaultState(),F=-1,H=null,v.pop(),v.length>0?(S=v[v.length-1],Je.setTextureUnits(S.state.textureUnits),Ae===!0&&oe.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function ma(A,X,se,j){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let He=X.isArrayCamera?fe:ne;if(!A.frustumCulled||A.intersectsFrustum(He)){j&&Be.setFromMatrixPosition(A.matrixWorld).applyMatrix4(me);let Ce=_e.update(A),Fe=A.material;Fe.visible&&T.push(A,Ce,Fe,se,Be.z,null,X)}}else if(A.isMesh||A.isLine||A.isPoints){let He=X.isArrayCamera?fe:ne;if(!A.frustumCulled||A.intersectsFrustum(He)){let Ce=_e.update(A),Fe=A.material;if(j&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Be.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Be.copy(Ce.boundingSphere.center)),Be.applyMatrix4(A.matrixWorld).applyMatrix4(me)),Array.isArray(Fe)){let Xe=Ce.groups;for(let nt=0,lt=Xe.length;nt<lt;nt++){let Ve=Xe[nt],ct=Fe[Ve.materialIndex];ct&&ct.visible&&T.push(A,Ce,ct,se,Be.z,Ve,X)}}else Fe.visible&&T.push(A,Ce,Fe,se,Be.z,null,X)}}}let Ie=A.children;for(let He=0,Ce=Ie.length;He<Ce;He++)ma(Ie[He],X,se,j)}function kn(A,X,se,j){let{opaque:Q,transmissive:Ie,transparent:He}=A;S.setupLightsView(se),Ae===!0&&oe.setGlobalState(E.clippingPlanes,se),j&&Le.viewport(k.copy(j)),Q.length>0&&Bi(Q,X,se),Ie.length>0&&Bi(Ie,X,se),He.length>0&&Bi(He,X,se),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function jn(A,X,se,j){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let Ve=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new Sn(1,1,{generateMipmaps:!0,type:Ve?cn:pn,minFilter:Zn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Ie=S.state.transmissionRenderTarget[j.id],He=j.viewport||k;Ie.setSize(He.z*E.transmissionResolutionScale,He.w*E.transmissionResolutionScale);let Ce=E.getRenderTarget(),Fe=E.getActiveCubeFace(),Xe=E.getActiveMipmapLevel();E.setRenderTarget(Ie),E.getClearColor($),L=E.getClearAlpha(),L<1&&E.setClearColor(16777215,.5),E.clear(),Ue&&V.render(se);let nt=E.toneMapping;E.toneMapping=Yn;let lt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),Ae===!0&&oe.setGlobalState(E.clippingPlanes,j),Bi(A,se,j),Je.updateMultisampleRenderTarget(Ie),Je.updateRenderTargetMipmap(Ie),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ct=0,Rt=X.length;ct<Rt;ct++){let Mt=X[ct],{object:yt,geometry:zt,material:Ge,group:Wt}=Mt;if(Ge.side===Pn&&yt.layers.test(j.layers)){let ht=Ge.side;Ge.side=on,Ge.needsUpdate=!0,pi(yt,se,j,zt,Ge,Wt),Ge.side=ht,Ge.needsUpdate=!0,Ve=!0}}Ve===!0&&(Je.updateMultisampleRenderTarget(Ie),Je.updateRenderTargetMipmap(Ie))}E.setRenderTarget(Ce,Fe,Xe),E.setClearColor($,L),lt!==void 0&&(j.viewport=lt),E.toneMapping=nt}function Bi(A,X,se){let j=X.isScene===!0?X.overrideMaterial:null;for(let Q=0,Ie=A.length;Q<Ie;Q++){let He=A[Q],{object:Ce,geometry:Fe,group:Xe}=He,nt=He.material;nt.allowOverride===!0&&j!==null&&(nt=j),Ce.layers.test(se.layers)&&pi(Ce,X,se,Fe,nt,Xe)}}function pi(A,X,se,j,Q,Ie){U!==null&&Q.isNodeMaterial&&U.setObject(A,Q),A.onBeforeRender(E,X,se,j,Q,Ie),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(E,X,se,j,A,Ie),Q.transparent===!0&&Q.side===Pn&&Q.forceSinglePass===!1?(Q.side=on,Q.needsUpdate=!0,E.renderBufferDirect(se,X,j,Q,A,Ie),Q.side=Ni,Q.needsUpdate=!0,E.renderBufferDirect(se,X,j,Q,A,Ie),Q.side=Pn):E.renderBufferDirect(se,X,j,Q,A,Ie),A.onAfterRender(E,X,se,j,Q,Ie)}function Qn(A){let X=0;for(let se of A)se.texture!==null&&X++;return X}function zi(A,X,se){X.isScene!==!0&&(X=Ne);let j=Ye.get(A),Q=S.state.lights,Ie=S.state.shadowsArray,He=Q.state.version,Ce=ue.getParameters(A,Q.state,Ie,X,se,S.state.lightProbeGridArray),Fe=ue.getProgramCacheKey(Ce),Xe=j.programs;j.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?X.environment:null,j.fog=X.fog;let nt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;j.envMap=N.get(A.envMap||j.environment,nt),j.envMapRotation=j.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",st),Xe=new Map,j.programs=Xe,j.programVariants=new Map);let lt=Xe.get(Fe);if(lt!==void 0){if(j.currentProgram===lt&&j.lightsStateVersion===He)return Gn(A,Ce),lt}else Ce.uniforms=ue.getUniforms(A),U!==null&&A.isNodeMaterial&&U.build(A,se,Ce),A.onBeforeCompile(Ce,E),lt=ue.acquireProgram(Ce,Fe),Xe.set(Fe,lt),j.uniforms=Ce.uniforms;let Ve=j.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=oe.uniform),Gn(A,Ce),j.needsLights=Ol(A),j.lightsStateVersion=He,j.needsLights&&(Ve.ambientLightColor.value=Q.state.ambient,Ve.lightProbe.value=Q.state.probe,Ve.sunLights.value=Q.state.sun,Ve.sunLightShadows.value=Q.state.sunShadow,Ve.directionalLights.value=Q.state.directional,Ve.directionalLightShadows.value=Q.state.directionalShadow,Ve.spotLights.value=Q.state.spot,Ve.spotLightShadows.value=Q.state.spotShadow,Ve.rectAreaLights.value=Q.state.rectArea,Ve.ltc_1.value=Q.state.rectAreaLTC1,Ve.ltc_2.value=Q.state.rectAreaLTC2,Ve.pointLights.value=Q.state.point,Ve.pointLightShadows.value=Q.state.pointShadow,Ve.hemisphereLights.value=Q.state.hemi,Ve.sunShadowMatrix.value=Q.state.sunShadowMatrix,Ve.sunShadowCascade.value=Q.state.sunShadowCascade,Ve.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ve.spotLightMatrix.value=Q.state.spotLightMatrix,Ve.spotLightMap.value=Q.state.spotLightMap,Ve.pointShadowMatrix.value=Q.state.pointShadowMatrix),j.numLightProbeGrids=Qn(S.state.lightProbeGridArray),j.currentProgram=lt,j.uniformsList=null,lt}function $s(A,X,se,j,Q){let Ie=Ye.get(A),He=Ie.currentProgram.id+","+j+","+Q,Ce=Ie.programVariants.get(He);return Ce===void 0?(Ce=zi(A,X,se),Ie.programVariants.set(He,Ce)):(Ie.currentProgram=Ce,Ie.uniformsList=null,Ie.outputColorSpace=j,Ie.toneMapping=Q),Ce}function ga(A){if(A.uniformsList===null){let X=A.currentProgram.getUniforms();A.uniformsList=Xs.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function Gn(A,X){let se=Ye.get(A);se.outputColorSpace=X.outputColorSpace,se.batching=X.batching,se.batchingColor=X.batchingColor,se.instancing=X.instancing,se.instancingColor=X.instancingColor,se.instancingMorph=X.instancingMorph,se.skinning=X.skinning,se.morphTargets=X.morphTargets,se.morphNormals=X.morphNormals,se.morphColors=X.morphColors,se.morphTargetsCount=X.morphTargetsCount,se.numClippingPlanes=X.numClippingPlanes,se.numIntersection=X.numClipIntersection,se.vertexAlphas=X.vertexAlphas,se.vertexTangents=X.vertexTangents,se.toneMapping=X.toneMapping}function _a(A,X,se,j,Q){X.isScene!==!0&&(X=Ne),Je.resetTextureUnits();let Ie=X.fog,He=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?X.environment:null,Ce=Y===null?E.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:pt.workingColorSpace,Fe=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,Xe=N.get(j.envMap||He,Fe),nt=j.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,lt=!!se.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Ve=!!se.morphAttributes.position,ct=!!se.morphAttributes.normal,Rt=!!se.morphAttributes.color,Mt=Yn;j.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Mt=E.toneMapping);let yt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,zt=yt!==void 0?yt.length:0,Ge=Ye.get(j),Wt=S.state.lights;if(Ae===!0&&(xe===!0||A!==H)){let bt=A===H&&j.id===F;oe.setState(j,A,bt)}let ht=!1,Vn=!1;j.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Wt.state.version||Q.isBatchedMesh&&Ge.batching===!1||!Q.isBatchedMesh&&Ge.batching===!0||Q.isBatchedMesh&&Ge.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ge.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ge.instancing===!1||!Q.isInstancedMesh&&Ge.instancing===!0||Q.isSkinnedMesh&&Ge.skinning===!1||!Q.isSkinnedMesh&&Ge.skinning===!0||Q.isInstancedMesh&&Ge.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ge.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ge.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ge.instancingMorph===!1&&Q.morphTexture!==null||Ge.envMap!==Xe||j.fog===!0&&Ge.fog!==Ie||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==oe.numPlanes||Ge.numIntersection!==oe.numIntersection)||Ge.vertexAlphas!==nt||Ge.vertexTangents!==lt||Ge.morphTargets!==Ve||Ge.morphNormals!==ct||Ge.morphColors!==Rt||Ge.morphTargetsCount!==zt||Ge.numLightProbeGrids!==Qn(S.state.lightProbeGridArray)?ht=!0:(Ge.outputColorSpace!==Ce||Ge.toneMapping!==Mt)&&(Vn=!0):(ht=!0,Ge.__version=j.version);let Dt=Ge.currentProgram;(ht===!0||Vn===!0)&&(Dt=Vn===!0?$s(j,X,Q,Ce,Mt):zi(j,X,Q),U&&j.isNodeMaterial&&U.onUpdateProgram(j,Dt,Ge));let Hn=!1,tn=!1,An=!1,ft=Dt.getUniforms(),Ot=Ge.uniforms;if(Le.useProgram(Dt.program)&&(Hn=!0,tn=!0,An=!0),j.id!==F&&(F=j.id,tn=!0),Hn||H!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ft.setValue(W,"projectionMatrix",A.projectionMatrix),ft.setValue(W,"viewMatrix",A.matrixWorldInverse);let Lt=ft.map.cameraPosition;Lt!==void 0&&Lt.setValue(W,Re.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&ft.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&ft.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),H!==A&&(H=A,tn=!0,An=!0)}if(Ge.needsLights&&(Wt.state.sunShadowMap.length>0&&ft.setValue(W,"sunShadowMap",Wt.state.sunShadowMap,Je),Wt.state.directionalShadowMap.length>0&&ft.setValue(W,"directionalShadowMap",Wt.state.directionalShadowMap,Je),Wt.state.spotShadowMap.length>0&&ft.setValue(W,"spotShadowMap",Wt.state.spotShadowMap,Je),Wt.state.pointShadowMap.length>0&&ft.setValue(W,"pointShadowMap",Wt.state.pointShadowMap,Je)),Q.isSkinnedMesh){ft.setOptional(W,Q,"bindMatrix"),ft.setOptional(W,Q,"bindMatrixInverse");let bt=Q.skeleton;bt&&(bt.boneTexture===null&&bt.computeBoneTexture(),ft.setValue(W,"boneTexture",bt.boneTexture,Je))}Q.isBatchedMesh&&(ft.setOptional(W,Q,"batchingTexture"),ft.setValue(W,"batchingTexture",Q._matricesTexture,Je),ft.setOptional(W,Q,"batchingIdTexture"),ft.setValue(W,"batchingIdTexture",Q._indirectTexture,Je),ft.setOptional(W,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ft.setValue(W,"batchingColorTexture",Q._colorsTexture,Je));let nn=se.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&ce.update(Q,se,Dt),(tn||Ge.receiveShadow!==Q.receiveShadow)&&(Ge.receiveShadow=Q.receiveShadow,ft.setValue(W,"receiveShadow",Q.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&X.environment!==null&&(Ot.envMapIntensity.value=X.environmentIntensity),Ot.dfgLUT!==void 0&&(Ot.dfgLUT.value=ey()),tn){if(ft.setValue(W,"toneMappingExposure",E.toneMappingExposure),Ge.needsLights&&xa(Ot,An),Ie&&j.fog===!0&&we.refreshFogUniforms(Ot,Ie),we.refreshMaterialUniforms(Ot,j,K,q,S.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let bt=M,Lt=0;for(let Tn of S.state.lightProbeGridArray)Tn.texture!==null&&(bt.textures[Lt]=Tn.texture,bt.min[Lt]=Tn.boundingBox.min,bt.max[Lt]=Tn.boundingBox.max,bt.resolution[Lt]=Tn.resolution,Lt++);for(let Tn in bt)bt[Tn].length=Lt;Ot.probesSH.value=bt.textures,Ot.probesMin.value=bt.min,Ot.probesMax.value=bt.max,Ot.probesResolution.value=bt.resolution}Xs.upload(W,ga(Ge),Ot,Je)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Xs.upload(W,ga(Ge),Ot,Je),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&ft.setValue(W,"center",Q.center),ft.setValue(W,"modelViewMatrix",Q.modelViewMatrix),ft.setValue(W,"normalMatrix",Q.normalMatrix),ft.setValue(W,"modelMatrix",Q.matrixWorld),j.uniformsGroups!==void 0){let bt=j.uniformsGroups;for(let Lt=0,Tn=bt.length;Lt<Tn;Lt++){let js=bt[Lt];We.update(js,Dt),We.bind(js,Dt)}}return Dt}function xa(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.sunLights.needsUpdate=X,A.sunLightShadows.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function Ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,X,se){let j=Ye.get(A);j.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),Ye.get(A.texture).__webglTexture=X,Ye.get(A.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:se,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,X){let se=Ye.get(A);se.__webglFramebuffer=X,se.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(A,X=0,se=0){Y=A,G=X,O=se;let j=null,Q=!1,Ie=!1;if(A){let Ce=Ye.get(A);if(Ce.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(W.FRAMEBUFFER,Ce.__webglFramebuffer),k.copy(A.viewport),te.copy(A.scissor),ie=A.scissorTest,Le.viewport(k),Le.scissor(te),Le.setScissorTest(ie),F=-1;return}else if(Ce.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(Ce.__hasExternalTextures)Je.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let nt=A.depthTexture;if(Ce.__boundDepthTexture!==nt){if(nt!==null&&Ye.has(nt)&&(A.width!==nt.image.width||A.height!==nt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}let Fe=A.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Ie=!0);let Xe=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[X])?j=Xe[X][se]:j=Xe[X],Q=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?j=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?j=Xe[se]:j=Xe,k.copy(A.viewport),te.copy(A.scissor),ie=A.scissorTest}else k.copy(he).multiplyScalar(K).floor(),te.copy(De).multiplyScalar(K).floor(),ie=ge;if(se!==0&&(j=D),Le.bindFramebuffer(W.FRAMEBUFFER,j)&&Le.drawBuffers(A,j),Le.viewport(k),Le.scissor(te),Le.setScissorTest(ie),Q){let Ce=Ye.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ce.__webglTexture,se)}else if(Ie){let Ce=X;for(let Fe=0;Fe<A.textures.length;Fe++){let Xe=Ye.get(A.textures[Fe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Fe,Xe.__webglTexture,se,Ce)}}else if(A!==null&&se!==0){let Ce=Ye.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ce.__webglTexture,se)}F=-1};function hn(A){let X=Ye.get(A);return(X.__readFormat!==A.format||X.__readType!==A.type)&&(X.__readFormat=A.format,X.__readType=A.type,X.__formatReadable=mt.textureFormatReadable(A.format),X.__typeReadable=mt.textureTypeReadable(A.type)),X}this.readRenderTargetPixels=function(A,X,se,j,Q,Ie,He,Ce=0){if(!(A&&A.isWebGLRenderTarget)){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe){Le.bindFramebuffer(W.FRAMEBUFFER,Fe);try{let Xe=A.textures[Ce],nt=Xe.format,lt=Xe.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce);let Ve=hn(Xe);if(Ve.__formatReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-j&&se>=0&&se<=A.height-Q&&W.readPixels(X,se,j,Q,Se.convert(nt),Se.convert(lt),Ie)}finally{let Xe=Y!==null?Ye.get(Y).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,X,se,j,Q,Ie,He,Ce=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Fe=Fe[He],Array.isArray(Fe)&&(Fe=Fe[0])),Fe)if(X>=0&&X<=A.width-j&&se>=0&&se<=A.height-Q){Le.bindFramebuffer(W.FRAMEBUFFER,Fe);let Xe=A.textures[Ce],nt=Xe.format,lt=Xe.type;A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Ce);let Ve=hn(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,ct),W.bufferData(W.PIXEL_PACK_BUFFER,Ie.byteLength,W.STREAM_READ),W.readPixels(X,se,j,Q,Se.convert(nt),Se.convert(lt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);let Rt=Y!==null?Ye.get(Y).__webglFramebuffer:null;Le.bindFramebuffer(W.FRAMEBUFFER,Rt);let Mt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await fd(W,Mt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,ct),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ie),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(ct),W.deleteSync(Mt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,X=null,se=0){let j=Math.pow(2,-se),Q=Math.floor(A.image.width*j),Ie=Math.floor(A.image.height*j),He=X!==null?X.x:0,Ce=X!==null?X.y:0;Je.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,se,0,0,He,Ce,Q,Ie),Le.unbindTexture()},this.copyTextureToTexture=function(A,X,se=null,j=null,Q=0,Ie=0){let He,Ce,Fe,Xe,nt,lt,Ve,ct,Rt,Mt=A.isCompressedTexture?A.mipmaps[Ie]:A.image;if(se!==null)He=se.max.x-se.min.x,Ce=se.max.y-se.min.y,Fe=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,nt=se.min.y,lt=se.isBox3?se.min.z:0;else{let ft=Math.pow(2,-Q);He=Math.floor(Mt.width*ft),Ce=Math.floor(Mt.height*ft),A.isDataArrayTexture?Fe=Mt.depth:A.isData3DTexture?Fe=Math.floor(Mt.depth*ft):Fe=1,Xe=0,nt=0,lt=0}j!==null?(Ve=j.x,ct=j.y,Rt=j.z):(Ve=0,ct=0,Rt=0);let yt=Se.convert(X.format),zt=Se.convert(X.type),Ge;X.isData3DTexture?(Je.setTexture3D(X,0),Ge=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(Je.setTexture2DArray(X,0),Ge=W.TEXTURE_2D_ARRAY):(Je.setTexture2D(X,0),Ge=W.TEXTURE_2D),Le.activeTexture(W.TEXTURE0),Le.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),Le.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),Le.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);let Wt=Le.getParameter(W.UNPACK_ROW_LENGTH),ht=Le.getParameter(W.UNPACK_IMAGE_HEIGHT),Vn=Le.getParameter(W.UNPACK_SKIP_PIXELS),Dt=Le.getParameter(W.UNPACK_SKIP_ROWS),Hn=Le.getParameter(W.UNPACK_SKIP_IMAGES);Le.pixelStorei(W.UNPACK_ROW_LENGTH,Mt.width),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Mt.height),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Xe),Le.pixelStorei(W.UNPACK_SKIP_ROWS,nt),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,lt);let tn=A.isDataArrayTexture||A.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){let ft=Ye.get(A),Ot=Ye.get(X),nn=Ye.get(ft.__renderTarget),bt=Ye.get(Ot.__renderTarget);Le.bindFramebuffer(W.READ_FRAMEBUFFER,nn.__webglFramebuffer),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let Lt=0;Lt<Fe;Lt++)tn&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,Q,lt+Lt),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(X).__webglTexture,Ie,Rt+Lt)),W.blitFramebuffer(Xe,nt,Xe+He,nt+Ce,Ve,ct,Ve+He,ct+Ce,W.DEPTH_BUFFER_BIT,W.NEAREST);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||Ye.has(A)){let ft=Ye.get(A),Ot=Ye.get(X);Le.bindFramebuffer(W.READ_FRAMEBUFFER,R),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,B);for(let nn=0;nn<Fe;nn++)tn?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ft.__webglTexture,Q,lt+nn):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,ft.__webglTexture,Q),An?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ot.__webglTexture,Ie,Rt+nn):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Ot.__webglTexture,Ie),Q!==0?W.blitFramebuffer(Xe,nt,Xe+He,nt+Ce,Ve,ct,Ve+He,ct+Ce,W.COLOR_BUFFER_BIT,W.NEAREST):An?W.copyTexSubImage3D(Ge,Ie,Ve,ct,Rt+nn,Xe,nt,He,Ce):W.copyTexSubImage2D(Ge,Ie,Ve,ct,Xe,nt,He,Ce);Le.bindFramebuffer(W.READ_FRAMEBUFFER,null),Le.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else An?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(Ge,Ie,Ve,ct,Rt,He,Ce,Fe,yt,zt,Mt.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Ge,Ie,Ve,ct,Rt,He,Ce,Fe,yt,Mt.data):W.texSubImage3D(Ge,Ie,Ve,ct,Rt,He,Ce,Fe,yt,zt,Mt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ie,Ve,ct,He,Ce,yt,zt,Mt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ie,Ve,ct,Mt.width,Mt.height,yt,Mt.data):W.texSubImage2D(W.TEXTURE_2D,Ie,Ve,ct,He,Ce,yt,zt,Mt);Le.pixelStorei(W.UNPACK_ROW_LENGTH,Wt),Le.pixelStorei(W.UNPACK_IMAGE_HEIGHT,ht),Le.pixelStorei(W.UNPACK_SKIP_PIXELS,Vn),Le.pixelStorei(W.UNPACK_SKIP_ROWS,Dt),Le.pixelStorei(W.UNPACK_SKIP_IMAGES,Hn),Ie===0&&X.generateMipmaps===!0&&X.mipmapsAutoUpdate===!0&&W.generateMipmap(Ge),Le.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){G=0,O=0,Y=null,Le.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var sf={type:"change"},bh={type:"start"},af={type:"end"},wl=new qi,rf=new rn,ty=Math.cos(70*th.DEG2RAD),Ht=new Z,mn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Sh=1e-6,Al=class extends Zr{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Di.ROTATE,MIDDLE:Di.DOLLY,RIGHT:Di.PAN},this.touches={ONE:Li.ROTATE,TWO:Li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new an,this._lastTargetPosition=new Z,this._quat=new an().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zs,this._sphericalDelta=new zs,this._scale=1,this._panOffset=new Z,this._rotateStart=new Oe,this._rotateEnd=new Oe,this._rotateDelta=new Oe,this._panStart=new Oe,this._panEnd=new Oe,this._panDelta=new Oe,this._dollyStart=new Oe,this._dollyEnd=new Oe,this._dollyDelta=new Oe,this._dollyDirection=new Z,this._mouse=new Oe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iy.bind(this),this._onPointerDown=ny.bind(this),this._onPointerUp=sy.bind(this),this._onContextMenu=uy.bind(this),this._onMouseWheel=oy.bind(this),this._onKeyDown=ly.bind(this),this._onTouchStart=cy.bind(this),this._onTouchMove=hy.bind(this),this._onMouseDown=ry.bind(this),this._onMouseMove=ay.bind(this),this._interceptControlDown=dy.bind(this),this._interceptControlUp=fy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sf),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=mn:n>Math.PI&&(n-=mn),s<-Math.PI?s+=mn:s>Math.PI&&(s-=mn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ht.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(wl.origin.copy(this.object.position),wl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wl.direction))<ty?this.object.lookAt(this.target):(rf.setFromNormalAndCoplanarPoint(this.object.up,this.target),wl.intersectPlane(rf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Sh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Sh||this._lastTargetPosition.distanceToSquared(this.target)>Sh?(this.dispatchEvent(sf),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?mn/60*this.autoRotateSpeed*e:mn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-mn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(mn*this._rotateDelta.x/t.clientHeight),this._rotateUp(mn*this._rotateDelta.y*1.55/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Oe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ny(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(af),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ry(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Di.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Di.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Di.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(bh)}function ay(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function oy(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(bh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(af))}function ly(i){this.enabled!==!1&&this._handleKeyDown(i)}function cy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Li.ROTATE:if(this.enableRotate===!1){this.state=xt.NONE;break}this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Li.PAN:if(this.enablePan===!1){this.state=xt.NONE;break}this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Li.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Li.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(bh)}function hy(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function uy(i){this.enabled!==!1&&i.preventDefault()}function dy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Tl=class extends zr{constructor(e){super(e),this.type=cn}parse(e){let a=function(v,C){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(C||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(C||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(C||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(C||""))}},f=function(v,C,E){C=C||1024;let U=v.pos,D=-1,R=0,B="",G=String.fromCharCode.apply(null,new Uint16Array(v.subarray(U,U+128)));for(;0>(D=G.indexOf(`
`))&&R<C&&U<v.byteLength;)B+=G,R+=G.length,U+=128,G=String.fromCharCode.apply(null,new Uint16Array(v.subarray(U,U+128)));return-1<D?(E!==!1&&(v.pos+=R+D+1),B+G.slice(0,D)):!1},p=function(v){let C=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},B,G;for((v.pos>=v.byteLength||!(B=f(v)))&&a(1,"no header found"),(G=B.match(C))||a(3,"bad initial token"),R.valid|=1,R.programtype=G[1],R.string+=B+`
`;B=f(v),B!==!1;){if(R.string+=B+`
`,B.charAt(0)==="#"){R.comments+=B+`
`;continue}if((G=B.match(E))&&(R.gamma=parseFloat(G[1])),(G=B.match(I))&&(R.exposure=parseFloat(G[1])),(G=B.match(U))&&(R.valid|=2,R.format=G[1]),(G=B.match(D))&&(R.valid|=4,R.height=parseInt(G[1],10),R.width=parseInt(G[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},m=function(v,C,E){let I=C;if(I<8||I>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);I!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");let U=new Uint8Array(4*C*E);U.length||a(4,"unable to allocate buffer space");let D=0,R=0,B=4*I,G=new Uint8Array(4),O=new Uint8Array(B),Y=E;for(;Y>0&&R<v.byteLength;){R+4>v.byteLength&&a(1),G[0]=v[R++],G[1]=v[R++],G[2]=v[R++],G[3]=v[R++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=I)&&a(3,"bad rgbe scanline format");let F=0,H;for(;F<B&&R<v.byteLength;){H=v[R++];let te=H>128;if(te&&(H-=128),(H===0||F+H>B)&&a(3,"bad scanline data"),te){let ie=v[R++];for(let $=0;$<H;$++)O[F++]=ie}else O.set(v.subarray(R,R+H),F),F+=H,R+=H}let k=I;for(let te=0;te<k;te++){let ie=0;U[D]=O[te+ie],ie+=I,U[D+1]=O[te+ie],ie+=I,U[D+2]=O[te+ie],ie+=I,U[D+3]=O[te+ie],D+=4}Y--}return U},g=function(v,C,E,I){let U=v[C+3],D=Math.pow(2,U-128)/255;E[I+0]=v[C+0]*D,E[I+1]=v[C+1]*D,E[I+2]=v[C+2]*D,E[I+3]=1},y=function(v,C,E,I){let U=v[C+3],D=Math.pow(2,U-128)/255;E[I+0]=bi.toHalfFloat(Math.min(v[C+0]*D,65504)),E[I+1]=bi.toHalfFloat(Math.min(v[C+1]*D,65504)),E[I+2]=bi.toHalfFloat(Math.min(v[C+2]*D,65504)),E[I+3]=bi.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;let h=p(u),x=h.width,b=h.height,M=m(u.subarray(u.pos),x,b),T,S,_;switch(this.type){case ln:_=M.length/4;let v=new Float32Array(_*4);for(let E=0;E<_;E++)g(M,E*4,v,E*4);T=v,S=ln;break;case cn:_=M.length/4;let C=new Uint16Array(_*4);for(let E=0;E<_;E++)y(M,E*4,C,E*4);T=C,S=cn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:b,data:T,header:h.string,gamma:h.gamma,exposure:h.exposure,type:S,colorSpace:Xi,minFilter:Ut,magFilter:Ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var El=class extends Tl{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};function of(i,e,t){let{gardenStone:n,postBrick:s,tuscanBrick:r,tuscanFenceWall:a,copingStone:o,fenceIron:l,timber:c}=t,d=[[[-19,-17],[19,-17]],[[-19,-17],[-19,20.5]],[[19,-17],[19,20.5]],[[-19,20.5],[-2.1,20.5]],[[2.1,20.5],[7,20.5]],[[12,20.5],[19,20.5]]],f=new Map,p=new i.MeshStandardMaterial({color:"#48525b",roughness:.47,metalness:.52,side:i.DoubleSide}),m=c,g=[l,p],y="iron",u=!0,h=(S,_,v,C,E,I,U,D,R=!0)=>{let B=new i.Mesh(new i.BoxGeometry(_,v,C),E);return B.position.set(I,U,D),B.castShadow=R,B.receiveShadow=!0,S.add(B),B},x=(S,_,v,C,E=!1)=>{if(!_.length)return;let I=new i.BoxGeometry(...v),U=new i.InstancedMesh(I,C,_.length),D=new i.Matrix4,R=new i.Quaternion,B=new i.Vector3(1,1,1);for(let G=0;G<_.length;G++){let[O,Y,F,H=0]=_[G];R.setFromEuler(new i.Euler(H,0,0)),D.compose(new i.Vector3(O,Y,F),R,B),U.setMatrixAt(G,D)}return U.instanceMatrix.needsUpdate=!0,U.castShadow=E,U.receiveShadow=!0,S.add(U),U},b=(S,_,v=l,C=[.45,1.47])=>{for(let E of C)h(S,_,.082,.092,v,0,E,0,!1)};function M(S,_,v){let C=v==="tuscan"||v==="brickIron";if(v==="tuscan")h(S,_,1.77,.24,a,0,.97,0),h(S,_+.08,.135,.41,o,0,1.91,0),h(S,_,.26,.35,n,0,.15,0);else if(v==="stone")h(S,_,1.84,.29,n,0,.97,0),h(S,_+.1,.12,.42,o,0,1.95,0);else if(v==="wood"||v==="ranch"||v==="louvers"){if(v==="wood")for(let E=.3;E<=1.65;E+=.19)h(S,_,.14,.105,m,0,E,0,!1);if(v==="ranch")for(let E=.38;E<=1.8;E+=.33)h(S,_,.25,.09,p,0,E,0,!1);if(v==="louvers"){let E=[];for(let I=.24;I<=1.82;I+=.16)E.push([0,I,0,-.42]);x(S,E,[_,.18,.08],p,!1)}}else if(v==="profiled"){h(S,_,.3,.28,n,0,.18,0,!1);let E=Math.max(20,Math.ceil(_/.12)),I=[],U=[];for(let B=0;B<=E;B++){let G=-_/2+_*B/E,O=.1*Math.sin(G*2*Math.PI/.3);I.push(G,.3,O,G,1.98,O)}for(let B=0;B<E;B++){let G=B*2;U.push(G,G+1,G+2,G+1,G+3,G+2)}let D=new i.BufferGeometry;D.setAttribute("position",new i.Float32BufferAttribute(I,3)),D.setIndex(U),D.computeVertexNormals();let R=new i.Mesh(D,p);R.castShadow=!0,R.receiveShadow=!0,S.add(R),h(S,_,.075,.18,l,0,2.02,0,!1)}else if(v==="panel3d"){let E=[];for(let U=-_/2+.12;U<_/2;U+=.21)E.push([U,1.02,0]);x(S,E,[.029,1.9,.032],l,!1);let I=[];for(let U=.22;U<2.04;U+=.25)I.push([0,U,0]);x(S,I,[_,.034,.03],l,!1),b(S,_,l,[.15,1.94])}else if(v==="picket"||v==="chess"){b(S,_,l,[.43,1.55]);let E=v==="chess"?2:1,I=[],U=Math.ceil(_/(v==="chess"?.225:.28));for(let D=0;D<E;D++)for(let R=0;R<U;R++){let B=-_/2+(R+.5+(D?.5:0))*_/U;B>_/2-.1||I.push([B,1.02,D?.11:-.08])}x(S,I,[.14,1.73,.05],p,!0)}else if(v==="brickIron"){h(S,_,.55,.31,a,0,.3,0,!1),h(S,_,.105,.43,o,0,.61,0,!1),b(S,_,l,[.75,1.9]);let E=[];for(let I=-_/2+.15;I<_/2;I+=.25)E.push([I,1.32,0]);x(S,E,[.05,1.25,.052],p,!1)}else{b(S,_,l,[.4,1.7]);let E=[];for(let I=-_/2+.11;I<_/2;I+=.24)E.push([I,1.1,0]);x(S,E,[.048,1.79,.048],l,!1);for(let I=-_/2+.18;I<_/2;I+=.73){let U=new i.Mesh(new i.TorusGeometry(.16,.025,6,18,Math.PI),l);U.position.set(I,1.28,.045),S.add(U)}}(C||v==="stone")&&h(S,_,.16,.43,n,0,.09,0,!1)}function T(S){let _=new i.Group;_.name="Fence \xB7 "+S;let v=[],C=new Map,E=["tuscan","stone","brickIron"].includes(S);for(let[[G,O],[Y,F]]of d){let H=Y-G,k=F-O,te=Math.hypot(H,k),ie=new i.Group;ie.position.set((G+Y)/2,0,(O+F)/2),ie.rotation.y=-Math.atan2(k,H),_.add(ie),M(ie,te,S);let $=Math.max(1,Math.ceil(te/(E?3.4:4)));for(let L=0;L<=$;L++){let z=L/$,q=G+H*z,K=O+k*z;C.set(q.toFixed(3)+":"+K.toFixed(3),[q,K])}}let I=S==="tuscan"||S==="brickIron"?r:S==="stone"?n:s,U=S==="tuscan"?2.17:S==="brickIron"?2:2.02;for(let[G,O]of C.values()){let Y=E?.52:.2;h(_,Y,U,Y,E?I:l,G,U/2+.05,O),E&&h(_,Y+.13,.105,Y+.13,o,G,U+.12,O)}let D=20.5,R=E?I:s,B=E?2.6:2.25;for(let G of[{a:-2.1,b:2.1,name:"\u041A\u0430\u043B\u0438\u0442\u043A\u0430"},{a:7,b:12,name:"\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"}]){let O=G.b-G.a;for(let Y of[G.a,G.b]){h(_,.38,B,.38,R,Y,B/2,D),h(_,.51,.13,.51,o,Y,B+.085,D);let F=new i.Mesh(new i.SphereGeometry(.1,10,7),new i.MeshStandardMaterial({color:"#f4d7a6",emissive:"#a56d39",emissiveIntensity:.2}));F.position.set(Y,B+.22,D),_.add(F)}for(let Y of[-1,1]){let F=new i.Group;F.name=G.name,F.position.set(Y===-1?G.a+.12:G.b-.12,0,D),F.rotation.y=u?Y*.48:0,G.name==="\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"&&v.push({pivot:F,side:Y}),_.add(F);let H=O/2-.24,k=Y===-1?H/2:-H/2;for(let ie of[.4,1.61])h(F,H,.09,.09,l,k,ie,0,!1);let te=Math.max(6,Math.round(H/.22));for(let ie=0;ie<te;ie++){let $=k-H/2+(ie+.5)*H/te;h(F,.055,1.65,.065,p,$,1.01,0,!1)}}}return _.userData.vehicleGatePivots=v,e.add(_),f.set(S,_),_}return{setType(S){y=S;for(let[v,C]of f)C.visible=v===S;let _=f.get(S)||T(S);return _.visible=!0,_},setColor(S){for(let _ of g)_.color.set(S)},getType(){return y},setVehicleAccess(S){u=!!S;for(let _ of f.values())for(let{pivot:v,side:C}of _.userData.vehicleGatePivots||[])v.rotation.y=u?C*.48:0},available:["iron","tuscan","wood","stone","brickIron","louvers","picket","chess","ranch","profiled","panel3d"]}}function lf(i,e,{tileRoof:t,roofSurface:n}){let s=new i.MeshStandardMaterial({color:"#666d70",roughness:.76,metalness:.17,envMapIntensity:.38,side:i.DoubleSide}),r=new i.MeshStandardMaterial({color:"#72736d",roughness:.83,metalness:.07,side:i.DoubleSide}),a=new i.MeshStandardMaterial({color:"#737577",roughness:.94,metalness:0,side:i.DoubleSide}),o=new i.MeshStandardMaterial({color:"#70797b",roughness:.4,metalness:.62,side:i.DoubleSide}),l=[s,r,a,o,n],c=new Map,d=["slate","terracotta","graphite","ceramic","metalGraphite","metalBurgundy","metal3d","metalModular","metalTramontana","standingSeam","flexible","composite","profiled"],f="slate",p=!0;function m(g,y,u){let b=[],M=[],T=[],S={metalGraphite:{wave:.035,step:.012,period:.78,courses:19},metalBurgundy:{wave:.035,step:.012,period:.78,courses:19},metal3d:{wave:.067,step:.023,period:.91,courses:18},metalModular:{wave:.044,step:.018,period:.8,courses:20},metalTramontana:{wave:.062,step:.026,period:.86,courses:18},standingSeam:{wave:.13,step:0,period:1.13,courses:0},composite:{wave:.07,step:.06,period:.58,courses:7},flexible:{wave:.003,step:.018,period:.46,courses:9},profiled:{wave:.14,step:0,period:.64,courses:0}}[y];for(let C=0;C<=72;C++){let E=C/72;for(let I=0;I<=94;I++){let U=I/94,D=-5.3+10.6*U,R=(D+5.3)*2*Math.PI/S.period,B=S.courses===0?0:Math.pow(Math.max(0,Math.sin(2*Math.PI*E*S.courses)),10)*S.step,G=Math.cos(R),O=y==="standingSeam"?Math.pow(Math.max(0,G),18)*S.wave:y==="profiled"?Math.sin(R)*S.wave:y==="metalModular"?Math.pow(Math.abs(G),4)*S.wave:y==="metalTramontana"?(Math.pow(Math.max(0,G),3)*.7+Math.pow(Math.max(0,Math.cos(2*R+.3)),3)*.3)*S.wave:y==="metal3d"?Math.pow(Math.max(0,G),2.5)*S.wave:Math.pow(Math.max(0,G),1.4)*S.wave;b.push(g*7.25*(1-E),6.98+2.07*E+.052+B+O,D),M.push(U*2.75,E*3.4)}}for(let C=0;C<72;C++)for(let E=0;E<94;E++){let I=C*95+E,U=I+94+1;T.push(I,U,I+1,U,U+1,I+1)}let _=new i.BufferGeometry;_.setAttribute("position",new i.Float32BufferAttribute(b,3)),_.setAttribute("uv",new i.Float32BufferAttribute(M,2)),_.setIndex(T),_.computeVertexNormals();let v=new i.Mesh(_,u);return v.castShadow=!0,v.receiveShadow=!0,v}for(let g of d){if(["slate","terracotta","graphite","ceramic"].includes(g))continue;let y=new i.Group;y.name="Roof "+g;let u=g==="standingSeam"?o:g==="composite"?r:g==="flexible"?a:s;y.add(m(-1,g,u),m(1,g,u)),y.visible=!1,e.add(y),c.set(g,y)}return{types:d,metalMat:s,compositeMat:r,flexibleMat:a,seamMat:o,setType(g){let y=d.includes(g)?g:"slate";f=y,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(y);for(let[u,h]of c)h.visible=p&&u===y},setEnabled(g){p=!!g,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(f);for(let[y,u]of c)u.visible=p&&y===f},getMaterial(){return["slate","terracotta","graphite","ceramic"].includes(f)?n:f==="standingSeam"?o:f==="composite"?r:f==="flexible"?a:s},setColor(g){for(let y of l)y.color.set(g)},setPhotoMap(g){for(let y of[s,o])y.map=g,y.needsUpdate=!0},setMetalNormal(g){for(let y of[s,o])y.normalMap=g,y.normalScale.set(.075,.075),y.needsUpdate=!0},setMetalRoughness(g){o.roughnessMap=g,o.needsUpdate=!0,s.roughnessMap=null,s.needsUpdate=!0},setTileMap(g){n.map=g,n.needsUpdate=!0},getType(){return f}}}var la={metalGraphite:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metalBurgundy:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metal3d:{pitch:.91,amplitude:.067,step:.4,stepHeight:.023,style:"high"},metalModular:{pitch:.8,amplitude:.044,step:.35,stepHeight:.018,style:"symmetric"},metalTramontana:{pitch:.86,amplitude:.062,step:.4,stepHeight:.026,style:"sculpted"},composite:{pitch:.61,amplitude:.057,step:.35,stepHeight:.023,style:"classic"},profiled:{pitch:.58,amplitude:.075,step:.99,stepHeight:0,style:"symmetric"}},py=i=>Math.max(0,Math.min(1,i)),my=i=>i-Math.floor(i);function gy(i,e,t){let n=la[i];if(!n)return 0;let s=2*Math.PI*e/n.pitch,r=Math.cos(s),a;n.style==="symmetric"?a=Math.pow(Math.abs(r),4)*n.amplitude:n.style==="high"?a=Math.pow(Math.max(0,r),2.5)*n.amplitude:n.style==="sculpted"?a=(.65*Math.pow(Math.max(0,r),3)+.35*Math.pow(Math.max(0,Math.cos(2*s+.3)),3))*n.amplitude:a=Math.pow(Math.max(0,r),1.35)*n.amplitude;let o=my(t/n.step),l=n.stepHeight*Math.pow(Math.max(0,Math.cos(2*Math.PI*o)),6);return a+l}function Cl(i,e,t){let n=e.length===3,s=typeof window<"u"&&window.matchMedia("(min-width:850px)").matches?80:56,r=[...e.map(u=>u[0])],a=[...e.map(u=>u[2])],o=Math.max(...r)-Math.min(...r),c=Math.max(...a)-Math.min(...a)>=o,d=[],f=[],p=[],m=(u,h)=>{if(n){let S=e[0],_=e[1],v=e[2],C=1-u-h;return[S[0]*C+_[0]*u+v[0]*h,S[1]*C+_[1]*u+v[1]*h,S[2]*C+_[2]*u+v[2]*h]}let[x,b,M,T]=e;return[x[0]*(1-u)*(1-h)+b[0]*u*(1-h)+M[0]*u*h+T[0]*(1-u)*h,x[1]*(1-u)*(1-h)+b[1]*u*(1-h)+M[1]*u*h+T[1]*(1-u)*h,x[2]*(1-u)*(1-h)+b[2]*u*(1-h)+M[2]*u*h+T[2]*(1-u)*h]},g=(u,h)=>{let x=m(u,h),b=n?Math.min(u,h,1-u-h):Math.min(u,h,1-u,1-h),M=py(b*80),T=c?x[2]:x[0],S=c?x[0]:x[2];x[1]+=gy(t,T,S)*M,d.push(...x),f.push(x[0]*.26+x[2]*.13,x[2]*.24+x[1]*.11)};if(n){let u=(h,x)=>h*(s+1)-h*(h-1)/2+x;for(let h=0;h<=s;h++)for(let x=0;x<=s-h;x++)g(h/s,x/s);for(let h=0;h<s;h++)for(let x=0;x<s-h;x++){let b=u(h,x),M=u(h+1,x),T=u(h,x+1);p.push(b,M,T),x<s-h-1&&p.push(M,u(h+1,x+1),T)}}else{for(let u=0;u<=s;u++)for(let h=0;h<=s;h++)g(h/s,u/s);for(let u=0;u<s;u++)for(let h=0;h<s;h++){let x=u*(s+1)+h,b=x+1,M=x+s+1;p.push(x,b,M,b,M+1,M)}}let y=new i.BufferGeometry;return y.setAttribute("position",new i.Float32BufferAttribute(d,3)),y.setAttribute("uv",new i.Float32BufferAttribute(f,2)),y.setIndex(p),y.computeVertexNormals(),y}function cf(i,e,{roofSystem:t,roofRidge:n,gableFacades:s}){let r=["gable","hip","flat","mansard"],a=new Map,o=7.28,l=5.3,c=7.06,d=new i.MeshStandardMaterial({color:"#ccc7bd",roughness:.68,metalness:.04,side:i.DoubleSide}),f=new i.MeshStandardMaterial({color:"#e4dbca",roughness:.87,metalness:0,side:i.DoubleSide}),p=new i.MeshStandardMaterial({color:"#d2c6b4",roughness:.74,metalness:.04,side:i.DoubleSide}),m=t.getMaterial(),g=(z,q,K=m)=>{let J=[],de=[],he=[];q.forEach(ne=>{J.push(...ne),de.push(ne[0]*.24,ne[2]*.22+ne[1]*.1)});for(let ne=1;ne<q.length-1;ne++)he.push(0,ne,ne+1);let De=new i.BufferGeometry;De.setAttribute("position",new i.Float32BufferAttribute(J,3)),De.setAttribute("uv",new i.Float32BufferAttribute(de,2)),De.setIndex(he),De.computeVertexNormals();let ge=new i.Mesh(De,K);return ge.castShadow=!0,ge.receiveShadow=!0,K===m&&(ge.userData.isRoofShell=!0,ge.userData.corners=q.map(ne=>[...ne]),ge.userData.baseGeometry=De),z.add(ge),ge},y=(z,q,K,J,de,he,De,ge=d)=>{let ne=new i.Mesh(new i.BoxGeometry(q,K,J),ge);return ne.position.set(de,he,De),ne.castShadow=!0,ne.receiveShadow=!0,z.add(ne),ne},u=z=>{let q=new i.Group;return q.name="KASKAD roof "+z,q.visible=!1,e.add(q),a.set(z,q),q},h=6.4,x=4.5,b=(z,q,K=!1)=>{let J=de=>K?6.98+2.07*(1-Math.abs(de)/7.25)-.14:q;for(let de of[-1,1]){let he=de*o,De=de*h;g(z,[[he,J(he),-x],[De,J(De),-x],[De,J(De),x],[he,J(he),x]],f)}for(let de of[-1,1])for(let he of[-1,1]){let De=de*l,ge=de*x,ne=he*o,fe=he*h;K?g(z,[[0,J(0),De],[ne,J(ne),De],[fe,J(fe),ge],[0,J(0),ge]],f):g(z,[[0,q,De],[ne,q,De],[fe,q,ge],[0,q,ge]],f)}for(let de of[-1,1])y(z,.18,.22,l*2,de*o,K?6.85:q+.1,0,p);if(K)for(let de of[-1,1])for(let he of[-1,1]){let De=o,ge=9.05-6.98,ne=Math.hypot(De,ge),fe=y(z,ne,.19,.2,he*o/2,(6.98+9.05)/2-.08,de*l,p);fe.rotation.z=he===-1?Math.atan2(ge,De):-Math.atan2(ge,De)}else for(let de of[-1,1])y(z,o*2+.18,.22,.18,0,q+.1,de*l,p)},M=u("gable");b(M,6.91,!0);let T=u("hip"),S=2.1,_=8.78;g(T,[[-o,c,-l],[o,c,-l],[0,_,-S]]),g(T,[[o,c,l],[-o,c,l],[0,_,S]]),g(T,[[-o,c,l],[-o,c,-l],[0,_,-S],[0,_,S]]),g(T,[[o,c,-l],[o,c,l],[0,_,S],[0,_,-S]]),b(T,6.92);let v=u("flat");g(v,[[-o,7.2,-l],[o,7.2,-l],[o,7.2,l],[-o,7.2,l]]);for(let z of[-o,o])y(v,.23,.47,l*2+.3,z,7.37,0);for(let z of[-l,l])y(v,o*2+.4,.47,.23,0,7.37,z);b(v,7.01);let C=u("mansard"),E=[[-o,c,-l],[o,c,-l],[o,c,l],[-o,c,l]],I=[[-5.55,8.31,-3.91],[5.55,8.31,-3.91],[5.55,8.31,3.91],[-5.55,8.31,3.91]],U=[[-4.35,8.77,-2.95],[4.35,8.77,-2.95],[4.35,8.77,2.95],[-4.35,8.77,2.95]];for(let z=0;z<4;z++){let q=(z+1)%4;g(C,[E[z],E[q],I[q],I[z]]),g(C,[I[z],I[q],U[q],U[z]])}let D=9.84,R=1.42;g(C,[U[0],U[1],[0,D,-R]]),g(C,[U[2],U[3],[0,D,R]]),g(C,[U[3],U[0],[0,D,-R],[0,D,R]]),g(C,[U[1],U[2],[0,D,R],[0,D,-R]]),b(C,6.92);let B=new i.MeshStandardMaterial({color:"#50585a",metalness:.48,roughness:.54}),G=new i.MeshStandardMaterial({color:"#4d5557",metalness:.36,roughness:.62}),O=(z,q,K,J)=>{for(let de of[0,.15]){let he=y(z,.065,.065,J*2,q,K+de,0,B);he.name="\u0421\u043D\u0435\u0433\u043E\u0437\u0430\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044C, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u0432\u0435 \u0442\u0440\u0443\u0431\u044B"}for(let de of[-J+.6,0,J-.6])y(z,.075,.26,.12,q,K-.08,de,B)},Y=(z,q)=>{for(let K of[-1,1]){y(z,.2,.13,l*2+.05,K*(o+.06),q,0,G).name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0436\u0435\u043B\u043E\u0431";let J=y(z,.115,6.6,.115,K*(o+.06),3.57,K===1?l-.35:-l+.35,G);J.name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430"}for(let K of[-1,1])y(z,o*2+.12,.13,.2,0,q,K*(l+.06),G)};O(M,-6.4,7.28,l-.36),O(M,6.4,7.28,l-.36),O(T,-6.47,7.31,l-.38),O(T,6.47,7.31,l-.38),O(C,-6.63,7.57,l-.38),O(C,6.63,7.57,l-.38),Y(M,6.91),Y(T,6.91),Y(C,6.91);let F=[M,T,C],H=new i.MeshStandardMaterial({color:"#476676",roughness:.32,metalness:.15}),k=new i.MeshStandardMaterial({color:"#454f51",roughness:.52,metalness:.24}),te=Math.atan2(8.31-7.06,7.28-5.55);for(let z of[-1,1])for(let q of[-2.15,2.05]){let K=z*6.36,J=7.06+(7.28-Math.abs(K))*(8.31-7.06)/(7.28-5.55),de=new i.Group;de.position.set(K,J+.11,q),de.rotation.z=z===1?-te:te,C.add(de),y(de,1.02,.06,1.31,0,0,0,k),y(de,.88,.045,1.14,0,.055,0,H);for(let he of[-.48,.48])y(de,.065,.08,1.35,he,.065,0,p);for(let he of[-.62,.62])y(de,1.04,.08,.07,0,.065,he,p)}let ie="gable";function $(z){ie=r.includes(z)?z:"gable",t.setEnabled(ie==="gable"),n.visible=ie==="gable",s.visible=ie==="gable";for(let[q,K]of a)K.visible=q===ie;L()}function L(){let z=t.getMaterial(),q=t.getType();z?.color&&(B.color.copy(z.color),G.color.copy(z.color).multiplyScalar(.73));let K=a.get(ie);if(K)for(let J of K.children){if(!J.userData.isRoofShell)continue;J.material=z;let de=ie==="flat"||!la[q]?"flat":q;if(J.userData.currentProfile!==de){if(J.userData.dynamicGeometry&&(J.userData.dynamicGeometry.dispose(),J.userData.dynamicGeometry=null),de==="flat")J.geometry=J.userData.baseGeometry;else{let he=Cl(i,J.userData.corners,q);J.geometry=he,J.userData.dynamicGeometry=he}J.userData.currentProfile=de}}}return $(ie),{forms:r,setShape:$,setMaterial:L,getShape:()=>ie,getVisibleForms:()=>[...a].filter(([z,q])=>q.visible).map(([z])=>z)}}function hf(i,e,{trunkMat:t}){let n=document.createElement("canvas");n.width=256,n.height=256;let s=n.getContext("2d"),r=43581,a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);s.clearRect(0,0,256,256);for(let _=0;_<72;_++){let v=18+a()*220,C=19+a()*210,E=a()*6.28,I=9+a()*14,U=a()>.65?"#66834e":a()>.33?"#4c7451":"#537c4e";s.save(),s.translate(v,C),s.rotate(E),s.fillStyle=U,s.beginPath(),s.ellipse(0,0,I*.54,I*1,0,0,Math.PI*2),s.fill(),s.strokeStyle="#96aa77",s.globalAlpha=.3,s.lineWidth=1,s.beginPath(),s.moveTo(0,-I*.75),s.lineTo(0,I*.77),s.stroke(),s.restore()}let o=new i.CanvasTexture(n);o.colorSpace=i.SRGBColorSpace,o.anisotropy=4;let l=["#d4e2b9","#9aba8a","#b6c991","#88aa7b"],c=l.map(_=>new i.MeshStandardMaterial({color:_,map:o,transparent:!0,alphaTest:.28,side:i.DoubleSide,roughness:1,depthWrite:!0,metalness:0})),d=l.map(()=>[]),f=(_,v,C,E,I,U,D=0,R=0)=>{let B=new i.Mesh(new i.CylinderGeometry(E,I,U,9),t);B.position.set(_,v,C),B.rotation.set(D,0,R),B.castShadow=!0,e.add(B)},p=(_,v,C,E,I,U,D)=>{let R=new i.Vector3(_,v,C),B=new i.Vector3(E,I,U),G=B.clone().sub(R),O=new i.Mesh(new i.CylinderGeometry(D*.62,D,G.length(),7),t);O.position.copy(R.add(B).multiplyScalar(.5)),O.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),G.normalize()),O.castShadow=!0,e.add(O)};function m(_,v,C,E,I,U=0,D=0){d[U%d.length].push([_,v,C,E,I,D])}function g(_,v,C=1,E=0){let I=(5.2+E%3*.55)*C;f(_,I*.37,v,.14*C,.28*C,I*.74);for(let U=0;U<7;U++){let D=U*2.399+E,R=Math.cos(D),B=Math.sin(D),G=(1.25+U%3*.35)*C,O=I*.73+U%3*.23*C;p(_,I*.6,v,_+R*G*.67,O,v+B*G*.67,.09*C);let Y=_+R*G*.77,F=v+B*G*.77;for(let H=0;H<14;H++){let k=H*2.4+U,te=(.2+a()*.83)*C,ie=O+(a()-.33)*1.48*C;m(Y+Math.cos(k)*te,ie,F+Math.sin(k)*te,(.78+a()*.53)*C,(.6+a()*.45)*C,(H+U)%4,k+a()*.4)}}}function y(_,v,C=4,E=0){f(_,C*.45,v,.095,.18,C*.9);for(let I=0;I<9;I++){let U=I/9,D=.55+U*C*.82,R=.78*(1-U)+.11;for(let B=0;B<7;B++){let G=B*6.283/7+I*.67,O=R*(.6+a()*.4);m(_+Math.cos(G)*O,D+(a()-.5)*.33,v+Math.sin(G)*O,.52+O*.5,.78+O*.5,(B+I+E)%4,G)}}}let u=[[11.08,17.62,-4.73,5.75],[7.05,12.22,7.18,20.85],[-14.38,-9.6,-3.52,.53],[-4.7,4.7,-19,-4.2],[-1.65,1.65,5.55,20.95],[8.68,10.03,-8.5,7.15]],h=(_,v,C)=>u.every(([E,I,U,D])=>_<E-C||_>I+C||v<U-C||v>D+C);[[-14.8,-10.6,1.05],[13.6,-11.6,.97],[-14.7,13.2,.84],[15.8,14.2,.92],[-6.8,-13,.78]].forEach((_,v)=>{h(_[0],_[1],2.8*_[2])&&g(..._,v)}),[[-11.6,4],[-11.2,0],[-10.6,-4],[16.4,-4],[16.4,0],[16.4,4],[5,-9],[-6,-10],[-13,-10]].forEach(([_,v],C)=>{h(_,v,1.3)&&y(_,v,3.15+C%3*.65,C)});for(let _=0;_<14;_++){let v=-8.9+_%7*.57,C=8.2+_%2*1;for(let E=0;E<5;E++){let I=E*6.28/5,U=.25+E%2*.16;m(v+Math.cos(I)*U,.4+E%2*.18,C+Math.sin(I)*U,.5,.42,(_+E)%4,I)}}let x=new i.PlaneGeometry(1,1),b=new i.Matrix4,M=new i.Quaternion,T=new i.Vector3,S=new i.Vector3;for(let[_,v]of d.entries()){let C=new i.InstancedMesh(x,c[_],v.length);for(let E=0;E<v.length;E++){let[I,U,D,R,B,G]=v[E];S.set(I,U,D),M.setFromEuler(new i.Euler(0,G,Math.sin(G)*.17)),T.set(R,B,1),b.compose(S,M,T),C.setMatrixAt(E,b)}C.instanceMatrix.needsUpdate=!0,C.castShadow=!1,C.receiveShadow=!0,C.frustumCulled=!1,e.add(C)}}function uf(i,e,{limestone:t,quartz:n,bronze:s,doorMat:r,roofMat:a,porchElements:o,balconyElements:l}){let c=["classic","italian","modern","estate","kavkaz","coastal","practical","craft"],d=new Map,f={graphite:new i.MeshStandardMaterial({color:"#414f4c",roughness:.45,metalness:.22}),timber:new i.MeshStandardMaterial({color:"#886348",roughness:.82}),pale:new i.MeshStandardMaterial({color:"#e7ddc8",roughness:.85}),stone:new i.MeshStandardMaterial({color:"#bcad92",roughness:.87}),copper:new i.MeshStandardMaterial({color:"#9a6342",roughness:.52,metalness:.25}),glass:new i.MeshStandardMaterial({color:"#a4c6cf",roughness:.18,metalness:.16,transparent:!0,opacity:.72}),white:new i.MeshStandardMaterial({color:"#e9e8e1",roughness:.86})},p=(u,h,x,b,M,T,S,_,v=0)=>{let C=new i.Mesh(new i.BoxGeometry(x,b,M),h);return C.position.set(T,S,_),C.rotation.y=v,C.castShadow=!0,C.receiveShadow=!0,u.add(C),C},m=(u,h,x,b,M,T=t)=>{let S=new i.Mesh(new i.TorusGeometry(M,.1,10,36,Math.PI),T);S.position.set(h,x,b),S.castShadow=!0,u.add(S);let _=x-.5;p(u,T,.2,_,.19,h-M,.5+_/2,b),p(u,T,.2,_,.19,h+M,.5+_/2,b)},g=(u,h)=>{let x=new i.Group;x.name="\u041A\u0410\u0421\u041A\u0410\u0414 \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,h(x),x.visible=!1,e.add(x),d.set(u,x)};g("classic",u=>{for(let h of[3.43,6.62]){p(u,f.white,13.25,.1,.23,0,h,4.58);for(let x of[-6.55,6.55])p(u,f.white,.19,.1,9.25,x,h,0)}p(u,f.copper,3.15,.19,.78,0,6.8,4.78)}),g("italian",u=>{for(let h of[-3.7,0,3.7])m(u,h,3,6.59,1,f.pale);for(let h of[-4.6,-2.2,2.2,4.6])p(u,f.copper,1.96,.12,.37,h,6.53,4.77);for(let h of[-6.55,6.55])p(u,f.copper,.26,5.68,.25,h,3.9,4.54);p(u,f.copper,13.25,.17,.42,0,6.88,4.67)}),g("modern",u=>{p(u,f.graphite,13.4,.38,.55,0,6.72,4.75),p(u,f.graphite,8.2,.17,2.5,0,3.52,5.52),p(u,f.glass,7.35,.85,.14,0,4.03,4.64);for(let h of[-5.65,-5.12,-4.59,4.59,5.12,5.65])p(u,f.graphite,.19,5.85,.23,h,3.71,4.74);for(let h of[-3.6,-3.1,3.1,3.6])p(u,f.graphite,.16,4.6,.24,6.52,3.75,h,Math.PI/2);p(u,f.glass,4.95,2.17,.09,0,2.1,4.74),p(u,f.graphite,2.9,.1,2.2,0,3.2,5.46)}),g("estate",u=>{for(let h of[-5.15,5.15])p(u,f.white,.75,6.2,.4,h,3.56,4.73),p(u,f.white,1.07,.3,.55,h,6.65,4.76);p(u,f.white,10.9,.35,1.37,0,6.91,5.15),p(u,f.copper,7.1,.1,1.45,0,7.17,5)}),g("kavkaz",u=>{m(u,0,3.3,6.52,1.42,f.stone);for(let h of[-5.98,5.98]){p(u,f.stone,.72,5.9,.37,h,3.9,4.77);for(let x=0;x<10;x++)p(u,f.pale,.8,.16,.42,h,1+x*.52,4.81)}for(let h of[-3.55,3.55])p(u,f.stone,.28,5.78,.75,6.46,3.73,h),p(u,f.pale,.28,5.78,.75,-6.46,3.73,h);p(u,f.stone,12.85,.23,.82,0,7.01,4.92)}),g("coastal",u=>{p(u,f.pale,13.1,.25,.25,0,6.72,4.62),p(u,f.graphite,7.1,.15,2.5,0,3.29,5.41);for(let h of[-4.4,-4.02,-3.64,-3.26,3.26,3.64,4.02,4.4])p(u,f.timber,.14,2.35,.18,h,5.23,4.72);for(let h of[-2.8,-2.42,-2.04,2.04,2.42,2.8])p(u,f.timber,.18,2.6,.18,6.45,5.2,h,Math.PI/2)}),g("practical",u=>{p(u,f.graphite,3.8,.15,2.4,0,3.1,5.68);for(let h of[-2,2])p(u,f.graphite,.16,3.12,.19,h,1.58,6.45);p(u,f.graphite,12.85,.12,.2,0,6.83,4.65)}),g("craft",u=>{for(let h of[-5.7,-3.3,-1,1,3.3,5.7])p(u,f.timber,.13,5.82,.16,h,3.82,4.64);for(let h of[-4.9,-2.64,2.64,4.9])p(u,f.timber,.26,1.55,.18,h-.96,5.39,4.78),p(u,f.timber,.26,1.55,.18,h+.96,5.39,4.78);p(u,f.timber,5.1,.2,2.65,0,3.35,5.56);for(let h of[-2.5,2.5])p(u,f.timber,.2,2.9,.17,h,1.65,6.27);for(let h of[-3.5,3.5])p(u,f.timber,.19,5.6,.19,6.51,3.66,h)});let y=new Set(["modern","coastal","practical","craft"]);return{styles:c,setStyle(u){let h=d.has(u)?u:"classic";for(let[b,M]of d)M.visible=b===h;let x=y.has(h);for(let b of o)b.visible=!x;for(let b of l)b.visible=!x;return h}}}var ca=[{id:"krasnodarTwo",name:"\u041A\u0443\u0431\u0430\u043D\u0441\u043A\u0438\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u0433\u0430\u0440\u0430\u0436\u043D\u044B\u043C \u043A\u0440\u044B\u043B\u043E\u043C",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:230,facade:"brick"},{id:"southernVillaTwo",name:"\u042E\u0436\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430 \u0441 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u043C",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:260,facade:"stone"},{id:"caucasusGalleryTwo",name:"\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u0438\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436 \u0441 \u043A\u0440\u044B\u0442\u043E\u0439 \u0433\u0430\u043B\u0435\u0440\u0435\u0435\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:250,facade:"stone"},{id:"modernOffsetTwo",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u043E\u043C \u0441\u043E \u0441\u043C\u0435\u0449\u0451\u043D\u043D\u044B\u043C\u0438 \u043A\u0440\u044B\u043B\u044C\u044F\u043C\u0438",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"flat",area:220,facade:"plaster"},{id:"courtyardL",name:"\u0413-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0434\u043E\u043C \u0441 \u0441\u0430\u0434\u043E\u0432\u044B\u043C \u0434\u0432\u043E\u0440\u0438\u043A\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"atriumU",name:"\u0414\u043E\u043C \u0441 \u041F-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0434\u0432\u043E\u0440\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"stone"},{id:"crossGableT",name:"\u0414\u043E\u043C \u0441 \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u044B\u043C \u043A\u0440\u044B\u043B\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"family",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \xB7 \u043E\u0434\u0438\u043D \u044D\u0442\u0430\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:150,facade:"gray"},{id:"farmhouseOne",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043A\u0440\u044B\u043B\u044C\u0446\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:130,facade:"plaster"},{id:"brickOne",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0441 \u043F\u0430\u0440\u0430\u0434\u043D\u044B\u043C \u0432\u0445\u043E\u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:140,facade:"brick"},{id:"gardenOne",name:"\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:120,facade:"stone"},{id:"mansardBrick",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u0444\u0440\u043E\u043D\u0442\u043E\u043D",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"brick"},{id:"mansardEstate",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:200,facade:"tuscan"},{id:"mansardHome",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u0444\u0430\u0441\u0430\u0434\u043D\u044B\u043C\u0438 \u043B\u044E\u043A\u0430\u0440\u043D\u0430\u043C\u0438",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"plaster"},{id:"gableAttic",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u043E\u043A\u043D\u0430\u043C\u0438 \u0432\u043E \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u0435",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"cottage",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"country",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"stone"},{id:"nordic",name:"\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0438\u0439 \u0434\u043E\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"chalet",name:"\u0428\u0430\u043B\u0435 \u0441 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"gable",area:180,facade:"stone"},{id:"barnhouse",name:"\u0411\u0430\u0440\u043D\u0445\u0430\u0443\u0441",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"gray"},{id:"modernOne",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"minimal",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:150,facade:"plaster"},{id:"estateOne",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"kavkaz",name:"\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u0438\u0439 \u0441\u0442\u0438\u043B\u044C",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"stone"},{id:"terrace",name:"\u0414\u043E\u043C \u0441 \u0441\u0430\u0434\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"plaster"},{id:"bungalow",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"gray"},{id:"italian",name:"\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0434\u0432\u043E\u0440\u0438\u043A",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"coastal",name:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0432\u0438\u043B\u043B\u0430",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"practical",name:"\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"craft",name:"\u0421\u0430\u0434\u043E\u0432\u044B\u0439 \u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"classic",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"twoClassic",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"gray"},{id:"twoBrick",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"brick"},{id:"twoColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"stone"},{id:"twoModern",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"flat",area:240,facade:"plaster"},{id:"twoBalcony",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u043C",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"gray"},{id:"twoTerrace",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0432\u0435\u0440\u0430\u043D\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:230,facade:"stone"},{id:"twoEstate",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"tuscan"},{id:"twoFamily",name:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"twoMansard",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0436\u0438\u043B\u043E\u0439 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:300,facade:"gray"},{id:"twoMansardBrick",name:"\u0414\u0432\u0430 \u044D\u0442\u0430\u0436\u0430, \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:320,facade:"brick"},{id:"twoMansardColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:350,facade:"stone"}];function df(i,e,{stone:t,trim:n,windowFrame:s,glass:r,wood:a,dark:o}){let l=new Map,c=(u,h,x,b,M,T,S,_=n)=>{let v=new i.Mesh(new i.BoxGeometry(h,x,b),_);return v.position.set(M,T,S),v.castShadow=!0,v.receiveShadow=!0,u.add(v),v},d=(u,h,x,b=2.5,M=n,T=.19)=>{c(u,T,b,T,h,.5+b/2,x,M),c(u,T+.13,.11,T+.13,h,.51,x,t),c(u,T+.12,.11,T+.12,h,.5+b+.08,x,t)},f=(u,h,x,b,M,T=3,S=n)=>{c(u,b,.19,M,h,T,x,S),c(u,b+.11,.055,M+.12,h,T+.12,x,o)},p=(u,h,x,b,M,T,S=a,_=.28)=>{for(let v=h;v<=x;v+=_)c(u,.095,T-M,.1,v,(T+M)/2,b,S)},m=(u,h,x,b,M,T)=>{c(u,M+.16,T+.18,.11,h,x,b,n),c(u,M,T,.055,h,x,b+.09,s),c(u,M-.18,T-.18,.03,h,x,b+.14,r),c(u,.055,T,.06,h,x,b+.185,s),c(u,M,.055,.06,h,x,b+.185,s)},g=u=>{if(l.has(u))return l.get(u);let h=new i.Group;switch(h.name="\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,e.add(h),l.set(u,h),u){case"farmhouseOne":f(h,0,5.57,8.9,1.96,3.16,a);for(let x of[-3.95,3.95])d(h,x,6.45,2.53,a,.22);for(let x of[-5.55,5.55])c(h,.18,2.72,.19,x,2.03,4.75,a);break;case"brickOne":f(h,0,5.48,7.35,1.74,3.38,t);for(let x of[-3.2,3.2])d(h,x,6.23,2.73,n,.24);c(h,7.45,.24,.36,0,3.64,4.8,t);break;case"gardenOne":f(h,0,5.52,9.9,1.83,3.19,a);for(let x of[-4.65,-2.1,2.1,4.65])d(h,x,6.36,2.54,a,.18);p(h,-5.9,-5,4.8,.62,3.4,a,.21),p(h,5,5.9,4.8,.62,3.4,a,.21);break;case"mansardBrick":for(let x of[-5.7,5.7])c(h,.3,3.15,.36,x,2.02,4.78,t);f(h,0,5.4,5.75,1.72,3.05,o);for(let x of[-2.5,2.5])d(h,x,6.05,2.44,n,.2);break;case"mansardEstate":f(h,0,5.55,9.2,1.93,3.32,t);for(let x of[-4.18,-2.05,2.05,4.18])d(h,x,6.45,2.66,n,.18);c(h,9.5,.2,.42,0,3.57,4.82,t);break;case"cottage":c(h,.66,3.1,.65,4.5,4.37,-2.5,t),c(h,.94,.16,.94,4.5,6,-2.5,o);for(let x of[-5.9,5.9])c(h,.24,3,.4,x,2.02,4.8,n);break;case"country":for(let x of[-4.7,4.7])d(h,x,5.9,2.18,a,.22);f(h,0,5.35,10.3,1.3,2.94,a);break;case"nordic":p(h,-6.05,-4.8,4.78,.62,3.4,a,.23),p(h,4.8,6.05,4.78,.62,3.4,a,.23);for(let x of[-5.4,5.4])c(h,.18,2.9,.23,x,2.04,4.72,o);break;case"chalet":f(h,0,5.8,11,2.45,3.37,a);for(let x of[-5.1,0,5.1])d(h,x,6.74,2.72,a,.25);for(let x of[-4.8,-2.4,2.4,4.8])c(h,.14,1.18,.18,x,1.28,6.8,a);break;case"barnhouse":for(let x of[-5.95,5.95])c(h,.23,3.12,.18,x,2.05,4.73,o);m(h,-3.8,2,4.83,2.55,2.48),m(h,3.8,2,4.83,2.55,2.48),p(h,-1.36,-.95,4.82,2.95,3.52,a,.15);break;case"modernOne":f(h,0,5.56,9.7,1.7,3.51,o),m(h,-4,1.99,4.92,3.02,2.35),m(h,4,1.99,4.92,3.02,2.35),c(h,2.2,3.02,.3,-5.7,2.04,4.73,t);break;case"minimal":c(h,3.38,3.18,.54,-4.7,2.03,4.72,t),c(h,3.15,.22,2.44,0,3.28,5.43,o);for(let x of[-1.25,1.25])d(h,x,6.15,2.66,n,.14);break;case"estateOne":f(h,0,5.68,7,1.94,3.48,t);for(let x of[-3,-1.9,1.9,3])d(h,x,6.54,2.84,n,.19);c(h,7.1,.26,.56,0,3.69,5.67,n);break;case"kavkaz":for(let x of[-3,3])d(h,x,6.5,2.79,t,.3);f(h,0,5.55,6.7,2.13,3.53,t),p(h,-6.1,-5.05,4.8,1.1,3.52,a,.17),p(h,5.05,6.1,4.8,1.1,3.52,a,.17);break;case"terrace":c(h,9.25,.13,3.2,0,.42,-6,t);for(let x of[-4.1,4.1])for(let b of[-4.78,-7.25])d(h,x,b,2.5,a,.2);for(let x=-4.1;x<=4.11;x+=.52)c(h,.15,.12,3,x,3.05,-6,a);break;case"bungalow":c(h,4.75,.14,6.7,9.13,.18,1.35,t),f(h,9.13,1.35,4.95,7,3.17,o);for(let x of[6.95,11.24])for(let b of[-1.85,4.35])d(h,x,b,2.61,n,.24);break;case"italian":for(let x of[-3.25,3.25])d(h,x,6.32,2.36,t,.24);f(h,0,5.75,7.1,1.45,3.06,a),c(h,2.8,.56,.23,0,3.38,4.86,t);break;case"coastal":f(h,0,5.75,11.05,2.18,3.3,n),p(h,4.7,6.25,4.75,.67,3.44,a,.19),m(h,-3.9,2,4.93,3,2.1);break;case"practical":c(h,4.9,.19,1.4,0,3.13,5.15,o);for(let x of[-2.1,2.1])d(h,x,5.78,2.47,n,.18);c(h,.69,2.86,.75,5,4.25,-2.5,t);break;case"craft":f(h,0,5.44,8.65,1.82,3.08,a);for(let x of[-3.91,-2.2,2.2,3.91])d(h,x,6.28,2.49,a,.18);p(h,-6.1,-5.05,4.83,.87,3.41,a,.24);break;default:break}return h};function y(u){for(let[h,x]of l)x.visible=h===u;u!=="family"&&u!=="mansardHome"&&u!=="classic"&&(g(u).visible=!0)}return{setStyle:y,groups:l,list:ca}}function Rl(i,e,{stone:t,trim:n,wood:s,metal:r}){let a=new Map,o=(m,g,y,u,h,x,b,M=n)=>{let T=new i.Mesh(new i.BoxGeometry(g,y,u),M);return T.position.set(h,x,b),T.castShadow=!0,T.receiveShadow=!0,m.add(T),T},l=(m,g,y,u,h,x,b)=>{let M=new i.Mesh(new i.CylinderGeometry(g,g*1.04,y,18),b);return M.position.set(u,h,x),M.castShadow=!0,m.add(M),M},c=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);c.colorSpace=i.SRGBColorSpace,c.wrapS=c.wrapT=i.RepeatWrapping,c.repeat.set(2.2,1.4);let d=new i.MeshStandardMaterial({color:"#a5a094",roughness:.77,map:c}),f=m=>{let g=new i.Group;g.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \xB7 "+m,e.add(g),a.set(m,g);let y=m==="columns"?5.55:m==="modern"?5.1:5.12;if(o(g,y,.21,2.38,0,.405,5.55,d),o(g,y+.13,.075,2.52,0,.548,5.55,d),o(g,y+.17,.13,.74,0,.275,7.03,d),m==="simple"){o(g,3.65,.19,1.69,0,3.03,5.38,n),o(g,3.8,.075,1.8,0,3.18,5.38,r);for(let u of[-1.55,1.55])o(g,.15,2.44,.15,u,1.77,6.07,n),o(g,.3,.13,.3,u,.54,6.07,t)}if(m==="columns"){o(g,5.15,.27,2.06,0,3.31,5.41,t),o(g,5.34,.075,2.19,0,3.48,5.41,n);for(let u of[-2.04,2.04])l(g,.2,2.66,u,1.89,6.37,t),o(g,.46,.17,.47,u,.56,6.37,t),o(g,.48,.17,.49,u,3.26,6.37,t);for(let u of[-2.47,2.47])o(g,.19,3.02,.21,u,2,4.8,n)}if(m==="timber"){o(g,4.85,.19,2.08,0,3.08,5.46,s);for(let u of[-2.16,2.16])o(g,.22,2.46,.22,u,1.78,6.38,s),o(g,.31,.13,.31,u,.53,6.38,t);for(let u=-2.1;u<2.15;u+=.62)o(g,.14,.13,2.22,u,3.3,5.46,s)}if(m==="modern"){o(g,4.65,.24,1.86,0,3.18,5.36,r),o(g,4.85,.065,2.06,0,3.34,5.36,n);for(let u of[-2.14,2.14])o(g,.2,2.63,.2,u,1.87,6.18,r),o(g,.34,.15,.34,u,.57,6.18,t),o(g,.34,.12,.34,u,3.19,6.18,r)}return g};function p(m){let g=["simple","columns","timber","modern"].includes(m)?m:"simple";for(let[y,u]of a)u.visible=y===g;(a.get(g)||f(g)).visible=!0}return{setStyle:p,styles:a}}function Pl(i,e,{stone:t,brick:n,wood:s,metal:r}={}){let a=new i.Group;a.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",e.add(a);let o=new i.Group;o.name="\u0426\u043E\u043A\u043E\u043B\u044C \u0434\u043E\u043C\u0430",a.add(o);let l=new i.Group;l.name="\u0422\u0435\u0440\u0440\u0430\u0441\u0430 \u0441 \u043E\u043F\u043E\u0440\u0430\u043C\u0438",a.add(l);let c=(S,_=.85,v=null)=>new i.MeshStandardMaterial({color:S,roughness:_,map:v}),d=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);d.colorSpace=i.SRGBColorSpace,d.wrapS=d.wrapT=i.RepeatWrapping,d.repeat.set(4,1);let f=document.createElement("canvas");f.width=256,f.height=256;let p=f.getContext("2d");p.fillStyle="#4e5151",p.fillRect(0,0,256,256);for(let S=0;S<4;S++)for(let _=0;_<7;_++)p.fillStyle=["#a9aaa5","#c4c4be","#b5b6b0"][(_*3+S)%3],p.fillRect(_*37+2,S*64+2,34,61);let m=new i.CanvasTexture(f);m.colorSpace=i.SRGBColorSpace,m.wrapS=m.wrapT=i.RepeatWrapping,m.repeat.set(4,1);let g={stone:c("#88837a",.88,d),brick:n.clone(),tile:c("#878a88",.79,m),dagestan:c("#c0b6a2",.9,d),decorative:c("#6c6f6d",.92,d),graphite:c("#62605b",.9,d),taupe:c("#71665b",.89,d),light:c("#8c8781")},y=(S,_,v,C,E,I,U,D)=>{let R=new i.Mesh(new i.BoxGeometry(_,v,C),D);return R.position.set(E,I,U),R.castShadow=v>.25,R.receiveShadow=!0,S.add(R),R};for(let S of[-4.82,4.82])y(o,13.45,.59,.12,0,.45,S,g.graphite);for(let S of[-6.72,6.72])y(o,.12,.59,9.54,S,.45,0,g.graphite);let u=y(l,5.5,.15,2.8,0,.37,-5.86,t),h=y(l,5.65,.095,2.95,0,.48,-5.86,s),x=[-2.45,2.45];for(let S of x)y(l,.2,2.46,.2,S,1.82,-6.99,s),y(l,.33,.12,.33,S,.56,-6.99,t),y(l,.17,2.4,.19,S,1.8,-4.74,s);for(let S=-2.48;S<=2.48;S+=.64)y(l,.16,.12,2.64,S,3.19,-5.84,s);for(let S of[-7,-4.73])y(l,5.4,.13,.15,0,3.11,S,s);function b(S){let _=g[S]||g.graphite;o.visible=S!=="none",o.children.forEach(v=>{v.material=_})}function M(S){l.visible=!!S}function T(S,_){let v=(Number(S)||10)/12.8,C=(Number(_)||10)/9;l.scale.x=Math.min(1,Math.max(.7,(Number(S)||10)/6))/v,l.scale.z=1/C,l.position.z=4.5*(1-C)/C}return b("graphite"),M(!1),{root:a,plinth:o,terrace:l,setPlinth:b,setTerrace:M,setDimensions:T}}var Ys=new Set(["courtyardL","atriumU","crossGableT","krasnodarTwo","southernVillaTwo","caucasusGalleryTwo","modernOffsetTwo"]);function ff(i,e,{brick:t,foundation:n,trim:s,windowFrame:r,glass:a,door:o,roofSystem:l}){let c=new Map,d=.53,f=3.14,p=3.78,m=new i.MeshStandardMaterial({color:"#6b6660",roughness:.89}),g=new i.MeshStandardMaterial({color:"#968e81",roughness:.79}),y=new i.MeshStandardMaterial({color:"#4a4e4b",roughness:.55,metalness:.14}),u=new i.MeshStandardMaterial({color:"#85644b",roughness:.8}),h=new i.MeshStandardMaterial({color:"#a5c2c5",roughness:.25,metalness:.1}),x=(O,Y,F,H,k,te,ie,$,L=!0)=>{let z=new i.Mesh(new i.BoxGeometry(Y,F,H),$);return z.position.set(k,te,ie),z.castShadow=L,z.receiveShadow=!0,O.add(z),z},b=(O,Y)=>{let F=new i.BufferGeometry,H=[],k=[];for(let[$,L,z]of Y)H.push($,L,z),k.push($*.25,z*.25+L*.08);let te=[];for(let $=1;$<Y.length-1;$++)te.push(0,$,$+1);F.setAttribute("position",new i.Float32BufferAttribute(H,3)),F.setAttribute("uv",new i.Float32BufferAttribute(k,2)),F.setIndex(te),F.computeVertexNormals();let ie=new i.Mesh(F,l.getMaterial());ie.userData.distinctRoof=!0,ie.material.side=i.DoubleSide,ie.castShadow=!0,ie.receiveShadow=!0,O.add(ie)},M={krasnodarTwo:{floors:2,blocks:[[-1.6,0,9.2,9,2],[4.65,-1.22,3.5,6.3,1]],windows:[[-4.25,4.64,0],[-2.2,4.64,0],[1.32,4.64,0],[-6.34,-2,-Math.PI/2],[-6.34,1.6,-Math.PI/2],[2.96,-4.63,Math.PI]],door:[.15,4.66],garage:[4.65,1.97],roof:"gable"},southernVillaTwo:{floors:2,blocks:[[0,0,8.5,9,2],[-5.27,-1.55,2.25,5.95,1],[5.27,-1.55,2.25,5.95,1]],windows:[[-3.11,4.64,0],[3.11,4.64,0],[-4.35,-2.32,-Math.PI/2],[4.35,-2.32,Math.PI/2],[-5.4,1.49,0],[5.4,1.49,0]],door:[0,4.66],balcony:!0,roof:"hip"},caucasusGalleryTwo:{floors:2,blocks:[[-2.62,0,7.45,9,2],[3.65,-2.16,5.15,4.75,2]],windows:[[-4.55,4.64,0],[-2.95,4.64,0],[-6.43,-1.7,-Math.PI/2],[6.27,-2.42,Math.PI/2],[2.55,-4.63,Math.PI]],door:[-.6,4.66],gallery:!0,roof:"hip"},modernOffsetTwo:{floors:2,blocks:[[-2.3,.8,7.65,7.5,2],[3.6,-1.85,5.35,5.3,2]],windows:[[-4.1,4.68,0],[-1.3,4.68,0],[-6.17,1.7,-Math.PI/2],[6.38,-1.65,Math.PI/2],[4,-4.62,Math.PI]],door:[-.2,4.68],modern:!0,roof:"flat"},courtyardL:{blocks:[[-2.73,0,7.34,9],[3.65,-2.28,5.4,4.44]],windows:[[-5.2,4.64,0],[-3.65,4.64,0],[3.55,-.02,0],[-6.51,-2,-Math.PI/2],[-6.51,1.9,-Math.PI/2],[6.5,-2.3,Math.PI/2],[3.4,-4.65,Math.PI]],door:[-.55,4.66],roof:"gable",entrance:"offset"},atriumU:{blocks:[[-4.5,0,3.8,8.95],[4.5,0,3.8,8.95],[0,-3.02,12.8,2.92]],windows:[[-4.5,4.64,0],[4.5,4.64,0],[-6.54,-2,-Math.PI/2],[-6.54,1.8,-Math.PI/2],[6.54,-2,Math.PI/2],[6.54,1.8,Math.PI/2],[-4.5,-4.62,Math.PI],[4.5,-4.62,Math.PI]],door:[0,-1.41],roof:"hip",entrance:"court"},crossGableT:{blocks:[[0,0,5.45,8.95],[0,-2.5,12.8,4]],windows:[[-2.76,1.72,-Math.PI/2],[2.76,1.72,Math.PI/2],[-4.35,-.38,0],[4.35,-.38,0],[-4.5,-4.64,Math.PI],[4.5,-4.64,Math.PI]],door:[0,4.65],roof:"gable",entrance:"center"}};function T(O,Y,F,H=0,k=1.35,te=2){let ie=new i.Group;return ie.position.set(Y,te,F),ie.rotation.y=H,O.add(ie),ie.userData.architectureWindow=!0,ie.userData.sideWall=Math.abs(Math.sin(H))>.5,x(ie,k+.22,1.52,.13,0,0,0,s),x(ie,k+.09,1.36,.15,0,0,.075,r),x(ie,k-.1,1.21,.055,0,0,.165,a,!1),x(ie,.055,1.29,.07,0,0,.2,r,!1),x(ie,k+.29,.11,.26,0,-.81,.18,m),x(ie,k+.29,.065,.13,0,.78,.15,s),ie}function S(O,Y,F,H=1,k="simple"){let te=new i.Group;te.name="\u0412\u0445\u043E\u0434 \xB7 "+k,te.position.set(Y,0,F),O.add(te),te.userData.architectureEntrance=!0;let ie=H>0?1:-1,$=k==="columns"?5.3:k==="modern"?4.9:4.2;x(te,1.56,2.27,.15,0,1.69,ie*.08,o);for(let J of[-.87,.87])x(te,.11,2.44,.19,J,1.7,ie*.16,s);x(te,1.83,.12,.23,0,2.9,ie*.13,s),x(te,$,.22,2.25,0,.45,ie*1.06,g),x(te,$+.18,.15,.68,0,.23,ie*2.05,g);let L=k==="columns"?2.05:k==="modern"?2.04:1.63,z=k==="timber"?u:k==="modern"?y:s;for(let J of[-L,L]){let de=k==="columns"?2.58:2.43;if(k==="columns"){let he=new i.Mesh(new i.CylinderGeometry(.22,.24,de,16),m);he.position.set(J,.59+de/2,ie*1.86),he.castShadow=!0,te.add(he)}else{let he=k==="timber"?.23:k==="modern"?.2:.16;x(te,he,de,he,J,.59+de/2,ie*1.86,z)}x(te,k==="columns"?.49:.36,.15,k==="columns"?.49:.36,J,.59,ie*1.86,m),x(te,k==="columns"?.47:.35,.14,k==="columns"?.47:.35,J,3.05,ie*1.86,m)}let q=k==="columns"?5:k==="modern"?4.62:4,K=k==="timber"?u:k==="modern"?y:m;if(x(te,q,.2,2.16,0,3.13,ie*1.08,K),x(te,q+.1,.075,2.23,0,3.26,ie*1.08,k==="modern"?y:s),k==="timber")for(let J=-1.75;J<=1.76;J+=.5)x(te,.1,.13,2.18,J,3.38,ie*1.08,u);if(k==="modern")for(let J of[-1.65,1.65])x(te,.12,.4,.16,J,2.92,ie*1.08,y);return te}function _(O,Y,F){let[H,k,te,ie,$=1]=Y,L=H-te/2-.3,z=H+te/2+.3,q=k-ie/2-.31,K=k+ie/2+.31,J=p+($-1)*f,de=J+Math.min(2.25,.73*Math.min(te,ie));if(F==="flat"){b(O,[[L,J+.25,q],[z,J+.25,q],[z,J+.25,K],[L,J+.25,K]]);for(let ge of[-1,1])x(O,.18,.32,ie+.62,H+ge*(te/2+.3),J+.36,k,y),x(O,te+.55,.32,.18,H,J+.36,k+ge*(ie/2+.31),y);return}if(F==="gable"){if(ie>=te*.82){let ge=H;b(O,[[L,J,q],[ge,de,q],[ge,de,K],[L,J,K]]),b(O,[[ge,de,q],[z,J,q],[z,J,K],[ge,de,K]]);for(let ne of[k-ie/2-.05,k+ie/2+.05]){let[fe,Ae]=[H-te/2-.04,H+te/2+.04];b(O,[[fe,J,ne],[Ae,J,ne],[ge,de-.22,ne]])}}else{b(O,[[L,J,q],[z,J,q],[z,de,k],[L,de,k]]),b(O,[[L,de,k],[z,de,k],[z,J,K],[L,J,K]]);for(let ge of[H-te/2-.05,H+te/2+.05])b(O,[[ge,J,q],[ge,J,K],[ge,de-.2,k]])}return}let he=J,De=F==="mansard"?Math.min(1.14,de-J)*.84:0;if(F==="mansard"){let ne=[[L,J,q],[z,J,q],[z,J,K],[L,J,K]],fe=[[L+.65,J+De,q+.65],[z-.65,J+De,q+.65],[z-.65,J+De,K-.65],[L+.65,J+De,K-.65]];for(let xe=0;xe<4;xe++){let me=(xe+1)%4;b(O,[ne[xe],ne[me],fe[me],fe[xe]])}let Ae=de+.42;b(O,[fe[0],fe[1],[H,Ae,k]]),b(O,[fe[2],fe[3],[H,Ae,k]]),b(O,[fe[3],fe[0],[H,Ae,k]]),b(O,[fe[1],fe[2],[H,Ae,k]]);return}if(ie>=te){let ge=Math.max(.25,ie*.21);b(O,[[L,he,q],[z,he,q],[H,de,k-ge]]),b(O,[[z,he,K],[L,he,K],[H,de,k+ge]]),b(O,[[L,he,K],[L,he,q],[H,de,k-ge],[H,de,k+ge]]),b(O,[[z,he,q],[z,he,K],[H,de,k+ge],[H,de,k-ge]])}else{let ge=Math.max(.25,te*.22);b(O,[[L,he,q],[L,he,K],[H-ge,de,k]]),b(O,[[z,he,K],[z,he,q],[H+ge,de,k]]),b(O,[[z,he,q],[L,he,q],[H-ge,de,k],[H+ge,de,k]]),b(O,[[L,he,K],[z,he,K],[H+ge,de,k],[H-ge,de,k]])}}function v(O){let Y=M[O],F=new i.Group;F.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u044A\u0451\u043C\u043D\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 "+O,e.add(F),c.set(O,F);let H=new i.Group;H.name="\u0421\u0442\u0435\u043D\u044B \u0438 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F",F.add(H);for(let L of Y.blocks){let[z,q,K,J,de=1]=L,he=f*de;x(H,K+.1,.38,J+.1,z,.34,q,n),x(H,K,he,J,z,d+he/2,q,t),x(H,K+.13,.16,J+.13,z,3.67+(de-1)*f,q,s),de===2&&x(H,K+.08,.1,J+.08,z,3.74,q,s)}for(let[L,z,q]of Y.windows)T(H,L,z,q),Y.floors===2&&Y.blocks.some(([K,J,de,he,De=1])=>De===2&&Math.abs(L-K)<=de/2+.6&&Math.abs(z-J)<=he/2+.6)&&T(H,L,z,q,1.35,5.1);let[k,te]=Y.door,ie=new Map;for(let L of["simple","columns","timber","modern"]){let z=S(H,k,te,1,L);z.visible=L==="simple",ie.set(L,z)}if(F.userData.entrances=ie,O==="krasnodarTwo"){let[L,z]=Y.garage;x(H,3.24,2.34,.2,L,1.63,z,y);for(let q of[.65,1.28,1.92,2.51])x(H,3.04,.045,.08,L,q,z+.13,s,!1);x(H,3.45,.2,.29,L,2.9,z,s)}else if(O==="southernVillaTwo"){x(F,5.85,.24,1.74,0,3.53,5.48,m);for(let L of[-2.55,2.55])x(F,.29,2.9,.29,L,2.02,6.13,s),x(F,.53,.18,.53,L,.64,6.13,m),x(F,.5,.18,.5,L,3.42,6.13,m);for(let L=-2.56;L<=2.56;L+=.36)x(F,.075,.85,.075,L,4.09,6.29,y,!1);x(F,5.28,.13,.13,0,4.58,6.29,y,!1)}else if(O==="caucasusGalleryTwo"){x(F,4.15,.24,2.55,3.72,.42,2.15,m);for(let L of[1.8,5.54])x(F,.3,2.49,.3,L,1.77,3.18,s),x(F,.52,.17,.52,L,.62,3.18,m);x(F,4.22,.16,2.6,3.71,3.18,2.16,y);for(let L=-3.7;L<-.5;L+=.88)x(F,.12,2.95,.14,6.28,1.95,L,m)}else if(O==="modernOffsetTwo"){x(F,6.9,.21,2,-2.3,3.36,5.42,y);for(let L of[-4.98,.35])x(F,.18,2.56,.19,L,1.85,6.21,y),x(F,.35,.15,.31,L,.61,6.21,m);x(F,5.7,.18,1.55,3.58,3.54,1.15,y),x(F,1.18,2.33,.12,-5.77,1.76,1,a,!1)}if(O==="atriumU"){x(F,5.1,.075,5.6,0,.16,1.48,g,!1);for(let L of[-2.44,2.44])x(F,.27,.6,5.6,L,.29,1.5,m,!1)}else if(O==="courtyardL"){x(F,4.25,.13,3.55,3.62,.26,2.47,g,!1);for(let L of[1.85,5.35])x(F,.17,2.9,.17,L,1.69,3.96,s);x(F,4.2,.15,1.9,3.62,3.2,3.28,y)}else if(O==="crossGableT"){for(let L of[-4.55,4.55])x(F,.22,2.85,.22,L,1.98,-.4,s),x(F,.34,.19,.34,L,.57,-.4,m);x(F,10.3,.16,1.72,0,3.36,-.5,y)}let $=new Map;for(let L of["gable","hip","mansard","flat"]){let z=new i.Group;z.name="\u041A\u0440\u043E\u0432\u043B\u0438 "+L,F.add(z);for(let q of Y.blocks)_(z,q,L);z.visible=!1,$.set(L,z)}return F.userData.roofs=$,F.visible=!1,F}let C=null,E="hip",I="simple";function U(O){I=["simple","columns","timber","modern"].includes(O)?O:"simple";for(let Y of c.values())for(let[F,H]of Y.userData.entrances||[])H.visible=F===I}function D(O){C=Ys.has(O)?O:null;for(let[Y,F]of c)F.visible=Y===C;return C&&!c.has(C)&&(v(C).visible=!0),C&&(U(I),G(E,l.getMaterial())),!!C}function R(O,Y){let F=Math.max(5,Number(O)||10)/12.8,H=Math.max(8,Number(Y)||10)/9;for(let k of c.values())k.traverse(te=>{te.userData.architectureEntrance?(te.scale.x=1/F,te.scale.z=1/H):te.userData.architectureWindow&&(te.scale.x=1/(te.userData.sideWall?H:F))})}function B(O){let Y={graphite:"#55524c",stone:"#77746d",brick:"#6d5148",tile:"#6a6e6a",dagestan:"#9c8f7b",decorative:"#5b5b57",taupe:"#74675a",light:"#807b72",none:"#5b5752"};n.color.set(Y[O]||Y.graphite),n.needsUpdate=!0}function G(O,Y=l.getMaterial()){if(E=["gable","hip","mansard","flat"].includes(O)?O:"hip",!C)return!1;let F=c.get(C);for(let[H,k]of F.userData.roofs)k.visible=H===E,k.visible&&k.traverse(te=>{te.userData.distinctRoof&&(te.material=Y,te.material.side=i.DoubleSide)});return!0}return{isDistinct:O=>Ys.has(O),setStyle:D,setRoof:G,setPlinth:B,setEntrance:U,setDimensions:R,ids:[...Ys]}}function pf(i,e,{brick:t,limestone:n,quartz:s,roofSystem:r,windowFrameMetal:a,glassMat:o,doorMat:l}){let c=new i.Group;c.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u0430\u043B\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0434\u043E\u043C",e.add(c);let d=new i.MeshStandardMaterial({color:"#ddd9cd",roughness:.66,metalness:.02}),f=new i.MeshStandardMaterial({color:"#816347",roughness:.79}),p=new i.MeshStandardMaterial({color:"#41494a",roughness:.47,metalness:.37}),m=new i.MeshStandardMaterial({color:"#476676",roughness:.33,metalness:.13,envMapIntensity:.45}),g=[],y=[],u=new Map,h=(ne,fe,Ae,xe,me,Re,Be,Ne=n)=>{let Ue=new i.Mesh(new i.BoxGeometry(fe,Ae,xe),Ne);return Ue.position.set(me,Re,Be),Ue.receiveShadow=!0,Ue.castShadow=!0,ne.add(Ue),Ue},x=(ne,fe,Ae,xe,me=d)=>{let Re=new i.Vector3(...fe),Be=new i.Vector3(...Ae),Ne=Re.distanceTo(Be),Ue=Re.clone().add(Be).multiplyScalar(.5),ke=new i.Mesh(new i.BoxGeometry(xe,Ne,xe),me);return ke.position.copy(Ue),ke.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),Be.sub(Re).normalize()),ke.castShadow=!0,ke.receiveShadow=!0,ne.add(ke),ke},b=(ne,fe,Ae,xe=!1)=>{let me=[],Re=[],Be=[];fe.forEach(ke=>{me.push(...ke),Be.push(ke[0]*.22,ke[2]*.22+ke[1]*.09)});for(let ke=1;ke<fe.length-1;ke++)Re.push(0,ke,ke+1);let Ne=new i.BufferGeometry;Ne.setAttribute("position",new i.Float32BufferAttribute(me,3)),Ne.setAttribute("uv",new i.Float32BufferAttribute(Be,2)),Ne.setIndex(Re),Ne.computeVertexNormals();let Ue=new i.Mesh(Ne,Ae);return Ue.material.side=i.DoubleSide,Ue.castShadow=!0,Ue.receiveShadow=!0,xe&&(Ue.userData.baseGeometry=Ne,Ue.userData.corners=fe,Ue.userData.profile="none",y.push(Ue)),ne.add(Ue),Ue},M=new i.Group;M.name="\u0414\u043E\u043C \xB7 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u0442\u0430\u0436",c.add(M);let T=df(i,c,{stone:n,trim:d,windowFrame:a,glass:o,wood:f,dark:p}),S=Pl(i,c,{stone:n,brick:t,wood:f,metal:p}),_=ff(i,c,{brick:t,foundation:new i.MeshStandardMaterial({color:"#55524c",roughness:.93}),trim:d,windowFrame:a,glass:o,door:l,roofSystem:r}),v=new i.MeshStandardMaterial({color:"#55524c",roughness:.93});h(M,13.28,.36,9.46,0,.27,0,v);let C=h(M,12.8,3.18,9,0,1.98,0,t);h(M,13.03,.13,9.24,0,.53,0,v),h(M,13.05,.16,9.26,0,3.62,0,d);let E=M.children.length,I=h(M,1.58,2.29,.15,0,1.7,4.64,l);h(M,1.74,.13,.25,0,2.87,4.72,d);for(let ne of[-.9,.9])h(M,.14,2.5,.18,ne,1.65,4.73,d);h(M,.1,.13,.16,.58,1.77,4.76,p);let U=new i.Group;U.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C \xB7 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440";for(let ne of M.children.slice(E))U.add(ne);M.add(U);let D=M.children.length,R=h(M,3.8,.2,1.82,0,3.03,5.31,d);h(M,3.93,.06,1.94,0,3.17,5.31,p);for(let ne of[-1.7,1.7])h(M,.17,2.46,.17,ne,1.7,6.12,d),h(M,.32,.15,.32,ne,.53,6.12,n),h(M,.3,.15,.3,ne,2.99,6.12,n);h(M,3.94,.13,1.93,0,.46,5.35,n),h(M,4.05,.12,.77,0,.31,6.45,d),h(M,4.15,.1,.78,0,.19,7.17,n);let B=new i.Group;B.name="\u0421\u0442\u0430\u0440\u044B\u0439 \u0432\u0445\u043E\u0434 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438";for(let ne of M.children.slice(D))B.add(ne);B.visible=!1,M.add(B);let G=Rl(i,M,{stone:n,trim:d,wood:f,metal:p});G.setStyle("simple");function O(ne,fe,Ae,xe=0,me=1.48,Re=1.52,Be=M){let Ne=new i.Group;return Ne.position.set(ne,fe,Ae),Ne.rotation.y=xe,Be.add(Ne),h(Ne,me+.28,Re+.3,.12,0,0,0,d),h(Ne,me+.08,Re+.1,.13,0,0,.08,a),h(Ne,me-.1,Re-.16,.035,0,0,.16,o),h(Ne,.055,Re-.12,.075,0,0,.205,a),h(Ne,me-.1,.055,.075,0,0,.205,a),h(Ne,me+.36,.13,.35,0,-Re/2-.14,.15,s),g.push(Ne),Ne}for(let ne of[-4.8,-2.95,2.95,4.8])O(ne,1.97,4.63),O(ne,1.97,-4.63,Math.PI);for(let ne of[-2.65,0,2.65])O(6.53,1.97,ne,Math.PI/2),O(-6.53,1.97,ne,-Math.PI/2);let Y=7.13,F=5.19,H=3.83,k=["gable","hip","mansard","flat"],te=new Map,ie=new Map,$=ne=>{if(ie.has(ne))return ie.get(ne);let fe=new i.Group;fe.name="\u041A\u0440\u043E\u0432\u043B\u044F \xB7 "+ne,c.add(fe),ie.set(ne,fe);let Ae=xe=>b(fe,xe,r.getMaterial(),!0);if(ne==="gable"){for(let Re of[-1,1]){Ae([[Re*Y,H,-F],[0,6.55,-F],[0,6.55,F],[Re*Y,H,F]]);for(let Be of[-F,F])x(fe,[Re*Y,H,Be],[0,6.55,Be],.16)}for(let Re of[-4.52,4.52])b(fe,[[-6.37,3.68,Re],[6.37,3.68,Re],[0,6.34,Re]],t);x(fe,[0,6.56,-F],[0,6.56,F],.13,p);let me=new i.Group;me.name="\u0424\u0440\u043E\u043D\u0442\u043E\u043D\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u044B",fe.add(me),te.set("gable",me);for(let Re of[-1.45,1.45])h(me,1,1.16,.16,Re,4.92,4.7,d),h(me,.83,.95,.055,Re,4.93,4.8,p),h(me,.72,.85,.032,Re,4.93,4.84,m),h(me,.06,.96,.058,Re,4.93,4.89,d),h(me,1.1,.12,.33,Re,4.29,4.89,n)}else if(ne==="hip"){Ae([[-Y,H,-F],[Y,H,-F],[0,6.02,-2.14]]),Ae([[Y,H,F],[-Y,H,F],[0,6.02,2.14]]),Ae([[-Y,H,F],[-Y,H,-F],[0,6.02,-2.14],[0,6.02,2.14]]),Ae([[Y,H,-F],[Y,H,F],[0,6.02,2.14],[0,6.02,-2.14]]),x(fe,[0,6.02,-2.14],[0,6.02,2.14],.14,p);for(let Re of[-1,1])for(let Be of[-F,F])x(fe,[Re*Y,H,Be],[0,6.02,Be>0?2.14:-2.14],.13,p)}else if(ne==="mansard"){let xe=[[-Y,H,-F],[Y,H,-F],[Y,H,F],[-Y,H,F]],me=[[-5.28,5.53,-4.21],[5.28,5.53,-4.21],[5.28,5.53,4.21],[-5.28,5.53,4.21]],Re=[[-3.45,6.71,-2.77],[3.45,6.71,-2.77],[3.45,6.71,2.77],[-3.45,6.71,2.77]];for(let ke=0;ke<4;ke++){let W=(ke+1)%4;Ae([xe[ke],xe[W],me[W],me[ke]]),Ae([me[ke],me[W],Re[W],Re[ke]])}let Be=7.58,Ne=1.3;Ae([Re[0],Re[1],[0,Be,-Ne]]),Ae([Re[2],Re[3],[0,Be,Ne]]),Ae([Re[3],Re[0],[0,Be,-Ne],[0,Be,Ne]]),Ae([Re[1],Re[2],[0,Be,Ne],[0,Be,-Ne]]);let Ue=new i.Group;Ue.name="\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043D\u0430 \u043F\u0430\u0440\u0430\u0434\u043D\u043E\u043C \u0444\u0430\u0441\u0430\u0434\u0435",fe.add(Ue),te.set("mansard",Ue);for(let ke of[-2.05,2.05]){h(Ue,1.36,1.47,.18,ke,4.82,5.02,d),h(Ue,.92,1.04,.055,ke,4.92,5.02+.115,p),h(Ue,.79,.87,.036,ke,4.92,5.02+.151,m),h(Ue,.07,1.03,.07,ke,4.92,5.02+.193,d),h(Ue,1.11,.085,.32,ke,4.23,5.02+.1,n);for(let ut of[-1,1]){let mt=ke+ut*.64;h(Ue,.13,1.41,5.02-4.08+.05,mt,4.88,(5.02+4.08)/2,d),b(Ue,[[ke,6.14,4.08],[ke+ut*.84,5.57,4.08],[ke+ut*.84,5.57,5.02+.16],[ke,6.14,5.02+.16]],r.getMaterial())}b(Ue,[[ke-.66,5.55,5.02+.1],[ke+.66,5.55,5.02+.1],[ke,6.03,5.02+.1]],d),x(Ue,[ke,6.15,4.08],[ke,6.15,5.02+.17],.12,p)}}else{Ae([[-Y,3.88,-F],[Y,3.88,-F],[Y,3.88,F],[-Y,3.88,F]]);for(let xe of[-1,1])h(fe,.24,.37,F*2+.2,xe*Y,4.03,0,p);for(let xe of[-F,F])h(fe,Y*2+.3,.37,.24,0,4.03,xe,p)}if(ne!=="flat"){let xe=new i.MeshStandardMaterial({color:"#424d52",metalness:.5,roughness:.52}),me=new i.MeshStandardMaterial({color:"#434c50",metalness:.4,roughness:.58}),Re=ne==="mansard"?6.46:6.38,Be=ne==="mansard"?4.64:ne==="gable"?4.13:4.02;for(let Ne of[-1,1]){for(let Ue of[0,.1])h(fe,.06,.058,F*2-.9,Ne*Re,Be+Ue,0,xe);for(let Ue of[-3.4,0,3.4])h(fe,.08,.21,.11,Ne*Re,Be-.055,Ue,xe);h(fe,.18,.12,F*2+.03,Ne*(Y+.06),3.75,0,me),h(fe,.11,3.3,.11,Ne*(Y+.06),1.95,Ne===1?F-.36:-F+.36,me)}for(let Ne of[-1,1])h(fe,Y*2+.1,.12,.18,0,3.75,Ne*(F+.06),me);fe.userData.guardMetal=xe,fe.userData.gutterMetal=me}h(fe,12.88,.17,9.1,0,3.74,0,d,!1);for(let xe of[-1,1])h(fe,.2,.25,9.12,xe*6.38,3.72,0,t,!1),h(fe,12.83,.25,.2,0,3.72,xe*4.48,t,!1);for(let xe of[-1,1])b(fe,[[xe*6.41,3.72,-F],[xe*Y,3.72,-F],[xe*Y,3.72,F],[xe*6.41,3.72,F]],s),h(fe,.17,.18,F*2,xe*Y,3.77,0,p);for(let xe of[-1,1])b(fe,[[-Y,3.72,xe*4.52],[Y,3.72,xe*4.52],[Y,3.72,xe*F],[-Y,3.72,xe*F]],s),h(fe,Y*2,.16,.16,0,3.77,xe*F,d);return fe},L=null,z=null,q="family";function K(ne,fe){let Ae=k.includes(ne)?ne:"hip";if(Ys.has(q)){for(let Be of ie.values())Be.visible=!1;_.setRoof(Ae,r.getMaterial()),L=Ae,z=fe;return}for(let[Be,Ne]of ie)Ne.visible=Be===Ae;let xe=$(Ae);xe.visible=!0,te.has("gable")&&(te.get("gable").visible=q==="gableAttic"),L=Ae;let me=la[fe]&&Ae!=="flat"?fe:"flat",Re=r.getMaterial();Re?.color&&xe.userData.guardMetal&&(xe.userData.guardMetal.color.copy(Re.color),xe.userData.gutterMetal.color.copy(Re.color).multiplyScalar(.74));for(let Be of xe.children)Be.userData.corners&&(Be.material=Re,Be.userData.profile!==me&&(Be.userData.dynamic&&(Be.userData.dynamic.dispose(),Be.userData.dynamic=null),Be.geometry=me==="flat"?Be.userData.baseGeometry:Cl(i,Be.userData.corners,fe),me!=="flat"&&(Be.userData.dynamic=Be.geometry),Be.userData.profile=me));z=fe}function J(ne){B.visible=!1,G.setStyle(ne),_.setEntrance(ne)}function de(ne){q=ne,c.visible=ca.some(Ae=>Ae.id===ne&&(Ae.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435"||Ys.has(ne)));let fe=_.setStyle(ne);if(M.visible=!fe,S.root.visible=!fe,T.setStyle(fe?"family":ne),fe)for(let Ae of ie.values())Ae.visible=!1;te.has("gable")&&(te.get("gable").visible=ne==="gableAttic")}function he(ne,fe){let Ae=Math.max(5,Math.min(14,Number(ne)||10)),xe=Math.max(8,Math.min(18,Number(fe)||10)),me=Ae/12.8,Re=xe/9;c.scale.set(me,1,Re),c.position.z=4.63*(1-Re),U.scale.x=1/me;for(let Ne of G.styles.values())Ne.scale.x=1/me,Ne.scale.z=1/Re,Ne.position.z=4.63*(Re-1)/Re;let Be=Ae<8.5?2:4;for(let Ne of g){let Ue=Ne.userData.baseX??Ne.position.x,ke=Ne.userData.baseZ??Ne.position.z;Ne.userData.baseX=Ue,Ne.userData.baseZ=ke;let W=Math.abs(Ue)>6.2;if(Ne.scale.x=W?1/Re:1/me,Ne.scale.z=W?1/me:1/Re,W){Ne.position.x=Math.sign(Ue)*Math.max(.2,Ae/2-.11)/me;let It=ke===0?0:Math.sign(ke)*Math.max(1.4,xe/2-1.35);Ne.position.z=It/Re}else{let It=Math.abs(Ue)>4;Ne.visible=Be===4||It;let ut=Math.sign(Ue)*(It?Math.max(1.25,Ae/2-1.04):Math.max(.86,Ae/2-2.87));Ne.position.x=ut/me}}S.setDimensions(Ae,xe),_.setDimensions(Ae,xe),c.userData.footprint={width:Ae,length:xe}}function De(ne,fe=1.35,Ae=!1){let xe=Ae?1.6:1,me=Math.max(65,(Number(ne)||150)/xe),Re=Math.sqrt(me*fe),Be=Math.sqrt(me/fe);c.scale.set(Re/12.8,1,Be/9),c.userData.footprint={width:Re,depth:Be,floors:xe}}return{root:c,setStyle:de,setSize:De,setDimensions:he,setRoof:K,setEntrance:J,setPlinth:ne=>{S.setPlinth(ne),_.setPlinth(ne)},setTerrace:S.setTerrace,isDistinctStyle:_.isDistinct,getShape:()=>L,getRoof:()=>z}}function mf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 3D \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440, \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u044B \u043E\u0442\u0434\u0435\u043B\u043A\u0438",t.visible=!1,e.add(t);let n=(L,z=.76,q={})=>new i.MeshStandardMaterial({color:L,roughness:z,...q}),s=n("#ede9df",.94),r=n("#dfd6c7",.94),a=n("#f6f2e9",.94),o=n("#fffdf8",.73),l=n("#b68e66",.67),c=n("#806449",.62),d=n("#4e423b",.66),f=n("#c4a170",.38,{metalness:.54}),p=n("#444b4c",.43,{metalness:.65}),m=n("#eee8d9",.92),g=n("#ebeae6",.36),y=n("#b9b3a8",.53),u=n("#9b9887",.97),h=n("#657270",.95),x=n("#c6b9a5",.99),b=n("#c4a17e",.83),M=n("#9bc4c9",.2,{transparent:!0,opacity:.65,side:i.DoubleSide}),T=n("#a3b9c4",.1,{metalness:.43,envMapIntensity:1.1}),S=n("#181e25",.28,{metalness:.34}),_=n("#456947",.95),v=n("#725e49",.94),C=new i.TextureLoader,E=n("#ffffff",.75),I=n("#ffffff",.64),U=(L,z,q,K)=>{C.load(new URL("assets/3d/"+L+".webp",document.baseURI).href,J=>{J.colorSpace=i.SRGBColorSpace,J.wrapS=J.wrapT=i.RepeatWrapping,J.repeat.set(q,K),J.anisotropy=4,z.map=J,z.needsUpdate=!0},void 0,()=>{})};U("wood_planks",E,3,3),U("concrete_pavement_02_1k",I,3,3);function D(L,z,q,K,J,de,he,De,ge=!0){let ne=new i.Mesh(new i.BoxGeometry(z,q,K),De);return ne.position.set(J,de,he),ne.castShadow=ge,ne.receiveShadow=!0,L.add(ne),ne}function R(L,z,q,K,J,de,he=1,De=1,ge=1){let ne=new i.Mesh(new i.SphereGeometry(z,12,9),de);return ne.position.set(q,K,J),ne.scale.set(he,De,ge),ne.castShadow=!0,L.add(ne),ne}function B(L,z,q,K,J,de,he,De=16){let ge=new i.Mesh(new i.CylinderGeometry(z,z,q,De),he);return ge.position.set(K,J,de),ge.castShadow=!0,L.add(ge),ge}function G(L,z,q,K,J=.95,de=.68,he=c){D(L,J+.075,de+.075,.055,z,q,K,he,!1),D(L,J,de,.061,z,q,K+.05,n("#91a09a",.94),!1),D(L,J*.56,de*.25,.065,z,q-.14,K+.09,n("#d6c3ad",.94),!1),D(L,J*.32,de*.16,.066,z+.14,q+.1,K+.09,n("#c0aa90",.94),!1)}function O(L,z,q,K=.3){B(L,.19,.34,z,K+.16,q,g,12),D(L,.29,.08,.29,z,K+.32,q,y,!1),B(L,.038,.92,z,K+.77,q,v,8);for(let J=0;J<6;J++){let de=J*Math.PI*2/6;R(L,.38,z+Math.cos(de)*.22,K+1.15+J%3*.11,q+Math.sin(de)*.2,_,.67,1,.6)}}function Y(L,z,q,K=2.8){let J=n("#f8efdb",.62,{emissive:"#fff0d4",emissiveIntensity:.12});B(L,.29,.2,z,K,q,J,14),B(L,.012,.23,z,K+.16,q,p,8)}function F(L,z=1.85){D(L,2.25,1.58,.11,z,2.03,-3.53,o,!1),D(L,2.03,1.36,.045,z,2.03,-3.45,M,!1),D(L,.055,1.37,.064,z,2.03,-3.4,o,!1),D(L,2.3,.09,.32,z,1.22,-3.35,y,!1),D(L,.065,1.5,.065,z-1.18,2.03,-3.34,m,!1),D(L,.065,1.5,.065,z+1.18,2.03,-3.34,m,!1);for(let q of[-.74,.74])D(L,.07,1.7,.18,z+q,2.03,-3.32,n("#d6cfc0",.95),!1)}let H=new Map;function k(L,z="wood"){let q=new i.Group;q.name="\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \xB7 "+L,q.visible=!1,t.add(q),H.set(L,q),D(q,8.9,.18,7.2,0,.04,0,z==="tile"?I:E),D(q,8.9,.16,7.2,0,3.31,0,a,!1),D(q,8.9,3.14,.16,0,1.69,-3.62,r,!1),D(q,8.9,3.14,.16,0,1.69,3.62,s,!1);for(let J of[-4.45,4.45])D(q,.16,3.14,7.2,J,1.69,0,s,!1);for(let J of[-4.32,4.32])D(q,.07,.14,7,J,.24,0,o,!1);for(let J of[-3.48,3.48])D(q,8.55,.14,.07,0,.24,J,o,!1);D(q,1.25,2.27,.07,-2.85,1.29,3.51,c),D(q,.09,2.4,.13,-3.55,1.29,3.47,o),D(q,.09,2.4,.13,-2.15,1.29,3.47,o),R(q,.055,-2.3,1.22,3.43,f),F(q,1.83);let K=new i.PointLight("#fff1da",8.5,10,2);return K.position.set(.25,2.9,.35),q.add(K),Y(q,-1.4,.15),q}{let L=k("living");D(L,4.1,.055,2.75,-1.05,.175,.23,x,!1),D(L,3.1,.38,1.14,-1.45,.53,-1.26,h),D(L,3.1,.78,.28,-1.45,.99,-1.76,h);for(let z of[-2.45,-1.45,-.45])D(L,.85,.18,.88,z,.81,-1.06,u),R(L,.25,z,.99,-1.52,m,1,.35,.82);D(L,.2,.72,1.18,-3.06,.75,-1.25,h),D(L,.2,.72,1.18,.15,.75,-1.25,h),D(L,1.95,.085,.9,-1.2,.54,.6,c);for(let z of[-2,-.4])D(L,.1,.45,.1,z,.29,.58,p);R(L,.14,-1.52,.63,.6,m,1,.4,1),D(L,2.05,1.1,.09,2,1.68,3.44,S,!1),D(L,2.45,.32,.56,2,.36,3.08,l),O(L,3.52,-2.5),G(L,-2.88,1.9,-3.42,.88,.96)}{let L=k("kitchen","tile");for(let z of[-3.15,-2.1,-1.05,0])D(L,1.02,.9,.64,z,.66,-3.16,m),D(L,.99,.025,.055,z,.81,-2.81,f,!1),D(L,1.02,.7,.57,z,2.62,-3.19,l),D(L,.85,.025,.045,z,2.5,-2.87,p,!1);D(L,4.75,.12,.82,-1.6,1.15,-3.1,y),D(L,.76,.06,.5,-2.35,1.23,-2.98,p),B(L,.04,.38,-2.8,1.43,-2.93,f,10),D(L,3.2,.86,1.32,-.3,.62,.25,l),D(L,3.45,.14,1.52,-.3,1.11,.25,y);for(let z of[-1.5,.65])B(L,.24,.08,z,.74,1.57,c,14),B(L,.055,.69,z,.37,1.57,p,12);for(let z of[-1.45,.85])Y(L,z,.28,2.54);O(L,3.65,-2.27)}{let L=k("bedroom");D(L,3.33,1.1,.26,-1.1,1.1,-2.83,h),D(L,3.15,.46,4.12,-1.1,.57,-.8,l),D(L,3,.32,3.95,-1.1,.95,-.79,m),D(L,3,.1,2.65,-1.1,1.12,.18,u);for(let z of[-1.85,-.35])R(L,.46,z,1.24,-2.1,m,1,.36,.66);for(let z of[-3.1,.95])D(L,.58,.45,.52,z,.53,-2.29,c),B(L,.12,.35,z,.99,-2.29,f,12),R(L,.18,z,1.2,-2.29,m,1,.67,1);D(L,2.65,.08,1.34,-1.1,.2,2.15,x,!1),D(L,1.55,2.55,.57,3.33,1.55,.72,l);for(let z of[-.04,1.44])D(L,.065,2.25,.6,3.31,1.65,z,c,!1);G(L,-3.1,2.1,-3.42,1,.84)}{let L=k("hall","tile");D(L,2.1,.16,.88,-1.92,.53,-1.24,c);for(let z of[-2.8,-1.15])D(L,.12,.4,.67,z,.28,-1.24,p);D(L,2.65,.16,.1,-1.92,2.31,-3.44,c,!1);for(let z of[-2.95,-2.28,-1.62,-.92])R(L,.07,z,2.12,-3.3,f,1,.68,1),D(L,.05,.2,.08,z,2.03,-3.32,p,!1);D(L,1.5,2.21,.06,2.92,1.58,-3.44,f,!1),D(L,1.39,2.1,.04,2.92,1.58,-3.4,T,!1),D(L,1.55,.19,.55,2.95,.76,-1.25,l);for(let z of[2.4,3.5])D(L,.08,.58,.08,z,.43,-1.25,p);O(L,-3.53,1.72),G(L,.2,1.82,-3.42,.8,1.01)}{let L=k("bath","tile");D(L,2.48,.6,1.14,-1.79,.57,-1.72,g),D(L,2.24,.04,.91,-1.79,.9,-1.72,n("#e6f0ef",.23,{metalness:.12}),!1),D(L,2.58,.13,1.23,-1.79,.95,-1.72,g),B(L,.045,.36,-2.94,1.16,-1.72,p,12),D(L,1.18,.65,.62,1.65,.58,-2.64,l),D(L,1.48,.12,.81,1.65,1.01,-2.62,y),B(L,.39,.14,1.65,1.15,-2.59,g,24),B(L,.035,.29,1.93,1.3,-2.89,f,12),D(L,1,1.27,.055,1.65,2.16,-3.43,T,!1),D(L,1.82,2.12,.045,3.33,1.38,.16,M,!1),D(L,1.8,.08,.07,3.33,2.46,.16,p,!1),B(L,.12,.06,3.3,2.23,-.55,p,20),D(L,.045,.68,.05,3.36,2.7,-.55,p),D(L,1.18,.1,.64,-.1,.28,1.28,x,!1),O(L,-3.4,2.08)}let te={living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},ie="living",$=L=>{ie=H.has(L)?L:"living";for(let[z,q]of H)q.visible=z===ie;return te[ie]};return $("living"),{root:t,setRoom:$,roomNames:te,getRoom:()=>ie}}function gf(i,e,{lawnMaterial:t}={}){let n=new i.Group;n.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u043E\u0449\u0435\u043D\u0438\u0435, \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0446\u0432\u0435\u0442\u043D\u0438\u043A\u0438",e.add(n);let s=new i.MeshStandardMaterial({color:"#faf9f5",roughness:.89});new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href,k=>{k.colorSpace=i.SRGBColorSpace,k.wrapS=k.wrapT=i.RepeatWrapping,k.anisotropy=4,s.map=k,s.needsUpdate=!0},void 0,()=>{});let a=new i.MeshStandardMaterial({color:"#b6afa2",roughness:.93}),o=new i.MeshStandardMaterial({color:"#817f75",roughness:1}),l=new i.MeshStandardMaterial({color:"#604c3b",roughness:1}),c=new i.MeshStandardMaterial({color:"#376b36",roughness:.89,side:i.DoubleSide}),d=new i.MeshStandardMaterial({color:"#567e3c",roughness:.93}),f=["#e8dbbc","#b77d95","#edc999","#b2a5d7","#d87576"].map(k=>new i.MeshStandardMaterial({color:k,roughness:.85})),p=new i.Group;p.name="\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438",n.add(p);let m=new i.Group;m.name="\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0432\u044A\u0435\u0437\u0434",n.add(m);let g=new i.Group;g.name="\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(g);let y=new i.Group;y.name="\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(y);let u=new i.Group;u.name="\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0430\u0434\u043A\u0438",n.add(u);let h=new i.Group;h.name="\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441\u0430\u0434",n.add(h);let x=new i.Group;x.name="\u0411\u0435\u0441\u0435\u0434\u043A\u0430/\u043F\u0435\u0440\u0433\u043E\u043B\u0430",n.add(x);let b=new i.Group;b.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0443",n.add(b);let M=new i.Group;M.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u043F\u0435\u0440\u0433\u043E\u043B\u0435",n.add(M);let T=(k,te,ie,$,L,z,q,K)=>{let J=new i.Mesh(new i.BoxGeometry(te,ie,$),K);return J.position.set(L,z,q),J.receiveShadow=!0,J.castShadow=ie>.09,k.add(J),J};function S(k,{x0:te,z0:ie,width:$,length:L,unitX:z=.39,unitZ:q=.28}){T(k,$,.08,L,te,.075,ie,o);let K=Math.max(1,Math.floor($/z)),J=Math.max(1,Math.floor(L/q)),de=new i.Matrix4,he=new i.Quaternion,De=new i.Vector3,ge=new i.InstancedMesh(new i.BoxGeometry(1,1,1),s,K*J),ne=["#d8d4c8","#c3c2b6","#e1dcd0","#bbb9ad","#d0cec2"],fe=new i.Color,Ae=0;for(let xe=0;xe<J;xe++)for(let me=0;me<K;me++){let Re=$/K-.016,Be=L/J-.016,Ne=te-$/2+(me+.5)*$/K,Ue=ie-L/2+(xe+.5)*L/J;De.set(Re,.065,Be),de.compose(new i.Vector3(Ne,.133,Ue),he,De),ge.setMatrixAt(Ae,de),fe.set(ne[(me*7+xe*11+Math.floor(xe/2))%ne.length]),ge.setColorAt(Ae,fe),Ae++}return ge.instanceMatrix.needsUpdate=!0,ge.instanceColor&&(ge.instanceColor.needsUpdate=!0),ge.receiveShadow=!0,ge.castShadow=!1,k.add(ge),ge}S(p,{x0:0,z0:14.1,width:2.5,length:13.5}),S(p,{x0:0,z0:7.5,width:4.2,length:1.8,unitX:.45,unitZ:.3});for(let k of[-1.34,1.34])T(p,.12,.09,12.8,k,.116,14.15,a);S(m,{x0:9.5,z0:15.1,width:4.5,length:11.2,unitX:.43,unitZ:.34}),S(m,{x0:9.5,z0:9.55,width:5.3,length:4.2,unitX:.44,unitZ:.3});for(let k of[7.14,11.86])T(m,.14,.08,11.2,k,.11,15.1,a);S(b,{x0:9.4,z0:.55,width:1.05,length:13.2,unitX:.35,unitZ:.35}),S(b,{x0:10.32,z0:-5.06,width:2.05,length:.96,unitX:.35,unitZ:.35}),S(M,{x0:-8.75,z0:-1.1,width:1.02,length:8.8,unitX:.34,unitZ:.34}),S(M,{x0:-9.7,z0:-3.64,width:1.92,length:.88,unitX:.34,unitZ:.34});let _=new i.Shape;_.moveTo(0,0),_.bezierCurveTo(.03,.035,.075,.1,0,.16),_.bezierCurveTo(-.075,.1,-.03,.035,0,0);let v=new i.ShapeGeometry(_,5);f.forEach(k=>{k.side=i.DoubleSide});let C=new i.Shape;C.moveTo(0,0),C.bezierCurveTo(.055,.05,.085,.13,.013,.2),C.bezierCurveTo(-.085,.13,-.055,.05,0,0);let E=new i.ShapeGeometry(C,4),I=new i.MeshStandardMaterial({color:"#46713f",roughness:.95}),U=new i.BoxGeometry(1,1,1),D=new i.Object3D;function R(k,te,ie,$,L,z,q="flower"){let K=new i.Group;K.name="\u041A\u043B\u0443\u043C\u0431\u0430 \xB7 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B",k.add(K),T(K,$,.105,L,te,.11,ie,l);for(let fe of[-1,1])T(K,.14,.19,L+.17,te+fe*($/2+.04),.17,ie,a);for(let fe of[-1,1])T(K,$+.16,.19,.14,te,.17,ie+fe*(L/2+.04),a);let J=Math.max(2,Math.floor($/.62)),de=Math.max(2,Math.floor(L/.83)),he=new Map,De=(fe,Ae,xe,me,Re,Be,Ne,Ue,ke,W,It)=>{let ut=fe.uuid+"|"+Ae.uuid,mt=he.get(ut);mt||(mt={geometry:fe,material:Ae,transforms:[]},he.set(ut,mt)),D.position.set(xe,me,Re),D.rotation.set(Be,Ne,Ue),D.scale.set(ke,W,It),D.updateMatrix(),mt.transforms.push(D.matrix.clone())},ge=z,ne=()=>(ge=Math.imul(ge,1664525)+1013904223>>>0,ge/4294967296);for(let fe=0;fe<J;fe++)for(let Ae=0;Ae<de;Ae++){let xe=te-$/2+(fe+.5)*$/J+(ne()-.5)*.11,me=ie-L/2+(Ae+.5)*L/de+(ne()-.5)*.17,Re=q==="bush"?.24+ne()*.4:.25+ne()*.37;De(U,I,xe,.24+Re/2,me,0,0,0,.023,Re,.023);for(let Ue=0;Ue<5;Ue++){let ke=ne()*6.283,W=ne()>.4?c:d;De(E,W,xe+.07*Math.cos(ke),.31+Re*.4,me+.07*Math.sin(ke),.27+ne()*.55,ke,.1+(ne()-.5)*.2,.58+ne()*.3,.63+ne()*.37,1)}if(q==="bush")continue;let Be=f[(fe*3+Ae+z)%f.length],Ne=.25+Re;De(v,f[2],xe,Ne,me,0,0,0,.065,.03,.065);for(let Ue=0;Ue<5;Ue++){let ke=2*Math.PI*Ue/5,W=.65+ne()*.35;De(v,Be,xe+.07*Math.cos(ke),Ne,me+.07*Math.sin(ke),-Math.PI/2,0,ke,W,W,W)}}for(let{geometry:fe,material:Ae,transforms:xe}of he.values()){let me=new i.InstancedMesh(fe,Ae,xe.length);xe.forEach((Re,Be)=>me.setMatrixAt(Be,Re)),me.instanceMatrix.needsUpdate=!0,me.castShadow=!1,me.receiveShadow=!1,me.computeBoundingSphere(),K.add(me)}}for(let k of[-1,1])R(g,k*3.2,13,2.3,8.1,37+(k+1)*7),R(y,k*3.3,13.2,2.6,6.7,123+(k+1)*13,"flower"),R(u,k*3.25,13.4,1.65,7.5,222+(k+1)*19,"bush"),R(h,k*4.15,12.5,3,7.6,471+(k+1)*11);let B=new i.MeshStandardMaterial({color:"#746047",roughness:.81}),G=new i.MeshStandardMaterial({color:"#b4aa92",roughness:.88});T(x,4.5,.12,3.6,-12,.2,-1.5,a);for(let k of[-13.95,-10.05])for(let te of[-2.95,-.05])T(x,.19,2.6,.19,k,1.54,te,B);for(let k of[-13.95,-10.05])T(x,.19,.18,3.15,k,2.84,-1.5,B);for(let k=-2.9;k<=-.1;k+=.54)T(x,4.23,.12,.14,-12,2.92,k,G);T(x,3.9,.15,.48,-12,.37,-1.5,B);function O(k){g.visible=k==="classic",y.visible=k==="family",u.visible=k==="modern",h.visible=k==="garden"}function Y(k){m.visible=!!k}function F(k){x.visible=!!k,M.visible=!!k}function H(k){b.visible=!!k}return O("family"),Y(!0),F(!1),H(!1),{root:n,path:p,parking:m,classic:g,family:y,modern:u,garden:h,gazebo:x,poolPath:b,pergolaPath:M,setStyle:O,setParking:Y,setGazebo:F,setPool:H,getState:()=>({style:g.visible?"classic":y.visible?"family":u.visible?"modern":"garden",parking:m.visible,gazebo:x.visible})}}function _f(i){let e=(r,a=2.7,o=2.2)=>{let l=document.createElement("canvas");l.width=l.height=512;let c=l.getContext("2d",{alpha:!1}),d=280624;r(c,()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296));let p=new i.CanvasTexture(l);return p.colorSpace=i.SRGBColorSpace,p.wrapS=p.wrapT=i.RepeatWrapping,p.repeat.set(a,o),p.anisotropy=4,p},t=(r,a="#b2aaa0",o=1)=>e((l,c)=>{l.fillStyle=a,l.fillRect(0,0,512,512);let d=95*o,f=34*o;for(let p=-1;p<Math.ceil(512/f)+1;p++)for(let m=-1;m<Math.ceil(512/d)+1;m++){let g=m*d+p%2*d*.5,y=p*f,u=r[Math.floor(c()*r.length)];l.fillStyle=u,l.fillRect(g+2,y+2,d-4,f-4),l.fillStyle="rgba(255,255,255,.09)",l.fillRect(g+3,y+3,d-6,2),l.fillStyle="rgba(0,0,0,.08)",l.fillRect(g+3,y+f-5,d-6,2);for(let h=0;h<10;h++)l.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.06)",l.fillRect(g+3+c()*(d-6),y+3+c()*(f-6),1+c()*4,1+c()*3)}},3.1,2.4),n=(r,a,o=!1)=>e((l,c)=>{l.fillStyle=r,l.fillRect(0,0,512,512);let d=o?1200:21e3;for(let f=0;f<d;f++){l.fillStyle=c()>.5?"rgba(255,255,255,.07)":"rgba(50,47,41,.035)";let p=o?15+c()*80:1+c()*3;l.fillRect(c()*512,c()*512,p,p)}if(o)for(let f=0;f<7;f++){let p=c()*512,m=c()*512,g=l.createRadialGradient(p,m,3,p,m,100+c()*130);g.addColorStop(0,a),g.addColorStop(1,"rgba(185,178,162,0)"),l.fillStyle=g,l.fillRect(0,0,512,512)}},2.1,1.9),s=e((r,a)=>{r.fillStyle="#795a40",r.fillRect(0,0,512,512);for(let o=0;o<512;o+=37){r.fillStyle=["#a27a57","#896747","#987151","#79573e"][Math.floor(a()*4)],r.fillRect(o+2,0,34,512),r.fillStyle="rgba(43,30,17,.14)",r.fillRect(o+2,0,2,512);for(let l=0;l<32;l++)r.fillStyle="rgba(35,28,18,.07)",r.fillRect(o+4+a()*28,a()*512,1,15+a()*55)}},3.2,2.6);return{klinker:t(["#49352c","#584036","#765447","#61443c","#795a4b"],"#a79b90",.92),brickBeige:t(["#e0c8a7","#d7c4aa","#bca58b","#eed4b7","#cfad86"],"#ddd0bf",1),brickGraphite:t(["#656563","#454a4d","#575c60","#3e4548","#6e7070"],"#9a9c9a",1),brickWhite:t(["#ece7dc","#e0d9cc","#f2ede0","#d6d1c5","#e9e2d4"],"#bfc1b9",1),plasterSand:n("#c8b69a","rgba(148,125,96,.10)"),plasterWhite:n("#eeeae1","rgba(150,138,124,.09)"),venetian:n("#e2d9cc","rgba(142,133,120,.13)",!0),planken:s}}function xf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u043C\u043E\u0441\u0442\u043A\u0430 \u043F\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0443",e.add(t);let n={graphite:"#51575b",gray:"#8d8980",sand:"#a69a82",brown:"#746d62"},s={concrete:"#858682",tile:"#6e7470",pavers:"#918778",stone:"#888073",wide:"#6d6e68"},r=new i.MeshStandardMaterial({color:s.concrete,roughness:.91}),a=g=>{let y=document.createElement("canvas");y.width=256,y.height=256;let u=y.getContext("2d");u.fillStyle="#565b59",u.fillRect(0,0,256,256);let h=g==="tile"?4:7,x=g==="tile"?4:9;for(let M=0;M<x;M++)for(let T=0;T<h;T++){let S=g==="pavers"&&M%2?-256/h/2:0,_=T*256/h+S,v=M*256/x;u.fillStyle=["#e4e1d9","#cbc9c0","#b9b8b0","#d2d0c7"][(T*7+M*11)%4],u.fillRect(_+2,v+2,256/h-4,256/x-4),_<0&&u.fillRect(_+256+2,v+2,256/h-4,256/x-4)}let b=new i.CanvasTexture(y);return b.colorSpace=i.SRGBColorSpace,b.wrapS=b.wrapT=i.RepeatWrapping,b.repeat.set(3,3),b},o=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);o.colorSpace=i.SRGBColorSpace,o.wrapS=o.wrapT=i.RepeatWrapping,o.repeat.set(3,3);let l=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.repeat.set(3,3);let c={concrete:o,tile:a("tile"),pavers:a("pavers"),stone:l,wide:a("pavers")},d=[],f=()=>{let g=new i.Mesh(new i.BoxGeometry(1,.12,1),r);return g.castShadow=!1,g.receiveShadow=!0,t.add(g),d.push(g),g};for(let g=0;g<6;g++)f();let p=(g,y,u,h,x,b)=>{let M=d[g];M.visible=x>.08&&b>.08,M.position.set(y,u,h),M.scale.set(Math.max(x,.01),1,Math.max(b,.01))};function m({houseWidth:g=10,houseLength:y=10,type:u="concrete",color:h="graphite",width:x=.9,contour:b="all",verandaOn:M=!1}={}){let T=Math.max(5,Math.min(14,Number(g)||10)),S=Math.max(8,Math.min(18,Number(y)||10)),_=Math.max(u==="wide"?1.2:.6,Math.min(1.6,Number(x)||.9));r.color.set(n[h]||s[u]||s.concrete);let v=c[u]||null;r.map!==v&&(r.map=v,r.needsUpdate=!0),t.visible=u!=="none";let C=4.63,E=C-S,I=-T/2,U=T/2,D=Math.min(4.4,T-.6),R=(T-D)/2;p(0,I+R/2,.095,C+_/2,R,_),p(1,U-R/2,.095,C+_/2,R,_);let B=M?Math.min(T-.25,6.2*(Math.min(6.2,T-.55)/6.2)+.16):0;if(B>0){let F=(T+2*_-B)/2;p(2,I-_+F/2,.095,E-_/2,F,_),p(5,U+_-F/2,.095,E-_/2,F,_)}else p(2,0,.095,E-_/2,T+2*_,_),d[5].visible=!1;p(3,I-_/2,.095,(C+E)/2,_,S),p(4,U+_/2,.095,(C+E)/2,_,S);let G=b==="all",O=b==="front",Y=b==="rear";d[0].visible=d[0].visible&&(G||O),d[1].visible=d[1].visible&&(G||O),d[2].visible=d[2].visible&&(G||Y),d[5].visible=d[5].visible&&(G||Y),d[3].visible=d[3].visible&&G,d[4].visible=d[4].visible&&G}return m(),{root:t,setLayout:m}}function yf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0432\u0435\u0440\u0430\u043D\u0434\u0430",e.add(t);let n=(y,u=.81)=>new i.MeshStandardMaterial({color:y,roughness:u}),s=n("#8c8680"),r=n("#929188"),a=n("#806951"),o=n("#47504f"),l=new i.MeshStandardMaterial({color:"#829fa9",roughness:.23,metalness:.1,transparent:!0,opacity:.8}),c=new Map,d=(y,u,h,x,b,M,T,S)=>{let _=new i.Mesh(new i.BoxGeometry(u,h,x),S);return _.position.set(b,M,T),_.castShadow=h>.3,_.receiveShadow=!0,y.add(_),_};function f(y){let u=new i.Group;if(u.name="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \xB7 "+y,t.add(u),c.set(y,u),d(u,6.2,.24,3.1,0,.29,-1.47,r),d(u,6.28,.09,3.16,0,.45,-1.47,y==="modern"?o:s),d(u,4.1,.15,.77,0,.185,-3.45,s),d(u,1.59,2.2,.11,0,1.65,-.09,o),d(u,1.34,1.88,.04,0,1.65,-.17,l),d(u,.065,1.93,.1,0,1.65,-.2,o),y==="open"||y==="garden")for(let h of[-2.93,2.93])d(u,.12,.93,.13,h,.93,-2.76,a),d(u,.12,.93,.13,h,.93,-.43,a),d(u,.12,.1,2.35,h,1.37,-1.6,a);else{let h=y==="modern"?o:y==="columns"?s:a,x=y==="columns"?[-2.82,-1.98,1.98,2.82]:[-2.82,2.82];for(let b of x)d(u,y==="columns"?.24:.2,2.62,.2,b,1.79,-2.8,h),d(u,.36,.13,.38,b,.49,-2.8,s),d(u,.36,.12,.38,b,3.11,-2.8,h);if(d(u,6.4,.19,3.25,0,3.26,-1.5,y==="modern"?o:a),d(u,6.55,.08,3.32,0,3.39,-1.5,y==="modern"?o:s),y!=="modern")for(let b=-2.85;b<=2.85;b+=.65)d(u,.12,.14,3.14,b,3.17,-1.55,a)}return u}for(let y of["open","covered","columns","modern","garden"])f(y);let p="none";function m(y){p=c.has(y)?y:"none",t.visible=p!=="none";for(let[u,h]of c)h.visible=u===p}function g(y,u){let h=Math.max(5,Math.min(14,Number(y)||10)),x=Math.max(8,Math.min(18,Number(u)||10)),b=Math.min(6.2,h-.55);t.scale.set(b/6.2,1,1),t.position.set(0,0,4.63-x)}return g(10,10),m("none"),{root:t,setStyle:m,setDimensions:g,getStyle:()=>p}}function vf(i,e,{stone:t,brick:n,trim:s,wood:r,dark:a,glass:o}){let l=new i.Group;l.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F",e.add(l);let c=new Map,d=["twoClassic","twoBrick","twoColumns","twoModern","twoBalcony","twoTerrace","twoEstate","twoFamily","twoMansard","twoMansardBrick","twoMansardColumns"],f=(g,y,u,h,x,b,M,T)=>{let S=new i.Mesh(new i.BoxGeometry(y,u,h),T);return S.position.set(x,b,M),S.castShadow=!0,S.receiveShadow=!0,g.add(S),S},p=(g,y,u,h=1)=>{f(g,h,.2,.73,y,.45,u,t),f(g,h+.1,.1,.8,y,.58,u,s)};for(let g of d){let y=new i.Group;if(y.name="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0434\u043E\u043C \xB7 "+g,l.add(y),c.set(g,y),g==="twoClassic"){for(let u of[-5.9,5.9])f(y,.33,5.9,.26,u,3.5,4.67,s),f(y,.47,.24,.38,u,6.54,4.7,t),p(y,u,4.91,.43);f(y,12.7,.21,.38,0,3.73,4.67,t),f(y,12.9,.19,.32,0,6.81,4.67,s)}if(g==="twoBrick"){for(let u of[-5.95,5.95])f(y,.64,5.94,.57,u,3.52,4.76,n),p(y,u,4.87,.72),f(y,.78,.18,.64,u,6.62,4.8,t);f(y,12.75,.17,.38,0,3.75,4.76,t)}if(g==="twoColumns"){f(y,12.3,.28,1.54,0,.42,5.06,t),f(y,12.6,.25,1.54,0,6.45,5.05,t);for(let u of[-5.8,5.8])f(y,.3,5.65,.3,u,3.5,5.68,s),f(y,.62,.15,.61,u,.66,5.68,t),f(y,.58,.18,.61,u,6.27,5.68,t)}if(g==="twoModern"){for(let u of[-6,6])f(y,.33,6.18,.35,u,3.69,4.83,a);for(let u of[3.79,6.63])f(y,12.6,.27,.3,0,u,4.78,a);f(y,7.25,.08,.18,0,3.95,4.84,o),f(y,5.4,.17,1.7,0,3.36,5.28,a);for(let u of[-2.48,2.48])f(y,.2,2.51,.2,u,1.8,5.87,a),p(y,u,5.87,.35)}if(g==="twoBalcony"){f(y,6,.23,2.03,0,3.93,-5.48,t);for(let u of[-2.67,2.67])f(y,.24,3.41,.24,u,2.16,-6.28,s),p(y,u,-6.28,.42);for(let u of[-2.85,2.85])f(y,.13,1,.13,u,4.56,-6.44,a);for(let u=-2.78;u<=2.79;u+=.48)f(y,.08,.81,.1,u,4.49,-6.44,a);f(y,5.85,.12,.16,0,5.04,-6.44,a),f(y,1.7,2.4,.13,0,5.1,-4.7,a),f(y,1.52,2.22,.06,0,5.1,-4.8,o),f(y,.065,2.18,.08,0,5.1,-4.85,a),f(y,1.52,.065,.08,0,5.18,-4.85,a),f(y,.09,.13,.11,.47,4.89,-4.88,t)}if(g==="twoTerrace"){for(let u of[-5.62,5.62])f(y,.28,5.85,.25,u,3.56,4.76,r),f(y,.49,.15,.41,u,6.55,4.76,t);for(let u of[3.72,6.83])f(y,12.9,.16,.35,0,u,4.72,r)}if(g==="twoEstate"){for(let u of[-6.1,6.1])f(y,.48,6.16,.35,u,3.68,4.72,t),f(y,.72,.19,.5,u,6.67,4.72,s),p(y,u,4.83,.66);f(y,12.9,.24,.55,0,6.87,4.82,t),f(y,12.7,.22,.47,0,3.69,4.82,s)}if(g==="twoMansard"){for(let u of[-5.85,5.85])f(y,.26,5.88,.3,u,3.51,4.8,s),p(y,u,4.85,.44);for(let u of[3.71,6.73])f(y,12.5,.15,.35,0,u,4.8,t)}if(g==="twoMansardBrick"){for(let u of[-5.9,5.9])f(y,.51,5.95,.42,u,3.54,4.79,n),p(y,u,4.88,.65);f(y,12.7,.18,.38,0,3.7,4.83,t),f(y,12.6,.17,.38,0,6.72,4.83,s)}if(g==="twoMansardColumns"){f(y,9.1,.23,1.75,0,.41,5.36,t),f(y,9.35,.22,1.8,0,6.42,5.36,t);for(let u of[-3.95,-2.15,2.15,3.95])f(y,.24,5.6,.24,u,3.48,6.1,s),f(y,.48,.13,.46,u,.62,6.1,t)}if(g==="twoFamily"){for(let u of[-5.94,5.94])f(y,.29,5.9,.35,u,3.58,4.72,n),f(y,.37,.15,.43,u,6.62,4.72,s),p(y,u,4.86,.4);f(y,12.6,.12,.29,0,3.72,4.75,t)}}function m(g){for(let[y,u]of c)u.visible=y===g}return m("none"),{root:l,groups:c,setStyle:m,ids:d}}var pe={ACESFilmicToneMapping:Kr,BoxGeometry:Ei,BufferAttribute:Mn,BufferGeometry:dn,CanvasTexture:Sr,Color:rt,CylinderGeometry:Ar,DirectionalLight:qr,DoubleSide:Pn,EquirectangularReflectionMapping:Hs,Euler:Fn,Float32BufferAttribute:wt,Fog:mr,Group:li,HemisphereLight:Gr,InstancedMesh:vr,Matrix4:_t,Mesh:fn,MeshBasicMaterial:Ds,MeshPhysicalMaterial:Or,MeshStandardMaterial:Fs,Object3D:Zt,PCFSoftShadowMap:Io,PerspectiveCamera:jt,Plane:rn,PlaneGeometry:Ji,PointLight:Wr,Quaternion:an,Raycaster:Yr,RepeatWrapping:ws,SRGBColorSpace:sn,Scene:gr,Shape:Ns,ShapeGeometry:Nr,SphereGeometry:Ur,TextureLoader:kr,TorusGeometry:Fr,Vector2:Oe,Vector3:Z,WebGLRenderer:Ml},Zs=document.getElementById("sceneContainer"),Il=document.getElementById("modelFallback"),ha=document.getElementById("loading3d"),wh=document.getElementById("hourInput"),_y=document.getElementById("hourLabel"),Ah=document.getElementById("windowsToggle"),Th=document.getElementById("facadeSelect"),Eh=document.getElementById("roofSelect"),ua=document.getElementById("fenceSelect"),Ch=document.getElementById("roofColorSelect"),Rh=document.getElementById("fenceColorSelect"),da=document.getElementById("houseStyleSelect"),ns=document.getElementById("roofShapeSelect"),Mf=document.getElementById("houseSizeSelect"),Ph=document.getElementById("houseWidthInput"),Ih=document.getElementById("houseLengthInput"),Sf=document.getElementById("houseFloorsSelect"),bf=document.getElementById("frameColorSelect"),wf=document.getElementById("doorColorSelect"),Af=document.getElementById("glassTintSelect"),Tf=document.getElementById("landscapeSelect"),Dl=document.getElementById("poolToggle"),Ef=document.getElementById("entranceStyleSelect"),Cf=document.getElementById("plinthSelect"),SS=document.getElementById("terraceToggle"),Rf=document.getElementById("yardStyleSelect"),Dh=document.getElementById("parkingToggle"),Pf=document.getElementById("gazeboToggle"),Js=document.getElementById("verandaSelect"),xy=document.getElementById("blindAreaType"),If=document.getElementById("blindAreaColor"),Df=document.getElementById("blindAreaWidth"),Lf=document.getElementById("blindAreaContour"),Ll=document.getElementById("highDetailButton"),Fi=document.getElementById("qualitySelect"),is=document.getElementById("autoRotate"),Nl=document.getElementById("modelFPS"),yy=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Ks=(i,e,t)=>Math.max(e,Math.min(t,i)),Ul=()=>{let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d",{alpha:!1});e.fillStyle="#e9d9cd",e.fillRect(0,0,512,512);let t=15,n=512/t,s=88;for(let a=0;a<t;a++)for(let o=-1;o<7;o++){let l=a%2?s/2:0,c=o*s-l,d=(a*37+o*59+1e3)%8,f=["#b46f5e","#b97967","#ad6e5e","#bd7c6a","#b67561","#9f6255","#bf8270","#ac7163"];e.fillStyle=f[d],e.fillRect(c+1,a*n+1,s-2,n-2),e.fillStyle="rgba(255,233,212,.10)",e.fillRect(c+3,a*n+2,s-7,2),e.fillStyle="rgba(55,31,25,.10)",e.fillRect(c+2,a*n+n-5,s-4,2)}let r=new pe.CanvasTexture(i);return r.colorSpace=pe.SRGBColorSpace,r.wrapS=r.wrapT=pe.RepeatWrapping,r.repeat.set(3.25,2.15),r.anisotropy=4,r},fa=(i,e=1,t=1)=>{let n=document.createElement("canvas");n.width=512,n.height=512;let s=n.getContext("2d",{alpha:!1}),r=29617;i(s,()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296));let o=new pe.CanvasTexture(n);return o.colorSpace=pe.SRGBColorSpace,o.wrapS=o.wrapT=pe.RepeatWrapping,o.repeat.set(e,t),o.anisotropy=4,o},Lh=i=>{let e={slate:["#354044","#434a4b","#30383d","#4e5353","#44484a","#353a3e"],terracotta:["#9b513f","#ad6147","#864333","#b46f53","#a75b42","#8b4a37"],graphite:["#282c30","#34393a","#3b3f43","#292e33","#44474b","#343a3d"]};return fa((t,n)=>{t.fillStyle="#272b2b",t.fillRect(0,0,512,512);let s=e[i],r=59,a=33;for(let o=-1;o<18;o++)for(let l=-1;l<11;l++){let c=l*r+o%2*r/2,d=o*a;t.fillStyle=s[Math.floor(n()*s.length)],t.fillRect(c+1,d+1,r-2,a-2),t.fillStyle="rgba(255,255,255,.075)",t.fillRect(c+3,d+2,r-7,2),t.fillStyle="rgba(0,0,0,.11)",t.fillRect(c+1,d+a-5,r-2,3)}for(let o=0;o<4700;o++)t.fillStyle=n()>.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.05)",t.fillRect(n()*512,n()*512,1+n()*3,1+n()*2)},3,3)},Nh=()=>fa((i,e)=>{i.fillStyle="#d8c9b4",i.fillRect(0,0,512,512);let t=["#e6daca","#d3c0a8","#ccbea9","#e5d3bc","#c4b49e"];for(let n=0;n<12;n++)for(let s=-1;s<7;s++){let o=s*85+n%2*85/2,l=n*44;i.fillStyle=t[Math.floor(e()*t.length)],i.fillRect(o+1,l+1,83,42),i.fillStyle="rgba(255,255,255,.13)",i.fillRect(o+3,l+2,79,2)}for(let n=0;n<9400;n++){let s=e()>.5?"rgba(67,54,42,.045)":"rgba(255,255,255,.08)";i.fillStyle=s,i.fillRect(e()*512,e()*512,1+e()*4,1+e()*3)}},2,1.75),vy=()=>fa((i,e)=>{i.fillStyle="#e7dfd0",i.fillRect(0,0,512,512);for(let t=0;t<28e3;t++)i.fillStyle=e()>.53?"rgba(255,255,255,.12)":"rgba(107,94,74,.09)",i.fillRect(e()*512,e()*512,1+e()*3,1+e()*3)},2,2),My=()=>fa((i,e)=>{i.fillStyle="#63794e",i.fillRect(0,0,512,512);for(let t=0;t<22e3;t++)i.fillStyle=e()>.52?"rgba(173,194,123,.17)":"rgba(35,69,35,.20)",i.fillRect(e()*512,e()*512,1+e()*2,2+e()*7)},18,18),Sy=()=>fa((i,e)=>{i.fillStyle="#c0baab",i.fillRect(0,0,512,512);for(let t=0;t<14;t++)for(let n=-1;n<9;n++){let a=n*69+(t%2?34.5:0),o=t*38,l=Math.floor(168+e()*37);i.fillStyle="rgb("+l+","+(l-3)+","+(l-10)+")",i.fillRect(a+2,o+2,65,34),i.fillStyle="rgba(255,255,255,.10)",i.fillRect(a+3,o+3,63,2);for(let c=0;c<6;c++)i.fillStyle="rgba(65,63,50,.04)",i.fillRect(a+e()*69,o+e()*38,2,2)}},2,5);try{let f=function(P){if(o)return;let re=l[P]||l.front;c={camera:new pe.Vector3(...re.camera),target:new pe.Vector3(...re.target)},a.autoRotate=!1,is.setAttribute("aria-pressed","false"),is.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440",d&&(d.value=P in l?P:"front")},Of=function(){new pe.TextureLoader().load(new URL("assets/3d/metal_roof_rough.webp",document.baseURI).href,P=>{P.wrapS=P.wrapT=pe.RepeatWrapping,P.repeat.set(2,2),q.setMetalRoughness(P)},void 0,()=>{})};if(!window.WebGLRenderingContext)throw new Error("WebGL unavailable");let i=new pe.Scene,e=window.matchMedia("(min-width:850px) and (pointer:fine)").matches,t=new pe.WebGLRenderer({antialias:!0,powerPreference:e?"high-performance":"low-power",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.95)),t.outputColorSpace=pe.SRGBColorSpace,t.toneMapping=pe.ACESFilmicToneMapping,t.toneMappingExposure=1.35,t.shadowMap.enabled=!0,t.shadowMap.type=pe.PCFSoftShadowMap,t.domElement.addEventListener("webglcontextlost",P=>{P.preventDefault(),t.domElement.style.visibility="hidden",Il.style.display="block",ha.hidden=!0,Nl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 3D \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"},!1),t.domElement.setAttribute("aria-label","\u0422\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430. \u0412\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0438\u043B\u0438 \u043C\u044B\u0448\u044C\u044E"),Zs.appendChild(t.domElement),t.domElement.style.visibility="hidden";let n=new pe.PerspectiveCamera(48,1,.2,130),s=window.matchMedia("(max-width:730px)").matches,r=s?new pe.Vector3(17,13,49.5):new pe.Vector3(22,14,51);n.position.copy(r);let a=new Al(n,t.domElement);a.enableDamping=!0,a.dampingFactor=.085,a.enablePan=!1,a.minDistance=12.5,a.maxDistance=75,a.minPolarAngle=.18,a.maxPolarAngle=Math.PI*.475,a.autoRotate=!1,a.autoRotateSpeed=2.15,a.target.set(0,2.75,0),a.update();let o=!1,l={front:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]},side:{camera:[31,9,2.5],target:[0,2.8,0]},back:{camera:[12,8,-28],target:[0,2.7,0]},top:s?{camera:[17,62,15],target:[8,1,3]}:{camera:[13,49,12],target:[5,1,3]},yard:{camera:[20,14.5,36],target:[2.4,1.5,9]},facade:s?{camera:[9.7,6.4,16.3],target:[0,2.45,2.4]}:{camera:[12.5,7.2,20],target:[0,2.5,2.7]},roof:s?{camera:[10.2,10,17],target:[0,3.8,1.7]}:{camera:[14.3,12.1,20],target:[0,4,1.7]},fence:{camera:[23,16.5,33],target:[0,3.05,5]},presets:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]}},c=null;window.addEventListener("kaskad:focus-view",P=>{if(o||typeof hn<"u"&&hn)return;let re=l[P.detail?.tab];re&&(c={camera:new pe.Vector3(...re.camera),target:new pe.Vector3(...re.target)})}),window.kaskadOrbitControls=a;a.addEventListener("start",()=>{c=null});let d=document.getElementById("sceneViewSelect");d?.addEventListener("change",()=>f(d.value)),document.getElementById("sceneOverviewButton")?.addEventListener("click",()=>f("front"));let p=document.getElementById("sceneGestureTip");a.addEventListener("start",()=>{p&&p.classList.add("is-used")},{once:!0}),f("front");let m=(P,re=.8,ve={})=>new pe.MeshStandardMaterial({color:P,roughness:re,...ve}),g={brick:Ul(),stone:Nh(),plaster:vy(),tuscan:Ul(),gray:Nh(),..._f(pe)},y={slate:Lh("slate"),terracotta:Lh("terracotta"),graphite:Lh("graphite")},u=new pe.MeshBasicMaterial({color:"#ffffff",map:g.brick,toneMapped:!0}),h=m("#e6dece",.79),x=m("#ede7da",.57),b=m("#55534d",.91),M=m("#94877b",.86),T=m("#3e4849",.82),S=m("#4a3a31",.67,{metalness:.08}),_=m("#6f6555",.53,{metalness:.48}),v=m("#6f6555",.46,{metalness:.47}),C=m("#a9b2aa",.35,{metalness:.52}),E=m("#ffffff",.86,{map:Sy()}),I=m("#ffffff",.97,{map:My()}),U=m("#777f7b",.9),D=new pe.MeshPhysicalMaterial({color:"#4f9eaa",roughness:.075,metalness:.04,transparent:!0,opacity:.88,clearcoat:.95,clearcoatRoughness:.09,envMapIntensity:1.1,side:pe.DoubleSide}),R=new pe.Mesh(new pe.PlaneGeometry(135,135),I);R.rotation.x=-Math.PI/2,R.receiveShadow=!0,i.add(R);let B=(P,re,ve,Ke,$e,gt,St,dt=!0)=>{let et=new pe.Mesh(new pe.BoxGeometry(P,re,ve),Ke);return et.position.set($e,gt,St),et.castShadow=dt,et.receiveShadow=!0,i.add(et),et},G=(P,re,ve,Ke,$e,gt,St,dt=16)=>{let et=new pe.Mesh(new pe.CylinderGeometry(P,re,ve,dt),Ke);return et.position.set($e,gt,St),et.castShadow=!0,et.receiveShadow=!0,i.add(et),et},O=i.children.length;B(13.6,.42,9.65,b,0,.29,0);let Y=new pe.BoxGeometry(12.8,6.45,9),F=Y.getAttribute("uv");for(let P=0;P<8;P++)F.setX(P,F.getX(P)*(9/12.8));F.needsUpdate=!0;let H=new pe.Mesh(Y,u);H.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0435\u0434\u0438\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0444\u0430\u0441\u0430\u0434 4 \u0441\u0442\u043E\u0440\u043E\u043D\u044B",H.position.set(0,3.66,0),H.castShadow=!0,H.receiveShadow=!0,i.add(H),B(13.2,.18,9.45,x,0,3.66,0),B(13.4,.28,9.6,h,0,6.86,0),B(13,.16,9.35,x,0,7.1,0),B(12.93,.22,9.13,u,0,6.96,0),B(12.85,.1,9.05,x,0,7.08,0);let k=i.children.length;B(3.85,.2,1.85,h,0,3.06,5.42),B(3.94,.07,1.96,x,0,3.18,5.42);for(let P of[-1.72,1.72])G(.14,.15,2.35,x,P,1.83,6.2,14),G(.23,.23,.13,h,P,.65,6.2,16),G(.22,.22,.12,h,P,3.03,6.2,16);let te=i.children.slice(k),ie=new pe.BufferGeometry,$=new Float32Array([-7.25,6.98,-5.25,0,9.05,-5.25,0,9.05,5.25,-7.25,6.98,-5.25,0,9.05,5.25,-7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,-5.25,7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,5.25,0,9.05,5.25]);ie.setAttribute("position",new pe.BufferAttribute($,3)),ie.computeVertexNormals(),ie.setAttribute("uv",new pe.Float32BufferAttribute([0,0,.5,1,.5,0,0,0,.5,0,0,1,.5,1,1,0,1,1,.5,1,1,1,.5,0],2));let L=new pe.MeshStandardMaterial({color:"#ffffff",roughness:.78,map:y.slate,side:pe.DoubleSide}),z=new pe.Mesh(ie,L);z.castShadow=!0,z.receiveShadow=!0,i.add(z);let q=lf(pe,i,{tileRoof:z,roofSurface:L}),K=q.metalMat,J=new pe.BufferGeometry;J.setAttribute("position",new pe.Float32BufferAttribute([-6.43,7.03,4.51,6.43,7.03,4.51,0,8.77,4.51,-6.43,7.03,-4.51,0,8.77,-4.51,6.43,7.03,-4.51],3));let de=(7.03-(3.66-6.45/2))/6.45,he=(8.77-(3.66-6.45/2))/6.45;J.setAttribute("uv",new pe.Float32BufferAttribute([0,de,1,de,.5,he,1,de,.5,he,0,de],2)),J.computeVertexNormals();let De=new pe.Mesh(J,u);De.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u044B \u0442\u043E\u0433\u043E \u0436\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430",De.castShadow=!0,De.receiveShadow=!0,i.add(De);let ge=B(.2,.24,10.6,T,0,9.03,0);for(let P of[-6.6,6.6])for(let re of[-4.45,4.45])for(let ve=0;ve<13;ve++){let Ke=.84+ve*.455,$e=new pe.Mesh(new pe.BoxGeometry(.43,.31,.53),ve%2?x:h);$e.position.set(P,Ke,re),$e.castShadow=!0,$e.receiveShadow=!0,i.add($e)}let ne=m("#616767",.38,{metalness:.57});for(let P of[-7.22,7.22]){let re=new pe.Mesh(new pe.CylinderGeometry(.105,.105,10.65,12),ne);re.rotation.x=Math.PI/2,re.position.set(P,6.96,0),re.castShadow=!0,i.add(re)}for(let P of[-6.54,6.54])G(.068,.068,6.28,ne,P,3.71,4.69,10),B(.34,.12,.2,ne,P,6.98,4.7,!1),B(.34,.12,.2,ne,P,.53,4.7,!1);for(let P of[-3.45,0,3.45])B(13.02,.11,.08,h,0,3.6,P,!1);B(1.72,2.58,.13,h,0,1.58,4.67),B(1.52,2.34,.2,S,0,1.54,4.79),B(.12,.12,.14,_,.55,1.54,4.95);let fe=new pe.MeshStandardMaterial({color:"#a6bdc7",roughness:.17,metalness:.26,emissive:new pe.Color("#ffd68c"),emissiveIntensity:0}),Ae=[],xe=[],me=(P,re,ve,Ke=0,$e=1.48,gt=1.58)=>{let St=new pe.Group;St.position.set(P,re,ve),St.rotation.y=Ke,i.add(St);let dt=(Tt,kt,_n,mi,Xt,xn,gi)=>{let un=new pe.Mesh(new pe.BoxGeometry(Tt,kt,_n),mi);return un.position.set(Xt,xn,gi),un.castShadow=!0,St.add(un),un};dt($e+.25,gt+.32,.13,u,0,0,0),dt($e+.05,gt+.1,.14,v,0,0,.09);let et=dt($e-.1,gt-.18,.025,fe,0,0,.18);return Ae.push(et),dt(.065,gt-.04,.055,x,0,0,.23),dt($e-.04,.065,.055,x,0,0,.23),dt($e+.3,.16,.35,x,0,-gt/2-.13,.13),dt(.043,gt-.22,.055,v,-$e*.26,0,.243),dt(.043,gt-.22,.055,v,$e*.26,0,.243),dt($e-.11,.032,.055,v,0,-gt*.23,.245),dt($e-.11,.032,.055,v,0,gt*.23,.245),xe.push({group:St,x:P,y:re,z:ve,rot:Ke}),St};[-4.55,-2.3,2.3,4.55].forEach(P=>{me(P,2.12,4.58),me(P,5.49,4.58)}),me(0,5.49,4.58,0,1.54,1.72);for(let P of[-4.5,-2.3,2.3,4.5])me(P,2.12,-4.58,Math.PI),me(P,5.49,-4.58,Math.PI);for(let P of[-2.65,0,2.65])for(let re of[2.18,5.43])me(6.49,re,P,Math.PI/2,1.45,1.64),me(-6.49,re,P,-Math.PI/2,1.45,1.64);let Be=uf(pe,i,{limestone:h,quartz:x,bronze:_,doorMat:S,roofMat:T,porchElements:te,balconyElements:[]}),Ne=()=>{let P=da?.value||"classic";Ue.visible=!It.has(P)&&!W.isDistinctStyle(P),W.setStyle(P);let re={twoClassic:"classic",twoBrick:"practical",twoColumns:"classic",twoModern:"modern",twoBalcony:"classic",twoTerrace:"classic",twoEstate:"estate",twoFamily:"practical"}[P]||P;Ue.visible&&Be.setStyle(re),Le.setStyle(P);for(let ve of xe){let Ke=Math.abs(ve.z-4.58)<.2,$e=Math.abs(ve.z+4.58)<.2,gt=ve.y>4,St=Math.abs(ve.x)<2.7,dt=P==="modern"&&Ke&&gt,et=P==="coastal"&&Ke&&gt&&St,Tt=P==="practical"&&((Ke||$e)&&Math.abs(ve.x)>4||!Ke&&!$e&&Math.abs(ve.z)<.1),kt=P==="craft"&&Ke&&gt&&Math.abs(ve.x)<3;ve.group.visible=!(dt||et||Tt||kt)}},Ue=new pe.Group;Ue.name="KASKAD parametric house volume";for(let P of i.children.slice(O))Ue.add(P);i.add(Ue);let ke=cf(pe,Ue,{roofSystem:q,roofRidge:ge,gableFacades:De}),W=pf(pe,i,{brick:u,limestone:h,quartz:x,roofSystem:q,windowFrameMetal:v,glassMat:fe,doorMat:S}),It=new Set(ca.filter(P=>P.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435").map(P=>P.id)),ut=m("#806447",.81),mt=Pl(pe,Ue,{stone:h,brick:u,wood:ut,metal:T}),Le=vf(pe,Ue,{stone:h,brick:u,trim:x,wood:ut,dark:T,glass:fe}),Ct=xf(pe,i),Ye=yf(pe,i),Je=()=>{let P=Cf?.value||"graphite";mt.setPlinth(P),mt.setTerrace(!1),W.setPlinth(P),W.setTerrace(!1);let re=Number(Ph?.value)||10,ve=Number(Ih?.value)||10;if(da?.value==="twoBalcony"&&Js?.value!=="none"){Js.value="none",Js.dispatchEvent(new Event("change",{bubbles:!0}));let Ke=document.getElementById("siteCompatibilityNote");Ke&&(Ke.textContent="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430: \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043B\u043A\u043E\u043D \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u0443 \u0436\u0435 \u0437\u043E\u043D\u0443.")}Ye.setStyle(Js?.value||"none"),Ye.setDimensions(re,ve),Ct.setLayout({houseWidth:re,houseLength:ve,type:"none",color:If?.value||"graphite",width:Number(Df?.value)||.9,contour:Lf?.value||"all",verandaOn:(Js?.value||"none")!=="none"})};Ct.root.visible=!1,[Cf,Js,xy,If,Df,Lf].forEach(P=>P?.addEventListener("change",Je)),Je();let N=Rl(pe,Ue,{stone:h,trim:x,wood:ut,metal:T}),w=()=>{let P=Ef?.value||"simple";te.forEach(re=>{re.visible=!1}),N.setStyle(P),W.setEntrance(P)};Ef?.addEventListener("change",w),w();let ee={classic:1.42,italian:1.5,modern:1.85,estate:1.56,kavkaz:1.4,coastal:1.7,practical:1.36,craft:1.3},_e=Float32Array.from(Y.getAttribute("uv").array),ue=Float32Array.from(J.getAttribute("uv").array),we=()=>{let P=Math.max(5,Math.min(14,Number(Ph?.value)||10)),re=Math.max(8,Math.min(18,Number(Ih?.value)||10)),ve=P/12.8,Ke=re/9;Ue.scale.set(ve,1,Ke),Ue.position.z=4.58*(1-Ke);for(let et of N.styles.values())et.scale.x=1/ve,et.scale.z=1/Ke,et.position.z=4.58*(Ke-1)/Ke;let $e=P<8.5?2:4;for(let et of xe){let{group:Tt,x:kt,z:_n,rot:mi}=et,Xt=Math.abs(kt)>6,xn=!Xt&&_n>0,gi=!Xt&&_n<0,un=Math.abs(kt)>4;if(Tt.visible=!(P<8.5&&!Xt&&!un),Tt.scale.x=Xt?1/Ke:1/ve,Tt.scale.z=Xt?1/ve:1/Ke,Xt)Tt.position.x=Math.sign(kt)*(P/2-.1)/ve,Tt.position.z=(_n===0?0:Math.sign(_n)*Math.max(1.5,re/2-1.4))/Ke;else if(xn||gi){let ba=un?P/2-1.05:P/2-2.87;Tt.position.x=Math.sign(kt)*Math.max(.87,ba)/ve}P<8&&Math.abs(kt)<.1&&xn&&(Tt.visible=!1)}let gt=Y.getAttribute("uv");for(let et=0;et<gt.count;et++){let Tt=et<8?Ke:et>=16?ve:1;gt.setXY(et,_e[et*2]*Tt,_e[et*2+1])}gt.needsUpdate=!0;let St=J.getAttribute("uv");for(let et=0;et<St.count;et++)St.setXY(et,ue[et*2]*ve,ue[et*2+1]);St.needsUpdate=!0;let dt=Sf?.value||"one";Ue.userData.footprint={width:P,length:re,floors:dt},W.setDimensions(P,re),mt.setDimensions(P,re),Je()};window.addEventListener("kaskad:dimensions-changed",()=>we());for(let P of[Ph,Ih,Sf])P?.addEventListener("change",we);let Pe=()=>{let P=ns?.value||"hip",re=["modernOne","minimal","coastal","twoModern","modernOffsetTwo"].includes(da?.value);P==="flat"&&!re&&(P="hip",ns&&(ns.value=P),ns?.dispatchEvent(new CustomEvent("kaskad:roof-guard"))),ke.setShape(P),W.setRoof(P,q.getType())},le=()=>{Ne(),we(),Pe()};da?.addEventListener("change",()=>{le(),f("front")}),Mf?.addEventListener("change",we),ns?.addEventListener("change",Pe),le();for(let P=0;P<3;P++)B(3.35+P*.42,.16,.69,M,0,.34-P*.09,6.54+P*.55);let oe=gf(pe,i,{lawnMaterial:I}),Ee=i.children.length,V=m("#a6a29b",.83),ce=m("#8eb7b6",.72,{metalness:.03});B(5.88,.065,9.85,ce,14.35,.04,.5,!1),B(5.84,.015,9.79,D,14.35,.145,.5,!1);for(let P of[11.2,17.5])B(.32,.22,10.42,V,P,.175,.5,!1);for(let P of[-4.63,5.63])B(6.52,.22,.31,V,14.35,.175,P,!1);let ae=m("#d2d3ce",.64);for(let P=0;P<3;P++)B(3.3-P*.25,.035,.55,ae,14.35,.123-P*.012,-4.04+P*.38,!1);let Me=new pe.Group;Me.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0431\u0430\u0441\u0441\u0435\u0439\u043D";for(let P of i.children.slice(Ee))Me.add(P);i.add(Me);let Se=m("#6b5847",.96),Te=i.children.length;hf(pe,i,{trunkMat:Se});let We=new pe.Group;We.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0438 \u043A\u0443\u0441\u0442\u0430\u0440\u043D\u0438\u043A\u0438";for(let P of i.children.slice(Te))P.isInstancedMesh&&(P.userData.defaultCount=P.count),We.add(P);i.add(We);let tt=m("#e1d8c6",.84,{map:Nh()}),ye=m("#262c2c",.54,{metalness:.63}),qe=m("#665747",.73,{metalness:.05}),Qe=m("#b07c67",.85,{map:g.brick}),be=m("#ffffff",.88,{map:Ul()}),st=m("#ffffff",.88,{map:Ul()}),Ft=m("#e2d6c2",.64),$n=[m("#466c45",.94),m("#5b7c51",.96),m("#3a6549",.96),m("#7b8355",.97)],Fl=m("#b88c82",.95),pa=m("#ded4b9",.96),Oi=of(pe,i,{gardenStone:tt,postBrick:Qe,tuscanBrick:be,tuscanFenceWall:st,copingStone:Ft,fenceIron:ye,timber:qe}),In=new pe.Group;In.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430",i.add(In);for(let P of[Ue,W.root,Ye.root,Ct.root])In.add(P);let gn=new pe.Group;gn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0435",i.add(gn);let zn=m("#2f6d40",.86),ma=m("#c6b89b",.9),kn=document.createElement("div");kn.className="kaskad-site-scene-hint",kn.hidden=!0,kn.textContent="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0434\u043E\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C",Zs.append(kn);let jn=[];for(let P=0;P<4;P++){let re=new pe.Mesh(new pe.BoxGeometry(1,.22,1),zn);re.position.y=.16,gn.add(re),jn.push(re)}let Bi=[];for(let P=0;P<4;P++){let re=new pe.Mesh(new pe.BoxGeometry(.28,1.15,.28),zn);re.position.y=.6,gn.add(re),Bi.push(re)}let pi=new pe.Mesh(new pe.PlaneGeometry(1,1),new pe.MeshStandardMaterial({color:"#78b46b",transparent:!0,opacity:.38,roughness:1,depthWrite:!1}));pi.rotation.x=-Math.PI/2,pi.position.y=.018,gn.add(pi);let Qn=new pe.Group;Qn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0438 \u043A\u0430\u043B\u0438\u0442\u043A\u0430",gn.add(Qn);let zi=new pe.BoxGeometry(.085,1.25,.085),$s=m("#354b43",.5,{metalness:.3}),ga=m("#d0c5af",.88),Gn=new pe.Mesh(new pe.BoxGeometry(1,.07,1),ga);Gn.name="\u0414\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438 \u043A \u0432\u0445\u043E\u0434\u0443",Gn.position.y=.045,gn.add(Gn);let _a=0,xa=0,Ol=(P,re,ve)=>{if(P===_a&&re===xa)return;_a=P,xa=re,Qn.clear();let Ke=[[-P/2,ve,-1.28,ve],[1.28,ve,P/2,ve],[-P/2,ve,-P/2,ve-re],[P/2,ve,P/2,ve-re],[-P/2,ve-re,P/2,ve-re]];for(let[gt,St,dt,et]of Ke){let Tt=Math.hypot(dt-gt,et-St),kt=Math.max(2,Math.ceil(Tt/.9)),_n=(dt-gt)/Tt,mi=(et-St)/Tt;for(let Xt=0;Xt<=kt;Xt++){let xn=gt+(dt-gt)*Xt/kt,gi=St+(et-St)*Xt/kt,un=new pe.Mesh(zi,$s);un.position.set(xn,.68,gi),un.castShadow=!1,Qn.add(un)}for(let Xt of[.55,1.09]){let xn=new pe.Mesh(new pe.BoxGeometry(Tt,.075,.075),$s);xn.position.set((gt+dt)/2,Xt,(St+et)/2),xn.rotation.y=-Math.atan2(et-St,dt-gt),Qn.add(xn)}}let $e=new pe.Mesh(new pe.BoxGeometry(2.54,.12,.16),$s);$e.name="\u041A\u0430\u043B\u0438\u0442\u043A\u0430 \xB7 \u0432\u044A\u0435\u0437\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043E\u043A",$e.position.set(0,.13,ve),Qn.add($e)};gn.visible=!1;let hn=!1,A=null,X=0,se=0,j=()=>{if(!A)return;let{width:P,depth:re,houseX:ve,houseZ:Ke,houseWidth:$e,houseLength:gt,fits:St}=A,dt=20.5,et=dt-re,Tt=-P/2,kt=P/2,_n=(dt+et)/2,mi=(ei,er,Wl,Hf,Wf)=>{ei.scale.set(er,1,Wl),ei.position.x=Hf,ei.position.z=Wf};mi(jn[0],P,.12,0,dt),mi(jn[1],P,.12,0,et),mi(jn[2],.12,re,Tt,_n),mi(jn[3],.22,re,kt,_n),[[Tt,dt],[kt,dt],[Tt,et],[kt,et]].forEach(([ei,er],Wl)=>Bi[Wl].position.set(ei,.6,er)),pi.scale.set(P,re,1),pi.position.set(0,.018,_n),Ol(P,re,dt);let Xt=-P/2+ve+$e/2,xn=dt-Ke,gi=Xt,un=xn-dt+1,ba=Math.hypot(gi,un);Gn.visible=ba>.4&&St,Gn.scale.set(1.32,1,Math.max(.1,ba)),Gn.rotation.y=Math.atan2(gi,un),Gn.position.set(Xt/2,.045,(dt+xn+1)/2);let Gf=-P/2+ve+$e/2,Vf=dt-Ke-4.63;if(In.position.set(hn?Gf:0,0,hn?Vf:0),gn.visible=hn,hn){n.far=600,n.updateProjectionMatrix(),i.fog&&(i.fog.near=170,i.fog.far=600),oe.root.visible=!1,We.visible=!1,Me.visible=!1;let ei=Oi.setType(ua?.value||"iron");if(ei.visible=!1,P!==X||re!==se){let er=Math.max(29,Math.max(P,re)*.92);c={camera:new pe.Vector3(P*.59,er,_n+re*.48),target:new pe.Vector3(0,1.1,_n)},X=P,se=re}a.maxDistance=Math.max(100,Math.max(P,re)*1.9),kn.hidden=!0,kn.textContent="\u{1F3E0} "+P.toFixed(1)+" \xD7 "+re.toFixed(1)+" \u043C \xB7 "+(P*re/100).toLocaleString("ru-RU",{maximumFractionDigits:2})+" \u0441\u043E\u0442. \xB7 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043E\u043C \u0438 \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435"}jn.forEach(ei=>ei.material.color.set(St?"#3b6849":"#a85243"))};window.addEventListener("kaskad:plot-changed",P=>{A=P.detail,j()}),window.addEventListener("kaskad:site-preview",P=>{hn=P.detail?.active===!0,hn?j():(kn.hidden=!0,X=0,se=0,n.far=170,n.updateProjectionMatrix(),i.fog&&(i.fog.near=50,i.fog.far=110),In.position.set(0,0,0),gn.visible=!1,oe.root.visible=!0,Oi.setType(ua?.value||"iron"),Ge())});let Q=new pe.Raycaster,Ie=new pe.Vector2,He=new pe.Plane(new pe.Vector3(0,1,0),0),Ce=new pe.Vector3,Fe=!1,Xe=null,nt=0,lt=0,Ve=P=>{let re=t.domElement.getBoundingClientRect();return Ie.set((P.clientX-re.left)/re.width*2-1,-((P.clientY-re.top)/re.height)*2+1),Q.setFromCamera(Ie,n),Q.ray.intersectPlane(He,Ce)?Ce.clone():null};t.domElement.addEventListener("pointerdown",P=>{if(!hn||!A||P.button!==0||(Ve(P),!Q.intersectObject(In,!0).filter(Ke=>Ke.object.visible&&Ke.object.isMesh).length))return;let ve=Ve(P);ve&&(Fe=!0,Xe=P.pointerId,nt=ve.x-In.position.x,lt=ve.z-In.position.z,a.enabled=!1,c=null,t.domElement.setPointerCapture(P.pointerId),P.preventDefault(),P.stopImmediatePropagation())},!0),t.domElement.addEventListener("pointermove",P=>{if(!Fe||P.pointerId!==Xe||!A)return;P.preventDefault(),P.stopImmediatePropagation();let re=Ve(P);if(!re)return;let{width:ve,depth:Ke,houseWidth:$e,houseLength:gt}=A,St=20.5,dt=re.x-nt,et=re.z-lt,Tt=Ks(dt+ve/2-$e/2,0,Math.max(0,ve-$e)),kt=Ks(St-4.63-et,0,Math.max(0,Ke-gt));window.dispatchEvent(new CustomEvent("kaskad:plot-move",{detail:{houseX:Tt,houseZ:kt}}))},!0);let ct=P=>{!Fe||P.pointerId!==Xe||(Fe=!1,Xe=null,a.enabled=!0,t.domElement.hasPointerCapture(P.pointerId)&&t.domElement.releasePointerCapture(P.pointerId),P.preventDefault(),P.stopImmediatePropagation())};t.domElement.addEventListener("pointerup",ct,!0),t.domElement.addEventListener("pointercancel",ct,!0);let Rt={bronze:"#6f6555",graphite:"#394348",white:"#f4eee2",wood:"#7b4b2d"},Mt={walnut:"#4a3a31",graphite:"#373d3e",oak:"#c29c6b",white:"#f4eee2"},yt={clear:"#a6bdc7",smoke:"#768a91",blue:"#8ebdcc"},zt=()=>{v.color.set(Rt[bf?.value]||Rt.bronze),S.color.set(Mt[wf?.value]||Mt.walnut)},Ge=()=>{if(hn)return;let P=Tf?.value||"lush";Me.visible=Dl?.checked!==!1,We.visible=P!=="open",oe.setStyle(P==="open"?"none":Rf?.value||"family"),oe.setParking(Dh?.checked!==!1),oe.setPool(Me.visible),Oi.setVehicleAccess(Dh?.checked!==!1),oe.setGazebo(Pf?.checked===!0);for(let re=0;re<We.children.length;re++){let ve=We.children[re];ve.visible=P==="lush"||P==="modern"&&re%4!==0,ve.isInstancedMesh&&(ve.count=P==="modern"?Math.ceil(ve.userData.defaultCount*.72):ve.userData.defaultCount)}};[bf,wf].forEach(P=>P?.addEventListener("change",zt)),[Tf,Dl,Rf,Dh,Pf].forEach(P=>P?.addEventListener("change",Ge)),Dl?.addEventListener("change",()=>{Dl.checked&&f("top")}),zt(),Ge();let Wt=i.children.filter(P=>P.isMesh||P.isGroup||P.isInstancedMesh),ht=null,Vn={hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},Dt="living",Hn=document.getElementById("sceneEnterInterior"),tn=document.getElementById("sceneRoomPicker");document.getElementById("builderQuickTabs")?.after(tn),tn.classList.add("builder-room-panel"),tn.querySelector("small").textContent="\u041D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 3D-\u043E\u0431\u0437\u043E\u0440: \u043F\u0440\u043E\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C, \u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043A\u043E\u043C\u043D\u0430\u0442\u0443 \u043D\u0430 360\xB0. \u041E\u0442\u0434\u0435\u043B\u043A\u0430 \u0438 \u0440\u0430\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u043A\u0430 \u043C\u0435\u0431\u0435\u043B\u0438 \u2014 \u0434\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0430\u0446\u0438\u043E\u043D\u043D\u044B\u0435, \u043D\u0435 \u043F\u0440\u043E\u0435\u043A\u0442 \u0434\u043E\u043C\u0430.";let An=document.getElementById("sceneOverviewButton"),ft=document.querySelector(".scene-metric-badge"),Ot=new Map,nn=null,bt=null,Lt=a.minDistance,Tn=a.maxDistance,js=a.maxPolarAngle,Uh=a.minPolarAngle,Fh=a.enableZoom,Oh=[...document.querySelectorAll("#sceneRoomPicker [data-room]")],Nf={hall:[-.2,1.65,1.12],living:[0,1.67,1.38],kitchen:[0,1.66,1.4],bedroom:[.4,1.67,1.4],bath:[0,1.65,1.33]},Bh=P=>{Dt=Object.hasOwn(Vn,P)?P:"living",ht||(ht=mf(pe,i)),ht.setRoom(Dt),ht.root.visible=!0,Oh.forEach($e=>$e.setAttribute("aria-pressed",String($e.dataset.room===Dt))),tn.querySelector(".scene-room-heading").textContent="3D \xB7 "+Vn[Dt]+" \xB7 \u043E\u0431\u0437\u043E\u0440 360\xB0";let[re,ve,Ke]=Nf[Dt];a.target.set(re,ve,Ke),n.position.set(re,ve,Ke+.032),a.update(),c=null,t.render(i,n)},Uf=P=>{if(window.parent!==window)window.parent.postMessage({type:P?"kaskad-interior-enter":"kaskad-interior-leave",version:1},location.origin);else if(P)try{history.pushState({...history.state,kaskadInteriorOpen:!0},"",location.href)}catch{}else history.state?.kaskadInteriorOpen&&history.back()},Bl=(P=!1)=>{if(o=!o,document.body.classList.toggle("kaskad-interior-active",o),o){Ot=new Map(Wt.map(re=>[re,re.visible]));for(let re of Wt)re.visible=!1;nn=n.position.clone(),bt=a.target.clone(),Lt=a.minDistance,Tn=a.maxDistance,js=a.maxPolarAngle,Uh=a.minPolarAngle,Fh=a.enableZoom,a.minDistance=.018,a.maxDistance=.055,a.minPolarAngle=.4,a.maxPolarAngle=Math.PI-.4,a.enableZoom=!1,a.autoRotate=!1,tn.hidden=!1,An&&(An.hidden=!0),ft.hidden=!0,p&&p.classList.add("is-used"),Hn.textContent="\u2190 \u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0434\u043E\u043C\u0443",Hn.setAttribute("aria-pressed","true"),Bh("living")}else{ht&&(ht.root.visible=!1);for(let[re,ve]of Ot)re.visible=ve;a.minDistance=Lt,a.maxDistance=Tn,a.minPolarAngle=Uh,a.maxPolarAngle=js,a.enableZoom=Fh,nn&&bt&&(n.position.copy(nn),a.target.copy(bt)),a.update(),c=null,tn.hidden=!0,An&&(An.hidden=!1),ft.hidden=!1,Hn.textContent="\u0412\u043E\u0439\u0442\u0438 \u0432 \u0434\u043E\u043C",Hn.setAttribute("aria-pressed","false"),hn?j():Ge(),t.render(i,n)}P||Uf(o)};Hn?.addEventListener("click",()=>Bl(!1)),Oh.forEach(P=>P.addEventListener("click",()=>Bh(P.dataset.room))),window.addEventListener("message",P=>{P.source!==window.parent||P.origin!==location.origin||P.data?.type==="kaskad-interior-exit"&&o&&Bl(!0)}),window.parent===window&&window.addEventListener("popstate",P=>{o&&!P.state?.kaskadInteriorOpen&&Bl(!0)});let ya={graphite:"#52595e",chocolate:"#594438",burgundy:"#873c48",green:"#426047",black:"#252b30",gray:"#898f93",terracotta:"#bd7254",sand:"#beb3a0"},zl=null,Qs=(P=!1)=>{let re=Th?.value||"brick",ve=g[re]||g.brick;!P&&zl===re&&u.map===ve||(zl=re,u.map=ve,u.needsUpdate=!0)},zh=()=>{let P=Eh?.value||"slate",re=ya[Ch?.value]||ya.graphite;q.setType(P),q.setColor(re),ke.setMaterial(),W.setRoof(ns?.value||"hip",P),T.color.set(re)},kh=()=>{let P=ua?.value||"iron",re=ya[Rh?.value]||ya.graphite;Oi.setType(P),Oi.setColor(re)};Th?.addEventListener("change",()=>Qs()),[Eh,Ch].forEach(P=>P?.addEventListener("change",zh)),[ua,Rh].forEach(P=>P?.addEventListener("change",kh)),Qs(),zh(),kh();let Ff=new pe.TextureLoader,kl=!1,Gh=()=>{kl||(kl=!0,Qs(!0),t.domElement.style.visibility="visible",Il.style.display="none",ha.hidden=!0,Nl.textContent="3D \u0433\u043E\u0442\u043E\u0432 \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435 360\xB0",window.parent!==window&&window.parent.postMessage({type:"kaskad-builder-first-frame",version:1},location.origin))},Jt=(P,re,ve,Ke)=>{Ff.load(new URL("assets/3d/"+P+".webp",document.baseURI).href,$e=>{$e.colorSpace=pe.SRGBColorSpace,$e.wrapS=$e.wrapT=pe.RepeatWrapping,$e.repeat.set(re,ve),$e.anisotropy=Math.min(e?8:4,t.capabilities.getMaxAnisotropy()),Ke($e),Qs(!0)},void 0,()=>{})},Vh=!1,Hh=()=>{if(Vh)return;Vh=!0;let P=(re,ve)=>{g[re]=ve,zl===re&&Qs(!0)};Jt("red_brick_hd",3.25,2.15,re=>{P("brick",re),Qe.map=re,Qe.needsUpdate=!0}),Jt("stone_tile_wall_hd",2,1.75,re=>{P("stone",re),tt.map=re,tt.needsUpdate=!0}),Jt("rustic_brick_diff_hd",3.2,2.2,re=>{P("tuscan",re),be.map=re.clone(),be.map.wrapS=be.map.wrapT=pe.RepeatWrapping,be.map.repeat.set(1.9,2.4),be.map.needsUpdate=!0,be.needsUpdate=!0,st.map=re.clone(),st.map.wrapS=st.map.wrapT=pe.RepeatWrapping,st.map.repeat.set(12,2.9),st.map.needsUpdate=!0,st.needsUpdate=!0}),Jt("italian_brick_diff_hd",3.1,2.2,re=>{P("gray",re)}),Jt("roof_tile_neutral_hd",3,3,re=>q.setTileMap(re)),Jt("wood_planks_hd",1,1,re=>{qe.map=re,qe.needsUpdate=!0}),Jt("metal_roof_base_hd",2,2,re=>q.setPhotoMap(re)),Jt("concrete_pavement_02_2k",2,5,re=>{E.map=re,E.needsUpdate=!0})};Jt("concrete_pavement_02_1k",2,5,P=>{E.map=P,E.needsUpdate=!0}),Jt("leafy_grass_lush_v41",30,30,P=>{I.map=P,I.roughness=.99,I.needsUpdate=!0}),Jt("red_brick",3.25,2.15,P=>{g.brick=P,Qe.map=P,Qe.color.set("#ffffff"),Qe.needsUpdate=!0}),Jt("stone_tile_wall",2,1.75,P=>{g.stone=P,tt.map=P,tt.color.set("#ffffff"),tt.needsUpdate=!0}),Jt("roof_tile_neutral",3,3,P=>{q.setTileMap(P)}),Jt("wood_planks",1,1,P=>{qe.map=P,qe.color.set("#ffffff"),qe.needsUpdate=!0}),Jt("rustic_brick_diff",3.2,2.2,P=>{g.tuscan=P,be.map=P.clone(),be.map.wrapS=be.map.wrapT=pe.RepeatWrapping,be.map.repeat.set(1.9,2.4),be.map.needsUpdate=!0,be.needsUpdate=!0,st.map=P.clone(),st.map.wrapS=st.map.wrapT=pe.RepeatWrapping,st.map.repeat.set(12,2.9),st.map.needsUpdate=!0,st.needsUpdate=!0}),Jt("italian_brick_diff",3.1,2.2,P=>{g.gray=P}),Jt("metal_roof_base",2,2,P=>{q.setPhotoMap(P)}),Of();let Wh=new pe.TextureLoader;((P,re)=>{Wh.load(new URL("assets/3d/"+P+".webp",document.baseURI).href,ve=>{ve.wrapS=ve.wrapT=pe.RepeatWrapping,ve.repeat.set(2.3,2),re.normalMap=ve,re.normalScale.set(.36,.36),re.needsUpdate=!0},void 0,()=>{})})("rustic_brick_nor_gl",be),Wh.load(new URL("assets/3d/metal_roof_nor_gl.webp",document.baseURI).href,P=>{P.wrapS=P.wrapT=pe.RepeatWrapping,P.repeat.set(2,2),q.setMetalNormal(P)},void 0,()=>{});let Bf=()=>{new El().load(new URL("assets/3d/rooitou_park_1k.hdr",document.baseURI).href,P=>{P.mapping=pe.EquirectangularReflectionMapping,i.environment=P,i.environmentIntensity=.52},void 0,()=>{})};window.setTimeout(Bf,e?550:1550);let Xh=new pe.HemisphereLight("#d8e9ff","#b2a28c",1.35);i.add(Xh);let Nt=new pe.DirectionalLight("#fff1d7",2.15);Nt.position.set(14,17,14),Nt.castShadow=!0,Nt.shadow.mapSize.set(e?1536:1024,e?1536:1024),Nt.shadow.camera.left=-28,Nt.shadow.camera.right=28,Nt.shadow.camera.top=28,Nt.shadow.camera.bottom=-28,Nt.shadow.camera.near=.5,Nt.shadow.camera.far=65,Nt.shadow.bias=-35e-5,i.add(Nt,Nt.target);let va=new pe.DirectionalLight("#eef3fa",.4);va.position.set(-19,14,-19),va.castShadow=!1,i.add(va),Nt.target.position.set(0,2.4,0);let Gl=new pe.PointLight("#ffcc82",0,15,2);Gl.position.set(0,4.1,5.6),i.add(Gl),i.fog=new pe.Fog("#e7e9e4",50,110);let qh=new pe.Color("#e0e9ea"),Vl=new pe.Color("#bb8d80"),zf=new pe.Color("#151e2c"),ss=new pe.Color,kf=P=>{let re=Math.floor(P),ve=Math.round((P-re)*60);return String(re).padStart(2,"0")+":"+String(ve).padStart(2,"0")},Ma=()=>{let P=Number(wh.value);_y.textContent=kf(P);let re=Math.max(0,Math.sin((P-6)/16*Math.PI)),ve=Ks((P-17)/5,0,1),Ke=Ks((P-15)/3,0,1)*(1-Ks((P-20)/2,0,1));Nt.position.set(Math.cos((P-6)/16*Math.PI)*22,1.5+re*27,Math.sin((P-6)/16*Math.PI)*22),Nt.intensity=Math.max(.06,2.15*re),Nt.color.set("#fff6e9").lerp(new pe.Color("#efaa72"),Ke*.75),Xh.intensity=.78+re*.78,P<17?ss.copy(qh):P<20?ss.copy(qh).lerp(Vl,(P-17)/3):ss.copy(Vl).lerp(zf,Ks((P-20)/2,0,1)),P<8&&ss.lerp(Vl,(8-P)/2*.48),i.background=ss.clone(),i.fog.color.copy(ss),t.toneMappingExposure=P>20?.94:1.07+re*.12,va.intensity=.15+re*1.2,i.environment&&(i.environmentIntensity=.2+re*.47);let $e=Ah.checked,gt=$e?.15+ve*1.9:0;fe.emissiveIntensity=gt,fe.color.set($e&&ve>.5?"#edc69b":yt[Af?.value]||yt.clear),Gl.intensity=$e?ve*26:0,Nt.shadow.needsUpdate=!0};wh.addEventListener("input",Ma),Ah.addEventListener("change",Ma),Af?.addEventListener("change",Ma),is.addEventListener("click",()=>{a.autoRotate=!a.autoRotate,is.setAttribute("aria-pressed",String(a.autoRotate)),a.autoRotate?is.textContent="\u25A0 \u0421\u0442\u043E\u043F":is.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440"}),Fi?.addEventListener("change",()=>{let P=Fi.value,re=P==="ultra"?3:P==="high"?2.4:P==="economy"?1:1.95,ve=window.devicePixelRatio||1,Ke=e?P==="ultra"?Math.max(3,ve):P==="high"?Math.max(2.25,ve):ve:P==="ultra"?ve*1.5:P==="high"?ve*1.25:ve;t.setPixelRatio(Math.min(re,Ke)),(P==="high"||P==="ultra")&&Hh();let $e=P==="ultra"?2048:P==="high"?1536:P==="economy"?512:1024;Nt.shadow.mapSize.set($e,$e),Nt.shadow.map&&(Nt.shadow.map.dispose(),Nt.shadow.map=null),Hl(),t.render(i,n)}),Ll?.addEventListener("click",()=>{Fi.value=Fi.value==="high"?"balanced":"high",Fi.dispatchEvent(new Event("change",{bubbles:!0})),Ll.setAttribute("aria-pressed",String(Fi.value==="high")),Ll.textContent=Fi.value==="high"?"HD \u2713":"HD"}),e&&window.setTimeout(Hh,1800),Ma();let Hl=()=>{let P=Math.max(200,Zs.clientWidth),re=Math.max(250,Zs.clientHeight);t.setSize(P,re,!1),n.aspect=P/re,n.updateProjectionMatrix()};new ResizeObserver(Hl).observe(Zs),Hl();let Yh=0,Zh=performance.now(),Sa=()=>{Zh=performance.now()};a.addEventListener("start",Sa),a.addEventListener("change",Sa);for(let P of["input","change","click","pointerdown"])document.addEventListener(P,Sa,{capture:!0,passive:!0});document.addEventListener("visibilitychange",Sa,{passive:!0});let Jh=!0;new IntersectionObserver(P=>{Jh=P.some(re=>re.isIntersecting)},{threshold:.01}).observe(Zs);let Kh=P=>{if(requestAnimationFrame(Kh),document.hidden||!Jh)return;let ve=!!(c||a.autoRotate||P-Zh<1100)?31:165;if(!(P-Yh<ve)){if(Yh=P,c){let Ke=yy?1:.17;n.position.lerp(c.camera,Ke),a.target.lerp(c.target,Ke),n.position.distanceToSquared(c.camera)<.01&&a.target.distanceToSquared(c.target)<.01&&(n.position.copy(c.camera),a.target.copy(c.target),c=null)}a.update(),t.render(i,n),kl||Gh()}};requestAnimationFrame(()=>{try{a.update(),t.render(i,n),Gh()}catch{Il.style.display="block",ha.hidden=!0,Nl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"}requestAnimationFrame(Kh)})}catch{Il.style.display="block",ha.hidden=!0,ha.textContent="",Nl.textContent="\u0424\u043E\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u043E 3D";for(let e of[wh,Ah,Th,Eh,ua,Ch,Rh,da,Mf,ns,Fi,is,Ll])e&&(e.disabled=!0)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
