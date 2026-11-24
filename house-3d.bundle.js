var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Uu=0,Ac=1,Fu=2;var Zr=1,Po=2,Gs=3,Ni=0,ln=1,Rn=2,$i=0,Vs=1,Tc=2,Ec=3,Cc=4,Ou=5;var ji=100,Bu=101,zu=102,ku=103,Gu=104,Vu=200,Hu=201,Wu=202,Xu=203,Rc=204,Pc=205,qu=206,Yu=207,Zu=208,Ju=209,Ku=210,$u=211,ju=212,Qu=213,ed=214,Za=0,Ja=1,Ka=2,ws=3,$a=4,ja=5,Qa=6,eo=7,Ic=0,td=1,nd=2,qn=0,Lc=1,Dc=2,Nc=3,Jr=4,Uc=5,Fc=6,Oc=7;var Bc=300,Qi=301,Hs=302,Ws=303,Io=304,As=1e3,En=1001,to=1002,Zt=1003,id=1004;var Kr=1005;var Ut=1006,Lo=1007;var Yn=1008;var mn=1009,zc=1010,kc=1011,Xs=1012,Do=1013,Fn=1014,cn=1015,hn=1016,No=1017,Uo=1018,es=1020,Gc=35902,Vc=35899,Hc=1021,Wc=1022,On=1023,hi=1026,di=1027,Fo=1028,Oo=1029,Ui=1030,Bo=1031;var zo=1033,$r=33776,jr=33777,Qr=33778,ea=33779,ko=35840,Go=35841,Vo=35842,Ho=35843,Wo=36196,Xo=37492,qo=37496,Yo=37488,Zo=37489,ta=37490,Jo=37491,Ko=37808,$o=37809,jo=37810,Qo=37811,el=37812,tl=37813,nl=37814,il=37815,sl=37816,rl=37817,al=37818,ol=37819,ll=37820,cl=37821,hl=36492,ul=36494,dl=36495,fl=36283,pl=36284,na=36285,ml=36286;var ur=2300,no=2301,qa=2302,dc=2303,fc=2400,pc=2401,mc=2402;var sd=3200;var gl=0,rd=1,fi="",rn="srgb",qi="srgb-linear",dr="linear",vt="srgb";var Ya=7680;var ad=519,od=512,ld=513,cd=514,Xc=515,hd=516,ud=517,qc=518,Yc=519,dd=35044;var Zc="300 es",Cn=2e3,Ts=2001;function Xf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function qf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fd(){let i=Es("canvas");return i.style.display="block",i}var Qh={},Cs=null;function Jc(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function pd(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function qe(...i){i=pd(i);let e="THREE."+i.shift();if(Cs)Cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ze(...i){i=pd(i);let e="THREE."+i.shift();if(Cs)Cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){let e=i.join(" ");e in Qh||(Qh[e]=!0,qe(...i))}function md(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var gd={[Za]:Za,[Ka]:Qa,[$a]:$a,[ws]:ja,[Ja]:Ja,[Qa]:Ka,[eo]:eo,[ja]:ws},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eu=1234567,or=Math.PI/180,Rs=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function at(i,e,t){return Math.max(e,Math.min(t,i))}function Kc(i,e){return(i%e+e)%e}function Yf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Zf(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function Jf(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function Kf(i,e=1){return e-Math.abs(Kc(i,e*2)-e)}function $f(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function jf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Qf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function ep(i,e){return i+Math.random()*(e-i)}function tp(i){return i*(.5-Math.random())}function np(i){i!==void 0&&(eu=i);let e=eu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function ip(i){return i*or}function sp(i){return i*Rs}function rp(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function ap(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function $c(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function op(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*f,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*f,o*c);break;case"ZXZ":i.set(l*f,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*d,o*c);break;default:qe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function jc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function _d(i,e){if(e.constructor===Float32Array)return i;let t=jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function xd(i,e){if(e.constructor===Float32Array)return i;let t=jc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Qc={DEG2RAD:or,RAD2DEG:Rs,generateUUID:ts,clamp:at,euclideanModulo:Kc,mapLinear:Yf,inverseLerp:Zf,lerp:lr,damp:Jf,pingpong:Kf,smoothstep:$f,smootherstep:jf,randInt:Qf,randFloat:ep,randFloatSpread:tp,seededRandom:np,degToRad:ip,radToDeg:sp,isPowerOfTwo:rp,ceilPowerOfTwo:ap,floorPowerOfTwo:$c,setQuaternionFromProperEuler:op,normalize:xd,denormalize:_d},rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;var Ue=rh,on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],g=r[a+2],x=r[a+3];if(f!==x||l!==p||c!==m||d!==g){let u=l*p+c*m+d*g+f*x;u<0&&(p=-p,m=-m,g=-g,x=-x,u=-u);let h=1-o;if(u<.9995){let y=Math.acos(u),w=Math.sin(y);h=Math.sin(h*y)/w,o=Math.sin(o*y)/w,l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+x*o}else{l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+x*o;let y=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=y,c*=y,d*=y,f*=y}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*f+l*m-c*p,e[t+1]=l*g+d*p+c*f-o*m,e[t+2]=c*g+d*m+o*p-l*f,e[t+3]=d*g-o*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"YXZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"ZXY":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"ZYX":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"YZX":this._x=p*d*f+c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f-p*m*g;break;case"XZY":this._x=p*d*f-c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f+p*m*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],p=n+o+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},ah=class ah{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(tu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(tu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;var W=ah,Hl=new W,tu=new on,oh=class oh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],m=n[5],g=n[8],x=s[0],u=s[3],h=s[6],y=s[1],w=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=a*x+o*y+l*T,r[3]=a*u+o*w+l*S,r[6]=a*h+o*M+l*_,r[1]=c*x+d*y+f*T,r[4]=c*u+d*w+f*S,r[7]=c*h+d*M+f*_,r[2]=p*x+m*y+g*T,r[5]=p*u+m*w+g*S,r[8]=p*h+m*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*r,m=c*r-a*l,g=t*f+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wl.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wl.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;var nt=oh,Wl=new nt,nu=new nt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new nt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function lp(){let i={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qi]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:nu,fromXYZ:iu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var dt=lp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,io=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Es("canvas")),as.width=e.width,as.height=e.height;let s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},cp=0,Ps=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xl(s[a].image)):r.push(Xl(s[a]))}else r=Xl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Xl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?io.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}var hp=0,ql=new W,tn=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=Ut,a=Yn,o=On,l=mn,c=i.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ts(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(ql).x}get height(){return this.source.getSize(ql).y}get depth(){return this.source.getSize(ql).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case to:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case to:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Bc;tn.DEFAULT_ANISOTROPY=1;var lh=class lh{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],x=l[2],u=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-x)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+x)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let w=(c+1)/2,M=(m+1)/2,T=(h+1)/2,S=(d+p)/4,_=(f+x)/4,v=(g+u)/4;return w>M&&w>T?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=v/r),this.set(n,s,r,t),this}let y=Math.sqrt((u-g)*(u-g)+(f-x)*(f-x)+(p-d)*(p-d));return Math.abs(y)<.001&&(y=1),this.x=(u-g)/y,this.y=(f-x)/y,this.z=(p-d)/y,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lh.prototype.isVector4=!0;var Rt=lh,so=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends so{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fr=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ro=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ro=class Ro{constructor(e,t,n,s,r,a,o,l,c,d,f,p,m,g,x,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,x,u)}set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,x,u){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=m,h[7]=g,h[11]=x,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ro().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*d,m=a*f,g=o*d,x=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-x*c,t[9]=-o*l,t[2]=x-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*d,m=l*f,g=c*d,x=c*f;t[0]=p+x*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=x+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*d,m=l*f,g=c*d,x=c*f;t[0]=p-x*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=x-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*d,m=a*f,g=o*d,x=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=p*c+x,t[1]=l*f,t[5]=x*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=x-p*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=p-x*f}else if(e.order==="XZY"){let p=a*l,m=a*c,g=o*l,x=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=p*f+x,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(up,e,dp)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),ba.crossVectors(vn,_i),s[0]=_i.x,s[4]=ba.x,s[8]=vn.x,s[1]=_i.y,s[5]=ba.y,s[9]=vn.y,s[2]=_i.z,s[6]=ba.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],m=n[13],g=n[2],x=n[6],u=n[10],h=n[14],y=n[3],w=n[7],M=n[11],T=n[15],S=s[0],_=s[4],v=s[8],R=s[12],E=s[1],P=s[5],N=s[9],L=s[13],C=s[2],U=s[6],F=s[10],O=s[14],q=s[3],H=s[7],j=s[11],X=s[15];return r[0]=a*S+o*E+l*C+c*q,r[4]=a*_+o*P+l*U+c*H,r[8]=a*v+o*N+l*F+c*j,r[12]=a*R+o*L+l*O+c*X,r[1]=d*S+f*E+p*C+m*q,r[5]=d*_+f*P+p*U+m*H,r[9]=d*v+f*N+p*F+m*j,r[13]=d*R+f*L+p*O+m*X,r[2]=g*S+x*E+u*C+h*q,r[6]=g*_+x*P+u*U+h*H,r[10]=g*v+x*N+u*F+h*j,r[14]=g*R+x*L+u*O+h*X,r[3]=y*S+w*E+M*C+T*q,r[7]=y*_+w*P+M*U+T*H,r[11]=y*v+w*N+M*F+T*j,r[15]=y*R+w*L+M*O+T*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],g=e[3],x=e[7],u=e[11],h=e[15],y=l*m-c*p,w=o*m-c*f,M=o*p-l*f,T=a*m-c*d,S=a*p-l*d,_=a*f-o*d;return t*(x*y-u*w+h*M)-n*(g*y-u*T+h*S)+s*(g*w-x*T+h*_)-r*(g*M-x*S+u*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],g=e[12],x=e[13],u=e[14],h=e[15],y=t*o-n*a,w=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,_=s*c-r*l,v=d*x-f*g,R=d*u-p*g,E=d*h-m*g,P=f*u-p*x,N=f*h-m*x,L=p*h-m*u,C=y*L-w*N+M*P+T*E-S*R+_*v;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let U=1/C;return e[0]=(o*L-l*N+c*P)*U,e[1]=(s*N-n*L-r*P)*U,e[2]=(x*_-u*S+h*T)*U,e[3]=(p*S-f*_-m*T)*U,e[4]=(l*E-a*L-c*R)*U,e[5]=(t*L-s*E+r*R)*U,e[6]=(u*M-g*_-h*w)*U,e[7]=(d*_-p*M+m*w)*U,e[8]=(a*N-o*E+c*v)*U,e[9]=(n*E-t*N-r*v)*U,e[10]=(g*S-x*M+h*y)*U,e[11]=(f*M-d*S-m*y)*U,e[12]=(o*R-a*P-l*v)*U,e[13]=(t*P-n*R+s*v)*U,e[14]=(x*w-g*T-u*y)*U,e[15]=(d*T-f*w+p*y)*U,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,p=r*c,m=r*d,g=r*f,x=a*d,u=a*f,h=o*f,y=l*c,w=l*d,M=l*f,T=n.x,S=n.y,_=n.z;return s[0]=(1-(x+h))*T,s[1]=(m+M)*T,s[2]=(g-w)*T,s[3]=0,s[4]=(m-M)*S,s[5]=(1-(p+h))*S,s[6]=(u+y)*S,s[7]=0,s[8]=(g+w)*_,s[9]=(u-y)*_,s[10]=(1-(p+x))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,d=1/o,f=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),g,x;if(l)g=r/(a-r),x=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Ts)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),g,x;if(l)g=1/(a-r),x=a/(a-r);else if(o===Cn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===Ts)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ro.prototype.isMatrix4=!0;var _t=Ro,os=new W,In=new _t,up=new W(0,0,0),dp=new W(1,1,1),_i=new W,ba=new W,vn=new W,su=new _t,ru=new on,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(at(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ru.setFromEuler(this),this.setFromQuaternion(ru,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fp=0,au=new W,ls=new on,ti=new _t,wa=new W,er=new W,pp=new W,mp=new on,ou=new W(1,0,0),lu=new W(0,1,0),cu=new W(0,0,1),hu={type:"added"},gp={type:"removed"},cs={type:"childadded",child:null},Yl={type:"childremoved",child:null},Jt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new W,t=new Un,n=new on,s=new W(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new nt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(ou,e)}rotateY(e){return this.rotateOnAxis(lu,e)}rotateZ(e){return this.rotateOnAxis(cu,e)}translateOnAxis(e,t){return au.copy(e).applyQuaternion(this.quaternion),this.position.add(au.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ou,e)}translateY(e){return this.translateOnAxis(lu,e)}translateZ(e){return this.translateOnAxis(cu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?wa.copy(e):wa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(er,wa,this.up):ti.lookAt(wa,er,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ti),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ze("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hu),cs.child=e,this.dispatchEvent(cs),cs.child=null):Ze("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gp),Yl.child=e,this.dispatchEvent(Yl),Yl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,pp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,mp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new W(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},_p={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let u=t.getJointPose(x,n),h=this._getHandJoint(c,x);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(_p)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},yd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Aa={h:0,s:0,l:0};function Zl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var rt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=dt.workingColorSpace){if(e=Kc(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Zl(a,r,e+1/3),this.g=Zl(a,r,e),this.b=Zl(a,r,e-1/3)}return dt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let n=yd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return dt.workingToColorSpace(Qt.copy(this),e),Math.round(at(Qt.r*255,0,255))*65536+Math.round(at(Qt.g*255,0,255))*256+Math.round(at(Qt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=rn){dt.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Aa);let n=lr(xi.h,Aa.h,t),s=lr(xi.s,Aa.s,t),r=lr(xi.l,Aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new rt;rt.NAMES=yd;var pr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new rt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new W,ni=new W,Jl=new W,ii=new W,hs=new W,us=new W,uu=new W,Kl=new W,$l=new W,jl=new W,Ql=new Rt,ec=new Rt,tc=new Rt,Si=class i{constructor(e=new W,t=new W,n=new W){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ni.subVectors(n,t),Jl.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ni),l=Ln.dot(Jl),c=ni.dot(ni),d=ni.dot(Jl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-o*d)*p,g=(a*d-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Ql.setScalar(0),ec.setScalar(0),tc.setScalar(0),Ql.fromBufferAttribute(e,t),ec.fromBufferAttribute(e,n),tc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ql,r.x),a.addScaledVector(ec,r.y),a.addScaledVector(tc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ni.subVectors(e,t),Ln.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,n),us.subVectors(r,n),Kl.subVectors(e,n);let l=hs.dot(Kl),c=us.dot(Kl);if(l<=0&&c<=0)return t.copy(n);$l.subVectors(e,s);let d=hs.dot($l),f=us.dot($l);if(d>=0&&f<=d)return t.copy(s);let p=l*f-d*c;if(p<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(hs,a);jl.subVectors(e,r);let m=hs.dot(jl),g=us.dot(jl);if(g>=0&&m<=g)return t.copy(r);let x=m*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(us,o);let u=d*g-m*f;if(u<=0&&f-d>=0&&m-g>=0)return uu.subVectors(r,s),o=(f-d)/(f-d+(m-g)),t.copy(s).addScaledVector(uu,o);let h=1/(u+x+p);return a=x*h,o=p*h,t.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ta.copy(n.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Ea.subVectors(this.max,tr),ds.subVectors(e.a,tr),fs.subVectors(e.b,tr),ps.subVectors(e.c,tr),yi.subVectors(fs,ds),vi.subVectors(ps,fs),Gi.subVectors(ds,ps);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Gi.y,Gi.x,0];return!nc(t,ds,fs,ps,Ea)||(t=[1,0,0,0,1,0,0,0,1],!nc(t,ds,fs,ps,Ea))?!1:(Ca.crossVectors(yi,vi),t=[Ca.x,Ca.y,Ca.z],nc(t,ds,fs,ps,Ea))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new W,new W,new W,new W,new W,new W,new W,new W],Dn=new W,Ta=new Wn,ds=new W,fs=new W,ps=new W,yi=new W,vi=new W,Gi=new W,tr=new W,Ea=new W,Ca=new W,Vi=new W;function nc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),d=n.dot(Vi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var oi=xp();function xp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function yp(i){Math.abs(i)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),i=at(i,-65504,65504),oi.floatView[0]=i;let e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function vp(i){let e=i>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(i&1023)]+oi.exponentTable[e],oi.floatView[0]}var bi=class{static toHalfFloat(e){return yp(e)}static fromHalfFloat(e){return vp(e)}},Ot=new W,Ra=new Ue,Mp=0,Sn=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dd,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?jc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ra.fromBufferAttribute(this,t),Ra.applyMatrix3(e),this.setXY(t,Ra.x,Ra.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):_d(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):xd(e,this.array)}};var gr=class extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _r=class extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sp=new Wn,nr=new W,ic=new W,wi=class{constructor(e=new W,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(ic)),this.expandByPoint(nr.copy(e.center).sub(ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},bp=0,Tn=new _t,sc=new Jt,ms=new W,Mn=new Wn,ir=new Wn,Yt=new W,fn=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bp++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Xf(e)?_r:gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new nt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return sc.lookAt(e),sc.updateMatrix(),this.applyMatrix4(sc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ze('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ze("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Mn.min,ir.min),Mn.expandByPoint(Yt),Yt.addVectors(Mn.max,ir.max),Mn.expandByPoint(Yt)):(Mn.expandByPoint(ir.min),Mn.expandByPoint(ir.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Yt.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),Yt.add(ms)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ze('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ze("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let R=0;R<n.count;R++)o[R]=new W,l[R]=new W;let d=new W,f=new W,p=new W,m=new Ue,g=new Ue,x=new Ue,u=new W,h=new W;function y(R,E,P){c[R]=c[E]=c[P]=1,d.fromBufferAttribute(n,R),f.fromBufferAttribute(n,E),p.fromBufferAttribute(n,P),m.fromBufferAttribute(r,R),g.fromBufferAttribute(r,E),x.fromBufferAttribute(r,P),f.sub(d),p.sub(d),g.sub(m),x.sub(m);let N=1/(g.x*x.y-x.x*g.y);isFinite(N)&&(u.copy(f).multiplyScalar(x.y).addScaledVector(p,-g.y).multiplyScalar(N),h.copy(p).multiplyScalar(g.x).addScaledVector(f,-x.x).multiplyScalar(N),o[R].add(u),o[E].add(u),o[P].add(u),l[R].add(h),l[E].add(h),l[P].add(h))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let R=0,E=w.length;R<E;++R){let P=w[R],N=P.start,L=P.count;for(let C=N,U=N+L;C<U;C+=3)y(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let M=new W,T=new W,S=new W,_=new W;function v(R){S.fromBufferAttribute(s,R),_.copy(S);let E=o[R];M.copy(E),M.sub(S.multiplyScalar(S.dot(E))).normalize(),T.crossVectors(_,E);let N=T.dot(l[R])<0?-1:1;a.setXYZW(R,M.x,M.y,M.z,N)}for(let R=0,E=n.count;R<E;++R)c[R]&&v(R);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new W,r=new W,a=new W,o=new W,l=new W,c=new W,d=new W,f=new W;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),x=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,u),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,u),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d),m=0,g=0;for(let x=0,u=l.length;x<u;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let h=0;h<d;h++)p[g++]=c[m++]}return new Sn(p,d,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){let p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var rc=new W,wp=new W,Ap=new nt,an=class{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=rc.subVectors(n,t).cross(wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(rc),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ap.getNormalMatrix(e),s=this.coplanarPoint(rc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Tp=0,Ai=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Vs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rc,this.blendDst=Pc,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new rt(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ya,this.stencilZFail=Ya,this.stencilZPass=Ya,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new rt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new an().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ue().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ue().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ri=new W,ac=new W,Pa=new W,Ia=new W,Yi=class{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ac.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),Ia.copy(this.origin).sub(ac);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=Ia.dot(this.direction),l=-Ia.dot(Pa),c=Ia.lengthSq(),d=Math.abs(1-a*a),f,p,m,g;if(d>0)if(f=a*l-o,p=a*o-l,g=r*d,f>=0)if(p>=-g)if(p<=g){let x=1/d;f*=x,p*=x,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ac).addScaledVector(Pa,p),m}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,p=e.y-a.y,m=e.z-a.z,g=t.x-a.x,x=t.y-a.y,u=t.z-a.z,h=n.x-a.x,y=n.y-a.y,w=n.z-a.z,M=Math.abs(l),T=Math.abs(c),S=Math.abs(d),_,v,R,E,P,N,L,C,U,F,O,q;if(M>=T&&M>=S?(R=l,N=f,U=g,q=h,l>=0?(_=c,v=d,E=p,P=m,L=x,C=u,F=y,O=w):(_=d,v=c,E=m,P=p,L=u,C=x,F=w,O=y)):T>=S?(R=c,N=p,U=x,q=y,c>=0?(_=d,v=l,E=m,P=f,L=u,C=g,F=w,O=h):(_=l,v=d,E=f,P=m,L=g,C=u,F=h,O=w)):(R=d,N=m,U=u,q=w,d>=0?(_=l,v=c,E=f,P=p,L=g,C=x,F=h,O=y):(_=c,v=l,E=p,P=f,L=x,C=g,F=y,O=h)),R===0)return null;let H=_/R,j=v/R,X=1/R,de=E-H*N,fe=P-j*N,$=L-H*U,G=C-j*U,V=F-H*q,Z=O-j*q,ee=V*G-Z*$,ie=de*Z-fe*V,Ie=$*fe-G*de;if(s){if(ee<0||ie<0||Ie<0)return null}else if((ee<0||ie<0||Ie<0)&&(ee>0||ie>0||Ie>0))return null;let ye=ee+ie+Ie;if(ye===0)return null;let ce=X*(ee*N+ie*U+Ie*q);return(ye>0?ce<0:ce>0)?null:this.at(ce/ye,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ds=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Ic,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},du=new _t,Hi=new Yi,La=new wi,fu=new W,Da=new W,Na=new W,Ua=new W,oc=new W,Fa=new W,pu=new W,Oa=new W,pn=class extends Jt{constructor(e=new fn,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],f=r[l];d!==0&&(oc.fromBufferAttribute(f,e),a?Fa.addScaledVector(oc,d):Fa.addScaledVector(oc.sub(t),d))}t.add(Fa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),La.copy(n.boundingSphere),La.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(La.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(La,fu)===null||Hi.origin.distanceToSquared(fu)>(e.far-e.near)**2))&&(du.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(du),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let u=p[g],h=a[u.materialIndex],y=Math.max(u.start,m.start),w=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let M=y,T=w;M<T;M+=3){let S=o.getX(M),_=o.getX(M+1),v=o.getX(M+2);s=Ba(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let u=g,h=x;u<h;u+=3){let y=o.getX(u),w=o.getX(u+1),M=o.getX(u+2);s=Ba(this,a,e,n,c,d,f,y,w,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=p.length;g<x;g++){let u=p[g],h=a[u.materialIndex],y=Math.max(u.start,m.start),w=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=y,T=w;M<T;M+=3){let S=M,_=M+1,v=M+2;s=Ba(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let u=g,h=x;u<h;u+=3){let y=u,w=u+1,M=u+2;s=Ba(this,a,e,n,c,d,f,y,w,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};function Ep(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;Oa.copy(o),Oa.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Oa);return c<t.near||c>t.far?null:{distance:c,point:Oa.clone(),object:i}}function Ba(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Da),i.getVertexPosition(l,Na),i.getVertexPosition(c,Ua);let d=Ep(i,e,t,n,Da,Na,Ua,pu);if(d){let f=new W;Si.getBarycoord(pu,Da,Na,Ua,f),s&&(d.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new Ue)),r&&(d.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new Ue)),a&&(d.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new W),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new W,materialIndex:0};Si.getNormal(Da,Na,Ua,p.normal),d.face=p,d.barycoord=f}return d}var Zi=class extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Zt,d=Zt,f,p){super(null,a,o,l,c,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gs=new _t,mu=new _t,za=[],gu=new Wn,Cp=new _t,sr=new pn,rr=new wi,yr=class extends pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Cp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),gu.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(gu)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),rr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),mu.multiplyMatrices(n,gs),sr.matrixWorld=mu,sr.raycast(e,za);for(let a=0,o=za.length;a<o;a++){let l=za[a];l.instanceId=r,l.object=this,t.push(l)}za.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(s*this.count),s,this.count,Fo,cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wi=new wi,Rp=new Ue(.5,.5),ka=new W,Ti=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],p=r[6],m=r[7],g=r[8],x=r[9],u=r[10],h=r[11],y=r[12],w=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,m-d,h-g,T-y).normalize(),s[1].setComponents(c+a,m+d,h+g,T+y).normalize(),s[2].setComponents(c+o,m+f,h+x,T+w).normalize(),s[3].setComponents(c-o,m-f,h-x,T-w).normalize(),n)s[4].setComponents(l,p,u,M).normalize(),s[5].setComponents(c-l,m-p,h-u,T-M).normalize();else if(s[4].setComponents(c-l,m-p,h-u,T-M).normalize(),t===Cn)s[5].setComponents(c+l,m+p,h+u,T+M).normalize();else if(t===Ts)s[5].setComponents(l,p,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=Rp.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ka.x=s.normal.x>0?e.max.x:e.min.x,ka.y=s.normal.y>0?e.max.y:e.min.y,ka.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ka)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},_u=new _t,ao=class i{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];_u.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(_u,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ti),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var vr=class extends tn{constructor(e=[],t=Qi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends tn{constructor(e,t,n=Fn,s,r,a,o=Zt,l=Zt,c,d=hi,f=1){if(d!==hi&&d!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sr=class extends ui{constructor(e,t=Fn,n=Qi,s,r,a=Zt,o=Zt,l,c=hi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},br=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class i extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],f=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function g(x,u,h,y,w,M,T,S,_,v,R){let E=M/_,P=T/v,N=M/2,L=T/2,C=S/2,U=_+1,F=v+1,O=0,q=0,H=new W;for(let j=0;j<F;j++){let X=j*P-L;for(let de=0;de<U;de++){let fe=de*E-N;H[x]=fe*y,H[u]=X*w,H[h]=C,c.push(H.x,H.y,H.z),H[x]=0,H[u]=0,H[h]=S>0?1:-1,d.push(H.x,H.y,H.z),f.push(de/_),f.push(1-j/v),O+=1}}for(let j=0;j<v;j++)for(let X=0;X<_;X++){let de=p+X+U*j,fe=p+X+U*(j+1),$=p+(X+1)+U*(j+1),G=p+(X+1)+U*j;l.push(de,fe,G),l.push(fe,$,G),q+=6}o.addGroup(m,q,R),m+=q,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class i extends fn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],g=0,x=[],u=n/2,h=0;y(),a===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(d),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(p,3)),this.setAttribute("uv",new Tt(m,2));function y(){let M=new W,T=new W,S=0,_=(t-e)/n;for(let v=0;v<=r;v++){let R=[],E=v/r,P=E*(t-e)+e;for(let N=0;N<=s;N++){let L=N/s,C=L*l+o,U=Math.sin(C),F=Math.cos(C);T.x=P*U,T.y=-E*n+u,T.z=P*F,f.push(T.x,T.y,T.z),M.set(U,_,F).normalize(),p.push(M.x,M.y,M.z),m.push(L,1-E),R.push(g++)}x.push(R)}for(let v=0;v<s;v++)for(let R=0;R<r;R++){let E=x[R][v],P=x[R+1][v],N=x[R+1][v+1],L=x[R][v+1];(e>0||R!==0)&&(d.push(E,P,L),S+=3),(t>0||R!==r-1)&&(d.push(P,N,L),S+=3)}c.addGroup(h,S,0),h+=S}function w(M){let T=g,S=new Ue,_=new W,v=0,R=M===!0?e:t,E=M===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,u*E,0),p.push(0,E,0),m.push(.5,.5),g++;let P=g;for(let N=0;N<=s;N++){let C=N/s*l+o,U=Math.cos(C),F=Math.sin(C);_.x=R*F,_.y=u*E,_.z=R*U,f.push(_.x,_.y,_.z),p.push(0,E,0),S.x=U*.5+.5,S.y=F*.5*E+.5,m.push(S.x,S.y),g++}for(let N=0;N<s;N++){let L=T+N,C=P+N;M===!0?d.push(C,C+1,L):d.push(C+1,C,L),v+=3}c.addGroup(h,v,M===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){qe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(a-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Ue:new W);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new W,s=[],r=[],a=[],o=new W,l=new _t;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new W)}r[0]=new W,a[0]=new W;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(at(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(at(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ns=class extends wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Ue){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*f+this.aX,c=p*f+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oo=class extends Ns{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function eh(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,f){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+f)+(l-o)/f;p*=d,m*=d,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var xu=new W,yu=new W,lc=new eh,cc=new eh,hc=new eh,lo=class extends wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new W){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(yu.subVectors(s[0],s[1]).add(s[0]),c=yu);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(xu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=xu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),x=Math.pow(f.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(d),m);x<1e-4&&(x=1),g<1e-4&&(g=x),u<1e-4&&(u=x),lc.initNonuniformCatmullRom(c.x,f.x,p.x,d.x,g,x,u),cc.initNonuniformCatmullRom(c.y,f.y,p.y,d.y,g,x,u),hc.initNonuniformCatmullRom(c.z,f.z,p.z,d.z,g,x,u)}else this.curveType==="catmullrom"&&(lc.initCatmullRom(c.x,f.x,p.x,d.x,this.tension),cc.initCatmullRom(c.y,f.y,p.y,d.y,this.tension),hc.initCatmullRom(c.z,f.z,p.z,d.z,this.tension));return n.set(lc.calc(l),cc.calc(l),hc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new W().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function vu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pp(i,e){let t=1-i;return t*t*e}function Ip(i,e){return 2*(1-i)*i*e}function Lp(i,e){return i*i*e}function cr(i,e,t,n){return Pp(i,e)+Ip(i,t)+Lp(i,n)}function Dp(i,e){let t=1-i;return t*t*t*e}function Np(i,e){let t=1-i;return 3*t*t*i*e}function Up(i,e){return 3*(1-i)*i*i*e}function Fp(i,e){return i*i*i*e}function hr(i,e,t,n,s){return Dp(i,e)+Np(i,t)+Up(i,n)+Fp(i,s)}var Ar=class extends wn{constructor(e=new Ue,t=new Ue,n=new Ue,s=new Ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},co=class extends wn{constructor(e=new W,t=new W,n=new W,s=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y),hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tr=class extends wn{constructor(e=new Ue,t=new Ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ue){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ue){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ho=class extends wn{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new W){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends wn{constructor(e=new Ue,t=new Ue,n=new Ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ue){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends wn{constructor(e=new W,t=new W,n=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new W){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cr=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ue){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(vu(o,l.x,c.x,d.x,f.x),vu(o,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ue().fromArray(s))}return this}},Mu=Object.freeze({__proto__:null,ArcCurve:oo,CatmullRomCurve3:lo,CubicBezierCurve:Ar,CubicBezierCurve3:co,EllipseCurve:Ns,LineCurve:Tr,LineCurve3:ho,QuadraticBezierCurve:Er,QuadraticBezierCurve3:uo,SplineCurve:Cr}),fo=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mu[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Mu[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Rr=class extends fo{constructor(e){super(),this.type="Path",this.currentPoint=new Ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Tr(this.currentPoint.clone(),new Ue(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Er(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ar(this.currentPoint.clone(),new Ue(e,t),new Ue(n,s),new Ue(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ns(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends Rr{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Rr().fromJSON(s))}return this}};function Op(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=vd(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Vp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,f=l;for(let p=t;p<s;p+=t){let m=i[p],g=i[p+1];m<o&&(o=m),g<l&&(l=g),m>d&&(d=m),g>f&&(f=g)}c=Math.max(d-o,f-l),c=c!==0?32767/c:0}return Pr(r,a,t,o,l,c,0),a}function vd(i,e,t,n,s){let r;if(s===Qp(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Su(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Su(a/n|0,i[a],i[a+1],r);return r&&Fs(r,r.next)&&(Lr(r),r=r.next),r}function Ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Yp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zp(i,n,s,r):Bp(i)){e.push(l.i,i.i,c.i),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=kp(Ji(i),e),Pr(i,e,t,n,s,r,2)):a===2&&Gp(i,e,t,n,s,r):Pr(Ji(i),e,t,n,s,r,1);break}}}function Bp(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),f=Math.min(o,l,c),p=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=p&&g.y>=f&&g.y<=m&&ar(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,f=r.y,p=a.y,m=Math.min(o,l,c),g=Math.min(d,f,p),x=Math.max(o,l,c),u=Math.max(d,f,p),h=gc(m,g,e,t,n),y=gc(x,u,e,t,n),w=i.prevZ,M=i.nextZ;for(;w&&w.z>=h&&M&&M.z<=y;){if(w.x>=m&&w.x<=x&&w.y>=g&&w.y<=u&&w!==s&&w!==a&&ar(o,d,l,f,c,p,w.x,w.y)&&Dt(w.prev,w,w.next)>=0||(w=w.prevZ,M.x>=m&&M.x<=x&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&ar(o,d,l,f,c,p,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;w&&w.z>=h;){if(w.x>=m&&w.x<=x&&w.y>=g&&w.y<=u&&w!==s&&w!==a&&ar(o,d,l,f,c,p,w.x,w.y)&&Dt(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;M&&M.z<=y;){if(M.x>=m&&M.x<=x&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&ar(o,d,l,f,c,p,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function kp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Fs(n,s)&&Sd(n,t,t.next,s)&&Ir(n,s)&&Ir(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return Ji(t)}function Gp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Kp(a,o)){let l=bd(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Pr(a,e,t,n,s,r,0),Pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Vp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=vd(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jp(c))}s.sort(Hp);for(let r=0;r<s.length;r++)t=Wp(s[r],t);return t}function Hp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wp(i,e){let t=Xp(i,e);if(!t)return e;let n=bd(t,i);return Ji(n,n.next),Ji(t,t.next)}function Xp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Fs(i,t))return t;do{if(Fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Md(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Ir(t,i)&&(f<d||f===d&&(t.x>a.x||t.x===a.x&&qp(a,t)))&&(a=t,d=f)}t=t.next}while(t!==o);return a}function qp(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Yp(i,e,t,n){let s=i;do s.z===0&&(s.z=gc(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zp(s)}function Zp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function gc(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jp(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Md(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ar(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Md(i,e,t,n,s,r,a,o)}function Kp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!$p(i,e)&&(Ir(i,e)&&Ir(e,i)&&jp(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Fs(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function Sd(i,e,t,n){let s=Va(Dt(i,e,t)),r=Va(Dt(i,e,n)),a=Va(Dt(t,n,i)),o=Va(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Ga(i,t,e)||r===0&&Ga(i,n,e)||a===0&&Ga(t,i,n)||o===0&&Ga(t,e,n))}function Ga(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Va(i){return i>0?1:i<0?-1:0}function $p(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Sd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function jp(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bd(i,e){let t=_c(i.i,i.x,i.y),n=_c(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Su(i,e,t,n){let s=_c(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function _c(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qp(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var xc=class{static triangulate(e,t,n=2){return Op(e,t,n)}},Ss=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];bu(e),wu(n,e);let a=e.length;t.forEach(bu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wu(n,t[l]);let o=xc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function bu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wu(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ki=class i extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,p=t/l,m=[],g=[],x=[],u=[];for(let h=0;h<d;h++){let y=h*p-a;for(let w=0;w<c;w++){let M=w*f-r;g.push(M,-y,0),x.push(0,0,1),u.push(w/o),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let y=0;y<o;y++){let w=y+c*h,M=y+c*(h+1),T=y+1+c*(h+1),S=y+1+c*h;m.push(w,M,S),m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dr=class i extends fn{constructor(e=new Us([new Ue(0,.5),new Ue(-.5,-.5),new Ue(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(a,2));function c(d){let f=s.length/3,p=d.extractPoints(t),m=p.shape,g=p.holes;Ss.isClockWise(m)===!1&&(m=m.reverse());for(let u=0,h=g.length;u<h;u++){let y=g[u];Ss.isClockWise(y)===!0&&(g[u]=y.reverse())}let x=Ss.triangulateShape(m,g);for(let u=0,h=g.length;u<h;u++){let y=g[u];m=m.concat(y)}for(let u=0,h=m.length;u<h;u++){let y=m[u];s.push(y.x,y.y,0),r.push(0,0,1),a.push(y.x,y.y)}for(let u=0,h=x.length;u<h;u++){let y=x[u],w=y[0]+f,M=y[1]+f,T=y[2]+f;n.push(w,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return em(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function em(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Nr=class i extends fn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],f=new W,p=new W,m=[],g=[],x=[],u=[];for(let h=0;h<=n;h++){let y=[],w=h/n,M=a+w*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),_=0;h===0&&a===0?_=.5/t:h===n&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){let R=v/t,E=s+R*r;f.x=-S*Math.cos(E),f.y=T,f.z=S*Math.sin(E),g.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),u.push(R+_,1-w),y.push(c++)}d.push(y)}for(let h=0;h<n;h++)for(let y=0;y<t;y++){let w=d[h][y+1],M=d[h][y],T=d[h+1][y],S=d[h+1][y+1];(h!==0||a>0)&&m.push(w,M,S),(h!==n-1||l<Math.PI)&&m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(x,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ur=class i extends fn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],f=[],p=new W,m=new W,g=new W;for(let x=0;x<=n;x++){let u=a+x/n*o;for(let h=0;h<=s;h++){let y=h/s*r;m.x=(e+t*Math.cos(u))*Math.cos(y),m.y=(e+t*Math.cos(u))*Math.sin(y),m.z=t*Math.sin(u),c.push(m.x,m.y,m.z),p.x=e*Math.cos(y),p.y=e*Math.sin(y),g.subVectors(m,p).normalize(),d.push(g.x,g.y,g.z),f.push(h/s),f.push(x/n)}}for(let x=1;x<=n;x++)for(let u=1;u<=s;u++){let h=(s+1)*x+u-1,y=(s+1)*(x-1)+u-1,w=(s+1)*(x-1)+u,M=(s+1)*x+u;l.push(h,y,M),l.push(y,w,M)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Au(s))s.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Au(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function tm(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function th(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var wd={clone:ns,merge:nn},nm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,im=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nm,this.fragmentShader=im,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=tm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new rt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"v3":this.uniforms[n].value=new W().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new nt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},po=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Os=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gl,this.normalScale=new Ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fr=class extends Os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ue(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return at(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var mo=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},go=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ha(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},_o=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:fc,endingEnd:fc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case pc:r=e,o=2*t-n;break;case mc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case pc:a=e,l=2*n-t;break;case mc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),x=g*g,u=x*g,h=-p*u+2*p*x-p*g,y=(1+p)*u+(-1.5-2*p)*x+(-.5+p)*g+1,w=(-1-m)*u+(1.5+m)*x+.5*g,M=m*u-m*x;for(let T=0;T!==o;++T)r[T]=h*a[d+T]+y*a[c+T]+w*a[l+T]+M*a[f+T];return r}},xo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),f=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*d;return r}},yo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},vo=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(s-t),x=1-g;for(let u=0;u!==o;++u)r[u]=a[c+u]*x+a[l+u]*g;return r}let p=o*2,m=e-1;for(let g=0;g!==o;++g){let x=a[c+g],u=a[l+g],h=m*p+g*2,y=f[h],w=f[h+1],M=e*p+g*2,T=d[M],S=d[M+1],_=rm(n,t,y,T,s);r[g]=Ad(_,x,w,S,u)}return r}};function Ad(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function sm(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function rm(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ad(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=sm(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ha(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new _o(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new vo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break;case dc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return qe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return dc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ha(this.settings)&&(Tu(this.settings.inTangents,e),Tu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ha(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ze("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ze("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ze("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ze("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&qf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ze("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,m=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[p+g]||x!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ha(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Tu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Eu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=no;var Ri=class extends An{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ur;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Mo=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Mo.prototype.ValueTypeName="color";var So=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="number";var bo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)on.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new bo(this.times,this.values,this.getValueSize(),e)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends An{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ur;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var wo=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};wo.prototype.ValueTypeName="vector";var bs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Cu(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Cu(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Cu(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Ao=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Td=new Ao,Ii=class{constructor(e){this.manager=e!==void 0?e:Td,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},yc=class extends Error{constructor(e,t){super(e),this.response=t}},To=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&qe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=ai[e],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0,x=0,u=new ReadableStream({start(h){y();function y(){f.read().then(({done:w,value:M})=>{if(w)h.close();else{x+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:m});for(let S=0,_=d.length;S<_;S++){let v=d[S];v.onProgress&&v.onProgress(T)}h.enqueue(M),y()}},w=>{h.error(w)})}}});return new Response(u)}else throw new yc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{bs.add(`file:${e}`,c);let d=ai[e];delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let d=ai[e];if(d===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xs=new WeakMap,Eo=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=xs.get(a);f===void 0&&(f=[],xs.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Es("img");function l(){d(),t&&t(this);let f=xs.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onLoad&&m.onLoad(this)}xs.delete(this),r.manager.itemEnd(e)}function c(f){d(),s&&s(f),bs.remove(`image:${e}`);let p=xs.get(this)||[];for(let m=0;m<p.length;m++){let g=p[m];g.onError&&g.onError(f)}xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bs.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Br=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Zi,o=new To(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(d){s!==void 0?s(d):Ze(d);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new Zi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:En,e.wrapT=t.wrapT!==void 0?t.wrapT:En,e.magFilter=t.magFilter!==void 0?t.magFilter:Ut,e.minFilter=t.minFilter!==void 0?t.minFilter:Ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Yn),t.mipmapCount===1&&(e.minFilter=Ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},zr=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new tn,a=new Eo(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Bs=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new rt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new rt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},uc=new _t,Ru=new W,Pu=new W,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ue(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Ue(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ru.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ru),Pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Pu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Wa=new W,Xa=new on,Hn=new W,Vr=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wa,Xa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Wa,Xa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wa,Xa,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new W,Iu=new Ue,Lu=new Ue,en=class extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Iu,Lu),t.subVectors(Lu,Iu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var vc=class extends Gr{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Hr=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wr=class extends Vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Mc=class extends Gr{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Mc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ys=-90,vs=1,zs=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ys,vs,e,t);s.layers=this.layers,this.add(s);let r=new en(ys,vs,e,t);r.layers=this.layers,this.add(r);let a=new en(ys,vs,e,t);a.layers=this.layers,this.add(a);let o=new en(ys,vs,e,t);o.layers=this.layers,this.add(o);let l=new en(ys,vs,e,t);l.layers=this.layers,this.add(l);let c=new en(ys,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=x,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var nh="\\[\\]\\.:\\/",am=new RegExp("["+nh+"]","g"),ih="[^"+nh+"]",om="[^"+nh.replace("\\.","")+"]",lm=/((?:WC+[\/:])*)/.source.replace("WC",ih),cm=/(WCOD+)?/.source.replace("WCOD",om),hm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ih),um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ih),dm=new RegExp("^"+lm+cm+hm+um+"$"),fm=["material","materials","bones","map"],Sc=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(am,"")}static parseTrackName(e){let t=dm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){qe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ze("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ze("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ze("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ze("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ze("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ze("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ze("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ze("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Sc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Ty=new Float32Array(1);var Du=new _t,qr=class{constructor(e,t,n=0,s=1/0){this.ray=new Yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ze("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Du.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Du),this}intersectObject(e,t=!0,n=[]){return bc(e,this,n,t),n.sort(Nu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)bc(e[s],this,n,t);return n.sort(Nu),n}};function Nu(i,e){return i.distance-e.distance}function bc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)bc(r[a],e,t,!0)}}var ks=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=at(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(at(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var ch=class ch{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ch.prototype.isMatrix2=!0;var wc=ch;var Yr=class extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function sh(i,e,t,n){let s=pm(n);switch(t){case Hc:return i*e;case Fo:return i*e/s.components*s.byteLength;case Oo:return i*e/s.components*s.byteLength;case Ui:return i*e*2/s.components*s.byteLength;case Bo:return i*e*2/s.components*s.byteLength;case Wc:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case zo:return i*e*4/s.components*s.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Go:case Ho:return Math.max(i,16)*Math.max(e,8)/4;case ko:case Vo:return Math.max(i,8)*Math.max(e,8)/2;case Wo:case Xo:case Yo:case Zo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qo:case ta:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Qo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case tl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case sl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ll:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case hl:case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case fl:case pl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case na:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function pm(i){switch(i){case mn:case zc:return{byteLength:1,components:1};case Xs:case kc:case hn:return{byteLength:2,components:1};case No:case Uo:return{byteLength:2,components:4};case Fn:case Do:case cn:return{byteLength:4,components:1};case Gc:case Vc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Zd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function gm(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){let g=f[p],x=f[m];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,f[p]=x)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){let x=f[m];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var _m=`#ifdef USE_ALPHAHASH
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
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Dm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lg=`#ifdef USE_MORPHTARGETS
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
#endif`,Dg=`#ifdef USE_MORPHTARGETS
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
}`,L0=`#define LAMBERT
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
}`,D0=`#define LAMBERT
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
}`,ot={alphahash_fragment:_m,alphahash_pars_fragment:xm,alphamap_fragment:ym,alphamap_pars_fragment:vm,alphatest_fragment:Mm,alphatest_pars_fragment:Sm,aomap_fragment:bm,aomap_pars_fragment:wm,batching_pars_vertex:Am,batching_vertex:Tm,begin_vertex:Em,beginnormal_vertex:Cm,bsdfs:Rm,iridescence_fragment:Pm,bumpmap_pars_fragment:Im,clipping_planes_fragment:Lm,clipping_planes_pars_fragment:Dm,clipping_planes_pars_vertex:Nm,clipping_planes_vertex:Um,color_fragment:Fm,color_pars_fragment:Om,color_pars_vertex:Bm,color_vertex:zm,common:km,defaultnormal_vertex:Gm,displacementmap_pars_vertex:Vm,displacementmap_vertex:Hm,emissivemap_fragment:Wm,emissivemap_pars_fragment:Xm,colorspace_fragment:qm,colorspace_pars_fragment:Ym,envmap_fragment:Zm,envmap_common_pars_fragment:Jm,envmap_pars_fragment:Km,envmap_pars_vertex:$m,envmap_physical_pars_fragment:lg,envmap_vertex:jm,fog_vertex:Qm,fog_pars_vertex:eg,fog_fragment:tg,fog_pars_fragment:ng,gradientmap_pars_fragment:ig,lightmap_pars_fragment:sg,lights_lambert_fragment:rg,lights_lambert_pars_fragment:ag,lights_pars_begin:og,lights_toon_fragment:cg,lights_toon_pars_fragment:hg,lights_phong_fragment:ug,lights_phong_pars_fragment:dg,lights_physical_fragment:fg,lights_physical_pars_fragment:pg,lights_fragment_begin:mg,lights_fragment_maps:gg,lights_fragment_end:_g,lightprobes_pars_fragment:xg,logdepthbuf_fragment:yg,logdepthbuf_pars_fragment:vg,logdepthbuf_pars_vertex:Mg,logdepthbuf_vertex:Sg,map_fragment:bg,map_pars_fragment:wg,map_particle_fragment:Ag,map_particle_pars_fragment:Tg,metalnessmap_fragment:Eg,metalnessmap_pars_fragment:Cg,morphinstance_vertex:Rg,morphcolor_vertex:Pg,morphnormal_vertex:Ig,morphtarget_pars_vertex:Lg,morphtarget_vertex:Dg,normal_fragment_begin:Ng,normal_fragment_maps:Ug,normal_pars_fragment:Fg,normal_pars_vertex:Og,normal_vertex:Bg,normalmap_pars_fragment:zg,clearcoat_normal_fragment_begin:kg,clearcoat_normal_fragment_maps:Gg,clearcoat_pars_fragment:Vg,iridescence_pars_fragment:Hg,opaque_fragment:Wg,packing:Xg,premultiplied_alpha_fragment:qg,project_vertex:Yg,dithering_fragment:Zg,dithering_pars_fragment:Jg,roughnessmap_fragment:Kg,roughnessmap_pars_fragment:$g,shadowmap_pars_fragment:jg,shadowmap_pars_vertex:Qg,shadowmap_vertex:e0,shadowmask_pars_fragment:t0,skinbase_vertex:n0,skinning_pars_vertex:i0,skinning_vertex:s0,skinnormal_vertex:r0,specularmap_fragment:a0,specularmap_pars_fragment:o0,tonemapping_fragment:l0,tonemapping_pars_fragment:c0,transmission_fragment:h0,transmission_pars_fragment:u0,uv_pars_fragment:d0,uv_pars_vertex:f0,uv_vertex:p0,worldpos_vertex:m0,background_vert:g0,background_frag:_0,backgroundCube_vert:x0,backgroundCube_frag:y0,cube_vert:v0,cube_frag:M0,depth_vert:S0,depth_frag:b0,distance_vert:w0,distance_frag:A0,equirect_vert:T0,equirect_frag:E0,linedashed_vert:C0,linedashed_frag:R0,meshbasic_vert:P0,meshbasic_frag:I0,meshlambert_vert:L0,meshlambert_frag:D0,meshmatcap_vert:N0,meshmatcap_frag:U0,meshnormal_vert:F0,meshnormal_frag:O0,meshphong_vert:B0,meshphong_frag:z0,meshphysical_vert:k0,meshphysical_frag:G0,meshtoon_vert:V0,meshtoon_frag:H0,points_vert:W0,points_frag:X0,shadow_vert:q0,shadow_frag:Y0,sprite_vert:Z0,sprite_frag:J0},Fe={common:{diffuse:{value:new rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new rt(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:nn([Fe.common,Fe.specularmap,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)},specular:{value:new rt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:nn([Fe.common,Fe.envmap,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.roughnessmap,Fe.metalnessmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:nn([Fe.common,Fe.aomap,Fe.lightmap,Fe.emissivemap,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.gradientmap,Fe.fog,Fe.lights,{emissive:{value:new rt(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,Fe.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:nn([Fe.points,Fe.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:nn([Fe.common,Fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:nn([Fe.common,Fe.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:nn([Fe.common,Fe.bumpmap,Fe.normalmap,Fe.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:nn([Fe.sprite,Fe.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:nn([Fe.common,Fe.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:nn([Fe.lights,Fe.fog,{color:{value:new rt(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new nt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new rt(0)},specularColor:{value:new rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var _l={r:0,b:0,g:0},K0=new _t,Jd=new nt;Jd.set(-1,0,0,0,1,0,0,0,1);function $0(i,e,t,n,s,r){let a=new rt(0),o=s===!0?0:1,l,c,d=null,f=0,p=null;function m(y){let w=y.isScene===!0?y.background:null;if(w&&w.isTexture){let M=y.backgroundBlurriness>0;w=e.get(w,M)}return w}function g(y){let w=!1,M=m(y);M===null?u(a,o):M&&M.isColor&&(u(M,1),w=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(y,w){let M=m(w);M&&M.isCubeTexture?(c===void 0&&(c=new pn(new Ei(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ns(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(K0.makeRotationFromEuler(w.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Jd),c.material.toneMapped=dt.getTransfer(M.colorSpace)!==vt,(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pn(new Ki(2,2),new Xn({name:"BackgroundMaterial",uniforms:ns(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=dt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function u(y,w){y.getRGB(_l,th(i)),t.buffers.color.setClear(_l.r,_l.g,_l.b,w,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,w=1){a.set(y),o=w,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,u(a,o)},render:g,addToRenderList:x,dispose:h}}function j0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(P,N,L,C,U){let F=!1,O=f(P,C,L,N);r!==O&&(r=O,c(r.object)),F=m(P,C,L,U),F&&g(P,C,L,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(F||a)&&(a=!1,M(P,N,L,C),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(P){return i.bindVertexArray(P)}function d(P){return i.deleteVertexArray(P)}function f(P,N,L,C){let U=C.wireframe===!0,F=n[N.id];F===void 0&&(F={},n[N.id]=F);let O=P.isInstancedMesh===!0?P.id:0,q=F[O];q===void 0&&(q={},F[O]=q);let H=q[L.id];H===void 0&&(H={},q[L.id]=H);let j=H[U];return j===void 0&&(j=p(l()),H[U]=j),j}function p(P){let N=[],L=[],C=[];for(let U=0;U<t;U++)N[U]=0,L[U]=0,C[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:L,attributeDivisors:C,object:P,attributes:{},index:null}}function m(P,N,L,C){let U=r.attributes,F=N.attributes,O=0,q=L.getAttributes();for(let H in q)if(q[H].location>=0){let X=U[H],de=F[H];if(de===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),X===void 0||X.attribute!==de||de&&X.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==C}function g(P,N,L,C){let U={},F=N.attributes,O=0,q=L.getAttributes();for(let H in q)if(q[H].location>=0){let X=F[H];X===void 0&&(H==="instanceMatrix"&&P.instanceMatrix&&(X=P.instanceMatrix),H==="instanceColor"&&P.instanceColor&&(X=P.instanceColor));let de={};de.attribute=X,X&&X.data&&(de.data=X.data),U[H]=de,O++}r.attributes=U,r.attributesNum=O,r.index=C}function x(){let P=r.newAttributes;for(let N=0,L=P.length;N<L;N++)P[N]=0}function u(P){h(P,0)}function h(P,N){let L=r.newAttributes,C=r.enabledAttributes,U=r.attributeDivisors;L[P]=1,C[P]===0&&(i.enableVertexAttribArray(P),C[P]=1),U[P]!==N&&(i.vertexAttribDivisor(P,N),U[P]=N)}function y(){let P=r.newAttributes,N=r.enabledAttributes;for(let L=0,C=N.length;L<C;L++)N[L]!==P[L]&&(i.disableVertexAttribArray(L),N[L]=0)}function w(P,N,L,C,U,F,O){O===!0?i.vertexAttribIPointer(P,N,L,U,F):i.vertexAttribPointer(P,N,L,C,U,F)}function M(P,N,L,C){x();let U=C.attributes,F=L.getAttributes(),O=N.defaultAttributeValues;for(let q in F){let H=F[q];if(H.location>=0){let j=U[q];if(j===void 0&&(q==="instanceMatrix"&&P.instanceMatrix&&(j=P.instanceMatrix),q==="instanceColor"&&P.instanceColor&&(j=P.instanceColor)),j!==void 0){let X=j.normalized,de=j.itemSize,fe=e.get(j);if(fe===void 0)continue;let $=fe.buffer,G=fe.type,V=fe.bytesPerElement,Z=G===i.INT||G===i.UNSIGNED_INT||j.gpuType===Do;if(j.isInterleavedBufferAttribute){let ee=j.data,ie=ee.isInterleavedBuffer===!0?ee.stride:ee.itemSize,Ie=j.offset;if(ee.isInstancedInterleavedBuffer||ee.isInstancedBufferAttribute){for(let ye=0;ye<H.locationSize;ye++)h(H.location+ye,ee.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ye=0;ye<H.locationSize;ye++)u(H.location+ye);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ye=0;ye<H.locationSize;ye++)w(H.location+ye,de/H.locationSize,G,X,ie*V,(Ie+de/H.locationSize*ye)*V,Z)}else{if(j.isInstancedBufferAttribute){for(let ee=0;ee<H.locationSize;ee++)h(H.location+ee,j.meshPerAttribute);P.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let ee=0;ee<H.locationSize;ee++)u(H.location+ee);i.bindBuffer(i.ARRAY_BUFFER,$);for(let ee=0;ee<H.locationSize;ee++)w(H.location+ee,de/H.locationSize,G,X,de*V,de/H.locationSize*ee*V,Z)}}else if(O!==void 0){let X=O[q];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(H.location,X);break;case 3:i.vertexAttrib3fv(H.location,X);break;case 4:i.vertexAttrib4fv(H.location,X);break;default:i.vertexAttrib1fv(H.location,X)}}}}y()}function T(){R();for(let P in n){let N=n[P];for(let L in N){let C=N[L];for(let U in C){let F=C[U];for(let O in F)d(F[O].object),delete F[O];delete C[U]}}delete n[P]}}function S(P){if(n[P.id]===void 0)return;let N=n[P.id];for(let L in N){let C=N[L];for(let U in C){let F=C[U];for(let O in F)d(F[O].object),delete F[O];delete C[U]}}delete n[P.id]}function _(P){for(let N in n){let L=n[N];for(let C in L){let U=L[C];if(U[P.id]===void 0)continue;let F=U[P.id];for(let O in F)d(F[O].object),delete F[O];delete U[P.id]}}}function v(P){for(let N in n){let L=n[N],C=P.isInstancedMesh===!0?P.id:0,U=L[C];if(U!==void 0){for(let F in U){let O=U[F];for(let q in O)d(O[q].object),delete O[q];delete U[F]}delete L[C],Object.keys(L).length===0&&delete n[N]}}}function R(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:E,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:u,disableUnusedAttributes:y}}function Q0(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let p=0;for(let m=0;m<d;m++)p+=c[m];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function e_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==On&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let v=_===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==mn&&_!==cn&&!v&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(qe("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&qe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&qe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:y,maxVaryings:w,maxFragmentUniforms:M,maxSamples:T,samples:S}}function t_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new an,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,x=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?d(null):c();else{let y=r?0:n,w=y*4,M=h.clippingState||null;l.value=M,M=d(g,p,w,m);for(let T=0;T!==w;++T)M[T]=t[T];h.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,g){let x=f!==null?f.length:0,u=null;if(x!==0){if(u=l.value,g!==!0||u===null){let h=m+x*4,y=p.matrixWorldInverse;o.getNormalMatrix(y),(u===null||u.length<h)&&(u=new Float32Array(h));for(let w=0,M=m;w!==x;++w,M+=4)a.copy(f[w]).applyMatrix4(y,o),a.normal.toArray(u,M),u[M+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,u}}var ra=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:$i});r.uniforms.tEquirect.value=t;let a=new pn(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Ut),new zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Ed=256,n_=3,i_=20,Kd=256,$d=16,s_=3,r_=new W,a_=new rt,yl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new pn(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=r_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,p=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,x=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(e.background=l.getClearColor(a_));let u=new zs(n,s,d);return u.position.copy(o),u.update(l,e),l.autoClear=f,l.autoClearColor=p,l.autoClearDepth=m,l.autoClearStencil=g,e.background=x,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Ed,$c(e))}_fromTexture(e,t){e.mapping===Qi||e.mapping===Hs?this._setSize(e.image.length===0?Ed:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Cd(e,!1,!1),n=Math.log2(e)-n_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Cd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qi||e.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pd()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Rd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=o_(),this._integrationMaterial=l_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/$d);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-s_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Kd*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=c_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Cd(i,e,t){return new ra(i,{minFilter:Yn,generateMipmaps:e,type:hn,colorSpace:qi,depthBuffer:t})}function aa(i,e,t){return new Xn({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:ln,blending:$i,depthTest:!1,depthWrite:!1})}function o_(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kd}u

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
	`)}function l_(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$d}},`

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
	`)}function c_(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

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
	`)}function Rd(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Pd(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function h_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?a(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===Ws||m===Io)if(e.has(p)){let g=e.get(p).texture;return o(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let x=new ra(g.height);return x.fromEquirectangularTexture(i,p),e.set(p,x),p.addEventListener("dispose",c),o(x.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,g=m===Ws||m===Io,x=m===Qi||m===Hs;if(g||x){let u=t.get(p),h=u!==void 0?u.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return n===null&&(n=new yl(i)),u=g?n.fromEquirectangular(p,u):n.fromCubemap(p,u),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),u.texture;if(u!==void 0)return u.texture;{let y=p.image;return g&&y&&y.height>0||x&&y&&l(y)?(n===null&&(n=new yl(i)),u=g?n.fromEquirectangular(p):n.fromCubemap(p),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),p.addEventListener("dispose",d),u.texture):null}}}return p}function o(p,m){return m===Ws?p.mapping=Qi:m===Io&&(p.mapping=Hs),p}function l(p){let m=0,g=6;for(let x=0;x<g;x++)p[x]!==void 0&&m++;return m===g}function c(p){let m=p.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function u_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function d_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let u in g.attributes)e.remove(g.attributes[u]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let x=r.get(g);x&&(e.remove(x),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),t.memory.geometries++),x}function d(g){let x=g.attributes;for(let u in x)e.update(x[u],i.ARRAY_BUFFER)}function f(g){let x=g.index,u=g.attributes.position,h=0;if(u===void 0)return;let y=x!==null?x.array.length:u.array.length/3-1,w=u.count>=65535?_r:gr,M=new w(Math.ceil(y/3)*6,1),T=M.array;if(x!==null){let _=x.array;h=x.version;for(let v=0,R=0;v<y;v+=3){let E=_[v+0],P=_[v+1],N=_[v+2];T[R++]=E,T[R++]=P,T[R++]=P,T[R++]=N,T[R++]=N,T[R++]=E}}else{h=u.version;for(let _=0,v=0;_<y;_+=3){let R=_+0,E=_+1,P=_+2;T[v++]=R,T[v++]=E,T[v++]=E,T[v++]=P,T[v++]=P,T[v++]=R}}M.version=h;let S=r.get(g);S&&e.remove(S),r.set(g,M)}function p(g){let x=r.get(g);if(x){let u=g.index;u!==null&&x.version<u.version&&f(g)}else f(g);return r.get(g)}function m(){for(let g in s){let x=s[g].deref();x!==void 0&&l(x)}}return{get:c,update:d,getWireframeAttribute:p,dispose:m}}function f_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*a,m),t.update(p,n,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let x=0;for(let u=0;u<m;u++)x+=p[u];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function p_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ze("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function m_(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==f){let R=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",R)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],w=0;m===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let M=o.attributes.position.count*w,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*f),_=new fr(S,M,T,f);_.type=cn,_.needsUpdate=!0;let v=w*4;for(let E=0;E<f;E++){let P=u[E],N=h[E],L=y[E],C=M*T*4*E;for(let U=0;U<P.count;U++){let F=U*v;m===!0&&(s.fromBufferAttribute(P,U),S[C+F+0]=s.x,S[C+F+1]=s.y,S[C+F+2]=s.z,S[C+F+3]=0),g===!0&&(s.fromBufferAttribute(N,U),S[C+F+4]=s.x,S[C+F+5]=s.y,S[C+F+6]=s.z,S[C+F+7]=0),x===!0&&(s.fromBufferAttribute(L,U),S[C+F+8]=s.x,S[C+F+9]=s.y,S[C+F+10]=s.z,S[C+F+11]=L.itemSize===4?s.w:1)}}p={count:f,texture:_,size:new Ue(M,T)},n.set(o,p),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function g_(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var __={[Lc]:"LINEAR_TONE_MAPPING",[Dc]:"REINHARD_TONE_MAPPING",[Nc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Fc]:"AGX_TONE_MAPPING",[Oc]:"NEUTRAL_TONE_MAPPING",[Uc]:"CUSTOM_TONE_MAPPING"};function x_(i,e,t,n,s,r){let a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new fn;d.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let f=new po({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new pn(d,f),m=new Wr(-1,1,1,-1,0,1),g=null,x=null,u=!1,h,y=null,w=[],M=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<w.length;_++){let v=w[_];v.setSize&&v.setSize(T,S)}},this.setEffects=function(T){w=T,M=w.length>0&&w[0].isRenderPass===!0;let S=a.width,_=a.height;w.length>0&&o===null&&(o=new bn(S,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&w.some(R=>R.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new ui(S,_),r===!0&&(c.format=di,c.type=es)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let R=0;R<w.length;R++){let E=w[R];E.setSize&&E.setSize(S,_),v&&E.needsDepthTexture===!0&&E.setDepthTexture&&E.setDepthTexture(c)}},this.begin=function(T,S){if(u||T.toneMapping===qn&&w.length===0)return!1;if(y=S,S!==null){let _=S.width,v=S.height;(a.width!==_||a.height!==v)&&this.setSize(_,v)}return M===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(T,S){T.toneMapping=h,u=!0;let _=a,v=o;for(let R=0;R<w.length;R++){let E=w[R];E.enabled!==!1&&(E.render(T,v,_,S),E.needsSwap!==!1&&(_=v,v=v===o?l:o))}if(g!==T.outputColorSpace||x!==T.toneMapping){g=T.outputColorSpace,x=T.toneMapping,f.defines={},dt.getTransfer(g)===vt&&(f.defines.SRGB_TRANSFER="");let R=__[x];R&&(f.defines[R]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(p,m),y=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var jd=new tn,Qd=new ui(1,1),ef=new Sr(1),tf=new fr,nf=new ro,sf=new vr,Id=[],Ld=[],Dd=new Float32Array(16),Nd=new Float32Array(9),Ud=new Float32Array(4);function Ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Id[s];if(r===void 0&&(r=new Float32Array(s),Id[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function kt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Gt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ml(i,e){let t=Ld[e];t===void 0&&(t=new Int32Array(e),Ld[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function y_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function v_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2fv(this.addr,e),Gt(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kt(t,e))return;i.uniform3fv(this.addr,e),Gt(t,e)}}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4fv(this.addr,e),Gt(t,e)}}function b_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Ud.set(n),i.uniformMatrix2fv(this.addr,!1,Ud),Gt(t,n)}}function w_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Nd.set(n),i.uniformMatrix3fv(this.addr,!1,Nd),Gt(t,n)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(kt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Gt(t,e)}else{if(kt(t,n))return;Dd.set(n),i.uniformMatrix4fv(this.addr,!1,Dd),Gt(t,n)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2iv(this.addr,e),Gt(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3iv(this.addr,e),Gt(t,e)}}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4iv(this.addr,e),Gt(t,e)}}function P_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kt(t,e))return;i.uniform2uiv(this.addr,e),Gt(t,e)}}function L_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kt(t,e))return;i.uniform3uiv(this.addr,e),Gt(t,e)}}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kt(t,e))return;i.uniform4uiv(this.addr,e),Gt(t,e)}}function Sl(i){return i.version===0&&(i.compareFunction=Yc,i.needsUpdate=!0),i}function N_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Sl(Qd):r=jd,t.setTexture2D(e||r,s)}function U_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||nf,s)}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Sl(ef):r=sf,t.setTextureCube(e||r,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||tf,s)}function B_(i){switch(i){case 5126:return y_;case 35664:return v_;case 35665:return M_;case 35666:return S_;case 35674:return b_;case 35675:return w_;case 35676:return A_;case 5124:case 35670:return T_;case 35667:case 35671:return E_;case 35668:case 35672:return C_;case 35669:case 35673:return R_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return N_;case 35679:case 36299:case 36307:return U_;case 35680:case 36300:case 36308:case 36293:return F_;case 36289:case 36303:case 36311:case 36292:return O_}}function z_(i,e){i.uniform1fv(this.addr,e)}function k_(i,e){let t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function G_(i,e){let t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function V_(i,e){let t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function H_(i,e){let t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function W_(i,e){let t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function X_(i,e){let t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function q_(i,e){i.uniform1iv(this.addr,e)}function Y_(i,e){i.uniform2iv(this.addr,e)}function Z_(i,e){i.uniform3iv(this.addr,e)}function J_(i,e){i.uniform4iv(this.addr,e)}function K_(i,e){i.uniform1uiv(this.addr,e)}function $_(i,e){i.uniform2uiv(this.addr,e)}function j_(i,e){i.uniform3uiv(this.addr,e)}function Q_(i,e){i.uniform4uiv(this.addr,e)}function ex(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Sl(Qd):a=jd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function tx(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||nf,r[a])}function nx(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Sl(ef):a=sf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ix(i,e,t){let n=this.cache,s=e.length,r=Ml(t,s);kt(n,r)||(i.uniform1iv(this.addr,r),Gt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||tf,r[a])}function sx(i){switch(i){case 5126:return z_;case 35664:return k_;case 35665:return G_;case 35666:return V_;case 35674:return H_;case 35675:return W_;case 35676:return X_;case 5124:case 35670:return q_;case 35667:case 35671:return Y_;case 35668:case 35672:return Z_;case 35669:case 35673:return J_;case 5125:return K_;case 36294:return $_;case 36295:return j_;case 36296:return Q_;case 35678:case 36198:case 36298:case 36306:case 35682:return ex;case 35679:case 36299:case 36307:return tx;case 35680:case 36300:case 36308:case 36293:return nx;case 36289:case 36303:case 36311:case 36292:return ix}}var dh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=B_(t.type)}},fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=sx(t.type)}},ph=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},hh=/(\w+)(\])?(\[|\.)?/g;function Fd(i,e){i.seq.push(e),i.map[e.id]=e}function rx(i,e,t){let n=i.name,s=n.length;for(hh.lastIndex=0;;){let r=hh.exec(n),a=hh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fd(t,c===void 0?new dh(o,i,e):new fh(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new ph(o),Fd(t,f)),t=f}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);rx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Od(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ax=37297,ox=0;function lx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Bd=new nt;function cx(i){dt._getMatrix(Bd,dt.workingColorSpace,i);let e=`mat3( ${Bd.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function zd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+lx(i.getShaderSource(e),o)}else return r}function hx(i,e){let t=cx(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var ux={[Lc]:"Linear",[Dc]:"Reinhard",[Nc]:"Cineon",[Jr]:"ACESFilmic",[Fc]:"AgX",[Oc]:"Neutral",[Uc]:"Custom"};function dx(i,e){let t=ux[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var xl=new W;function fx(){dt.getLuminanceCoefficients(xl);let i=xl.x.toFixed(4),e=xl.y.toFixed(4),t=xl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function px(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function mx(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function gx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sa(i){return i!==""}function kd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Gd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var _x=/^[ \t]*#include +<([\w\d./]+)>/gm;function mh(i){return i.replace(_x,xx)}function xx(i,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return mh(t)}var yx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vd(i){return i.replace(yx,vx)}function vx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Hd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Mx={[Zr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function Sx(i){return Mx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var bx={[Hs]:"ENVMAP_MODE_REFRACTION"};function wx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":bx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ax={[Ic]:"ENVMAP_BLENDING_MULTIPLY",[td]:"ENVMAP_BLENDING_MIX",[nd]:"ENVMAP_BLENDING_ADD"};function Tx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ax[i.combine]||"ENVMAP_BLENDING_NONE"}function Ex(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Sx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=wx(t),f=Tx(t),p=px(t),m=mx(r),g=s.createProgram(),x,u,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sa).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sa).join(`
`),u.length>0&&(u+=`
`)):(x=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),u=[Hd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?ot.tonemapping_pars_fragment:"",t.toneMapping!==qn?dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,hx("linearToOutputTexel",t.outputColorSpace),fx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=mh(a),a=kd(a,t),a=Gd(a,t),o=mh(o),o=kd(o,t),o=Gd(o,t),a=Vd(a),o=Vd(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",t.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=h+x+a,w=h+u+o,M=Od(s,s.VERTEX_SHADER,y),T=Od(s,s.FRAGMENT_SHADER,w);s.attachShader(g,M),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(g)||"",N=s.getShaderInfoLog(M)||"",L=s.getShaderInfoLog(T)||"",C=P.trim(),U=N.trim(),F=L.trim(),O=!0,q=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{let H=zd(s,M,"vertex"),j=zd(s,T,"fragment");Ze("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+C+`
`+H+`
`+j)}else C!==""?qe("WebGLProgram: Program Info Log:",C):(U===""||F==="")&&(q=!1);q&&(E.diagnostics={runnable:O,programLog:C,vertexShader:{log:U,prefix:x},fragmentShader:{log:F,prefix:u}})}s.deleteShader(M),s.deleteShader(T),_=new qs(s,g),v=gx(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(g,ax)),R},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ox++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var Cx=0,gh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new _h(e),t.set(e,n)),n}},_h=class{constructor(e){this.id=Cx++,this.code=e,this.usedTimes=0}};function Rx(i){return i===Ui||i===ta||i===na}function Px(i,e,t,n,s,r){let a=new Is,o=new gh,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,v,R,E,P,N){let L=E.fog,C=P.geometry,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?E.environment:null,F=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||U,F),q=p[_.type],H=n.precision;_.precision!==null&&(H=n.getMaxPrecision(_.precision),H!==_.precision&&qe("WebGLProgram.getParameters:",_.precision,"not supported, using",H,"instead."));let j=C.morphAttributes.position||C.morphAttributes.normal||C.morphAttributes.color,X=j!==void 0?j.length:0,de=0;C.morphAttributes.position!==void 0&&(de=1),C.morphAttributes.normal!==void 0&&(de=2),C.morphAttributes.color!==void 0&&(de=3);let fe,$,G,V;if(q){let Se=Jn[q];fe=Se.vertexShader,$=Se.fragmentShader}else{fe=_.vertexShader,$=_.fragmentShader;let Se=o.getVertexShaderStage(_),it=o.getFragmentShaderStage(_);o.update(_,Se,it),G=Se.id,V=it.id}let Z=i.getRenderTarget(),ee=i.state.buffers.depth.getReversed(),ie=P.isInstancedMesh===!0,Ie=P.isBatchedMesh===!0,ye=!!_.map,ce=!!_.matcap,le=!!O,ae=le&&O.isPMREMTexture===!0,pe=!!_.aoMap,Ce=!!_.lightMap,_e=!!_.bumpMap&&_.wireframe===!1,ge=!!_.normalMap,De=!!_.displacementMap,Oe=!!_.emissiveMap,ke=!!_.metalnessMap,$e=!!_.roughnessMap,mt=_.anisotropy>0,k=_.clearcoat>0,Ht=_.diffuseRoughness>0,gt=_.dispersion>0,ft=_.retroreflectivity>0,Le=_.iridescence>0,Pt=_.sheen>0,Xe=_.transmission>0,Ye=mt&&!!_.anisotropyMap,D=k&&!!_.clearcoatMap,b=k&&!!_.clearcoatNormalMap,K=k&&!!_.clearcoatRoughnessMap,me=Ht&&!!_.diffuseRoughnessMap,he=Le&&!!_.iridescenceMap,be=Le&&!!_.iridescenceThicknessMap,Re=Pt&&!!_.sheenColorMap,re=Pt&&!!_.sheenRoughnessMap,se=!!_.specularMap,Te=!!_.specularColorMap,B=!!_.specularIntensityMap,oe=Xe&&!!_.transmissionMap,ne=Xe&&!!_.thicknessMap,ve=!!_.gradientMap,Me=!!_.alphaMap,Ae=_.alphaTest>0,Ve=!!_.alphaHash,je=!!_.extensions,xe=qn;_.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(xe=i.toneMapping);let We=ae?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,Je={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:fe,fragmentShader:$,defines:_.defines,customVertexShaderID:G,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:H,batching:Ie,batchingColor:Ie&&P._colorsTexture!==null,instancing:ie,instancingColor:ie&&P.instanceColor!==null,instancingMorph:ie&&P.morphTexture!==null,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:dt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ye,matcap:ce,envMap:le,envMapMode:le&&O.mapping,envMapPMREM:ae,envMapMaxLod:ae?We.length-1:null,envMapSize:ae?We[0].width:null,aoMap:pe,lightMap:Ce,bumpMap:_e,normalMap:ge,displacementMap:De,emissiveMap:Oe,normalMapObjectSpace:ge&&_.normalMapType===rd,normalMapTangentSpace:ge&&_.normalMapType===gl,packedNormalMap:ge&&_.normalMapType===gl&&Rx(_.normalMap.format),metalnessMap:ke,roughnessMap:$e,anisotropy:mt,anisotropyMap:Ye,clearcoat:k,clearcoatMap:D,clearcoatNormalMap:b,clearcoatRoughnessMap:K,diffuseRoughness:Ht,diffuseRoughnessMap:me,dispersion:gt,retroreflection:ft,iridescence:Le,iridescenceMap:he,iridescenceThicknessMap:be,sheen:Pt,sheenColorMap:Re,sheenRoughnessMap:re,specularMap:se,specularColorMap:Te,specularIntensityMap:B,transmission:Xe,transmissionMap:oe,thicknessMap:ne,gradientMap:ve,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:Me,alphaTest:Ae,alphaHash:Ve,combine:_.combine,mapUv:ye&&m(_.map.channel),aoMapUv:pe&&m(_.aoMap.channel),lightMapUv:Ce&&m(_.lightMap.channel),bumpMapUv:_e&&m(_.bumpMap.channel),normalMapUv:ge&&m(_.normalMap.channel),displacementMapUv:De&&m(_.displacementMap.channel),emissiveMapUv:Oe&&m(_.emissiveMap.channel),metalnessMapUv:ke&&m(_.metalnessMap.channel),roughnessMapUv:$e&&m(_.roughnessMap.channel),anisotropyMapUv:Ye&&m(_.anisotropyMap.channel),clearcoatMapUv:D&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:b&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:re&&m(_.sheenRoughnessMap.channel),specularMapUv:se&&m(_.specularMap.channel),specularColorMapUv:Te&&m(_.specularColorMap.channel),specularIntensityMapUv:B&&m(_.specularIntensityMap.channel),transmissionMapUv:oe&&m(_.transmissionMap.channel),thicknessMapUv:ne&&m(_.thicknessMap.channel),alphaMapUv:Me&&m(_.alphaMap.channel),vertexTangents:!!C.attributes.tangent&&(ge||mt),vertexNormals:!!C.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!C.attributes.color&&C.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!C.attributes.uv&&(ye||Me),fog:!!L,useFog:_.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||C.attributes.normal===void 0&&ge===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ee,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:C.attributes.position!==void 0,morphTargets:C.morphAttributes.position!==void 0,morphNormals:C.morphAttributes.normal!==void 0,morphColors:C.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:de,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:N.filter(Se=>Se.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:ye&&_.map.isVideoTexture===!0&&dt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&dt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||Ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Je.vertexUv1s=l.has(1),Je.vertexUv2s=l.has(2),Je.vertexUv3s=l.has(3),l.clear(),Je}function x(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)v.push(R),v.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(u(v,_),h(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function u(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function h(_,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function y(_){let v=p[_.type],R;if(v){let E=Jn[v];R=wd.clone(E.uniforms)}else R=_.uniforms;return R}function w(_,v){let R=d.get(v);return R!==void 0?++R.usedTimes:(R=new Ex(i,v,_,s),c.push(R),d.set(v,R)),R}function M(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:y,acquireProgram:w,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:S}}function Ix(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Lx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Wd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,g,x,u,h){let y=i[e];return y===void 0?(y={id:p.id,object:p,geometry:m,material:g,materialVariant:a(p),groupOrder:x,renderOrder:p.renderOrder,z:u,group:h},i[e]=y):(y.id=p.id,y.object=p,y.geometry=m,y.material=g,y.materialVariant=a(p),y.groupOrder=x,y.renderOrder=p.renderOrder,y.z=u,y.group=h),e++,y}function l(p,m,g,x,u,h,y){y.reversedDepth===!0&&(u=-u);let w=o(p,m,g,x,u,h);g.transmission>0?n.push(w):g.transparent===!0?s.push(w):t.push(w)}function c(p,m,g,x,u,h){let y=o(p,m,g,x,u,h);g.transmission>0?n.unshift(y):g.transparent===!0?s.unshift(y):t.unshift(y)}function d(p,m){t.length>1&&t.sort(p||Lx),n.length>1&&n.sort(m||Wd),s.length>1&&s.sort(m||Wd)}function f(){for(let p=e,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function Dx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Xd,i.set(n,[a])):s>=r.length?(a=new Xd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Nx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new W,color:new rt};break;case"SpotLight":t={position:new W,direction:new W,color:new rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new rt,groundColor:new rt};break;case"RectAreaLight":t={color:new rt,position:new W,halfWidth:new W,halfHeight:new W};break}return i[e.id]=t,t}}}function Ux(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Fx=0;function Ox(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Bx(i){let e=new Nx,t=Ux(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new W);let s=new W,r=new _t,a=new _t;function o(c){let d=0,f=0,p=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let m=0,g=0,x=0,u=0,h=0,y=0,w=0,M=0,T=0,S=0,_=0,v=0,R=0,E=0;c.sort(Ox);for(let N=0,L=c.length;N<L;N++){let C=c[N],U=C.color,F=C.intensity,O=C.distance,q=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===Ui?q=C.shadow.map.texture:q=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=U.r*F,f+=U.g*F,p+=U.b*F;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],F);E++}else if(C.isSunLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,X=t.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=q;let de=j.getViewportCount();for(let fe=0;fe<de;fe++)n.sunShadowMatrix[x+fe]=j.getMatrix(fe),n.sunShadowCascade[x+fe]=j._cascadeData[fe];x+=de,g++}n.sun[m]=H,m++}else if(C.isDirectionalLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let j=C.shadow,X=t.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=q,n.directionalShadowMatrix[u]=C.shadow.matrix,T++}n.directional[u]=H,u++}else if(C.isSpotLight){let H=e.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(U).multiplyScalar(F),H.distance=O,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[y]=H;let j=C.shadow;if(C.map&&(n.spotLightMap[v]=C.map,v++,j.updateMatrices(C),C.castShadow&&R++),n.spotLightMatrix[y]=j.matrix,C.castShadow){let X=t.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,n.spotShadow[y]=X,n.spotShadowMap[y]=q,_++}y++}else if(C.isRectAreaLight){let H=e.get(C);H.color.copy(U).multiplyScalar(F),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[w]=H,w++}else if(C.isPointLight){let H=e.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){let j=C.shadow,X=t.get(C);X.shadowIntensity=j.intensity,X.shadowBias=j.bias,X.shadowNormalBias=j.normalBias,X.shadowRadius=j.radius,X.shadowMapSize=j.mapSize,X.shadowCameraNear=j.camera.near,X.shadowCameraFar=j.camera.far,n.pointShadow[h]=X,n.pointShadowMap[h]=q,n.pointShadowMatrix[h]=C.shadow.matrix,S++}n.point[h]=H,h++}else if(C.isHemisphereLight){let H=e.get(C);H.skyColor.copy(C.color).multiplyScalar(F),H.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[M]=H,M++}}w>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Fe.LTC_FLOAT_1,n.rectAreaLTC2=Fe.LTC_FLOAT_2):(n.rectAreaLTC1=Fe.LTC_HALF_1,n.rectAreaLTC2=Fe.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let P=n.hash;(P.sunLength!==m||P.directionalLength!==u||P.pointLength!==h||P.spotLength!==y||P.rectAreaLength!==w||P.hemiLength!==M||P.numSunShadows!==g||P.numDirectionalShadows!==T||P.numPointShadows!==S||P.numSpotShadows!==_||P.numSpotMaps!==v||P.numLightProbes!==E)&&(n.sun.length=m,n.directional.length=u,n.spot.length=y,n.rectArea.length=w,n.point.length=h,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-R,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=E,P.sunLength=m,P.directionalLength=u,P.pointLength=h,P.spotLength=y,P.rectAreaLength=w,P.hemiLength=M,P.numSunShadows=g,P.numDirectionalShadows=T,P.numPointShadows=S,P.numSpotShadows=_,P.numSpotMaps=v,P.numLightProbes=E,n.version=Fx++)}function l(c,d){let f=0,p=0,m=0,g=0,x=0,u=0,h=d.matrixWorldInverse;for(let y=0,w=c.length;y<w;y++){let M=c[y];if(M.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),f++}else if(M.isDirectionalLight){let T=n.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),p++}else if(M.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(M.isRectAreaLight){let T=n.rectArea[x];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(M.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){let T=n.hemi[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),u++}}}return{setup:o,setupView:l,state:n}}function qd(i){let e=new Bx(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function c(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function zx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new qd(i),e.set(s,[o])):r>=a.length?(o=new qd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var kx=`void main() {
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
}`,Vx=[new W(1,0,0),new W(-1,0,0),new W(0,1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1)],Hx=[new W(0,-1,0),new W(0,-1,0),new W(0,0,1),new W(0,0,-1),new W(0,-1,0),new W(0,-1,0)],Yd=new _t,ia=new W,uh=new W;function Wx(i,e,t){let n=new Ti,s=new Ue,r=new Ue,a=new Rt,o=new mo,l=new go,c={},d=t.maxTextureSize,f={[Ni]:ln,[ln]:Ni,[Rn]:Rn},p=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:kx,fragmentShader:Gx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new pn(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let h=this.type;this.render=function(S,_,v){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;this.type===Po&&(qe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let R=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),N=i.state;N.setBlending($i),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let L=h!==this.type;L&&_.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(U=>U.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,U=S.length;C<U;C++){let F=S[C],O=F.shadow;if(O===void 0){qe("WebGLShadowMap:",F,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let q=O.getFrameExtents();s.multiply(q),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/q.x),s.x=r.x*q.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/q.y),s.y=r.y*q.y,O.mapSize.y=r.y));let H=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=H,O.map===null||L===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Gs){if(F.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bn(s.x,s.y,{format:Ui,type:hn,minFilter:Ut,magFilter:Ut,generateMipmaps:!1}),O.map.texture.name=F.name+".shadowMap",O.map.depthTexture=new ui(s.x,s.y,cn),O.map.depthTexture.name=F.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt}else F.isPointLight?(O.map=new ra(s.x),O.map.depthTexture=new Sr(s.x,Fn)):(O.map=new bn(s.x,s.y),O.map.depthTexture=new ui(s.x,s.y,Fn)),O.map.depthTexture.name=F.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Zr?(O.map.depthTexture.compareFunction=H?qc:Xc,O.map.depthTexture.minFilter=Ut,O.map.depthTexture.magFilter=Ut):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let j=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();F.isPointLight!==!0&&O.updateMatrices(F,v);let X=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:v.layers;for(let de=0;de<j;de++){let fe=O.getCamera(de);if(F.isPointLight){let $=O.camera,G=O.matrix,V=F.distance||$.far;V!==$.far&&($.far=V,$.updateProjectionMatrix()),ia.setFromMatrixPosition(F.matrixWorld),$.position.copy(ia),uh.copy($.position),uh.add(Vx[de]),$.up.copy(Hx[de]),$.lookAt(uh),$.updateMatrixWorld(),G.makeTranslation(-ia.x,-ia.y,-ia.z),Yd.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Yd,$.coordinateSystem,$.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,de),i.clear();else{de===0&&(i.setRenderTarget(O.map),i.clear());let $=O.getViewport(de);a.set(r.x*$.x,r.y*$.y,r.x*$.z,r.y*$.w),N.viewport(a)}n=O.getFrustum(de),M(_,v,fe,F,X,this.type)}O.isPointLightShadow!==!0&&this.type===Gs&&y(O,v),O.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(R,E,P)};function y(S,_){let v=e.update(x);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new bn(s.x,s.y,{format:Ui,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,v,p,x,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,v,m,x,null)}function w(S,_,v,R){let E=null,P=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)E=P;else if(E=v.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let N=E.uuid,L=_.uuid,C=c[N];C===void 0&&(C={},c[N]=C);let U=C[L];U===void 0&&(U=E.clone(),C[L]=U,_.addEventListener("dispose",T)),E=U}if(E.visible=_.visible,E.wireframe=_.wireframe,R===Gs?E.side=_.shadowSide!==null?_.shadowSide:_.side:E.side=_.shadowSide!==null?_.shadowSide:f[_.side],E.alphaMap=_.alphaMap,E.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,E.map=_.map,E.clipShadows=_.clipShadows,E.clippingPlanes=_.clippingPlanes,E.clipIntersection=_.clipIntersection,E.displacementMap=_.displacementMap,E.displacementScale=_.displacementScale,E.displacementBias=_.displacementBias,E.wireframeLinewidth=_.wireframeLinewidth,E.linewidth=_.linewidth,v.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=i.properties.get(E);N.light=v}return E}function M(S,_,v,R,E,P){if(S.visible===!1)return;if(S.layers.test(E)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&P===Gs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let C=e.update(S),U=S.material;if(Array.isArray(U)){let F=C.groups;for(let O=0,q=F.length;O<q;O++){let H=F[O],j=U[H.materialIndex];if(j&&j.visible){let X=w(S,j,R,P);S.onBeforeShadow(i,S,_,v,C,X,H),i.renderBufferDirect(v,null,C,X,S,H),S.onAfterShadow(i,S,_,v,C,X,H)}}}else if(U.visible){let F=w(S,U,R,P);S.onBeforeShadow(i,S,_,v,C,F,null),i.renderBufferDirect(v,null,C,F,S,null),S.onAfterShadow(i,S,_,v,C,F,null)}}let L=S.children;for(let C=0,U=L.length;C<U;C++)M(L[C],_,v,R,E,P)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let R=c[v],E=S.target.uuid;E in R&&(R[E].dispose(),delete R[E])}}}function Xx(i,e){function t(){let B=!1,oe=new Rt,ne=null,ve=new Rt(0,0,0,0);return{setMask:function(Me){ne!==Me&&!B&&(i.colorMask(Me,Me,Me,Me),ne=Me)},setLocked:function(Me){B=Me},setClear:function(Me,Ae,Ve,je,xe){xe===!0&&(Me*=je,Ae*=je,Ve*=je),oe.set(Me,Ae,Ve,je),ve.equals(oe)===!1&&(i.clearColor(Me,Ae,Ve,je),ve.copy(oe))},reset:function(){B=!1,ne=null,ve.set(-1,0,0,0)}}}function n(){let B=!1,oe=!1,ne=null,ve=null,Me=null;return{setReversed:function(Ae){if(oe!==Ae){let Ve=e.get("EXT_clip_control");Ae?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),oe=Ae;let je=Me;Me=null,this.setClear(je)}},getReversed:function(){return oe},setTest:function(Ae){Ae?ee(i.DEPTH_TEST):ie(i.DEPTH_TEST)},setMask:function(Ae){ne!==Ae&&!B&&(i.depthMask(Ae),ne=Ae)},setFunc:function(Ae){if(oe&&(Ae=gd[Ae]),ve!==Ae){switch(Ae){case Za:i.depthFunc(i.NEVER);break;case Ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case eo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Ae}},setLocked:function(Ae){B=Ae},setClear:function(Ae){Me!==Ae&&(Me=Ae,oe&&(Ae=1-Ae),i.clearDepth(Ae))},reset:function(){B=!1,ne=null,ve=null,Me=null,oe=!1}}}function s(){let B=!1,oe=null,ne=null,ve=null,Me=null,Ae=null,Ve=null,je=null,xe=null;return{setTest:function(We){B||(We?ee(i.STENCIL_TEST):ie(i.STENCIL_TEST))},setMask:function(We){oe!==We&&!B&&(i.stencilMask(We),oe=We)},setFunc:function(We,Je,Se){(ne!==We||ve!==Je||Me!==Se)&&(i.stencilFunc(We,Je,Se),ne=We,ve=Je,Me=Se)},setOp:function(We,Je,Se){(Ae!==We||Ve!==Je||je!==Se)&&(i.stencilOp(We,Je,Se),Ae=We,Ve=Je,je=Se)},setLocked:function(We){B=We},setClear:function(We){xe!==We&&(i.clearStencil(We),xe=We)},reset:function(){B=!1,oe=null,ne=null,ve=null,Me=null,Ae=null,Ve=null,je=null,xe=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,d={},f={},p={},m=new WeakMap,g=[],x=null,u=!1,h=null,y=null,w=null,M=null,T=null,S=null,_=null,v=new rt(0,0,0),R=0,E=!1,P=null,N=null,L=null,C=null,U=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,q=0,H=i.getParameter(i.VERSION);H.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(H)[1]),O=q>=1):H.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),O=q>=2);let j=null,X={},de=i.getParameter(i.SCISSOR_BOX),fe=i.getParameter(i.VIEWPORT),$=new Rt().fromArray(de),G=new Rt().fromArray(fe);function V(B,oe,ne,ve){let Me=new Uint8Array(4),Ae=i.createTexture();i.bindTexture(B,Ae),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ve=0;Ve<ne;Ve++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(oe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Me):i.texImage2D(oe+Ve,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Me);return Ae}let Z={};Z[i.TEXTURE_2D]=V(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=V(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=V(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=V(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ws),_e(!1),ge(Ac),ee(i.CULL_FACE),pe($i);function ee(B){d[B]!==!0&&(i.enable(B),d[B]=!0)}function ie(B){d[B]!==!1&&(i.disable(B),d[B]=!1)}function Ie(B,oe){return p[B]!==oe?(i.bindFramebuffer(B,oe),p[B]=oe,B===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=oe),B===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=oe),!0):!1}function ye(B,oe){let ne=g,ve=!1;if(B){ne=m.get(oe),ne===void 0&&(ne=[],m.set(oe,ne));let Me=B.textures;if(ne.length!==Me.length||ne[0]!==i.COLOR_ATTACHMENT0){for(let Ae=0,Ve=Me.length;Ae<Ve;Ae++)ne[Ae]=i.COLOR_ATTACHMENT0+Ae;ne.length=Me.length,ve=!0}}else ne[0]!==i.BACK&&(ne[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ne)}function ce(B){return x!==B?(i.useProgram(B),x=B,!0):!1}let le={[ji]:i.FUNC_ADD,[Bu]:i.FUNC_SUBTRACT,[zu]:i.FUNC_REVERSE_SUBTRACT};le[ku]=i.MIN,le[Gu]=i.MAX;let ae={[Vu]:i.ZERO,[Hu]:i.ONE,[Wu]:i.SRC_COLOR,[Rc]:i.SRC_ALPHA,[Ku]:i.SRC_ALPHA_SATURATE,[Zu]:i.DST_COLOR,[qu]:i.DST_ALPHA,[Xu]:i.ONE_MINUS_SRC_COLOR,[Pc]:i.ONE_MINUS_SRC_ALPHA,[Ju]:i.ONE_MINUS_DST_COLOR,[Yu]:i.ONE_MINUS_DST_ALPHA,[$u]:i.CONSTANT_COLOR,[ju]:i.ONE_MINUS_CONSTANT_COLOR,[Qu]:i.CONSTANT_ALPHA,[ed]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(B,oe,ne,ve,Me,Ae,Ve,je,xe,We){if(B===$i){u===!0&&(ie(i.BLEND),u=!1);return}if(u===!1&&(ee(i.BLEND),u=!0),B!==Ou){if(B!==h||We!==E){if((y!==ji||T!==ji)&&(i.blendEquation(i.FUNC_ADD),y=ji,T=ji),We)switch(B){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ze("WebGLState: Invalid blending: ",B);break}else switch(B){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ec:Ze("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cc:Ze("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ze("WebGLState: Invalid blending: ",B);break}w=null,M=null,S=null,_=null,v.set(0,0,0),R=0,h=B,E=We}return}Me=Me||oe,Ae=Ae||ne,Ve=Ve||ve,(oe!==y||Me!==T)&&(i.blendEquationSeparate(le[oe],le[Me]),y=oe,T=Me),(ne!==w||ve!==M||Ae!==S||Ve!==_)&&(i.blendFuncSeparate(ae[ne],ae[ve],ae[Ae],ae[Ve]),w=ne,M=ve,S=Ae,_=Ve),(je.equals(v)===!1||xe!==R)&&(i.blendColor(je.r,je.g,je.b,xe),v.copy(je),R=xe),h=B,E=!1}function Ce(B,oe){B.side===Rn?ie(i.CULL_FACE):ee(i.CULL_FACE);let ne=B.side===ln;oe&&(ne=!ne),_e(ne),B.blending===Vs&&B.transparent===!1?pe($i):pe(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),r.setMask(B.colorWrite);let ve=B.stencilWrite;o.setTest(ve),ve&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Oe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ie(i.SAMPLE_ALPHA_TO_COVERAGE)}function _e(B){P!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),P=B)}function ge(B){B!==Uu?(ee(i.CULL_FACE),B!==N&&(B===Ac?i.cullFace(i.BACK):B===Fu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ie(i.CULL_FACE),N=B}function De(B){B!==L&&(O&&i.lineWidth(B),L=B)}function Oe(B,oe,ne){B?(ee(i.POLYGON_OFFSET_FILL),(C!==oe||U!==ne)&&(C=oe,U=ne,a.getReversed()&&(oe=-oe,ne=-ne),i.polygonOffset(oe,ne))):ie(i.POLYGON_OFFSET_FILL)}function ke(B){B?ee(i.SCISSOR_TEST):ie(i.SCISSOR_TEST)}function $e(B){B===void 0&&(B=i.TEXTURE0+F-1),j!==B&&(i.activeTexture(B),j=B)}function mt(B,oe,ne){ne===void 0&&(j===null?ne=i.TEXTURE0+F-1:ne=j);let ve=X[ne];ve===void 0&&(ve={type:void 0,texture:void 0},X[ne]=ve),(ve.type!==B||ve.texture!==oe)&&(j!==ne&&(i.activeTexture(ne),j=ne),i.bindTexture(B,oe||Z[B]),ve.type=B,ve.texture=oe)}function k(){let B=X[j];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ht(){try{i.compressedTexImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function gt(){try{i.compressedTexImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function ft(){try{i.texSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Le(){try{i.texSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Xe(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function Ye(){try{i.texStorage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function D(){try{i.texStorage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function b(){try{i.texImage2D(...arguments)}catch(B){Ze("WebGLState:",B)}}function K(){try{i.texImage3D(...arguments)}catch(B){Ze("WebGLState:",B)}}function me(B){return f[B]!==void 0?f[B]:i.getParameter(B)}function he(B,oe){f[B]!==oe&&(i.pixelStorei(B,oe),f[B]=oe)}function be(B){$.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),$.copy(B))}function Re(B){G.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),G.copy(B))}function re(B,oe){let ne=c.get(oe);ne===void 0&&(ne=new WeakMap,c.set(oe,ne));let ve=ne.get(B);ve===void 0&&(ve=i.getUniformBlockIndex(oe,B.name),i.uniformBlockBinding(oe,ve,ve),ne.set(B,ve))}function se(B,oe,ne){let Me=c.get(oe).get(B);l[Me]!==ne&&(i.bindBufferBase(i.UNIFORM_BUFFER,Me,ne),l[Me]=ne)}function Te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},j=null,X={},p={},l={},m=new WeakMap,g=[],x=null,u=!1,h=null,y=null,w=null,M=null,T=null,S=null,_=null,v=new rt(0,0,0),R=0,E=!1,P=null,N=null,L=null,C=null,U=null,$.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ie,bindFramebuffer:Ie,drawBuffers:ye,useProgram:ce,setBlending:pe,setMaterial:Ce,setFlipSided:_e,setCullFace:ge,setLineWidth:De,setPolygonOffset:Oe,setScissorTest:ke,activeTexture:$e,bindTexture:mt,unbindTexture:k,compressedTexImage2D:Ht,compressedTexImage3D:gt,texImage2D:b,texImage3D:K,pixelStorei:he,getParameter:me,updateUBOMapping:re,uniformBlockBinding:se,texStorage2D:Ye,texStorage3D:D,texSubImage2D:ft,texSubImage3D:Le,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Xe,scissor:be,viewport:Re,reset:Te}}function qx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ue,d=new WeakMap,f=new Set,p,m=new WeakMap,g=new Set,x=new FinalizationRegistry(D=>g.delete(D)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(D,b){return u?new OffscreenCanvas(D,b):Es("canvas")}function y(D,b,K){let me=1,he=Ye(D);if((he.width>K||he.height>K)&&(me=K/Math.max(he.width,he.height)),me<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let be=Math.floor(me*he.width),Re=Math.floor(me*he.height);p===void 0&&(p=h(be,Re));let re=b?h(be,Re):p;return re.width=be,re.height=Re,re.getContext("2d").drawImage(D,0,0,be,Re),qe("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+be+"x"+Re+")."),re}else return"data"in D&&qe("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function w(D){return D.generateMipmaps}function M(D){i.generateMipmap(D)}function T(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(D,b,K,me,he,be=!1){if(D!==null){if(i[D]!==void 0)return i[D];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Re;me&&(Re=e.get("EXT_texture_norm16"),Re||qe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let re=b;if(b===i.RED&&(K===i.FLOAT&&(re=i.R32F),K===i.HALF_FLOAT&&(re=i.R16F),K===i.UNSIGNED_BYTE&&(re=i.R8),K===i.UNSIGNED_SHORT&&Re&&(re=Re.R16_EXT),K===i.SHORT&&Re&&(re=Re.R16_SNORM_EXT)),b===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.R8UI),K===i.UNSIGNED_SHORT&&(re=i.R16UI),K===i.UNSIGNED_INT&&(re=i.R32UI),K===i.BYTE&&(re=i.R8I),K===i.SHORT&&(re=i.R16I),K===i.INT&&(re=i.R32I)),b===i.RG&&(K===i.FLOAT&&(re=i.RG32F),K===i.HALF_FLOAT&&(re=i.RG16F),K===i.UNSIGNED_BYTE&&(re=i.RG8),K===i.UNSIGNED_SHORT&&Re&&(re=Re.RG16_EXT),K===i.SHORT&&Re&&(re=Re.RG16_SNORM_EXT)),b===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RG8UI),K===i.UNSIGNED_SHORT&&(re=i.RG16UI),K===i.UNSIGNED_INT&&(re=i.RG32UI),K===i.BYTE&&(re=i.RG8I),K===i.SHORT&&(re=i.RG16I),K===i.INT&&(re=i.RG32I)),b===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGB8UI),K===i.UNSIGNED_SHORT&&(re=i.RGB16UI),K===i.UNSIGNED_INT&&(re=i.RGB32UI),K===i.BYTE&&(re=i.RGB8I),K===i.SHORT&&(re=i.RGB16I),K===i.INT&&(re=i.RGB32I)),b===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(re=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(re=i.RGBA16UI),K===i.UNSIGNED_INT&&(re=i.RGBA32UI),K===i.BYTE&&(re=i.RGBA8I),K===i.SHORT&&(re=i.RGBA16I),K===i.INT&&(re=i.RGBA32I)),b===i.RGB&&(K===i.UNSIGNED_SHORT&&Re&&(re=Re.RGB16_EXT),K===i.SHORT&&Re&&(re=Re.RGB16_SNORM_EXT),K===i.UNSIGNED_INT_5_9_9_9_REV&&(re=i.RGB9_E5),K===i.UNSIGNED_INT_10F_11F_11F_REV&&(re=i.R11F_G11F_B10F)),b===i.RGBA){let se=be?dr:dt.getTransfer(he);K===i.FLOAT&&(re=i.RGBA32F),K===i.HALF_FLOAT&&(re=i.RGBA16F),K===i.UNSIGNED_BYTE&&(re=se===vt?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT&&Re&&(re=Re.RGBA16_EXT),K===i.SHORT&&Re&&(re=Re.RGBA16_SNORM_EXT),K===i.UNSIGNED_SHORT_4_4_4_4&&(re=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(re=i.RGB5_A1)}return(re===i.R16F||re===i.R32F||re===i.RG16F||re===i.RG32F||re===i.RGBA16F||re===i.RGBA32F)&&e.get("EXT_color_buffer_float"),re}function _(D,b){let K;return D?b===null||b===Fn||b===es?K=i.DEPTH24_STENCIL8:b===cn?K=i.DEPTH32F_STENCIL8:b===Xs&&(K=i.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fn||b===es?K=i.DEPTH_COMPONENT24:b===cn?K=i.DEPTH_COMPONENT32F:b===Xs&&(K=i.DEPTH_COMPONENT16),K}function v(D,b){return w(D)===!0||D.isFramebufferTexture&&D.minFilter!==Zt&&D.minFilter!==Ut?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function R(D){let b=new WeakRef(D);n.get(D).__ref=b,g.add(b),x.register(D,b,b)}function E(D){let b=n.get(D).__ref;b!==void 0&&(g.delete(b),x.unregister(b))}function P(D){L(D.target)}function N(D){C(D.target)}function L(D){D.removeEventListener("dispose",P),E(D),F(D),D.isVideoTexture&&d.delete(D),D.isHTMLTexture&&f.delete(D)}function C(D){D.removeEventListener("dispose",N),E(D),q(D)}function U(){for(let D of g){let b=D.deref();b!==void 0&&(b.isRenderTarget===!0?C(b):L(b))}g.clear(),f.clear()}function F(D){let b=n.get(D);if(b.__webglInit===void 0)return;let K=D.source,me=m.get(K);if(me){let he=me[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(D),Object.keys(me).length===0&&m.delete(K)}n.remove(D)}function O(D){let b=n.get(D);i.deleteTexture(b.__webglTexture);let K=D.source,me=m.get(K);delete me[b.__cacheKey],a.memory.textures--}function q(D){let b=n.get(D);b.__depthDisposeCallback&&b.__depthDisposeCallback();let K=D.depthTexture;if(K&&K.renderTarget===D&&L(K),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let be=0;be<b.__webglFramebuffer[he].length;be++)i.deleteFramebuffer(b.__webglFramebuffer[he][be]);else i.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)i.deleteFramebuffer(b.__webglFramebuffer[he]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let me=D.textures;for(let he=0,be=me.length;he<be;he++){let Re=n.get(me[he]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),a.memory.textures--),n.remove(me[he])}n.remove(D)}let H=0;function j(){H=0}function X(){return H}function de(D){H=D}function fe(){let D=H;return D>=s.maxTextures&&qe("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,D}function $(D){let b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.mipmapsAutoUpdate),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function G(D,b){let K=n.get(D);if(D.isVideoTexture&&Pt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){let me=D.image;if(me===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(K,D,b);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+b)}function V(D,b){let K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ce(K,D,b);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+b)}function Z(D,b){let K=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){Ce(K,D,b);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+b)}function ee(D,b){let K=n.get(D);if(D.version>0&&K.__version!==D.version){_e(K,D,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+b)}let ie={[As]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[to]:i.MIRRORED_REPEAT},Ie={[Zt]:i.NEAREST,[id]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ut]:i.LINEAR,[Lo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},ye={[od]:i.NEVER,[Yc]:i.ALWAYS,[ld]:i.LESS,[Xc]:i.LEQUAL,[cd]:i.EQUAL,[qc]:i.GEQUAL,[hd]:i.GREATER,[ud]:i.NOTEQUAL};function ce(D,b){if(b.type===cn&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Ut||b.magFilter===Lo||b.magFilter===Kr||b.magFilter===Yn||b.minFilter===Ut||b.minFilter===Lo||b.minFilter===Kr||b.minFilter===Yn)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,Ie[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,Ie[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Zt||b.minFilter!==Kr&&b.minFilter!==Yn||b.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function le(D,b){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",P),R(b));let me=b.source,he=m.get(me);he===void 0&&(he={},m.set(me,he));let be=$(b);if(be!==D.__cacheKey){he[be]===void 0&&(he[be]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,K=!0),he[be].usedTimes++;let Re=he[D.__cacheKey];Re!==void 0&&(he[D.__cacheKey].usedTimes--,Re.usedTimes===0&&O(b)),D.__cacheKey=be,D.__webglTexture=he[be].texture}return K}function ae(D,b,K){return Math.floor(Math.floor(D/K)/b)}function pe(D,b,K,me){let be=D.updateRanges;if(be.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,K,me,b.data);else{be.sort((B,oe)=>B.start-oe.start);let Re=0;for(let B=1;B<be.length;B++){let oe=be[Re],ne=be[B],ve=oe.start+oe.count,Me=ae(ne.start,b.width,4),Ae=ae(oe.start,b.width,4);ne.start<=ve+1&&Me===Ae&&ae(ne.start+ne.count-1,b.width,4)===Me?oe.count=Math.max(oe.count,ne.start+ne.count-oe.start):(++Re,be[Re]=ne)}be.length=Re+1;let re=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),Te=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let B=0,oe=be.length;B<oe;B++){let ne=be[B],ve=Math.floor(ne.start/4),Me=Math.ceil(ne.count/4),Ae=ve%b.width,Ve=Math.floor(ve/b.width),je=Me,xe=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ve),t.texSubImage2D(i.TEXTURE_2D,0,Ae,Ve,je,xe,K,me,b.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,re),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,Te)}}function Ce(D,b,K){let me=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(me=i.TEXTURE_3D);let he=le(D,b),be=b.source;t.bindTexture(me,D.__webglTexture,i.TEXTURE0+K);let Re=n.get(be);if(be.version!==Re.__version||he===!0){if(t.activeTexture(i.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){let xe=dt.getPrimaries(dt.workingColorSpace),We=b.colorSpace===fi?null:dt.getPrimaries(b.colorSpace),Je=b.colorSpace===fi||xe===We?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Je)}t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment);let se=y(b.image,!1,s.maxTextureSize);se=Xe(b,se);let Te=r.convert(b.format,b.colorSpace),B=r.convert(b.type),oe=S(b.internalFormat,Te,B,b.normalized,b.colorSpace,b.isVideoTexture);ce(me,b);let ne,ve=b.mipmaps,Me=b.isVideoTexture!==!0,Ae=Re.__version===void 0||he===!0,Ve=be.dataReady,je=v(b,se);if(b.isDepthTexture)oe=_(b.format===di,b.type),Ae&&(Me?t.texStorage2D(i.TEXTURE_2D,1,oe,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,oe,se.width,se.height,0,Te,B,null));else if(b.isDataTexture)if(ve.length>0){Me&&Ae&&t.texStorage2D(i.TEXTURE_2D,je,oe,ve[0].width,ve[0].height);for(let xe=0,We=ve.length;xe<We;xe++)ne=ve[xe],Me?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ne.width,ne.height,Te,B,ne.data):t.texImage2D(i.TEXTURE_2D,xe,oe,ne.width,ne.height,0,Te,B,ne.data);b.generateMipmaps=!1}else Me?(Ae&&t.texStorage2D(i.TEXTURE_2D,je,oe,se.width,se.height),Ve&&pe(b,se,Te,B)):t.texImage2D(i.TEXTURE_2D,0,oe,se.width,se.height,0,Te,B,se.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Me&&Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,oe,ve[0].width,ve[0].height,se.depth);for(let xe=0,We=ve.length;xe<We;xe++)if(ne=ve[xe],b.format!==On)if(Te!==null)if(Me){if(Ve)if(b.layerUpdates.size>0){let Je=sh(ne.width,ne.height,b.format,b.type);for(let Se of b.layerUpdates){let it=ne.data.subarray(Se*Je/ne.data.BYTES_PER_ELEMENT,(Se+1)*Je/ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,Se,ne.width,ne.height,1,Te,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ne.width,ne.height,se.depth,Te,ne.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,xe,oe,ne.width,ne.height,se.depth,0,ne.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?Ve&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,xe,0,0,0,ne.width,ne.height,se.depth,Te,B,ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,xe,oe,ne.width,ne.height,se.depth,0,Te,B,ne.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Me&&Ae&&t.texStorage2D(i.TEXTURE_2D,je,oe,ve[0].width,ve[0].height);for(let xe=0,We=ve.length;xe<We;xe++)ne=ve[xe],b.format!==On?Te!==null?Me?Ve&&t.compressedTexSubImage2D(i.TEXTURE_2D,xe,0,0,ne.width,ne.height,Te,ne.data):t.compressedTexImage2D(i.TEXTURE_2D,xe,oe,ne.width,ne.height,0,ne.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,ne.width,ne.height,Te,B,ne.data):t.texImage2D(i.TEXTURE_2D,xe,oe,ne.width,ne.height,0,Te,B,ne.data)}else if(b.isDataArrayTexture)if(Me){if(Ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,je,oe,se.width,se.height,se.depth),Ve)if(b.layerUpdates.size>0){let xe=sh(se.width,se.height,b.format,b.type);for(let We of b.layerUpdates){let Je=se.data.subarray(We*xe/se.data.BYTES_PER_ELEMENT,(We+1)*xe/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,We,se.width,se.height,1,Te,B,Je)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,B,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,oe,se.width,se.height,se.depth,0,Te,B,se.data);else if(b.isData3DTexture)Me?(Ae&&t.texStorage3D(i.TEXTURE_3D,je,oe,se.width,se.height,se.depth),Ve&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,B,se.data)):t.texImage3D(i.TEXTURE_3D,0,oe,se.width,se.height,se.depth,0,Te,B,se.data);else if(b.isFramebufferTexture){if(Ae)if(Me)t.texStorage2D(i.TEXTURE_2D,je,oe,se.width,se.height);else{let xe=se.width,We=se.height;for(let Je=0;Je<je;Je++)t.texImage2D(i.TEXTURE_2D,Je,oe,xe,We,0,Te,B,null),xe>>=1,We>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in i){let xe=i.canvas;if(xe.hasAttribute("layoutsubtree")||xe.setAttribute("layoutsubtree","true"),se.parentNode!==xe){xe.appendChild(se),f.add(b),xe.onpaint=We=>{let Je=We.changedElements;for(let Se of f)Je.includes(Se.image)&&(Se.needsUpdate=!0)},xe.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{let Je=i.RGBA,Se=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Je,Se,it,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ve.length>0){if(Me&&Ae){let xe=Ye(ve[0]);t.texStorage2D(i.TEXTURE_2D,je,oe,xe.width,xe.height)}for(let xe=0,We=ve.length;xe<We;xe++)ne=ve[xe],Me?Ve&&t.texSubImage2D(i.TEXTURE_2D,xe,0,0,Te,B,ne):t.texImage2D(i.TEXTURE_2D,xe,oe,Te,B,ne);b.generateMipmaps=!1}else if(Me){if(Ae){let xe=Ye(se);t.texStorage2D(i.TEXTURE_2D,je,oe,xe.width,xe.height)}Ve&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Te,B,se)}else t.texImage2D(i.TEXTURE_2D,0,oe,Te,B,se);w(b)&&b.mipmapsAutoUpdate===!0&&M(me),Re.__version=be.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function _e(D,b,K){if(b.image.length!==6)return;let me=le(D,b),he=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+K);let be=n.get(he);if(he.version!==be.__version||me===!0){t.activeTexture(i.TEXTURE0+K);let Re=dt.getPrimaries(dt.workingColorSpace),re=b.colorSpace===fi?null:dt.getPrimaries(b.colorSpace),se=b.colorSpace===fi||Re===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let Te=b.isCompressedTexture||b.image[0].isCompressedTexture,B=b.image[0]&&b.image[0].isDataTexture,oe=[];for(let Se=0;Se<6;Se++)!Te&&!B?oe[Se]=y(b.image[Se],!0,s.maxCubemapSize):oe[Se]=B?b.image[Se].image:b.image[Se],oe[Se]=Xe(b,oe[Se]);let ne=oe[0],ve=r.convert(b.format,b.colorSpace),Me=r.convert(b.type),Ae=S(b.internalFormat,ve,Me,b.normalized,b.colorSpace),Ve=b.isVideoTexture!==!0,je=be.__version===void 0||me===!0,xe=he.dataReady,We=v(b,ne);ce(i.TEXTURE_CUBE_MAP,b);let Je;if(b.isDepthTexture){if(Ae=_(b.format===di,b.type),je)if(Ve)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,Ae,ne.width,ne.height);else for(let Se=0;Se<6;Se++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ae,ne.width,ne.height,0,ve,Me,null)}else if(Te){Ve&&je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,ne.width,ne.height);for(let Se=0;Se<6;Se++){Je=oe[Se].mipmaps;for(let it=0;it<Je.length;it++){let Ft=Je[it];b.format!==On?ve!==null?Ve?xe&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,0,0,Ft.width,Ft.height,ve,Ft.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,Ae,Ft.width,Ft.height,0,Ft.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,0,0,Ft.width,Ft.height,ve,Me,Ft.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,Ae,Ft.width,Ft.height,0,ve,Me,Ft.data)}}}else{if(Je=b.mipmaps,Ve&&je){Je.length>0&&We++;let Se=Ye(oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,We,Ae,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(B){Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,oe[Se].width,oe[Se].height,ve,Me,oe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ae,oe[Se].width,oe[Se].height,0,ve,Me,oe[Se].data);for(let it=0;it<Je.length;it++){let Kn=Je[it].image[Se].image;Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,0,0,Kn.width,Kn.height,ve,Me,Kn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,Ae,Kn.width,Kn.height,0,ve,Me,Kn.data)}}else{Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,ve,Me,oe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Ae,ve,Me,oe[Se]);for(let it=0;it<Je.length;it++){let Ft=Je[it];Ve?xe&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,0,0,ve,Me,Ft.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,Ae,ve,Me,Ft.image[Se])}}}w(b)&&b.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),be.__version=he.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ge(D,b,K,me,he,be){let Re=r.convert(K.format,K.colorSpace),re=r.convert(K.type),se=S(K.internalFormat,Re,re,K.normalized,K.colorSpace),Te=n.get(b),B=n.get(K);if(B.__renderTarget=b,!Te.__hasExternalTextures){let oe=Math.max(1,b.width>>be),ne=Math.max(1,b.height>>be);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,be,se,oe,ne,b.depth,0,Re,re,null):t.texImage2D(he,be,se,oe,ne,0,Re,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),Le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,B.__webglTexture,0,ft(b)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,he,B.__webglTexture,be),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(D,b,K){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){let me=b.depthTexture,he=me&&me.isDepthTexture?me.type:null,be=_(b.stencilBuffer,he),Re=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Le(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(b),be,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(b),be,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,be,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,D)}else{let me=b.textures;for(let he=0;he<me.length;he++){let be=me[he],Re=r.convert(be.format,be.colorSpace),re=r.convert(be.type),se=S(be.internalFormat,Re,re,be.normalized,be.colorSpace);Le(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft(b),se,b.width,b.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft(b),se,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,se,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(D,b,K){let me=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(b.depthTexture);he.__renderTarget=b;let be=me?b.depthTexture.image[0]:b.depthTexture.image;(!he.__webglTexture||be.width!==b.width||be.height!==b.height)&&(be.width=b.width,be.height=b.height,b.depthTexture.needsUpdate=!0),me?ee(b.depthTexture,0):G(b.depthTexture,0);let Re=he.__webglTexture,re=ft(b),se=me?i.TEXTURE_CUBE_MAP_POSITIVE_X+K:i.TEXTURE_2D,Te=b.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(b.depthTexture.format===hi)Le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,Re,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,Re,0);else if(b.depthTexture.format===di)Le(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Te,se,Re,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,Te,se,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ke(D){let b=n.get(D),K=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){let me=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),me){let he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,me.removeEventListener("dispose",he)};me.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=me}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let me=0;me<6;me++)Oe(b.__webglFramebuffer[me],D,me);else D.texture.mipmaps.length>0?Oe(b.__webglFramebuffer[0],D,0):Oe(b.__webglFramebuffer,D,0);else if(K){b.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[me]),b.__webglDepthbuffer[me]===void 0)b.__webglDepthbuffer[me]=i.createRenderbuffer(),De(b.__webglDepthbuffer[me],D,!1);else{let he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,be)}}else if(D.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),De(b.__webglDepthbuffer,D,!1);else{let he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function $e(D,b,K){let me=n.get(D);b!==void 0&&ge(me.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&ke(D)}function mt(D){let b=D.texture,K=n.get(D),me=n.get(b);D.addEventListener("dispose",N),R(D);let he=D.textures,be=D.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=b.version,a.memory.textures++),be){K.__webglFramebuffer=[];for(let re=0;re<6;re++)if(b.mipmaps.length>0){K.__webglFramebuffer[re]=[];for(let se=0;se<b.mipmaps.length;se++)K.__webglFramebuffer[re][se]=i.createFramebuffer()}else K.__webglFramebuffer[re]=i.createFramebuffer()}else{if(b.mipmaps.length>0){K.__webglFramebuffer=[];for(let re=0;re<b.mipmaps.length;re++)K.__webglFramebuffer[re]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Re)for(let re=0,se=he.length;re<se;re++){let Te=n.get(he[re]);Te.__webglTexture===void 0&&(Te.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&Le(D)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let re=0;re<he.length;re++){let se=he[re];K.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[re]);let Te=r.convert(se.format,se.colorSpace),B=r.convert(se.type),oe=S(se.internalFormat,Te,B,se.normalized,se.colorSpace,D.isXRRenderTarget===!0),ne=ft(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,oe,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,K.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),De(K.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(be){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),ce(i.TEXTURE_CUBE_MAP,b);for(let re=0;re<6;re++)if(b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)ge(K.__webglFramebuffer[re][se],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,se);else ge(K.__webglFramebuffer[re],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);w(b)?M(i.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Re){for(let re=0,se=he.length;re<se;re++){let Te=he[re],B=n.get(Te),oe=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,B.__webglTexture),ce(oe,Te),ge(K.__webglFramebuffer,D,Te,i.COLOR_ATTACHMENT0+re,oe,0),w(Te)&&M(oe)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(re=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,me.__webglTexture),ce(re,b),b.mipmaps.length>0)for(let se=0;se<b.mipmaps.length;se++)ge(K.__webglFramebuffer[se],D,b,i.COLOR_ATTACHMENT0,re,se);else ge(K.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,re,0);w(b)?M(re):b.mipmaps.length>0&&i.texParameteri(re,i.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}D.depthBuffer&&ke(D)}function k(D){let b=D.textures;for(let K=0,me=b.length;K<me;K++){let he=b[K];if(w(he)&&he.mipmapsAutoUpdate===!0){let be=T(D),Re=n.get(he).__webglTexture;t.bindTexture(be,Re),M(be),t.unbindTexture()}}}let Ht=[];function gt(D){if(D.samples>0){if(Le(D)===!1){let b=D.textures,K=D.width,me=D.height,he=i.COLOR_BUFFER_BIT,be=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=n.get(D),re=b.length>1;if(re)for(let Te=0;Te<b.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer),D.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let Te=0;Te<b.length;Te++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);let B=n.get(b[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,B,0)}i.blitFramebuffer(0,0,K,me,0,0,K,me,he,i.NEAREST),l===!0&&(Ht.length=0,Ht.push(i.COLOR_ATTACHMENT0+Te),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&Ht.push(be),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let Te=0;Te<b.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,Re.__webglColorRenderbuffer[Te]);let B=n.get(b[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,B,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ft(D){return Math.min(s.maxSamples,D.samples)}function Le(D){let b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Pt(D){let b=a.render.frame;d.get(D)!==b&&(d.set(D,b),D.update())}function Xe(D,b){let K=D.colorSpace,me=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==qi&&K!==fi&&(dt.getTransfer(K)===vt?(me!==On||he!==mn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ze("WebGLTextures: Unsupported texture color space:",K)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=fe,this.resetTextureUnits=j,this.getTextureUnits=X,this.setTextureUnits=de,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=Z,this.setTextureCube=ee,this.rebindTextures=$e,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Le,this.dispose=U}function Yx(i,e){function t(n,s=fi){let r,a=dt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===No)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Gc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zc)return i.BYTE;if(n===kc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Hc)return i.ALPHA;if(n===Wc)return i.RGB;if(n===On)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Fo)return i.RED;if(n===Oo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===Bo)return i.RG_INTEGER;if(n===zo)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Qr||n===ea)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ko||n===Go||n===Vo||n===Ho)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ko)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Go)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Wo||n===Xo||n===qo||n===Yo||n===Zo||n===ta||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Wo||n===Xo)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yo)return r.COMPRESSED_R11_EAC;if(n===Zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ko||n===$o||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$o)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===jo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===el)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===sl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hl||n===ul||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===hl)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===fl||n===pl||n===na||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===fl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Zx=`
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

}`,xh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xn({vertexShader:Zx,fragmentShader:Jx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},yh=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,g=null,x=typeof XRWebGLBinding<"u",u=new xh,h={},y=t.getContextAttributes(),w=null,M=null,T=[],S=[],_=new Ue,v=null,R=null,E=new en;E.viewport=new Rt;let P=new en;P.viewport=new Rt;let N=[E,P],L=new Co,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let G=T[$];return G===void 0&&(G=new Ls,T[$]=G),G.getTargetRaySpace()},this.getControllerGrip=function($){let G=T[$];return G===void 0&&(G=new Ls,T[$]=G),G.getGripSpace()},this.getHand=function($){let G=T[$];return G===void 0&&(G=new Ls,T[$]=G),G.getHandSpace()};function F($){let G=S.indexOf($.inputSource);if(G===-1)return;let V=T[G];V!==void 0&&(V.update($.inputSource,$.frame,c||a),V.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",q);for(let $=0;$<T.length;$++){let G=S[$];G!==null&&(S[$]=null,T[$].disconnect(G))}C=null,U=null,u.reset();for(let $ in h)delete h[$];if(e.setRenderTarget(w),m=null,p=null,f=null,s=null,M=null,fe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),R!==null){let $=R.camera;$.fov=R.fov,$.zoom=R.zoom,$.updateProjectionMatrix(),R=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&x&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",O),s.addEventListener("inputsourceschange",q),y.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let V=null,Z=null,ee=null;y.depth&&(ee=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,V=y.stencil?di:hi,Z=y.stencil?es:Fn);let ie={colorFormat:t.RGBA8,depthFormat:ee,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(ie),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new bn(p.textureWidth,p.textureHeight,{format:On,type:mn,depthTexture:new ui(p.textureWidth,p.textureHeight,Z,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let V={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,V),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bn(m.framebufferWidth,m.framebufferHeight,{format:On,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),fe.setContext(s),fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function q($){for(let G=0;G<$.removed.length;G++){let V=$.removed[G],Z=S.indexOf(V);Z>=0&&(S[Z]=null,T[Z].disconnect(V))}for(let G=0;G<$.added.length;G++){let V=$.added[G],Z=S.indexOf(V);if(Z===-1){for(let ie=0;ie<T.length;ie++)if(ie>=S.length){S.push(V),Z=ie;break}else if(S[ie]===null){S[ie]=V,Z=ie;break}if(Z===-1)break}let ee=T[Z];ee&&ee.connect(V)}}function H($,G){G===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(G.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let G=$.near,V=$.far;u.texture!==null&&(u.depthNear>0&&(G=u.depthNear),u.depthFar>0&&(V=u.depthFar)),L.near=P.near=E.near=G,L.far=P.far=E.far=V,(C!==L.near||U!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),C=L.near,U=L.far),L.layers.mask=$.layers.mask|6,E.layers.mask=L.layers.mask&-5,P.layers.mask=L.layers.mask&-3;let Z=$.parent,ee=L.cameras;H(L,Z);for(let ie=0;ie<ee.length;ie++)H(ee[ie],Z);L.projectionMatrix.copy(E.projectionMatrix),L.projectionMatrixInverse.copy(E.projectionMatrixInverse),R===null&&$.isPerspectiveCamera&&(R={camera:$,fov:$.fov,zoom:$.zoom}),j($,L,Z)};function j($,G,V){V===null?$.matrix.copy(G.matrixWorld):($.matrix.copy(V.matrixWorld),$.matrix.invert(),$.matrix.multiply(G.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(G.projectionMatrix),$.projectionMatrixInverse.copy(G.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Rs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(L)},this.getCameraTexture=function($){return h[$]};let X=null;function de($,G){if(d=G.getViewerPose(c||a),g=G,d!==null){let V=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let Z=!1;V.length!==L.cameras.length&&(L.cameras.length=0,Z=!0);for(let ye=0;ye<V.length;ye++){let ce=V[ye],le=null;if(m!==null)le=m.getViewport(ce);else{let pe=f.getViewSubImage(p,ce);le=pe.viewport,ye===0&&(e.setRenderTargetTextures(M,pe.colorTexture,pe.depthStencilTexture),e.setRenderTarget(M))}let ae=N[ye];ae===void 0&&(ae=new en,ae.layers.enable(ye),ae.viewport=new Rt,N[ye]=ae),ae.matrix.fromArray(ce.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(ce.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(le.x,le.y,le.width,le.height),ye===0&&(L.matrix.copy(ae.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Z===!0&&L.cameras.push(ae)}let ee=s.enabledFeatures;if(ee&&ee.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){f=n.getBinding();let ye=f.getDepthInformation(V[0]);ye&&ye.isValid&&ye.texture&&u.init(ye,s.renderState)}if(ee&&ee.includes("camera-access")&&x){e.state.unbindTexture(),f=n.getBinding();for(let ye=0;ye<V.length;ye++){let ce=V[ye].camera;if(ce){let le=h[ce];le||(le=new br,h[ce]=le);let ae=f.getCameraImage(ce);le.sourceTexture=ae}}}}for(let V=0;V<T.length;V++){let Z=S[V],ee=T[V];Z!==null&&ee!==void 0&&ee.update(Z,G,c||a)}X&&X($,G),G.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:G}),g=null}let fe=new Zd;fe.setAnimationLoop(de),this.setAnimationLoop=function($){X=$},this.dispose=function(){}}},Kx=new _t,rf=new nt;rf.set(-1,0,0,0,1,0,0,0,1);function $x(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,th(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function s(u,h,y,w,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(u,h):h.isMeshLambertMaterial?(r(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(u,h),f(u,h)):h.isMeshPhongMaterial?(r(u,h),d(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(u,h),p(u,h),h.isMeshPhysicalMaterial&&m(u,h,M)):h.isMeshMatcapMaterial?(r(u,h),g(u,h)):h.isMeshDepthMaterial?r(u,h):h.isMeshDistanceMaterial?(r(u,h),x(u,h)):h.isMeshNormalMaterial?r(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?l(u,h,y,w):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===ln&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===ln&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let y=e.get(h),w=y.envMap,M=y.envMapRotation;w&&(u.envMap.value=w,u.envMapRotation.value.setFromMatrix4(Kx.makeRotationFromEuler(M)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(rf),u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,y,w){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*y,u.scale.value=w*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,y){u.ior.value=h.ior,h.diffuseRoughness>0&&(u.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.retroreflectivity>0&&(u.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=y.texture,u.transmissionSamplerSize.value.set(y.width,y.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function x(u,h){let y=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(y.matrixWorld),u.nearDistance.value=y.shadow.camera.near,u.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function jx(i,e,t,n){let s={},r={};function a(y,w){let M=w.program;n.uniformBlockBinding(y,M,s[y.id])}function o(y,w){let M=s[y.id];M===void 0&&(g(y),M=l(y),s[y.id]=M,y.addEventListener("dispose",u));let T=w.program;n.updateUBOMapping(y,T);let S=e.render.frame;r[y.id]!==S&&(c(y),r[y.id]=S)}function l(y){let w=i.createBuffer(),M=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),w}function c(y){let w=s[y.id],M=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let S=0,_=M.length;S<_;S++){let v=M[S];if(Array.isArray(v))for(let R=0,E=v.length;R<E;R++)d(v[R],S,R,T);else d(v,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(y,w,M,T){if(p(y,w,M,T)===!0){let S=y.__offset,_=y.value;if(Array.isArray(_)){let v=0;for(let R=0;R<_.length;R++){let E=_[R],P=x(E,!0);f(E,y.__data,v),v+=P.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,y.__data)}}function f(y,w,M){typeof y=="number"||typeof y=="boolean"?w[M]=y:y.isMatrix3?(w[M]=y.elements[0],w[M+1]=y.elements[1],w[M+2]=y.elements[2],w[M+3]=0,w[M+4]=y.elements[3],w[M+5]=y.elements[4],w[M+6]=y.elements[5],w[M+7]=0,w[M+8]=y.elements[6],w[M+9]=y.elements[7],w[M+10]=y.elements[8],w[M+11]=0):ArrayBuffer.isView(y)?w.set(y.subarray(0,w.length-M),M):y.toArray(w,M)}function p(y,w,M,T){let S=y.value,_=w+"_"+M;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let v=T[_],R=!1;for(let E=0;E<S.length;E++)m(S[E],v,E)===!0&&(R=!0);return R}return m(S,T,_)}function m(y,w,M){if(w[M]===void 0)return typeof y=="number"||typeof y=="boolean"?w[M]=y:ArrayBuffer.isView(y)?w[M]=y.slice():w[M]=y.clone(),!0;{let T=w[M];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return w[M]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function g(y){let w=y.uniforms,M=0,T=16;for(let _=0,v=w.length;_<v;_++){let R=Array.isArray(w[_])?w[_]:[w[_]];for(let E=0,P=R.length;E<P;E++){let N=R[E],L=Array.isArray(N.value)?N.value:[N.value],C=Array.isArray(w[_])||Array.isArray(N.value),U=M;for(let O=0,q=L.length;O<q;O++){let H=L[O],j=x(H,C),X=M%T,de=X%j.boundary,fe=X+de;M+=de,fe!==0&&T-fe<j.storage&&(M+=T-fe),O===0&&(U=M),M+=j.storage}let F=N.type==="int"?Int32Array:N.type==="uint"?Uint32Array:Float32Array;N.__data=new F((M-U)/Float32Array.BYTES_PER_ELEMENT),N.__offset=U}}let S=M%T;return S>0&&(M+=T-S),y.__size=M,y.__cache={},this}function x(y,w){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=16,M.storage=48):y.isMatrix4?(M.boundary=16,M.storage=64):y.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):qe("WebGLRenderer: Unsupported uniform value type.",y),w===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function u(y){let w=y.target;w.removeEventListener("dispose",u),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function h(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:h}}var Qx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function ey(){return Zn===null&&(Zn=new Zi(Qx,16,16,Ui,hn),Zn.name="DFG_LUT",Zn.minFilter=Ut,Zn.magFilter=Ut,Zn.wrapS=En,Zn.wrapT=En,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var vl=class{constructor(e={}){let{canvas:t=fd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let x=m,u=new Set([zo,Bo,Oo]),h=new Set([mn,Fn,Xs,es,No,Uo]),y=new Uint32Array(4),w=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],v=[],R=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,N=null,L=null,C=null,U=null;this._outputColorSpace=rn;let F=0,O=0,q=null,H=-1,j=null,X=new Rt,de=new Rt,fe=null,$=new rt(0),G=0,V=t.width,Z=t.height,ee=1,ie=null,Ie=null,ye=new Rt(0,0,V,Z),ce=new Rt(0,0,V,Z),le=!1,ae=new Ti,pe=new ao,Ce=!1,_e=!1,ge=new _t,De=new W,Oe=new Rt,ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},$e=!1;function mt(){return q===null?ee:1}let k=n;function Ht(A,z){return t.getContext(A,z)}let gt,ft,Le,Pt,Xe,Ye,D,b,K,me,he,be,Re,re,se,Te,B,oe,ne,ve,Me,Ae,Ve;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",Je,!1),t.addEventListener("webglcontextcreationerror",Se,!1),k===null){let z="webgl2";if(k=Ht(z,A),k===null)throw Ht(z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(A){throw t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Ze("WebGLRenderer: "+A.message),A}function je(){gt=new u_(k),gt.init(),Me=new Yx(k,gt),ft=new e_(k,gt,e,Me),Le=new Xx(k,gt),ft.reversedDepthBuffer&&p&&Le.buffers.depth.setReversed(!0),L=k.createFramebuffer(),C=k.createFramebuffer(),U=k.createFramebuffer(),Pt=new p_(k),Xe=new Ix,Ye=new qx(k,gt,Le,Xe,ft,Me,Pt),D=new h_(E),b=new gm(k),Ae=new j0(k,b),K=new d_(k,b,Pt,Ae),me=new g_(k,K,b,Ae,Pt),oe=new m_(k,ft,Ye),se=new t_(Xe),he=new Px(E,D,gt,ft,Ae,se),be=new $x(E,Xe),Re=new Dx,re=new zx(gt),B=new $0(E,D,Le,me,g,l),Te=new Wx(E,me,ft),Ve=new jx(k,Pt,ft,Le),ne=new Q0(k,gt,Pt),ve=new f_(k,gt,Pt),Pt.programs=he.programs,E.capabilities=ft,E.extensions=gt,E.properties=Xe,E.renderLists=Re,E.shadowMap=Te,E.state=Le,E.info=Pt}x!==mn&&(R=new x_(x,t.width,t.height,o,s,r));let xe=new yh(E,k);this.xr=xe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let A=gt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=gt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(V,Z,!1))},this.getSize=function(A){return A.set(V,Z)},this.setSize=function(A,z,Q=!0){if(xe.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}V=A,Z=z,t.width=Math.floor(A*ee),t.height=Math.floor(z*ee),Q===!0&&(t.style.width=A+"px",t.style.height=z+"px"),R!==null&&R.setSize(t.width,t.height),this.setViewport(0,0,A,z)},this.getDrawingBufferSize=function(A){return A.set(V*ee,Z*ee).floor()},this.setDrawingBufferSize=function(A,z,Q){V=A,Z=z,ee=Q,t.width=Math.floor(A*Q),t.height=Math.floor(z*Q),this.setViewport(0,0,A,z)},this.setEffects=function(A){if(x===mn){Ze("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let z=0;z<A.length;z++)if(A[z].isOutputPass===!0){qe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(ye)},this.setViewport=function(A,z,Q,Y){A.isVector4?ye.set(A.x,A.y,A.z,A.w):ye.set(A,z,Q,Y),Le.viewport(X.copy(ye).multiplyScalar(mt()).round())},this.getScissor=function(A){return A.copy(ce)},this.setScissor=function(A,z,Q,Y){A.isVector4?ce.set(A.x,A.y,A.z,A.w):ce.set(A,z,Q,Y),Le.scissor(de.copy(ce).multiplyScalar(mt()).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(A){Le.setScissorTest(le=A)},this.setOpaqueSort=function(A){ie=A},this.setTransparentSort=function(A){Ie=A},this.getClearColor=function(A){return A.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(A=!0,z=!0,Q=!0){let Y=0;if(A){let J=!1;if(q!==null){let Pe=q.texture.format;J=u.has(Pe)}if(J){let Pe=q.texture.type,Ge=h.has(Pe),Ee=B.getClearColor(),Ne=B.getClearAlpha(),He=Ee.r,Qe=Ee.g,lt=Ee.b;Ge?(y[0]=He,y[1]=Qe,y[2]=lt,y[3]=Ne,k.clearBufferuiv(k.COLOR,0,y)):(w[0]=He,w[1]=Qe,w[2]=lt,w[3]=Ne,k.clearBufferiv(k.COLOR,0,w))}else Y|=k.COLOR_BUFFER_BIT}z&&(Y|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),N=A},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",Je,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),B.dispose(),Re.dispose(),re.dispose(),Ye.dispose(),Xe.dispose(),D.dispose(),me.dispose(),K.dispose(),Ae.dispose(),Ve.dispose(),he.dispose(),xe.dispose(),xe.removeEventListener("sessionstart",Pn),xe.removeEventListener("sessionend",_n),Bn.stop()};function We(A){A.preventDefault(),Jc("WebGLRenderer: Context Lost."),P=!0}function Je(){Jc("WebGLRenderer: Context Restored."),P=!1;let A=Pt.autoReset,z=Te.enabled,Q=Te.autoUpdate,Y=Te.needsUpdate,J=Te.type;je(),Pt.autoReset=A,Te.enabled=z,Te.autoUpdate=Q,Te.needsUpdate=Y,Te.type=J}function Se(A){Ze("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function it(A){let z=A.target;z.removeEventListener("dispose",it),Ft(z)}function Ft(A){Kn(A),Xe.remove(A)}function Kn(A){let z=Xe.get(A).programs;z!==void 0&&(z.forEach(function(Q){he.releaseProgram(Q)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,z,Q,Y,J,Pe){z===null&&(z=ke);let Ge=J.isMesh&&J.matrixWorld.determinantAffine()<0,Ee=ga(A,z,Q,Y,J);Le.setMaterial(Y,Ge);let Ne=Q.index,He=1;if(Y.wireframe===!0){if(Ne=K.getWireframeAttribute(Q),Ne===void 0)return;He=2}let Qe=Q.drawRange,lt=Q.attributes.position,ze=Qe.start*He,ct=(Qe.start+Qe.count)*He;Pe!==null&&(ze=Math.max(ze,Pe.start*He),ct=Math.min(ct,(Pe.start+Pe.count)*He)),Ne!==null?(ze=Math.max(ze,0),ct=Math.min(ct,Ne.count)):lt!=null&&(ze=Math.max(ze,0),ct=Math.min(ct,lt.count));let It=ct-ze;if(It<0||It===1/0)return;Ae.setup(J,Y,Ee,Q,Ne);let Mt,yt=ne;if(Ne!==null&&(Mt=b.get(Ne),yt=ve,yt.setIndex(Mt)),J.isMesh)Y.wireframe===!0?(Le.setLineWidth(Y.wireframeLinewidth*mt()),yt.setMode(k.LINES)):yt.setMode(k.TRIANGLES);else if(J.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),Le.setLineWidth(Bt*mt()),J.isLineSegments?yt.setMode(k.LINES):J.isLineLoop?yt.setMode(k.LINE_LOOP):yt.setMode(k.LINE_STRIP)}else J.isPoints?yt.setMode(k.POINTS):J.isSprite&&yt.setMode(k.TRIANGLES);if(J.isBatchedMesh)if(gt.get("WEBGL_multi_draw"))yt.renderMultiDraw(J._multiDrawStarts,J._multiDrawCounts,J._multiDrawCount);else{let Bt=J._multiDrawStarts,Be=J._multiDrawCounts,Wt=J._multiDrawCount,st=Ne?b.get(Ne).bytesPerElement:1,Qn=Xe.get(Y).currentProgram.getUniforms();for(let Lt=0;Lt<Wt;Lt++)Qn.setValue(k,"_gl_DrawID",Lt),yt.render(Bt[Lt]/st,Be[Lt])}else if(J.isInstancedMesh)yt.renderInstances(ze,It,J.count);else if(Q.isInstancedBufferGeometry){let Bt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Be=Math.min(Q.instanceCount,Bt);yt.renderInstances(ze,It,Be)}else yt.render(ze,It)};function Ul(A,z,Q,Y){N!==null&&A.isNodeMaterial&&N.setObject(Y,A),Ce===!0&&se.setState(A,Q,!1),A.transparent===!0&&A.side===Rn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,ki(A,z,Y),A.side=Ni,A.needsUpdate=!0,ki(A,z,Y),A.side=Rn):ki(A,z,Y)}this.compile=function(A,z,Q=null){Q===null&&(Q=A),N!==null&&N.renderStart(A,z,Q),S=re.get(Q),S.init(z),v.push(S),Q.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),A!==Q&&A.traverseVisible(function(J){J.isLight&&J.layers.test(z.layers)&&(S.pushLight(J),J.castShadow&&S.pushShadow(J))}),S.setupLights(),N!==null&&N.updateLights(S.state.lightsArray),_e=this.localClippingEnabled,Ce=se.init(this.clippingPlanes,_e),Ce===!0&&se.setGlobalState(this.clippingPlanes,z),N!==null&&Te.render(S.state.shadowsArray,Q,z);let Y=new Set;return A.traverse(function(J){if(!(J.isMesh||J.isPoints||J.isLine||J.isSprite))return;let Pe=J.material;if(Pe)if(Array.isArray(Pe))for(let Ge=0;Ge<Pe.length;Ge++){let Ee=Pe[Ge];Ul(Ee,Q,z,J),Y.add(Ee)}else Ul(Pe,Q,z,J),Y.add(Pe)}),S=v.pop(),N!==null&&N.renderEnd(),Y},this.compileAsync=function(A,z,Q=null){let Y=this.compile(A,z,Q);return new Promise(J=>{function Pe(){if(Y.forEach(function(Ge){let Ne=Xe.get(Ge).currentProgram;(Ne===void 0||Ne.isReady())&&Y.delete(Ge)}),Y.size===0){J(A);return}setTimeout(Pe,10)}gt.get("KHR_parallel_shader_compile")!==null?Pe():setTimeout(Pe,10)})};let fa=null;function Bi(A){fa&&fa(A)}function Pn(){Bn.stop()}function _n(){Bn.start()}let Bn=new Zd;Bn.setAnimationLoop(Bi),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(A){fa=A,xe.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},xe.addEventListener("sessionstart",Pn),xe.addEventListener("sessionend",_n),this.render=function(A,z){if(z!==void 0&&z.isCamera!==!0){Ze("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;N!==null&&N.renderStart(A,z);let Q=xe.enabled===!0&&xe.isPresenting===!0,Y=R!==null&&(q===null||Q)&&R.begin(E,q);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),xe.enabled===!0&&xe.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(xe.cameraAutoUpdate===!0&&xe.updateCamera(z),z=xe.getCamera()),A.isScene===!0&&A.onBeforeRender(E,A,z,q),S=re.get(A,v.length),S.init(z),S.state.textureUnits=Ye.getTextureUnits(),v.push(S),ge.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),z.isArrayCamera?pe.setFromArrayCamera(z):ae.setFromProjectionMatrix(ge,Cn,z.reversedDepth),_e=this.localClippingEnabled,Ce=se.init(this.clippingPlanes,_e),T=Re.get(A,_.length),T.init(),_.push(T),this.info.render.frame++,xe.enabled===!0&&xe.isPresenting===!0){let Ge=E.xr.getDepthSensingMesh();Ge!==null&&pa(Ge,z,-1/0,E.sortObjects)}pa(A,z,0,E.sortObjects),T.finish(),N!==null&&N.updateLights(S.state.lightsArray),E.sortObjects===!0&&T.sort(ie,Ie),$e=xe.enabled===!1||xe.isPresenting===!1||xe.hasDepthSensing()===!1,$e&&B.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),Ce===!0&&se.beginShadows();let J=S.state.shadowsArray;if(Te.render(J,A,z),Ce===!0&&se.endShadows(),(Y&&R.hasRenderPass())===!1){let Ge=T.opaque,Ee=T.transmissive;if(S.setupLights(),z.isArrayCamera){let Ne=z.cameras;if(Ee.length>0)for(let He=0,Qe=Ne.length;He<Qe;He++){let lt=Ne[He];$n(Ge,Ee,A,lt)}$e&&B.render(A);for(let He=0,Qe=Ne.length;He<Qe;He++){let lt=Ne[He];zn(T,A,lt,lt.viewport)}}else Ee.length>0&&$n(Ge,Ee,A,z),$e&&B.render(A),zn(T,A,z)}q!==null&&O===0&&(Ye.updateMultisampleRenderTarget(q),Ye.updateRenderTargetMipmap(q)),Y&&R.end(E),A.isScene===!0&&A.onAfterRender(E,A,z),Ae.resetDefaultState(),H=-1,j=null,v.pop(),v.length>0?(S=v[v.length-1],Ye.setTextureUnits(S.state.textureUnits),Ce===!0&&se.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,N!==null&&N.renderEnd()};function pa(A,z,Q,Y){if(A.visible===!1)return;if(A.layers.test(z.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(z);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let Ge=z.isArrayCamera?pe:ae;if(!A.frustumCulled||A.intersectsFrustum(Ge)){Y&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ge);let Ee=me.update(A),Ne=A.material;Ne.visible&&T.push(A,Ee,Ne,Q,Oe.z,null,z)}}else if(A.isMesh||A.isLine||A.isPoints){let Ge=z.isArrayCamera?pe:ae;if(!A.frustumCulled||A.intersectsFrustum(Ge)){let Ee=me.update(A),Ne=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Oe.copy(Ee.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(ge)),Array.isArray(Ne)){let He=Ee.groups;for(let Qe=0,lt=He.length;Qe<lt;Qe++){let ze=He[Qe],ct=Ne[ze.materialIndex];ct&&ct.visible&&T.push(A,Ee,ct,Q,Oe.z,ze,z)}}else Ne.visible&&T.push(A,Ee,Ne,Q,Oe.z,null,z)}}}let Pe=A.children;for(let Ge=0,Ee=Pe.length;Ge<Ee;Ge++)pa(Pe[Ge],z,Q,Y)}function zn(A,z,Q,Y){let{opaque:J,transmissive:Pe,transparent:Ge}=A;S.setupLightsView(Q),Ce===!0&&se.setGlobalState(E.clippingPlanes,Q),Y&&Le.viewport(X.copy(Y)),J.length>0&&zi(J,z,Q),Pe.length>0&&zi(Pe,z,Q),Ge.length>0&&zi(Ge,z,Q),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function $n(A,z,Q,Y){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[Y.id]===void 0){let ze=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[Y.id]=new bn(1,1,{generateMipmaps:!0,type:ze?hn:mn,minFilter:Yn,samples:Math.max(4,ft.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let Pe=S.state.transmissionRenderTarget[Y.id],Ge=Y.viewport||X;Pe.setSize(Ge.z*E.transmissionResolutionScale,Ge.w*E.transmissionResolutionScale);let Ee=E.getRenderTarget(),Ne=E.getActiveCubeFace(),He=E.getActiveMipmapLevel();E.setRenderTarget(Pe),E.getClearColor($),G=E.getClearAlpha(),G<1&&E.setClearColor(16777215,.5),E.clear(),$e&&B.render(Q);let Qe=E.toneMapping;E.toneMapping=qn;let lt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),S.setupLightsView(Y),Ce===!0&&se.setGlobalState(E.clippingPlanes,Y),zi(A,Q,Y),Ye.updateMultisampleRenderTarget(Pe),Ye.updateRenderTargetMipmap(Pe),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ze=!1;for(let ct=0,It=z.length;ct<It;ct++){let Mt=z[ct],{object:yt,geometry:Bt,material:Be,group:Wt}=Mt;if(Be.side===Rn&&yt.layers.test(Y.layers)){let st=Be.side;Be.side=ln,Be.needsUpdate=!0,pi(yt,Q,Y,Bt,Be,Wt),Be.side=st,Be.needsUpdate=!0,ze=!0}}ze===!0&&(Ye.updateMultisampleRenderTarget(Pe),Ye.updateRenderTargetMipmap(Pe))}E.setRenderTarget(Ee,Ne,He),E.setClearColor($,G),lt!==void 0&&(Y.viewport=lt),E.toneMapping=Qe}function zi(A,z,Q){let Y=z.isScene===!0?z.overrideMaterial:null;for(let J=0,Pe=A.length;J<Pe;J++){let Ge=A[J],{object:Ee,geometry:Ne,group:He}=Ge,Qe=Ge.material;Qe.allowOverride===!0&&Y!==null&&(Qe=Y),Ee.layers.test(Q.layers)&&pi(Ee,z,Q,Ne,Qe,He)}}function pi(A,z,Q,Y,J,Pe){N!==null&&J.isNodeMaterial&&N.setObject(A,J),A.onBeforeRender(E,z,Q,Y,J,Pe),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),J.onBeforeRender(E,z,Q,Y,A,Pe),J.transparent===!0&&J.side===Rn&&J.forceSinglePass===!1?(J.side=ln,J.needsUpdate=!0,E.renderBufferDirect(Q,z,Y,J,A,Pe),J.side=Ni,J.needsUpdate=!0,E.renderBufferDirect(Q,z,Y,J,A,Pe),J.side=Rn):E.renderBufferDirect(Q,z,Y,J,A,Pe),A.onAfterRender(E,z,Q,Y,J,Pe)}function jn(A){let z=0;for(let Q of A)Q.texture!==null&&z++;return z}function ki(A,z,Q){z.isScene!==!0&&(z=ke);let Y=Xe.get(A),J=S.state.lights,Pe=S.state.shadowsArray,Ge=J.state.version,Ee=he.getParameters(A,J.state,Pe,z,Q,S.state.lightProbeGridArray),Ne=he.getProgramCacheKey(Ee),He=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?z.environment:null,Y.fog=z.fog;let Qe=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=D.get(A.envMap||Y.environment,Qe),Y.envMapRotation=Y.environment!==null&&A.envMap===null?z.environmentRotation:A.envMapRotation,He===void 0&&(A.addEventListener("dispose",it),He=new Map,Y.programs=He,Y.programVariants=new Map);let lt=He.get(Ne);if(lt!==void 0){if(Y.currentProgram===lt&&Y.lightsStateVersion===Ge)return kn(A,Ee),lt}else Ee.uniforms=he.getUniforms(A),N!==null&&A.isNodeMaterial&&N.build(A,Q,Ee),A.onBeforeCompile(Ee,E),lt=he.acquireProgram(Ee,Ne),He.set(Ne,lt),Y.uniforms=Ee.uniforms;let ze=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(ze.clippingPlanes=se.uniform),kn(A,Ee),Y.needsLights=Fl(A),Y.lightsStateVersion=Ge,Y.needsLights&&(ze.ambientLightColor.value=J.state.ambient,ze.lightProbe.value=J.state.probe,ze.sunLights.value=J.state.sun,ze.sunLightShadows.value=J.state.sunShadow,ze.directionalLights.value=J.state.directional,ze.directionalLightShadows.value=J.state.directionalShadow,ze.spotLights.value=J.state.spot,ze.spotLightShadows.value=J.state.spotShadow,ze.rectAreaLights.value=J.state.rectArea,ze.ltc_1.value=J.state.rectAreaLTC1,ze.ltc_2.value=J.state.rectAreaLTC2,ze.pointLights.value=J.state.point,ze.pointLightShadows.value=J.state.pointShadow,ze.hemisphereLights.value=J.state.hemi,ze.sunShadowMatrix.value=J.state.sunShadowMatrix,ze.sunShadowCascade.value=J.state.sunShadowCascade,ze.directionalShadowMatrix.value=J.state.directionalShadowMatrix,ze.spotLightMatrix.value=J.state.spotLightMatrix,ze.spotLightMap.value=J.state.spotLightMap,ze.pointShadowMatrix.value=J.state.pointShadowMatrix),Y.numLightProbeGrids=jn(S.state.lightProbeGridArray),Y.currentProgram=lt,Y.uniformsList=null,lt}function Ks(A,z,Q,Y,J){let Pe=Xe.get(A),Ge=Pe.currentProgram.id+","+Y+","+J,Ee=Pe.programVariants.get(Ge);return Ee===void 0?(Ee=ki(A,z,Q),Pe.programVariants.set(Ge,Ee)):(Pe.currentProgram=Ee,Pe.uniformsList=null,Pe.outputColorSpace=Y,Pe.toneMapping=J),Ee}function ma(A){if(A.uniformsList===null){let z=A.currentProgram.getUniforms();A.uniformsList=qs.seqWithValue(z.seq,A.uniforms)}return A.uniformsList}function kn(A,z){let Q=Xe.get(A);Q.outputColorSpace=z.outputColorSpace,Q.batching=z.batching,Q.batchingColor=z.batchingColor,Q.instancing=z.instancing,Q.instancingColor=z.instancingColor,Q.instancingMorph=z.instancingMorph,Q.skinning=z.skinning,Q.morphTargets=z.morphTargets,Q.morphNormals=z.morphNormals,Q.morphColors=z.morphColors,Q.morphTargetsCount=z.morphTargetsCount,Q.numClippingPlanes=z.numClippingPlanes,Q.numIntersection=z.numClipIntersection,Q.vertexAlphas=z.vertexAlphas,Q.vertexTangents=z.vertexTangents,Q.toneMapping=z.toneMapping}function ga(A,z,Q,Y,J){z.isScene!==!0&&(z=ke),Ye.resetTextureUnits();let Pe=z.fog,Ge=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?z.environment:null,Ee=q===null?E.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:dt.workingColorSpace,Ne=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,He=D.get(Y.envMap||Ge,Ne),Qe=Y.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,lt=!!Q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),ze=!!Q.morphAttributes.position,ct=!!Q.morphAttributes.normal,It=!!Q.morphAttributes.color,Mt=qn;Y.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Mt=E.toneMapping);let yt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Bt=yt!==void 0?yt.length:0,Be=Xe.get(Y),Wt=S.state.lights;if(Ce===!0&&(_e===!0||A!==j)){let wt=A===j&&Y.id===H;se.setState(Y,A,wt)}let st=!1,Qn=!1;Y.version===Be.__version?Be.needsLights&&Be.lightsStateVersion!==Wt.state.version||J.isBatchedMesh&&Be.batching===!1||!J.isBatchedMesh&&Be.batching===!0||J.isBatchedMesh&&Be.batchingColor===!0&&J._colorsTexture===null||J.isBatchedMesh&&Be.batchingColor===!1&&J._colorsTexture!==null||J.isInstancedMesh&&Be.instancing===!1||!J.isInstancedMesh&&Be.instancing===!0||J.isSkinnedMesh&&Be.skinning===!1||!J.isSkinnedMesh&&Be.skinning===!0||J.isInstancedMesh&&Be.instancingColor===!0&&J.instanceColor===null||J.isInstancedMesh&&Be.instancingColor===!1&&J.instanceColor!==null||J.isInstancedMesh&&Be.instancingMorph===!0&&J.morphTexture===null||J.isInstancedMesh&&Be.instancingMorph===!1&&J.morphTexture!==null||Be.envMap!==He||Y.fog===!0&&Be.fog!==Pe||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==se.numPlanes||Be.numIntersection!==se.numIntersection)||Be.vertexAlphas!==Qe||Be.vertexTangents!==lt||Be.morphTargets!==ze||Be.morphNormals!==ct||Be.morphColors!==It||Be.morphTargetsCount!==Bt||Be.numLightProbeGrids!==jn(S.state.lightProbeGridArray)?st=!0:(Be.outputColorSpace!==Ee||Be.toneMapping!==Mt)&&(Qn=!0):(st=!0,Be.__version=Y.version);let Lt=Be.currentProgram;(st===!0||Qn===!0)&&(Lt=Qn===!0?Ks(Y,z,J,Ee,Mt):ki(Y,z,J),N&&Y.isNodeMaterial&&N.onUpdateProgram(Y,Lt,Be));let Gn=!1,sn=!1,Vn=!1,ut=Lt.getUniforms(),bt=Be.uniforms;if(Le.useProgram(Lt.program)&&(Gn=!0,sn=!0,Vn=!0),Y.id!==H&&(H=Y.id,sn=!0),Gn||j!==A){Le.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ut.setValue(k,"projectionMatrix",A.projectionMatrix),ut.setValue(k,"viewMatrix",A.matrixWorldInverse);let At=ut.map.cameraPosition;At!==void 0&&At.setValue(k,De.setFromMatrixPosition(A.matrixWorld)),ft.logarithmicDepthBuffer&&ut.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ut.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),j!==A&&(j=A,sn=!0,Vn=!0)}if(Be.needsLights&&(Wt.state.sunShadowMap.length>0&&ut.setValue(k,"sunShadowMap",Wt.state.sunShadowMap,Ye),Wt.state.directionalShadowMap.length>0&&ut.setValue(k,"directionalShadowMap",Wt.state.directionalShadowMap,Ye),Wt.state.spotShadowMap.length>0&&ut.setValue(k,"spotShadowMap",Wt.state.spotShadowMap,Ye),Wt.state.pointShadowMap.length>0&&ut.setValue(k,"pointShadowMap",Wt.state.pointShadowMap,Ye)),J.isSkinnedMesh){ut.setOptional(k,J,"bindMatrix"),ut.setOptional(k,J,"bindMatrixInverse");let wt=J.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ut.setValue(k,"boneTexture",wt.boneTexture,Ye))}J.isBatchedMesh&&(ut.setOptional(k,J,"batchingTexture"),ut.setValue(k,"batchingTexture",J._matricesTexture,Ye),ut.setOptional(k,J,"batchingIdTexture"),ut.setValue(k,"batchingIdTexture",J._indirectTexture,Ye),ut.setOptional(k,J,"batchingColorTexture"),J._colorsTexture!==null&&ut.setValue(k,"batchingColorTexture",J._colorsTexture,Ye));let Xt=Q.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&oe.update(J,Q,Lt),(sn||Be.receiveShadow!==J.receiveShadow)&&(Be.receiveShadow=J.receiveShadow,ut.setValue(k,"receiveShadow",J.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&z.environment!==null&&(bt.envMapIntensity.value=z.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=ey()),sn){if(ut.setValue(k,"toneMappingExposure",E.toneMappingExposure),Be.needsLights&&_a(bt,Vn),Pe&&Y.fog===!0&&be.refreshFogUniforms(bt,Pe),be.refreshMaterialUniforms(bt,Y,ee,Z,S.state.transmissionRenderTarget[A.id]),Be.needsLights&&Be.numLightProbeGrids>0){let wt=M,At=0;for(let $t of S.state.lightProbeGridArray)$t.texture!==null&&(wt.textures[At]=$t.texture,wt.min[At]=$t.boundingBox.min,wt.max[At]=$t.boundingBox.max,wt.resolution[At]=$t.resolution,At++);for(let $t in wt)wt[$t].length=At;bt.probesSH.value=wt.textures,bt.probesMin.value=wt.min,bt.probesMax.value=wt.max,bt.probesResolution.value=wt.resolution}qs.upload(k,ma(Be),bt,Ye)}if(Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(qs.upload(k,ma(Be),bt,Ye),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ut.setValue(k,"center",J.center),ut.setValue(k,"modelViewMatrix",J.modelViewMatrix),ut.setValue(k,"normalMatrix",J.normalMatrix),ut.setValue(k,"modelMatrix",J.matrixWorld),Y.uniformsGroups!==void 0){let wt=Y.uniformsGroups;for(let At=0,$t=wt.length;At<$t;At++){let $s=wt[At];Ve.update($s,Lt),Ve.bind($s,Lt)}}return Lt}function _a(A,z){A.ambientLightColor.needsUpdate=z,A.lightProbe.needsUpdate=z,A.sunLights.needsUpdate=z,A.sunLightShadows.needsUpdate=z,A.directionalLights.needsUpdate=z,A.directionalLightShadows.needsUpdate=z,A.pointLights.needsUpdate=z,A.pointLightShadows.needsUpdate=z,A.spotLights.needsUpdate=z,A.spotLightShadows.needsUpdate=z,A.rectAreaLights.needsUpdate=z,A.hemisphereLights.needsUpdate=z}function Fl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(A,z,Q){let Y=Xe.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),Xe.get(A.texture).__webglTexture=z,Xe.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:Q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,z){let Q=Xe.get(A);Q.__webglFramebuffer=z,Q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(A,z=0,Q=0){q=A,F=z,O=Q;let Y=null,J=!1,Pe=!1;if(A){let Ee=Xe.get(A);if(Ee.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(k.FRAMEBUFFER,Ee.__webglFramebuffer),X.copy(A.viewport),de.copy(A.scissor),fe=A.scissorTest,Le.viewport(X),Le.scissor(de),Le.setScissorTest(fe),H=-1;return}else if(Ee.__webglFramebuffer===void 0)Ye.setupRenderTarget(A);else if(Ee.__hasExternalTextures)Ye.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Qe=A.depthTexture;if(Ee.__boundDepthTexture!==Qe){if(Qe!==null&&Xe.has(Qe)&&(A.width!==Qe.image.width||A.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ye.setupDepthRenderbuffer(A)}}let Ne=A.texture;(Ne.isData3DTexture||Ne.isDataArrayTexture||Ne.isCompressedArrayTexture)&&(Pe=!0);let He=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(He[z])?Y=He[z][Q]:Y=He[z],J=!0):A.samples>0&&Ye.useMultisampledRTT(A)===!1?Y=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(He)?Y=He[Q]:Y=He,X.copy(A.viewport),de.copy(A.scissor),fe=A.scissorTest}else X.copy(ye).multiplyScalar(ee).floor(),de.copy(ce).multiplyScalar(ee).floor(),fe=le;if(Q!==0&&(Y=L),Le.bindFramebuffer(k.FRAMEBUFFER,Y)&&Le.drawBuffers(A,Y),Le.viewport(X),Le.scissor(de),Le.setScissorTest(fe),J){let Ee=Xe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ee.__webglTexture,Q)}else if(Pe){let Ee=z;for(let Ne=0;Ne<A.textures.length;Ne++){let He=Xe.get(A.textures[Ne]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Ne,He.__webglTexture,Q,Ee)}}else if(A!==null&&Q!==0){let Ee=Xe.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ee.__webglTexture,Q)}H=-1};function un(A){let z=Xe.get(A);return(z.__readFormat!==A.format||z.__readType!==A.type)&&(z.__readFormat=A.format,z.__readType=A.type,z.__formatReadable=ft.textureFormatReadable(A.format),z.__typeReadable=ft.textureTypeReadable(A.type)),z}this.readRenderTargetPixels=function(A,z,Q,Y,J,Pe,Ge,Ee=0){if(!(A&&A.isWebGLRenderTarget)){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ne=Ne[Ge],Array.isArray(Ne)&&(Ne=Ne[0])),Ne){Le.bindFramebuffer(k.FRAMEBUFFER,Ne);try{let He=A.textures[Ee],Qe=He.format,lt=He.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ee);let ze=un(He);if(ze.__formatReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ze.__typeReadable===!1){Ze("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-J&&k.readPixels(z,Q,Y,J,Me.convert(Qe),Me.convert(lt),Pe)}finally{let He=q!==null?Xe.get(q).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,z,Q,Y,J,Pe,Ge,Ee=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ne=Ne[Ge],Array.isArray(Ne)&&(Ne=Ne[0])),Ne)if(z>=0&&z<=A.width-Y&&Q>=0&&Q<=A.height-J){Le.bindFramebuffer(k.FRAMEBUFFER,Ne);let He=A.textures[Ee],Qe=He.format,lt=He.type;A.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Ee);let ze=un(He);if(ze.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ze.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.bufferData(k.PIXEL_PACK_BUFFER,Pe.byteLength,k.STREAM_READ),k.readPixels(z,Q,Y,J,Me.convert(Qe),Me.convert(lt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);let It=q!==null?Xe.get(q).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,It);let Mt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await md(k,Mt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,ct),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Pe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(ct),k.deleteSync(Mt),Pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,z=null,Q=0){let Y=Math.pow(2,-Q),J=Math.floor(A.image.width*Y),Pe=Math.floor(A.image.height*Y),Ge=z!==null?z.x:0,Ee=z!==null?z.y:0;Ye.setTexture2D(A,0),k.copyTexSubImage2D(k.TEXTURE_2D,Q,0,0,Ge,Ee,J,Pe),Le.unbindTexture()},this.copyTextureToTexture=function(A,z,Q=null,Y=null,J=0,Pe=0){let Ge,Ee,Ne,He,Qe,lt,ze,ct,It,Mt=A.isCompressedTexture?A.mipmaps[Pe]:A.image;if(Q!==null)Ge=Q.max.x-Q.min.x,Ee=Q.max.y-Q.min.y,Ne=Q.isBox3?Q.max.z-Q.min.z:1,He=Q.min.x,Qe=Q.min.y,lt=Q.isBox3?Q.min.z:0;else{let ut=Math.pow(2,-J);Ge=Math.floor(Mt.width*ut),Ee=Math.floor(Mt.height*ut),A.isDataArrayTexture?Ne=Mt.depth:A.isData3DTexture?Ne=Math.floor(Mt.depth*ut):Ne=1,He=0,Qe=0,lt=0}Y!==null?(ze=Y.x,ct=Y.y,It=Y.z):(ze=0,ct=0,It=0);let yt=Me.convert(z.format),Bt=Me.convert(z.type),Be;z.isData3DTexture?(Ye.setTexture3D(z,0),Be=k.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(Ye.setTexture2DArray(z,0),Be=k.TEXTURE_2D_ARRAY):(Ye.setTexture2D(z,0),Be=k.TEXTURE_2D),Le.activeTexture(k.TEXTURE0),Le.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,z.flipY),Le.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),Le.pixelStorei(k.UNPACK_ALIGNMENT,z.unpackAlignment);let Wt=Le.getParameter(k.UNPACK_ROW_LENGTH),st=Le.getParameter(k.UNPACK_IMAGE_HEIGHT),Qn=Le.getParameter(k.UNPACK_SKIP_PIXELS),Lt=Le.getParameter(k.UNPACK_SKIP_ROWS),Gn=Le.getParameter(k.UNPACK_SKIP_IMAGES);Le.pixelStorei(k.UNPACK_ROW_LENGTH,Mt.width),Le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt.height),Le.pixelStorei(k.UNPACK_SKIP_PIXELS,He),Le.pixelStorei(k.UNPACK_SKIP_ROWS,Qe),Le.pixelStorei(k.UNPACK_SKIP_IMAGES,lt);let sn=A.isDataArrayTexture||A.isData3DTexture,Vn=z.isDataArrayTexture||z.isData3DTexture;if(A.isDepthTexture){let ut=Xe.get(A),bt=Xe.get(z),Xt=Xe.get(ut.__renderTarget),wt=Xe.get(bt.__renderTarget);Le.bindFramebuffer(k.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<Ne;At++)sn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,J,lt+At),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Xe.get(z).__webglTexture,Pe,It+At)),k.blitFramebuffer(He,Qe,He+Ge,Qe+Ee,ze,ct,ze+Ge,ct+Ee,k.DEPTH_BUFFER_BIT,k.NEAREST);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(J!==0||A.isRenderTargetTexture||Xe.has(A)){let ut=Xe.get(A),bt=Xe.get(z);Le.bindFramebuffer(k.READ_FRAMEBUFFER,C),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let Xt=0;Xt<Ne;Xt++)sn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,ut.__webglTexture,J,lt+Xt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ut.__webglTexture,J),Vn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,bt.__webglTexture,Pe,It+Xt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,bt.__webglTexture,Pe),J!==0?k.blitFramebuffer(He,Qe,He+Ge,Qe+Ee,ze,ct,ze+Ge,ct+Ee,k.COLOR_BUFFER_BIT,k.NEAREST):Vn?k.copyTexSubImage3D(Be,Pe,ze,ct,It+Xt,He,Qe,Ge,Ee):k.copyTexSubImage2D(Be,Pe,ze,ct,He,Qe,Ge,Ee);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Vn?A.isDataTexture||A.isData3DTexture?k.texSubImage3D(Be,Pe,ze,ct,It,Ge,Ee,Ne,yt,Bt,Mt.data):z.isCompressedArrayTexture?k.compressedTexSubImage3D(Be,Pe,ze,ct,It,Ge,Ee,Ne,yt,Mt.data):k.texSubImage3D(Be,Pe,ze,ct,It,Ge,Ee,Ne,yt,Bt,Mt):A.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Pe,ze,ct,Ge,Ee,yt,Bt,Mt.data):A.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Pe,ze,ct,Mt.width,Mt.height,yt,Mt.data):k.texSubImage2D(k.TEXTURE_2D,Pe,ze,ct,Ge,Ee,yt,Bt,Mt);Le.pixelStorei(k.UNPACK_ROW_LENGTH,Wt),Le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,st),Le.pixelStorei(k.UNPACK_SKIP_PIXELS,Qn),Le.pixelStorei(k.UNPACK_SKIP_ROWS,Lt),Le.pixelStorei(k.UNPACK_SKIP_IMAGES,Gn),Pe===0&&z.generateMipmaps===!0&&z.mipmapsAutoUpdate===!0&&k.generateMipmap(Be),Le.unbindTexture()},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&Ye.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Ye.setTextureCube(A,0):A.isData3DTexture?Ye.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ye.setTexture2DArray(A,0):Ye.setTexture2D(A,0),Le.unbindTexture()},this.resetState=function(){F=0,O=0,q=null,Le.reset(),Ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var af={type:"change"},Mh={type:"start"},lf={type:"end"},bl=new Yi,of=new an,ty=Math.cos(70*Qc.DEG2RAD),Vt=new W,gn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},vh=1e-6,wl=class extends Yr{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new W,this.cursor=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new W,this._lastQuaternion=new on,this._lastTargetPosition=new W,this._quat=new on().setFromUnitVectors(e.up,new W(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new W,this._rotateStart=new Ue,this._rotateEnd=new Ue,this._rotateDelta=new Ue,this._panStart=new Ue,this._panEnd=new Ue,this._panDelta=new Ue,this._dollyStart=new Ue,this._dollyEnd=new Ue,this._dollyDelta=new Ue,this._dollyDirection=new W,this._mouse=new Ue,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=iy.bind(this),this._onPointerDown=ny.bind(this),this._onPointerUp=sy.bind(this),this._onContextMenu=uy.bind(this),this._onMouseWheel=oy.bind(this),this._onKeyDown=ly.bind(this),this._onTouchStart=cy.bind(this),this._onTouchMove=hy.bind(this),this._onMouseDown=ry.bind(this),this._onMouseMove=ay.bind(this),this._interceptControlDown=dy.bind(this),this._interceptControlUp=fy.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(af),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Vt.copy(t).sub(this.target),Vt.applyQuaternion(this._quat),this._spherical.setFromVector3(Vt),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Vt.setFromSpherical(this._spherical),Vt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Vt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Vt.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new W(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new W(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Vt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(bl.origin.copy(this.object.position),bl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(bl.direction))<ty?this.object.lookAt(this.target):(of.setFromNormalAndCoplanarPoint(this.object.up,this.target),bl.intersectPlane(of,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>vh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>vh||this._lastTargetPosition.distanceToSquared(this.target)>vh?(this.dispatchEvent(af),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Vt.setFromMatrixColumn(t,0),Vt.multiplyScalar(-e),this._panOffset.add(Vt)}_panUp(e,t){this.screenSpacePanning===!0?Vt.setFromMatrixColumn(t,1):(Vt.setFromMatrixColumn(t,0),Vt.crossVectors(this.object.up,Vt)),Vt.multiplyScalar(e),this._panOffset.add(Vt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Vt.copy(s).sub(this.target);let r=Vt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Ue,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function ny(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function iy(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function sy(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(lf),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ry(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Mh)}function ay(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function oy(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Mh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(lf))}function ly(i){this.enabled!==!1&&this._handleKeyDown(i)}function cy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1){this.state=xt.NONE;break}this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1){this.state=xt.NONE;break}this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Mh)}function hy(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function uy(i){this.enabled!==!1&&i.preventDefault()}function dy(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fy(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Al=class extends Br{constructor(e){super(e),this.type=hn}parse(e){let a=function(v,R){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(R||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(R||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(R||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(R||""))}},f=function(v,R,E){R=R||1024;let N=v.pos,L=-1,C=0,U="",F=String.fromCharCode.apply(null,new Uint16Array(v.subarray(N,N+128)));for(;0>(L=F.indexOf(`
`))&&C<R&&N<v.byteLength;)U+=F,C+=F.length,N+=128,F=String.fromCharCode.apply(null,new Uint16Array(v.subarray(N,N+128)));return-1<L?(E!==!1&&(v.pos+=C+L+1),U+F.slice(0,L)):!1},p=function(v){let R=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},U,F;for((v.pos>=v.byteLength||!(U=f(v)))&&a(1,"no header found"),(F=U.match(R))||a(3,"bad initial token"),C.valid|=1,C.programtype=F[1],C.string+=U+`
`;U=f(v),U!==!1;){if(C.string+=U+`
`,U.charAt(0)==="#"){C.comments+=U+`
`;continue}if((F=U.match(E))&&(C.gamma=parseFloat(F[1])),(F=U.match(P))&&(C.exposure=parseFloat(F[1])),(F=U.match(N))&&(C.valid|=2,C.format=F[1]),(F=U.match(L))&&(C.valid|=4,C.height=parseInt(F[1],10),C.width=parseInt(F[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},m=function(v,R,E){let P=R;if(P<8||P>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);P!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");let N=new Uint8Array(4*R*E);N.length||a(4,"unable to allocate buffer space");let L=0,C=0,U=4*P,F=new Uint8Array(4),O=new Uint8Array(U),q=E;for(;q>0&&C<v.byteLength;){C+4>v.byteLength&&a(1),F[0]=v[C++],F[1]=v[C++],F[2]=v[C++],F[3]=v[C++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=P)&&a(3,"bad rgbe scanline format");let H=0,j;for(;H<U&&C<v.byteLength;){j=v[C++];let de=j>128;if(de&&(j-=128),(j===0||H+j>U)&&a(3,"bad scanline data"),de){let fe=v[C++];for(let $=0;$<j;$++)O[H++]=fe}else O.set(v.subarray(C,C+j),H),H+=j,C+=j}let X=P;for(let de=0;de<X;de++){let fe=0;N[L]=O[de+fe],fe+=P,N[L+1]=O[de+fe],fe+=P,N[L+2]=O[de+fe],fe+=P,N[L+3]=O[de+fe],L+=4}q--}return N},g=function(v,R,E,P){let N=v[R+3],L=Math.pow(2,N-128)/255;E[P+0]=v[R+0]*L,E[P+1]=v[R+1]*L,E[P+2]=v[R+2]*L,E[P+3]=1},x=function(v,R,E,P){let N=v[R+3],L=Math.pow(2,N-128)/255;E[P+0]=bi.toHalfFloat(Math.min(v[R+0]*L,65504)),E[P+1]=bi.toHalfFloat(Math.min(v[R+1]*L,65504)),E[P+2]=bi.toHalfFloat(Math.min(v[R+2]*L,65504)),E[P+3]=bi.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;let h=p(u),y=h.width,w=h.height,M=m(u.subarray(u.pos),y,w),T,S,_;switch(this.type){case cn:_=M.length/4;let v=new Float32Array(_*4);for(let E=0;E<_;E++)g(M,E*4,v,E*4);T=v,S=cn;break;case hn:_=M.length/4;let R=new Uint16Array(_*4);for(let E=0;E<_;E++)x(M,E*4,R,E*4);T=R,S=hn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:w,data:T,header:h.string,gamma:h.gamma,exposure:h.exposure,type:S,colorSpace:qi,minFilter:Ut,magFilter:Ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Tl=class extends Al{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};function cf(i,e,t){let{gardenStone:n,postBrick:s,tuscanBrick:r,tuscanFenceWall:a,copingStone:o,fenceIron:l,timber:c}=t,d=[[[-19,-17],[19,-17]],[[-19,-17],[-19,20.5]],[[19,-17],[19,20.5]],[[-19,20.5],[-2.1,20.5]],[[2.1,20.5],[7,20.5]],[[12,20.5],[19,20.5]]],f=new Map,p=new i.MeshStandardMaterial({color:"#48525b",roughness:.47,metalness:.52,side:i.DoubleSide}),m=c,g=[l,p],x="iron",u=!0,h=(S,_,v,R,E,P,N,L,C=!0)=>{let U=new i.Mesh(new i.BoxGeometry(_,v,R),E);return U.position.set(P,N,L),U.castShadow=C,U.receiveShadow=!0,S.add(U),U},y=(S,_,v,R,E=!1)=>{if(!_.length)return;let P=new i.BoxGeometry(...v),N=new i.InstancedMesh(P,R,_.length),L=new i.Matrix4,C=new i.Quaternion,U=new i.Vector3(1,1,1);for(let F=0;F<_.length;F++){let[O,q,H,j=0]=_[F];C.setFromEuler(new i.Euler(j,0,0)),L.compose(new i.Vector3(O,q,H),C,U),N.setMatrixAt(F,L)}return N.instanceMatrix.needsUpdate=!0,N.castShadow=E,N.receiveShadow=!0,S.add(N),N},w=(S,_,v=l,R=[.45,1.47])=>{for(let E of R)h(S,_,.082,.092,v,0,E,0,!1)};function M(S,_,v){let R=v==="tuscan"||v==="brickIron";if(v==="tuscan")h(S,_,1.77,.24,a,0,.97,0),h(S,_+.08,.135,.41,o,0,1.91,0),h(S,_,.26,.35,n,0,.15,0);else if(v==="stone")h(S,_,.98,.27,n,0,.54,0),h(S,_+.1,.105,.42,o,0,1.08,0);else if(v==="wood"||v==="ranch"||v==="louvers"){if(v==="wood")for(let E=.3;E<=1.65;E+=.19)h(S,_,.14,.105,m,0,E,0,!1);if(v==="ranch")for(let E=.38;E<=1.8;E+=.33)h(S,_,.25,.09,p,0,E,0,!1);if(v==="louvers"){let E=[];for(let P=.24;P<=1.82;P+=.16)E.push([0,P,0,-.42]);y(S,E,[_,.18,.08],p,!1)}}else if(v==="profiled"){h(S,_,.3,.28,n,0,.18,0,!1);let E=Math.max(20,Math.ceil(_/.12)),P=[],N=[];for(let U=0;U<=E;U++){let F=-_/2+_*U/E,O=.1*Math.sin(F*2*Math.PI/.3);P.push(F,.3,O,F,1.98,O)}for(let U=0;U<E;U++){let F=U*2;N.push(F,F+1,F+2,F+1,F+3,F+2)}let L=new i.BufferGeometry;L.setAttribute("position",new i.Float32BufferAttribute(P,3)),L.setIndex(N),L.computeVertexNormals();let C=new i.Mesh(L,p);C.castShadow=!0,C.receiveShadow=!0,S.add(C),h(S,_,.075,.18,l,0,2.02,0,!1)}else if(v==="panel3d"){let E=[];for(let N=-_/2+.12;N<_/2;N+=.21)E.push([N,1.02,0]);y(S,E,[.029,1.9,.032],l,!1);let P=[];for(let N=.22;N<2.04;N+=.25)P.push([0,N,0]);y(S,P,[_,.034,.03],l,!1),w(S,_,l,[.15,1.94])}else if(v==="picket"||v==="chess"){w(S,_,l,[.43,1.55]);let E=v==="chess"?2:1,P=[],N=Math.ceil(_/(v==="chess"?.225:.28));for(let L=0;L<E;L++)for(let C=0;C<N;C++){let U=-_/2+(C+.5+(L?.5:0))*_/N;U>_/2-.1||P.push([U,1.02,L?.11:-.08])}y(S,P,[.14,1.73,.05],p,!0)}else if(v==="brickIron"){h(S,_,.55,.31,a,0,.3,0,!1),h(S,_,.105,.43,o,0,.61,0,!1),w(S,_,l,[.75,1.9]);let E=[];for(let P=-_/2+.15;P<_/2;P+=.25)E.push([P,1.32,0]);y(S,E,[.05,1.25,.052],p,!1)}else{w(S,_,l,[.4,1.7]);let E=[];for(let P=-_/2+.11;P<_/2;P+=.24)E.push([P,1.1,0]);y(S,E,[.048,1.79,.048],l,!1);for(let P=-_/2+.18;P<_/2;P+=.73){let N=new i.Mesh(new i.TorusGeometry(.16,.025,6,18,Math.PI),l);N.position.set(P,1.28,.045),S.add(N)}}(R||v==="stone")&&h(S,_,.16,.43,n,0,.09,0,!1)}function T(S){let _=new i.Group;_.name="Fence \xB7 "+S;let v=[],R=new Map,E=["tuscan","stone","brickIron"].includes(S);for(let[[F,O],[q,H]]of d){let j=q-F,X=H-O,de=Math.hypot(j,X),fe=new i.Group;fe.position.set((F+q)/2,0,(O+H)/2),fe.rotation.y=-Math.atan2(X,j),_.add(fe),M(fe,de,S);let $=Math.max(1,Math.ceil(de/(E?3.4:4)));for(let G=0;G<=$;G++){let V=G/$,Z=F+j*V,ee=O+X*V;R.set(Z.toFixed(3)+":"+ee.toFixed(3),[Z,ee])}}let P=S==="tuscan"||S==="brickIron"?r:S==="stone"?n:s,N=S==="tuscan"?2.17:S==="brickIron"?2:2.02;for(let[F,O]of R.values()){let q=E?.52:.2;h(_,q,N,q,E?P:l,F,N/2+.05,O),E&&h(_,q+.13,.105,q+.13,o,F,N+.12,O)}let L=20.5,C=E?P:s,U=E?2.6:2.25;for(let F of[{a:-2.1,b:2.1,name:"\u041A\u0430\u043B\u0438\u0442\u043A\u0430"},{a:7,b:12,name:"\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"}]){let O=F.b-F.a;for(let q of[F.a,F.b]){h(_,.38,U,.38,C,q,U/2,L),h(_,.51,.13,.51,o,q,U+.085,L);let H=new i.Mesh(new i.SphereGeometry(.1,10,7),new i.MeshStandardMaterial({color:"#f4d7a6",emissive:"#a56d39",emissiveIntensity:.2}));H.position.set(q,U+.22,L),_.add(H)}for(let q of[-1,1]){let H=new i.Group;H.name=F.name,H.position.set(q===-1?F.a+.12:F.b-.12,0,L),H.rotation.y=u?q*.48:0,F.name==="\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"&&v.push({pivot:H,side:q}),_.add(H);let j=O/2-.24,X=q===-1?j/2:-j/2;for(let fe of[.4,1.61])h(H,j,.09,.09,l,X,fe,0,!1);let de=Math.max(6,Math.round(j/.22));for(let fe=0;fe<de;fe++){let $=X-j/2+(fe+.5)*j/de;h(H,.055,1.65,.065,p,$,1.01,0,!1)}}}return _.userData.vehicleGatePivots=v,e.add(_),f.set(S,_),_}return{setType(S){x=S;for(let[v,R]of f)R.visible=v===S;let _=f.get(S)||T(S);return _.visible=!0,_},setColor(S){for(let _ of g)_.color.set(S)},getType(){return x},setVehicleAccess(S){u=!!S;for(let _ of f.values())for(let{pivot:v,side:R}of _.userData.vehicleGatePivots||[])v.rotation.y=u?R*.48:0},available:["iron","tuscan","wood","stone","brickIron","louvers","picket","chess","ranch","profiled","panel3d"]}}function hf(i,e,{tileRoof:t,roofSurface:n}){let s=new i.MeshStandardMaterial({color:"#666d70",roughness:.76,metalness:.17,envMapIntensity:.38,side:i.DoubleSide}),r=new i.MeshStandardMaterial({color:"#72736d",roughness:.83,metalness:.07,side:i.DoubleSide}),a=new i.MeshStandardMaterial({color:"#737577",roughness:.94,metalness:0,side:i.DoubleSide}),o=new i.MeshStandardMaterial({color:"#70797b",roughness:.4,metalness:.62,side:i.DoubleSide}),l=[s,r,a,o,n],c=new Map,d=["slate","terracotta","graphite","ceramic","metalGraphite","metalBurgundy","metal3d","metalModular","metalTramontana","standingSeam","flexible","composite","profiled"],f="slate",p=!0;function m(g,x,u){let w=[],M=[],T=[],S={metalGraphite:{wave:.035,step:.012,period:.78,courses:19},metalBurgundy:{wave:.035,step:.012,period:.78,courses:19},metal3d:{wave:.067,step:.023,period:.91,courses:18},metalModular:{wave:.044,step:.018,period:.8,courses:20},metalTramontana:{wave:.062,step:.026,period:.86,courses:18},standingSeam:{wave:.13,step:0,period:1.13,courses:0},composite:{wave:.07,step:.06,period:.58,courses:7},flexible:{wave:.003,step:.018,period:.46,courses:9},profiled:{wave:.14,step:0,period:.64,courses:0}}[x];for(let R=0;R<=72;R++){let E=R/72;for(let P=0;P<=94;P++){let N=P/94,L=-5.3+10.6*N,C=(L+5.3)*2*Math.PI/S.period,U=S.courses===0?0:Math.pow(Math.max(0,Math.sin(2*Math.PI*E*S.courses)),10)*S.step,F=Math.cos(C),O=x==="standingSeam"?Math.pow(Math.max(0,F),18)*S.wave:x==="profiled"?Math.sin(C)*S.wave:x==="metalModular"?Math.pow(Math.abs(F),4)*S.wave:x==="metalTramontana"?(Math.pow(Math.max(0,F),3)*.7+Math.pow(Math.max(0,Math.cos(2*C+.3)),3)*.3)*S.wave:x==="metal3d"?Math.pow(Math.max(0,F),2.5)*S.wave:Math.pow(Math.max(0,F),1.4)*S.wave;w.push(g*7.25*(1-E),6.98+2.07*E+.052+U+O,L),M.push(N*2.75,E*3.4)}}for(let R=0;R<72;R++)for(let E=0;E<94;E++){let P=R*95+E,N=P+94+1;T.push(P,N,P+1,N,N+1,P+1)}let _=new i.BufferGeometry;_.setAttribute("position",new i.Float32BufferAttribute(w,3)),_.setAttribute("uv",new i.Float32BufferAttribute(M,2)),_.setIndex(T),_.computeVertexNormals();let v=new i.Mesh(_,u);return v.castShadow=!0,v.receiveShadow=!0,v}for(let g of d){if(["slate","terracotta","graphite","ceramic"].includes(g))continue;let x=new i.Group;x.name="Roof "+g;let u=g==="standingSeam"?o:g==="composite"?r:g==="flexible"?a:s;x.add(m(-1,g,u),m(1,g,u)),x.visible=!1,e.add(x),c.set(g,x)}return{types:d,metalMat:s,compositeMat:r,flexibleMat:a,seamMat:o,setType(g){let x=d.includes(g)?g:"slate";f=x,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(x);for(let[u,h]of c)h.visible=p&&u===x},setEnabled(g){p=!!g,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(f);for(let[x,u]of c)u.visible=p&&x===f},getMaterial(){return["slate","terracotta","graphite","ceramic"].includes(f)?n:f==="standingSeam"?o:f==="composite"?r:f==="flexible"?a:s},setColor(g){for(let x of l)x.color.set(g)},setPhotoMap(g){for(let x of[s,o])x.map=g,x.needsUpdate=!0},setMetalNormal(g){for(let x of[s,o])x.normalMap=g,x.normalScale.set(.075,.075),x.needsUpdate=!0},setMetalRoughness(g){o.roughnessMap=g,o.needsUpdate=!0,s.roughnessMap=null,s.needsUpdate=!0},setTileMap(g){n.map=g,n.needsUpdate=!0},getType(){return f}}}var oa={metalGraphite:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metalBurgundy:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metal3d:{pitch:.91,amplitude:.067,step:.4,stepHeight:.023,style:"high"},metalModular:{pitch:.8,amplitude:.044,step:.35,stepHeight:.018,style:"symmetric"},metalTramontana:{pitch:.86,amplitude:.062,step:.4,stepHeight:.026,style:"sculpted"},composite:{pitch:.61,amplitude:.057,step:.35,stepHeight:.023,style:"classic"},profiled:{pitch:.58,amplitude:.075,step:.99,stepHeight:0,style:"symmetric"}},py=i=>Math.max(0,Math.min(1,i)),my=i=>i-Math.floor(i);function gy(i,e,t){let n=oa[i];if(!n)return 0;let s=2*Math.PI*e/n.pitch,r=Math.cos(s),a;n.style==="symmetric"?a=Math.pow(Math.abs(r),4)*n.amplitude:n.style==="high"?a=Math.pow(Math.max(0,r),2.5)*n.amplitude:n.style==="sculpted"?a=(.65*Math.pow(Math.max(0,r),3)+.35*Math.pow(Math.max(0,Math.cos(2*s+.3)),3))*n.amplitude:a=Math.pow(Math.max(0,r),1.35)*n.amplitude;let o=my(t/n.step),l=n.stepHeight*Math.pow(Math.max(0,Math.cos(2*Math.PI*o)),6);return a+l}function El(i,e,t){let n=e.length===3,s=typeof window<"u"&&window.matchMedia("(min-width:850px)").matches?80:56,r=[...e.map(u=>u[0])],a=[...e.map(u=>u[2])],o=Math.max(...r)-Math.min(...r),c=Math.max(...a)-Math.min(...a)>=o,d=[],f=[],p=[],m=(u,h)=>{if(n){let S=e[0],_=e[1],v=e[2],R=1-u-h;return[S[0]*R+_[0]*u+v[0]*h,S[1]*R+_[1]*u+v[1]*h,S[2]*R+_[2]*u+v[2]*h]}let[y,w,M,T]=e;return[y[0]*(1-u)*(1-h)+w[0]*u*(1-h)+M[0]*u*h+T[0]*(1-u)*h,y[1]*(1-u)*(1-h)+w[1]*u*(1-h)+M[1]*u*h+T[1]*(1-u)*h,y[2]*(1-u)*(1-h)+w[2]*u*(1-h)+M[2]*u*h+T[2]*(1-u)*h]},g=(u,h)=>{let y=m(u,h),w=n?Math.min(u,h,1-u-h):Math.min(u,h,1-u,1-h),M=py(w*80),T=c?y[2]:y[0],S=c?y[0]:y[2];y[1]+=gy(t,T,S)*M,d.push(...y),f.push(y[0]*.26+y[2]*.13,y[2]*.24+y[1]*.11)};if(n){let u=(h,y)=>h*(s+1)-h*(h-1)/2+y;for(let h=0;h<=s;h++)for(let y=0;y<=s-h;y++)g(h/s,y/s);for(let h=0;h<s;h++)for(let y=0;y<s-h;y++){let w=u(h,y),M=u(h+1,y),T=u(h,y+1);p.push(w,M,T),y<s-h-1&&p.push(M,u(h+1,y+1),T)}}else{for(let u=0;u<=s;u++)for(let h=0;h<=s;h++)g(h/s,u/s);for(let u=0;u<s;u++)for(let h=0;h<s;h++){let y=u*(s+1)+h,w=y+1,M=y+s+1;p.push(y,w,M,w,M+1,M)}}let x=new i.BufferGeometry;return x.setAttribute("position",new i.Float32BufferAttribute(d,3)),x.setAttribute("uv",new i.Float32BufferAttribute(f,2)),x.setIndex(p),x.computeVertexNormals(),x}function uf(i,e,{roofSystem:t,roofRidge:n,gableFacades:s}){let r=["gable","hip","flat","mansard"],a=new Map,o=7.28,l=5.3,c=7.06,d=new i.MeshStandardMaterial({color:"#ccc7bd",roughness:.68,metalness:.04,side:i.DoubleSide}),f=new i.MeshStandardMaterial({color:"#e4dbca",roughness:.87,metalness:0,side:i.DoubleSide}),p=new i.MeshStandardMaterial({color:"#d2c6b4",roughness:.74,metalness:.04,side:i.DoubleSide}),m=t.getMaterial(),g=(V,Z,ee=m)=>{let ie=[],Ie=[],ye=[];Z.forEach(ae=>{ie.push(...ae),Ie.push(ae[0]*.24,ae[2]*.22+ae[1]*.1)});for(let ae=1;ae<Z.length-1;ae++)ye.push(0,ae,ae+1);let ce=new i.BufferGeometry;ce.setAttribute("position",new i.Float32BufferAttribute(ie,3)),ce.setAttribute("uv",new i.Float32BufferAttribute(Ie,2)),ce.setIndex(ye),ce.computeVertexNormals();let le=new i.Mesh(ce,ee);return le.castShadow=!0,le.receiveShadow=!0,ee===m&&(le.userData.isRoofShell=!0,le.userData.corners=Z.map(ae=>[...ae]),le.userData.baseGeometry=ce),V.add(le),le},x=(V,Z,ee,ie,Ie,ye,ce,le=d)=>{let ae=new i.Mesh(new i.BoxGeometry(Z,ee,ie),le);return ae.position.set(Ie,ye,ce),ae.castShadow=!0,ae.receiveShadow=!0,V.add(ae),ae},u=V=>{let Z=new i.Group;return Z.name="KASKAD roof "+V,Z.visible=!1,e.add(Z),a.set(V,Z),Z},h=6.4,y=4.5,w=(V,Z,ee=!1)=>{let ie=Ie=>ee?6.98+2.07*(1-Math.abs(Ie)/7.25)-.14:Z;for(let Ie of[-1,1]){let ye=Ie*o,ce=Ie*h;g(V,[[ye,ie(ye),-y],[ce,ie(ce),-y],[ce,ie(ce),y],[ye,ie(ye),y]],f)}for(let Ie of[-1,1])for(let ye of[-1,1]){let ce=Ie*l,le=Ie*y,ae=ye*o,pe=ye*h;ee?g(V,[[0,ie(0),ce],[ae,ie(ae),ce],[pe,ie(pe),le],[0,ie(0),le]],f):g(V,[[0,Z,ce],[ae,Z,ce],[pe,Z,le],[0,Z,le]],f)}for(let Ie of[-1,1])x(V,.18,.22,l*2,Ie*o,ee?6.85:Z+.1,0,p);if(ee)for(let Ie of[-1,1])for(let ye of[-1,1]){let ce=o,le=9.05-6.98,ae=Math.hypot(ce,le),pe=x(V,ae,.19,.2,ye*o/2,(6.98+9.05)/2-.08,Ie*l,p);pe.rotation.z=ye===-1?Math.atan2(le,ce):-Math.atan2(le,ce)}else for(let Ie of[-1,1])x(V,o*2+.18,.22,.18,0,Z+.1,Ie*l,p)},M=u("gable");w(M,6.91,!0);let T=u("hip"),S=2.1,_=8.78;g(T,[[-o,c,-l],[o,c,-l],[0,_,-S]]),g(T,[[o,c,l],[-o,c,l],[0,_,S]]),g(T,[[-o,c,l],[-o,c,-l],[0,_,-S],[0,_,S]]),g(T,[[o,c,-l],[o,c,l],[0,_,S],[0,_,-S]]),w(T,6.92);let v=u("flat");g(v,[[-o,7.2,-l],[o,7.2,-l],[o,7.2,l],[-o,7.2,l]]);for(let V of[-o,o])x(v,.23,.47,l*2+.3,V,7.37,0);for(let V of[-l,l])x(v,o*2+.4,.47,.23,0,7.37,V);w(v,7.01);let R=u("mansard"),E=[[-o,c,-l],[o,c,-l],[o,c,l],[-o,c,l]],P=[[-5.55,8.31,-3.91],[5.55,8.31,-3.91],[5.55,8.31,3.91],[-5.55,8.31,3.91]],N=[[-4.35,8.77,-2.95],[4.35,8.77,-2.95],[4.35,8.77,2.95],[-4.35,8.77,2.95]];for(let V=0;V<4;V++){let Z=(V+1)%4;g(R,[E[V],E[Z],P[Z],P[V]]),g(R,[P[V],P[Z],N[Z],N[V]])}let L=9.84,C=1.42;g(R,[N[0],N[1],[0,L,-C]]),g(R,[N[2],N[3],[0,L,C]]),g(R,[N[3],N[0],[0,L,-C],[0,L,C]]),g(R,[N[1],N[2],[0,L,C],[0,L,-C]]),w(R,6.92);let U=new i.MeshStandardMaterial({color:"#50585a",metalness:.48,roughness:.54}),F=new i.MeshStandardMaterial({color:"#4d5557",metalness:.36,roughness:.62}),O=(V,Z,ee,ie)=>{for(let Ie of[0,.15]){let ye=x(V,.065,.065,ie*2,Z,ee+Ie,0,U);ye.name="\u0421\u043D\u0435\u0433\u043E\u0437\u0430\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044C, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u0432\u0435 \u0442\u0440\u0443\u0431\u044B"}for(let Ie of[-ie+.6,0,ie-.6])x(V,.075,.26,.12,Z,ee-.08,Ie,U)},q=(V,Z)=>{for(let ee of[-1,1]){x(V,.2,.13,l*2+.05,ee*(o+.06),Z,0,F).name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0436\u0435\u043B\u043E\u0431";let ie=x(V,.115,6.6,.115,ee*(o+.06),3.57,ee===1?l-.35:-l+.35,F);ie.name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430"}for(let ee of[-1,1])x(V,o*2+.12,.13,.2,0,Z,ee*(l+.06),F)};O(M,-6.4,7.28,l-.36),O(M,6.4,7.28,l-.36),O(T,-6.47,7.31,l-.38),O(T,6.47,7.31,l-.38),O(R,-6.63,7.57,l-.38),O(R,6.63,7.57,l-.38),q(M,6.91),q(T,6.91),q(R,6.91);let H=[M,T,R],j=new i.MeshStandardMaterial({color:"#476676",roughness:.32,metalness:.15}),X=new i.MeshStandardMaterial({color:"#454f51",roughness:.52,metalness:.24}),de=Math.atan2(8.31-7.06,7.28-5.55);for(let V of[-1,1])for(let Z of[-2.15,2.05]){let ee=V*6.36,ie=7.06+(7.28-Math.abs(ee))*(8.31-7.06)/(7.28-5.55),Ie=new i.Group;Ie.position.set(ee,ie+.11,Z),Ie.rotation.z=V===1?-de:de,R.add(Ie),x(Ie,1.02,.06,1.31,0,0,0,X),x(Ie,.88,.045,1.14,0,.055,0,j);for(let ye of[-.48,.48])x(Ie,.065,.08,1.35,ye,.065,0,p);for(let ye of[-.62,.62])x(Ie,1.04,.08,.07,0,.065,ye,p)}let fe="gable";function $(V){fe=r.includes(V)?V:"gable",t.setEnabled(fe==="gable"),n.visible=fe==="gable",s.visible=fe==="gable";for(let[Z,ee]of a)ee.visible=Z===fe;G()}function G(){let V=t.getMaterial(),Z=t.getType();V?.color&&(U.color.copy(V.color),F.color.copy(V.color).multiplyScalar(.73));let ee=a.get(fe);if(ee)for(let ie of ee.children){if(!ie.userData.isRoofShell)continue;ie.material=V;let Ie=fe==="flat"||!oa[Z]?"flat":Z;if(ie.userData.currentProfile!==Ie){if(ie.userData.dynamicGeometry&&(ie.userData.dynamicGeometry.dispose(),ie.userData.dynamicGeometry=null),Ie==="flat")ie.geometry=ie.userData.baseGeometry;else{let ye=El(i,ie.userData.corners,Z);ie.geometry=ye,ie.userData.dynamicGeometry=ye}ie.userData.currentProfile=Ie}}}return $(fe),{forms:r,setShape:$,setMaterial:G,getShape:()=>fe,getVisibleForms:()=>[...a].filter(([V,Z])=>Z.visible).map(([V])=>V)}}function df(i,e,{trunkMat:t}){let n=document.createElement("canvas");n.width=256,n.height=256;let s=n.getContext("2d"),r=43581,a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);s.clearRect(0,0,256,256);for(let _=0;_<72;_++){let v=18+a()*220,R=19+a()*210,E=a()*6.28,P=9+a()*14,N=a()>.65?"#66834e":a()>.33?"#4c7451":"#537c4e";s.save(),s.translate(v,R),s.rotate(E),s.fillStyle=N,s.beginPath(),s.ellipse(0,0,P*.54,P*1,0,0,Math.PI*2),s.fill(),s.strokeStyle="#96aa77",s.globalAlpha=.3,s.lineWidth=1,s.beginPath(),s.moveTo(0,-P*.75),s.lineTo(0,P*.77),s.stroke(),s.restore()}let o=new i.CanvasTexture(n);o.colorSpace=i.SRGBColorSpace,o.anisotropy=4;let l=["#d4e2b9","#9aba8a","#b6c991","#88aa7b"],c=l.map(_=>new i.MeshStandardMaterial({color:_,map:o,transparent:!0,alphaTest:.28,side:i.DoubleSide,roughness:1,depthWrite:!0,metalness:0})),d=l.map(()=>[]),f=(_,v,R,E,P,N,L=0,C=0)=>{let U=new i.Mesh(new i.CylinderGeometry(E,P,N,9),t);U.position.set(_,v,R),U.rotation.set(L,0,C),U.castShadow=!0,e.add(U)},p=(_,v,R,E,P,N,L)=>{let C=new i.Vector3(_,v,R),U=new i.Vector3(E,P,N),F=U.clone().sub(C),O=new i.Mesh(new i.CylinderGeometry(L*.62,L,F.length(),7),t);O.position.copy(C.add(U).multiplyScalar(.5)),O.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),F.normalize()),O.castShadow=!0,e.add(O)};function m(_,v,R,E,P,N=0,L=0){d[N%d.length].push([_,v,R,E,P,L])}function g(_,v,R=1,E=0){let P=(5.2+E%3*.55)*R;f(_,P*.37,v,.14*R,.28*R,P*.74);for(let N=0;N<7;N++){let L=N*2.399+E,C=Math.cos(L),U=Math.sin(L),F=(1.25+N%3*.35)*R,O=P*.73+N%3*.23*R;p(_,P*.6,v,_+C*F*.67,O,v+U*F*.67,.09*R);let q=_+C*F*.77,H=v+U*F*.77;for(let j=0;j<14;j++){let X=j*2.4+N,de=(.2+a()*.83)*R,fe=O+(a()-.33)*1.48*R;m(q+Math.cos(X)*de,fe,H+Math.sin(X)*de,(.78+a()*.53)*R,(.6+a()*.45)*R,(j+N)%4,X+a()*.4)}}}function x(_,v,R=4,E=0){f(_,R*.45,v,.095,.18,R*.9);for(let P=0;P<9;P++){let N=P/9,L=.55+N*R*.82,C=.78*(1-N)+.11;for(let U=0;U<7;U++){let F=U*6.283/7+P*.67,O=C*(.6+a()*.4);m(_+Math.cos(F)*O,L+(a()-.5)*.33,v+Math.sin(F)*O,.52+O*.5,.78+O*.5,(U+P+E)%4,F)}}}let u=[[11.08,17.62,-4.73,5.75],[7.05,12.22,7.18,20.85],[-14.38,-9.6,-3.52,.53],[-4.7,4.7,-19,-4.2],[-1.65,1.65,5.55,20.95],[8.68,10.03,-8.5,7.15]],h=(_,v,R)=>u.every(([E,P,N,L])=>_<E-R||_>P+R||v<N-R||v>L+R);[[-14.8,-10.6,1.05],[13.6,-11.6,.97],[-14.7,13.2,.84],[15.8,14.2,.92],[-6.8,-13,.78]].forEach((_,v)=>{h(_[0],_[1],2.8*_[2])&&g(..._,v)}),[[-11.6,4],[-11.2,0],[-10.6,-4],[16.4,-4],[16.4,0],[16.4,4],[5,-9],[-6,-10],[-13,-10]].forEach(([_,v],R)=>{h(_,v,1.3)&&x(_,v,3.15+R%3*.65,R)});for(let _=0;_<14;_++){let v=-8.9+_%7*.57,R=8.2+_%2*1;for(let E=0;E<5;E++){let P=E*6.28/5,N=.25+E%2*.16;m(v+Math.cos(P)*N,.4+E%2*.18,R+Math.sin(P)*N,.5,.42,(_+E)%4,P)}}let y=new i.PlaneGeometry(1,1),w=new i.Matrix4,M=new i.Quaternion,T=new i.Vector3,S=new i.Vector3;for(let[_,v]of d.entries()){let R=new i.InstancedMesh(y,c[_],v.length);for(let E=0;E<v.length;E++){let[P,N,L,C,U,F]=v[E];S.set(P,N,L),M.setFromEuler(new i.Euler(0,F,Math.sin(F)*.17)),T.set(C,U,1),w.compose(S,M,T),R.setMatrixAt(E,w)}R.instanceMatrix.needsUpdate=!0,R.castShadow=!1,R.receiveShadow=!0,R.frustumCulled=!1,e.add(R)}}function ff(i,e,{limestone:t,quartz:n,bronze:s,doorMat:r,roofMat:a,porchElements:o,balconyElements:l}){let c=["classic","italian","modern","estate","kavkaz","coastal","practical","craft"],d=new Map,f={graphite:new i.MeshStandardMaterial({color:"#414f4c",roughness:.45,metalness:.22}),timber:new i.MeshStandardMaterial({color:"#886348",roughness:.82}),pale:new i.MeshStandardMaterial({color:"#e7ddc8",roughness:.85}),stone:new i.MeshStandardMaterial({color:"#bcad92",roughness:.87}),copper:new i.MeshStandardMaterial({color:"#9a6342",roughness:.52,metalness:.25}),glass:new i.MeshStandardMaterial({color:"#a4c6cf",roughness:.18,metalness:.16,transparent:!0,opacity:.72}),white:new i.MeshStandardMaterial({color:"#e9e8e1",roughness:.86})},p=(u,h,y,w,M,T,S,_,v=0)=>{let R=new i.Mesh(new i.BoxGeometry(y,w,M),h);return R.position.set(T,S,_),R.rotation.y=v,R.castShadow=!0,R.receiveShadow=!0,u.add(R),R},m=(u,h,y,w,M,T=t)=>{let S=new i.Mesh(new i.TorusGeometry(M,.1,10,36,Math.PI),T);S.position.set(h,y,w),S.castShadow=!0,u.add(S);let _=y-.5;p(u,T,.2,_,.19,h-M,.5+_/2,w),p(u,T,.2,_,.19,h+M,.5+_/2,w)},g=(u,h)=>{let y=new i.Group;y.name="\u041A\u0410\u0421\u041A\u0410\u0414 \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,h(y),y.visible=!1,e.add(y),d.set(u,y)};g("classic",u=>{for(let h of[3.43,6.62]){p(u,f.white,13.25,.1,.23,0,h,4.58);for(let y of[-6.55,6.55])p(u,f.white,.19,.1,9.25,y,h,0)}p(u,f.copper,3.15,.19,.78,0,6.8,4.78)}),g("italian",u=>{for(let h of[-3.7,0,3.7])m(u,h,3,6.59,1,f.pale);for(let h of[-4.6,-2.2,2.2,4.6])p(u,f.copper,1.96,.12,.37,h,6.53,4.77);for(let h of[-6.55,6.55])p(u,f.copper,.26,5.68,.25,h,3.9,4.54);p(u,f.copper,13.25,.17,.42,0,6.88,4.67)}),g("modern",u=>{p(u,f.graphite,13.4,.38,.55,0,6.72,4.75),p(u,f.graphite,8.2,.17,2.5,0,3.52,5.52),p(u,f.glass,7.35,.85,.14,0,4.03,4.64);for(let h of[-5.65,-5.12,-4.59,4.59,5.12,5.65])p(u,f.graphite,.19,5.85,.23,h,3.71,4.74);for(let h of[-3.6,-3.1,3.1,3.6])p(u,f.graphite,.16,4.6,.24,6.52,3.75,h,Math.PI/2);p(u,f.glass,4.95,2.17,.09,0,2.1,4.74),p(u,f.graphite,2.9,.1,2.2,0,3.2,5.46)}),g("estate",u=>{for(let h of[-5.15,5.15])p(u,f.white,.75,6.2,.4,h,3.56,4.73),p(u,f.white,1.07,.3,.55,h,6.65,4.76);p(u,f.white,10.9,.35,1.37,0,6.91,5.15),p(u,f.copper,7.1,.1,1.45,0,7.17,5)}),g("kavkaz",u=>{m(u,0,3.3,6.52,1.42,f.stone);for(let h of[-5.98,5.98]){p(u,f.stone,.72,5.9,.37,h,3.9,4.77);for(let y=0;y<10;y++)p(u,f.pale,.8,.16,.42,h,1+y*.52,4.81)}for(let h of[-3.55,3.55])p(u,f.stone,.28,5.78,.75,6.46,3.73,h),p(u,f.pale,.28,5.78,.75,-6.46,3.73,h);p(u,f.stone,12.85,.23,.82,0,7.01,4.92)}),g("coastal",u=>{p(u,f.pale,13.1,.25,.25,0,6.72,4.62),p(u,f.graphite,7.1,.15,2.5,0,3.29,5.41);for(let h of[-4.4,-4.02,-3.64,-3.26,3.26,3.64,4.02,4.4])p(u,f.timber,.14,2.35,.18,h,5.23,4.72);for(let h of[-2.8,-2.42,-2.04,2.04,2.42,2.8])p(u,f.timber,.18,2.6,.18,6.45,5.2,h,Math.PI/2)}),g("practical",u=>{p(u,f.graphite,3.8,.15,2.4,0,3.1,5.68);for(let h of[-2,2])p(u,f.graphite,.16,3.12,.19,h,1.58,6.45);p(u,f.graphite,12.85,.12,.2,0,6.83,4.65)}),g("craft",u=>{for(let h of[-5.7,-3.3,-1,1,3.3,5.7])p(u,f.timber,.13,5.82,.16,h,3.82,4.64);for(let h of[-4.9,-2.64,2.64,4.9])p(u,f.timber,.26,1.55,.18,h-.96,5.39,4.78),p(u,f.timber,.26,1.55,.18,h+.96,5.39,4.78);p(u,f.timber,5.1,.2,2.65,0,3.35,5.56);for(let h of[-2.5,2.5])p(u,f.timber,.2,2.9,.17,h,1.65,6.27);for(let h of[-3.5,3.5])p(u,f.timber,.19,5.6,.19,6.51,3.66,h)});let x=new Set(["modern","coastal","practical","craft"]);return{styles:c,setStyle(u){let h=d.has(u)?u:"classic";for(let[w,M]of d)M.visible=w===h;let y=x.has(h);for(let w of o)w.visible=!y;for(let w of l)w.visible=!y;return h}}}var la=[{id:"family",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \xB7 \u043E\u0434\u0438\u043D \u044D\u0442\u0430\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:150,facade:"gray"},{id:"farmhouseOne",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043A\u0440\u044B\u043B\u044C\u0446\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:130,facade:"plaster"},{id:"brickOne",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0441 \u043F\u0430\u0440\u0430\u0434\u043D\u044B\u043C \u0432\u0445\u043E\u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:140,facade:"brick"},{id:"gardenOne",name:"\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:120,facade:"stone"},{id:"mansardBrick",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u0444\u0440\u043E\u043D\u0442\u043E\u043D",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"brick"},{id:"mansardEstate",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:200,facade:"tuscan"},{id:"mansardHome",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u0444\u0430\u0441\u0430\u0434\u043D\u044B\u043C\u0438 \u043B\u044E\u043A\u0430\u0440\u043D\u0430\u043C\u0438",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"plaster"},{id:"gableAttic",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u043E\u043A\u043D\u0430\u043C\u0438 \u0432\u043E \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u0435",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"cottage",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"country",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"stone"},{id:"nordic",name:"\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0438\u0439 \u0434\u043E\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"chalet",name:"\u0428\u0430\u043B\u0435 \u0441 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"gable",area:180,facade:"stone"},{id:"barnhouse",name:"\u0411\u0430\u0440\u043D\u0445\u0430\u0443\u0441",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"gray"},{id:"modernOne",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"minimal",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:150,facade:"plaster"},{id:"estateOne",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"kavkaz",name:"\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u0438\u0439 \u0441\u0442\u0438\u043B\u044C",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"stone"},{id:"terrace",name:"\u0414\u043E\u043C \u0441 \u0441\u0430\u0434\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"plaster"},{id:"bungalow",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"gray"},{id:"italian",name:"\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0434\u0432\u043E\u0440\u0438\u043A",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"coastal",name:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0432\u0438\u043B\u043B\u0430",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"practical",name:"\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"craft",name:"\u0421\u0430\u0434\u043E\u0432\u044B\u0439 \u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"classic",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"twoClassic",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"gray"},{id:"twoBrick",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"brick"},{id:"twoColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"stone"},{id:"twoModern",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"flat",area:240,facade:"plaster"},{id:"twoBalcony",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u043C",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"gray"},{id:"twoTerrace",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0432\u0435\u0440\u0430\u043D\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:230,facade:"stone"},{id:"twoEstate",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"tuscan"},{id:"twoFamily",name:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"twoMansard",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0436\u0438\u043B\u043E\u0439 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:300,facade:"gray"},{id:"twoMansardBrick",name:"\u0414\u0432\u0430 \u044D\u0442\u0430\u0436\u0430, \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:320,facade:"brick"},{id:"twoMansardColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:350,facade:"stone"}];function pf(i,e,{stone:t,trim:n,windowFrame:s,glass:r,wood:a,dark:o}){let l=new Map,c=(u,h,y,w,M,T,S,_=n)=>{let v=new i.Mesh(new i.BoxGeometry(h,y,w),_);return v.position.set(M,T,S),v.castShadow=!0,v.receiveShadow=!0,u.add(v),v},d=(u,h,y,w=2.5,M=n,T=.19)=>{c(u,T,w,T,h,.5+w/2,y,M),c(u,T+.13,.11,T+.13,h,.51,y,t),c(u,T+.12,.11,T+.12,h,.5+w+.08,y,t)},f=(u,h,y,w,M,T=3,S=n)=>{c(u,w,.19,M,h,T,y,S),c(u,w+.11,.055,M+.12,h,T+.12,y,o)},p=(u,h,y,w,M,T,S=a,_=.28)=>{for(let v=h;v<=y;v+=_)c(u,.095,T-M,.1,v,(T+M)/2,w,S)},m=(u,h,y,w,M,T)=>{c(u,M+.16,T+.18,.11,h,y,w,n),c(u,M,T,.055,h,y,w+.09,s),c(u,M-.18,T-.18,.03,h,y,w+.14,r),c(u,.055,T,.06,h,y,w+.185,s),c(u,M,.055,.06,h,y,w+.185,s)},g=u=>{if(l.has(u))return l.get(u);let h=new i.Group;switch(h.name="\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,e.add(h),l.set(u,h),u){case"farmhouseOne":f(h,0,5.57,8.9,1.96,3.16,a);for(let y of[-3.95,3.95])d(h,y,6.45,2.53,a,.22);for(let y of[-5.55,5.55])c(h,.18,2.72,.19,y,2.03,4.75,a);break;case"brickOne":f(h,0,5.48,7.35,1.74,3.38,t);for(let y of[-3.2,3.2])d(h,y,6.23,2.73,n,.24);c(h,7.45,.24,.36,0,3.64,4.8,t);break;case"gardenOne":f(h,0,5.52,9.9,1.83,3.19,a);for(let y of[-4.65,-2.1,2.1,4.65])d(h,y,6.36,2.54,a,.18);p(h,-5.9,-5,4.8,.62,3.4,a,.21),p(h,5,5.9,4.8,.62,3.4,a,.21);break;case"mansardBrick":for(let y of[-5.7,5.7])c(h,.3,3.15,.36,y,2.02,4.78,t);f(h,0,5.4,5.75,1.72,3.05,o);for(let y of[-2.5,2.5])d(h,y,6.05,2.44,n,.2);break;case"mansardEstate":f(h,0,5.55,9.2,1.93,3.32,t);for(let y of[-4.18,-2.05,2.05,4.18])d(h,y,6.45,2.66,n,.18);c(h,9.5,.2,.42,0,3.57,4.82,t);break;case"cottage":c(h,.66,3.1,.65,4.5,4.37,-2.5,t),c(h,.94,.16,.94,4.5,6,-2.5,o);for(let y of[-5.9,5.9])c(h,.24,3,.4,y,2.02,4.8,n);break;case"country":for(let y of[-4.7,4.7])d(h,y,5.9,2.18,a,.22);f(h,0,5.35,10.3,1.3,2.94,a);break;case"nordic":p(h,-6.05,-4.8,4.78,.62,3.4,a,.23),p(h,4.8,6.05,4.78,.62,3.4,a,.23);for(let y of[-5.4,5.4])c(h,.18,2.9,.23,y,2.04,4.72,o);break;case"chalet":f(h,0,5.8,11,2.45,3.37,a);for(let y of[-5.1,0,5.1])d(h,y,6.74,2.72,a,.25);for(let y of[-4.8,-2.4,2.4,4.8])c(h,.14,1.18,.18,y,1.28,6.8,a);break;case"barnhouse":for(let y of[-5.95,5.95])c(h,.23,3.12,.18,y,2.05,4.73,o);m(h,-3.8,2,4.83,2.55,2.48),m(h,3.8,2,4.83,2.55,2.48),p(h,-1.36,-.95,4.82,2.95,3.52,a,.15);break;case"modernOne":f(h,0,5.56,9.7,1.7,3.51,o),m(h,-4,1.99,4.92,3.02,2.35),m(h,4,1.99,4.92,3.02,2.35),c(h,2.2,3.02,.3,-5.7,2.04,4.73,t);break;case"minimal":c(h,3.38,3.18,.54,-4.7,2.03,4.72,t),c(h,3.15,.22,2.44,0,3.28,5.43,o);for(let y of[-1.25,1.25])d(h,y,6.15,2.66,n,.14);break;case"estateOne":f(h,0,5.68,7,1.94,3.48,t);for(let y of[-3,-1.9,1.9,3])d(h,y,6.54,2.84,n,.19);c(h,7.1,.26,.56,0,3.69,5.67,n);break;case"kavkaz":for(let y of[-3,3])d(h,y,6.5,2.79,t,.3);f(h,0,5.55,6.7,2.13,3.53,t),p(h,-6.1,-5.05,4.8,1.1,3.52,a,.17),p(h,5.05,6.1,4.8,1.1,3.52,a,.17);break;case"terrace":c(h,9.25,.13,3.2,0,.42,-6,t);for(let y of[-4.1,4.1])for(let w of[-4.78,-7.25])d(h,y,w,2.5,a,.2);for(let y=-4.1;y<=4.11;y+=.52)c(h,.15,.12,3,y,3.05,-6,a);break;case"bungalow":c(h,4.75,.14,6.7,9.13,.18,1.35,t),f(h,9.13,1.35,4.95,7,3.17,o);for(let y of[6.95,11.24])for(let w of[-1.85,4.35])d(h,y,w,2.61,n,.24);break;case"italian":for(let y of[-3.25,3.25])d(h,y,6.32,2.36,t,.24);f(h,0,5.75,7.1,1.45,3.06,a),c(h,2.8,.56,.23,0,3.38,4.86,t);break;case"coastal":f(h,0,5.75,11.05,2.18,3.3,n),p(h,4.7,6.25,4.75,.67,3.44,a,.19),m(h,-3.9,2,4.93,3,2.1);break;case"practical":c(h,4.9,.19,1.4,0,3.13,5.15,o);for(let y of[-2.1,2.1])d(h,y,5.78,2.47,n,.18);c(h,.69,2.86,.75,5,4.25,-2.5,t);break;case"craft":f(h,0,5.44,8.65,1.82,3.08,a);for(let y of[-3.91,-2.2,2.2,3.91])d(h,y,6.28,2.49,a,.18);p(h,-6.1,-5.05,4.83,.87,3.41,a,.24);break;default:break}return h};function x(u){for(let[h,y]of l)y.visible=h===u;u!=="family"&&u!=="mansardHome"&&u!=="classic"&&(g(u).visible=!0)}return{setStyle:x,groups:l,list:la}}function Cl(i,e,{stone:t,trim:n,wood:s,metal:r}){let a=new Map,o=(m,g,x,u,h,y,w,M=n)=>{let T=new i.Mesh(new i.BoxGeometry(g,x,u),M);return T.position.set(h,y,w),T.castShadow=!0,T.receiveShadow=!0,m.add(T),T},l=(m,g,x,u,h,y,w)=>{let M=new i.Mesh(new i.CylinderGeometry(g,g*1.04,x,18),w);return M.position.set(u,h,y),M.castShadow=!0,m.add(M),M},c=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);c.colorSpace=i.SRGBColorSpace,c.wrapS=c.wrapT=i.RepeatWrapping,c.repeat.set(2.2,1.4);let d=new i.MeshStandardMaterial({color:"#a5a094",roughness:.77,map:c}),f=m=>{let g=new i.Group;g.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \xB7 "+m,e.add(g),a.set(m,g);let x=m==="columns"?5.55:m==="modern"?5.1:5.12;if(o(g,x,.21,2.38,0,.405,5.55,d),o(g,x+.13,.075,2.52,0,.548,5.55,d),o(g,x+.17,.13,.74,0,.275,7.03,d),m==="simple"){o(g,3.65,.19,1.69,0,3.03,5.38,n),o(g,3.8,.075,1.8,0,3.18,5.38,r);for(let u of[-1.55,1.55])o(g,.15,2.44,.15,u,1.77,6.07,n),o(g,.3,.13,.3,u,.54,6.07,t)}if(m==="columns"){o(g,5.15,.27,2.06,0,3.31,5.41,t),o(g,5.34,.075,2.19,0,3.48,5.41,n);for(let u of[-2.04,2.04])l(g,.2,2.66,u,1.89,6.37,t),o(g,.46,.17,.47,u,.56,6.37,t),o(g,.48,.17,.49,u,3.26,6.37,t);for(let u of[-2.47,2.47])o(g,.19,3.02,.21,u,2,4.8,n)}if(m==="timber"){o(g,4.85,.19,2.08,0,3.08,5.46,s);for(let u of[-2.16,2.16])o(g,.22,2.46,.22,u,1.78,6.38,s),o(g,.31,.13,.31,u,.53,6.38,t);for(let u=-2.1;u<2.15;u+=.62)o(g,.14,.13,2.22,u,3.3,5.46,s)}if(m==="modern"){o(g,4.65,.24,1.86,0,3.18,5.36,r),o(g,4.85,.065,2.06,0,3.34,5.36,n);for(let u of[-2.14,2.14])o(g,.2,2.63,.2,u,1.87,6.18,r),o(g,.34,.15,.34,u,.57,6.18,t),o(g,.34,.12,.34,u,3.19,6.18,r)}return g};function p(m){let g=["simple","columns","timber","modern"].includes(m)?m:"simple";for(let[x,u]of a)u.visible=x===g;(a.get(g)||f(g)).visible=!0}return{setStyle:p,styles:a}}function Rl(i,e,{stone:t,brick:n,wood:s,metal:r}={}){let a=new i.Group;a.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",e.add(a);let o=new i.Group;o.name="\u0426\u043E\u043A\u043E\u043B\u044C \u0434\u043E\u043C\u0430",a.add(o);let l=new i.Group;l.name="\u0422\u0435\u0440\u0440\u0430\u0441\u0430 \u0441 \u043E\u043F\u043E\u0440\u0430\u043C\u0438",a.add(l);let c=(S,_=.85,v=null)=>new i.MeshStandardMaterial({color:S,roughness:_,map:v}),d=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);d.colorSpace=i.SRGBColorSpace,d.wrapS=d.wrapT=i.RepeatWrapping,d.repeat.set(4,1);let f=document.createElement("canvas");f.width=256,f.height=256;let p=f.getContext("2d");p.fillStyle="#4e5151",p.fillRect(0,0,256,256);for(let S=0;S<4;S++)for(let _=0;_<7;_++)p.fillStyle=["#a9aaa5","#c4c4be","#b5b6b0"][(_*3+S)%3],p.fillRect(_*37+2,S*64+2,34,61);let m=new i.CanvasTexture(f);m.colorSpace=i.SRGBColorSpace,m.wrapS=m.wrapT=i.RepeatWrapping,m.repeat.set(4,1);let g={stone:c("#88837a",.88,d),brick:n.clone(),tile:c("#878a88",.79,m),dagestan:c("#c0b6a2",.9,d),decorative:c("#6c6f6d",.92,d),graphite:c("#62605b",.9,d),taupe:c("#71665b",.89,d),light:c("#8c8781")},x=(S,_,v,R,E,P,N,L)=>{let C=new i.Mesh(new i.BoxGeometry(_,v,R),L);return C.position.set(E,P,N),C.castShadow=v>.25,C.receiveShadow=!0,S.add(C),C};for(let S of[-4.82,4.82])x(o,13.45,.59,.12,0,.45,S,g.graphite);for(let S of[-6.72,6.72])x(o,.12,.59,9.54,S,.45,0,g.graphite);let u=x(l,5.5,.15,2.8,0,.37,-5.86,t),h=x(l,5.65,.095,2.95,0,.48,-5.86,s),y=[-2.45,2.45];for(let S of y)x(l,.2,2.46,.2,S,1.82,-6.99,s),x(l,.33,.12,.33,S,.56,-6.99,t),x(l,.17,2.4,.19,S,1.8,-4.74,s);for(let S=-2.48;S<=2.48;S+=.64)x(l,.16,.12,2.64,S,3.19,-5.84,s);for(let S of[-7,-4.73])x(l,5.4,.13,.15,0,3.11,S,s);function w(S){let _=g[S]||g.graphite;o.visible=S!=="none",o.children.forEach(v=>{v.material=_})}function M(S){l.visible=!!S}function T(S,_){let v=(Number(S)||10)/12.8,R=(Number(_)||10)/9;l.scale.x=Math.min(1,Math.max(.7,(Number(S)||10)/6))/v,l.scale.z=1/R,l.position.z=4.5*(1-R)/R}return w("graphite"),M(!1),{root:a,plinth:o,terrace:l,setPlinth:w,setTerrace:M,setDimensions:T}}function mf(i,e,{brick:t,limestone:n,quartz:s,roofSystem:r,windowFrameMetal:a,glassMat:o,doorMat:l}){let c=new i.Group;c.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u0430\u043B\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0434\u043E\u043C",e.add(c);let d=new i.MeshStandardMaterial({color:"#ddd9cd",roughness:.66,metalness:.02}),f=new i.MeshStandardMaterial({color:"#816347",roughness:.79}),p=new i.MeshStandardMaterial({color:"#41494a",roughness:.47,metalness:.37}),m=new i.MeshStandardMaterial({color:"#476676",roughness:.33,metalness:.13,envMapIntensity:.45}),g=[],x=[],u=new Map,h=(ce,le,ae,pe,Ce,_e,ge,De=n)=>{let Oe=new i.Mesh(new i.BoxGeometry(le,ae,pe),De);return Oe.position.set(Ce,_e,ge),Oe.receiveShadow=!0,Oe.castShadow=!0,ce.add(Oe),Oe},y=(ce,le,ae,pe,Ce=d)=>{let _e=new i.Vector3(...le),ge=new i.Vector3(...ae),De=_e.distanceTo(ge),Oe=_e.clone().add(ge).multiplyScalar(.5),ke=new i.Mesh(new i.BoxGeometry(pe,De,pe),Ce);return ke.position.copy(Oe),ke.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),ge.sub(_e).normalize()),ke.castShadow=!0,ke.receiveShadow=!0,ce.add(ke),ke},w=(ce,le,ae,pe=!1)=>{let Ce=[],_e=[],ge=[];le.forEach(ke=>{Ce.push(...ke),ge.push(ke[0]*.22,ke[2]*.22+ke[1]*.09)});for(let ke=1;ke<le.length-1;ke++)_e.push(0,ke,ke+1);let De=new i.BufferGeometry;De.setAttribute("position",new i.Float32BufferAttribute(Ce,3)),De.setAttribute("uv",new i.Float32BufferAttribute(ge,2)),De.setIndex(_e),De.computeVertexNormals();let Oe=new i.Mesh(De,ae);return Oe.material.side=i.DoubleSide,Oe.castShadow=!0,Oe.receiveShadow=!0,pe&&(Oe.userData.baseGeometry=De,Oe.userData.corners=le,Oe.userData.profile="none",x.push(Oe)),ce.add(Oe),Oe},M=new i.Group;M.name="\u0414\u043E\u043C \xB7 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u0442\u0430\u0436",c.add(M);let T=pf(i,c,{stone:n,trim:d,windowFrame:a,glass:o,wood:f,dark:p}),S=Rl(i,c,{stone:n,brick:t,wood:f,metal:p}),_=new i.MeshStandardMaterial({color:"#55524c",roughness:.93});h(M,13.28,.36,9.46,0,.27,0,_);let v=h(M,12.8,3.18,9,0,1.98,0,t);h(M,13.03,.13,9.24,0,.53,0,_),h(M,13.05,.16,9.26,0,3.62,0,d);let R=M.children.length,E=h(M,1.58,2.29,.15,0,1.7,4.64,l);h(M,1.74,.13,.25,0,2.87,4.72,d);for(let ce of[-.9,.9])h(M,.14,2.5,.18,ce,1.65,4.73,d);h(M,.1,.13,.16,.58,1.77,4.76,p);let P=new i.Group;P.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C \xB7 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440";for(let ce of M.children.slice(R))P.add(ce);M.add(P);let N=M.children.length,L=h(M,3.8,.2,1.82,0,3.03,5.31,d);h(M,3.93,.06,1.94,0,3.17,5.31,p);for(let ce of[-1.7,1.7])h(M,.17,2.46,.17,ce,1.7,6.12,d),h(M,.32,.15,.32,ce,.53,6.12,n),h(M,.3,.15,.3,ce,2.99,6.12,n);h(M,3.94,.13,1.93,0,.46,5.35,n),h(M,4.05,.12,.77,0,.31,6.45,d),h(M,4.15,.1,.78,0,.19,7.17,n);let C=new i.Group;C.name="\u0421\u0442\u0430\u0440\u044B\u0439 \u0432\u0445\u043E\u0434 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438";for(let ce of M.children.slice(N))C.add(ce);C.visible=!1,M.add(C);let U=Cl(i,M,{stone:n,trim:d,wood:f,metal:p});U.setStyle("simple");function F(ce,le,ae,pe=0,Ce=1.48,_e=1.52,ge=M){let De=new i.Group;return De.position.set(ce,le,ae),De.rotation.y=pe,ge.add(De),h(De,Ce+.28,_e+.3,.12,0,0,0,d),h(De,Ce+.08,_e+.1,.13,0,0,.08,a),h(De,Ce-.1,_e-.16,.035,0,0,.16,o),h(De,.055,_e-.12,.075,0,0,.205,a),h(De,Ce-.1,.055,.075,0,0,.205,a),h(De,Ce+.36,.13,.35,0,-_e/2-.14,.15,s),g.push(De),De}for(let ce of[-4.8,-2.95,2.95,4.8])F(ce,1.97,4.63),F(ce,1.97,-4.63,Math.PI);for(let ce of[-2.65,0,2.65])F(6.53,1.97,ce,Math.PI/2),F(-6.53,1.97,ce,-Math.PI/2);let O=7.13,q=5.19,H=3.83,j=["gable","hip","mansard","flat"],X=new Map,de=new Map,fe=ce=>{if(de.has(ce))return de.get(ce);let le=new i.Group;le.name="\u041A\u0440\u043E\u0432\u043B\u044F \xB7 "+ce,c.add(le),de.set(ce,le);let ae=pe=>w(le,pe,r.getMaterial(),!0);if(ce==="gable"){for(let _e of[-1,1]){ae([[_e*O,H,-q],[0,6.55,-q],[0,6.55,q],[_e*O,H,q]]);for(let ge of[-q,q])y(le,[_e*O,H,ge],[0,6.55,ge],.16)}for(let _e of[-4.52,4.52])w(le,[[-6.37,3.68,_e],[6.37,3.68,_e],[0,6.34,_e]],t);y(le,[0,6.56,-q],[0,6.56,q],.13,p);let Ce=new i.Group;Ce.name="\u0424\u0440\u043E\u043D\u0442\u043E\u043D\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u044B",le.add(Ce),X.set("gable",Ce);for(let _e of[-1.45,1.45])h(Ce,1,1.16,.16,_e,4.92,4.7,d),h(Ce,.83,.95,.055,_e,4.93,4.8,p),h(Ce,.72,.85,.032,_e,4.93,4.84,m),h(Ce,.06,.96,.058,_e,4.93,4.89,d),h(Ce,1.1,.12,.33,_e,4.29,4.89,n)}else if(ce==="hip"){ae([[-O,H,-q],[O,H,-q],[0,6.02,-2.14]]),ae([[O,H,q],[-O,H,q],[0,6.02,2.14]]),ae([[-O,H,q],[-O,H,-q],[0,6.02,-2.14],[0,6.02,2.14]]),ae([[O,H,-q],[O,H,q],[0,6.02,2.14],[0,6.02,-2.14]]),y(le,[0,6.02,-2.14],[0,6.02,2.14],.14,p);for(let _e of[-1,1])for(let ge of[-q,q])y(le,[_e*O,H,ge],[0,6.02,ge>0?2.14:-2.14],.13,p)}else if(ce==="mansard"){let pe=[[-O,H,-q],[O,H,-q],[O,H,q],[-O,H,q]],Ce=[[-5.28,5.53,-4.21],[5.28,5.53,-4.21],[5.28,5.53,4.21],[-5.28,5.53,4.21]],_e=[[-3.45,6.71,-2.77],[3.45,6.71,-2.77],[3.45,6.71,2.77],[-3.45,6.71,2.77]];for(let ke=0;ke<4;ke++){let $e=(ke+1)%4;ae([pe[ke],pe[$e],Ce[$e],Ce[ke]]),ae([Ce[ke],Ce[$e],_e[$e],_e[ke]])}let ge=7.58,De=1.3;ae([_e[0],_e[1],[0,ge,-De]]),ae([_e[2],_e[3],[0,ge,De]]),ae([_e[3],_e[0],[0,ge,-De],[0,ge,De]]),ae([_e[1],_e[2],[0,ge,De],[0,ge,-De]]);let Oe=new i.Group;Oe.name="\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043D\u0430 \u043F\u0430\u0440\u0430\u0434\u043D\u043E\u043C \u0444\u0430\u0441\u0430\u0434\u0435",le.add(Oe),X.set("mansard",Oe);for(let ke of[-2.05,2.05]){h(Oe,1.36,1.47,.18,ke,4.82,5.02,d),h(Oe,.92,1.04,.055,ke,4.92,5.02+.115,p),h(Oe,.79,.87,.036,ke,4.92,5.02+.151,m),h(Oe,.07,1.03,.07,ke,4.92,5.02+.193,d),h(Oe,1.11,.085,.32,ke,4.23,5.02+.1,n);for(let k of[-1,1]){let Ht=ke+k*.64;h(Oe,.13,1.41,5.02-4.08+.05,Ht,4.88,(5.02+4.08)/2,d),w(Oe,[[ke,6.14,4.08],[ke+k*.84,5.57,4.08],[ke+k*.84,5.57,5.02+.16],[ke,6.14,5.02+.16]],r.getMaterial())}w(Oe,[[ke-.66,5.55,5.02+.1],[ke+.66,5.55,5.02+.1],[ke,6.03,5.02+.1]],d),y(Oe,[ke,6.15,4.08],[ke,6.15,5.02+.17],.12,p)}}else{ae([[-O,3.88,-q],[O,3.88,-q],[O,3.88,q],[-O,3.88,q]]);for(let pe of[-1,1])h(le,.24,.37,q*2+.2,pe*O,4.03,0,p);for(let pe of[-q,q])h(le,O*2+.3,.37,.24,0,4.03,pe,p)}if(ce!=="flat"){let pe=new i.MeshStandardMaterial({color:"#424d52",metalness:.5,roughness:.52}),Ce=new i.MeshStandardMaterial({color:"#434c50",metalness:.4,roughness:.58}),_e=ce==="mansard"?6.46:6.38,ge=ce==="mansard"?4.64:ce==="gable"?4.13:4.02;for(let De of[-1,1]){for(let Oe of[0,.1])h(le,.06,.058,q*2-.9,De*_e,ge+Oe,0,pe);for(let Oe of[-3.4,0,3.4])h(le,.08,.21,.11,De*_e,ge-.055,Oe,pe);h(le,.18,.12,q*2+.03,De*(O+.06),3.75,0,Ce),h(le,.11,3.3,.11,De*(O+.06),1.95,De===1?q-.36:-q+.36,Ce)}for(let De of[-1,1])h(le,O*2+.1,.12,.18,0,3.75,De*(q+.06),Ce);le.userData.guardMetal=pe,le.userData.gutterMetal=Ce}h(le,12.88,.17,9.1,0,3.74,0,d,!1);for(let pe of[-1,1])h(le,.2,.25,9.12,pe*6.38,3.72,0,t,!1),h(le,12.83,.25,.2,0,3.72,pe*4.48,t,!1);for(let pe of[-1,1])w(le,[[pe*6.41,3.72,-q],[pe*O,3.72,-q],[pe*O,3.72,q],[pe*6.41,3.72,q]],s),h(le,.17,.18,q*2,pe*O,3.77,0,p);for(let pe of[-1,1])w(le,[[-O,3.72,pe*4.52],[O,3.72,pe*4.52],[O,3.72,pe*q],[-O,3.72,pe*q]],s),h(le,O*2,.16,.16,0,3.77,pe*q,d);return le},$=null,G=null,V="family";function Z(ce,le){let ae=j.includes(ce)?ce:"hip";for(let[ge,De]of de)De.visible=ge===ae;let pe=fe(ae);pe.visible=!0,X.has("gable")&&(X.get("gable").visible=V==="gableAttic"),$=ae;let Ce=oa[le]&&ae!=="flat"?le:"flat",_e=r.getMaterial();_e?.color&&pe.userData.guardMetal&&(pe.userData.guardMetal.color.copy(_e.color),pe.userData.gutterMetal.color.copy(_e.color).multiplyScalar(.74));for(let ge of pe.children)ge.userData.corners&&(ge.material=_e,ge.userData.profile!==Ce&&(ge.userData.dynamic&&(ge.userData.dynamic.dispose(),ge.userData.dynamic=null),ge.geometry=Ce==="flat"?ge.userData.baseGeometry:El(i,ge.userData.corners,le),Ce!=="flat"&&(ge.userData.dynamic=ge.geometry),ge.userData.profile=Ce));G=le}function ee(ce){C.visible=!1,U.setStyle(ce)}function ie(ce){V=ce,c.visible=la.some(le=>le.id===ce&&le.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435"),T.setStyle(ce),X.has("gable")&&(X.get("gable").visible=ce==="gableAttic")}function Ie(ce,le){let ae=Math.max(5,Math.min(14,Number(ce)||10)),pe=Math.max(8,Math.min(18,Number(le)||10)),Ce=ae/12.8,_e=pe/9;c.scale.set(Ce,1,_e),c.position.z=4.63*(1-_e),P.scale.x=1/Ce;for(let De of U.styles.values())De.scale.x=1/Ce,De.scale.z=1/_e,De.position.z=4.63*(_e-1)/_e;let ge=ae<8.5?2:4;for(let De of g){let Oe=De.userData.baseX??De.position.x,ke=De.userData.baseZ??De.position.z;De.userData.baseX=Oe,De.userData.baseZ=ke;let $e=Math.abs(Oe)>6.2;if(De.scale.x=$e?1/_e:1/Ce,De.scale.z=$e?1/Ce:1/_e,$e){De.position.x=Math.sign(Oe)*Math.max(.2,ae/2-.11)/Ce;let mt=ke===0?0:Math.sign(ke)*Math.max(1.4,pe/2-1.35);De.position.z=mt/_e}else{let mt=Math.abs(Oe)>4;De.visible=ge===4||mt;let k=Math.sign(Oe)*(mt?Math.max(1.25,ae/2-1.04):Math.max(.86,ae/2-2.87));De.position.x=k/Ce}}S.setDimensions(ae,pe),c.userData.footprint={width:ae,length:pe}}function ye(ce,le=1.35,ae=!1){let pe=ae?1.6:1,Ce=Math.max(65,(Number(ce)||150)/pe),_e=Math.sqrt(Ce*le),ge=Math.sqrt(Ce/le);c.scale.set(_e/12.8,1,ge/9),c.userData.footprint={width:_e,depth:ge,floors:pe}}return{root:c,setStyle:ie,setSize:ye,setDimensions:Ie,setRoof:Z,setEntrance:ee,setPlinth:S.setPlinth,setTerrace:S.setTerrace,getShape:()=>$,getRoof:()=>G}}function gf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 3D \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440, \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u044B \u043E\u0442\u0434\u0435\u043B\u043A\u0438",t.visible=!1,e.add(t);let n=(G,V=.76,Z={})=>new i.MeshStandardMaterial({color:G,roughness:V,...Z}),s=n("#ede9df",.94),r=n("#dfd6c7",.94),a=n("#f6f2e9",.94),o=n("#fffdf8",.73),l=n("#b68e66",.67),c=n("#806449",.62),d=n("#4e423b",.66),f=n("#c4a170",.38,{metalness:.54}),p=n("#444b4c",.43,{metalness:.65}),m=n("#eee8d9",.92),g=n("#ebeae6",.36),x=n("#b9b3a8",.53),u=n("#9b9887",.97),h=n("#657270",.95),y=n("#c6b9a5",.99),w=n("#c4a17e",.83),M=n("#9bc4c9",.2,{transparent:!0,opacity:.65,side:i.DoubleSide}),T=n("#a3b9c4",.1,{metalness:.43,envMapIntensity:1.1}),S=n("#181e25",.28,{metalness:.34}),_=n("#456947",.95),v=n("#725e49",.94),R=new i.TextureLoader,E=n("#ffffff",.75),P=n("#ffffff",.64),N=(G,V,Z,ee)=>{R.load(new URL("assets/3d/"+G+".webp",document.baseURI).href,ie=>{ie.colorSpace=i.SRGBColorSpace,ie.wrapS=ie.wrapT=i.RepeatWrapping,ie.repeat.set(Z,ee),ie.anisotropy=4,V.map=ie,V.needsUpdate=!0},void 0,()=>{})};N("wood_planks",E,3,3),N("concrete_pavement_02_1k",P,3,3);function L(G,V,Z,ee,ie,Ie,ye,ce,le=!0){let ae=new i.Mesh(new i.BoxGeometry(V,Z,ee),ce);return ae.position.set(ie,Ie,ye),ae.castShadow=le,ae.receiveShadow=!0,G.add(ae),ae}function C(G,V,Z,ee,ie,Ie,ye=1,ce=1,le=1){let ae=new i.Mesh(new i.SphereGeometry(V,12,9),Ie);return ae.position.set(Z,ee,ie),ae.scale.set(ye,ce,le),ae.castShadow=!0,G.add(ae),ae}function U(G,V,Z,ee,ie,Ie,ye,ce=16){let le=new i.Mesh(new i.CylinderGeometry(V,V,Z,ce),ye);return le.position.set(ee,ie,Ie),le.castShadow=!0,G.add(le),le}function F(G,V,Z,ee,ie=.95,Ie=.68,ye=c){L(G,ie+.075,Ie+.075,.055,V,Z,ee,ye,!1),L(G,ie,Ie,.061,V,Z,ee+.05,n("#91a09a",.94),!1),L(G,ie*.56,Ie*.25,.065,V,Z-.14,ee+.09,n("#d6c3ad",.94),!1),L(G,ie*.32,Ie*.16,.066,V+.14,Z+.1,ee+.09,n("#c0aa90",.94),!1)}function O(G,V,Z,ee=.3){U(G,.19,.34,V,ee+.16,Z,g,12),L(G,.29,.08,.29,V,ee+.32,Z,x,!1),U(G,.038,.92,V,ee+.77,Z,v,8);for(let ie=0;ie<6;ie++){let Ie=ie*Math.PI*2/6;C(G,.38,V+Math.cos(Ie)*.22,ee+1.15+ie%3*.11,Z+Math.sin(Ie)*.2,_,.67,1,.6)}}function q(G,V,Z,ee=2.8){let ie=n("#f8efdb",.62,{emissive:"#fff0d4",emissiveIntensity:.12});U(G,.29,.2,V,ee,Z,ie,14),U(G,.012,.23,V,ee+.16,Z,p,8)}function H(G,V=1.85){L(G,2.25,1.58,.11,V,2.03,-3.53,o,!1),L(G,2.03,1.36,.045,V,2.03,-3.45,M,!1),L(G,.055,1.37,.064,V,2.03,-3.4,o,!1),L(G,2.3,.09,.32,V,1.22,-3.35,x,!1),L(G,.065,1.5,.065,V-1.18,2.03,-3.34,m,!1),L(G,.065,1.5,.065,V+1.18,2.03,-3.34,m,!1);for(let Z of[-.74,.74])L(G,.07,1.7,.18,V+Z,2.03,-3.32,n("#d6cfc0",.95),!1)}let j=new Map;function X(G,V="wood"){let Z=new i.Group;Z.name="\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \xB7 "+G,Z.visible=!1,t.add(Z),j.set(G,Z),L(Z,8.9,.18,7.2,0,.04,0,V==="tile"?P:E),L(Z,8.9,.16,7.2,0,3.31,0,a,!1),L(Z,8.9,3.14,.16,0,1.69,-3.62,r,!1),L(Z,8.9,3.14,.16,0,1.69,3.62,s,!1);for(let ie of[-4.45,4.45])L(Z,.16,3.14,7.2,ie,1.69,0,s,!1);for(let ie of[-4.32,4.32])L(Z,.07,.14,7,ie,.24,0,o,!1);for(let ie of[-3.48,3.48])L(Z,8.55,.14,.07,0,.24,ie,o,!1);L(Z,1.25,2.27,.07,-2.85,1.29,3.51,c),L(Z,.09,2.4,.13,-3.55,1.29,3.47,o),L(Z,.09,2.4,.13,-2.15,1.29,3.47,o),C(Z,.055,-2.3,1.22,3.43,f),H(Z,1.83);let ee=new i.PointLight("#fff1da",8.5,10,2);return ee.position.set(.25,2.9,.35),Z.add(ee),q(Z,-1.4,.15),Z}{let G=X("living");L(G,4.1,.055,2.75,-1.05,.175,.23,y,!1),L(G,3.1,.38,1.14,-1.45,.53,-1.26,h),L(G,3.1,.78,.28,-1.45,.99,-1.76,h);for(let V of[-2.45,-1.45,-.45])L(G,.85,.18,.88,V,.81,-1.06,u),C(G,.25,V,.99,-1.52,m,1,.35,.82);L(G,.2,.72,1.18,-3.06,.75,-1.25,h),L(G,.2,.72,1.18,.15,.75,-1.25,h),L(G,1.95,.085,.9,-1.2,.54,.6,c);for(let V of[-2,-.4])L(G,.1,.45,.1,V,.29,.58,p);C(G,.14,-1.52,.63,.6,m,1,.4,1),L(G,2.05,1.1,.09,2,1.68,3.44,S,!1),L(G,2.45,.32,.56,2,.36,3.08,l),O(G,3.52,-2.5),F(G,-2.88,1.9,-3.42,.88,.96)}{let G=X("kitchen","tile");for(let V of[-3.15,-2.1,-1.05,0])L(G,1.02,.9,.64,V,.66,-3.16,m),L(G,.99,.025,.055,V,.81,-2.81,f,!1),L(G,1.02,.7,.57,V,2.62,-3.19,l),L(G,.85,.025,.045,V,2.5,-2.87,p,!1);L(G,4.75,.12,.82,-1.6,1.15,-3.1,x),L(G,.76,.06,.5,-2.35,1.23,-2.98,p),U(G,.04,.38,-2.8,1.43,-2.93,f,10),L(G,3.2,.86,1.32,-.3,.62,.25,l),L(G,3.45,.14,1.52,-.3,1.11,.25,x);for(let V of[-1.5,.65])U(G,.24,.08,V,.74,1.57,c,14),U(G,.055,.69,V,.37,1.57,p,12);for(let V of[-1.45,.85])q(G,V,.28,2.54);O(G,3.65,-2.27)}{let G=X("bedroom");L(G,3.33,1.1,.26,-1.1,1.1,-2.83,h),L(G,3.15,.46,4.12,-1.1,.57,-.8,l),L(G,3,.32,3.95,-1.1,.95,-.79,m),L(G,3,.1,2.65,-1.1,1.12,.18,u);for(let V of[-1.85,-.35])C(G,.46,V,1.24,-2.1,m,1,.36,.66);for(let V of[-3.1,.95])L(G,.58,.45,.52,V,.53,-2.29,c),U(G,.12,.35,V,.99,-2.29,f,12),C(G,.18,V,1.2,-2.29,m,1,.67,1);L(G,2.65,.08,1.34,-1.1,.2,2.15,y,!1),L(G,1.55,2.55,.57,3.33,1.55,.72,l);for(let V of[-.04,1.44])L(G,.065,2.25,.6,3.31,1.65,V,c,!1);F(G,-3.1,2.1,-3.42,1,.84)}{let G=X("hall","tile");L(G,2.1,.16,.88,-1.92,.53,-1.24,c);for(let V of[-2.8,-1.15])L(G,.12,.4,.67,V,.28,-1.24,p);L(G,2.65,.16,.1,-1.92,2.31,-3.44,c,!1);for(let V of[-2.95,-2.28,-1.62,-.92])C(G,.07,V,2.12,-3.3,f,1,.68,1),L(G,.05,.2,.08,V,2.03,-3.32,p,!1);L(G,1.5,2.21,.06,2.92,1.58,-3.44,f,!1),L(G,1.39,2.1,.04,2.92,1.58,-3.4,T,!1),L(G,1.55,.19,.55,2.95,.76,-1.25,l);for(let V of[2.4,3.5])L(G,.08,.58,.08,V,.43,-1.25,p);O(G,-3.53,1.72),F(G,.2,1.82,-3.42,.8,1.01)}{let G=X("bath","tile");L(G,2.48,.6,1.14,-1.79,.57,-1.72,g),L(G,2.24,.04,.91,-1.79,.9,-1.72,n("#e6f0ef",.23,{metalness:.12}),!1),L(G,2.58,.13,1.23,-1.79,.95,-1.72,g),U(G,.045,.36,-2.94,1.16,-1.72,p,12),L(G,1.18,.65,.62,1.65,.58,-2.64,l),L(G,1.48,.12,.81,1.65,1.01,-2.62,x),U(G,.39,.14,1.65,1.15,-2.59,g,24),U(G,.035,.29,1.93,1.3,-2.89,f,12),L(G,1,1.27,.055,1.65,2.16,-3.43,T,!1),L(G,1.82,2.12,.045,3.33,1.38,.16,M,!1),L(G,1.8,.08,.07,3.33,2.46,.16,p,!1),U(G,.12,.06,3.3,2.23,-.55,p,20),L(G,.045,.68,.05,3.36,2.7,-.55,p),L(G,1.18,.1,.64,-.1,.28,1.28,y,!1),O(G,-3.4,2.08)}let de={living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},fe="living",$=G=>{fe=j.has(G)?G:"living";for(let[V,Z]of j)Z.visible=V===fe;return de[fe]};return $("living"),{root:t,setRoom:$,roomNames:de,getRoom:()=>fe}}function _f(i,e,{lawnMaterial:t}={}){let n=new i.Group;n.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u043E\u0449\u0435\u043D\u0438\u0435, \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0446\u0432\u0435\u0442\u043D\u0438\u043A\u0438",e.add(n);let s=new i.MeshStandardMaterial({color:"#faf9f5",roughness:.89});new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href,X=>{X.colorSpace=i.SRGBColorSpace,X.wrapS=X.wrapT=i.RepeatWrapping,X.anisotropy=4,s.map=X,s.needsUpdate=!0},void 0,()=>{});let a=new i.MeshStandardMaterial({color:"#b6afa2",roughness:.93}),o=new i.MeshStandardMaterial({color:"#817f75",roughness:1}),l=new i.MeshStandardMaterial({color:"#604c3b",roughness:1}),c=new i.MeshStandardMaterial({color:"#376b36",roughness:.89,side:i.DoubleSide}),d=new i.MeshStandardMaterial({color:"#567e3c",roughness:.93}),f=["#e8dbbc","#b77d95","#edc999","#b2a5d7","#d87576"].map(X=>new i.MeshStandardMaterial({color:X,roughness:.85})),p=new i.Group;p.name="\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438",n.add(p);let m=new i.Group;m.name="\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0432\u044A\u0435\u0437\u0434",n.add(m);let g=new i.Group;g.name="\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(g);let x=new i.Group;x.name="\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(x);let u=new i.Group;u.name="\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0430\u0434\u043A\u0438",n.add(u);let h=new i.Group;h.name="\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441\u0430\u0434",n.add(h);let y=new i.Group;y.name="\u0411\u0435\u0441\u0435\u0434\u043A\u0430/\u043F\u0435\u0440\u0433\u043E\u043B\u0430",n.add(y);let w=new i.Group;w.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0443",n.add(w);let M=new i.Group;M.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u043F\u0435\u0440\u0433\u043E\u043B\u0435",n.add(M);let T=(X,de,fe,$,G,V,Z,ee)=>{let ie=new i.Mesh(new i.BoxGeometry(de,fe,$),ee);return ie.position.set(G,V,Z),ie.receiveShadow=!0,ie.castShadow=fe>.09,X.add(ie),ie};function S(X,{x0:de,z0:fe,width:$,length:G,unitX:V=.39,unitZ:Z=.28}){T(X,$,.08,G,de,.075,fe,o);let ee=Math.max(1,Math.floor($/V)),ie=Math.max(1,Math.floor(G/Z)),Ie=new i.Matrix4,ye=new i.Quaternion,ce=new i.Vector3,le=new i.InstancedMesh(new i.BoxGeometry(1,1,1),s,ee*ie),ae=["#d8d4c8","#c3c2b6","#e1dcd0","#bbb9ad","#d0cec2"],pe=new i.Color,Ce=0;for(let _e=0;_e<ie;_e++)for(let ge=0;ge<ee;ge++){let De=$/ee-.016,Oe=G/ie-.016,ke=de-$/2+(ge+.5)*$/ee,$e=fe-G/2+(_e+.5)*G/ie;ce.set(De,.065,Oe),Ie.compose(new i.Vector3(ke,.133,$e),ye,ce),le.setMatrixAt(Ce,Ie),pe.set(ae[(ge*7+_e*11+Math.floor(_e/2))%ae.length]),le.setColorAt(Ce,pe),Ce++}return le.instanceMatrix.needsUpdate=!0,le.instanceColor&&(le.instanceColor.needsUpdate=!0),le.receiveShadow=!0,le.castShadow=!1,X.add(le),le}S(p,{x0:0,z0:14.1,width:2.5,length:13.5}),S(p,{x0:0,z0:7.5,width:4.2,length:1.8,unitX:.45,unitZ:.3});for(let X of[-1.34,1.34])T(p,.12,.09,12.8,X,.116,14.15,a);S(m,{x0:9.5,z0:15.1,width:4.5,length:11.2,unitX:.43,unitZ:.34}),S(m,{x0:9.5,z0:9.55,width:5.3,length:4.2,unitX:.44,unitZ:.3});for(let X of[7.14,11.86])T(m,.14,.08,11.2,X,.11,15.1,a);S(w,{x0:9.4,z0:.55,width:1.05,length:13.2,unitX:.35,unitZ:.35}),S(w,{x0:10.32,z0:-5.06,width:2.05,length:.96,unitX:.35,unitZ:.35}),S(M,{x0:-8.75,z0:-1.1,width:1.02,length:8.8,unitX:.34,unitZ:.34}),S(M,{x0:-9.7,z0:-3.64,width:1.92,length:.88,unitX:.34,unitZ:.34});let _=new i.Shape;_.moveTo(0,0),_.bezierCurveTo(.03,.035,.075,.1,0,.16),_.bezierCurveTo(-.075,.1,-.03,.035,0,0);let v=new i.ShapeGeometry(_,5);f.forEach(X=>{X.side=i.DoubleSide});let R=new i.Shape;R.moveTo(0,0),R.bezierCurveTo(.055,.05,.085,.13,.013,.2),R.bezierCurveTo(-.085,.13,-.055,.05,0,0);let E=new i.ShapeGeometry(R,4),P=new i.MeshStandardMaterial({color:"#46713f",roughness:.95}),N=new i.BoxGeometry(1,1,1),L=new i.Object3D;function C(X,de,fe,$,G,V,Z="flower"){let ee=new i.Group;ee.name="\u041A\u043B\u0443\u043C\u0431\u0430 \xB7 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B",X.add(ee),T(ee,$,.105,G,de,.11,fe,l);for(let pe of[-1,1])T(ee,.14,.19,G+.17,de+pe*($/2+.04),.17,fe,a);for(let pe of[-1,1])T(ee,$+.16,.19,.14,de,.17,fe+pe*(G/2+.04),a);let ie=Math.max(2,Math.floor($/.62)),Ie=Math.max(2,Math.floor(G/.83)),ye=new Map,ce=(pe,Ce,_e,ge,De,Oe,ke,$e,mt,k,Ht)=>{let gt=pe.uuid+"|"+Ce.uuid,ft=ye.get(gt);ft||(ft={geometry:pe,material:Ce,transforms:[]},ye.set(gt,ft)),L.position.set(_e,ge,De),L.rotation.set(Oe,ke,$e),L.scale.set(mt,k,Ht),L.updateMatrix(),ft.transforms.push(L.matrix.clone())},le=V,ae=()=>(le=Math.imul(le,1664525)+1013904223>>>0,le/4294967296);for(let pe=0;pe<ie;pe++)for(let Ce=0;Ce<Ie;Ce++){let _e=de-$/2+(pe+.5)*$/ie+(ae()-.5)*.11,ge=fe-G/2+(Ce+.5)*G/Ie+(ae()-.5)*.17,De=Z==="bush"?.24+ae()*.4:.25+ae()*.37;ce(N,P,_e,.24+De/2,ge,0,0,0,.023,De,.023);for(let $e=0;$e<5;$e++){let mt=ae()*6.283,k=ae()>.4?c:d;ce(E,k,_e+.07*Math.cos(mt),.31+De*.4,ge+.07*Math.sin(mt),.27+ae()*.55,mt,.1+(ae()-.5)*.2,.58+ae()*.3,.63+ae()*.37,1)}if(Z==="bush")continue;let Oe=f[(pe*3+Ce+V)%f.length],ke=.25+De;ce(v,f[2],_e,ke,ge,0,0,0,.065,.03,.065);for(let $e=0;$e<5;$e++){let mt=2*Math.PI*$e/5,k=.65+ae()*.35;ce(v,Oe,_e+.07*Math.cos(mt),ke,ge+.07*Math.sin(mt),-Math.PI/2,0,mt,k,k,k)}}for(let{geometry:pe,material:Ce,transforms:_e}of ye.values()){let ge=new i.InstancedMesh(pe,Ce,_e.length);_e.forEach((De,Oe)=>ge.setMatrixAt(Oe,De)),ge.instanceMatrix.needsUpdate=!0,ge.castShadow=!1,ge.receiveShadow=!1,ge.computeBoundingSphere(),ee.add(ge)}}for(let X of[-1,1])C(g,X*3.2,13,2.3,8.1,37+(X+1)*7),C(x,X*3.3,13.2,2.6,6.7,123+(X+1)*13,"flower"),C(u,X*3.25,13.4,1.65,7.5,222+(X+1)*19,"bush"),C(h,X*4.15,12.5,3,7.6,471+(X+1)*11);let U=new i.MeshStandardMaterial({color:"#746047",roughness:.81}),F=new i.MeshStandardMaterial({color:"#b4aa92",roughness:.88});T(y,4.5,.12,3.6,-12,.2,-1.5,a);for(let X of[-13.95,-10.05])for(let de of[-2.95,-.05])T(y,.19,2.6,.19,X,1.54,de,U);for(let X of[-13.95,-10.05])T(y,.19,.18,3.15,X,2.84,-1.5,U);for(let X=-2.9;X<=-.1;X+=.54)T(y,4.23,.12,.14,-12,2.92,X,F);T(y,3.9,.15,.48,-12,.37,-1.5,U);function O(X){g.visible=X==="classic",x.visible=X==="family",u.visible=X==="modern",h.visible=X==="garden"}function q(X){m.visible=!!X}function H(X){y.visible=!!X,M.visible=!!X}function j(X){w.visible=!!X}return O("family"),q(!0),H(!1),j(!1),{root:n,path:p,parking:m,classic:g,family:x,modern:u,garden:h,gazebo:y,poolPath:w,pergolaPath:M,setStyle:O,setParking:q,setGazebo:H,setPool:j,getState:()=>({style:g.visible?"classic":x.visible?"family":u.visible?"modern":"garden",parking:m.visible,gazebo:y.visible})}}function xf(i){let e=(r,a=2.7,o=2.2)=>{let l=document.createElement("canvas");l.width=l.height=512;let c=l.getContext("2d",{alpha:!1}),d=280624;r(c,()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296));let p=new i.CanvasTexture(l);return p.colorSpace=i.SRGBColorSpace,p.wrapS=p.wrapT=i.RepeatWrapping,p.repeat.set(a,o),p.anisotropy=4,p},t=(r,a="#b2aaa0",o=1)=>e((l,c)=>{l.fillStyle=a,l.fillRect(0,0,512,512);let d=95*o,f=34*o;for(let p=-1;p<Math.ceil(512/f)+1;p++)for(let m=-1;m<Math.ceil(512/d)+1;m++){let g=m*d+p%2*d*.5,x=p*f,u=r[Math.floor(c()*r.length)];l.fillStyle=u,l.fillRect(g+2,x+2,d-4,f-4),l.fillStyle="rgba(255,255,255,.09)",l.fillRect(g+3,x+3,d-6,2),l.fillStyle="rgba(0,0,0,.08)",l.fillRect(g+3,x+f-5,d-6,2);for(let h=0;h<10;h++)l.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.06)",l.fillRect(g+3+c()*(d-6),x+3+c()*(f-6),1+c()*4,1+c()*3)}},3.1,2.4),n=(r,a,o=!1)=>e((l,c)=>{l.fillStyle=r,l.fillRect(0,0,512,512);let d=o?1200:21e3;for(let f=0;f<d;f++){l.fillStyle=c()>.5?"rgba(255,255,255,.07)":"rgba(50,47,41,.035)";let p=o?15+c()*80:1+c()*3;l.fillRect(c()*512,c()*512,p,p)}if(o)for(let f=0;f<7;f++){let p=c()*512,m=c()*512,g=l.createRadialGradient(p,m,3,p,m,100+c()*130);g.addColorStop(0,a),g.addColorStop(1,"rgba(185,178,162,0)"),l.fillStyle=g,l.fillRect(0,0,512,512)}},2.1,1.9),s=e((r,a)=>{r.fillStyle="#795a40",r.fillRect(0,0,512,512);for(let o=0;o<512;o+=37){r.fillStyle=["#a27a57","#896747","#987151","#79573e"][Math.floor(a()*4)],r.fillRect(o+2,0,34,512),r.fillStyle="rgba(43,30,17,.14)",r.fillRect(o+2,0,2,512);for(let l=0;l<32;l++)r.fillStyle="rgba(35,28,18,.07)",r.fillRect(o+4+a()*28,a()*512,1,15+a()*55)}},3.2,2.6);return{klinker:t(["#49352c","#584036","#765447","#61443c","#795a4b"],"#a79b90",.92),brickBeige:t(["#e0c8a7","#d7c4aa","#bca58b","#eed4b7","#cfad86"],"#ddd0bf",1),brickGraphite:t(["#656563","#454a4d","#575c60","#3e4548","#6e7070"],"#9a9c9a",1),brickWhite:t(["#ece7dc","#e0d9cc","#f2ede0","#d6d1c5","#e9e2d4"],"#bfc1b9",1),plasterSand:n("#c8b69a","rgba(148,125,96,.10)"),plasterWhite:n("#eeeae1","rgba(150,138,124,.09)"),venetian:n("#e2d9cc","rgba(142,133,120,.13)",!0),planken:s}}function yf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u043C\u043E\u0441\u0442\u043A\u0430 \u043F\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0443",e.add(t);let n={graphite:"#51575b",gray:"#8d8980",sand:"#a69a82",brown:"#746d62"},s={concrete:"#858682",tile:"#6e7470",pavers:"#918778",stone:"#888073",wide:"#6d6e68"},r=new i.MeshStandardMaterial({color:s.concrete,roughness:.91}),a=g=>{let x=document.createElement("canvas");x.width=256,x.height=256;let u=x.getContext("2d");u.fillStyle="#565b59",u.fillRect(0,0,256,256);let h=g==="tile"?4:7,y=g==="tile"?4:9;for(let M=0;M<y;M++)for(let T=0;T<h;T++){let S=g==="pavers"&&M%2?-256/h/2:0,_=T*256/h+S,v=M*256/y;u.fillStyle=["#e4e1d9","#cbc9c0","#b9b8b0","#d2d0c7"][(T*7+M*11)%4],u.fillRect(_+2,v+2,256/h-4,256/y-4),_<0&&u.fillRect(_+256+2,v+2,256/h-4,256/y-4)}let w=new i.CanvasTexture(x);return w.colorSpace=i.SRGBColorSpace,w.wrapS=w.wrapT=i.RepeatWrapping,w.repeat.set(3,3),w},o=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);o.colorSpace=i.SRGBColorSpace,o.wrapS=o.wrapT=i.RepeatWrapping,o.repeat.set(3,3);let l=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.repeat.set(3,3);let c={concrete:o,tile:a("tile"),pavers:a("pavers"),stone:l,wide:a("pavers")},d=[],f=()=>{let g=new i.Mesh(new i.BoxGeometry(1,.12,1),r);return g.castShadow=!1,g.receiveShadow=!0,t.add(g),d.push(g),g};for(let g=0;g<6;g++)f();let p=(g,x,u,h,y,w)=>{let M=d[g];M.visible=y>.08&&w>.08,M.position.set(x,u,h),M.scale.set(Math.max(y,.01),1,Math.max(w,.01))};function m({houseWidth:g=10,houseLength:x=10,type:u="concrete",color:h="graphite",width:y=.9,contour:w="all",verandaOn:M=!1}={}){let T=Math.max(5,Math.min(14,Number(g)||10)),S=Math.max(8,Math.min(18,Number(x)||10)),_=Math.max(u==="wide"?1.2:.6,Math.min(1.6,Number(y)||.9));r.color.set(n[h]||s[u]||s.concrete);let v=c[u]||null;r.map!==v&&(r.map=v,r.needsUpdate=!0),t.visible=u!=="none";let R=4.63,E=R-S,P=-T/2,N=T/2,L=Math.min(4.4,T-.6),C=(T-L)/2;p(0,P+C/2,.095,R+_/2,C,_),p(1,N-C/2,.095,R+_/2,C,_);let U=M?Math.min(T-.25,6.2*(Math.min(6.2,T-.55)/6.2)+.16):0;if(U>0){let H=(T+2*_-U)/2;p(2,P-_+H/2,.095,E-_/2,H,_),p(5,N+_-H/2,.095,E-_/2,H,_)}else p(2,0,.095,E-_/2,T+2*_,_),d[5].visible=!1;p(3,P-_/2,.095,(R+E)/2,_,S),p(4,N+_/2,.095,(R+E)/2,_,S);let F=w==="all",O=w==="front",q=w==="rear";d[0].visible=d[0].visible&&(F||O),d[1].visible=d[1].visible&&(F||O),d[2].visible=d[2].visible&&(F||q),d[5].visible=d[5].visible&&(F||q),d[3].visible=d[3].visible&&F,d[4].visible=d[4].visible&&F}return m(),{root:t,setLayout:m}}function vf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0432\u0435\u0440\u0430\u043D\u0434\u0430",e.add(t);let n=(x,u=.81)=>new i.MeshStandardMaterial({color:x,roughness:u}),s=n("#8c8680"),r=n("#929188"),a=n("#806951"),o=n("#47504f"),l=new i.MeshStandardMaterial({color:"#829fa9",roughness:.23,metalness:.1,transparent:!0,opacity:.8}),c=new Map,d=(x,u,h,y,w,M,T,S)=>{let _=new i.Mesh(new i.BoxGeometry(u,h,y),S);return _.position.set(w,M,T),_.castShadow=h>.3,_.receiveShadow=!0,x.add(_),_};function f(x){let u=new i.Group;if(u.name="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \xB7 "+x,t.add(u),c.set(x,u),d(u,6.2,.24,3.1,0,.29,-1.47,r),d(u,6.28,.09,3.16,0,.45,-1.47,x==="modern"?o:s),d(u,4.1,.15,.77,0,.185,-3.45,s),d(u,1.59,2.2,.11,0,1.65,-.09,o),d(u,1.34,1.88,.04,0,1.65,-.17,l),d(u,.065,1.93,.1,0,1.65,-.2,o),x==="open"||x==="garden")for(let h of[-2.93,2.93])d(u,.12,.93,.13,h,.93,-2.76,a),d(u,.12,.93,.13,h,.93,-.43,a),d(u,.12,.1,2.35,h,1.37,-1.6,a);else{let h=x==="modern"?o:x==="columns"?s:a,y=x==="columns"?[-2.82,-1.98,1.98,2.82]:[-2.82,2.82];for(let w of y)d(u,x==="columns"?.24:.2,2.62,.2,w,1.79,-2.8,h),d(u,.36,.13,.38,w,.49,-2.8,s),d(u,.36,.12,.38,w,3.11,-2.8,h);if(d(u,6.4,.19,3.25,0,3.26,-1.5,x==="modern"?o:a),d(u,6.55,.08,3.32,0,3.39,-1.5,x==="modern"?o:s),x!=="modern")for(let w=-2.85;w<=2.85;w+=.65)d(u,.12,.14,3.14,w,3.17,-1.55,a)}return u}for(let x of["open","covered","columns","modern","garden"])f(x);let p="none";function m(x){p=c.has(x)?x:"none",t.visible=p!=="none";for(let[u,h]of c)h.visible=u===p}function g(x,u){let h=Math.max(5,Math.min(14,Number(x)||10)),y=Math.max(8,Math.min(18,Number(u)||10)),w=Math.min(6.2,h-.55);t.scale.set(w/6.2,1,1),t.position.set(0,0,4.63-y)}return g(10,10),m("none"),{root:t,setStyle:m,setDimensions:g,getStyle:()=>p}}function Mf(i,e,{stone:t,brick:n,trim:s,wood:r,dark:a,glass:o}){let l=new i.Group;l.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F",e.add(l);let c=new Map,d=["twoClassic","twoBrick","twoColumns","twoModern","twoBalcony","twoTerrace","twoEstate","twoFamily","twoMansard","twoMansardBrick","twoMansardColumns"],f=(g,x,u,h,y,w,M,T)=>{let S=new i.Mesh(new i.BoxGeometry(x,u,h),T);return S.position.set(y,w,M),S.castShadow=!0,S.receiveShadow=!0,g.add(S),S},p=(g,x,u,h=1)=>{f(g,h,.2,.73,x,.45,u,t),f(g,h+.1,.1,.8,x,.58,u,s)};for(let g of d){let x=new i.Group;if(x.name="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0434\u043E\u043C \xB7 "+g,l.add(x),c.set(g,x),g==="twoClassic"){for(let u of[-5.9,5.9])f(x,.33,5.9,.26,u,3.5,4.67,s),f(x,.47,.24,.38,u,6.54,4.7,t),p(x,u,4.91,.43);f(x,12.7,.21,.38,0,3.73,4.67,t),f(x,12.9,.19,.32,0,6.81,4.67,s)}if(g==="twoBrick"){for(let u of[-5.95,5.95])f(x,.64,5.94,.57,u,3.52,4.76,n),p(x,u,4.87,.72),f(x,.78,.18,.64,u,6.62,4.8,t);f(x,12.75,.17,.38,0,3.75,4.76,t)}if(g==="twoColumns"){f(x,12.3,.28,1.54,0,.42,5.06,t),f(x,12.6,.25,1.54,0,6.45,5.05,t);for(let u of[-5.8,5.8])f(x,.3,5.65,.3,u,3.5,5.68,s),f(x,.62,.15,.61,u,.66,5.68,t),f(x,.58,.18,.61,u,6.27,5.68,t)}if(g==="twoModern"){for(let u of[-6,6])f(x,.33,6.18,.35,u,3.69,4.83,a);for(let u of[3.79,6.63])f(x,12.6,.27,.3,0,u,4.78,a);f(x,7.25,.08,.18,0,3.95,4.84,o),f(x,5.4,.17,1.7,0,3.36,5.28,a);for(let u of[-2.48,2.48])f(x,.2,2.51,.2,u,1.8,5.87,a),p(x,u,5.87,.35)}if(g==="twoBalcony"){f(x,6,.23,2.03,0,3.93,-5.48,t);for(let u of[-2.67,2.67])f(x,.24,3.41,.24,u,2.16,-6.28,s),p(x,u,-6.28,.42);for(let u of[-2.85,2.85])f(x,.13,1,.13,u,4.56,-6.44,a);for(let u=-2.78;u<=2.79;u+=.48)f(x,.08,.81,.1,u,4.49,-6.44,a);f(x,5.85,.12,.16,0,5.04,-6.44,a),f(x,1.7,2.4,.13,0,5.1,-4.7,a),f(x,1.52,2.22,.06,0,5.1,-4.8,o),f(x,.065,2.18,.08,0,5.1,-4.85,a),f(x,1.52,.065,.08,0,5.18,-4.85,a),f(x,.09,.13,.11,.47,4.89,-4.88,t)}if(g==="twoTerrace"){for(let u of[-5.62,5.62])f(x,.28,5.85,.25,u,3.56,4.76,r),f(x,.49,.15,.41,u,6.55,4.76,t);for(let u of[3.72,6.83])f(x,12.9,.16,.35,0,u,4.72,r)}if(g==="twoEstate"){for(let u of[-6.1,6.1])f(x,.48,6.16,.35,u,3.68,4.72,t),f(x,.72,.19,.5,u,6.67,4.72,s),p(x,u,4.83,.66);f(x,12.9,.24,.55,0,6.87,4.82,t),f(x,12.7,.22,.47,0,3.69,4.82,s)}if(g==="twoMansard"){for(let u of[-5.85,5.85])f(x,.26,5.88,.3,u,3.51,4.8,s),p(x,u,4.85,.44);for(let u of[3.71,6.73])f(x,12.5,.15,.35,0,u,4.8,t)}if(g==="twoMansardBrick"){for(let u of[-5.9,5.9])f(x,.51,5.95,.42,u,3.54,4.79,n),p(x,u,4.88,.65);f(x,12.7,.18,.38,0,3.7,4.83,t),f(x,12.6,.17,.38,0,6.72,4.83,s)}if(g==="twoMansardColumns"){f(x,9.1,.23,1.75,0,.41,5.36,t),f(x,9.35,.22,1.8,0,6.42,5.36,t);for(let u of[-3.95,-2.15,2.15,3.95])f(x,.24,5.6,.24,u,3.48,6.1,s),f(x,.48,.13,.46,u,.62,6.1,t)}if(g==="twoFamily"){for(let u of[-5.94,5.94])f(x,.29,5.9,.35,u,3.58,4.72,n),f(x,.37,.15,.43,u,6.62,4.72,s),p(x,u,4.86,.4);f(x,12.6,.12,.29,0,3.72,4.75,t)}}function m(g){for(let[x,u]of c)u.visible=x===g}return m("none"),{root:l,groups:c,setStyle:m,ids:d}}var ue={ACESFilmicToneMapping:Jr,BoxGeometry:Ei,BufferAttribute:Sn,BufferGeometry:fn,CanvasTexture:Mr,Color:rt,CylinderGeometry:wr,DirectionalLight:Xr,DoubleSide:Rn,EquirectangularReflectionMapping:Ws,Euler:Un,Float32BufferAttribute:Tt,Fog:pr,Group:li,HemisphereLight:kr,InstancedMesh:yr,Matrix4:_t,Mesh:pn,MeshBasicMaterial:Ds,MeshPhysicalMaterial:Fr,MeshStandardMaterial:Os,Object3D:Jt,PCFSoftShadowMap:Po,PerspectiveCamera:en,Plane:an,PlaneGeometry:Ki,PointLight:Hr,Quaternion:on,Raycaster:qr,RepeatWrapping:As,SRGBColorSpace:rn,Scene:mr,Shape:Us,ShapeGeometry:Dr,SphereGeometry:Nr,TextureLoader:zr,TorusGeometry:Ur,Vector2:Ue,Vector3:W,WebGLRenderer:vl},Fi=document.getElementById("sceneContainer"),Pl=document.getElementById("modelFallback"),ca=document.getElementById("loading3d"),Sh=document.getElementById("hourInput"),_y=document.getElementById("hourLabel"),bh=document.getElementById("windowsToggle"),wh=document.getElementById("facadeSelect"),Ah=document.getElementById("roofSelect"),ha=document.getElementById("fenceSelect"),Th=document.getElementById("roofColorSelect"),Eh=document.getElementById("fenceColorSelect"),ua=document.getElementById("houseStyleSelect"),is=document.getElementById("roofShapeSelect"),Sf=document.getElementById("houseSizeSelect"),Ch=document.getElementById("houseWidthInput"),Rh=document.getElementById("houseLengthInput"),bf=document.getElementById("houseFloorsSelect"),wf=document.getElementById("frameColorSelect"),Af=document.getElementById("doorColorSelect"),Tf=document.getElementById("glassTintSelect"),Ef=document.getElementById("landscapeSelect"),Il=document.getElementById("poolToggle"),Cf=document.getElementById("entranceStyleSelect"),Rf=document.getElementById("plinthSelect"),v1=document.getElementById("terraceToggle"),Pf=document.getElementById("yardStyleSelect"),Ph=document.getElementById("parkingToggle"),If=document.getElementById("gazeboToggle"),Zs=document.getElementById("verandaSelect"),xy=document.getElementById("blindAreaType"),Lf=document.getElementById("blindAreaColor"),Df=document.getElementById("blindAreaWidth"),Nf=document.getElementById("blindAreaContour"),Ll=document.getElementById("highDetailButton"),Oi=document.getElementById("qualitySelect"),ss=document.getElementById("autoRotate"),Dl=document.getElementById("modelFPS"),yy=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Js=(i,e,t)=>Math.max(e,Math.min(t,i)),Nl=()=>{let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d",{alpha:!1});e.fillStyle="#e9d9cd",e.fillRect(0,0,512,512);let t=15,n=512/t,s=88;for(let a=0;a<t;a++)for(let o=-1;o<7;o++){let l=a%2?s/2:0,c=o*s-l,d=(a*37+o*59+1e3)%8,f=["#b46f5e","#b97967","#ad6e5e","#bd7c6a","#b67561","#9f6255","#bf8270","#ac7163"];e.fillStyle=f[d],e.fillRect(c+1,a*n+1,s-2,n-2),e.fillStyle="rgba(255,233,212,.10)",e.fillRect(c+3,a*n+2,s-7,2),e.fillStyle="rgba(55,31,25,.10)",e.fillRect(c+2,a*n+n-5,s-4,2)}let r=new ue.CanvasTexture(i);return r.colorSpace=ue.SRGBColorSpace,r.wrapS=r.wrapT=ue.RepeatWrapping,r.repeat.set(3.25,2.15),r.anisotropy=4,r},da=(i,e=1,t=1)=>{let n=document.createElement("canvas");n.width=512,n.height=512;let s=n.getContext("2d",{alpha:!1}),r=29617;i(s,()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296));let o=new ue.CanvasTexture(n);return o.colorSpace=ue.SRGBColorSpace,o.wrapS=o.wrapT=ue.RepeatWrapping,o.repeat.set(e,t),o.anisotropy=4,o},Ih=i=>{let e={slate:["#354044","#434a4b","#30383d","#4e5353","#44484a","#353a3e"],terracotta:["#9b513f","#ad6147","#864333","#b46f53","#a75b42","#8b4a37"],graphite:["#282c30","#34393a","#3b3f43","#292e33","#44474b","#343a3d"]};return da((t,n)=>{t.fillStyle="#272b2b",t.fillRect(0,0,512,512);let s=e[i],r=59,a=33;for(let o=-1;o<18;o++)for(let l=-1;l<11;l++){let c=l*r+o%2*r/2,d=o*a;t.fillStyle=s[Math.floor(n()*s.length)],t.fillRect(c+1,d+1,r-2,a-2),t.fillStyle="rgba(255,255,255,.075)",t.fillRect(c+3,d+2,r-7,2),t.fillStyle="rgba(0,0,0,.11)",t.fillRect(c+1,d+a-5,r-2,3)}for(let o=0;o<4700;o++)t.fillStyle=n()>.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.05)",t.fillRect(n()*512,n()*512,1+n()*3,1+n()*2)},3,3)},Lh=()=>da((i,e)=>{i.fillStyle="#d8c9b4",i.fillRect(0,0,512,512);let t=["#e6daca","#d3c0a8","#ccbea9","#e5d3bc","#c4b49e"];for(let n=0;n<12;n++)for(let s=-1;s<7;s++){let o=s*85+n%2*85/2,l=n*44;i.fillStyle=t[Math.floor(e()*t.length)],i.fillRect(o+1,l+1,83,42),i.fillStyle="rgba(255,255,255,.13)",i.fillRect(o+3,l+2,79,2)}for(let n=0;n<9400;n++){let s=e()>.5?"rgba(67,54,42,.045)":"rgba(255,255,255,.08)";i.fillStyle=s,i.fillRect(e()*512,e()*512,1+e()*4,1+e()*3)}},2,1.75),vy=()=>da((i,e)=>{i.fillStyle="#e7dfd0",i.fillRect(0,0,512,512);for(let t=0;t<28e3;t++)i.fillStyle=e()>.53?"rgba(255,255,255,.12)":"rgba(107,94,74,.09)",i.fillRect(e()*512,e()*512,1+e()*3,1+e()*3)},2,2),My=()=>da((i,e)=>{i.fillStyle="#63794e",i.fillRect(0,0,512,512);for(let t=0;t<22e3;t++)i.fillStyle=e()>.52?"rgba(173,194,123,.17)":"rgba(35,69,35,.20)",i.fillRect(e()*512,e()*512,1+e()*2,2+e()*7)},18,18),Sy=()=>da((i,e)=>{i.fillStyle="#c0baab",i.fillRect(0,0,512,512);for(let t=0;t<14;t++)for(let n=-1;n<9;n++){let a=n*69+(t%2?34.5:0),o=t*38,l=Math.floor(168+e()*37);i.fillStyle="rgb("+l+","+(l-3)+","+(l-10)+")",i.fillRect(a+2,o+2,65,34),i.fillStyle="rgba(255,255,255,.10)",i.fillRect(a+3,o+3,63,2);for(let c=0;c<6;c++)i.fillStyle="rgba(65,63,50,.04)",i.fillRect(a+e()*69,o+e()*38,2,2)}},2,5);try{let f=function(I){if(o)return;let te=l[I]||l.front;c={camera:new ue.Vector3(...te.camera),target:new ue.Vector3(...te.target)},a.autoRotate=!1,ss.setAttribute("aria-pressed","false"),ss.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440",d&&(d.value=I in l?I:"front")},Of=function(){new ue.TextureLoader().load(new URL("assets/3d/metal_roof_rough.webp",document.baseURI).href,I=>{I.wrapS=I.wrapT=ue.RepeatWrapping,I.repeat.set(2,2),Z.setMetalRoughness(I)},void 0,()=>{})};if(!window.WebGLRenderingContext)throw new Error("WebGL unavailable");let i=new ue.Scene,e=window.matchMedia("(min-width:850px) and (pointer:fine)").matches,t=new ue.WebGLRenderer({antialias:!0,powerPreference:e?"high-performance":"low-power",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.95)),t.outputColorSpace=ue.SRGBColorSpace,t.toneMapping=ue.ACESFilmicToneMapping,t.toneMappingExposure=1.35,t.shadowMap.enabled=!0,t.shadowMap.type=ue.PCFSoftShadowMap,t.domElement.addEventListener("webglcontextlost",I=>{I.preventDefault(),t.domElement.style.visibility="hidden",Pl.style.display="block",ca.hidden=!0,Dl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 3D \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"},!1),t.domElement.setAttribute("aria-label","\u0422\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430. \u0412\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0438\u043B\u0438 \u043C\u044B\u0448\u044C\u044E"),Fi.appendChild(t.domElement),t.domElement.style.visibility="hidden";let n=new ue.PerspectiveCamera(48,1,.2,130),s=window.matchMedia("(max-width:730px)").matches,r=s?new ue.Vector3(17,13,49.5):new ue.Vector3(22,14,51);n.position.copy(r);let a=new wl(n,t.domElement);a.enableDamping=!0,a.dampingFactor=.085,a.enablePan=!1,a.minDistance=12.5,a.maxDistance=75,a.minPolarAngle=.18,a.maxPolarAngle=Math.PI*.475,a.autoRotate=!1,a.autoRotateSpeed=2.15,a.target.set(0,2.75,0),a.update();let o=!1,l={front:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]},side:{camera:[31,9,2.5],target:[0,2.8,0]},back:{camera:[12,8,-28],target:[0,2.7,0]},top:s?{camera:[17,62,15],target:[8,1,3]}:{camera:[13,49,12],target:[5,1,3]},yard:{camera:[20,14.5,36],target:[2.4,1.5,9]},facade:s?{camera:[9.7,6.4,16.3],target:[0,2.45,2.4]}:{camera:[12.5,7.2,20],target:[0,2.5,2.7]},roof:s?{camera:[10.2,10,17],target:[0,3.8,1.7]}:{camera:[14.3,12.1,20],target:[0,4,1.7]},fence:{camera:[23,16.5,33],target:[0,3.05,5]},presets:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]}},c=null;window.addEventListener("kaskad:focus-view",I=>{if(o||typeof un<"u"&&un)return;let te=l[I.detail?.tab];te&&(c={camera:new ue.Vector3(...te.camera),target:new ue.Vector3(...te.target)})}),a.addEventListener("start",()=>{c=null});let d=document.getElementById("sceneViewSelect");d?.addEventListener("change",()=>f(d.value)),document.getElementById("sceneOverviewButton")?.addEventListener("click",()=>f("front"));let p=document.getElementById("sceneGestureTip");a.addEventListener("start",()=>{p&&p.classList.add("is-used")},{once:!0}),f("front");let m=(I,te=.8,we={})=>new ue.MeshStandardMaterial({color:I,roughness:te,...we}),g={brick:Nl(),stone:Lh(),plaster:vy(),tuscan:Nl(),gray:Lh(),...xf(ue)},x={slate:Ih("slate"),terracotta:Ih("terracotta"),graphite:Ih("graphite")},u=new ue.MeshBasicMaterial({color:"#ffffff",map:g.brick,toneMapped:!0}),h=m("#e6dece",.79),y=m("#ede7da",.57),w=m("#55534d",.91),M=m("#94877b",.86),T=m("#3e4849",.82),S=m("#4a3a31",.67,{metalness:.08}),_=m("#6f6555",.53,{metalness:.48}),v=m("#6f6555",.46,{metalness:.47}),R=m("#a9b2aa",.35,{metalness:.52}),E=m("#ffffff",.86,{map:Sy()}),P=m("#ffffff",.97,{map:My()}),N=m("#777f7b",.9),L=new ue.MeshPhysicalMaterial({color:"#4f9eaa",roughness:.075,metalness:.04,transparent:!0,opacity:.88,clearcoat:.95,clearcoatRoughness:.09,envMapIntensity:1.1,side:ue.DoubleSide}),C=new ue.Mesh(new ue.PlaneGeometry(135,135),P);C.rotation.x=-Math.PI/2,C.receiveShadow=!0,i.add(C);let U=(I,te,we,et,tt,pt,St,ht=!0)=>{let Ke=new ue.Mesh(new ue.BoxGeometry(I,te,we),et);return Ke.position.set(tt,pt,St),Ke.castShadow=ht,Ke.receiveShadow=!0,i.add(Ke),Ke},F=(I,te,we,et,tt,pt,St,ht=16)=>{let Ke=new ue.Mesh(new ue.CylinderGeometry(I,te,we,ht),et);return Ke.position.set(tt,pt,St),Ke.castShadow=!0,Ke.receiveShadow=!0,i.add(Ke),Ke},O=i.children.length;U(13.6,.42,9.65,w,0,.29,0);let q=new ue.BoxGeometry(12.8,6.45,9),H=q.getAttribute("uv");for(let I=0;I<8;I++)H.setX(I,H.getX(I)*(9/12.8));H.needsUpdate=!0;let j=new ue.Mesh(q,u);j.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0435\u0434\u0438\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0444\u0430\u0441\u0430\u0434 4 \u0441\u0442\u043E\u0440\u043E\u043D\u044B",j.position.set(0,3.66,0),j.castShadow=!0,j.receiveShadow=!0,i.add(j),U(13.2,.18,9.45,y,0,3.66,0),U(13.4,.28,9.6,h,0,6.86,0),U(13,.16,9.35,y,0,7.1,0),U(12.93,.22,9.13,u,0,6.96,0),U(12.85,.1,9.05,y,0,7.08,0);let X=i.children.length;U(3.85,.2,1.85,h,0,3.06,5.42),U(3.94,.07,1.96,y,0,3.18,5.42);for(let I of[-1.72,1.72])F(.14,.15,2.35,y,I,1.83,6.2,14),F(.23,.23,.13,h,I,.65,6.2,16),F(.22,.22,.12,h,I,3.03,6.2,16);let de=i.children.slice(X),fe=new ue.BufferGeometry,$=new Float32Array([-7.25,6.98,-5.25,0,9.05,-5.25,0,9.05,5.25,-7.25,6.98,-5.25,0,9.05,5.25,-7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,-5.25,7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,5.25,0,9.05,5.25]);fe.setAttribute("position",new ue.BufferAttribute($,3)),fe.computeVertexNormals(),fe.setAttribute("uv",new ue.Float32BufferAttribute([0,0,.5,1,.5,0,0,0,.5,0,0,1,.5,1,1,0,1,1,.5,1,1,1,.5,0],2));let G=new ue.MeshStandardMaterial({color:"#ffffff",roughness:.78,map:x.slate,side:ue.DoubleSide}),V=new ue.Mesh(fe,G);V.castShadow=!0,V.receiveShadow=!0,i.add(V);let Z=hf(ue,i,{tileRoof:V,roofSurface:G}),ee=Z.metalMat,ie=new ue.BufferGeometry;ie.setAttribute("position",new ue.Float32BufferAttribute([-6.43,7.03,4.51,6.43,7.03,4.51,0,8.77,4.51,-6.43,7.03,-4.51,0,8.77,-4.51,6.43,7.03,-4.51],3));let Ie=(7.03-(3.66-6.45/2))/6.45,ye=(8.77-(3.66-6.45/2))/6.45;ie.setAttribute("uv",new ue.Float32BufferAttribute([0,Ie,1,Ie,.5,ye,1,Ie,.5,ye,0,Ie],2)),ie.computeVertexNormals();let ce=new ue.Mesh(ie,u);ce.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u044B \u0442\u043E\u0433\u043E \u0436\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430",ce.castShadow=!0,ce.receiveShadow=!0,i.add(ce);let le=U(.2,.24,10.6,T,0,9.03,0);for(let I of[-6.6,6.6])for(let te of[-4.45,4.45])for(let we=0;we<13;we++){let et=.84+we*.455,tt=new ue.Mesh(new ue.BoxGeometry(.43,.31,.53),we%2?y:h);tt.position.set(I,et,te),tt.castShadow=!0,tt.receiveShadow=!0,i.add(tt)}let ae=m("#616767",.38,{metalness:.57});for(let I of[-7.22,7.22]){let te=new ue.Mesh(new ue.CylinderGeometry(.105,.105,10.65,12),ae);te.rotation.x=Math.PI/2,te.position.set(I,6.96,0),te.castShadow=!0,i.add(te)}for(let I of[-6.54,6.54])F(.068,.068,6.28,ae,I,3.71,4.69,10),U(.34,.12,.2,ae,I,6.98,4.7,!1),U(.34,.12,.2,ae,I,.53,4.7,!1);for(let I of[-3.45,0,3.45])U(13.02,.11,.08,h,0,3.6,I,!1);U(1.72,2.58,.13,h,0,1.58,4.67),U(1.52,2.34,.2,S,0,1.54,4.79),U(.12,.12,.14,_,.55,1.54,4.95);let pe=new ue.MeshStandardMaterial({color:"#a6bdc7",roughness:.17,metalness:.26,emissive:new ue.Color("#ffd68c"),emissiveIntensity:0}),Ce=[],_e=[],ge=(I,te,we,et=0,tt=1.48,pt=1.58)=>{let St=new ue.Group;St.position.set(I,te,we),St.rotation.y=et,i.add(St);let ht=(Ct,zt,xn,mi,qt,yn,gi)=>{let dn=new ue.Mesh(new ue.BoxGeometry(Ct,zt,xn),mi);return dn.position.set(qt,yn,gi),dn.castShadow=!0,St.add(dn),dn};ht(tt+.25,pt+.32,.13,u,0,0,0),ht(tt+.05,pt+.1,.14,v,0,0,.09);let Ke=ht(tt-.1,pt-.18,.025,pe,0,0,.18);return Ce.push(Ke),ht(.065,pt-.04,.055,y,0,0,.23),ht(tt-.04,.065,.055,y,0,0,.23),ht(tt+.3,.16,.35,y,0,-pt/2-.13,.13),ht(.043,pt-.22,.055,v,-tt*.26,0,.243),ht(.043,pt-.22,.055,v,tt*.26,0,.243),ht(tt-.11,.032,.055,v,0,-pt*.23,.245),ht(tt-.11,.032,.055,v,0,pt*.23,.245),_e.push({group:St,x:I,y:te,z:we,rot:et}),St};[-4.55,-2.3,2.3,4.55].forEach(I=>{ge(I,2.12,4.58),ge(I,5.49,4.58)}),ge(0,5.49,4.58,0,1.54,1.72);for(let I of[-4.5,-2.3,2.3,4.5])ge(I,2.12,-4.58,Math.PI),ge(I,5.49,-4.58,Math.PI);for(let I of[-2.65,0,2.65])for(let te of[2.18,5.43])ge(6.49,te,I,Math.PI/2,1.45,1.64),ge(-6.49,te,I,-Math.PI/2,1.45,1.64);let Oe=ff(ue,i,{limestone:h,quartz:y,bronze:_,doorMat:S,roofMat:T,porchElements:de,balconyElements:[]}),ke=()=>{let I=ua?.value||"classic";$e.visible=!Ht.has(I),k.setStyle(I);let te={twoClassic:"classic",twoBrick:"practical",twoColumns:"classic",twoModern:"modern",twoBalcony:"classic",twoTerrace:"classic",twoEstate:"estate",twoFamily:"practical"}[I]||I;$e.visible&&Oe.setStyle(te),Le.setStyle(I);for(let we of _e){let et=Math.abs(we.z-4.58)<.2,tt=Math.abs(we.z+4.58)<.2,pt=we.y>4,St=Math.abs(we.x)<2.7,ht=I==="modern"&&et&&pt,Ke=I==="coastal"&&et&&pt&&St,Ct=I==="practical"&&((et||tt)&&Math.abs(we.x)>4||!et&&!tt&&Math.abs(we.z)<.1),zt=I==="craft"&&et&&pt&&Math.abs(we.x)<3;we.group.visible=!(ht||Ke||Ct||zt)}},$e=new ue.Group;$e.name="KASKAD parametric house volume";for(let I of i.children.slice(O))$e.add(I);i.add($e);let mt=uf(ue,$e,{roofSystem:Z,roofRidge:le,gableFacades:ce}),k=mf(ue,i,{brick:u,limestone:h,quartz:y,roofSystem:Z,windowFrameMetal:v,glassMat:pe,doorMat:S}),Ht=new Set(la.filter(I=>I.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435").map(I=>I.id)),gt=m("#806447",.81),ft=Rl(ue,$e,{stone:h,brick:u,wood:gt,metal:T}),Le=Mf(ue,$e,{stone:h,brick:u,trim:y,wood:gt,dark:T,glass:pe}),Pt=yf(ue,i),Xe=vf(ue,i),Ye=()=>{let I=Rf?.value||"graphite";ft.setPlinth(I),ft.setTerrace(!1),k.setPlinth(I),k.setTerrace(!1);let te=Number(Ch?.value)||10,we=Number(Rh?.value)||10;if(ua?.value==="twoBalcony"&&Zs?.value!=="none"){Zs.value="none",Zs.dispatchEvent(new Event("change",{bubbles:!0}));let et=document.getElementById("siteCompatibilityNote");et&&(et.textContent="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430: \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043B\u043A\u043E\u043D \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u0443 \u0436\u0435 \u0437\u043E\u043D\u0443.")}Xe.setStyle(Zs?.value||"none"),Xe.setDimensions(te,we),Pt.setLayout({houseWidth:te,houseLength:we,type:"none",color:Lf?.value||"graphite",width:Number(Df?.value)||.9,contour:Nf?.value||"all",verandaOn:(Zs?.value||"none")!=="none"})};Pt.root.visible=!1,[Rf,Zs,xy,Lf,Df,Nf].forEach(I=>I?.addEventListener("change",Ye)),Ye();let D=Cl(ue,$e,{stone:h,trim:y,wood:gt,metal:T}),b=()=>{let I=Cf?.value||"simple";de.forEach(te=>{te.visible=!1}),D.setStyle(I),k.setEntrance(I)};Cf?.addEventListener("change",b),b();let K={classic:1.42,italian:1.5,modern:1.85,estate:1.56,kavkaz:1.4,coastal:1.7,practical:1.36,craft:1.3},me=Float32Array.from(q.getAttribute("uv").array),he=Float32Array.from(ie.getAttribute("uv").array),be=()=>{let I=Math.max(5,Math.min(14,Number(Ch?.value)||10)),te=Math.max(8,Math.min(18,Number(Rh?.value)||10)),we=I/12.8,et=te/9;$e.scale.set(we,1,et),$e.position.z=4.58*(1-et);for(let Ke of D.styles.values())Ke.scale.x=1/we,Ke.scale.z=1/et,Ke.position.z=4.58*(et-1)/et;let tt=I<8.5?2:4;for(let Ke of _e){let{group:Ct,x:zt,z:xn,rot:mi}=Ke,qt=Math.abs(zt)>6,yn=!qt&&xn>0,gi=!qt&&xn<0,dn=Math.abs(zt)>4;if(Ct.visible=!(I<8.5&&!qt&&!dn),Ct.scale.x=qt?1/et:1/we,Ct.scale.z=qt?1/we:1/et,qt)Ct.position.x=Math.sign(zt)*(I/2-.1)/we,Ct.position.z=(xn===0?0:Math.sign(xn)*Math.max(1.5,te/2-1.4))/et;else if(yn||gi){let Sa=dn?I/2-1.05:I/2-2.87;Ct.position.x=Math.sign(zt)*Math.max(.87,Sa)/we}I<8&&Math.abs(zt)<.1&&yn&&(Ct.visible=!1)}let pt=q.getAttribute("uv");for(let Ke=0;Ke<pt.count;Ke++){let Ct=Ke<8?et:Ke>=16?we:1;pt.setXY(Ke,me[Ke*2]*Ct,me[Ke*2+1])}pt.needsUpdate=!0;let St=ie.getAttribute("uv");for(let Ke=0;Ke<St.count;Ke++)St.setXY(Ke,he[Ke*2]*we,he[Ke*2+1]);St.needsUpdate=!0;let ht=bf?.value||"one";$e.userData.footprint={width:I,length:te,floors:ht},k.setDimensions(I,te),ft.setDimensions(I,te),Ye()};window.addEventListener("kaskad:dimensions-changed",()=>be());for(let I of[Ch,Rh,bf])I?.addEventListener("change",be);let Re=()=>{let I=is?.value||"hip",te=["modernOne","minimal","coastal","twoModern"].includes(ua?.value);I==="flat"&&!te&&(I="hip",is&&(is.value=I),is?.dispatchEvent(new CustomEvent("kaskad:roof-guard"))),mt.setShape(I),k.setRoof(I,Z.getType())},re=()=>{ke(),be(),Re()};ua?.addEventListener("change",()=>{re(),f("front")}),Sf?.addEventListener("change",be),is?.addEventListener("change",Re),re();for(let I=0;I<3;I++)U(3.35+I*.42,.16,.69,M,0,.34-I*.09,6.54+I*.55);let se=_f(ue,i,{lawnMaterial:P}),Te=i.children.length,B=m("#a6a29b",.83),oe=m("#8eb7b6",.72,{metalness:.03});U(5.88,.065,9.85,oe,14.35,.04,.5,!1),U(5.84,.015,9.79,L,14.35,.145,.5,!1);for(let I of[11.2,17.5])U(.32,.22,10.42,B,I,.175,.5,!1);for(let I of[-4.63,5.63])U(6.52,.22,.31,B,14.35,.175,I,!1);let ne=m("#d2d3ce",.64);for(let I=0;I<3;I++)U(3.3-I*.25,.035,.55,ne,14.35,.123-I*.012,-4.04+I*.38,!1);let ve=new ue.Group;ve.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0431\u0430\u0441\u0441\u0435\u0439\u043D";for(let I of i.children.slice(Te))ve.add(I);i.add(ve);let Me=m("#6b5847",.96),Ae=i.children.length;df(ue,i,{trunkMat:Me});let Ve=new ue.Group;Ve.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0438 \u043A\u0443\u0441\u0442\u0430\u0440\u043D\u0438\u043A\u0438";for(let I of i.children.slice(Ae))I.isInstancedMesh&&(I.userData.defaultCount=I.count),Ve.add(I);i.add(Ve);let je=m("#e1d8c6",.84,{map:Lh()}),xe=m("#262c2c",.54,{metalness:.63}),We=m("#665747",.73,{metalness:.05}),Je=m("#b07c67",.85,{map:g.brick}),Se=m("#ffffff",.88,{map:Nl()}),it=m("#ffffff",.88,{map:Nl()}),Ft=m("#e2d6c2",.64),Kn=[m("#466c45",.94),m("#5b7c51",.96),m("#3a6549",.96),m("#7b8355",.97)],Ul=m("#b88c82",.95),fa=m("#ded4b9",.96),Bi=cf(ue,i,{gardenStone:je,postBrick:Je,tuscanBrick:Se,tuscanFenceWall:it,copingStone:Ft,fenceIron:xe,timber:We}),Pn=new ue.Group;Pn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430",i.add(Pn);for(let I of[$e,k.root,Xe.root,Pt.root])Pn.add(I);let _n=new ue.Group;_n.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0435",i.add(_n);let Bn=m("#2f6d40",.86),pa=m("#c6b89b",.9),zn=document.createElement("div");zn.className="kaskad-site-scene-hint",zn.hidden=!0,zn.textContent="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0434\u043E\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C",Fi.append(zn);let $n=[];for(let I=0;I<4;I++){let te=new ue.Mesh(new ue.BoxGeometry(1,.22,1),Bn);te.position.y=.16,_n.add(te),$n.push(te)}let zi=[];for(let I=0;I<4;I++){let te=new ue.Mesh(new ue.BoxGeometry(.28,1.15,.28),Bn);te.position.y=.6,_n.add(te),zi.push(te)}let pi=new ue.Mesh(new ue.PlaneGeometry(1,1),new ue.MeshStandardMaterial({color:"#78b46b",transparent:!0,opacity:.38,roughness:1,depthWrite:!1}));pi.rotation.x=-Math.PI/2,pi.position.y=.018,_n.add(pi);let jn=new ue.Group;jn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0438 \u043A\u0430\u043B\u0438\u0442\u043A\u0430",_n.add(jn);let ki=new ue.BoxGeometry(.085,1.25,.085),Ks=m("#354b43",.5,{metalness:.3}),ma=m("#d0c5af",.88),kn=new ue.Mesh(new ue.BoxGeometry(1,.07,1),ma);kn.name="\u0414\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438 \u043A \u0432\u0445\u043E\u0434\u0443",kn.position.y=.045,_n.add(kn);let ga=0,_a=0,Fl=(I,te,we)=>{if(I===ga&&te===_a)return;ga=I,_a=te,jn.clear();let et=[[-I/2,we,-1.28,we],[1.28,we,I/2,we],[-I/2,we,-I/2,we-te],[I/2,we,I/2,we-te],[-I/2,we-te,I/2,we-te]];for(let[pt,St,ht,Ke]of et){let Ct=Math.hypot(ht-pt,Ke-St),zt=Math.max(2,Math.ceil(Ct/.9)),xn=(ht-pt)/Ct,mi=(Ke-St)/Ct;for(let qt=0;qt<=zt;qt++){let yn=pt+(ht-pt)*qt/zt,gi=St+(Ke-St)*qt/zt,dn=new ue.Mesh(ki,Ks);dn.position.set(yn,.68,gi),dn.castShadow=!1,jn.add(dn)}for(let qt of[.55,1.09]){let yn=new ue.Mesh(new ue.BoxGeometry(Ct,.075,.075),Ks);yn.position.set((pt+ht)/2,qt,(St+Ke)/2),yn.rotation.y=-Math.atan2(Ke-St,ht-pt),jn.add(yn)}}let tt=new ue.Mesh(new ue.BoxGeometry(2.54,.12,.16),Ks);tt.name="\u041A\u0430\u043B\u0438\u0442\u043A\u0430 \xB7 \u0432\u044A\u0435\u0437\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043E\u043A",tt.position.set(0,.13,we),jn.add(tt)};_n.visible=!1;let un=!1,A=null,z=0,Q=0,Y=()=>{if(!A)return;let{width:I,depth:te,houseX:we,houseZ:et,houseWidth:tt,houseLength:pt,fits:St}=A,ht=20.5,Ke=ht-te,Ct=-I/2,zt=I/2,xn=(ht+Ke)/2,mi=(ei,Qs,Vl,Hf,Wf)=>{ei.scale.set(Qs,1,Vl),ei.position.x=Hf,ei.position.z=Wf};mi($n[0],I,.12,0,ht),mi($n[1],I,.12,0,Ke),mi($n[2],.12,te,Ct,xn),mi($n[3],.22,te,zt,xn),[[Ct,ht],[zt,ht],[Ct,Ke],[zt,Ke]].forEach(([ei,Qs],Vl)=>zi[Vl].position.set(ei,.6,Qs)),pi.scale.set(I,te,1),pi.position.set(0,.018,xn),Fl(I,te,ht);let qt=-I/2+we+tt/2,yn=ht-et,gi=qt,dn=yn-ht+1,Sa=Math.hypot(gi,dn);kn.visible=Sa>.4&&St,kn.scale.set(1.32,1,Math.max(.1,Sa)),kn.rotation.y=Math.atan2(gi,dn),kn.position.set(qt/2,.045,(ht+yn+1)/2);let Gf=-I/2+we+tt/2,Vf=ht-et-4.63;if(Pn.position.set(un?Gf:0,0,un?Vf:0),_n.visible=un,un){n.far=600,n.updateProjectionMatrix(),i.fog&&(i.fog.near=170,i.fog.far=600),se.root.visible=!1,Ve.visible=!1,ve.visible=!1;let ei=Bi.setType(ha?.value||"iron");if(ei.visible=!1,I!==z||te!==Q){let Qs=Math.max(29,Math.max(I,te)*.92);c={camera:new ue.Vector3(I*.59,Qs,xn+te*.48),target:new ue.Vector3(0,1.1,xn)},z=I,Q=te}a.maxDistance=Math.max(100,Math.max(I,te)*1.9),zn.hidden=!0,zn.textContent="\u{1F3E0} "+I.toFixed(1)+" \xD7 "+te.toFixed(1)+" \u043C \xB7 "+(I*te/100).toLocaleString("ru-RU",{maximumFractionDigits:2})+" \u0441\u043E\u0442. \xB7 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043E\u043C \u0438 \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435"}$n.forEach(ei=>ei.material.color.set(St?"#3b6849":"#a85243"))};window.addEventListener("kaskad:plot-changed",I=>{A=I.detail,Y()}),window.addEventListener("kaskad:site-preview",I=>{un=I.detail?.active===!0,un?Y():(zn.hidden=!0,z=0,Q=0,n.far=170,n.updateProjectionMatrix(),i.fog&&(i.fog.near=50,i.fog.far=110),Pn.position.set(0,0,0),_n.visible=!1,se.root.visible=!0,Bi.setType(ha?.value||"iron"),Be())});let J=new ue.Raycaster,Pe=new ue.Vector2,Ge=new ue.Plane(new ue.Vector3(0,1,0),0),Ee=new ue.Vector3,Ne=!1,He=null,Qe=0,lt=0,ze=I=>{let te=t.domElement.getBoundingClientRect();return Pe.set((I.clientX-te.left)/te.width*2-1,-((I.clientY-te.top)/te.height)*2+1),J.setFromCamera(Pe,n),J.ray.intersectPlane(Ge,Ee)?Ee.clone():null};t.domElement.addEventListener("pointerdown",I=>{if(!un||!A||I.button!==0||(ze(I),!J.intersectObject(Pn,!0).filter(et=>et.object.visible&&et.object.isMesh).length))return;let we=ze(I);we&&(Ne=!0,He=I.pointerId,Qe=we.x-Pn.position.x,lt=we.z-Pn.position.z,a.enabled=!1,c=null,t.domElement.setPointerCapture(I.pointerId),I.preventDefault(),I.stopImmediatePropagation())},!0),t.domElement.addEventListener("pointermove",I=>{if(!Ne||I.pointerId!==He||!A)return;I.preventDefault(),I.stopImmediatePropagation();let te=ze(I);if(!te)return;let{width:we,depth:et,houseWidth:tt,houseLength:pt}=A,St=20.5,ht=te.x-Qe,Ke=te.z-lt,Ct=Js(ht+we/2-tt/2,0,Math.max(0,we-tt)),zt=Js(St-4.63-Ke,0,Math.max(0,et-pt));window.dispatchEvent(new CustomEvent("kaskad:plot-move",{detail:{houseX:Ct,houseZ:zt}}))},!0);let ct=I=>{!Ne||I.pointerId!==He||(Ne=!1,He=null,a.enabled=!0,t.domElement.hasPointerCapture(I.pointerId)&&t.domElement.releasePointerCapture(I.pointerId),I.preventDefault(),I.stopImmediatePropagation())};t.domElement.addEventListener("pointerup",ct,!0),t.domElement.addEventListener("pointercancel",ct,!0);let It={bronze:"#6f6555",graphite:"#394348",white:"#f4eee2",wood:"#7b4b2d"},Mt={walnut:"#4a3a31",graphite:"#373d3e",oak:"#c29c6b",white:"#f4eee2"},yt={clear:"#a6bdc7",smoke:"#768a91",blue:"#8ebdcc"},Bt=()=>{v.color.set(It[wf?.value]||It.bronze),S.color.set(Mt[Af?.value]||Mt.walnut)},Be=()=>{if(un)return;let I=Ef?.value||"lush";ve.visible=Il?.checked!==!1,Ve.visible=I!=="open",se.setStyle(I==="open"?"none":Pf?.value||"family"),se.setParking(Ph?.checked!==!1),se.setPool(ve.visible),Bi.setVehicleAccess(Ph?.checked!==!1),se.setGazebo(If?.checked===!0);for(let te=0;te<Ve.children.length;te++){let we=Ve.children[te];we.visible=I==="lush"||I==="modern"&&te%4!==0,we.isInstancedMesh&&(we.count=I==="modern"?Math.ceil(we.userData.defaultCount*.72):we.userData.defaultCount)}};[wf,Af].forEach(I=>I?.addEventListener("change",Bt)),[Ef,Il,Pf,Ph,If].forEach(I=>I?.addEventListener("change",Be)),Il?.addEventListener("change",()=>{Il.checked&&f("top")}),Bt(),Be();let Wt=i.children.filter(I=>I.isMesh||I.isGroup||I.isInstancedMesh),st=null,Qn={hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},Lt="living",Gn=document.getElementById("sceneEnterInterior"),sn=document.getElementById("sceneRoomPicker");document.getElementById("builderQuickTabs")?.after(sn),sn.classList.add("builder-room-panel");let Vn=document.getElementById("sceneOverviewButton"),ut=document.querySelector(".scene-metric-badge"),bt=document.createElement("img");bt.className="scene-interior-photo",bt.hidden=!0,bt.alt="\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430, \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430",Fi.append(bt);let Xt=document.createElement("span");Xt.className="scene-interior-photo-caption",Xt.textContent="\u0424\u043E\u0442\u043E-\u043F\u0440\u0438\u043C\u0435\u0440 \u043E\u0442\u0434\u0435\u043B\u043A\u0438",Xt.hidden=!0,Fi.append(Xt);let wt={hall:"room-13.jpg",living:"room-07.jpg",kitchen:"room-11.jpg",bedroom:"room-08.jpg",bath:"room-06.jpg"},At=!0,$t=document.createElement("button");$t.type="button",$t.className="scene-photo-toggle",$t.textContent="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C 3D-\u044D\u0441\u043A\u0438\u0437",sn.append($t);let $s=()=>{o&&!At&&!st&&(st=gf(ue,i),st.setRoom(Lt)),st&&(st.root.visible=o&&!At),bt.hidden=!o||!At,Xt.hidden=bt.hidden,$t.textContent=At?"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C 3D-\u044D\u0441\u043A\u0438\u0437":"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0444\u043E\u0442\u043E"};$t.addEventListener("click",()=>{At=!At,$s()});let Dh=new Map,Nh=null,Uh=null,Fh=a.minDistance,Oh=a.maxDistance,Bh=a.maxPolarAngle,zh=[...document.querySelectorAll("#sceneRoomPicker [data-room]")],kh=I=>{Lt=wt[I]?I:"living",st&&st.setRoom(Lt),bt.src=new URL("assets/ideas/"+wt[Lt],document.baseURI).href,$s(),zh.forEach(te=>te.setAttribute("aria-pressed",String(te.dataset.room===Lt))),sn.querySelector(".scene-room-heading").textContent="\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \xB7 "+Qn[Lt],n.position.set(1.05,1.92,2.62),a.target.set(0,1.12,-.55),a.update(),c=null},Uf=()=>{if(o=!o,document.body.classList.toggle("kaskad-interior-active",o),o){Dh=new Map(Wt.map(I=>[I,I.visible]));for(let I of Wt)I.visible=!1;Nh=n.position.clone(),Uh=a.target.clone(),Fh=a.minDistance,Oh=a.maxDistance,Bh=a.maxPolarAngle,a.minDistance=.95,a.maxDistance=3.55,a.maxPolarAngle=Math.PI*.72,a.autoRotate=!1,st&&(st.root.visible=!At),sn.hidden=!1,Vn.hidden=!0,ut.hidden=!0,p&&p.classList.add("is-used"),Gn.textContent="\u2190 \u0421\u043D\u0430\u0440\u0443\u0436\u0438",Gn.setAttribute("aria-pressed","true"),kh("living")}else{st&&(st.root.visible=!1),bt.hidden=!0,Xt.hidden=!0;for(let[I,te]of Dh)I.visible=te;a.minDistance=Fh,a.maxDistance=Oh,a.maxPolarAngle=Bh,n.position.copy(Nh),a.target.copy(Uh),a.update(),c=null,sn.hidden=!0,Vn.hidden=!1,ut.hidden=!1,Gn.textContent="\u0412\u043E\u0439\u0442\u0438 \u0432 \u0434\u043E\u043C",Gn.setAttribute("aria-pressed","false"),un?Y():Be()}};Gn?.addEventListener("click",Uf),zh.forEach(I=>I.addEventListener("click",()=>kh(I.dataset.room)));let xa={graphite:"#52595e",chocolate:"#594438",burgundy:"#873c48",green:"#426047",black:"#252b30",gray:"#898f93",terracotta:"#bd7254",sand:"#beb3a0"},Ol=null,js=(I=!1)=>{let te=wh?.value||"brick",we=g[te]||g.brick;!I&&Ol===te&&u.map===we||(Ol=te,u.map=we,u.needsUpdate=!0)},Gh=()=>{let I=Ah?.value||"slate",te=xa[Th?.value]||xa.graphite;Z.setType(I),Z.setColor(te),mt.setMaterial(),k.setRoof(is?.value||"hip",I),T.color.set(te)},Vh=()=>{let I=ha?.value||"iron",te=xa[Eh?.value]||xa.graphite;Bi.setType(I),Bi.setColor(te)};wh?.addEventListener("change",()=>js()),[Ah,Th].forEach(I=>I?.addEventListener("change",Gh)),[ha,Eh].forEach(I=>I?.addEventListener("change",Vh)),js(),Gh(),Vh();let Ff=new ue.TextureLoader,Bl=!1,Hh=()=>{Bl||(Bl=!0,js(!0),t.domElement.style.visibility="visible",Pl.style.display="none",ca.hidden=!0,Dl.textContent="3D \u0433\u043E\u0442\u043E\u0432 \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435 360\xB0",window.parent!==window&&window.parent.postMessage({type:"kaskad-builder-first-frame",version:1},location.origin))},Kt=(I,te,we,et)=>{Ff.load(new URL("assets/3d/"+I+".webp",document.baseURI).href,tt=>{tt.colorSpace=ue.SRGBColorSpace,tt.wrapS=tt.wrapT=ue.RepeatWrapping,tt.repeat.set(te,we),tt.anisotropy=Math.min(e?8:4,t.capabilities.getMaxAnisotropy()),et(tt),js(!0)},void 0,()=>{})},Wh=!1,Xh=()=>{if(Wh)return;Wh=!0;let I=(te,we)=>{g[te]=we,Ol===te&&js(!0)};Kt("red_brick_hd",3.25,2.15,te=>{I("brick",te),Je.map=te,Je.needsUpdate=!0}),Kt("stone_tile_wall_hd",2,1.75,te=>{I("stone",te),je.map=te,je.needsUpdate=!0}),Kt("rustic_brick_diff_hd",3.2,2.2,te=>{I("tuscan",te),Se.map=te.clone(),Se.map.wrapS=Se.map.wrapT=ue.RepeatWrapping,Se.map.repeat.set(1.9,2.4),Se.map.needsUpdate=!0,Se.needsUpdate=!0,it.map=te.clone(),it.map.wrapS=it.map.wrapT=ue.RepeatWrapping,it.map.repeat.set(12,2.9),it.map.needsUpdate=!0,it.needsUpdate=!0}),Kt("italian_brick_diff_hd",3.1,2.2,te=>{I("gray",te)}),Kt("roof_tile_neutral_hd",3,3,te=>Z.setTileMap(te)),Kt("wood_planks_hd",1,1,te=>{We.map=te,We.needsUpdate=!0}),Kt("metal_roof_base_hd",2,2,te=>Z.setPhotoMap(te)),Kt("concrete_pavement_02_2k",2,5,te=>{E.map=te,E.needsUpdate=!0})};Kt("concrete_pavement_02_1k",2,5,I=>{E.map=I,E.needsUpdate=!0}),Kt("leafy_grass_lush_v41",30,30,I=>{P.map=I,P.roughness=.99,P.needsUpdate=!0}),Kt("red_brick",3.25,2.15,I=>{g.brick=I,Je.map=I,Je.color.set("#ffffff"),Je.needsUpdate=!0}),Kt("stone_tile_wall",2,1.75,I=>{g.stone=I,je.map=I,je.color.set("#ffffff"),je.needsUpdate=!0}),Kt("roof_tile_neutral",3,3,I=>{Z.setTileMap(I)}),Kt("wood_planks",1,1,I=>{We.map=I,We.color.set("#ffffff"),We.needsUpdate=!0}),Kt("rustic_brick_diff",3.2,2.2,I=>{g.tuscan=I,Se.map=I.clone(),Se.map.wrapS=Se.map.wrapT=ue.RepeatWrapping,Se.map.repeat.set(1.9,2.4),Se.map.needsUpdate=!0,Se.needsUpdate=!0,it.map=I.clone(),it.map.wrapS=it.map.wrapT=ue.RepeatWrapping,it.map.repeat.set(12,2.9),it.map.needsUpdate=!0,it.needsUpdate=!0}),Kt("italian_brick_diff",3.1,2.2,I=>{g.gray=I}),Kt("metal_roof_base",2,2,I=>{Z.setPhotoMap(I)}),Of();let qh=new ue.TextureLoader;((I,te)=>{qh.load(new URL("assets/3d/"+I+".webp",document.baseURI).href,we=>{we.wrapS=we.wrapT=ue.RepeatWrapping,we.repeat.set(2.3,2),te.normalMap=we,te.normalScale.set(.36,.36),te.needsUpdate=!0},void 0,()=>{})})("rustic_brick_nor_gl",Se),qh.load(new URL("assets/3d/metal_roof_nor_gl.webp",document.baseURI).href,I=>{I.wrapS=I.wrapT=ue.RepeatWrapping,I.repeat.set(2,2),Z.setMetalNormal(I)},void 0,()=>{});let Bf=()=>{new Tl().load(new URL("assets/3d/rooitou_park_1k.hdr",document.baseURI).href,I=>{I.mapping=ue.EquirectangularReflectionMapping,i.environment=I,i.environmentIntensity=.52},void 0,()=>{})};window.setTimeout(Bf,e?550:1550);let Yh=new ue.HemisphereLight("#d8e9ff","#b2a28c",1.35);i.add(Yh);let Nt=new ue.DirectionalLight("#fff1d7",2.15);Nt.position.set(14,17,14),Nt.castShadow=!0,Nt.shadow.mapSize.set(e?1536:1024,e?1536:1024),Nt.shadow.camera.left=-28,Nt.shadow.camera.right=28,Nt.shadow.camera.top=28,Nt.shadow.camera.bottom=-28,Nt.shadow.camera.near=.5,Nt.shadow.camera.far=65,Nt.shadow.bias=-35e-5,i.add(Nt,Nt.target);let ya=new ue.DirectionalLight("#eef3fa",.4);ya.position.set(-19,14,-19),ya.castShadow=!1,i.add(ya),Nt.target.position.set(0,2.4,0);let zl=new ue.PointLight("#ffcc82",0,15,2);zl.position.set(0,4.1,5.6),i.add(zl),i.fog=new ue.Fog("#e7e9e4",50,110);let Zh=new ue.Color("#e0e9ea"),kl=new ue.Color("#bb8d80"),zf=new ue.Color("#151e2c"),rs=new ue.Color,kf=I=>{let te=Math.floor(I),we=Math.round((I-te)*60);return String(te).padStart(2,"0")+":"+String(we).padStart(2,"0")},va=()=>{let I=Number(Sh.value);_y.textContent=kf(I);let te=Math.max(0,Math.sin((I-6)/16*Math.PI)),we=Js((I-17)/5,0,1),et=Js((I-15)/3,0,1)*(1-Js((I-20)/2,0,1));Nt.position.set(Math.cos((I-6)/16*Math.PI)*22,1.5+te*27,Math.sin((I-6)/16*Math.PI)*22),Nt.intensity=Math.max(.06,2.15*te),Nt.color.set("#fff6e9").lerp(new ue.Color("#efaa72"),et*.75),Yh.intensity=.78+te*.78,I<17?rs.copy(Zh):I<20?rs.copy(Zh).lerp(kl,(I-17)/3):rs.copy(kl).lerp(zf,Js((I-20)/2,0,1)),I<8&&rs.lerp(kl,(8-I)/2*.48),i.background=rs.clone(),i.fog.color.copy(rs),t.toneMappingExposure=I>20?.94:1.07+te*.12,ya.intensity=.15+te*1.2,i.environment&&(i.environmentIntensity=.2+te*.47);let tt=bh.checked,pt=tt?.15+we*1.9:0;pe.emissiveIntensity=pt,pe.color.set(tt&&we>.5?"#edc69b":yt[Tf?.value]||yt.clear),zl.intensity=tt?we*26:0,Nt.shadow.needsUpdate=!0};Sh.addEventListener("input",va),bh.addEventListener("change",va),Tf?.addEventListener("change",va),ss.addEventListener("click",()=>{a.autoRotate=!a.autoRotate,ss.setAttribute("aria-pressed",String(a.autoRotate)),a.autoRotate?ss.textContent="\u25A0 \u0421\u0442\u043E\u043F":ss.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440"}),Oi?.addEventListener("change",()=>{let I=Oi.value,te=I==="ultra"?3:I==="high"?2.4:I==="economy"?1:1.95,we=window.devicePixelRatio||1,et=e?I==="ultra"?Math.max(3,we):I==="high"?Math.max(2.25,we):we:I==="ultra"?we*1.5:I==="high"?we*1.25:we;t.setPixelRatio(Math.min(te,et)),(I==="high"||I==="ultra")&&Xh();let tt=I==="ultra"?2048:I==="high"?1536:I==="economy"?512:1024;Nt.shadow.mapSize.set(tt,tt),Nt.shadow.map&&(Nt.shadow.map.dispose(),Nt.shadow.map=null),Gl(),t.render(i,n)}),Ll?.addEventListener("click",()=>{Oi.value=Oi.value==="high"?"balanced":"high",Oi.dispatchEvent(new Event("change",{bubbles:!0})),Ll.setAttribute("aria-pressed",String(Oi.value==="high")),Ll.textContent=Oi.value==="high"?"HD \u2713":"HD"}),e&&window.setTimeout(Xh,1800),va();let Gl=()=>{let I=Math.max(200,Fi.clientWidth),te=Math.max(250,Fi.clientHeight);t.setSize(I,te,!1),n.aspect=I/te,n.updateProjectionMatrix()};new ResizeObserver(Gl).observe(Fi),Gl();let Jh=0,Kh=performance.now(),Ma=()=>{Kh=performance.now()};a.addEventListener("start",Ma),a.addEventListener("change",Ma);for(let I of["input","change","click","pointerdown"])document.addEventListener(I,Ma,{capture:!0,passive:!0});document.addEventListener("visibilitychange",Ma,{passive:!0});let $h=!0;new IntersectionObserver(I=>{$h=I.some(te=>te.isIntersecting)},{threshold:.01}).observe(Fi);let jh=I=>{if(requestAnimationFrame(jh),document.hidden||!$h)return;let we=!!(c||a.autoRotate||I-Kh<1100)?31:165;if(!(I-Jh<we)){if(Jh=I,c){let et=yy?1:.17;n.position.lerp(c.camera,et),a.target.lerp(c.target,et),n.position.distanceToSquared(c.camera)<.01&&a.target.distanceToSquared(c.target)<.01&&(n.position.copy(c.camera),a.target.copy(c.target),c=null)}a.update(),t.render(i,n),Bl||Hh()}};requestAnimationFrame(()=>{try{a.update(),t.render(i,n),Hh()}catch{Pl.style.display="block",ca.hidden=!0,Dl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"}requestAnimationFrame(jh)})}catch{Pl.style.display="block",ca.hidden=!0,ca.textContent="",Dl.textContent="\u0424\u043E\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u043E 3D";for(let e of[Sh,bh,wh,Ah,ha,Th,Eh,ua,Sf,is,Oi,ss,Ll])e&&(e.disabled=!0)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
