var Li={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Di={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fu=0,Tc=1,Ou=2;var Zr=1,Io=2,Gs=3,Ni=0,ln=1,Rn=2,$i=0,Vs=1,Ec=2,Cc=3,Rc=4,Bu=5;var ji=100,zu=101,ku=102,Gu=103,Vu=104,Hu=200,Wu=201,Xu=202,qu=203,Pc=204,Ic=205,Yu=206,Zu=207,Ju=208,Ku=209,$u=210,ju=211,Qu=212,ed=213,td=214,Ja=0,Ka=1,$a=2,ws=3,ja=4,Qa=5,eo=6,to=7,Lc=0,nd=1,id=2,qn=0,Dc=1,Nc=2,Uc=3,Jr=4,Fc=5,Oc=6,Bc=7;var zc=300,Qi=301,Hs=302,Ws=303,Lo=304,As=1e3,En=1001,no=1002,Zt=1003,sd=1004;var Kr=1005;var Ft=1006,Do=1007;var Yn=1008;var mn=1009,kc=1010,Gc=1011,Xs=1012,No=1013,Fn=1014,cn=1015,hn=1016,Uo=1017,Fo=1018,es=1020,Vc=35902,Hc=35899,Wc=1021,Xc=1022,On=1023,hi=1026,di=1027,Oo=1028,Bo=1029,Ui=1030,zo=1031;var ko=1033,$r=33776,jr=33777,Qr=33778,ea=33779,Go=35840,Vo=35841,Ho=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,Zo=37488,Jo=37489,ta=37490,Ko=37491,$o=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,ul=36492,dl=36494,fl=36495,pl=36283,ml=36284,na=36285,gl=36286;var ur=2300,io=2301,Ya=2302,fc=2303,pc=2400,mc=2401,gc=2402;var rd=3200;var _l=0,ad=1,fi="",rn="srgb",qi="srgb-linear",dr="linear",vt="srgb";var Za=7680;var od=519,ld=512,cd=513,hd=514,qc=515,ud=516,dd=517,Yc=518,Zc=519,fd=35044;var Jc="300 es",Cn=2e3,Ts=2001;function Yf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Zf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Es(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pd(){let i=Es("canvas");return i.style.display="block",i}var eu={},Cs=null;function Kc(...i){let e="THREE."+i.shift();Cs?Cs("log",e,...i):console.log(e,...i)}function md(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ze(...i){i=md(i);let e="THREE."+i.shift();if(Cs)Cs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=md(i);let e="THREE."+i.shift();if(Cs)Cs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Xi(...i){let e=i.join(" ");e in eu||(eu[e]=!0,Ze(...i))}function gd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _d={[Ja]:Ja,[$a]:eo,[ja]:ja,[ws]:Qa,[Ka]:Ka,[eo]:$a,[to]:to,[Qa]:ws},Nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tu=1234567,or=Math.PI/180,Rs=180/Math.PI;function ts(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ot(i,e,t){return Math.max(e,Math.min(t,i))}function $c(i,e){return(i%e+e)%e}function Jf(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Kf(i,e,t){return i!==e?(t-i)/(e-i):0}function lr(i,e,t){return(1-t)*i+t*e}function $f(i,e,t,n){return lr(i,e,1-Math.exp(-t*n))}function jf(i,e=1){return e-Math.abs($c(i,e*2)-e)}function Qf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ep(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function tp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function np(i,e){return i+Math.random()*(e-i)}function ip(i){return i*(.5-Math.random())}function sp(i){i!==void 0&&(tu=i);let e=tu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rp(i){return i*or}function ap(i){return i*Rs}function op(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function lp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function jc(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function cp(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),f=r((e-n)/2),p=a((e-n)/2),m=r((n-e)/2),g=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*f,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*f,o*c);break;case"ZXZ":i.set(l*f,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*g,l*m,o*c);break;case"YXY":i.set(l*m,o*d,l*g,o*c);break;case"ZYZ":i.set(l*g,l*m,o*d,o*c);break;default:Ze("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Qc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function xd(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function yd(i,e){if(e.constructor===Float32Array)return i;let t=Qc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var eh={DEG2RAD:or,RAD2DEG:Rs,generateUUID:ts,clamp:ot,euclideanModulo:$c,mapLinear:Jf,inverseLerp:Kf,lerp:lr,damp:$f,pingpong:jf,smoothstep:Qf,smootherstep:ep,randInt:tp,randFloat:np,randFloatSpread:ip,seededRandom:sp,degToRad:rp,radToDeg:ap,isPowerOfTwo:op,ceilPowerOfTwo:lp,floorPowerOfTwo:jc,setQuaternionFromProperEuler:cp,normalize:yd,denormalize:xd},ah=class ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;var Fe=ah,on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3],p=r[a+0],m=r[a+1],g=r[a+2],y=r[a+3];if(f!==y||l!==p||c!==m||d!==g){let u=l*p+c*m+d*g+f*y;u<0&&(p=-p,m=-m,g=-g,y=-y,u=-u);let h=1-o;if(u<.9995){let x=Math.acos(u),b=Math.sin(x);h=Math.sin(h*x)/b,o=Math.sin(o*x)/b,l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+y*o}else{l=l*h+p*o,c=c*h+m*o,d=d*h+g*o,f=f*h+y*o;let x=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=x,c*=x,d*=x,f*=x}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+d*f+l*m-c*p,e[t+1]=l*g+d*p+c*f-o*m,e[t+2]=c*g+d*m+o*p-l*f,e[t+3]=d*g-o*f-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),p=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"YXZ":this._x=p*d*f+c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"ZXY":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f-p*m*g;break;case"ZYX":this._x=p*d*f-c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f+p*m*g;break;case"YZX":this._x=p*d*f+c*m*g,this._y=c*m*f+p*d*g,this._z=c*d*g-p*m*f,this._w=c*d*f-p*m*g;break;case"XZY":this._x=p*d*f-c*m*g,this._y=c*m*f-p*d*g,this._z=c*d*g+p*m*f,this._w=c*d*f+p*m*g;break;default:Ze("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],p=n+o+f;if(p>0){let m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){let m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){let m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{let m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ot(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},oh=class oh{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Wl.copy(this).projectOnVector(e),this.sub(Wl)}reflect(e){return this.sub(Wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ot(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;var Z=oh,Wl=new Z,nu=new on,lh=class lh{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],p=n[2],m=n[5],g=n[8],y=s[0],u=s[3],h=s[6],x=s[1],b=s[4],M=s[7],T=s[2],S=s[5],_=s[8];return r[0]=a*y+o*x+l*T,r[3]=a*u+o*b+l*S,r[6]=a*h+o*M+l*_,r[1]=c*y+d*x+f*T,r[4]=c*u+d*b+f*S,r[7]=c*h+d*M+f*_,r[2]=p*y+m*x+g*T,r[5]=p*u+m*b+g*S,r[8]=p*h+m*M+g*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,p=o*l-d*r,m=c*r-a*l,g=t*f+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=f*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=p*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=m*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Xi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Xl.makeScale(e,t)),this}rotate(e){return Xi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Xl.makeRotation(-e)),this}translate(e,t){return Xi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;var it=lh,Xl=new it,iu=new it().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),su=new it().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hp(){let i={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===vt&&(s.r=ci(s.r),s.g=ci(s.g),s.b=ci(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(s.r=Ms(s.r),s.g=Ms(s.g),s.b=Ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fi?dr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[qi]:{primaries:e,whitePoint:n,transfer:dr,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:iu,fromXYZ:su,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),i}var pt=hp();function ci(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var as,so=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{as===void 0&&(as=Es("canvas")),as.width=e.width,as.height=e.height;let s=as.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=as}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Es("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ci(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ci(t[n]/255)*255):t[n]=ci(t[n]);return{data:t,width:e.width,height:e.height}}else return Ze("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},up=0,Ps=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=ts(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ql(s[a].image)):r.push(ql(s[a]))}else r=ql(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ql(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?so.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ze("Texture: Unable to serialize Texture."),{})}var dp=0,Yl=new Z,tn=class i extends Nn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=En,s=En,r=Ft,a=Yn,o=On,l=mn,c=i.DEFAULT_ANISOTROPY,d=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dp++}),this.uuid=ts(),this.name="",this.source=new Ps(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yl).x}get height(){return this.source.getSize(Yl).y}get depth(){return this.source.getSize(Yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ze(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case En:e.x=e.x<0?0:1;break;case no:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case En:e.y=e.y<0?0:1;break;case no:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=zc;tn.DEFAULT_ANISOTROPY=1;var ch=class ch{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],g=l[9],y=l[2],u=l[6],h=l[10];if(Math.abs(d-p)<.01&&Math.abs(f-y)<.01&&Math.abs(g-u)<.01){if(Math.abs(d+p)<.1&&Math.abs(f+y)<.1&&Math.abs(g+u)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let b=(c+1)/2,M=(m+1)/2,T=(h+1)/2,S=(d+p)/4,_=(f+y)/4,v=(g+u)/4;return b>M&&b>T?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=S/n,r=_/n):M>T?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=S/s,r=v/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=v/r),this.set(n,s,r,t),this}let x=Math.sqrt((u-g)*(u-g)+(f-y)*(f-y)+(p-d)*(p-d));return Math.abs(x)<.001&&(x=1),this.x=(u-g)/x,this.y=(f-y)/x,this.z=(p-d)/x,this.w=Math.acos((c+m+h-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ot(this.x,e.x,t.x),this.y=ot(this.y,e.y,t.y),this.z=ot(this.z,e.z,t.z),this.w=ot(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ot(this.x,e,t),this.y=ot(this.y,e,t),this.z=ot(this.z,e,t),this.w=ot(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ot(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;var Rt=ch,ro=class extends Nn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ft,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new tn({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Ft,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ps(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},bn=class extends ro{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},fr=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ao=class extends tn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Po=class Po{constructor(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u)}set(e,t,n,s,r,a,o,l,c,d,f,p,m,g,y,u){let h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=p,h[3]=m,h[7]=g,h[11]=y,h[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Po().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/os.setFromMatrixColumn(e,0).length(),r=1/os.setFromMatrixColumn(e,1).length(),a=1/os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=a*d,m=a*f,g=o*d,y=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+g*c,t[5]=p-y*c,t[9]=-o*l,t[2]=y-p*c,t[6]=g+m*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*d,m=l*f,g=c*d,y=c*f;t[0]=p+y*o,t[4]=g*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-g,t[6]=y+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*d,m=l*f,g=c*d,y=c*f;t[0]=p-y*o,t[4]=-a*f,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*d,t[9]=y-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*d,m=a*f,g=o*d,y=o*f;t[0]=l*d,t[4]=g*c-m,t[8]=p*c+y,t[1]=l*f,t[5]=y*c+p,t[9]=m*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=y-p*f,t[8]=g*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+g,t[10]=p-y*f}else if(e.order==="XZY"){let p=a*l,m=a*c,g=o*l,y=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=p*f+y,t[5]=a*d,t[9]=m*f-g,t[2]=g*f-m,t[6]=o*d,t[10]=y*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fp,e,pp)}lookAt(e,t,n){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),_i.crossVectors(n,vn),_i.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),_i.crossVectors(n,vn)),_i.normalize(),wa.crossVectors(vn,_i),s[0]=_i.x,s[4]=wa.x,s[8]=vn.x,s[1]=_i.y,s[5]=wa.y,s[9]=vn.y,s[2]=_i.z,s[6]=wa.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],p=n[9],m=n[13],g=n[2],y=n[6],u=n[10],h=n[14],x=n[3],b=n[7],M=n[11],T=n[15],S=s[0],_=s[4],v=s[8],P=s[12],R=s[1],I=s[5],F=s[9],C=s[13],E=s[2],D=s[6],U=s[10],O=s[14],V=s[3],B=s[7],G=s[11],X=s[15];return r[0]=a*S+o*R+l*E+c*V,r[4]=a*_+o*I+l*D+c*B,r[8]=a*v+o*F+l*U+c*G,r[12]=a*P+o*C+l*O+c*X,r[1]=d*S+f*R+p*E+m*V,r[5]=d*_+f*I+p*D+m*B,r[9]=d*v+f*F+p*U+m*G,r[13]=d*P+f*C+p*O+m*X,r[2]=g*S+y*R+u*E+h*V,r[6]=g*_+y*I+u*D+h*B,r[10]=g*v+y*F+u*U+h*G,r[14]=g*P+y*C+u*O+h*X,r[3]=x*S+b*R+M*E+T*V,r[7]=x*_+b*I+M*D+T*B,r[11]=x*v+b*F+M*U+T*G,r[15]=x*P+b*C+M*O+T*X,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],p=e[10],m=e[14],g=e[3],y=e[7],u=e[11],h=e[15],x=l*m-c*p,b=o*m-c*f,M=o*p-l*f,T=a*m-c*d,S=a*p-l*d,_=a*f-o*d;return t*(y*x-u*b+h*M)-n*(g*x-u*T+h*S)+s*(g*b-y*T+h*_)-r*(g*M-y*S+u*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],p=e[10],m=e[11],g=e[12],y=e[13],u=e[14],h=e[15],x=t*o-n*a,b=t*l-s*a,M=t*c-r*a,T=n*l-s*o,S=n*c-r*o,_=s*c-r*l,v=d*y-f*g,P=d*u-p*g,R=d*h-m*g,I=f*u-p*y,F=f*h-m*y,C=p*h-m*u,E=x*C-b*F+M*I+T*R-S*P+_*v;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/E;return e[0]=(o*C-l*F+c*I)*D,e[1]=(s*F-n*C-r*I)*D,e[2]=(y*_-u*S+h*T)*D,e[3]=(p*S-f*_-m*T)*D,e[4]=(l*R-a*C-c*P)*D,e[5]=(t*C-s*R+r*P)*D,e[6]=(u*M-g*_-h*b)*D,e[7]=(d*_-p*M+m*b)*D,e[8]=(a*F-o*R+c*v)*D,e[9]=(n*R-t*F-r*v)*D,e[10]=(g*S-y*M+h*x)*D,e[11]=(f*M-d*S-m*x)*D,e[12]=(o*P-a*I-l*v)*D,e[13]=(t*I-n*P+s*v)*D,e[14]=(y*b-g*T-u*x)*D,e[15]=(d*T-f*b+p*x)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,p=r*c,m=r*d,g=r*f,y=a*d,u=a*f,h=o*f,x=l*c,b=l*d,M=l*f,T=n.x,S=n.y,_=n.z;return s[0]=(1-(y+h))*T,s[1]=(m+M)*T,s[2]=(g-b)*T,s[3]=0,s[4]=(m-M)*S,s[5]=(1-(p+h))*S,s[6]=(u+x)*S,s[7]=0,s[8]=(g+b)*_,s[9]=(u-x)*_,s[10]=(1-(p+y))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=os.set(s[0],s[1],s[2]).length(),o=os.set(s[4],s[5],s[6]).length(),l=os.set(s[8],s[9],s[10]).length();r<0&&(a=-a),In.copy(this);let c=1/a,d=1/o,f=1/l;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=d,In.elements[5]*=d,In.elements[6]*=d,In.elements[8]*=f,In.elements[9]*=f,In.elements[10]*=f,t.setFromRotationMatrix(In),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,d=2*r/(t-e),f=2*r/(n-s),p=(t+e)/(t-e),m=(n+s)/(n-s),g,y;if(l)g=r/(a-r),y=a*r/(a-r);else if(o===Cn)g=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===Ts)g=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=f,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Cn,l=!1){let c=this.elements,d=2/(t-e),f=2/(n-s),p=-(t+e)/(t-e),m=-(n+s)/(n-s),g,y;if(l)g=1/(a-r),y=a/(a-r);else if(o===Cn)g=-2/(a-r),y=-(a+r)/(a-r);else if(o===Ts)g=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=f,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Po.prototype.isMatrix4=!0;var _t=Po,os=new Z,In=new _t,fp=new Z(0,0,0),pp=new Z(1,1,1),_i=new Z,wa=new Z,vn=new Z,ru=new _t,au=new on,Un=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ot(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:Ze("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ru.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ru,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return au.setFromEuler(this),this.setFromQuaternion(au,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";var Is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},mp=0,ou=new Z,ls=new on,ti=new _t,Aa=new Z,er=new Z,gp=new Z,_p=new on,lu=new Z(1,0,0),cu=new Z(0,1,0),hu=new Z(0,0,1),uu={type:"added"},xp={type:"removed"},cs={type:"childadded",child:null},Zl={type:"childremoved",child:null},Jt=class i extends Nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new Z,t=new Un,n=new on,s=new Z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new it}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.multiply(ls),this}rotateOnWorldAxis(e,t){return ls.setFromAxisAngle(e,t),this.quaternion.premultiply(ls),this}rotateX(e){return this.rotateOnAxis(lu,e)}rotateY(e){return this.rotateOnAxis(cu,e)}rotateZ(e){return this.rotateOnAxis(hu,e)}translateOnAxis(e,t){return ou.copy(e).applyQuaternion(this.quaternion),this.position.add(ou.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lu,e)}translateY(e){return this.translateOnAxis(cu,e)}translateZ(e){return this.translateOnAxis(hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(er,Aa,this.up):ti.lookAt(Aa,er,this.up),this.quaternion.setFromRotationMatrix(ti),s&&(ti.extractRotation(s.matrixWorld),ls.setFromRotationMatrix(ti),this.quaternion.premultiply(ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uu),cs.child=e,this.dispatchEvent(cs),cs.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xp),Zl.child=e,this.dispatchEvent(Zl),Zl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ti.multiply(e.parent.matrixWorld)),e.applyMatrix4(ti),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uu),cs.child=e,this.dispatchEvent(cs),cs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,e,gp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,_p,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),p=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jt.DEFAULT_UP=new Z(0,1,0);Jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var li=class extends Jt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yp={type:"move"},Ls=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let u=t.getJointPose(y,n),h=this._getHandJoint(c,y);u!==null&&(h.matrix.fromArray(u.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=u.radius),h.visible=u!==null}let d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],p=d.position.distanceTo(f.position),m=.02,g=.005;c.inputState.pinching&&p>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new li;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},vd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function Jl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var at=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,pt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=pt.workingColorSpace){if(e=$c(e,1),t=ot(t,0,1),n=ot(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Jl(a,r,e+1/3),this.g=Jl(a,r,e),this.b=Jl(a,r,e-1/3)}return pt.colorSpaceToWorking(this,s),this}setStyle(e,t=rn){function n(r){r!==void 0&&parseFloat(r)<1&&Ze("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ze("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ze("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){let n=vd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ze("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ci(e.r),this.g=ci(e.g),this.b=ci(e.b),this}copyLinearToSRGB(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return pt.workingToColorSpace(Qt.copy(this),e),Math.round(ot(Qt.r*255,0,255))*65536+Math.round(ot(Qt.g*255,0,255))*256+Math.round(ot(Qt.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=pt.workingColorSpace){pt.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=pt.workingColorSpace){return pt.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=rn){pt.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xi),this.setHSL(xi.h+e,xi.s+t,xi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xi),e.getHSL(Ta);let n=lr(xi.h,Ta.h,t),s=lr(xi.s,Ta.s,t),r=lr(xi.l,Ta.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new at;at.NAMES=vd;var pr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new at(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ln=new Z,ni=new Z,Kl=new Z,ii=new Z,hs=new Z,us=new Z,du=new Z,$l=new Z,jl=new Z,Ql=new Z,ec=new Rt,tc=new Rt,nc=new Rt,Si=class i{constructor(e=new Z,t=new Z,n=new Z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ln.subVectors(e,t),s.cross(Ln);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ln.subVectors(s,t),ni.subVectors(n,t),Kl.subVectors(e,t);let a=Ln.dot(Ln),o=Ln.dot(ni),l=Ln.dot(Kl),c=ni.dot(ni),d=ni.dot(Kl),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let p=1/f,m=(c*l-o*d)*p,g=(a*d-o*l)*p;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,ii.x),l.addScaledVector(a,ii.y),l.addScaledVector(o,ii.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ec.setScalar(0),tc.setScalar(0),nc.setScalar(0),ec.fromBufferAttribute(e,t),tc.fromBufferAttribute(e,n),nc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ec,r.x),a.addScaledVector(tc,r.y),a.addScaledVector(nc,r.z),a}static isFrontFacing(e,t,n,s){return Ln.subVectors(n,t),ni.subVectors(e,t),Ln.cross(ni).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ln.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),Ln.cross(ni).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;hs.subVectors(s,n),us.subVectors(r,n),$l.subVectors(e,n);let l=hs.dot($l),c=us.dot($l);if(l<=0&&c<=0)return t.copy(n);jl.subVectors(e,s);let d=hs.dot(jl),f=us.dot(jl);if(d>=0&&f<=d)return t.copy(s);let p=l*f-d*c;if(p<=0&&l>=0&&d<=0&&l-d>0)return a=l/(l-d),t.copy(n).addScaledVector(hs,a);Ql.subVectors(e,r);let m=hs.dot(Ql),g=us.dot(Ql);if(g>=0&&m<=g)return t.copy(r);let y=m*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(us,o);let u=d*g-m*f;if(u<=0&&f-d>=0&&m-g>=0)return du.subVectors(r,s),o=(f-d)/(f-d+(m-g)),t.copy(s).addScaledVector(du,o);let h=1/(u+y+p);return a=y*h,o=p*h,t.copy(n).addScaledVector(hs,a).addScaledVector(us,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wn=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Dn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Dn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Dn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Dn):Dn.fromBufferAttribute(r,a),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ea.copy(n.boundingBox)),Ea.applyMatrix4(e.matrixWorld),this.union(Ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(tr),Ca.subVectors(this.max,tr),ds.subVectors(e.a,tr),fs.subVectors(e.b,tr),ps.subVectors(e.c,tr),yi.subVectors(fs,ds),vi.subVectors(ps,fs),Gi.subVectors(ds,ps);let t=[0,-yi.z,yi.y,0,-vi.z,vi.y,0,-Gi.z,Gi.y,yi.z,0,-yi.x,vi.z,0,-vi.x,Gi.z,0,-Gi.x,-yi.y,yi.x,0,-vi.y,vi.x,0,-Gi.y,Gi.x,0];return!ic(t,ds,fs,ps,Ca)||(t=[1,0,0,0,1,0,0,0,1],!ic(t,ds,fs,ps,Ca))?!1:(Ra.crossVectors(yi,vi),t=[Ra.x,Ra.y,Ra.z],ic(t,ds,fs,ps,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},si=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Dn=new Z,Ea=new Wn,ds=new Z,fs=new Z,ps=new Z,yi=new Z,vi=new Z,Gi=new Z,tr=new Z,Ca=new Z,Ra=new Z,Vi=new Z;function ic(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vi.fromArray(i,r);let o=s.x*Math.abs(Vi.x)+s.y*Math.abs(Vi.y)+s.z*Math.abs(Vi.z),l=e.dot(Vi),c=t.dot(Vi),d=n.dot(Vi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var oi=vp();function vp(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Mp(i){Math.abs(i)>65504&&Ze("DataUtils.toHalfFloat(): Value out of range."),i=ot(i,-65504,65504),oi.floatView[0]=i;let e=oi.uint32View[0],t=e>>23&511;return oi.baseTable[t]+((e&8388607)>>oi.shiftTable[t])}function Sp(i){let e=i>>10;return oi.uint32View[0]=oi.mantissaTable[oi.offsetTable[e]+(i&1023)]+oi.exponentTable[e],oi.floatView[0]}var bi=class{static toHalfFloat(e){return Mp(e)}static fromHalfFloat(e){return Sp(e)}},Bt=new Z,Pa=new Fe,bp=0,Sn=class extends Nn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:bp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=fd,this.updateRanges=[],this.gpuType=cn,this.version=0,this._normalizationScale=e!==void 0?Qc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Pa.fromBufferAttribute(this,t),Pa.applyMatrix3(e),this.setXY(t,Pa.x,Pa.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix3(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyMatrix4(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.applyNormalMatrix(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bt.fromBufferAttribute(this,t),Bt.transformDirection(e),this.setXYZ(t,Bt.x,Bt.y,Bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):xd(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yd(e,this.array)}};var gr=class extends Sn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _r=class extends Sn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Tt=class extends Sn{constructor(e,t,n){super(new Float32Array(e),t,n)}},wp=new Wn,nr=new Z,sc=new Z,wi=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):wp.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;nr.subVectors(e,this.center);let t=nr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(nr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(nr.copy(e.center).add(sc)),this.expandByPoint(nr.copy(e.center).sub(sc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Ap=0,Tn=new _t,rc=new Jt,ms=new Z,Mn=new Wn,ir=new Wn,Yt=new Z,fn=class i extends Nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ap++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yf(e)?_r:gr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new it().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,n){return Tn.makeTranslation(e,t,n),this.applyMatrix4(Tn),this}scale(e,t,n){return Tn.makeScale(e,t,n),this.applyMatrix4(Tn),this}lookAt(e){return rc.lookAt(e),rc.updateMatrix(),this.applyMatrix4(rc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Tt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ze("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Mn.setFromBufferAttribute(r),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let n=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(Yt.addVectors(Mn.min,ir.min),Mn.expandByPoint(Yt),Yt.addVectors(Mn.max,ir.max),Mn.expandByPoint(Yt)):(Mn.expandByPoint(ir.min),Mn.expandByPoint(ir.max))}Mn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Yt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Yt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Yt.fromBufferAttribute(o,c),l&&(ms.fromBufferAttribute(e,c),Yt.add(ms)),s=Math.max(s,n.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Sn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)o[P]=new Z,l[P]=new Z;let d=new Z,f=new Z,p=new Z,m=new Fe,g=new Fe,y=new Fe,u=new Z,h=new Z;function x(P,R,I){c[P]=c[R]=c[I]=1,d.fromBufferAttribute(n,P),f.fromBufferAttribute(n,R),p.fromBufferAttribute(n,I),m.fromBufferAttribute(r,P),g.fromBufferAttribute(r,R),y.fromBufferAttribute(r,I),f.sub(d),p.sub(d),g.sub(m),y.sub(m);let F=1/(g.x*y.y-y.x*g.y);isFinite(F)&&(u.copy(f).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(F),h.copy(p).multiplyScalar(g.x).addScaledVector(f,-y.x).multiplyScalar(F),o[P].add(u),o[R].add(u),o[I].add(u),l[P].add(h),l[R].add(h),l[I].add(h))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let P=0,R=b.length;P<R;++P){let I=b[P],F=I.start,C=I.count;for(let E=F,D=F+C;E<D;E+=3)x(e.getX(E+0),e.getX(E+1),e.getX(E+2))}let M=new Z,T=new Z,S=new Z,_=new Z;function v(P){S.fromBufferAttribute(s,P),_.copy(S);let R=o[P];M.copy(R),M.sub(S.multiplyScalar(S.dot(R))).normalize(),T.crossVectors(_,R);let F=T.dot(l[P])<0?-1:1;a.setXYZW(P,M.x,M.y,M.z,F)}for(let P=0,R=n.count;P<R;++P)c[P]&&v(P);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Sn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);let s=new Z,r=new Z,a=new Z,o=new Z,l=new Z,c=new Z,d=new Z,f=new Z;if(e)for(let p=0,m=e.count;p<m;p+=3){let g=e.getX(p+0),y=e.getX(p+1),u=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,u),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,u),o.add(d),l.add(d),c.add(d),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(u,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,f=o.normalized,p=new c.constructor(l.length*d),m=0,g=0;for(let y=0,u=l.length;y<u;y++){o.isInterleavedBufferAttribute?m=l[y]*o.data.stride+o.offset:m=l[y]*d;for(let h=0;h<d;h++)p[g++]=c[m++]}return new Sn(p,d,f)}if(this.index===null)return Ze("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){let p=c[d],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let f=0,p=c.length;f<p;f++){let m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],f=r[c];for(let p=0,m=f.length;p<m;p++)d.push(f[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var ac=new Z,Tp=new Z,Ep=new it,an=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=ac.subVectors(n,t).cross(Tp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(ac),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ep.getNormalMatrix(e),s=this.coplanarPoint(ac).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Cp=0,Ai=class extends Nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cp++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Vs,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pc,this.blendDst=Ic,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new at(0,0,0),this.blendAlpha=0,this.depthFunc=ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=od,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Za,this.stencilZFail=Za,this.stencilZPass=Za,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ze(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ze(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new at().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new an().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Fe().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Fe().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var ri=new Z,oc=new Z,Ia=new Z,La=new Z,Yi=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ri.copy(this.origin).addScaledVector(this.direction,t),ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){oc.copy(e).add(t).multiplyScalar(.5),Ia.copy(t).sub(e).normalize(),La.copy(this.origin).sub(oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Ia),o=La.dot(this.direction),l=-La.dot(Ia),c=La.lengthSq(),d=Math.abs(1-a*a),f,p,m,g;if(d>0)if(f=a*l-o,p=a*o-l,g=r*d,f>=0)if(p>=-g)if(p<=g){let y=1/d;f*=y,p*=y,m=f*(f+a*p+2*o)+p*(a*f+p+2*l)+c}else p=r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p=-r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;else p<=-g?(f=Math.max(0,-(-a*r+o)),p=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c):p<=g?(f=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(f=Math.max(0,-(a*r+o)),p=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+p*(p+2*l)+c);else p=a>0?-r:r,f=Math.max(0,-(a*p+o)),m=-f*f+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(oc).addScaledVector(Ia,p),m}intersectSphere(e,t){if(e.radius<0)return null;ri.subVectors(e.center,this.origin);let n=ri.dot(this.direction),s=ri.dot(ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-p.z)*f,l=(e.max.z-p.z)*f):(o=(e.max.z-p.z)*f,l=(e.min.z-p.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,f=e.x-a.x,p=e.y-a.y,m=e.z-a.z,g=t.x-a.x,y=t.y-a.y,u=t.z-a.z,h=n.x-a.x,x=n.y-a.y,b=n.z-a.z,M=Math.abs(l),T=Math.abs(c),S=Math.abs(d),_,v,P,R,I,F,C,E,D,U,O,V;if(M>=T&&M>=S?(P=l,F=f,D=g,V=h,l>=0?(_=c,v=d,R=p,I=m,C=y,E=u,U=x,O=b):(_=d,v=c,R=m,I=p,C=u,E=y,U=b,O=x)):T>=S?(P=c,F=p,D=y,V=x,c>=0?(_=d,v=l,R=m,I=f,C=u,E=g,U=b,O=h):(_=l,v=d,R=f,I=m,C=g,E=u,U=h,O=b)):(P=d,F=m,D=u,V=b,d>=0?(_=l,v=c,R=f,I=p,C=g,E=y,U=h,O=x):(_=c,v=l,R=p,I=f,C=y,E=g,U=x,O=h)),P===0)return null;let B=_/P,G=v/P,X=1/P,te=R-B*F,ae=I-G*F,Y=C-B*D,z=E-G*D,W=U-B*V,K=O-G*V,J=W*z-K*Y,se=te*K-ae*W,ge=Y*ae-z*te;if(s){if(J<0||se<0||ge<0)return null}else if((J<0||se<0||ge<0)&&(J>0||se>0||ge>0))return null;let fe=J+se+ge;if(fe===0)return null;let Pe=X*(J*F+se*D+ge*V);return(fe>0?Pe<0:Pe>0)?null:this.at(Pe/fe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ds=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new at(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fu=new _t,Hi=new Yi,Da=new wi,pu=new Z,Na=new Z,Ua=new Z,Fa=new Z,lc=new Z,Oa=new Z,mu=new Z,Ba=new Z,pn=class extends Jt{constructor(e=new fn,t=new Ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Oa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],f=r[l];d!==0&&(lc.fromBufferAttribute(f,e),a?Oa.addScaledVector(lc,d):Oa.addScaledVector(lc.sub(t),d))}t.add(Oa)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Da.copy(n.boundingSphere),Da.applyMatrix4(r),Hi.copy(e.ray).recast(e.near),!(Da.containsPoint(Hi.origin)===!1&&(Hi.intersectSphere(Da,pu)===null||Hi.origin.distanceToSquared(pu)>(e.far-e.near)**2))&&(fu.copy(r).invert(),Hi.copy(e.ray).applyMatrix4(fu),!(n.boundingBox!==null&&Hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=p.length;g<y;g++){let u=p[g],h=a[u.materialIndex],x=Math.max(u.start,m.start),b=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let M=x,T=b;M<T;M+=3){let S=o.getX(M),_=o.getX(M+1),v=o.getX(M+2);s=za(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(o.count,m.start+m.count);for(let u=g,h=y;u<h;u+=3){let x=o.getX(u),b=o.getX(u+1),M=o.getX(u+2);s=za(this,a,e,n,c,d,f,x,b,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=p.length;g<y;g++){let u=p[g],h=a[u.materialIndex],x=Math.max(u.start,m.start),b=Math.min(l.count,Math.min(u.start+u.count,m.start+m.count));for(let M=x,T=b;M<T;M+=3){let S=M,_=M+1,v=M+2;s=za(this,h,e,n,c,d,f,S,_,v),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=u.materialIndex,t.push(s))}}else{let g=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let u=g,h=y;u<h;u+=3){let x=u,b=u+1,M=u+2;s=za(this,a,e,n,c,d,f,x,b,M),s&&(s.faceIndex=Math.floor(u/3),t.push(s))}}}};function Rp(i,e,t,n,s,r,a,o){let l;if(e.side===ln?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ni,o),l===null)return null;Ba.copy(o),Ba.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ba);return c<t.near||c>t.far?null:{distance:c,point:Ba.clone(),object:i}}function za(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Na),i.getVertexPosition(l,Ua),i.getVertexPosition(c,Fa);let d=Rp(i,e,t,n,Na,Ua,Fa,mu);if(d){let f=new Z;Si.getBarycoord(mu,Na,Ua,Fa,f),s&&(d.uv=Si.getInterpolatedAttribute(s,o,l,c,f,new Fe)),r&&(d.uv1=Si.getInterpolatedAttribute(r,o,l,c,f,new Fe)),a&&(d.normal=Si.getInterpolatedAttribute(a,o,l,c,f,new Z),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new Z,materialIndex:0};Si.getNormal(Na,Ua,Fa,p.normal),d.face=p,d.barycoord=f}return d}var Zi=class extends tn{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Zt,d=Zt,f,p){super(null,a,o,l,c,d,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var xr=class extends Sn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},gs=new _t,gu=new _t,ka=[],_u=new Wn,Pp=new _t,sr=new pn,rr=new wi,yr=class extends pn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new xr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pp)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),_u.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(_u)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new wi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,gs),rr.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(rr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(sr.geometry=this.geometry,sr.material=this.material,sr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rr.copy(this.boundingSphere),rr.applyMatrix4(n),e.ray.intersectsSphere(rr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,gs),gu.multiplyMatrices(n,gs),sr.matrixWorld=gu,sr.raycast(e,ka);for(let a=0,o=ka.length;a<o;a++){let l=ka[a];l.instanceId=r,l.object=this,t.push(l)}ka.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new xr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zi(new Float32Array(s*this.count),s,this.count,Oo,cn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Wi=new wi,Ip=new Fe(.5,.5),Ga=new Z,Ti=class{constructor(e=new an,t=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Cn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],f=r[5],p=r[6],m=r[7],g=r[8],y=r[9],u=r[10],h=r[11],x=r[12],b=r[13],M=r[14],T=r[15];if(s[0].setComponents(c-a,m-d,h-g,T-x).normalize(),s[1].setComponents(c+a,m+d,h+g,T+x).normalize(),s[2].setComponents(c+o,m+f,h+y,T+b).normalize(),s[3].setComponents(c-o,m-f,h-y,T-b).normalize(),n)s[4].setComponents(l,p,u,M).normalize(),s[5].setComponents(c-l,m-p,h-u,T-M).normalize();else if(s[4].setComponents(c-l,m-p,h-u,T-M).normalize(),t===Cn)s[5].setComponents(c+l,m+p,h+u,T+M).normalize();else if(t===Ts)s[5].setComponents(l,p,u,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wi)}intersectsSprite(e){Wi.center.set(0,0,0);let t=Ip.distanceTo(e.center);return Wi.radius=.7071067811865476+t,Wi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ga.x=s.normal.x>0?e.max.x:e.min.x,Ga.y=s.normal.y>0?e.max.y:e.min.y,Ga.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},xu=new _t,oo=class i{constructor(){this.coordinateSystem=Cn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];xu.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ti),n[s].setFromProjectionMatrix(xu,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ti),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var vr=class extends tn{constructor(e=[],t=Qi,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Mr=class extends tn{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ui=class extends tn{constructor(e,t,n=Fn,s,r,a,o=Zt,l=Zt,c,d=hi,f=1){if(d!==hi&&d!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:f};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ps(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Sr=class extends ui{constructor(e,t=Fn,n=Qi,s,r,a=Zt,o=Zt,l,c=hi){let d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},br=class extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ei=class i extends fn{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],f=[],p=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2));function g(y,u,h,x,b,M,T,S,_,v,P){let R=M/_,I=T/v,F=M/2,C=T/2,E=S/2,D=_+1,U=v+1,O=0,V=0,B=new Z;for(let G=0;G<U;G++){let X=G*I-C;for(let te=0;te<D;te++){let ae=te*R-F;B[y]=ae*x,B[u]=X*b,B[h]=E,c.push(B.x,B.y,B.z),B[y]=0,B[u]=0,B[h]=S>0?1:-1,d.push(B.x,B.y,B.z),f.push(te/_),f.push(1-G/v),O+=1}}for(let G=0;G<v;G++)for(let X=0;X<_;X++){let te=p+X+D*G,ae=p+X+D*(G+1),Y=p+(X+1)+D*(G+1),z=p+(X+1)+D*G;l.push(te,ae,z),l.push(ae,Y,z),V+=6}o.addGroup(m,V,P),m+=V,p+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var wr=class i extends fn{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let d=[],f=[],p=[],m=[],g=0,y=[],u=n/2,h=0;x(),a===!1&&(e>0&&b(!0),t>0&&b(!1)),this.setIndex(d),this.setAttribute("position",new Tt(f,3)),this.setAttribute("normal",new Tt(p,3)),this.setAttribute("uv",new Tt(m,2));function x(){let M=new Z,T=new Z,S=0,_=(t-e)/n;for(let v=0;v<=r;v++){let P=[],R=v/r,I=R*(t-e)+e;for(let F=0;F<=s;F++){let C=F/s,E=C*l+o,D=Math.sin(E),U=Math.cos(E);T.x=I*D,T.y=-R*n+u,T.z=I*U,f.push(T.x,T.y,T.z),M.set(D,_,U).normalize(),p.push(M.x,M.y,M.z),m.push(C,1-R),P.push(g++)}y.push(P)}for(let v=0;v<s;v++)for(let P=0;P<r;P++){let R=y[P][v],I=y[P+1][v],F=y[P+1][v+1],C=y[P][v+1];(e>0||P!==0)&&(d.push(R,I,C),S+=3),(t>0||P!==r-1)&&(d.push(I,F,C),S+=3)}c.addGroup(h,S,0),h+=S}function b(M){let T=g,S=new Fe,_=new Z,v=0,P=M===!0?e:t,R=M===!0?1:-1;for(let F=1;F<=s;F++)f.push(0,u*R,0),p.push(0,R,0),m.push(.5,.5),g++;let I=g;for(let F=0;F<=s;F++){let E=F/s*l+o,D=Math.cos(E),U=Math.sin(E);_.x=P*U,_.y=u*R,_.z=P*D,f.push(_.x,_.y,_.z),p.push(0,R,0),S.x=D*.5+.5,S.y=U*.5*R+.5,m.push(S.x,S.y),g++}for(let F=0;F<s;F++){let C=T+F,E=I+F;M===!0?d.push(E,E+1,C):d.push(E+1,E,C),v+=3}c.addGroup(h,v,M===!0?1:2),h+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ze("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,m=(a-d)/p;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Fe:new Z);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new Z,s=[],r=[],a=[],o=new Z,l=new _t;for(let m=0;m<=e;m++){let g=m/e;s[m]=this.getTangentAt(g,new Z)}r[0]=new Z,a[0]=new Z;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ot(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos(ot(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ns=class extends wn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Fe){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=l-this.aX,m=c-this.aY;l=p*d-m*f+this.aX,c=p*f+m*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},lo=class extends Ns{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function th(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,f){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,m=(o-a)/d-(l-a)/(d+f)+(l-o)/f;p*=d,m*=d,s(a,o,p,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var yu=new Z,vu=new Z,cc=new th,hc=new th,uc=new th,co=class extends wn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new Z){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(vu.subVectors(s[0],s[1]).add(s[0]),c=vu);let f=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(yu.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=yu),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(f),m),y=Math.pow(f.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(d),m);y<1e-4&&(y=1),g<1e-4&&(g=y),u<1e-4&&(u=y),cc.initNonuniformCatmullRom(c.x,f.x,p.x,d.x,g,y,u),hc.initNonuniformCatmullRom(c.y,f.y,p.y,d.y,g,y,u),uc.initNonuniformCatmullRom(c.z,f.z,p.z,d.z,g,y,u)}else this.curveType==="catmullrom"&&(cc.initCatmullRom(c.x,f.x,p.x,d.x,this.tension),hc.initCatmullRom(c.y,f.y,p.y,d.y,this.tension),uc.initCatmullRom(c.z,f.z,p.z,d.z,this.tension));return n.set(cc.calc(l),hc.calc(l),uc.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Z().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Mu(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Lp(i,e){let t=1-i;return t*t*e}function Dp(i,e){return 2*(1-i)*i*e}function Np(i,e){return i*i*e}function cr(i,e,t,n){return Lp(i,e)+Dp(i,t)+Np(i,n)}function Up(i,e){let t=1-i;return t*t*t*e}function Fp(i,e){let t=1-i;return 3*t*t*i*e}function Op(i,e){return 3*(1-i)*i*i*e}function Bp(i,e){return i*i*i*e}function hr(i,e,t,n,s){return Up(i,e)+Fp(i,t)+Op(i,n)+Bp(i,s)}var Ar=class extends wn{constructor(e=new Fe,t=new Fe,n=new Fe,s=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ho=class extends wn{constructor(e=new Z,t=new Z,n=new Z,s=new Z){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(hr(e,s.x,r.x,a.x,o.x),hr(e,s.y,r.y,a.y,o.y),hr(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Tr=class extends wn{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},uo=class extends wn{constructor(e=new Z,t=new Z){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new Z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Er=class extends wn{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fo=class extends wn{constructor(e=new Z,t=new Z,n=new Z){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Z){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(cr(e,s.x,r.x,a.x),cr(e,s.y,r.y,a.y),cr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cr=class extends wn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Mu(o,l.x,c.x,d.x,f.x),Mu(o,l.y,c.y,d.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Fe().fromArray(s))}return this}},Su=Object.freeze({__proto__:null,ArcCurve:lo,CatmullRomCurve3:co,CubicBezierCurve:Ar,CubicBezierCurve3:ho,EllipseCurve:Ns,LineCurve:Tr,LineCurve3:uo,QuadraticBezierCurve:Er,QuadraticBezierCurve3:fo,SplineCurve:Cr}),po=class extends wn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Su[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Su[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Rr=class extends po{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Tr(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Er(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ar(this.currentPoint.clone(),new Fe(e,t),new Fe(n,s),new Fe(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Cr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ns(e,t,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class extends Rr{constructor(e){super(e),this.uuid=ts(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Rr().fromJSON(s))}return this}};function zp(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Md(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Wp(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,f=l;for(let p=t;p<s;p+=t){let m=i[p],g=i[p+1];m<o&&(o=m),g<l&&(l=g),m>d&&(d=m),g>f&&(f=g)}c=Math.max(d-o,f-l),c=c!==0?32767/c:0}return Pr(r,a,t,o,l,c,0),a}function Md(i,e,t,n,s){let r;if(s===tm(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bu(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bu(a/n|0,i[a],i[a+1],r);return r&&Fs(r,r.next)&&(Lr(r),r=r.next),r}function Ji(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Fs(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Lr(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pr(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Jp(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Gp(i,n,s,r):kp(i)){e.push(l.i,i.i,c.i),Lr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Vp(Ji(i),e),Pr(i,e,t,n,s,r,2)):a===2&&Hp(i,e,t,n,s,r):Pr(Ji(i),e,t,n,s,r,1);break}}}function kp(i){let e=i.prev,t=i,n=i.next;if(Dt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),f=Math.min(o,l,c),p=Math.max(s,r,a),m=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=d&&g.x<=p&&g.y>=f&&g.y<=m&&ar(s,o,r,l,a,c,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Gp(i,e,t,n){let s=i.prev,r=i,a=i.next;if(Dt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,f=r.y,p=a.y,m=Math.min(o,l,c),g=Math.min(d,f,p),y=Math.max(o,l,c),u=Math.max(d,f,p),h=_c(m,g,e,t,n),x=_c(y,u,e,t,n),b=i.prevZ,M=i.nextZ;for(;b&&b.z>=h&&M&&M.z<=x;){if(b.x>=m&&b.x<=y&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&ar(o,d,l,f,c,p,b.x,b.y)&&Dt(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=m&&M.x<=y&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&ar(o,d,l,f,c,p,M.x,M.y)&&Dt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=h;){if(b.x>=m&&b.x<=y&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&ar(o,d,l,f,c,p,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=x;){if(M.x>=m&&M.x<=y&&M.y>=g&&M.y<=u&&M!==s&&M!==a&&ar(o,d,l,f,c,p,M.x,M.y)&&Dt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vp(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Fs(n,s)&&bd(n,t,t.next,s)&&Ir(n,s)&&Ir(s,n)&&(e.push(n.i,t.i,s.i),Lr(t),Lr(t.next),t=i=s),t=t.next}while(t!==i);return Ji(t)}function Hp(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&jp(a,o)){let l=wd(a,o);a=Ji(a,a.next),l=Ji(l,l.next),Pr(a,e,t,n,s,r,0),Pr(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Wp(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Md(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push($p(c))}s.sort(Xp);for(let r=0;r<s.length;r++)t=qp(s[r],t);return t}function Xp(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function qp(i,e){let t=Yp(i,e);if(!t)return e;let n=wd(t,i);return Ji(n,n.next),Ji(t,t.next)}function Yp(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Fs(i,t))return t;do{if(Fs(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,a=t.x<t.next.x?t:t.next,f===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&Sd(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);Ir(t,i)&&(f<d||f===d&&(t.x>a.x||t.x===a.x&&Zp(a,t)))&&(a=t,d=f)}t=t.next}while(t!==o);return a}function Zp(i,e){return Dt(i.prev,i,e.prev)<0&&Dt(e.next,i,i.next)<0}function Jp(i,e,t,n){let s=i;do s.z===0&&(s.z=_c(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Kp(s)}function Kp(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function _c(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function $p(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Sd(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ar(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&Sd(i,e,t,n,s,r,a,o)}function jp(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Qp(i,e)&&(Ir(i,e)&&Ir(e,i)&&em(i,e)&&(Dt(i.prev,i,e.prev)||Dt(i,e.prev,e))||Fs(i,e)&&Dt(i.prev,i,i.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Fs(i,e){return i.x===e.x&&i.y===e.y}function bd(i,e,t,n){let s=Ha(Dt(i,e,t)),r=Ha(Dt(i,e,n)),a=Ha(Dt(t,n,i)),o=Ha(Dt(t,n,e));return!!(s!==r&&a!==o||s===0&&Va(i,t,e)||r===0&&Va(i,n,e)||a===0&&Va(t,i,n)||o===0&&Va(t,e,n))}function Va(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Ha(i){return i>0?1:i<0?-1:0}function Qp(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&bd(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ir(i,e){return Dt(i.prev,i,i.next)<0?Dt(i,e,i.next)>=0&&Dt(i,i.prev,e)>=0:Dt(i,e,i.prev)<0||Dt(i,i.next,e)<0}function em(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wd(i,e){let t=xc(i.i,i.x,i.y),n=xc(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bu(i,e,t,n){let s=xc(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Lr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function xc(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function tm(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var yc=class{static triangulate(e,t,n=2){return zp(e,t,n)}},Ss=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];wu(e),Au(n,e);let a=e.length;t.forEach(wu);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Au(n,t[l]);let o=yc.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function wu(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Au(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var Ki=class i extends fn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,p=t/l,m=[],g=[],y=[],u=[];for(let h=0;h<d;h++){let x=h*p-a;for(let b=0;b<c;b++){let M=b*f-r;g.push(M,-x,0),y.push(0,0,1),u.push(b/o),u.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<o;x++){let b=x+c*h,M=x+c*(h+1),T=x+1+c*(h+1),S=x+1+c*h;m.push(b,M,S),m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Dr=class i extends fn{constructor(e=new Us([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Tt(s,3)),this.setAttribute("normal",new Tt(r,3)),this.setAttribute("uv",new Tt(a,2));function c(d){let f=s.length/3,p=d.extractPoints(t),m=p.shape,g=p.holes;Ss.isClockWise(m)===!1&&(m=m.reverse());for(let u=0,h=g.length;u<h;u++){let x=g[u];Ss.isClockWise(x)===!0&&(g[u]=x.reverse())}let y=Ss.triangulateShape(m,g);for(let u=0,h=g.length;u<h;u++){let x=g[u];m=m.concat(x)}for(let u=0,h=m.length;u<h;u++){let x=m[u];s.push(x.x,x.y,0),r.push(0,0,1),a.push(x.x,x.y)}for(let u=0,h=y.length;u<h;u++){let x=y[u],b=x[0]+f,M=x[1]+f,T=x[2]+f;n.push(b,M,T),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return nm(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function nm(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Nr=class i extends fn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],f=new Z,p=new Z,m=[],g=[],y=[],u=[];for(let h=0;h<=n;h++){let x=[],b=h/n,M=a+b*o,T=e*Math.cos(M),S=Math.sqrt(e*e-T*T),_=0;h===0&&a===0?_=.5/t:h===n&&l===Math.PI&&(_=-.5/t);for(let v=0;v<=t;v++){let P=v/t,R=s+P*r;f.x=-S*Math.cos(R),f.y=T,f.z=S*Math.sin(R),g.push(f.x,f.y,f.z),p.copy(f).normalize(),y.push(p.x,p.y,p.z),u.push(P+_,1-b),x.push(c++)}d.push(x)}for(let h=0;h<n;h++)for(let x=0;x<t;x++){let b=d[h][x+1],M=d[h][x],T=d[h+1][x],S=d[h+1][x+1];(h!==0||a>0)&&m.push(b,M,S),(h!==n-1||l<Math.PI)&&m.push(M,T,S)}this.setIndex(m),this.setAttribute("position",new Tt(g,3)),this.setAttribute("normal",new Tt(y,3)),this.setAttribute("uv",new Tt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ur=class i extends fn{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],f=[],p=new Z,m=new Z,g=new Z;for(let y=0;y<=n;y++){let u=a+y/n*o;for(let h=0;h<=s;h++){let x=h/s*r;m.x=(e+t*Math.cos(u))*Math.cos(x),m.y=(e+t*Math.cos(u))*Math.sin(x),m.z=t*Math.sin(u),c.push(m.x,m.y,m.z),p.x=e*Math.cos(x),p.y=e*Math.sin(x),g.subVectors(m,p).normalize(),d.push(g.x,g.y,g.z),f.push(h/s),f.push(y/n)}}for(let y=1;y<=n;y++)for(let u=1;u<=s;u++){let h=(s+1)*y+u-1,x=(s+1)*(y-1)+u-1,b=(s+1)*(y-1)+u,M=(s+1)*y+u;l.push(h,x,M),l.push(x,b,M)}this.setIndex(l),this.setAttribute("position",new Tt(c,3)),this.setAttribute("normal",new Tt(d,3)),this.setAttribute("uv",new Tt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Tu(s))s.isRenderTargetTexture?(Ze("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Tu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Tu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function im(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function nh(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:pt.workingColorSpace}var Ad={clone:ns,merge:nn},sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=rm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new at().setHex(s.value);break;case"v2":this.uniforms[n].value=new Fe().fromArray(s.value);break;case"v3":this.uniforms[n].value=new Z().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new it().fromArray(s.value);break;case"m4":this.uniforms[n].value=new _t().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},mo=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Os=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new at(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new at(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_l,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Fr=class extends Os{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new at(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new at(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new at(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Xi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var go=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},_o=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function _s(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},xo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pc,endingEnd:pc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case mc:r=e,o=2*t-n;break;case gc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case mc:a=e,l=2*n-t;break;case gc:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,m=this._weightNext,g=(n-t)/(s-t),y=g*g,u=y*g,h=-p*u+2*p*y-p*g,x=(1+p)*u+(-1.5-2*p)*y+(-.5+p)*g+1,b=(-1-m)*u+(1.5+m)*y+.5*g,M=m*u-m*y;for(let T=0;T!==o;++T)r[T]=h*a[d+T]+x*a[c+T]+b*a[l+T]+M*a[f+T];return r}},yo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),f=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*f+a[l+p]*d;return r}},vo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Mo=class extends Ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,f=this.outTangents;if(!d||!f){let g=(n-t)/(s-t),y=1-g;for(let u=0;u!==o;++u)r[u]=a[c+u]*y+a[l+u]*g;return r}let p=o*2,m=e-1;for(let g=0;g!==o;++g){let y=a[c+g],u=a[l+g],h=m*p+g*2,x=f[h],b=f[h+1],M=e*p+g*2,T=d[M],S=d[M+1],_=om(n,t,x,T,s);r[g]=Td(_,y,b,S,u)}return r}};function Td(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function am(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function om(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Td(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=am(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var An=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=_s(t,this.TimeBufferType),this.values=_s(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:_s(e.times,Array),values:_s(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Wa(e.settings)&&(n.settings={inTangents:_s(e.settings.inTangents,Array),outTangents:_s(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Mo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ur:t=this.InterpolantFactoryMethodDiscrete;break;case io:t=this.InterpolantFactoryMethodLinear;break;case Ya:t=this.InterpolantFactoryMethodSmooth;break;case fc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ze("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ur;case this.InterpolantFactoryMethodLinear:return io;case this.InterpolantFactoryMethodSmooth:return Ya;case this.InterpolantFactoryMethodBezier:return fc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Wa(this.settings)&&(Eu(this.settings.inTangents,e),Eu(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Wa(this.settings)&&(Cu(this.settings.inTangents,e),Cu(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ke("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ke("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ke("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ke("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Zf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ke("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ya,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,p=f-n,m=f+n;for(let g=0;g!==n;++g){let y=t[f+g];if(y!==t[p+g]||y!==t[m+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,p=a*n;for(let m=0;m!==n;++m)t[p+m]=t[f+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Eu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cu(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}An.prototype.ValueTypeName="";An.prototype.TimeBufferType=Float32Array;An.prototype.ValueBufferType=Float32Array;An.prototype.DefaultInterpolation=io;var Ri=class extends An{constructor(e,t,n){super(e,t,n)}};Ri.prototype.ValueTypeName="bool";Ri.prototype.ValueBufferType=Array;Ri.prototype.DefaultInterpolation=ur;Ri.prototype.InterpolantFactoryMethodLinear=void 0;Ri.prototype.InterpolantFactoryMethodSmooth=void 0;var So=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};So.prototype.ValueTypeName="color";var bo=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};bo.prototype.ValueTypeName="number";var wo=class extends Ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)on.slerpFlat(r,0,a,c-o,a,c,l);return r}},Or=class extends An{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new wo(this.times,this.values,this.getValueSize(),e)}};Or.prototype.ValueTypeName="quaternion";Or.prototype.InterpolantFactoryMethodSmooth=void 0;var Pi=class extends An{constructor(e,t,n){super(e,t,n)}};Pi.prototype.ValueTypeName="string";Pi.prototype.ValueBufferType=Array;Pi.prototype.DefaultInterpolation=ur;Pi.prototype.InterpolantFactoryMethodLinear=void 0;Pi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ao=class extends An{constructor(e,t,n,s){super(e,t,n,s)}};Ao.prototype.ValueTypeName="vector";var bs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ru(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ru(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ru(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var To=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){let f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,p=c.length;f<p;f+=2){let m=c[f],g=c[f+1];if(m.global&&(m.lastIndex=0),m.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ed=new To,Ii=class{constructor(e){this.manager=e!==void 0?e:Ed,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Ii.DEFAULT_MATERIAL_NAME="__DEFAULT";var ai={},vc=class extends Error{constructor(e,t){super(e),this.response=t}},Eo=class extends Ii{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=bs.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(ai[e]!==void 0){ai[e].push({onLoad:t,onProgress:n,onError:s});return}ai[e]=[],ai[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ze("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=ai[e],f=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=p?parseInt(p):0,g=m!==0,y=0,u=new ReadableStream({start(h){x();function x(){f.read().then(({done:b,value:M})=>{if(b)h.close();else{y+=M.byteLength;let T=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:m});for(let S=0,_=d.length;S<_;S++){let v=d[S];v.onProgress&&v.onProgress(T)}h.enqueue(M),x()}},b=>{h.error(b)})}}});return new Response(u)}else throw new vc(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),p=f&&f[1]?f[1].toLowerCase():void 0,m=new TextDecoder(p);return c.arrayBuffer().then(g=>m.decode(g))}}}).then(c=>{bs.add(`file:${e}`,c);let d=ai[e];delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onLoad&&m.onLoad(c)}}).catch(c=>{let d=ai[e];if(d===void 0)throw this.manager.itemError(e),c;delete ai[e];for(let f=0,p=d.length;f<p;f++){let m=d[f];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var xs=new WeakMap,Co=class extends Ii{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=bs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=xs.get(a);f===void 0&&(f=[],xs.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=Es("img");function l(){d(),t&&t(this);let f=xs.get(this)||[];for(let p=0;p<f.length;p++){let m=f[p];m.onLoad&&m.onLoad(this)}xs.delete(this),r.manager.itemEnd(e)}function c(f){d(),s&&s(f),bs.remove(`image:${e}`);let p=xs.get(this)||[];for(let m=0;m<p.length;m++){let g=p[m];g.onError&&g.onError(f)}xs.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function d(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),bs.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}};var Br=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new Zi,o=new Eo(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(d){s!==void 0?s(d):Ke(d);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new Zi;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:En,e.wrapT=t.wrapT!==void 0?t.wrapT:En,e.magFilter=t.magFilter!==void 0?t.magFilter:Ft,e.minFilter=t.minFilter!==void 0?t.minFilter:Ft,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Yn),t.mipmapCount===1&&(e.minFilter=Ft),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},zr=class extends Ii{constructor(e){super(e)}load(e,t,n,s){let r=new tn,a=new Co(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Bs=class extends Jt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new at(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},kr=class extends Bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new at(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},dc=new _t,Pu=new Z,Iu=new Z,Gr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ti,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pu),Iu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Iu),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){dc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(dc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Ts||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(dc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xa=new Z,qa=new on,Hn=new Z,Vr=class extends Jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Xa,qa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Hn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Xa,qa,Hn),Hn.x===1&&Hn.y===1&&Hn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Xa,qa,Hn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Mi=new Z,Lu=new Fe,Du=new Fe,en=class extends Vr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Rs*2*Math.atan(Math.tan(or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,Lu,Du),t.subVectors(Du,Lu)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(or*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var Mc=class extends Gr{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0}},Hr=class extends Bs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Mc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Wr=class extends Vr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Sc=class extends Gr{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Xr=class extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Jt.DEFAULT_UP),this.updateMatrix(),this.target=new Jt,this.shadow=new Sc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var ys=-90,vs=1,zs=class extends Jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new en(ys,vs,e,t);s.layers=this.layers,this.add(s);let r=new en(ys,vs,e,t);r.layers=this.layers,this.add(r);let a=new en(ys,vs,e,t);a.layers=this.layers,this.add(a);let o=new en(ys,vs,e,t);o.layers=this.layers,this.add(o);let l=new en(ys,vs,e,t);l.layers=this.layers,this.add(l);let c=new en(ys,vs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ts)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let u=!1;e.isWebGLRenderer===!0?u=e.state.buffers.depth.getReversed():u=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=y,e.setRenderTarget(n,5,s),u&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,p,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ro=class extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var ih="\\[\\]\\.:\\/",lm=new RegExp("["+ih+"]","g"),sh="[^"+ih+"]",cm="[^"+ih.replace("\\.","")+"]",hm=/((?:WC+[\/:])*)/.source.replace("WC",sh),um=/(WCOD+)?/.source.replace("WCOD",cm),dm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),fm=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),pm=new RegExp("^"+hm+um+dm+fm+"$"),mm=["material","materials","bones","map"],bc=class{constructor(e,t,n){let s=n||Et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lm,"")}static parseTrackName(e){let t=pm.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mm.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ze("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ke("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ke("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ke("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ke("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ke("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ke("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ke("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ke("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=bc;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Cy=new Float32Array(1);var Nu=new _t,qr=class{constructor(e,t,n=0,s=1/0){this.ray=new Yi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ke("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nu.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nu),this}intersectObject(e,t=!0,n=[]){return wc(e,this,n,t),n.sort(Uu),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)wc(e[s],this,n,t);return n.sort(Uu),n}};function Uu(i,e){return i.distance-e.distance}function wc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)wc(r[a],e,t,!0)}}var ks=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var hh=class hh{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};hh.prototype.isMatrix2=!0;var Ac=hh;var Yr=class extends Nn{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};function rh(i,e,t,n){let s=gm(n);switch(t){case Wc:return i*e;case Oo:return i*e/s.components*s.byteLength;case Bo:return i*e/s.components*s.byteLength;case Ui:return i*e*2/s.components*s.byteLength;case zo:return i*e*2/s.components*s.byteLength;case Xc:return i*e*3/s.components*s.byteLength;case On:return i*e*4/s.components*s.byteLength;case ko:return i*e*4/s.components*s.byteLength;case $r:case jr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qr:case ea:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vo:case Wo:return Math.max(i,16)*Math.max(e,8)/4;case Go:case Ho:return Math.max(i,8)*Math.max(e,8)/2;case Xo:case qo:case Zo:case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yo:case ta:case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ul:case dl:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*8;case na:case gl:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gm(i){switch(i){case mn:case kc:return{byteLength:1,components:1};case Xs:case Gc:case hn:return{byteLength:2,components:1};case Uo:case Fo:return{byteLength:2,components:4};case Fn:case No:case cn:return{byteLength:4,components:1};case Vc:case Hc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ze("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function Jd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function xm(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,f=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<f.length;m++){let g=f[p],y=f[m];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++p,f[p]=y)}f.length=p+1;for(let m=0,g=f.length;m<g;m++){let y=f[m];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var ym=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vm=`#ifdef USE_ALPHAHASH
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
#endif`,Mm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Am=`#ifdef USE_AOMAP
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
#endif`,Tm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Em=`#ifdef USE_BATCHING
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
#endif`,Cm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Rm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Im=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lm=`#ifdef USE_IRIDESCENCE
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
#endif`,Dm=`#ifdef USE_BUMPMAP
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
#endif`,Nm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,km=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Vm=`#define PI 3.141592653589793
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
} // validated`,Hm=`vec3 transformedNormal = objectNormal;
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
#endif`,Wm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Xm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,qm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ym=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Km=`#ifdef USE_ENVMAP
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
#endif`,$m=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,jm=`#ifdef USE_ENVMAP
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
#endif`,Qm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eg=`#ifdef USE_ENVMAP
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
#endif`,tg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ng=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ig=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,sg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rg=`#ifdef USE_GRADIENTMAP
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
}`,ag=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,og=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,hg=`#ifdef USE_ENVMAP
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
#endif`,ug=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mg=`PhysicalMaterial material;
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
#endif`,gg=`uniform sampler2D dfgLUT;
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
}`,_g=`
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
#endif`,xg=`#if defined( RE_IndirectDiffuse )
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
#endif`,yg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vg=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,Mg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ag=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Eg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cg=`#if defined( USE_POINTS_UV )
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
#endif`,Rg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ig=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lg=`#if defined( USE_MORPHCOLORS )
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
#endif`,Dg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ng=`#ifdef USE_MORPHTARGETS
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
#endif`,Ug=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Gg=`#ifdef USE_NORMALMAP
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
#endif`,Vg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Yg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Zg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$g=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i0=`float getShadowMask() {
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
}`,s0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,r0=`#ifdef USE_SKINNING
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
#endif`,a0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o0=`#ifdef USE_SKINNING
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
#endif`,l0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,c0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,h0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,u0=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d0=`#ifdef USE_TRANSMISSION
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
#endif`,f0=`#ifdef USE_TRANSMISSION
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
#endif`,p0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,x0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y0=`uniform sampler2D t2D;
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
}`,v0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M0=`uniform float backgroundBlurriness;
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
}`,S0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,w0=`#include <common>
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
}`,A0=`#if DEPTH_PACKING == 3200
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
}`,T0=`#define DISTANCE
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
}`,E0=`#define DISTANCE
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
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,R0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P0=`uniform float scale;
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
}`,I0=`uniform vec3 diffuse;
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
}`,L0=`#include <common>
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
}`,D0=`uniform vec3 diffuse;
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
}`,N0=`#define LAMBERT
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
}`,U0=`#define LAMBERT
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
}`,F0=`#define MATCAP
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
}`,O0=`#define MATCAP
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
}`,B0=`#define NORMAL
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
}`,z0=`#define NORMAL
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
}`,k0=`#define PHONG
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
}`,G0=`#define PHONG
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
}`,V0=`#define STANDARD
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
}`,H0=`#define STANDARD
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
}`,W0=`#define TOON
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
}`,X0=`#define TOON
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
}`,q0=`uniform float size;
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
}`,Y0=`uniform vec3 diffuse;
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
}`,Z0=`#include <common>
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
}`,J0=`uniform vec3 color;
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
}`,K0=`uniform float rotation;
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
}`,$0=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:ym,alphahash_pars_fragment:vm,alphamap_fragment:Mm,alphamap_pars_fragment:Sm,alphatest_fragment:bm,alphatest_pars_fragment:wm,aomap_fragment:Am,aomap_pars_fragment:Tm,batching_pars_vertex:Em,batching_vertex:Cm,begin_vertex:Rm,beginnormal_vertex:Pm,bsdfs:Im,iridescence_fragment:Lm,bumpmap_pars_fragment:Dm,clipping_planes_fragment:Nm,clipping_planes_pars_fragment:Um,clipping_planes_pars_vertex:Fm,clipping_planes_vertex:Om,color_fragment:Bm,color_pars_fragment:zm,color_pars_vertex:km,color_vertex:Gm,common:Vm,defaultnormal_vertex:Hm,displacementmap_pars_vertex:Wm,displacementmap_vertex:Xm,emissivemap_fragment:qm,emissivemap_pars_fragment:Ym,colorspace_fragment:Zm,colorspace_pars_fragment:Jm,envmap_fragment:Km,envmap_common_pars_fragment:$m,envmap_pars_fragment:jm,envmap_pars_vertex:Qm,envmap_physical_pars_fragment:hg,envmap_vertex:eg,fog_vertex:tg,fog_pars_vertex:ng,fog_fragment:ig,fog_pars_fragment:sg,gradientmap_pars_fragment:rg,lightmap_pars_fragment:ag,lights_lambert_fragment:og,lights_lambert_pars_fragment:lg,lights_pars_begin:cg,lights_toon_fragment:ug,lights_toon_pars_fragment:dg,lights_phong_fragment:fg,lights_phong_pars_fragment:pg,lights_physical_fragment:mg,lights_physical_pars_fragment:gg,lights_fragment_begin:_g,lights_fragment_maps:xg,lights_fragment_end:yg,lightprobes_pars_fragment:vg,logdepthbuf_fragment:Mg,logdepthbuf_pars_fragment:Sg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:wg,map_fragment:Ag,map_pars_fragment:Tg,map_particle_fragment:Eg,map_particle_pars_fragment:Cg,metalnessmap_fragment:Rg,metalnessmap_pars_fragment:Pg,morphinstance_vertex:Ig,morphcolor_vertex:Lg,morphnormal_vertex:Dg,morphtarget_pars_vertex:Ng,morphtarget_vertex:Ug,normal_fragment_begin:Fg,normal_fragment_maps:Og,normal_pars_fragment:Bg,normal_pars_vertex:zg,normal_vertex:kg,normalmap_pars_fragment:Gg,clearcoat_normal_fragment_begin:Vg,clearcoat_normal_fragment_maps:Hg,clearcoat_pars_fragment:Wg,iridescence_pars_fragment:Xg,opaque_fragment:qg,packing:Yg,premultiplied_alpha_fragment:Zg,project_vertex:Jg,dithering_fragment:Kg,dithering_pars_fragment:$g,roughnessmap_fragment:jg,roughnessmap_pars_fragment:Qg,shadowmap_pars_fragment:e0,shadowmap_pars_vertex:t0,shadowmap_vertex:n0,shadowmask_pars_fragment:i0,skinbase_vertex:s0,skinning_pars_vertex:r0,skinning_vertex:a0,skinnormal_vertex:o0,specularmap_fragment:l0,specularmap_pars_fragment:c0,tonemapping_fragment:h0,tonemapping_pars_fragment:u0,transmission_fragment:d0,transmission_pars_fragment:f0,uv_pars_fragment:p0,uv_pars_vertex:m0,uv_vertex:g0,worldpos_vertex:_0,background_vert:x0,background_frag:y0,backgroundCube_vert:v0,backgroundCube_frag:M0,cube_vert:S0,cube_frag:b0,depth_vert:w0,depth_frag:A0,distance_vert:T0,distance_frag:E0,equirect_vert:C0,equirect_frag:R0,linedashed_vert:P0,linedashed_frag:I0,meshbasic_vert:L0,meshbasic_frag:D0,meshlambert_vert:N0,meshlambert_frag:U0,meshmatcap_vert:F0,meshmatcap_frag:O0,meshnormal_vert:B0,meshnormal_frag:z0,meshphong_vert:k0,meshphong_frag:G0,meshphysical_vert:V0,meshphysical_frag:H0,meshtoon_vert:W0,meshtoon_frag:X0,points_vert:q0,points_frag:Y0,shadow_vert:Z0,shadow_frag:J0,sprite_vert:K0,sprite_frag:$0},ze={common:{diffuse:{value:new at(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new at(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new at(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new at(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Jn={basic:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new at(0)},envMapIntensity:{value:1}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new at(0)},specular:{value:new at(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:nn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new at(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:nn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new at(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:nn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:nn([ze.points,ze.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:nn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:nn([ze.common,ze.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:nn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:nn([ze.sprite,ze.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distance:{uniforms:nn([ze.common,ze.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distance_vert,fragmentShader:lt.distance_frag},shadow:{uniforms:nn([ze.lights,ze.fog,{color:{value:new at(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Jn.physical={uniforms:nn([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new it},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new at(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new at(0)},specularColor:{value:new at(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};var xl={r:0,b:0,g:0},j0=new _t,Kd=new it;Kd.set(-1,0,0,0,1,0,0,0,1);function Q0(i,e,t,n,s,r){let a=new at(0),o=s===!0?0:1,l,c,d=null,f=0,p=null;function m(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){let M=x.backgroundBlurriness>0;b=e.get(b,M)}return b}function g(x){let b=!1,M=m(x);M===null?u(a,o):M&&M.isColor&&(u(M,1),b=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(x,b){let M=m(b);M&&M.isCubeTexture?(c===void 0&&(c=new pn(new Ei(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:ns(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,S,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=M,c.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(j0.makeRotationFromEuler(b.backgroundRotation)).transpose(),M.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kd),c.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,(d!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new pn(new Ki(2,2),new Xn({name:"BackgroundMaterial",uniforms:ns(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,l.material.toneMapped=pt.getTransfer(M.colorSpace)!==vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(d!==M||f!==M.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=M,f=M.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,b){x.getRGB(xl,nh(i)),t.buffers.color.setClear(xl.r,xl.g,xl.b,b,r)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,u(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,u(a,o)},render:g,addToRenderList:y,dispose:h}}function e_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(I,F,C,E,D){let U=!1,O=f(I,E,C,F);r!==O&&(r=O,c(r.object)),U=m(I,E,C,D),U&&g(I,E,C,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,M(I,F,C,E),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(I){return i.bindVertexArray(I)}function d(I){return i.deleteVertexArray(I)}function f(I,F,C,E){let D=E.wireframe===!0,U=n[F.id];U===void 0&&(U={},n[F.id]=U);let O=I.isInstancedMesh===!0?I.id:0,V=U[O];V===void 0&&(V={},U[O]=V);let B=V[C.id];B===void 0&&(B={},V[C.id]=B);let G=B[D];return G===void 0&&(G=p(l()),B[D]=G),G}function p(I){let F=[],C=[],E=[];for(let D=0;D<t;D++)F[D]=0,C[D]=0,E[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:C,attributeDivisors:E,object:I,attributes:{},index:null}}function m(I,F,C,E){let D=r.attributes,U=F.attributes,O=0,V=C.getAttributes();for(let B in V)if(V[B].location>=0){let X=D[B],te=U[B];if(te===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(te=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(te=I.instanceColor)),X===void 0||X.attribute!==te||te&&X.data!==te.data)return!0;O++}return r.attributesNum!==O||r.index!==E}function g(I,F,C,E){let D={},U=F.attributes,O=0,V=C.getAttributes();for(let B in V)if(V[B].location>=0){let X=U[B];X===void 0&&(B==="instanceMatrix"&&I.instanceMatrix&&(X=I.instanceMatrix),B==="instanceColor"&&I.instanceColor&&(X=I.instanceColor));let te={};te.attribute=X,X&&X.data&&(te.data=X.data),D[B]=te,O++}r.attributes=D,r.attributesNum=O,r.index=E}function y(){let I=r.newAttributes;for(let F=0,C=I.length;F<C;F++)I[F]=0}function u(I){h(I,0)}function h(I,F){let C=r.newAttributes,E=r.enabledAttributes,D=r.attributeDivisors;C[I]=1,E[I]===0&&(i.enableVertexAttribArray(I),E[I]=1),D[I]!==F&&(i.vertexAttribDivisor(I,F),D[I]=F)}function x(){let I=r.newAttributes,F=r.enabledAttributes;for(let C=0,E=F.length;C<E;C++)F[C]!==I[C]&&(i.disableVertexAttribArray(C),F[C]=0)}function b(I,F,C,E,D,U,O){O===!0?i.vertexAttribIPointer(I,F,C,D,U):i.vertexAttribPointer(I,F,C,E,D,U)}function M(I,F,C,E){y();let D=E.attributes,U=C.getAttributes(),O=F.defaultAttributeValues;for(let V in U){let B=U[V];if(B.location>=0){let G=D[V];if(G===void 0&&(V==="instanceMatrix"&&I.instanceMatrix&&(G=I.instanceMatrix),V==="instanceColor"&&I.instanceColor&&(G=I.instanceColor)),G!==void 0){let X=G.normalized,te=G.itemSize,ae=e.get(G);if(ae===void 0)continue;let Y=ae.buffer,z=ae.type,W=ae.bytesPerElement,K=z===i.INT||z===i.UNSIGNED_INT||G.gpuType===No;if(G.isInterleavedBufferAttribute){let J=G.data,se=J.isInterleavedBuffer===!0?J.stride:J.itemSize,ge=G.offset;if(J.isInstancedInterleavedBuffer||J.isInstancedBufferAttribute){for(let fe=0;fe<B.locationSize;fe++)h(B.location+fe,J.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let fe=0;fe<B.locationSize;fe++)u(B.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let fe=0;fe<B.locationSize;fe++)b(B.location+fe,te/B.locationSize,z,X,se*W,(ge+te/B.locationSize*fe)*W,K)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<B.locationSize;J++)h(B.location+J,G.meshPerAttribute);I.isInstancedMesh!==!0&&E._maxInstanceCount===void 0&&(E._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<B.locationSize;J++)u(B.location+J);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let J=0;J<B.locationSize;J++)b(B.location+J,te/B.locationSize,z,X,te*W,te/B.locationSize*J*W,K)}}else if(O!==void 0){let X=O[V];if(X!==void 0)switch(X.length){case 2:i.vertexAttrib2fv(B.location,X);break;case 3:i.vertexAttrib3fv(B.location,X);break;case 4:i.vertexAttrib4fv(B.location,X);break;default:i.vertexAttrib1fv(B.location,X)}}}}x()}function T(){P();for(let I in n){let F=n[I];for(let C in F){let E=F[C];for(let D in E){let U=E[D];for(let O in U)d(U[O].object),delete U[O];delete E[D]}}delete n[I]}}function S(I){if(n[I.id]===void 0)return;let F=n[I.id];for(let C in F){let E=F[C];for(let D in E){let U=E[D];for(let O in U)d(U[O].object),delete U[O];delete E[D]}}delete n[I.id]}function _(I){for(let F in n){let C=n[F];for(let E in C){let D=C[E];if(D[I.id]===void 0)continue;let U=D[I.id];for(let O in U)d(U[O].object),delete U[O];delete D[I.id]}}}function v(I){for(let F in n){let C=n[F],E=I.isInstancedMesh===!0?I.id:0,D=C[E];if(D!==void 0){for(let U in D){let O=D[U];for(let V in O)d(O[V].object),delete O[V];delete D[U]}delete C[E],Object.keys(C).length===0&&delete n[F]}}}function P(){R(),a=!0,r!==s&&(r=s,c(r.object))}function R(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:R,dispose:T,releaseStatesOfGeometry:S,releaseStatesOfObject:v,releaseStatesOfProgram:_,initAttributes:y,enableAttribute:u,disableUnusedAttributes:x}}function t_(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let p=0;for(let m=0;m<d;m++)p+=c[m];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function n_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==On&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let v=_===hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==mn&&_!==cn&&!v&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ze("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ze("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ze("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),h=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),S=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:p,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:u,maxAttributes:h,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:M,maxSamples:T,samples:S}}function i_(i){let e=this,t=null,n=0,s=!1,r=!1,a=new an,o=new it,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let m=f.length!==0||p||n!==0||s;return s=p,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=d(f,p,0)},this.setState=function(f,p,m){let g=f.clippingPlanes,y=f.clipIntersection,u=f.clipShadows,h=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?d(null):c();else{let x=r?0:n,b=x*4,M=h.clippingState||null;l.value=M,M=d(g,p,b,m);for(let T=0;T!==b;++T)M[T]=t[T];h.clippingState=M,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,p,m,g){let y=f!==null?f.length:0,u=null;if(y!==0){if(u=l.value,g!==!0||u===null){let h=m+y*4,x=p.matrixWorldInverse;o.getNormalMatrix(x),(u===null||u.length<h)&&(u=new Float32Array(h));for(let b=0,M=m;b!==y;++b,M+=4)a.copy(f[b]).applyMatrix4(x,o),a.normal.toArray(u,M),u[M+3]=a.constant}l.value=u,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,u}}var ra=class extends bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new vr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ei(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:$i});r.uniforms.tEquirect.value=t;let a=new pn(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Ft),new zs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Cd=256,s_=3,r_=20,$d=256,jd=16,a_=3,o_=new Z,l_=new at,vl=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zs(1,10,null),this._boxMesh=new pn(new Ei(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=o_}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),d=this._getSourceTarget(!0);t>0&&(d.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,p=l.autoClearColor,m=l.autoClearDepth,g=l.autoClearStencil,y=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,y===null&&(e.background=l.getClearColor(l_));let u=new zs(n,s,d);return u.position.copy(o),u.update(l,e),l.autoClear=f,l.autoClearColor=p,l.autoClearDepth=m,l.autoClearStencil=g,e.background=y,t>0&&(d.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Id(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Pd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Cd,jc(e))}_fromTexture(e,t){e.mapping===Qi||e.mapping===Hs?this._setSize(e.image.length===0?Cd:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Rd(e,!1,!1),n=Math.log2(e)-s_;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Rd(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Qi||e.mapping===Hs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Id()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Pd()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=c_(),this._integrationMaterial=h_());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-a_)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/($d*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=u_());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Rd(i,e,t){return new ra(i,{minFilter:Yn,generateMipmaps:e,type:hn,colorSpace:qi,depthBuffer:t})}function aa(i,e,t){return new Xn({name:i,uniforms:e,vertexShader:lt.cube_vert,fragmentShader:t,side:ln,blending:$i,depthTest:!1,depthWrite:!1})}function c_(){return aa("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${$d}u

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
	`)}function h_(){return aa("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jd}},`

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
	`)}function u_(){return aa("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${r_}
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
	`)}function Pd(){return aa("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Id(){return aa("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function d_(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,m=!1){return p==null?null:m?a(p):r(p)}function r(p){if(p&&p.isTexture){let m=p.mapping;if(m===Ws||m===Lo)if(e.has(p)){let g=e.get(p).texture;return o(g,p.mapping)}else{let g=p.image;if(g&&g.height>0){let y=new ra(g.height);return y.fromEquirectangularTexture(i,p),e.set(p,y),p.addEventListener("dispose",c),o(y.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture&&p.isPMREMTexture!==!0){let m=p.mapping,g=m===Ws||m===Lo,y=m===Qi||m===Hs;if(g||y){let u=t.get(p),h=u!==void 0?u.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==h)return n===null&&(n=new vl(i)),u=g?n.fromEquirectangular(p,u):n.fromCubemap(p,u),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),u.texture;if(u!==void 0)return u.texture;{let x=p.image;return g&&x&&x.height>0||y&&x&&l(x)?(n===null&&(n=new vl(i)),u=g?n.fromEquirectangular(p):n.fromCubemap(p),u.texture.pmremVersion=p.pmremVersion,t.set(p,u),p.addEventListener("dispose",d),u.texture):null}}}return p}function o(p,m){return m===Ws?p.mapping=Qi:m===Lo&&(p.mapping=Hs),p}function l(p){let m=0,g=6;for(let y=0;y<g;y++)p[y]!==void 0&&m++;return m===g}function c(p){let m=p.target;m.removeEventListener("dispose",c);let g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function d(p){let m=p.target;m.removeEventListener("dispose",d);let g=t.get(m);g!==void 0&&(t.delete(m),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function f_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Xi("WebGLRenderer: "+n+" extension not supported."),s}}}function p_(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let u in g.attributes)e.remove(g.attributes[u]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let y=r.get(g);y&&(e.remove(y),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,y){return s[y.id]!==void 0||(y.addEventListener("dispose",o),s[y.id]=new WeakRef(y),a.register(y,y.id,y),t.memory.geometries++),y}function d(g){let y=g.attributes;for(let u in y)e.update(y[u],i.ARRAY_BUFFER)}function f(g){let y=g.index,u=g.attributes.position,h=0;if(u===void 0)return;let x=y!==null?y.array.length:u.array.length/3-1,b=u.count>=65535?_r:gr,M=new b(Math.ceil(x/3)*6,1),T=M.array;if(y!==null){let _=y.array;h=y.version;for(let v=0,P=0;v<x;v+=3){let R=_[v+0],I=_[v+1],F=_[v+2];T[P++]=R,T[P++]=I,T[P++]=I,T[P++]=F,T[P++]=F,T[P++]=R}}else{h=u.version;for(let _=0,v=0;_<x;_+=3){let P=_+0,R=_+1,I=_+2;T[v++]=P,T[v++]=R,T[v++]=R,T[v++]=I,T[v++]=I,T[v++]=P}}M.version=h;let S=r.get(g);S&&e.remove(S),r.set(g,M)}function p(g){let y=r.get(g);if(y){let u=g.index;u!==null&&y.version<u.version&&f(g)}else f(g);return r.get(g)}function m(){for(let g in s){let y=s[g].deref();y!==void 0&&l(y)}}return{get:c,update:d,getWireframeAttribute:p,dispose:m}}function m_(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),t.update(p,n,1)}function c(f,p,m){m!==0&&(i.drawElementsInstanced(n,p,r,f*a,m),t.update(p,n,m))}function d(f,p,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,m);let y=0;for(let u=0;u<m;u++)y+=p[u];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function g_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function __(i,e,t){let n=new WeakMap,s=new Rt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==f){let P=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",P)};p!==void 0&&p.texture.dispose();let m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],h=o.morphAttributes.normal||[],x=o.morphAttributes.color||[],b=0;m===!0&&(b=1),g===!0&&(b=2),y===!0&&(b=3);let M=o.attributes.position.count*b,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let S=new Float32Array(M*T*4*f),_=new fr(S,M,T,f);_.type=cn,_.needsUpdate=!0;let v=b*4;for(let R=0;R<f;R++){let I=u[R],F=h[R],C=x[R],E=M*T*4*R;for(let D=0;D<I.count;D++){let U=D*v;m===!0&&(s.fromBufferAttribute(I,D),S[E+U+0]=s.x,S[E+U+1]=s.y,S[E+U+2]=s.z,S[E+U+3]=0),g===!0&&(s.fromBufferAttribute(F,D),S[E+U+4]=s.x,S[E+U+5]=s.y,S[E+U+6]=s.z,S[E+U+7]=0),y===!0&&(s.fromBufferAttribute(C,D),S[E+U+8]=s.x,S[E+U+9]=s.y,S[E+U+10]=s.z,S[E+U+11]=C.itemSize===4?s.w:1)}}p={count:f,texture:_,size:new Fe(M,T)},n.set(o,p),o.addEventListener("dispose",P)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];let g=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function x_(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,f=c.geometry,p=e.get(c,f);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==d&&(m.update(),r.set(m,d))}return p}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var y_={[Dc]:"LINEAR_TONE_MAPPING",[Nc]:"REINHARD_TONE_MAPPING",[Uc]:"CINEON_TONE_MAPPING",[Jr]:"ACES_FILMIC_TONE_MAPPING",[Oc]:"AGX_TONE_MAPPING",[Bc]:"NEUTRAL_TONE_MAPPING",[Fc]:"CUSTOM_TONE_MAPPING"};function v_(i,e,t,n,s,r){let a=new bn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,d=new fn;d.setAttribute("position",new Tt([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Tt([0,2,0,0,2,0],2));let f=new mo({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new pn(d,f),m=new Wr(-1,1,1,-1,0,1),g=null,y=null,u=!1,h,x=null,b=[],M=!1;this.setSize=function(T,S){a.setSize(T,S),o!==null&&o.setSize(T,S),l!==null&&l.setSize(T,S);for(let _=0;_<b.length;_++){let v=b[_];v.setSize&&v.setSize(T,S)}},this.setEffects=function(T){b=T,M=b.length>0&&b[0].isRenderPass===!0;let S=a.width,_=a.height;b.length>0&&o===null&&(o=new bn(S,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}),l=new bn(S,_,{type:hn,depthBuffer:!1,stencilBuffer:!1}));let v=s===!0&&b.some(P=>P.needsDepthTexture===!0);v!==(a.depthTexture!==null)&&(v===!0&&c===null&&(c=new ui(S,_),r===!0&&(c.format=di,c.type=es)),a.dispose(),a.depthTexture=v?c:null,a.resolveDepthBuffer=v,a.storeMultisampledDepthBuffer=v);for(let P=0;P<b.length;P++){let R=b[P];R.setSize&&R.setSize(S,_),v&&R.needsDepthTexture===!0&&R.setDepthTexture&&R.setDepthTexture(c)}},this.begin=function(T,S){if(u||T.toneMapping===qn&&b.length===0)return!1;if(x=S,S!==null){let _=S.width,v=S.height;(a.width!==_||a.height!==v)&&this.setSize(_,v)}return M===!1&&T.setRenderTarget(a),h=T.toneMapping,T.toneMapping=qn,!0},this.hasRenderPass=function(){return M},this.end=function(T,S){T.toneMapping=h,u=!0;let _=a,v=o;for(let P=0;P<b.length;P++){let R=b[P];R.enabled!==!1&&(R.render(T,v,_,S),R.needsSwap!==!1&&(_=v,v=v===o?l:o))}if(g!==T.outputColorSpace||y!==T.toneMapping){g=T.outputColorSpace,y=T.toneMapping,f.defines={},pt.getTransfer(g)===vt&&(f.defines.SRGB_TRANSFER="");let P=y_[y];P&&(f.defines[P]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(x),T.render(p,m),x=null,u=!1},this.isCompositing=function(){return u},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),d.dispose(),f.dispose()}}var Qd=new tn,ef=new ui(1,1),tf=new Sr(1),nf=new fr,sf=new ao,rf=new vr,Ld=[],Dd=[],Nd=new Float32Array(16),Ud=new Float32Array(9),Fd=new Float32Array(4);function Ys(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Vt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Sl(i,e){let t=Dd[e];t===void 0&&(t=new Int32Array(e),Dd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function M_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2fv(this.addr,e),Vt(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;i.uniform3fv(this.addr,e),Vt(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4fv(this.addr,e),Vt(t,e)}}function A_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Fd.set(n),i.uniformMatrix2fv(this.addr,!1,Fd),Vt(t,n)}}function T_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Ud.set(n),i.uniformMatrix3fv(this.addr,!1,Ud),Vt(t,n)}}function E_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Gt(t,n))return;Nd.set(n),i.uniformMatrix4fv(this.addr,!1,Nd),Vt(t,n)}}function C_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2iv(this.addr,e),Vt(t,e)}}function P_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3iv(this.addr,e),Vt(t,e)}}function I_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4iv(this.addr,e),Vt(t,e)}}function L_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function D_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;i.uniform2uiv(this.addr,e),Vt(t,e)}}function N_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;i.uniform3uiv(this.addr,e),Vt(t,e)}}function U_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;i.uniform4uiv(this.addr,e),Vt(t,e)}}function bl(i){return i.version===0&&(i.compareFunction=Zc,i.needsUpdate=!0),i}function F_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=bl(ef):r=Qd,t.setTexture2D(e||r,s)}function O_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sf,s)}function B_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=bl(tf):r=rf,t.setTextureCube(e||r,s)}function z_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||nf,s)}function k_(i){switch(i){case 5126:return M_;case 35664:return S_;case 35665:return b_;case 35666:return w_;case 35674:return A_;case 35675:return T_;case 35676:return E_;case 5124:case 35670:return C_;case 35667:case 35671:return R_;case 35668:case 35672:return P_;case 35669:case 35673:return I_;case 5125:return L_;case 36294:return D_;case 36295:return N_;case 36296:return U_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return B_;case 36289:case 36303:case 36311:case 36292:return z_}}function G_(i,e){i.uniform1fv(this.addr,e)}function V_(i,e){let t=Ys(e,this.size,2);i.uniform2fv(this.addr,t)}function H_(i,e){let t=Ys(e,this.size,3);i.uniform3fv(this.addr,t)}function W_(i,e){let t=Ys(e,this.size,4);i.uniform4fv(this.addr,t)}function X_(i,e){let t=Ys(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function q_(i,e){let t=Ys(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Y_(i,e){let t=Ys(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Z_(i,e){i.uniform1iv(this.addr,e)}function J_(i,e){i.uniform2iv(this.addr,e)}function K_(i,e){i.uniform3iv(this.addr,e)}function $_(i,e){i.uniform4iv(this.addr,e)}function j_(i,e){i.uniform1uiv(this.addr,e)}function Q_(i,e){i.uniform2uiv(this.addr,e)}function ex(i,e){i.uniform3uiv(this.addr,e)}function tx(i,e){i.uniform4uiv(this.addr,e)}function nx(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=bl(ef):a=Qd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function ix(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sf,r[a])}function sx(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=bl(tf):a=rf;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function rx(i,e,t){let n=this.cache,s=e.length,r=Sl(t,s);Gt(n,r)||(i.uniform1iv(this.addr,r),Vt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||nf,r[a])}function ax(i){switch(i){case 5126:return G_;case 35664:return V_;case 35665:return H_;case 35666:return W_;case 35674:return X_;case 35675:return q_;case 35676:return Y_;case 5124:case 35670:return Z_;case 35667:case 35671:return J_;case 35668:case 35672:return K_;case 35669:case 35673:return $_;case 5125:return j_;case 36294:return Q_;case 36295:return ex;case 36296:return tx;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}var fh=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=k_(t.type)}},ph=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ax(t.type)}},mh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},uh=/(\w+)(\])?(\[|\.)?/g;function Od(i,e){i.seq.push(e),i.map[e.id]=e}function ox(i,e,t){let n=i.name,s=n.length;for(uh.lastIndex=0;;){let r=uh.exec(n),a=uh.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Od(t,c===void 0?new fh(o,i,e):new ph(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new mh(o),Od(t,f)),t=f}}}var qs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);ox(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Bd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var lx=37297,cx=0;function hx(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var zd=new it;function ux(i){pt._getMatrix(zd,pt.workingColorSpace,i);let e=`mat3( ${zd.elements.map(t=>t.toFixed(4))} )`;switch(pt.getTransfer(i)){case dr:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return Ze("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kd(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hx(i.getShaderSource(e),o)}else return r}function dx(i,e){let t=ux(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var fx={[Dc]:"Linear",[Nc]:"Reinhard",[Uc]:"Cineon",[Jr]:"ACESFilmic",[Oc]:"AgX",[Bc]:"Neutral",[Fc]:"Custom"};function px(i,e){let t=fx[e];return t===void 0?(Ze("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var yl=new Z;function mx(){pt.getLuminanceCoefficients(yl);let i=yl.x.toFixed(4),e=yl.y.toFixed(4),t=yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function _x(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function sa(i){return i!==""}function Gd(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gh(i){return i.replace(yx,vx)}function vx(i,e){let t=lt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return gh(t)}var Mx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hd(i){return i.replace(Mx,Sx)}function Sx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var bx={[Zr]:"SHADOWMAP_TYPE_PCF",[Gs]:"SHADOWMAP_TYPE_VSM"};function wx(i){return bx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ax={[Hs]:"ENVMAP_MODE_REFRACTION"};function Tx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ax[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ex={[Lc]:"ENVMAP_BLENDING_MULTIPLY",[nd]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};function Cx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ex[i.combine]||"ENVMAP_BLENDING_NONE"}function Rx(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=wx(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",d=Tx(t),f=Cx(t),p=gx(t),m=_x(r),g=s.createProgram(),y,u,h=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sa).join(`
`),y.length>0&&(y+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(sa).join(`
`),u.length>0&&(u+=`
`)):(y=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),u=[Wd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qn?"#define TONE_MAPPING":"",t.toneMapping!==qn?lt.tonemapping_pars_fragment:"",t.toneMapping!==qn?px("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,dx("linearToOutputTexel",t.outputColorSpace),mx(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=gh(a),a=Gd(a,t),a=Vd(a,t),o=gh(o),o=Gd(o,t),o=Vd(o,t),a=Hd(a),o=Hd(o),t.isRawShaderMaterial!==!0&&(h=`#version 300 es
`,y=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,u=["#define varying in",t.glslVersion===Jc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=h+y+a,b=h+u+o,M=Bd(s,s.VERTEX_SHADER,x),T=Bd(s,s.FRAGMENT_SHADER,b);s.attachShader(g,M),s.attachShader(g,T),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function S(R){if(i.debug.checkShaderErrors){let I=s.getProgramInfoLog(g)||"",F=s.getShaderInfoLog(M)||"",C=s.getShaderInfoLog(T)||"",E=I.trim(),D=F.trim(),U=C.trim(),O=!0,V=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,T);else{let B=kd(s,M,"vertex"),G=kd(s,T,"fragment");Ke("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+E+`
`+B+`
`+G)}else E!==""?Ze("WebGLProgram: Program Info Log:",E):(D===""||U==="")&&(V=!1);V&&(R.diagnostics={runnable:O,programLog:E,vertexShader:{log:D,prefix:y},fragmentShader:{log:U,prefix:u}})}s.deleteShader(M),s.deleteShader(T),_=new qs(s,g),v=xx(s,g)}let _;this.getUniforms=function(){return _===void 0&&S(this),_};let v;this.getAttributes=function(){return v===void 0&&S(this),v};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(g,lx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cx++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=T,this}var Px=0,_h=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new xh(e),t.set(e,n)),n}},xh=class{constructor(e){this.id=Px++,this.code=e,this.usedTimes=0}};function Ix(i){return i===Ui||i===ta||i===na}function Lx(i,e,t,n,s,r){let a=new Is,o=new _h,l=new Set,c=[],d=new Map,f=n.logarithmicDepthBuffer,p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return l.add(_),_===0?"uv":`uv${_}`}function g(_,v,P,R,I,F){let C=R.fog,E=I.geometry,D=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?R.environment:null,U=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,O=e.get(_.envMap||D,U),V=p[_.type],B=n.precision;_.precision!==null&&(B=n.getMaxPrecision(_.precision),B!==_.precision&&Ze("WebGLProgram.getParameters:",_.precision,"not supported, using",B,"instead."));let G=E.morphAttributes.position||E.morphAttributes.normal||E.morphAttributes.color,X=G!==void 0?G.length:0,te=0;E.morphAttributes.position!==void 0&&(te=1),E.morphAttributes.normal!==void 0&&(te=2),E.morphAttributes.color!==void 0&&(te=3);let ae,Y,z,W;if(V){let ve=Jn[V];ae=ve.vertexShader,Y=ve.fragmentShader}else{ae=_.vertexShader,Y=_.fragmentShader;let ve=o.getVertexShaderStage(_),st=o.getFragmentShaderStage(_);o.update(_,ve,st),z=ve.id,W=st.id}let K=i.getRenderTarget(),J=i.state.buffers.depth.getReversed(),se=I.isInstancedMesh===!0,ge=I.isBatchedMesh===!0,fe=!!_.map,Pe=!!_.matcap,Be=!!O,ne=Be&&O.isPMREMTexture===!0,de=!!_.aoMap,Le=!!_.lightMap,be=!!_.bumpMap&&_.wireframe===!1,pe=!!_.normalMap,Ee=!!_.displacementMap,Oe=!!_.emissiveMap,De=!!_.metalnessMap,Ne=!!_.roughnessMap,ke=_.anisotropy>0,H=_.clearcoat>0,Nt=_.diffuseRoughness>0,ut=_.dispersion>0,mt=_.retroreflectivity>0,Ie=_.iridescence>0,Pt=_.sheen>0,Ye=_.transmission>0,Je=ke&&!!_.anisotropyMap,N=H&&!!_.clearcoatMap,w=H&&!!_.clearcoatNormalMap,Q=H&&!!_.clearcoatRoughnessMap,me=Nt&&!!_.diffuseRoughnessMap,he=Ie&&!!_.iridescenceMap,Me=Ie&&!!_.iridescenceThicknessMap,Ce=Pt&&!!_.sheenColorMap,le=Pt&&!!_.sheenRoughnessMap,oe=!!_.specularMap,Ae=!!_.specularColorMap,k=!!_.specularIntensityMap,ce=Ye&&!!_.transmissionMap,re=Ye&&!!_.thicknessMap,xe=!!_.gradientMap,ye=!!_.alphaMap,we=_.alphaTest>0,We=!!_.alphaHash,Qe=!!_.extensions,_e=qn;_.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(_e=i.toneMapping);let qe=ne?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,$e={shaderID:V,shaderType:_.type,shaderName:_.name,vertexShader:ae,fragmentShader:Y,defines:_.defines,customVertexShaderID:z,customFragmentShaderID:W,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:B,batching:ge,batchingColor:ge&&I._colorsTexture!==null,instancing:se,instancingColor:se&&I.instanceColor!==null,instancingMorph:se&&I.morphTexture!==null,outputColorSpace:K===null?i.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:pt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:fe,matcap:Pe,envMap:Be,envMapMode:Be&&O.mapping,envMapPMREM:ne,envMapMaxLod:ne?qe.length-1:null,envMapSize:ne?qe[0].width:null,aoMap:de,lightMap:Le,bumpMap:be,normalMap:pe,displacementMap:Ee,emissiveMap:Oe,normalMapObjectSpace:pe&&_.normalMapType===ad,normalMapTangentSpace:pe&&_.normalMapType===_l,packedNormalMap:pe&&_.normalMapType===_l&&Ix(_.normalMap.format),metalnessMap:De,roughnessMap:Ne,anisotropy:ke,anisotropyMap:Je,clearcoat:H,clearcoatMap:N,clearcoatNormalMap:w,clearcoatRoughnessMap:Q,diffuseRoughness:Nt,diffuseRoughnessMap:me,dispersion:ut,retroreflection:mt,iridescence:Ie,iridescenceMap:he,iridescenceThicknessMap:Me,sheen:Pt,sheenColorMap:Ce,sheenRoughnessMap:le,specularMap:oe,specularColorMap:Ae,specularIntensityMap:k,transmission:Ye,transmissionMap:ce,thicknessMap:re,gradientMap:xe,opaque:_.transparent===!1&&_.blending===Vs&&_.alphaToCoverage===!1,alphaMap:ye,alphaTest:we,alphaHash:We,combine:_.combine,mapUv:fe&&m(_.map.channel),aoMapUv:de&&m(_.aoMap.channel),lightMapUv:Le&&m(_.lightMap.channel),bumpMapUv:be&&m(_.bumpMap.channel),normalMapUv:pe&&m(_.normalMap.channel),displacementMapUv:Ee&&m(_.displacementMap.channel),emissiveMapUv:Oe&&m(_.emissiveMap.channel),metalnessMapUv:De&&m(_.metalnessMap.channel),roughnessMapUv:Ne&&m(_.roughnessMap.channel),anisotropyMapUv:Je&&m(_.anisotropyMap.channel),clearcoatMapUv:N&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:w&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:me&&m(_.diffuseRoughnessMap.channel),iridescenceMapUv:he&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:le&&m(_.sheenRoughnessMap.channel),specularMapUv:oe&&m(_.specularMap.channel),specularColorMapUv:Ae&&m(_.specularColorMap.channel),specularIntensityMapUv:k&&m(_.specularIntensityMap.channel),transmissionMapUv:ce&&m(_.transmissionMap.channel),thicknessMapUv:re&&m(_.thicknessMap.channel),alphaMapUv:ye&&m(_.alphaMap.channel),vertexTangents:!!E.attributes.tangent&&(pe||ke),vertexNormals:!!E.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!E.attributes.color&&E.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!E.attributes.uv&&(fe||ye),fog:!!C,useFog:_.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||E.attributes.normal===void 0&&pe===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:J,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:E.attributes.position!==void 0,morphTargets:E.morphAttributes.position!==void 0,morphNormals:E.morphAttributes.normal!==void 0,morphColors:E.morphAttributes.color!==void 0,morphTargetsCount:X,morphTextureStride:te,numSunLights:v.sun.length,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numSunLightShadows:v.sunShadowMap.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numLightProbeGrids:F.filter(ve=>ve.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:_e,decodeVideoTexture:fe&&_.map.isVideoTexture===!0&&pt.getTransfer(_.map.colorSpace)===vt,decodeVideoTextureEmissive:Oe&&_.emissiveMap.isVideoTexture===!0&&pt.getTransfer(_.emissiveMap.colorSpace)===vt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Rn,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Qe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Qe&&_.extensions.multiDraw===!0||ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return $e.vertexUv1s=l.has(1),$e.vertexUv2s=l.has(2),$e.vertexUv3s=l.has(3),l.clear(),$e}function y(_){let v=[];if(_.shaderID?v.push(_.shaderID):(v.push(_.customVertexShaderID),v.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)v.push(P),v.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(u(v,_),h(v,_),v.push(i.outputColorSpace)),v.push(_.customProgramCacheKey),v.join()}function u(_,v){_.push(v.precision),_.push(v.outputColorSpace),_.push(v.envMapMode),_.push(v.envMapPMREM),_.push(v.envMapMaxLod),_.push(v.envMapSize),_.push(v.mapUv),_.push(v.alphaMapUv),_.push(v.lightMapUv),_.push(v.aoMapUv),_.push(v.bumpMapUv),_.push(v.normalMapUv),_.push(v.displacementMapUv),_.push(v.emissiveMapUv),_.push(v.metalnessMapUv),_.push(v.roughnessMapUv),_.push(v.anisotropyMapUv),_.push(v.clearcoatMapUv),_.push(v.clearcoatNormalMapUv),_.push(v.clearcoatRoughnessMapUv),_.push(v.diffuseRoughnessMapUv),_.push(v.iridescenceMapUv),_.push(v.iridescenceThicknessMapUv),_.push(v.sheenColorMapUv),_.push(v.sheenRoughnessMapUv),_.push(v.specularMapUv),_.push(v.specularColorMapUv),_.push(v.specularIntensityMapUv),_.push(v.transmissionMapUv),_.push(v.thicknessMapUv),_.push(v.combine),_.push(v.fogExp2),_.push(v.sizeAttenuation),_.push(v.morphTargetsCount),_.push(v.numSunLights),_.push(v.numDirLights),_.push(v.numPointLights),_.push(v.numSpotLights),_.push(v.numSpotLightMaps),_.push(v.numHemiLights),_.push(v.numRectAreaLights),_.push(v.numSunLightShadows),_.push(v.numDirLightShadows),_.push(v.numPointLightShadows),_.push(v.numSpotLightShadows),_.push(v.numSpotLightShadowsWithMaps),_.push(v.numLightProbes),_.push(v.numLightProbeGrids),_.push(v.shadowMapType),_.push(v.toneMapping),_.push(v.numClippingPlanes),_.push(v.numClipIntersection),_.push(v.depthPacking)}function h(_,v){a.disableAll(),v.instancing&&a.enable(0),v.instancingColor&&a.enable(1),v.instancingMorph&&a.enable(2),v.matcap&&a.enable(3),v.envMap&&a.enable(4),v.normalMapObjectSpace&&a.enable(5),v.normalMapTangentSpace&&a.enable(6),v.clearcoat&&a.enable(7),v.iridescence&&a.enable(8),v.alphaTest&&a.enable(9),v.vertexColors&&a.enable(10),v.vertexAlphas&&a.enable(11),v.vertexUv1s&&a.enable(12),v.vertexUv2s&&a.enable(13),v.vertexUv3s&&a.enable(14),v.vertexTangents&&a.enable(15),v.anisotropy&&a.enable(16),v.alphaHash&&a.enable(17),v.batching&&a.enable(18),v.dispersion&&a.enable(19),v.retroreflection&&a.enable(24),v.diffuseRoughness&&a.enable(25),v.batchingColor&&a.enable(20),v.gradientMap&&a.enable(21),v.packedNormalMap&&a.enable(22),v.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reversedDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),v.numLightProbeGrids>0&&a.enable(22),v.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function x(_){let v=p[_.type],P;if(v){let R=Jn[v];P=Ad.clone(R.uniforms)}else P=_.uniforms;return P}function b(_,v){let P=d.get(v);return P!==void 0?++P.usedTimes:(P=new Rx(i,v,_,s),c.push(P),d.set(v,P)),P}function M(_){if(--_.usedTimes===0){let v=c.indexOf(_);c[v]=c[c.length-1],c.pop(),d.delete(_.cacheKey),_.destroy()}}function T(_){o.remove(_)}function S(){o.dispose()}return{getParameters:g,getProgramCacheKey:y,getUniforms:x,acquireProgram:b,releaseProgram:M,releaseShaderCache:T,programs:c,dispose:S}}function Dx(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Nx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Xd(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let m=0;return p.isInstancedMesh&&(m+=2),p.isSkinnedMesh&&(m+=1),m}function o(p,m,g,y,u,h){let x=i[e];return x===void 0?(x={id:p.id,object:p,geometry:m,material:g,materialVariant:a(p),groupOrder:y,renderOrder:p.renderOrder,z:u,group:h},i[e]=x):(x.id=p.id,x.object=p,x.geometry=m,x.material=g,x.materialVariant=a(p),x.groupOrder=y,x.renderOrder=p.renderOrder,x.z=u,x.group=h),e++,x}function l(p,m,g,y,u,h,x){x.reversedDepth===!0&&(u=-u);let b=o(p,m,g,y,u,h);g.transmission>0?n.push(b):g.transparent===!0?s.push(b):t.push(b)}function c(p,m,g,y,u,h){let x=o(p,m,g,y,u,h);g.transmission>0?n.unshift(x):g.transparent===!0?s.unshift(x):t.unshift(x)}function d(p,m){t.length>1&&t.sort(p||Nx),n.length>1&&n.sort(m||Xd),s.length>1&&s.sort(m||Xd)}function f(){for(let p=e,m=i.length;p<m;p++){let g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:d}}function Ux(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qd,i.set(n,[a])):s>=r.length?(a=new qd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new at};break;case"SpotLight":t={position:new Z,direction:new Z,color:new at,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new at,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new at,groundColor:new at};break;case"RectAreaLight":t={color:new at,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return i[e.id]=t,t}}}function Ox(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Bx=0;function zx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function kx(i){let e=new Fx,t=Ox(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new Z);let s=new Z,r=new _t,a=new _t;function o(c){let d=0,f=0,p=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let m=0,g=0,y=0,u=0,h=0,x=0,b=0,M=0,T=0,S=0,_=0,v=0,P=0,R=0;c.sort(zx);for(let F=0,C=c.length;F<C;F++){let E=c[F],D=E.color,U=E.intensity,O=E.distance,V=null;if(E.shadow&&E.shadow.map&&(E.shadow.map.texture.format===Ui?V=E.shadow.map.texture:V=E.shadow.map.depthTexture||E.shadow.map.texture),E.isAmbientLight)d+=D.r*U,f+=D.g*U,p+=D.b*U;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],U);R++}else if(E.isSunLight){let B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,X=t.get(E);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize.copy(G.mapSize).multiply(G.getFrameExtents()),n.sunShadow[g]=X,n.sunShadowMap[g]=V;let te=G.getViewportCount();for(let ae=0;ae<te;ae++)n.sunShadowMatrix[y+ae]=G.getMatrix(ae),n.sunShadowCascade[y+ae]=G._cascadeData[ae];y+=te,g++}n.sun[m]=B,m++}else if(E.isDirectionalLight){let B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let G=E.shadow,X=t.get(E);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.directionalShadow[u]=X,n.directionalShadowMap[u]=V,n.directionalShadowMatrix[u]=E.shadow.matrix,T++}n.directional[u]=B,u++}else if(E.isSpotLight){let B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=O,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[x]=B;let G=E.shadow;if(E.map&&(n.spotLightMap[v]=E.map,v++,G.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[x]=G.matrix,E.castShadow){let X=t.get(E);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,n.spotShadow[x]=X,n.spotShadowMap[x]=V,_++}x++}else if(E.isRectAreaLight){let B=e.get(E);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[b]=B,b++}else if(E.isPointLight){let B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){let G=E.shadow,X=t.get(E);X.shadowIntensity=G.intensity,X.shadowBias=G.bias,X.shadowNormalBias=G.normalBias,X.shadowRadius=G.radius,X.shadowMapSize=G.mapSize,X.shadowCameraNear=G.camera.near,X.shadowCameraFar=G.camera.far,n.pointShadow[h]=X,n.pointShadowMap[h]=V,n.pointShadowMatrix[h]=E.shadow.matrix,S++}n.point[h]=B,h++}else if(E.isHemisphereLight){let B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(U),B.groundColor.copy(E.groundColor).multiplyScalar(U),n.hemi[M]=B,M++}}b>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=p;let I=n.hash;(I.sunLength!==m||I.directionalLength!==u||I.pointLength!==h||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==M||I.numSunShadows!==g||I.numDirectionalShadows!==T||I.numPointShadows!==S||I.numSpotShadows!==_||I.numSpotMaps!==v||I.numLightProbes!==R)&&(n.sun.length=m,n.directional.length=u,n.spot.length=x,n.rectArea.length=b,n.point.length=h,n.hemi.length=M,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.pointShadowMatrix.length=S,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+v-P,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=R,I.sunLength=m,I.directionalLength=u,I.pointLength=h,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=M,I.numSunShadows=g,I.numDirectionalShadows=T,I.numPointShadows=S,I.numSpotShadows=_,I.numSpotMaps=v,I.numLightProbes=R,n.version=Bx++)}function l(c,d){let f=0,p=0,m=0,g=0,y=0,u=0,h=d.matrixWorldInverse;for(let x=0,b=c.length;x<b;x++){let M=c[x];if(M.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),f++}else if(M.isDirectionalLight){let T=n.directional[p];T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),p++}else if(M.isSpotLight){let T=n.spot[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),T.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(h),g++}else if(M.isRectAreaLight){let T=n.rectArea[y];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),a.identity(),r.copy(M.matrixWorld),r.premultiply(h),a.extractRotation(r),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),y++}else if(M.isPointLight){let T=n.point[m];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(h),m++}else if(M.isHemisphereLight){let T=n.hemi[u];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(h),u++}}}return{setup:o,setupView:l,state:n}}function Yd(i){let e=new kx(i),t=[],n=[],s=[];function r(f){d.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,p)=>f.priority-p.priority||f.id-p.id)}function c(f){e.setupView(t,f)}let d={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Gx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yd(i),e.set(s,[o])):r>=a.length?(o=new Yd(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Vx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`,Wx=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],Xx=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Zd=new _t,ia=new Z,dh=new Z;function qx(i,e,t){let n=new Ti,s=new Fe,r=new Fe,a=new Rt,o=new go,l=new _o,c={},d=t.maxTextureSize,f={[Ni]:ln,[ln]:Ni,[Rn]:Rn},p=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Vx,fragmentShader:Hx}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new pn(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zr;let h=this.type;this.render=function(S,_,v){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||S.length===0)return;this.type===Io&&(Ze("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Zr);let P=i.getRenderTarget(),R=i.getActiveCubeFace(),I=i.getActiveMipmapLevel(),F=i.state;F.setBlending($i),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let C=h!==this.type;C&&_.traverse(function(E){E.material&&(Array.isArray(E.material)?E.material.forEach(D=>D.needsUpdate=!0):E.material.needsUpdate=!0)});for(let E=0,D=S.length;E<D;E++){let U=S[E],O=U.shadow;if(O===void 0){Ze("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);let V=O.getFrameExtents();s.multiply(V),r.copy(O.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/V.x),s.x=r.x*V.x,O.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/V.y),s.y=r.y*V.y,O.mapSize.y=r.y));let B=i.state.buffers.depth.getReversed();if(O.camera._reversedDepth=B,O.map===null||C===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Gs){if(U.isPointLight){Ze("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new bn(s.x,s.y,{format:Ui,type:hn,minFilter:Ft,magFilter:Ft,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new ui(s.x,s.y,cn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt}else U.isPointLight?(O.map=new ra(s.x),O.map.depthTexture=new Sr(s.x,Fn)):(O.map=new bn(s.x,s.y),O.map.depthTexture=new ui(s.x,s.y,Fn)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=hi,this.type===Zr?(O.map.depthTexture.compareFunction=B?Yc:qc,O.map.depthTexture.minFilter=Ft,O.map.depthTexture.magFilter=Ft):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Zt,O.map.depthTexture.magFilter=Zt);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==s.x||O.map.height!==s.y)&&O.map.setSize(s.x,s.y);let G=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();U.isPointLight!==!0&&O.updateMatrices(U,v);let X=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:v.layers;for(let te=0;te<G;te++){let ae=O.getCamera(te);if(U.isPointLight){let Y=O.camera,z=O.matrix,W=U.distance||Y.far;W!==Y.far&&(Y.far=W,Y.updateProjectionMatrix()),ia.setFromMatrixPosition(U.matrixWorld),Y.position.copy(ia),dh.copy(Y.position),dh.add(Wx[te]),Y.up.copy(Xx[te]),Y.lookAt(dh),Y.updateMatrixWorld(),z.makeTranslation(-ia.x,-ia.y,-ia.z),Zd.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Zd,Y.coordinateSystem,Y.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)i.setRenderTarget(O.map,te),i.clear();else{te===0&&(i.setRenderTarget(O.map),i.clear());let Y=O.getViewport(te);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(a)}n=O.getFrustum(te),M(_,v,ae,U,X,this.type)}O.isPointLightShadow!==!0&&this.type===Gs&&x(O,v),O.needsUpdate=!1}h=this.type,u.needsUpdate=!1,i.setRenderTarget(P,R,I)};function x(S,_){let v=e.update(y);p.defines.VSM_SAMPLES!==S.blurSamples&&(p.defines.VSM_SAMPLES=S.blurSamples,m.defines.VSM_SAMPLES=S.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),S.mapPass===null?S.mapPass=new bn(s.x,s.y,{format:Ui,type:hn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),p.uniforms.shadow_pass.value=S.map.depthTexture,p.uniforms.resolution.value.set(S.map.width,S.map.height),p.uniforms.radius.value=S.radius,i.setRenderTarget(S.mapPass),i.clear(),i.renderBufferDirect(_,null,v,p,y,null),m.uniforms.shadow_pass.value=S.mapPass.texture,m.uniforms.resolution.value.set(S.map.width,S.map.height),m.uniforms.radius.value=S.radius,i.setRenderTarget(S.map),i.clear(),i.renderBufferDirect(_,null,v,m,y,null)}function b(S,_,v,P){let R=null,I=v.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(I!==void 0)R=I;else if(R=v.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=R.uuid,C=_.uuid,E=c[F];E===void 0&&(E={},c[F]=E);let D=E[C];D===void 0&&(D=R.clone(),E[C]=D,_.addEventListener("dispose",T)),R=D}if(R.visible=_.visible,R.wireframe=_.wireframe,P===Gs?R.side=_.shadowSide!==null?_.shadowSide:_.side:R.side=_.shadowSide!==null?_.shadowSide:f[_.side],R.alphaMap=_.alphaMap,R.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,R.map=_.map,R.clipShadows=_.clipShadows,R.clippingPlanes=_.clippingPlanes,R.clipIntersection=_.clipIntersection,R.displacementMap=_.displacementMap,R.displacementScale=_.displacementScale,R.displacementBias=_.displacementBias,R.wireframeLinewidth=_.wireframeLinewidth,R.linewidth=_.linewidth,v.isPointLight===!0&&R.isMeshDistanceMaterial===!0){let F=i.properties.get(R);F.light=v}return R}function M(S,_,v,P,R,I){if(S.visible===!1)return;if(S.layers.test(R)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&I===Gs)&&(!S.frustumCulled||S.intersectsFrustum(n))){S.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,S.matrixWorld);let E=e.update(S),D=S.material;if(Array.isArray(D)){let U=E.groups;for(let O=0,V=U.length;O<V;O++){let B=U[O],G=D[B.materialIndex];if(G&&G.visible){let X=b(S,G,P,I);S.onBeforeShadow(i,S,_,v,E,X,B),i.renderBufferDirect(v,null,E,X,S,B),S.onAfterShadow(i,S,_,v,E,X,B)}}}else if(D.visible){let U=b(S,D,P,I);S.onBeforeShadow(i,S,_,v,E,U,null),i.renderBufferDirect(v,null,E,U,S,null),S.onAfterShadow(i,S,_,v,E,U,null)}}let C=S.children;for(let E=0,D=C.length;E<D;E++)M(C[E],_,v,P,R,I)}function T(S){S.target.removeEventListener("dispose",T);for(let v in c){let P=c[v],R=S.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}function Yx(i,e){function t(){let k=!1,ce=new Rt,re=null,xe=new Rt(0,0,0,0);return{setMask:function(ye){re!==ye&&!k&&(i.colorMask(ye,ye,ye,ye),re=ye)},setLocked:function(ye){k=ye},setClear:function(ye,we,We,Qe,_e){_e===!0&&(ye*=Qe,we*=Qe,We*=Qe),ce.set(ye,we,We,Qe),xe.equals(ce)===!1&&(i.clearColor(ye,we,We,Qe),xe.copy(ce))},reset:function(){k=!1,re=null,xe.set(-1,0,0,0)}}}function n(){let k=!1,ce=!1,re=null,xe=null,ye=null;return{setReversed:function(we){if(ce!==we){let We=e.get("EXT_clip_control");we?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),ce=we;let Qe=ye;ye=null,this.setClear(Qe)}},getReversed:function(){return ce},setTest:function(we){we?J(i.DEPTH_TEST):se(i.DEPTH_TEST)},setMask:function(we){re!==we&&!k&&(i.depthMask(we),re=we)},setFunc:function(we){if(ce&&(we=_d[we]),xe!==we){switch(we){case Ja:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case $a:i.depthFunc(i.LESS);break;case ws:i.depthFunc(i.LEQUAL);break;case ja:i.depthFunc(i.EQUAL);break;case Qa:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=we}},setLocked:function(we){k=we},setClear:function(we){ye!==we&&(ye=we,ce&&(we=1-we),i.clearDepth(we))},reset:function(){k=!1,re=null,xe=null,ye=null,ce=!1}}}function s(){let k=!1,ce=null,re=null,xe=null,ye=null,we=null,We=null,Qe=null,_e=null;return{setTest:function(qe){k||(qe?J(i.STENCIL_TEST):se(i.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!k&&(i.stencilMask(qe),ce=qe)},setFunc:function(qe,$e,ve){(re!==qe||xe!==$e||ye!==ve)&&(i.stencilFunc(qe,$e,ve),re=qe,xe=$e,ye=ve)},setOp:function(qe,$e,ve){(we!==qe||We!==$e||Qe!==ve)&&(i.stencilOp(qe,$e,ve),we=qe,We=$e,Qe=ve)},setLocked:function(qe){k=qe},setClear:function(qe){_e!==qe&&(i.clearStencil(qe),_e=qe)},reset:function(){k=!1,ce=null,re=null,xe=null,ye=null,we=null,We=null,Qe=null,_e=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,d={},f={},p={},m=new WeakMap,g=[],y=null,u=!1,h=null,x=null,b=null,M=null,T=null,S=null,_=null,v=new at(0,0,0),P=0,R=!1,I=null,F=null,C=null,E=null,D=null,U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,V=0,B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(B)[1]),O=V>=1):B.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),O=V>=2);let G=null,X={},te=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Y=new Rt().fromArray(te),z=new Rt().fromArray(ae);function W(k,ce,re,xe){let ye=new Uint8Array(4),we=i.createTexture();i.bindTexture(k,we),i.texParameteri(k,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(k,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let We=0;We<re;We++)k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,ye):i.texImage2D(ce+We,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ye);return we}let K={};K[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),K[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),K[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(ws),be(!1),pe(Tc),J(i.CULL_FACE),de($i);function J(k){d[k]!==!0&&(i.enable(k),d[k]=!0)}function se(k){d[k]!==!1&&(i.disable(k),d[k]=!1)}function ge(k,ce){return p[k]!==ce?(i.bindFramebuffer(k,ce),p[k]=ce,k===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ce),k===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function fe(k,ce){let re=g,xe=!1;if(k){re=m.get(ce),re===void 0&&(re=[],m.set(ce,re));let ye=k.textures;if(re.length!==ye.length||re[0]!==i.COLOR_ATTACHMENT0){for(let we=0,We=ye.length;we<We;we++)re[we]=i.COLOR_ATTACHMENT0+we;re.length=ye.length,xe=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,xe=!0);xe&&i.drawBuffers(re)}function Pe(k){return y!==k?(i.useProgram(k),y=k,!0):!1}let Be={[ji]:i.FUNC_ADD,[zu]:i.FUNC_SUBTRACT,[ku]:i.FUNC_REVERSE_SUBTRACT};Be[Gu]=i.MIN,Be[Vu]=i.MAX;let ne={[Hu]:i.ZERO,[Wu]:i.ONE,[Xu]:i.SRC_COLOR,[Pc]:i.SRC_ALPHA,[$u]:i.SRC_ALPHA_SATURATE,[Ju]:i.DST_COLOR,[Yu]:i.DST_ALPHA,[qu]:i.ONE_MINUS_SRC_COLOR,[Ic]:i.ONE_MINUS_SRC_ALPHA,[Ku]:i.ONE_MINUS_DST_COLOR,[Zu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Qu]:i.ONE_MINUS_CONSTANT_COLOR,[ed]:i.CONSTANT_ALPHA,[td]:i.ONE_MINUS_CONSTANT_ALPHA};function de(k,ce,re,xe,ye,we,We,Qe,_e,qe){if(k===$i){u===!0&&(se(i.BLEND),u=!1);return}if(u===!1&&(J(i.BLEND),u=!0),k!==Bu){if(k!==h||qe!==R){if((x!==ji||T!==ji)&&(i.blendEquation(i.FUNC_ADD),x=ji,T=ji),qe)switch(k){case Vs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFunc(i.ONE,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",k);break}else switch(k){case Vs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ec:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Cc:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",k);break}b=null,M=null,S=null,_=null,v.set(0,0,0),P=0,h=k,R=qe}return}ye=ye||ce,we=we||re,We=We||xe,(ce!==x||ye!==T)&&(i.blendEquationSeparate(Be[ce],Be[ye]),x=ce,T=ye),(re!==b||xe!==M||we!==S||We!==_)&&(i.blendFuncSeparate(ne[re],ne[xe],ne[we],ne[We]),b=re,M=xe,S=we,_=We),(Qe.equals(v)===!1||_e!==P)&&(i.blendColor(Qe.r,Qe.g,Qe.b,_e),v.copy(Qe),P=_e),h=k,R=!1}function Le(k,ce){k.side===Rn?se(i.CULL_FACE):J(i.CULL_FACE);let re=k.side===ln;ce&&(re=!re),be(re),k.blending===Vs&&k.transparent===!1?de($i):de(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let xe=k.stencilWrite;o.setTest(xe),xe&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Oe(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):se(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(k){I!==k&&(k?i.frontFace(i.CW):i.frontFace(i.CCW),I=k)}function pe(k){k!==Fu?(J(i.CULL_FACE),k!==F&&(k===Tc?i.cullFace(i.BACK):k===Ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):se(i.CULL_FACE),F=k}function Ee(k){k!==C&&(O&&i.lineWidth(k),C=k)}function Oe(k,ce,re){k?(J(i.POLYGON_OFFSET_FILL),(E!==ce||D!==re)&&(E=ce,D=re,a.getReversed()&&(ce=-ce,re=-re),i.polygonOffset(ce,re))):se(i.POLYGON_OFFSET_FILL)}function De(k){k?J(i.SCISSOR_TEST):se(i.SCISSOR_TEST)}function Ne(k){k===void 0&&(k=i.TEXTURE0+U-1),G!==k&&(i.activeTexture(k),G=k)}function ke(k,ce,re){re===void 0&&(G===null?re=i.TEXTURE0+U-1:re=G);let xe=X[re];xe===void 0&&(xe={type:void 0,texture:void 0},X[re]=xe),(xe.type!==k||xe.texture!==ce)&&(G!==re&&(i.activeTexture(re),G=re),i.bindTexture(k,ce||K[k]),xe.type=k,xe.texture=ce)}function H(){let k=X[G];k!==void 0&&k.type!==void 0&&(i.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Nt(){try{i.compressedTexImage2D(...arguments)}catch(k){Ke("WebGLState:",k)}}function ut(){try{i.compressedTexImage3D(...arguments)}catch(k){Ke("WebGLState:",k)}}function mt(){try{i.texSubImage2D(...arguments)}catch(k){Ke("WebGLState:",k)}}function Ie(){try{i.texSubImage3D(...arguments)}catch(k){Ke("WebGLState:",k)}}function Pt(){try{i.compressedTexSubImage2D(...arguments)}catch(k){Ke("WebGLState:",k)}}function Ye(){try{i.compressedTexSubImage3D(...arguments)}catch(k){Ke("WebGLState:",k)}}function Je(){try{i.texStorage2D(...arguments)}catch(k){Ke("WebGLState:",k)}}function N(){try{i.texStorage3D(...arguments)}catch(k){Ke("WebGLState:",k)}}function w(){try{i.texImage2D(...arguments)}catch(k){Ke("WebGLState:",k)}}function Q(){try{i.texImage3D(...arguments)}catch(k){Ke("WebGLState:",k)}}function me(k){return f[k]!==void 0?f[k]:i.getParameter(k)}function he(k,ce){f[k]!==ce&&(i.pixelStorei(k,ce),f[k]=ce)}function Me(k){Y.equals(k)===!1&&(i.scissor(k.x,k.y,k.z,k.w),Y.copy(k))}function Ce(k){z.equals(k)===!1&&(i.viewport(k.x,k.y,k.z,k.w),z.copy(k))}function le(k,ce){let re=c.get(ce);re===void 0&&(re=new WeakMap,c.set(ce,re));let xe=re.get(k);xe===void 0&&(xe=i.getUniformBlockIndex(ce,k.name),i.uniformBlockBinding(ce,xe,xe),re.set(k,xe))}function oe(k,ce,re){let ye=c.get(ce).get(k);l[ye]!==re&&(i.bindBufferBase(i.UNIFORM_BUFFER,ye,re),l[ye]=re)}function Ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},f={},G=null,X={},p={},l={},m=new WeakMap,g=[],y=null,u=!1,h=null,x=null,b=null,M=null,T=null,S=null,_=null,v=new at(0,0,0),P=0,R=!1,I=null,F=null,C=null,E=null,D=null,Y.set(0,0,i.canvas.width,i.canvas.height),z.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:se,bindFramebuffer:ge,drawBuffers:fe,useProgram:Pe,setBlending:de,setMaterial:Le,setFlipSided:be,setCullFace:pe,setLineWidth:Ee,setPolygonOffset:Oe,setScissorTest:De,activeTexture:Ne,bindTexture:ke,unbindTexture:H,compressedTexImage2D:Nt,compressedTexImage3D:ut,texImage2D:w,texImage3D:Q,pixelStorei:he,getParameter:me,updateUBOMapping:le,uniformBlockBinding:oe,texStorage2D:Je,texStorage3D:N,texSubImage2D:mt,texSubImage3D:Ie,compressedTexSubImage2D:Pt,compressedTexSubImage3D:Ye,scissor:Me,viewport:Ce,reset:Ae}}function Zx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Fe,d=new WeakMap,f=new Set,p,m=new WeakMap,g=new Set,y=new FinalizationRegistry(N=>g.delete(N)),u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function h(N,w){return u?new OffscreenCanvas(N,w):Es("canvas")}function x(N,w,Q){let me=1,he=Je(N);if((he.width>Q||he.height>Q)&&(me=Q/Math.max(he.width,he.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){let Me=Math.floor(me*he.width),Ce=Math.floor(me*he.height);p===void 0&&(p=h(Me,Ce));let le=w?h(Me,Ce):p;return le.width=Me,le.height=Ce,le.getContext("2d").drawImage(N,0,0,Me,Ce),Ze("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Ce+")."),le}else return"data"in N&&Ze("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),N;return N}function b(N){return N.generateMipmaps}function M(N){i.generateMipmap(N)}function T(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(N,w,Q,me,he,Me=!1){if(N!==null){if(i[N]!==void 0)return i[N];Ze("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Ce;me&&(Ce=e.get("EXT_texture_norm16"),Ce||Ze("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let le=w;if(w===i.RED&&(Q===i.FLOAT&&(le=i.R32F),Q===i.HALF_FLOAT&&(le=i.R16F),Q===i.UNSIGNED_BYTE&&(le=i.R8),Q===i.UNSIGNED_SHORT&&Ce&&(le=Ce.R16_EXT),Q===i.SHORT&&Ce&&(le=Ce.R16_SNORM_EXT)),w===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.R8UI),Q===i.UNSIGNED_SHORT&&(le=i.R16UI),Q===i.UNSIGNED_INT&&(le=i.R32UI),Q===i.BYTE&&(le=i.R8I),Q===i.SHORT&&(le=i.R16I),Q===i.INT&&(le=i.R32I)),w===i.RG&&(Q===i.FLOAT&&(le=i.RG32F),Q===i.HALF_FLOAT&&(le=i.RG16F),Q===i.UNSIGNED_BYTE&&(le=i.RG8),Q===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RG16_EXT),Q===i.SHORT&&Ce&&(le=Ce.RG16_SNORM_EXT)),w===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RG8UI),Q===i.UNSIGNED_SHORT&&(le=i.RG16UI),Q===i.UNSIGNED_INT&&(le=i.RG32UI),Q===i.BYTE&&(le=i.RG8I),Q===i.SHORT&&(le=i.RG16I),Q===i.INT&&(le=i.RG32I)),w===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGB16UI),Q===i.UNSIGNED_INT&&(le=i.RGB32UI),Q===i.BYTE&&(le=i.RGB8I),Q===i.SHORT&&(le=i.RGB16I),Q===i.INT&&(le=i.RGB32I)),w===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(le=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(le=i.RGBA16UI),Q===i.UNSIGNED_INT&&(le=i.RGBA32UI),Q===i.BYTE&&(le=i.RGBA8I),Q===i.SHORT&&(le=i.RGBA16I),Q===i.INT&&(le=i.RGBA32I)),w===i.RGB&&(Q===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RGB16_EXT),Q===i.SHORT&&Ce&&(le=Ce.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(le=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(le=i.R11F_G11F_B10F)),w===i.RGBA){let oe=Me?dr:pt.getTransfer(he);Q===i.FLOAT&&(le=i.RGBA32F),Q===i.HALF_FLOAT&&(le=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(le=oe===vt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&Ce&&(le=Ce.RGBA16_EXT),Q===i.SHORT&&Ce&&(le=Ce.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(le=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(le=i.RGB5_A1)}return(le===i.R16F||le===i.R32F||le===i.RG16F||le===i.RG32F||le===i.RGBA16F||le===i.RGBA32F)&&e.get("EXT_color_buffer_float"),le}function _(N,w){let Q;return N?w===null||w===Fn||w===es?Q=i.DEPTH24_STENCIL8:w===cn?Q=i.DEPTH32F_STENCIL8:w===Xs&&(Q=i.DEPTH24_STENCIL8,Ze("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Fn||w===es?Q=i.DEPTH_COMPONENT24:w===cn?Q=i.DEPTH_COMPONENT32F:w===Xs&&(Q=i.DEPTH_COMPONENT16),Q}function v(N,w){return b(N)===!0||N.isFramebufferTexture&&N.minFilter!==Zt&&N.minFilter!==Ft?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function P(N){let w=new WeakRef(N);n.get(N).__ref=w,g.add(w),y.register(N,w,w)}function R(N){let w=n.get(N).__ref;w!==void 0&&(g.delete(w),y.unregister(w))}function I(N){C(N.target)}function F(N){E(N.target)}function C(N){N.removeEventListener("dispose",I),R(N),U(N),N.isVideoTexture&&d.delete(N),N.isHTMLTexture&&f.delete(N)}function E(N){N.removeEventListener("dispose",F),R(N),V(N)}function D(){for(let N of g){let w=N.deref();w!==void 0&&(w.isRenderTarget===!0?E(w):C(w))}g.clear(),f.clear()}function U(N){let w=n.get(N);if(w.__webglInit===void 0)return;let Q=N.source,me=m.get(Q);if(me){let he=me[w.__cacheKey];he.usedTimes--,he.usedTimes===0&&O(N),Object.keys(me).length===0&&m.delete(Q)}n.remove(N)}function O(N){let w=n.get(N);i.deleteTexture(w.__webglTexture);let Q=N.source,me=m.get(Q);delete me[w.__cacheKey],a.memory.textures--}function V(N){let w=n.get(N);w.__depthDisposeCallback&&w.__depthDisposeCallback();let Q=N.depthTexture;if(Q&&Q.renderTarget===N&&C(Q),N.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(w.__webglFramebuffer[he]))for(let Me=0;Me<w.__webglFramebuffer[he].length;Me++)i.deleteFramebuffer(w.__webglFramebuffer[he][Me]);else i.deleteFramebuffer(w.__webglFramebuffer[he]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[he])}else{if(Array.isArray(w.__webglFramebuffer))for(let he=0;he<w.__webglFramebuffer.length;he++)i.deleteFramebuffer(w.__webglFramebuffer[he]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let he=0;he<w.__webglColorRenderbuffer.length;he++)w.__webglColorRenderbuffer[he]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[he]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let me=N.textures;for(let he=0,Me=me.length;he<Me;he++){let Ce=n.get(me[he]);Ce.__webglTexture&&(i.deleteTexture(Ce.__webglTexture),a.memory.textures--),n.remove(me[he])}n.remove(N)}let B=0;function G(){B=0}function X(){return B}function te(N){B=N}function ae(){let N=B;return N>=s.maxTextures&&Ze("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),B+=1,N}function Y(N){let w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.mipmapsAutoUpdate),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function z(N,w){let Q=n.get(N);if(N.isVideoTexture&&Pt(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&Q.__version!==N.version){let me=N.image;if(me===null)Ze("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)Ze("WebGLRenderer: Texture marked for update but image is incomplete");else{Le(Q,N,w);return}}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+w)}function W(N,w){let Q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Le(Q,N,w);return}else N.isExternalTexture&&(Q.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+w)}function K(N,w){let Q=n.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&Q.__version!==N.version){Le(Q,N,w);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+w)}function J(N,w){let Q=n.get(N);if(N.version>0&&Q.__version!==N.version){be(Q,N,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+w)}let se={[As]:i.REPEAT,[En]:i.CLAMP_TO_EDGE,[no]:i.MIRRORED_REPEAT},ge={[Zt]:i.NEAREST,[sd]:i.NEAREST_MIPMAP_NEAREST,[Kr]:i.NEAREST_MIPMAP_LINEAR,[Ft]:i.LINEAR,[Do]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},fe={[ld]:i.NEVER,[Zc]:i.ALWAYS,[cd]:i.LESS,[qc]:i.LEQUAL,[hd]:i.EQUAL,[Yc]:i.GEQUAL,[ud]:i.GREATER,[dd]:i.NOTEQUAL};function Pe(N,w){if(w.type===cn&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ft||w.magFilter===Do||w.magFilter===Kr||w.magFilter===Yn||w.minFilter===Ft||w.minFilter===Do||w.minFilter===Kr||w.minFilter===Yn)&&Ze("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,se[w.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,se[w.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,se[w.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,ge[w.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,ge[w.minFilter]),w.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Zt||w.minFilter!==Kr&&w.minFilter!==Yn||w.type===cn&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function Be(N,w){let Q=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",I),P(w));let me=w.source,he=m.get(me);he===void 0&&(he={},m.set(me,he));let Me=Y(w);if(Me!==N.__cacheKey){he[Me]===void 0&&(he[Me]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,Q=!0),he[Me].usedTimes++;let Ce=he[N.__cacheKey];Ce!==void 0&&(he[N.__cacheKey].usedTimes--,Ce.usedTimes===0&&O(w)),N.__cacheKey=Me,N.__webglTexture=he[Me].texture}return Q}function ne(N,w,Q){return Math.floor(Math.floor(N/Q)/w)}function de(N,w,Q,me){let Me=N.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,w.width,w.height,Q,me,w.data);else{Me.sort((k,ce)=>k.start-ce.start);let Ce=0;for(let k=1;k<Me.length;k++){let ce=Me[Ce],re=Me[k],xe=ce.start+ce.count,ye=ne(re.start,w.width,4),we=ne(ce.start,w.width,4);re.start<=xe+1&&ye===we&&ne(re.start+re.count-1,w.width,4)===ye?ce.count=Math.max(ce.count,re.start+re.count-ce.start):(++Ce,Me[Ce]=re)}Me.length=Ce+1;let le=t.getParameter(i.UNPACK_ROW_LENGTH),oe=t.getParameter(i.UNPACK_SKIP_PIXELS),Ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,w.width);for(let k=0,ce=Me.length;k<ce;k++){let re=Me[k],xe=Math.floor(re.start/4),ye=Math.ceil(re.count/4),we=xe%w.width,We=Math.floor(xe/w.width),Qe=ye,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,we),t.pixelStorei(i.UNPACK_SKIP_ROWS,We),t.texSubImage2D(i.TEXTURE_2D,0,we,We,Qe,_e,Q,me,w.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,le),t.pixelStorei(i.UNPACK_SKIP_PIXELS,oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae)}}function Le(N,w,Q){let me=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=i.TEXTURE_3D);let he=Be(N,w),Me=w.source;t.bindTexture(me,N.__webglTexture,i.TEXTURE0+Q);let Ce=n.get(Me);if(Me.version!==Ce.__version||he===!0){if(t.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){let _e=pt.getPrimaries(pt.workingColorSpace),qe=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),$e=w.colorSpace===fi||_e===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e)}t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment);let oe=x(w.image,!1,s.maxTextureSize);oe=Ye(w,oe);let Ae=r.convert(w.format,w.colorSpace),k=r.convert(w.type),ce=S(w.internalFormat,Ae,k,w.normalized,w.colorSpace,w.isVideoTexture);Pe(me,w);let re,xe=w.mipmaps,ye=w.isVideoTexture!==!0,we=Ce.__version===void 0||he===!0,We=Me.dataReady,Qe=v(w,oe);if(w.isDepthTexture)ce=_(w.format===di,w.type),we&&(ye?t.texStorage2D(i.TEXTURE_2D,1,ce,oe.width,oe.height):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ae,k,null));else if(w.isDataTexture)if(xe.length>0){ye&&we&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,xe[0].width,xe[0].height);for(let _e=0,qe=xe.length;_e<qe;_e++)re=xe[_e],ye?We&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ae,k,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ae,k,re.data);w.generateMipmaps=!1}else ye?(we&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,oe.width,oe.height),We&&de(w,oe,Ae,k)):t.texImage2D(i.TEXTURE_2D,0,ce,oe.width,oe.height,0,Ae,k,oe.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){ye&&we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,ce,xe[0].width,xe[0].height,oe.depth);for(let _e=0,qe=xe.length;_e<qe;_e++)if(re=xe[_e],w.format!==On)if(Ae!==null)if(ye){if(We)if(w.layerUpdates.size>0){let $e=rh(re.width,re.height,w.format,w.type);for(let ve of w.layerUpdates){let st=re.data.subarray(ve*$e/re.data.BYTES_PER_ELEMENT,(ve+1)*$e/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,ve,re.width,re.height,1,Ae,st)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ae,re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,re.data,0,0);else Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ye?We&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,re.width,re.height,oe.depth,Ae,k,re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,ce,re.width,re.height,oe.depth,0,Ae,k,re.data);w.layerUpdates.size>0&&w.clearLayerUpdates()}else{ye&&we&&t.texStorage2D(i.TEXTURE_2D,Qe,ce,xe[0].width,xe[0].height);for(let _e=0,qe=xe.length;_e<qe;_e++)re=xe[_e],w.format!==On?Ae!==null?ye?We&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ae,re.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,re.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ye?We&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,re.width,re.height,Ae,k,re.data):t.texImage2D(i.TEXTURE_2D,_e,ce,re.width,re.height,0,Ae,k,re.data)}else if(w.isDataArrayTexture)if(ye){if(we&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Qe,ce,oe.width,oe.height,oe.depth),We)if(w.layerUpdates.size>0){let _e=rh(oe.width,oe.height,w.format,w.type);for(let qe of w.layerUpdates){let $e=oe.data.subarray(qe*_e/oe.data.BYTES_PER_ELEMENT,(qe+1)*_e/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,qe,oe.width,oe.height,1,Ae,k,$e)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,Ae,k,oe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ce,oe.width,oe.height,oe.depth,0,Ae,k,oe.data);else if(w.isData3DTexture)ye?(we&&t.texStorage3D(i.TEXTURE_3D,Qe,ce,oe.width,oe.height,oe.depth),We&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,Ae,k,oe.data)):t.texImage3D(i.TEXTURE_3D,0,ce,oe.width,oe.height,oe.depth,0,Ae,k,oe.data);else if(w.isFramebufferTexture){if(we)if(ye)t.texStorage2D(i.TEXTURE_2D,Qe,ce,oe.width,oe.height);else{let _e=oe.width,qe=oe.height;for(let $e=0;$e<Qe;$e++)t.texImage2D(i.TEXTURE_2D,$e,ce,_e,qe,0,Ae,k,null),_e>>=1,qe>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in i){let _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),oe.parentNode!==_e){_e.appendChild(oe),f.add(w),_e.onpaint=qe=>{let $e=qe.changedElements;for(let ve of f)$e.includes(ve.image)&&(ve.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,oe);else{let $e=i.RGBA,ve=i.RGBA,st=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,$e,ve,st,oe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(xe.length>0){if(ye&&we){let _e=Je(xe[0]);t.texStorage2D(i.TEXTURE_2D,Qe,ce,_e.width,_e.height)}for(let _e=0,qe=xe.length;_e<qe;_e++)re=xe[_e],ye?We&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Ae,k,re):t.texImage2D(i.TEXTURE_2D,_e,ce,Ae,k,re);w.generateMipmaps=!1}else if(ye){if(we){let _e=Je(oe);t.texStorage2D(i.TEXTURE_2D,Qe,ce,_e.width,_e.height)}We&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ae,k,oe)}else t.texImage2D(i.TEXTURE_2D,0,ce,Ae,k,oe);b(w)&&w.mipmapsAutoUpdate===!0&&M(me),Ce.__version=Me.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function be(N,w,Q){if(w.image.length!==6)return;let me=Be(N,w),he=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+Q);let Me=n.get(he);if(he.version!==Me.__version||me===!0){t.activeTexture(i.TEXTURE0+Q);let Ce=pt.getPrimaries(pt.workingColorSpace),le=w.colorSpace===fi?null:pt.getPrimaries(w.colorSpace),oe=w.colorSpace===fi||Ce===le?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,k=w.image[0]&&w.image[0].isDataTexture,ce=[];for(let ve=0;ve<6;ve++)!Ae&&!k?ce[ve]=x(w.image[ve],!0,s.maxCubemapSize):ce[ve]=k?w.image[ve].image:w.image[ve],ce[ve]=Ye(w,ce[ve]);let re=ce[0],xe=r.convert(w.format,w.colorSpace),ye=r.convert(w.type),we=S(w.internalFormat,xe,ye,w.normalized,w.colorSpace),We=w.isVideoTexture!==!0,Qe=Me.__version===void 0||me===!0,_e=he.dataReady,qe=v(w,re);Pe(i.TEXTURE_CUBE_MAP,w);let $e;if(w.isDepthTexture){if(we=_(w.format===di,w.type),Qe)if(We)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,we,re.width,re.height);else for(let ve=0;ve<6;ve++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,re.width,re.height,0,xe,ye,null)}else if(Ae){We&&Qe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,we,re.width,re.height);for(let ve=0;ve<6;ve++){$e=ce[ve].mipmaps;for(let st=0;st<$e.length;st++){let Ot=$e[st];w.format!==On?xe!==null?We?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st,0,0,Ot.width,Ot.height,xe,Ot.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st,we,Ot.width,Ot.height,0,Ot.data):Ze("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st,0,0,Ot.width,Ot.height,xe,ye,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st,we,Ot.width,Ot.height,0,xe,ye,Ot.data)}}}else{if($e=w.mipmaps,We&&Qe){$e.length>0&&qe++;let ve=Je(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,qe,we,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(k){We?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,ce[ve].width,ce[ve].height,xe,ye,ce[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,ce[ve].width,ce[ve].height,0,xe,ye,ce[ve].data);for(let st=0;st<$e.length;st++){let Kn=$e[st].image[ve].image;We?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st+1,0,0,Kn.width,Kn.height,xe,ye,Kn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st+1,we,Kn.width,Kn.height,0,xe,ye,Kn.data)}}else{We?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,xe,ye,ce[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,we,xe,ye,ce[ve]);for(let st=0;st<$e.length;st++){let Ot=$e[st];We?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st+1,0,0,xe,ye,Ot.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,st+1,we,xe,ye,Ot.image[ve])}}}b(w)&&w.mipmapsAutoUpdate===!0&&M(i.TEXTURE_CUBE_MAP),Me.__version=he.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function pe(N,w,Q,me,he,Me){let Ce=r.convert(Q.format,Q.colorSpace),le=r.convert(Q.type),oe=S(Q.internalFormat,Ce,le,Q.normalized,Q.colorSpace),Ae=n.get(w),k=n.get(Q);if(k.__renderTarget=w,!Ae.__hasExternalTextures){let ce=Math.max(1,w.width>>Me),re=Math.max(1,w.height>>Me);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,oe,ce,re,w.depth,0,Ce,le,null):t.texImage2D(he,Me,oe,ce,re,0,Ce,le,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,me,he,k.__webglTexture,0,mt(w)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,me,he,k.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(N,w,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,N),w.depthBuffer){let me=w.depthTexture,he=me&&me.isDepthTexture?me.type:null,Me=_(w.stencilBuffer,he),Ce=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(w),Me,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(w),Me,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Me,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,N)}else{let me=w.textures;for(let he=0;he<me.length;he++){let Me=me[he],Ce=r.convert(Me.format,Me.colorSpace),le=r.convert(Me.type),oe=S(Me.internalFormat,Ce,le,Me.normalized,Me.colorSpace);Ie(w)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt(w),oe,w.width,w.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt(w),oe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,oe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Oe(N,w,Q){let me=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let he=n.get(w.depthTexture);he.__renderTarget=w;let Me=me?w.depthTexture.image[0]:w.depthTexture.image;(!he.__webglTexture||Me.width!==w.width||Me.height!==w.height)&&(Me.width=w.width,Me.height=w.height,w.depthTexture.needsUpdate=!0),me?J(w.depthTexture,0):z(w.depthTexture,0);let Ce=he.__webglTexture,le=mt(w),oe=me?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,Ae=w.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(w.depthTexture.format===hi)Ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,oe,Ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,oe,Ce,0);else if(w.depthTexture.format===di)Ie(w)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ae,oe,Ce,0,le):i.framebufferTexture2D(i.FRAMEBUFFER,Ae,oe,Ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(N){let w=n.get(N),Q=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){let me=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){let he=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",he)};me.addEventListener("dispose",he),w.__depthDisposeCallback=he}w.__boundDepthTexture=me}if(N.depthTexture&&!w.__autoAllocateDepthBuffer)if(Q)for(let me=0;me<6;me++)Oe(w.__webglFramebuffer[me],N,me);else N.texture.mipmaps.length>0?Oe(w.__webglFramebuffer[0],N,0):Oe(w.__webglFramebuffer,N,0);else if(Q){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=i.createRenderbuffer(),Ee(w.__webglDepthbuffer[me],N,!1);else{let he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[me];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Me)}}else if(N.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),Ee(w.__webglDepthbuffer,N,!1);else{let he=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(N,w,Q){let me=n.get(N);w!==void 0&&pe(me.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&De(N)}function ke(N){let w=N.texture,Q=n.get(N),me=n.get(w);N.addEventListener("dispose",F),P(N);let he=N.textures,Me=N.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture()),me.__version=w.version,a.memory.textures++),Me){Q.__webglFramebuffer=[];for(let le=0;le<6;le++)if(w.mipmaps.length>0){Q.__webglFramebuffer[le]=[];for(let oe=0;oe<w.mipmaps.length;oe++)Q.__webglFramebuffer[le][oe]=i.createFramebuffer()}else Q.__webglFramebuffer[le]=i.createFramebuffer()}else{if(w.mipmaps.length>0){Q.__webglFramebuffer=[];for(let le=0;le<w.mipmaps.length;le++)Q.__webglFramebuffer[le]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let le=0,oe=he.length;le<oe;le++){let Ae=n.get(he[le]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(N.samples>0&&Ie(N)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let le=0;le<he.length;le++){let oe=he[le];Q.__webglColorRenderbuffer[le]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[le]);let Ae=r.convert(oe.format,oe.colorSpace),k=r.convert(oe.type),ce=S(oe.internalFormat,Ae,k,oe.normalized,oe.colorSpace,N.isXRRenderTarget===!0),re=mt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,re,ce,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,Q.__webglColorRenderbuffer[le])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(Q.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Pe(i.TEXTURE_CUBE_MAP,w);for(let le=0;le<6;le++)if(w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)pe(Q.__webglFramebuffer[le][oe],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,oe);else pe(Q.__webglFramebuffer[le],N,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);b(w)?M(i.TEXTURE_CUBE_MAP):w.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}else if(Ce){for(let le=0,oe=he.length;le<oe;le++){let Ae=he[le],k=n.get(Ae),ce=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ce=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,k.__webglTexture),Pe(ce,Ae),pe(Q.__webglFramebuffer,N,Ae,i.COLOR_ATTACHMENT0+le,ce,0),b(Ae)&&M(ce)}t.unbindTexture()}else{let le=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(le=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,me.__webglTexture),Pe(le,w),w.mipmaps.length>0)for(let oe=0;oe<w.mipmaps.length;oe++)pe(Q.__webglFramebuffer[oe],N,w,i.COLOR_ATTACHMENT0,le,oe);else pe(Q.__webglFramebuffer,N,w,i.COLOR_ATTACHMENT0,le,0);b(w)?M(le):w.mipmaps.length>0&&i.texParameteri(le,i.TEXTURE_MAX_LEVEL,w.mipmaps.length-1),t.unbindTexture()}N.depthBuffer&&De(N)}function H(N){let w=N.textures;for(let Q=0,me=w.length;Q<me;Q++){let he=w[Q];if(b(he)&&he.mipmapsAutoUpdate===!0){let Me=T(N),Ce=n.get(he).__webglTexture;t.bindTexture(Me,Ce),M(Me),t.unbindTexture()}}}let Nt=[];function ut(N){if(N.samples>0){if(Ie(N)===!1){let w=N.textures,Q=N.width,me=N.height,he=i.COLOR_BUFFER_BIT,Me=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=n.get(N),le=w.length>1;if(le)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),N.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),le){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);let k=n.get(w[Ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,k,0)}i.blitFramebuffer(0,0,Q,me,0,0,Q,me,he,i.NEAREST),l===!0&&(Nt.length=0,Nt.push(i.COLOR_ATTACHMENT0+Ae),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&Nt.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Nt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),le)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ae]);let k=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ae,i.TEXTURE_2D,k,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&l){let w=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function mt(N){return Math.min(s.maxSamples,N.samples)}function Ie(N){let w=n.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Pt(N){let w=a.render.frame;d.get(N)!==w&&(d.set(N,w),N.update())}function Ye(N,w){let Q=N.colorSpace,me=N.format,he=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Q!==qi&&Q!==fi&&(pt.getTransfer(Q)===vt?(me!==On||he!==mn)&&Ze("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",Q)),w}function Je(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(c.width=N.naturalWidth||N.width,c.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(c.width=N.displayWidth,c.height=N.displayHeight):(c.width=N.width,c.height=N.height),c}this.allocateTextureUnit=ae,this.resetTextureUnits=G,this.getTextureUnits=X,this.setTextureUnits=te,this.setTexture2D=z,this.setTexture2DArray=W,this.setTexture3D=K,this.setTextureCube=J,this.rebindTextures=Ne,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=H,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ie,this.dispose=D}function Jx(i,e){function t(n,s=fi){let r,a=pt.getTransfer(s);if(n===mn)return i.UNSIGNED_BYTE;if(n===Uo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===kc)return i.BYTE;if(n===Gc)return i.SHORT;if(n===Xs)return i.UNSIGNED_SHORT;if(n===No)return i.INT;if(n===Fn)return i.UNSIGNED_INT;if(n===cn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===Wc)return i.ALPHA;if(n===Xc)return i.RGB;if(n===On)return i.RGBA;if(n===hi)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Oo)return i.RED;if(n===Bo)return i.RED_INTEGER;if(n===Ui)return i.RG;if(n===zo)return i.RG_INTEGER;if(n===ko)return i.RGBA_INTEGER;if(n===$r||n===jr||n===Qr||n===ea)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===$r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===$r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===jr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ea)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Go||n===Vo||n===Ho||n===Wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo||n===Zo||n===Jo||n===ta||n===Ko)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xo||n===qo)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zo)return r.COMPRESSED_R11_EAC;if(n===Jo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ta)return r.COMPRESSED_RG11_EAC;if(n===Ko)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$o||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===$o)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ul||n===dl||n===fl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ul)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===pl||n===ml||n===na||n===gl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===pl)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===na)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===es?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Kx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new br(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xn({vertexShader:Kx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new pn(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vh=class extends Nn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,p=null,m=null,g=null,y=typeof XRWebGLBinding<"u",u=new yh,h={},x=t.getContextAttributes(),b=null,M=null,T=[],S=[],_=new Fe,v=null,P=null,R=new en;R.viewport=new Rt;let I=new en;I.viewport=new Rt;let F=[R,I],C=new Ro,E=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let z=T[Y];return z===void 0&&(z=new Ls,T[Y]=z),z.getTargetRaySpace()},this.getControllerGrip=function(Y){let z=T[Y];return z===void 0&&(z=new Ls,T[Y]=z),z.getGripSpace()},this.getHand=function(Y){let z=T[Y];return z===void 0&&(z=new Ls,T[Y]=z),z.getHandSpace()};function U(Y){let z=S.indexOf(Y.inputSource);if(z===-1)return;let W=T[z];W!==void 0&&(W.update(Y.inputSource,Y.frame,c||a),W.dispatchEvent({type:Y.type,data:Y.inputSource}))}function O(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",V);for(let Y=0;Y<T.length;Y++){let z=S[Y];z!==null&&(S[Y]=null,T[Y].disconnect(z))}E=null,D=null,u.reset();for(let Y in h)delete h[Y];if(e.setRenderTarget(b),m=null,p=null,f=null,s=null,M=null,ae.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(_.width,_.height,!1),P!==null){let Y=P.camera;Y.fov=P.fov,Y.zoom=P.zoom,Y.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&Ze("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&Ze("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return f===null&&y&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(b=e.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",O),s.addEventListener("inputsourceschange",V),x.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(_),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let W=null,K=null,J=null;x.depth&&(J=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=x.stencil?di:hi,K=x.stencil?es:Fn);let se={colorFormat:t.RGBA8,depthFormat:J,scaleFactor:r};f=this.getBinding(),p=f.createProjectionLayer(se),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new bn(p.textureWidth,p.textureHeight,{format:On,type:mn,depthTexture:new ui(p.textureWidth,p.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let W={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,W),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new bn(m.framebufferWidth,m.framebufferHeight,{format:On,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ae.setContext(s),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return u.getDepthTexture()};function V(Y){for(let z=0;z<Y.removed.length;z++){let W=Y.removed[z],K=S.indexOf(W);K>=0&&(S[K]=null,T[K].disconnect(W))}for(let z=0;z<Y.added.length;z++){let W=Y.added[z],K=S.indexOf(W);if(K===-1){for(let se=0;se<T.length;se++)if(se>=S.length){S.push(W),K=se;break}else if(S[se]===null){S[se]=W,K=se;break}if(K===-1)break}let J=T[K];J&&J.connect(W)}}function B(Y,z){z===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(z.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let z=Y.near,W=Y.far;u.texture!==null&&(u.depthNear>0&&(z=u.depthNear),u.depthFar>0&&(W=u.depthFar)),C.near=I.near=R.near=z,C.far=I.far=R.far=W,(E!==C.near||D!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),E=C.near,D=C.far),C.layers.mask=Y.layers.mask|6,R.layers.mask=C.layers.mask&-5,I.layers.mask=C.layers.mask&-3;let K=Y.parent,J=C.cameras;B(C,K);for(let se=0;se<J.length;se++)B(J[se],K);C.projectionMatrix.copy(R.projectionMatrix),C.projectionMatrixInverse.copy(R.projectionMatrixInverse),P===null&&Y.isPerspectiveCamera&&(P={camera:Y,fov:Y.fov,zoom:Y.zoom}),G(Y,C,K)};function G(Y,z,W){W===null?Y.matrix.copy(z.matrixWorld):(Y.matrix.copy(W.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(z.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(z.projectionMatrix),Y.projectionMatrixInverse.copy(z.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Rs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(Y){l=Y,p!==null&&(p.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return u.texture!==null},this.getDepthSensingMesh=function(){return u.getMesh(C)},this.getCameraTexture=function(Y){return h[Y]};let X=null;function te(Y,z){if(d=z.getViewerPose(c||a),g=z,d!==null){let W=d.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let K=!1;W.length!==C.cameras.length&&(C.cameras.length=0,K=!0);for(let fe=0;fe<W.length;fe++){let Pe=W[fe],Be=null;if(m!==null)Be=m.getViewport(Pe);else{let de=f.getViewSubImage(p,Pe);Be=de.viewport,fe===0&&(e.setRenderTargetTextures(M,de.colorTexture,de.depthStencilTexture),e.setRenderTarget(M))}let ne=F[fe];ne===void 0&&(ne=new en,ne.layers.enable(fe),ne.viewport=new Rt,F[fe]=ne),ne.matrix.fromArray(Pe.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Pe.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Be.x,Be.y,Be.width,Be.height),fe===0&&(C.matrix.copy(ne.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),K===!0&&C.cameras.push(ne)}let J=s.enabledFeatures;if(J&&J.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){f=n.getBinding();let fe=f.getDepthInformation(W[0]);fe&&fe.isValid&&fe.texture&&u.init(fe,s.renderState)}if(J&&J.includes("camera-access")&&y){e.state.unbindTexture(),f=n.getBinding();for(let fe=0;fe<W.length;fe++){let Pe=W[fe].camera;if(Pe){let Be=h[Pe];Be||(Be=new br,h[Pe]=Be);let ne=f.getCameraImage(Pe);Be.sourceTexture=ne}}}}for(let W=0;W<T.length;W++){let K=S[W],J=T[W];K!==null&&J!==void 0&&J.update(K,z,c||a)}X&&X(Y,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}let ae=new Jd;ae.setAnimationLoop(te),this.setAnimationLoop=function(Y){X=Y},this.dispose=function(){}}},jx=new _t,af=new it;af.set(-1,0,0,0,1,0,0,0,1);function Qx(i,e){function t(u,h){u.matrixAutoUpdate===!0&&u.updateMatrix(),h.value.copy(u.matrix)}function n(u,h){h.color.getRGB(u.fogColor.value,nh(i)),h.isFog?(u.fogNear.value=h.near,u.fogFar.value=h.far):h.isFogExp2&&(u.fogDensity.value=h.density)}function s(u,h,x,b,M){h.isNodeMaterial?h.uniformsNeedUpdate=!1:h.isMeshBasicMaterial?r(u,h):h.isMeshLambertMaterial?(r(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(r(u,h),f(u,h)):h.isMeshPhongMaterial?(r(u,h),d(u,h),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(r(u,h),p(u,h),h.isMeshPhysicalMaterial&&m(u,h,M)):h.isMeshMatcapMaterial?(r(u,h),g(u,h)):h.isMeshDepthMaterial?r(u,h):h.isMeshDistanceMaterial?(r(u,h),y(u,h)):h.isMeshNormalMaterial?r(u,h):h.isLineBasicMaterial?(a(u,h),h.isLineDashedMaterial&&o(u,h)):h.isPointsMaterial?l(u,h,x,b):h.isSpriteMaterial?c(u,h):h.isShadowMaterial?(u.color.value.copy(h.color),u.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(u,h){u.opacity.value=h.opacity,h.color&&u.diffuse.value.copy(h.color),h.emissive&&u.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.bumpMap&&(u.bumpMap.value=h.bumpMap,t(h.bumpMap,u.bumpMapTransform),u.bumpScale.value=h.bumpScale,h.side===ln&&(u.bumpScale.value*=-1)),h.normalMap&&(u.normalMap.value=h.normalMap,t(h.normalMap,u.normalMapTransform),u.normalScale.value.copy(h.normalScale),h.side===ln&&u.normalScale.value.negate()),h.displacementMap&&(u.displacementMap.value=h.displacementMap,t(h.displacementMap,u.displacementMapTransform),u.displacementScale.value=h.displacementScale,u.displacementBias.value=h.displacementBias),h.emissiveMap&&(u.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,u.emissiveMapTransform)),h.specularMap&&(u.specularMap.value=h.specularMap,t(h.specularMap,u.specularMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest);let x=e.get(h),b=x.envMap,M=x.envMapRotation;b&&(u.envMap.value=b,u.envMapRotation.value.setFromMatrix4(jx.makeRotationFromEuler(M)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&u.envMapRotation.value.premultiply(af),u.reflectivity.value=h.reflectivity,u.ior.value=h.ior,u.refractionRatio.value=h.refractionRatio),h.lightMap&&(u.lightMap.value=h.lightMap,u.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,u.lightMapTransform)),h.aoMap&&(u.aoMap.value=h.aoMap,u.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,u.aoMapTransform))}function a(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform))}function o(u,h){u.dashSize.value=h.dashSize,u.totalSize.value=h.dashSize+h.gapSize,u.scale.value=h.scale}function l(u,h,x,b){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.size.value=h.size*x,u.scale.value=b*.5,h.map&&(u.map.value=h.map,t(h.map,u.uvTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function c(u,h){u.diffuse.value.copy(h.color),u.opacity.value=h.opacity,u.rotation.value=h.rotation,h.map&&(u.map.value=h.map,t(h.map,u.mapTransform)),h.alphaMap&&(u.alphaMap.value=h.alphaMap,t(h.alphaMap,u.alphaMapTransform)),h.alphaTest>0&&(u.alphaTest.value=h.alphaTest)}function d(u,h){u.specular.value.copy(h.specular),u.shininess.value=Math.max(h.shininess,1e-4)}function f(u,h){h.gradientMap&&(u.gradientMap.value=h.gradientMap)}function p(u,h){u.metalness.value=h.metalness,h.metalnessMap&&(u.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,u.metalnessMapTransform)),u.roughness.value=h.roughness,h.roughnessMap&&(u.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,u.roughnessMapTransform)),h.envMap&&(u.envMapIntensity.value=h.envMapIntensity)}function m(u,h,x){u.ior.value=h.ior,h.diffuseRoughness>0&&(u.diffuseRoughness.value=h.diffuseRoughness,h.diffuseRoughnessMap&&(u.diffuseRoughnessMap.value=h.diffuseRoughnessMap,t(h.diffuseRoughnessMap,u.diffuseRoughnessMapTransform))),h.sheen>0&&(u.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),u.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(u.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,u.sheenColorMapTransform)),h.sheenRoughnessMap&&(u.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,u.sheenRoughnessMapTransform))),h.clearcoat>0&&(u.clearcoat.value=h.clearcoat,u.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(u.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,u.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(u.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ln&&u.clearcoatNormalScale.value.negate())),h.dispersion>0&&(u.dispersion.value=h.dispersion),h.retroreflectivity>0&&(u.retroreflectivity.value=h.retroreflectivity),h.iridescence>0&&(u.iridescence.value=h.iridescence,u.iridescenceIOR.value=h.iridescenceIOR,u.iridescenceThicknessMinimum.value=h.iridescenceThicknessMinimum,u.iridescenceThicknessMaximum.value=h.iridescenceThicknessMaximum,h.iridescenceMap&&(u.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,u.iridescenceMapTransform)),h.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),h.transmission>0&&(u.transmission.value=h.transmission,u.transmissionSamplerMap.value=x.texture,u.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(u.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,u.transmissionMapTransform)),u.thickness.value=h.thickness,h.thicknessMap&&(u.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=h.attenuationDistance,u.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(u.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(u.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=h.specularIntensity,u.specularColor.value.copy(h.specularColor),h.specularColorMap&&(u.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,u.specularColorMapTransform)),h.specularIntensityMap&&(u.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,h){h.matcap&&(u.matcap.value=h.matcap)}function y(u,h){let x=e.get(h).light;u.referencePosition.value.setFromMatrixPosition(x.matrixWorld),u.nearDistance.value=x.shadow.camera.near,u.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ey(i,e,t,n){let s={},r={};function a(x,b){let M=b.program;n.uniformBlockBinding(x,M,s[x.id])}function o(x,b){let M=s[x.id];M===void 0&&(g(x),M=l(x),s[x.id]=M,x.addEventListener("dispose",u));let T=b.program;n.updateUBOMapping(x,T);let S=e.render.frame;r[x.id]!==S&&(c(x),r[x.id]=S)}function l(x){let b=i.createBuffer(),M=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,M,T),i.bindBuffer(i.UNIFORM_BUFFER,null),b}function c(x){let b=s[x.id],M=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let S=0,_=M.length;S<_;S++){let v=M[S];if(Array.isArray(v))for(let P=0,R=v.length;P<R;P++)d(v[P],S,P,T);else d(v,S,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(x,b,M,T){if(p(x,b,M,T)===!0){let S=x.__offset,_=x.value;if(Array.isArray(_)){let v=0;for(let P=0;P<_.length;P++){let R=_[P],I=y(R,!0);f(R,x.__data,v),v+=I.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,x.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,S,x.__data)}}function f(x,b,M){typeof x=="number"||typeof x=="boolean"?b[M]=x:x.isMatrix3?(b[M]=x.elements[0],b[M+1]=x.elements[1],b[M+2]=x.elements[2],b[M+3]=0,b[M+4]=x.elements[3],b[M+5]=x.elements[4],b[M+6]=x.elements[5],b[M+7]=0,b[M+8]=x.elements[6],b[M+9]=x.elements[7],b[M+10]=x.elements[8],b[M+11]=0):ArrayBuffer.isView(x)?b.set(x.subarray(0,b.length-M),M):x.toArray(b,M)}function p(x,b,M,T){let S=x.value,_=b+"_"+M;if(Array.isArray(S)){T[_]===void 0&&(T[_]=[]);let v=T[_],P=!1;for(let R=0;R<S.length;R++)m(S[R],v,R)===!0&&(P=!0);return P}return m(S,T,_)}function m(x,b,M){if(b[M]===void 0)return typeof x=="number"||typeof x=="boolean"?b[M]=x:ArrayBuffer.isView(x)?b[M]=x.slice():b[M]=x.clone(),!0;{let T=b[M];if(typeof x=="number"||typeof x=="boolean"){if(T!==x)return b[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(T.equals(x)===!1)return T.copy(x),!0}}return!1}function g(x){let b=x.uniforms,M=0,T=16;for(let _=0,v=b.length;_<v;_++){let P=Array.isArray(b[_])?b[_]:[b[_]];for(let R=0,I=P.length;R<I;R++){let F=P[R],C=Array.isArray(F.value)?F.value:[F.value],E=Array.isArray(b[_])||Array.isArray(F.value),D=M;for(let O=0,V=C.length;O<V;O++){let B=C[O],G=y(B,E),X=M%T,te=X%G.boundary,ae=X+te;M+=te,ae!==0&&T-ae<G.storage&&(M+=T-ae),O===0&&(D=M),M+=G.storage}let U=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new U((M-D)/Float32Array.BYTES_PER_ELEMENT),F.__offset=D}}let S=M%T;return S>0&&(M+=T-S),x.__size=M,x.__cache={},this}function y(x,b){let M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=16,M.storage=48):x.isMatrix4?(M.boundary=16,M.storage=64):x.isTexture?Ze("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(x)?(M.boundary=16,M.storage=x.byteLength):Ze("WebGLRenderer: Unsupported uniform value type.",x),b===!0&&(M.boundary=16,M.storage=Math.ceil(M.storage/16)*16),M}function u(x){let b=x.target;b.removeEventListener("dispose",u),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function h(){for(let x in s)i.deleteBuffer(s[x]);s={},r={}}return{bind:a,update:o,dispose:h}}var ty=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zn=null;function ny(){return Zn===null&&(Zn=new Zi(ty,16,16,Ui,hn),Zn.name="DFG_LUT",Zn.minFilter=Ft,Zn.magFilter=Ft,Zn.wrapS=En,Zn.wrapT=En,Zn.generateMipmaps=!1,Zn.needsUpdate=!0),Zn}var Ml=class{constructor(e={}){let{canvas:t=pd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:p=!1,outputBufferType:m=mn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let y=m,u=new Set([ko,zo,Bo]),h=new Set([mn,Fn,Xs,es,Uo,Fo]),x=new Uint32Array(4),b=new Int32Array(4),M={textures:[],min:[],max:[],resolution:[]},T=null,S=null,_=[],v=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let R=this,I=!1,F=null,C=null,E=null,D=null;this._outputColorSpace=rn;let U=0,O=0,V=null,B=-1,G=null,X=new Rt,te=new Rt,ae=null,Y=new at(0),z=0,W=t.width,K=t.height,J=1,se=null,ge=null,fe=new Rt(0,0,W,K),Pe=new Rt(0,0,W,K),Be=!1,ne=new Ti,de=new oo,Le=!1,be=!1,pe=new _t,Ee=new Z,Oe=new Rt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function ke(){return V===null?J:1}let H=n;function Nt(A,q){return t.getContext(A,q)}let ut,mt,Ie,Pt,Ye,Je,N,w,Q,me,he,Me,Ce,le,oe,Ae,k,ce,re,xe,ye,we,We;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",qe,!1),t.addEventListener("webglcontextrestored",$e,!1),t.addEventListener("webglcontextcreationerror",ve,!1),H===null){let q="webgl2";if(H=Nt(q,A),H===null)throw Nt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Qe()}catch(A){throw t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),Ke("WebGLRenderer: "+A.message),A}function Qe(){ut=new f_(H),ut.init(),ye=new Jx(H,ut),mt=new n_(H,ut,e,ye),Ie=new Yx(H,ut),mt.reversedDepthBuffer&&p&&Ie.buffers.depth.setReversed(!0),C=H.createFramebuffer(),E=H.createFramebuffer(),D=H.createFramebuffer(),Pt=new g_(H),Ye=new Dx,Je=new Zx(H,ut,Ie,Ye,mt,ye,Pt),N=new d_(R),w=new xm(H),we=new e_(H,w),Q=new p_(H,w,Pt,we),me=new x_(H,Q,w,we,Pt),ce=new __(H,mt,Je),oe=new i_(Ye),he=new Lx(R,N,ut,mt,we,oe),Me=new Qx(R,Ye),Ce=new Ux,le=new Gx(ut),k=new Q0(R,N,Ie,me,g,l),Ae=new qx(R,me,mt),We=new ey(H,Pt,mt,Ie),re=new t_(H,ut,Pt),xe=new m_(H,ut,Pt),Pt.programs=he.programs,R.capabilities=mt,R.extensions=ut,R.properties=Ye,R.renderLists=Ce,R.shadowMap=Ae,R.state=Ie,R.info=Pt}y!==mn&&(P=new v_(y,t.width,t.height,o,s,r));let _e=new vh(R,H);this.xr=_e,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let A=ut.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ut.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(A){A!==void 0&&(J=A,this.setSize(W,K,!1))},this.getSize=function(A){return A.set(W,K)},this.setSize=function(A,q,ee=!0){if(_e.isPresenting){Ze("WebGLRenderer: Can't change size while VR device is presenting.");return}W=A,K=q,t.width=Math.floor(A*J),t.height=Math.floor(q*J),ee===!0&&(t.style.width=A+"px",t.style.height=q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(W*J,K*J).floor()},this.setDrawingBufferSize=function(A,q,ee){W=A,K=q,J=ee,t.width=Math.floor(A*ee),t.height=Math.floor(q*ee),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(y===mn){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){Ze("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(fe)},this.setViewport=function(A,q,ee,$){A.isVector4?fe.set(A.x,A.y,A.z,A.w):fe.set(A,q,ee,$),Ie.viewport(X.copy(fe).multiplyScalar(ke()).round())},this.getScissor=function(A){return A.copy(Pe)},this.setScissor=function(A,q,ee,$){A.isVector4?Pe.set(A.x,A.y,A.z,A.w):Pe.set(A,q,ee,$),Ie.scissor(te.copy(Pe).multiplyScalar(ke()).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(A){Ie.setScissorTest(Be=A)},this.setOpaqueSort=function(A){se=A},this.setTransparentSort=function(A){ge=A},this.getClearColor=function(A){return A.copy(k.getClearColor())},this.setClearColor=function(){k.setClearColor(...arguments)},this.getClearAlpha=function(){return k.getClearAlpha()},this.setClearAlpha=function(){k.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ee=!0){let $=0;if(A){let j=!1;if(V!==null){let Re=V.texture.format;j=u.has(Re)}if(j){let Re=V.texture.type,He=h.has(Re),Te=k.getClearColor(),Ue=k.getClearAlpha(),Xe=Te.r,et=Te.g,ct=Te.b;He?(x[0]=Xe,x[1]=et,x[2]=ct,x[3]=Ue,H.clearBufferuiv(H.COLOR,0,x)):(b[0]=Xe,b[1]=et,b[2]=ct,b[3]=Ue,H.clearBufferiv(H.COLOR,0,b))}else $|=H.COLOR_BUFFER_BIT}q&&($|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ee&&($|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&H.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),F=A},this.dispose=function(){t.removeEventListener("webglcontextlost",qe,!1),t.removeEventListener("webglcontextrestored",$e,!1),t.removeEventListener("webglcontextcreationerror",ve,!1),k.dispose(),Ce.dispose(),le.dispose(),Je.dispose(),Ye.dispose(),N.dispose(),me.dispose(),Q.dispose(),we.dispose(),We.dispose(),he.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Pn),_e.removeEventListener("sessionend",_n),Bn.stop()};function qe(A){A.preventDefault(),Kc("WebGLRenderer: Context Lost."),I=!0}function $e(){Kc("WebGLRenderer: Context Restored."),I=!1;let A=Pt.autoReset,q=Ae.enabled,ee=Ae.autoUpdate,$=Ae.needsUpdate,j=Ae.type;Qe(),Pt.autoReset=A,Ae.enabled=q,Ae.autoUpdate=ee,Ae.needsUpdate=$,Ae.type=j}function ve(A){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){let q=A.target;q.removeEventListener("dispose",st),Ot(q)}function Ot(A){Kn(A),Ye.remove(A)}function Kn(A){let q=Ye.get(A).programs;q!==void 0&&(q.forEach(function(ee){he.releaseProgram(ee)}),A.isShaderMaterial&&he.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ee,$,j,Re){q===null&&(q=De);let He=j.isMesh&&j.matrixWorld.determinantAffine()<0,Te=_a(A,q,ee,$,j);Ie.setMaterial($,He);let Ue=ee.index,Xe=1;if($.wireframe===!0){if(Ue=Q.getWireframeAttribute(ee),Ue===void 0)return;Xe=2}let et=ee.drawRange,ct=ee.attributes.position,Ve=et.start*Xe,ht=(et.start+et.count)*Xe;Re!==null&&(Ve=Math.max(Ve,Re.start*Xe),ht=Math.min(ht,(Re.start+Re.count)*Xe)),Ue!==null?(Ve=Math.max(Ve,0),ht=Math.min(ht,Ue.count)):ct!=null&&(Ve=Math.max(Ve,0),ht=Math.min(ht,ct.count));let It=ht-Ve;if(It<0||It===1/0)return;we.setup(j,$,Te,ee,Ue);let Mt,yt=re;if(Ue!==null&&(Mt=w.get(Ue),yt=xe,yt.setIndex(Mt)),j.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*ke()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(j.isLine){let zt=$.linewidth;zt===void 0&&(zt=1),Ie.setLineWidth(zt*ke()),j.isLineSegments?yt.setMode(H.LINES):j.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else j.isPoints?yt.setMode(H.POINTS):j.isSprite&&yt.setMode(H.TRIANGLES);if(j.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))yt.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{let zt=j._multiDrawStarts,Ge=j._multiDrawCounts,Wt=j._multiDrawCount,rt=Ue?w.get(Ue).bytesPerElement:1,Qn=Ye.get($).currentProgram.getUniforms();for(let Lt=0;Lt<Wt;Lt++)Qn.setValue(H,"_gl_DrawID",Lt),yt.render(zt[Lt]/rt,Ge[Lt])}else if(j.isInstancedMesh)yt.renderInstances(Ve,It,j.count);else if(ee.isInstancedBufferGeometry){let zt=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Ge=Math.min(ee.instanceCount,zt);yt.renderInstances(Ve,It,Ge)}else yt.render(Ve,It)};function Fl(A,q,ee,$){F!==null&&A.isNodeMaterial&&F.setObject($,A),Le===!0&&oe.setState(A,ee,!1),A.transparent===!0&&A.side===Rn&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,ki(A,q,$),A.side=Ni,A.needsUpdate=!0,ki(A,q,$),A.side=Rn):ki(A,q,$)}this.compile=function(A,q,ee=null){ee===null&&(ee=A),F!==null&&F.renderStart(A,q,ee),S=le.get(ee),S.init(q),v.push(S),ee.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),A!==ee&&A.traverseVisible(function(j){j.isLight&&j.layers.test(q.layers)&&(S.pushLight(j),j.castShadow&&S.pushShadow(j))}),S.setupLights(),F!==null&&F.updateLights(S.state.lightsArray),be=this.localClippingEnabled,Le=oe.init(this.clippingPlanes,be),Le===!0&&oe.setGlobalState(this.clippingPlanes,q),F!==null&&Ae.render(S.state.shadowsArray,ee,q);let $=new Set;return A.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;let Re=j.material;if(Re)if(Array.isArray(Re))for(let He=0;He<Re.length;He++){let Te=Re[He];Fl(Te,ee,q,j),$.add(Te)}else Fl(Re,ee,q,j),$.add(Re)}),S=v.pop(),F!==null&&F.renderEnd(),$},this.compileAsync=function(A,q,ee=null){let $=this.compile(A,q,ee);return new Promise(j=>{function Re(){if($.forEach(function(He){let Ue=Ye.get(He).currentProgram;(Ue===void 0||Ue.isReady())&&$.delete(He)}),$.size===0){j(A);return}setTimeout(Re,10)}ut.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let pa=null;function Bi(A){pa&&pa(A)}function Pn(){Bn.stop()}function _n(){Bn.start()}let Bn=new Jd;Bn.setAnimationLoop(Bi),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(A){pa=A,_e.setAnimationLoop(A),A===null?Bn.stop():Bn.start()},_e.addEventListener("sessionstart",Pn),_e.addEventListener("sessionend",_n),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;F!==null&&F.renderStart(A,q);let ee=_e.enabled===!0&&_e.isPresenting===!0,$=P!==null&&(V===null||ee)&&P.begin(R,V);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(q),q=_e.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,V),S=le.get(A,v.length),S.init(q),S.state.textureUnits=Je.getTextureUnits(),v.push(S),pe.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?de.setFromArrayCamera(q):ne.setFromProjectionMatrix(pe,Cn,q.reversedDepth),be=this.localClippingEnabled,Le=oe.init(this.clippingPlanes,be),T=Ce.get(A,_.length),T.init(),_.push(T),this.info.render.frame++,_e.enabled===!0&&_e.isPresenting===!0){let He=R.xr.getDepthSensingMesh();He!==null&&ma(He,q,-1/0,R.sortObjects)}ma(A,q,0,R.sortObjects),T.finish(),F!==null&&F.updateLights(S.state.lightsArray),R.sortObjects===!0&&T.sort(se,ge),Ne=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,Ne&&k.addToRenderList(T,A),this.info.autoReset===!0&&this.info.reset(),Le===!0&&oe.beginShadows();let j=S.state.shadowsArray;if(Ae.render(j,A,q),Le===!0&&oe.endShadows(),($&&P.hasRenderPass())===!1){let He=T.opaque,Te=T.transmissive;if(S.setupLights(),q.isArrayCamera){let Ue=q.cameras;if(Te.length>0)for(let Xe=0,et=Ue.length;Xe<et;Xe++){let ct=Ue[Xe];$n(He,Te,A,ct)}Ne&&k.render(A);for(let Xe=0,et=Ue.length;Xe<et;Xe++){let ct=Ue[Xe];zn(T,A,ct,ct.viewport)}}else Te.length>0&&$n(He,Te,A,q),Ne&&k.render(A),zn(T,A,q)}V!==null&&O===0&&(Je.updateMultisampleRenderTarget(V),Je.updateRenderTargetMipmap(V)),$&&P.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),we.resetDefaultState(),B=-1,G=null,v.pop(),v.length>0?(S=v[v.length-1],Je.setTextureUnits(S.state.textureUnits),Le===!0&&oe.setGlobalState(R.clippingPlanes,S.state.camera)):S=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,F!==null&&F.renderEnd()};function ma(A,q,ee,$){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ee=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){let He=q.isArrayCamera?de:ne;if(!A.frustumCulled||A.intersectsFrustum(He)){$&&Oe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(pe);let Te=me.update(A),Ue=A.material;Ue.visible&&T.push(A,Te,Ue,ee,Oe.z,null,q)}}else if(A.isMesh||A.isLine||A.isPoints){let He=q.isArrayCamera?de:ne;if(!A.frustumCulled||A.intersectsFrustum(He)){let Te=me.update(A),Ue=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Oe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Oe.copy(Te.boundingSphere.center)),Oe.applyMatrix4(A.matrixWorld).applyMatrix4(pe)),Array.isArray(Ue)){let Xe=Te.groups;for(let et=0,ct=Xe.length;et<ct;et++){let Ve=Xe[et],ht=Ue[Ve.materialIndex];ht&&ht.visible&&T.push(A,Te,ht,ee,Oe.z,Ve,q)}}else Ue.visible&&T.push(A,Te,Ue,ee,Oe.z,null,q)}}}let Re=A.children;for(let He=0,Te=Re.length;He<Te;He++)ma(Re[He],q,ee,$)}function zn(A,q,ee,$){let{opaque:j,transmissive:Re,transparent:He}=A;S.setupLightsView(ee),Le===!0&&oe.setGlobalState(R.clippingPlanes,ee),$&&Ie.viewport(X.copy($)),j.length>0&&zi(j,q,ee),Re.length>0&&zi(Re,q,ee),He.length>0&&zi(He,q,ee),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function $n(A,q,ee,$){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[$.id]===void 0){let Ve=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[$.id]=new bn(1,1,{generateMipmaps:!0,type:Ve?hn:mn,minFilter:Yn,samples:Math.max(4,mt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:pt.workingColorSpace})}let Re=S.state.transmissionRenderTarget[$.id],He=$.viewport||X;Re.setSize(He.z*R.transmissionResolutionScale,He.w*R.transmissionResolutionScale);let Te=R.getRenderTarget(),Ue=R.getActiveCubeFace(),Xe=R.getActiveMipmapLevel();R.setRenderTarget(Re),R.getClearColor(Y),z=R.getClearAlpha(),z<1&&R.setClearColor(16777215,.5),R.clear(),Ne&&k.render(ee);let et=R.toneMapping;R.toneMapping=qn;let ct=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),S.setupLightsView($),Le===!0&&oe.setGlobalState(R.clippingPlanes,$),zi(A,ee,$),Je.updateMultisampleRenderTarget(Re),Je.updateRenderTargetMipmap(Re),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let ht=0,It=q.length;ht<It;ht++){let Mt=q[ht],{object:yt,geometry:zt,material:Ge,group:Wt}=Mt;if(Ge.side===Rn&&yt.layers.test($.layers)){let rt=Ge.side;Ge.side=ln,Ge.needsUpdate=!0,pi(yt,ee,$,zt,Ge,Wt),Ge.side=rt,Ge.needsUpdate=!0,Ve=!0}}Ve===!0&&(Je.updateMultisampleRenderTarget(Re),Je.updateRenderTargetMipmap(Re))}R.setRenderTarget(Te,Ue,Xe),R.setClearColor(Y,z),ct!==void 0&&($.viewport=ct),R.toneMapping=et}function zi(A,q,ee){let $=q.isScene===!0?q.overrideMaterial:null;for(let j=0,Re=A.length;j<Re;j++){let He=A[j],{object:Te,geometry:Ue,group:Xe}=He,et=He.material;et.allowOverride===!0&&$!==null&&(et=$),Te.layers.test(ee.layers)&&pi(Te,q,ee,Ue,et,Xe)}}function pi(A,q,ee,$,j,Re){F!==null&&j.isNodeMaterial&&F.setObject(A,j),A.onBeforeRender(R,q,ee,$,j,Re),A.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(R,q,ee,$,A,Re),j.transparent===!0&&j.side===Rn&&j.forceSinglePass===!1?(j.side=ln,j.needsUpdate=!0,R.renderBufferDirect(ee,q,$,j,A,Re),j.side=Ni,j.needsUpdate=!0,R.renderBufferDirect(ee,q,$,j,A,Re),j.side=Rn):R.renderBufferDirect(ee,q,$,j,A,Re),A.onAfterRender(R,q,ee,$,j,Re)}function jn(A){let q=0;for(let ee of A)ee.texture!==null&&q++;return q}function ki(A,q,ee){q.isScene!==!0&&(q=De);let $=Ye.get(A),j=S.state.lights,Re=S.state.shadowsArray,He=j.state.version,Te=he.getParameters(A,j.state,Re,q,ee,S.state.lightProbeGridArray),Ue=he.getProgramCacheKey(Te),Xe=$.programs;$.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,$.fog=q.fog;let et=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;$.envMap=N.get(A.envMap||$.environment,et),$.envMapRotation=$.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Xe===void 0&&(A.addEventListener("dispose",st),Xe=new Map,$.programs=Xe,$.programVariants=new Map);let ct=Xe.get(Ue);if(ct!==void 0){if($.currentProgram===ct&&$.lightsStateVersion===He)return kn(A,Te),ct}else Te.uniforms=he.getUniforms(A),F!==null&&A.isNodeMaterial&&F.build(A,ee,Te),A.onBeforeCompile(Te,R),ct=he.acquireProgram(Te,Ue),Xe.set(Ue,ct),$.uniforms=Te.uniforms;let Ve=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ve.clippingPlanes=oe.uniform),kn(A,Te),$.needsLights=Ol(A),$.lightsStateVersion=He,$.needsLights&&(Ve.ambientLightColor.value=j.state.ambient,Ve.lightProbe.value=j.state.probe,Ve.sunLights.value=j.state.sun,Ve.sunLightShadows.value=j.state.sunShadow,Ve.directionalLights.value=j.state.directional,Ve.directionalLightShadows.value=j.state.directionalShadow,Ve.spotLights.value=j.state.spot,Ve.spotLightShadows.value=j.state.spotShadow,Ve.rectAreaLights.value=j.state.rectArea,Ve.ltc_1.value=j.state.rectAreaLTC1,Ve.ltc_2.value=j.state.rectAreaLTC2,Ve.pointLights.value=j.state.point,Ve.pointLightShadows.value=j.state.pointShadow,Ve.hemisphereLights.value=j.state.hemi,Ve.sunShadowMatrix.value=j.state.sunShadowMatrix,Ve.sunShadowCascade.value=j.state.sunShadowCascade,Ve.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Ve.spotLightMatrix.value=j.state.spotLightMatrix,Ve.spotLightMap.value=j.state.spotLightMap,Ve.pointShadowMatrix.value=j.state.pointShadowMatrix),$.numLightProbeGrids=jn(S.state.lightProbeGridArray),$.currentProgram=ct,$.uniformsList=null,ct}function Ks(A,q,ee,$,j){let Re=Ye.get(A),He=Re.currentProgram.id+","+$+","+j,Te=Re.programVariants.get(He);return Te===void 0?(Te=ki(A,q,ee),Re.programVariants.set(He,Te)):(Re.currentProgram=Te,Re.uniformsList=null,Re.outputColorSpace=$,Re.toneMapping=j),Te}function ga(A){if(A.uniformsList===null){let q=A.currentProgram.getUniforms();A.uniformsList=qs.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function kn(A,q){let ee=Ye.get(A);ee.outputColorSpace=q.outputColorSpace,ee.batching=q.batching,ee.batchingColor=q.batchingColor,ee.instancing=q.instancing,ee.instancingColor=q.instancingColor,ee.instancingMorph=q.instancingMorph,ee.skinning=q.skinning,ee.morphTargets=q.morphTargets,ee.morphNormals=q.morphNormals,ee.morphColors=q.morphColors,ee.morphTargetsCount=q.morphTargetsCount,ee.numClippingPlanes=q.numClippingPlanes,ee.numIntersection=q.numClipIntersection,ee.vertexAlphas=q.vertexAlphas,ee.vertexTangents=q.vertexTangents,ee.toneMapping=q.toneMapping}function _a(A,q,ee,$,j){q.isScene!==!0&&(q=De),Je.resetTextureUnits();let Re=q.fog,He=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?q.environment:null,Te=V===null?R.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:pt.workingColorSpace,Ue=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Xe=N.get($.envMap||He,Ue),et=$.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,ct=!!ee.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ve=!!ee.morphAttributes.position,ht=!!ee.morphAttributes.normal,It=!!ee.morphAttributes.color,Mt=qn;$.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(Mt=R.toneMapping);let yt=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,zt=yt!==void 0?yt.length:0,Ge=Ye.get($),Wt=S.state.lights;if(Le===!0&&(be===!0||A!==G)){let wt=A===G&&$.id===B;oe.setState($,A,wt)}let rt=!1,Qn=!1;$.version===Ge.__version?Ge.needsLights&&Ge.lightsStateVersion!==Wt.state.version||j.isBatchedMesh&&Ge.batching===!1||!j.isBatchedMesh&&Ge.batching===!0||j.isBatchedMesh&&Ge.batchingColor===!0&&j._colorsTexture===null||j.isBatchedMesh&&Ge.batchingColor===!1&&j._colorsTexture!==null||j.isInstancedMesh&&Ge.instancing===!1||!j.isInstancedMesh&&Ge.instancing===!0||j.isSkinnedMesh&&Ge.skinning===!1||!j.isSkinnedMesh&&Ge.skinning===!0||j.isInstancedMesh&&Ge.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&Ge.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&Ge.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&Ge.instancingMorph===!1&&j.morphTexture!==null||Ge.envMap!==Xe||$.fog===!0&&Ge.fog!==Re||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==oe.numPlanes||Ge.numIntersection!==oe.numIntersection)||Ge.vertexAlphas!==et||Ge.vertexTangents!==ct||Ge.morphTargets!==Ve||Ge.morphNormals!==ht||Ge.morphColors!==It||Ge.morphTargetsCount!==zt||Ge.numLightProbeGrids!==jn(S.state.lightProbeGridArray)?rt=!0:(Ge.outputColorSpace!==Te||Ge.toneMapping!==Mt)&&(Qn=!0):(rt=!0,Ge.__version=$.version);let Lt=Ge.currentProgram;(rt===!0||Qn===!0)&&(Lt=Qn===!0?Ks($,q,j,Te,Mt):ki($,q,j),F&&$.isNodeMaterial&&F.onUpdateProgram($,Lt,Ge));let Gn=!1,sn=!1,Vn=!1,ft=Lt.getUniforms(),bt=Ge.uniforms;if(Ie.useProgram(Lt.program)&&(Gn=!0,sn=!0,Vn=!0),$.id!==B&&(B=$.id,sn=!0),Gn||G!==A){Ie.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ft.setValue(H,"projectionMatrix",A.projectionMatrix),ft.setValue(H,"viewMatrix",A.matrixWorldInverse);let At=ft.map.cameraPosition;At!==void 0&&At.setValue(H,Ee.setFromMatrixPosition(A.matrixWorld)),mt.logarithmicDepthBuffer&&ft.setValue(H,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ft.setValue(H,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,sn=!0,Vn=!0)}if(Ge.needsLights&&(Wt.state.sunShadowMap.length>0&&ft.setValue(H,"sunShadowMap",Wt.state.sunShadowMap,Je),Wt.state.directionalShadowMap.length>0&&ft.setValue(H,"directionalShadowMap",Wt.state.directionalShadowMap,Je),Wt.state.spotShadowMap.length>0&&ft.setValue(H,"spotShadowMap",Wt.state.spotShadowMap,Je),Wt.state.pointShadowMap.length>0&&ft.setValue(H,"pointShadowMap",Wt.state.pointShadowMap,Je)),j.isSkinnedMesh){ft.setOptional(H,j,"bindMatrix"),ft.setOptional(H,j,"bindMatrixInverse");let wt=j.skeleton;wt&&(wt.boneTexture===null&&wt.computeBoneTexture(),ft.setValue(H,"boneTexture",wt.boneTexture,Je))}j.isBatchedMesh&&(ft.setOptional(H,j,"batchingTexture"),ft.setValue(H,"batchingTexture",j._matricesTexture,Je),ft.setOptional(H,j,"batchingIdTexture"),ft.setValue(H,"batchingIdTexture",j._indirectTexture,Je),ft.setOptional(H,j,"batchingColorTexture"),j._colorsTexture!==null&&ft.setValue(H,"batchingColorTexture",j._colorsTexture,Je));let Xt=ee.morphAttributes;if((Xt.position!==void 0||Xt.normal!==void 0||Xt.color!==void 0)&&ce.update(j,ee,Lt),(sn||Ge.receiveShadow!==j.receiveShadow)&&(Ge.receiveShadow=j.receiveShadow,ft.setValue(H,"receiveShadow",j.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&q.environment!==null&&(bt.envMapIntensity.value=q.environmentIntensity),bt.dfgLUT!==void 0&&(bt.dfgLUT.value=ny()),sn){if(ft.setValue(H,"toneMappingExposure",R.toneMappingExposure),Ge.needsLights&&xa(bt,Vn),Re&&$.fog===!0&&Me.refreshFogUniforms(bt,Re),Me.refreshMaterialUniforms(bt,$,J,K,S.state.transmissionRenderTarget[A.id]),Ge.needsLights&&Ge.numLightProbeGrids>0){let wt=M,At=0;for(let $t of S.state.lightProbeGridArray)$t.texture!==null&&(wt.textures[At]=$t.texture,wt.min[At]=$t.boundingBox.min,wt.max[At]=$t.boundingBox.max,wt.resolution[At]=$t.resolution,At++);for(let $t in wt)wt[$t].length=At;bt.probesSH.value=wt.textures,bt.probesMin.value=wt.min,bt.probesMax.value=wt.max,bt.probesResolution.value=wt.resolution}qs.upload(H,ga(Ge),bt,Je)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(qs.upload(H,ga(Ge),bt,Je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ft.setValue(H,"center",j.center),ft.setValue(H,"modelViewMatrix",j.modelViewMatrix),ft.setValue(H,"normalMatrix",j.normalMatrix),ft.setValue(H,"modelMatrix",j.matrixWorld),$.uniformsGroups!==void 0){let wt=$.uniformsGroups;for(let At=0,$t=wt.length;At<$t;At++){let $s=wt[At];We.update($s,Lt),We.bind($s,Lt)}}return Lt}function xa(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.sunLights.needsUpdate=q,A.sunLightShadows.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ol(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(A,q,ee){let $=Ye.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),Ye.get(A.texture).__webglTexture=q,Ye.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ee,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){let ee=Ye.get(A);ee.__webglFramebuffer=q,ee.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ee=0){V=A,U=q,O=ee;let $=null,j=!1,Re=!1;if(A){let Te=Ye.get(A);if(Te.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(H.FRAMEBUFFER,Te.__webglFramebuffer),X.copy(A.viewport),te.copy(A.scissor),ae=A.scissorTest,Ie.viewport(X),Ie.scissor(te),Ie.setScissorTest(ae),B=-1;return}else if(Te.__webglFramebuffer===void 0)Je.setupRenderTarget(A);else if(Te.__hasExternalTextures)Je.rebindTextures(A,Ye.get(A.texture).__webglTexture,Ye.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let et=A.depthTexture;if(Te.__boundDepthTexture!==et){if(et!==null&&Ye.has(et)&&(A.width!==et.image.width||A.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(A)}}let Ue=A.texture;(Ue.isData3DTexture||Ue.isDataArrayTexture||Ue.isCompressedArrayTexture)&&(Re=!0);let Xe=Ye.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Xe[q])?$=Xe[q][ee]:$=Xe[q],j=!0):A.samples>0&&Je.useMultisampledRTT(A)===!1?$=Ye.get(A).__webglMultisampledFramebuffer:Array.isArray(Xe)?$=Xe[ee]:$=Xe,X.copy(A.viewport),te.copy(A.scissor),ae=A.scissorTest}else X.copy(fe).multiplyScalar(J).floor(),te.copy(Pe).multiplyScalar(J).floor(),ae=Be;if(ee!==0&&($=C),Ie.bindFramebuffer(H.FRAMEBUFFER,$)&&Ie.drawBuffers(A,$),Ie.viewport(X),Ie.scissor(te),Ie.setScissorTest(ae),j){let Te=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+q,Te.__webglTexture,ee)}else if(Re){let Te=q;for(let Ue=0;Ue<A.textures.length;Ue++){let Xe=Ye.get(A.textures[Ue]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Ue,Xe.__webglTexture,ee,Te)}}else if(A!==null&&ee!==0){let Te=Ye.get(A.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Te.__webglTexture,ee)}B=-1};function un(A){let q=Ye.get(A);return(q.__readFormat!==A.format||q.__readType!==A.type)&&(q.__readFormat=A.format,q.__readType=A.type,q.__formatReadable=mt.textureFormatReadable(A.format),q.__typeReadable=mt.textureTypeReadable(A.type)),q}this.readRenderTargetPixels=function(A,q,ee,$,j,Re,He,Te=0){if(!(A&&A.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ue=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ue=Ue[He],Array.isArray(Ue)&&(Ue=Ue[0])),Ue){Ie.bindFramebuffer(H.FRAMEBUFFER,Ue);try{let Xe=A.textures[Te],et=Xe.format,ct=Xe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Te);let Ve=un(Xe);if(Ve.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ve.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-$&&ee>=0&&ee<=A.height-j&&H.readPixels(q,ee,$,j,ye.convert(et),ye.convert(ct),Re)}finally{let Xe=V!==null?Ye.get(V).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(A,q,ee,$,j,Re,He,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ue=Ye.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&He!==void 0&&(Ue=Ue[He],Array.isArray(Ue)&&(Ue=Ue[0])),Ue)if(q>=0&&q<=A.width-$&&ee>=0&&ee<=A.height-j){Ie.bindFramebuffer(H.FRAMEBUFFER,Ue);let Xe=A.textures[Te],et=Xe.format,ct=Xe.type;A.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Te);let Ve=un(Xe);if(Ve.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ve.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),H.readPixels(q,ee,$,j,ye.convert(et),ye.convert(ct),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let It=V!==null?Ye.get(V).__webglFramebuffer:null;Ie.bindFramebuffer(H.FRAMEBUFFER,It);let Mt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await gd(H,Mt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ht),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ht),H.deleteSync(Mt),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ee=0){let $=Math.pow(2,-ee),j=Math.floor(A.image.width*$),Re=Math.floor(A.image.height*$),He=q!==null?q.x:0,Te=q!==null?q.y:0;Je.setTexture2D(A,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,He,Te,j,Re),Ie.unbindTexture()},this.copyTextureToTexture=function(A,q,ee=null,$=null,j=0,Re=0){let He,Te,Ue,Xe,et,ct,Ve,ht,It,Mt=A.isCompressedTexture?A.mipmaps[Re]:A.image;if(ee!==null)He=ee.max.x-ee.min.x,Te=ee.max.y-ee.min.y,Ue=ee.isBox3?ee.max.z-ee.min.z:1,Xe=ee.min.x,et=ee.min.y,ct=ee.isBox3?ee.min.z:0;else{let ft=Math.pow(2,-j);He=Math.floor(Mt.width*ft),Te=Math.floor(Mt.height*ft),A.isDataArrayTexture?Ue=Mt.depth:A.isData3DTexture?Ue=Math.floor(Mt.depth*ft):Ue=1,Xe=0,et=0,ct=0}$!==null?(Ve=$.x,ht=$.y,It=$.z):(Ve=0,ht=0,It=0);let yt=ye.convert(q.format),zt=ye.convert(q.type),Ge;q.isData3DTexture?(Je.setTexture3D(q,0),Ge=H.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Je.setTexture2DArray(q,0),Ge=H.TEXTURE_2D_ARRAY):(Je.setTexture2D(q,0),Ge=H.TEXTURE_2D),Ie.activeTexture(H.TEXTURE0),Ie.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,q.flipY),Ie.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),Ie.pixelStorei(H.UNPACK_ALIGNMENT,q.unpackAlignment);let Wt=Ie.getParameter(H.UNPACK_ROW_LENGTH),rt=Ie.getParameter(H.UNPACK_IMAGE_HEIGHT),Qn=Ie.getParameter(H.UNPACK_SKIP_PIXELS),Lt=Ie.getParameter(H.UNPACK_SKIP_ROWS),Gn=Ie.getParameter(H.UNPACK_SKIP_IMAGES);Ie.pixelStorei(H.UNPACK_ROW_LENGTH,Mt.width),Ie.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Mt.height),Ie.pixelStorei(H.UNPACK_SKIP_PIXELS,Xe),Ie.pixelStorei(H.UNPACK_SKIP_ROWS,et),Ie.pixelStorei(H.UNPACK_SKIP_IMAGES,ct);let sn=A.isDataArrayTexture||A.isData3DTexture,Vn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){let ft=Ye.get(A),bt=Ye.get(q),Xt=Ye.get(ft.__renderTarget),wt=Ye.get(bt.__renderTarget);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,Xt.__webglFramebuffer),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,wt.__webglFramebuffer);for(let At=0;At<Ue;At++)sn&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(A).__webglTexture,j,ct+At),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(q).__webglTexture,Re,It+At)),H.blitFramebuffer(Xe,et,Xe+He,et+Te,Ve,ht,Ve+He,ht+Te,H.DEPTH_BUFFER_BIT,H.NEAREST);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(j!==0||A.isRenderTargetTexture||Ye.has(A)){let ft=Ye.get(A),bt=Ye.get(q);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,E),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,D);for(let Xt=0;Xt<Ue;Xt++)sn?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ft.__webglTexture,j,ct+Xt):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ft.__webglTexture,j),Vn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,bt.__webglTexture,Re,It+Xt):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,bt.__webglTexture,Re),j!==0?H.blitFramebuffer(Xe,et,Xe+He,et+Te,Ve,ht,Ve+He,ht+Te,H.COLOR_BUFFER_BIT,H.NEAREST):Vn?H.copyTexSubImage3D(Ge,Re,Ve,ht,It+Xt,Xe,et,He,Te):H.copyTexSubImage2D(Ge,Re,Ve,ht,Xe,et,He,Te);Ie.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Vn?A.isDataTexture||A.isData3DTexture?H.texSubImage3D(Ge,Re,Ve,ht,It,He,Te,Ue,yt,zt,Mt.data):q.isCompressedArrayTexture?H.compressedTexSubImage3D(Ge,Re,Ve,ht,It,He,Te,Ue,yt,Mt.data):H.texSubImage3D(Ge,Re,Ve,ht,It,He,Te,Ue,yt,zt,Mt):A.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,Ve,ht,He,Te,yt,zt,Mt.data):A.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,Ve,ht,Mt.width,Mt.height,yt,Mt.data):H.texSubImage2D(H.TEXTURE_2D,Re,Ve,ht,He,Te,yt,zt,Mt);Ie.pixelStorei(H.UNPACK_ROW_LENGTH,Wt),Ie.pixelStorei(H.UNPACK_IMAGE_HEIGHT,rt),Ie.pixelStorei(H.UNPACK_SKIP_PIXELS,Qn),Ie.pixelStorei(H.UNPACK_SKIP_ROWS,Lt),Ie.pixelStorei(H.UNPACK_SKIP_IMAGES,Gn),Re===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&H.generateMipmap(Ge),Ie.unbindTexture()},this.initRenderTarget=function(A){Ye.get(A).__webglFramebuffer===void 0&&Je.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?Je.setTextureCube(A,0):A.isData3DTexture?Je.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Je.setTexture2DArray(A,0):Je.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){U=0,O=0,V=null,Ie.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=pt._getUnpackColorSpace()}};var of={type:"change"},Sh={type:"start"},cf={type:"end"},wl=new Yi,lf=new an,iy=Math.cos(70*eh.DEG2RAD),Ht=new Z,gn=2*Math.PI,xt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Mh=1e-6,Al=class extends Yr{constructor(e,t=null){super(e,t),this.state=xt.NONE,this.target=new Z,this.cursor=new Z,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Li.ROTATE,MIDDLE:Li.DOLLY,RIGHT:Li.PAN},this.touches={ONE:Di.ROTATE,TWO:Di.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Z,this._lastQuaternion=new on,this._lastTargetPosition=new Z,this._quat=new on().setFromUnitVectors(e.up,new Z(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new ks,this._sphericalDelta=new ks,this._scale=1,this._panOffset=new Z,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new Z,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ry.bind(this),this._onPointerDown=sy.bind(this),this._onPointerUp=ay.bind(this),this._onContextMenu=fy.bind(this),this._onMouseWheel=cy.bind(this),this._onKeyDown=hy.bind(this),this._onTouchStart=uy.bind(this),this._onTouchMove=dy.bind(this),this._onMouseDown=oy.bind(this),this._onMouseMove=ly.bind(this),this._interceptControlDown=py.bind(this),this._interceptControlUp=my.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.ownerDocument.addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=xt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.ownerDocument.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(of),this.update(),this.state=xt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){let t=this.object.position;Ht.copy(t).sub(this.target),Ht.applyQuaternion(this._quat),this._spherical.setFromVector3(Ht),this.autoRotate&&this.state===xt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=gn:n>Math.PI&&(n-=gn),s<-Math.PI?s+=gn:s>Math.PI&&(s-=gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Ht.setFromSpherical(this._spherical),Ht.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ht),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Ht.length();a=this._clampDistance(o*this._scale);let l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let o=new Z(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new Z(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Ht.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(wl.origin.copy(this.object.position),wl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(wl.direction))<iy?this.object.lookAt(this.target):(lf.setFromNormalAndCoplanarPoint(this.object.up,this.target),wl.intersectPlane(lf,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Mh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Mh||this._lastTargetPosition.distanceToSquared(this.target)>Mh?(this.dispatchEvent(of),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?gn/60*this.autoRotateSpeed*e:gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ht.setFromMatrixColumn(t,0),Ht.multiplyScalar(-e),this._panOffset.add(Ht)}_panUp(e,t){this.screenSpacePanning===!0?Ht.setFromMatrixColumn(t,1):(Ht.setFromMatrixColumn(t,0),Ht.crossVectors(this.object.up,Ht)),Ht.multiplyScalar(e),this._panOffset.add(Ht)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Ht.copy(s).sub(this.target);let r=Ht.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientY),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.zoomToCursor&&(this._performCursorZoom=!0,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function sy(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function ry(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ay(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cf),this.state=xt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function oy(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Li.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=xt.DOLLY;break;case Li.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}break;case Li.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=xt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=xt.PAN}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Sh)}function ly(i){switch(this.state){case xt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case xt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case xt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function cy(i){this.enabled===!1||this.enableZoom===!1||this.state!==xt.NONE||(i.preventDefault(),this.dispatchEvent(Sh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(cf))}function hy(i){this.enabled!==!1&&this._handleKeyDown(i)}function uy(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Di.ROTATE:if(this.enableRotate===!1){this.state=xt.NONE;break}this._handleTouchStartRotate(i),this.state=xt.TOUCH_ROTATE;break;case Di.PAN:if(this.enablePan===!1){this.state=xt.NONE;break}this._handleTouchStartPan(i),this.state=xt.TOUCH_PAN;break;default:this.state=xt.NONE}break;case 2:switch(this.touches.TWO){case Di.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=xt.TOUCH_DOLLY_PAN;break;case Di.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=xt.TOUCH_DOLLY_ROTATE;break;default:this.state=xt.NONE}break;default:this.state=xt.NONE}this.state!==xt.NONE&&this.dispatchEvent(Sh)}function dy(i){switch(this._trackPointer(i),this.state){case xt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case xt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case xt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case xt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=xt.NONE}}function fy(i){this.enabled!==!1&&i.preventDefault()}function py(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.ownerDocument.addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function my(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.ownerDocument.removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Tl=class extends Br{constructor(e){super(e),this.type=hn}parse(e){let a=function(v,P){switch(v){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(P||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(P||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(P||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(P||""))}},f=function(v,P,R){P=P||1024;let F=v.pos,C=-1,E=0,D="",U=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));for(;0>(C=U.indexOf(`
`))&&E<P&&F<v.byteLength;)D+=U,E+=U.length,F+=128,U=String.fromCharCode.apply(null,new Uint16Array(v.subarray(F,F+128)));return-1<C?(R!==!1&&(v.pos+=E+C+1),D+U.slice(0,C)):!1},p=function(v){let P=/^#\?(\S+)/,R=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,I=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,F=/^\s*FORMAT=(\S+)\s*$/,C=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,E={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,U;for((v.pos>=v.byteLength||!(D=f(v)))&&a(1,"no header found"),(U=D.match(P))||a(3,"bad initial token"),E.valid|=1,E.programtype=U[1],E.string+=D+`
`;D=f(v),D!==!1;){if(E.string+=D+`
`,D.charAt(0)==="#"){E.comments+=D+`
`;continue}if((U=D.match(R))&&(E.gamma=parseFloat(U[1])),(U=D.match(I))&&(E.exposure=parseFloat(U[1])),(U=D.match(F))&&(E.valid|=2,E.format=U[1]),(U=D.match(C))&&(E.valid|=4,E.height=parseInt(U[1],10),E.width=parseInt(U[2],10)),E.valid&2&&E.valid&4)break}return E.valid&2||a(3,"missing format specifier"),E.valid&4||a(3,"missing image size specifier"),E},m=function(v,P,R){let I=P;if(I<8||I>32767||v[0]!==2||v[1]!==2||v[2]&128)return new Uint8Array(v);I!==(v[2]<<8|v[3])&&a(3,"wrong scanline width");let F=new Uint8Array(4*P*R);F.length||a(4,"unable to allocate buffer space");let C=0,E=0,D=4*I,U=new Uint8Array(4),O=new Uint8Array(D),V=R;for(;V>0&&E<v.byteLength;){E+4>v.byteLength&&a(1),U[0]=v[E++],U[1]=v[E++],U[2]=v[E++],U[3]=v[E++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=I)&&a(3,"bad rgbe scanline format");let B=0,G;for(;B<D&&E<v.byteLength;){G=v[E++];let te=G>128;if(te&&(G-=128),(G===0||B+G>D)&&a(3,"bad scanline data"),te){let ae=v[E++];for(let Y=0;Y<G;Y++)O[B++]=ae}else O.set(v.subarray(E,E+G),B),B+=G,E+=G}let X=I;for(let te=0;te<X;te++){let ae=0;F[C]=O[te+ae],ae+=I,F[C+1]=O[te+ae],ae+=I,F[C+2]=O[te+ae],ae+=I,F[C+3]=O[te+ae],C+=4}V--}return F},g=function(v,P,R,I){let F=v[P+3],C=Math.pow(2,F-128)/255;R[I+0]=v[P+0]*C,R[I+1]=v[P+1]*C,R[I+2]=v[P+2]*C,R[I+3]=1},y=function(v,P,R,I){let F=v[P+3],C=Math.pow(2,F-128)/255;R[I+0]=bi.toHalfFloat(Math.min(v[P+0]*C,65504)),R[I+1]=bi.toHalfFloat(Math.min(v[P+1]*C,65504)),R[I+2]=bi.toHalfFloat(Math.min(v[P+2]*C,65504)),R[I+3]=bi.toHalfFloat(1)},u=new Uint8Array(e);u.pos=0;let h=p(u),x=h.width,b=h.height,M=m(u.subarray(u.pos),x,b),T,S,_;switch(this.type){case cn:_=M.length/4;let v=new Float32Array(_*4);for(let R=0;R<_;R++)g(M,R*4,v,R*4);T=v,S=cn;break;case hn:_=M.length/4;let P=new Uint16Array(_*4);for(let R=0;R<_;R++)y(M,R*4,P,R*4);T=P,S=hn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:x,height:b,data:T,header:h.string,gamma:h.gamma,exposure:h.exposure,type:S,colorSpace:qi,minFilter:Ft,magFilter:Ft,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var El=class extends Tl{constructor(e){console.warn("RGBELoader has been deprecated. Please use HDRLoader instead."),super(e)}};function hf(i,e,t){let{gardenStone:n,postBrick:s,tuscanBrick:r,tuscanFenceWall:a,copingStone:o,fenceIron:l,timber:c}=t,d=[[[-19,-17],[19,-17]],[[-19,-17],[-19,20.5]],[[19,-17],[19,20.5]],[[-19,20.5],[-2.1,20.5]],[[2.1,20.5],[7,20.5]],[[12,20.5],[19,20.5]]],f=new Map,p=new i.MeshStandardMaterial({color:"#48525b",roughness:.47,metalness:.52,side:i.DoubleSide}),m=c,g=[l,p],y="iron",u=!0,h=(S,_,v,P,R,I,F,C,E=!0)=>{let D=new i.Mesh(new i.BoxGeometry(_,v,P),R);return D.position.set(I,F,C),D.castShadow=E,D.receiveShadow=!0,S.add(D),D},x=(S,_,v,P,R=!1)=>{if(!_.length)return;let I=new i.BoxGeometry(...v),F=new i.InstancedMesh(I,P,_.length),C=new i.Matrix4,E=new i.Quaternion,D=new i.Vector3(1,1,1);for(let U=0;U<_.length;U++){let[O,V,B,G=0]=_[U];E.setFromEuler(new i.Euler(G,0,0)),C.compose(new i.Vector3(O,V,B),E,D),F.setMatrixAt(U,C)}return F.instanceMatrix.needsUpdate=!0,F.castShadow=R,F.receiveShadow=!0,S.add(F),F},b=(S,_,v=l,P=[.45,1.47])=>{for(let R of P)h(S,_,.082,.092,v,0,R,0,!1)};function M(S,_,v){let P=v==="tuscan"||v==="brickIron";if(v==="tuscan")h(S,_,1.77,.24,a,0,.97,0),h(S,_+.08,.135,.41,o,0,1.91,0),h(S,_,.26,.35,n,0,.15,0);else if(v==="stone")h(S,_,.98,.27,n,0,.54,0),h(S,_+.1,.105,.42,o,0,1.08,0);else if(v==="wood"||v==="ranch"||v==="louvers"){if(v==="wood")for(let R=.3;R<=1.65;R+=.19)h(S,_,.14,.105,m,0,R,0,!1);if(v==="ranch")for(let R=.38;R<=1.8;R+=.33)h(S,_,.25,.09,p,0,R,0,!1);if(v==="louvers"){let R=[];for(let I=.24;I<=1.82;I+=.16)R.push([0,I,0,-.42]);x(S,R,[_,.18,.08],p,!1)}}else if(v==="profiled"){h(S,_,.3,.28,n,0,.18,0,!1);let R=Math.max(20,Math.ceil(_/.12)),I=[],F=[];for(let D=0;D<=R;D++){let U=-_/2+_*D/R,O=.1*Math.sin(U*2*Math.PI/.3);I.push(U,.3,O,U,1.98,O)}for(let D=0;D<R;D++){let U=D*2;F.push(U,U+1,U+2,U+1,U+3,U+2)}let C=new i.BufferGeometry;C.setAttribute("position",new i.Float32BufferAttribute(I,3)),C.setIndex(F),C.computeVertexNormals();let E=new i.Mesh(C,p);E.castShadow=!0,E.receiveShadow=!0,S.add(E),h(S,_,.075,.18,l,0,2.02,0,!1)}else if(v==="panel3d"){let R=[];for(let F=-_/2+.12;F<_/2;F+=.21)R.push([F,1.02,0]);x(S,R,[.029,1.9,.032],l,!1);let I=[];for(let F=.22;F<2.04;F+=.25)I.push([0,F,0]);x(S,I,[_,.034,.03],l,!1),b(S,_,l,[.15,1.94])}else if(v==="picket"||v==="chess"){b(S,_,l,[.43,1.55]);let R=v==="chess"?2:1,I=[],F=Math.ceil(_/(v==="chess"?.225:.28));for(let C=0;C<R;C++)for(let E=0;E<F;E++){let D=-_/2+(E+.5+(C?.5:0))*_/F;D>_/2-.1||I.push([D,1.02,C?.11:-.08])}x(S,I,[.14,1.73,.05],p,!0)}else if(v==="brickIron"){h(S,_,.55,.31,a,0,.3,0,!1),h(S,_,.105,.43,o,0,.61,0,!1),b(S,_,l,[.75,1.9]);let R=[];for(let I=-_/2+.15;I<_/2;I+=.25)R.push([I,1.32,0]);x(S,R,[.05,1.25,.052],p,!1)}else{b(S,_,l,[.4,1.7]);let R=[];for(let I=-_/2+.11;I<_/2;I+=.24)R.push([I,1.1,0]);x(S,R,[.048,1.79,.048],l,!1);for(let I=-_/2+.18;I<_/2;I+=.73){let F=new i.Mesh(new i.TorusGeometry(.16,.025,6,18,Math.PI),l);F.position.set(I,1.28,.045),S.add(F)}}(P||v==="stone")&&h(S,_,.16,.43,n,0,.09,0,!1)}function T(S){let _=new i.Group;_.name="Fence \xB7 "+S;let v=[],P=new Map,R=["tuscan","stone","brickIron"].includes(S);for(let[[U,O],[V,B]]of d){let G=V-U,X=B-O,te=Math.hypot(G,X),ae=new i.Group;ae.position.set((U+V)/2,0,(O+B)/2),ae.rotation.y=-Math.atan2(X,G),_.add(ae),M(ae,te,S);let Y=Math.max(1,Math.ceil(te/(R?3.4:4)));for(let z=0;z<=Y;z++){let W=z/Y,K=U+G*W,J=O+X*W;P.set(K.toFixed(3)+":"+J.toFixed(3),[K,J])}}let I=S==="tuscan"||S==="brickIron"?r:S==="stone"?n:s,F=S==="tuscan"?2.17:S==="brickIron"?2:2.02;for(let[U,O]of P.values()){let V=R?.52:.2;h(_,V,F,V,R?I:l,U,F/2+.05,O),R&&h(_,V+.13,.105,V+.13,o,U,F+.12,O)}let C=20.5,E=R?I:s,D=R?2.6:2.25;for(let U of[{a:-2.1,b:2.1,name:"\u041A\u0430\u043B\u0438\u0442\u043A\u0430"},{a:7,b:12,name:"\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"}]){let O=U.b-U.a;for(let V of[U.a,U.b]){h(_,.38,D,.38,E,V,D/2,C),h(_,.51,.13,.51,o,V,D+.085,C);let B=new i.Mesh(new i.SphereGeometry(.1,10,7),new i.MeshStandardMaterial({color:"#f4d7a6",emissive:"#a56d39",emissiveIntensity:.2}));B.position.set(V,D+.22,C),_.add(B)}for(let V of[-1,1]){let B=new i.Group;B.name=U.name,B.position.set(V===-1?U.a+.12:U.b-.12,0,C),B.rotation.y=u?V*.48:0,U.name==="\u0412\u043E\u0440\u043E\u0442\u0430 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F"&&v.push({pivot:B,side:V}),_.add(B);let G=O/2-.24,X=V===-1?G/2:-G/2;for(let ae of[.4,1.61])h(B,G,.09,.09,l,X,ae,0,!1);let te=Math.max(6,Math.round(G/.22));for(let ae=0;ae<te;ae++){let Y=X-G/2+(ae+.5)*G/te;h(B,.055,1.65,.065,p,Y,1.01,0,!1)}}}return _.userData.vehicleGatePivots=v,e.add(_),f.set(S,_),_}return{setType(S){y=S;for(let[v,P]of f)P.visible=v===S;let _=f.get(S)||T(S);return _.visible=!0,_},setColor(S){for(let _ of g)_.color.set(S)},getType(){return y},setVehicleAccess(S){u=!!S;for(let _ of f.values())for(let{pivot:v,side:P}of _.userData.vehicleGatePivots||[])v.rotation.y=u?P*.48:0},available:["iron","tuscan","wood","stone","brickIron","louvers","picket","chess","ranch","profiled","panel3d"]}}function uf(i,e,{tileRoof:t,roofSurface:n}){let s=new i.MeshStandardMaterial({color:"#666d70",roughness:.76,metalness:.17,envMapIntensity:.38,side:i.DoubleSide}),r=new i.MeshStandardMaterial({color:"#72736d",roughness:.83,metalness:.07,side:i.DoubleSide}),a=new i.MeshStandardMaterial({color:"#737577",roughness:.94,metalness:0,side:i.DoubleSide}),o=new i.MeshStandardMaterial({color:"#70797b",roughness:.4,metalness:.62,side:i.DoubleSide}),l=[s,r,a,o,n],c=new Map,d=["slate","terracotta","graphite","ceramic","metalGraphite","metalBurgundy","metal3d","metalModular","metalTramontana","standingSeam","flexible","composite","profiled"],f="slate",p=!0;function m(g,y,u){let b=[],M=[],T=[],S={metalGraphite:{wave:.035,step:.012,period:.78,courses:19},metalBurgundy:{wave:.035,step:.012,period:.78,courses:19},metal3d:{wave:.067,step:.023,period:.91,courses:18},metalModular:{wave:.044,step:.018,period:.8,courses:20},metalTramontana:{wave:.062,step:.026,period:.86,courses:18},standingSeam:{wave:.13,step:0,period:1.13,courses:0},composite:{wave:.07,step:.06,period:.58,courses:7},flexible:{wave:.003,step:.018,period:.46,courses:9},profiled:{wave:.14,step:0,period:.64,courses:0}}[y];for(let P=0;P<=72;P++){let R=P/72;for(let I=0;I<=94;I++){let F=I/94,C=-5.3+10.6*F,E=(C+5.3)*2*Math.PI/S.period,D=S.courses===0?0:Math.pow(Math.max(0,Math.sin(2*Math.PI*R*S.courses)),10)*S.step,U=Math.cos(E),O=y==="standingSeam"?Math.pow(Math.max(0,U),18)*S.wave:y==="profiled"?Math.sin(E)*S.wave:y==="metalModular"?Math.pow(Math.abs(U),4)*S.wave:y==="metalTramontana"?(Math.pow(Math.max(0,U),3)*.7+Math.pow(Math.max(0,Math.cos(2*E+.3)),3)*.3)*S.wave:y==="metal3d"?Math.pow(Math.max(0,U),2.5)*S.wave:Math.pow(Math.max(0,U),1.4)*S.wave;b.push(g*7.25*(1-R),6.98+2.07*R+.052+D+O,C),M.push(F*2.75,R*3.4)}}for(let P=0;P<72;P++)for(let R=0;R<94;R++){let I=P*95+R,F=I+94+1;T.push(I,F,I+1,F,F+1,I+1)}let _=new i.BufferGeometry;_.setAttribute("position",new i.Float32BufferAttribute(b,3)),_.setAttribute("uv",new i.Float32BufferAttribute(M,2)),_.setIndex(T),_.computeVertexNormals();let v=new i.Mesh(_,u);return v.castShadow=!0,v.receiveShadow=!0,v}for(let g of d){if(["slate","terracotta","graphite","ceramic"].includes(g))continue;let y=new i.Group;y.name="Roof "+g;let u=g==="standingSeam"?o:g==="composite"?r:g==="flexible"?a:s;y.add(m(-1,g,u),m(1,g,u)),y.visible=!1,e.add(y),c.set(g,y)}return{types:d,metalMat:s,compositeMat:r,flexibleMat:a,seamMat:o,setType(g){let y=d.includes(g)?g:"slate";f=y,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(y);for(let[u,h]of c)h.visible=p&&u===y},setEnabled(g){p=!!g,t.visible=p&&["slate","terracotta","graphite","ceramic"].includes(f);for(let[y,u]of c)u.visible=p&&y===f},getMaterial(){return["slate","terracotta","graphite","ceramic"].includes(f)?n:f==="standingSeam"?o:f==="composite"?r:f==="flexible"?a:s},setColor(g){for(let y of l)y.color.set(g)},setPhotoMap(g){for(let y of[s,o])y.map=g,y.needsUpdate=!0},setMetalNormal(g){for(let y of[s,o])y.normalMap=g,y.normalScale.set(.075,.075),y.needsUpdate=!0},setMetalRoughness(g){o.roughnessMap=g,o.needsUpdate=!0,s.roughnessMap=null,s.needsUpdate=!0},setTileMap(g){n.map=g,n.needsUpdate=!0},getType(){return f}}}var oa={metalGraphite:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metalBurgundy:{pitch:.78,amplitude:.035,step:.35,stepHeight:.012,style:"classic"},metal3d:{pitch:.91,amplitude:.067,step:.4,stepHeight:.023,style:"high"},metalModular:{pitch:.8,amplitude:.044,step:.35,stepHeight:.018,style:"symmetric"},metalTramontana:{pitch:.86,amplitude:.062,step:.4,stepHeight:.026,style:"sculpted"},composite:{pitch:.61,amplitude:.057,step:.35,stepHeight:.023,style:"classic"},profiled:{pitch:.58,amplitude:.075,step:.99,stepHeight:0,style:"symmetric"}},gy=i=>Math.max(0,Math.min(1,i)),_y=i=>i-Math.floor(i);function xy(i,e,t){let n=oa[i];if(!n)return 0;let s=2*Math.PI*e/n.pitch,r=Math.cos(s),a;n.style==="symmetric"?a=Math.pow(Math.abs(r),4)*n.amplitude:n.style==="high"?a=Math.pow(Math.max(0,r),2.5)*n.amplitude:n.style==="sculpted"?a=(.65*Math.pow(Math.max(0,r),3)+.35*Math.pow(Math.max(0,Math.cos(2*s+.3)),3))*n.amplitude:a=Math.pow(Math.max(0,r),1.35)*n.amplitude;let o=_y(t/n.step),l=n.stepHeight*Math.pow(Math.max(0,Math.cos(2*Math.PI*o)),6);return a+l}function Cl(i,e,t){let n=e.length===3,s=typeof window<"u"&&window.matchMedia("(min-width:850px)").matches?80:56,r=[...e.map(u=>u[0])],a=[...e.map(u=>u[2])],o=Math.max(...r)-Math.min(...r),c=Math.max(...a)-Math.min(...a)>=o,d=[],f=[],p=[],m=(u,h)=>{if(n){let S=e[0],_=e[1],v=e[2],P=1-u-h;return[S[0]*P+_[0]*u+v[0]*h,S[1]*P+_[1]*u+v[1]*h,S[2]*P+_[2]*u+v[2]*h]}let[x,b,M,T]=e;return[x[0]*(1-u)*(1-h)+b[0]*u*(1-h)+M[0]*u*h+T[0]*(1-u)*h,x[1]*(1-u)*(1-h)+b[1]*u*(1-h)+M[1]*u*h+T[1]*(1-u)*h,x[2]*(1-u)*(1-h)+b[2]*u*(1-h)+M[2]*u*h+T[2]*(1-u)*h]},g=(u,h)=>{let x=m(u,h),b=n?Math.min(u,h,1-u-h):Math.min(u,h,1-u,1-h),M=gy(b*80),T=c?x[2]:x[0],S=c?x[0]:x[2];x[1]+=xy(t,T,S)*M,d.push(...x),f.push(x[0]*.26+x[2]*.13,x[2]*.24+x[1]*.11)};if(n){let u=(h,x)=>h*(s+1)-h*(h-1)/2+x;for(let h=0;h<=s;h++)for(let x=0;x<=s-h;x++)g(h/s,x/s);for(let h=0;h<s;h++)for(let x=0;x<s-h;x++){let b=u(h,x),M=u(h+1,x),T=u(h,x+1);p.push(b,M,T),x<s-h-1&&p.push(M,u(h+1,x+1),T)}}else{for(let u=0;u<=s;u++)for(let h=0;h<=s;h++)g(h/s,u/s);for(let u=0;u<s;u++)for(let h=0;h<s;h++){let x=u*(s+1)+h,b=x+1,M=x+s+1;p.push(x,b,M,b,M+1,M)}}let y=new i.BufferGeometry;return y.setAttribute("position",new i.Float32BufferAttribute(d,3)),y.setAttribute("uv",new i.Float32BufferAttribute(f,2)),y.setIndex(p),y.computeVertexNormals(),y}function df(i,e,{roofSystem:t,roofRidge:n,gableFacades:s}){let r=["gable","hip","flat","mansard"],a=new Map,o=7.28,l=5.3,c=7.06,d=new i.MeshStandardMaterial({color:"#ccc7bd",roughness:.68,metalness:.04,side:i.DoubleSide}),f=new i.MeshStandardMaterial({color:"#e4dbca",roughness:.87,metalness:0,side:i.DoubleSide}),p=new i.MeshStandardMaterial({color:"#d2c6b4",roughness:.74,metalness:.04,side:i.DoubleSide}),m=t.getMaterial(),g=(W,K,J=m)=>{let se=[],ge=[],fe=[];K.forEach(ne=>{se.push(...ne),ge.push(ne[0]*.24,ne[2]*.22+ne[1]*.1)});for(let ne=1;ne<K.length-1;ne++)fe.push(0,ne,ne+1);let Pe=new i.BufferGeometry;Pe.setAttribute("position",new i.Float32BufferAttribute(se,3)),Pe.setAttribute("uv",new i.Float32BufferAttribute(ge,2)),Pe.setIndex(fe),Pe.computeVertexNormals();let Be=new i.Mesh(Pe,J);return Be.castShadow=!0,Be.receiveShadow=!0,J===m&&(Be.userData.isRoofShell=!0,Be.userData.corners=K.map(ne=>[...ne]),Be.userData.baseGeometry=Pe),W.add(Be),Be},y=(W,K,J,se,ge,fe,Pe,Be=d)=>{let ne=new i.Mesh(new i.BoxGeometry(K,J,se),Be);return ne.position.set(ge,fe,Pe),ne.castShadow=!0,ne.receiveShadow=!0,W.add(ne),ne},u=W=>{let K=new i.Group;return K.name="KASKAD roof "+W,K.visible=!1,e.add(K),a.set(W,K),K},h=6.4,x=4.5,b=(W,K,J=!1)=>{let se=ge=>J?6.98+2.07*(1-Math.abs(ge)/7.25)-.14:K;for(let ge of[-1,1]){let fe=ge*o,Pe=ge*h;g(W,[[fe,se(fe),-x],[Pe,se(Pe),-x],[Pe,se(Pe),x],[fe,se(fe),x]],f)}for(let ge of[-1,1])for(let fe of[-1,1]){let Pe=ge*l,Be=ge*x,ne=fe*o,de=fe*h;J?g(W,[[0,se(0),Pe],[ne,se(ne),Pe],[de,se(de),Be],[0,se(0),Be]],f):g(W,[[0,K,Pe],[ne,K,Pe],[de,K,Be],[0,K,Be]],f)}for(let ge of[-1,1])y(W,.18,.22,l*2,ge*o,J?6.85:K+.1,0,p);if(J)for(let ge of[-1,1])for(let fe of[-1,1]){let Pe=o,Be=9.05-6.98,ne=Math.hypot(Pe,Be),de=y(W,ne,.19,.2,fe*o/2,(6.98+9.05)/2-.08,ge*l,p);de.rotation.z=fe===-1?Math.atan2(Be,Pe):-Math.atan2(Be,Pe)}else for(let ge of[-1,1])y(W,o*2+.18,.22,.18,0,K+.1,ge*l,p)},M=u("gable");b(M,6.91,!0);let T=u("hip"),S=2.1,_=8.78;g(T,[[-o,c,-l],[o,c,-l],[0,_,-S]]),g(T,[[o,c,l],[-o,c,l],[0,_,S]]),g(T,[[-o,c,l],[-o,c,-l],[0,_,-S],[0,_,S]]),g(T,[[o,c,-l],[o,c,l],[0,_,S],[0,_,-S]]),b(T,6.92);let v=u("flat");g(v,[[-o,7.2,-l],[o,7.2,-l],[o,7.2,l],[-o,7.2,l]]);for(let W of[-o,o])y(v,.23,.47,l*2+.3,W,7.37,0);for(let W of[-l,l])y(v,o*2+.4,.47,.23,0,7.37,W);b(v,7.01);let P=u("mansard"),R=[[-o,c,-l],[o,c,-l],[o,c,l],[-o,c,l]],I=[[-5.55,8.31,-3.91],[5.55,8.31,-3.91],[5.55,8.31,3.91],[-5.55,8.31,3.91]],F=[[-4.35,8.77,-2.95],[4.35,8.77,-2.95],[4.35,8.77,2.95],[-4.35,8.77,2.95]];for(let W=0;W<4;W++){let K=(W+1)%4;g(P,[R[W],R[K],I[K],I[W]]),g(P,[I[W],I[K],F[K],F[W]])}let C=9.84,E=1.42;g(P,[F[0],F[1],[0,C,-E]]),g(P,[F[2],F[3],[0,C,E]]),g(P,[F[3],F[0],[0,C,-E],[0,C,E]]),g(P,[F[1],F[2],[0,C,E],[0,C,-E]]),b(P,6.92);let D=new i.MeshStandardMaterial({color:"#50585a",metalness:.48,roughness:.54}),U=new i.MeshStandardMaterial({color:"#4d5557",metalness:.36,roughness:.62}),O=(W,K,J,se)=>{for(let ge of[0,.15]){let fe=y(W,.065,.065,se*2,K,J+ge,0,D);fe.name="\u0421\u043D\u0435\u0433\u043E\u0437\u0430\u0434\u0435\u0440\u0436\u0430\u0442\u0435\u043B\u044C, \u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0435 \u0434\u0432\u0435 \u0442\u0440\u0443\u0431\u044B"}for(let ge of[-se+.6,0,se-.6])y(W,.075,.26,.12,K,J-.08,ge,D)},V=(W,K)=>{for(let J of[-1,1]){y(W,.2,.13,l*2+.05,J*(o+.06),K,0,U).name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u044B\u0439 \u0436\u0435\u043B\u043E\u0431";let se=y(W,.115,6.6,.115,J*(o+.06),3.57,J===1?l-.35:-l+.35,U);se.name="\u0412\u043E\u0434\u043E\u0441\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u0440\u0443\u0431\u0430"}for(let J of[-1,1])y(W,o*2+.12,.13,.2,0,K,J*(l+.06),U)};O(M,-6.4,7.28,l-.36),O(M,6.4,7.28,l-.36),O(T,-6.47,7.31,l-.38),O(T,6.47,7.31,l-.38),O(P,-6.63,7.57,l-.38),O(P,6.63,7.57,l-.38),V(M,6.91),V(T,6.91),V(P,6.91);let B=[M,T,P],G=new i.MeshStandardMaterial({color:"#476676",roughness:.32,metalness:.15}),X=new i.MeshStandardMaterial({color:"#454f51",roughness:.52,metalness:.24}),te=Math.atan2(8.31-7.06,7.28-5.55);for(let W of[-1,1])for(let K of[-2.15,2.05]){let J=W*6.36,se=7.06+(7.28-Math.abs(J))*(8.31-7.06)/(7.28-5.55),ge=new i.Group;ge.position.set(J,se+.11,K),ge.rotation.z=W===1?-te:te,P.add(ge),y(ge,1.02,.06,1.31,0,0,0,X),y(ge,.88,.045,1.14,0,.055,0,G);for(let fe of[-.48,.48])y(ge,.065,.08,1.35,fe,.065,0,p);for(let fe of[-.62,.62])y(ge,1.04,.08,.07,0,.065,fe,p)}let ae="gable";function Y(W){ae=r.includes(W)?W:"gable",t.setEnabled(ae==="gable"),n.visible=ae==="gable",s.visible=ae==="gable";for(let[K,J]of a)J.visible=K===ae;z()}function z(){let W=t.getMaterial(),K=t.getType();W?.color&&(D.color.copy(W.color),U.color.copy(W.color).multiplyScalar(.73));let J=a.get(ae);if(J)for(let se of J.children){if(!se.userData.isRoofShell)continue;se.material=W;let ge=ae==="flat"||!oa[K]?"flat":K;if(se.userData.currentProfile!==ge){if(se.userData.dynamicGeometry&&(se.userData.dynamicGeometry.dispose(),se.userData.dynamicGeometry=null),ge==="flat")se.geometry=se.userData.baseGeometry;else{let fe=Cl(i,se.userData.corners,K);se.geometry=fe,se.userData.dynamicGeometry=fe}se.userData.currentProfile=ge}}}return Y(ae),{forms:r,setShape:Y,setMaterial:z,getShape:()=>ae,getVisibleForms:()=>[...a].filter(([W,K])=>K.visible).map(([W])=>W)}}function ff(i,e,{trunkMat:t}){let n=document.createElement("canvas");n.width=256,n.height=256;let s=n.getContext("2d"),r=43581,a=()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296);s.clearRect(0,0,256,256);for(let _=0;_<72;_++){let v=18+a()*220,P=19+a()*210,R=a()*6.28,I=9+a()*14,F=a()>.65?"#66834e":a()>.33?"#4c7451":"#537c4e";s.save(),s.translate(v,P),s.rotate(R),s.fillStyle=F,s.beginPath(),s.ellipse(0,0,I*.54,I*1,0,0,Math.PI*2),s.fill(),s.strokeStyle="#96aa77",s.globalAlpha=.3,s.lineWidth=1,s.beginPath(),s.moveTo(0,-I*.75),s.lineTo(0,I*.77),s.stroke(),s.restore()}let o=new i.CanvasTexture(n);o.colorSpace=i.SRGBColorSpace,o.anisotropy=4;let l=["#d4e2b9","#9aba8a","#b6c991","#88aa7b"],c=l.map(_=>new i.MeshStandardMaterial({color:_,map:o,transparent:!0,alphaTest:.28,side:i.DoubleSide,roughness:1,depthWrite:!0,metalness:0})),d=l.map(()=>[]),f=(_,v,P,R,I,F,C=0,E=0)=>{let D=new i.Mesh(new i.CylinderGeometry(R,I,F,9),t);D.position.set(_,v,P),D.rotation.set(C,0,E),D.castShadow=!0,e.add(D)},p=(_,v,P,R,I,F,C)=>{let E=new i.Vector3(_,v,P),D=new i.Vector3(R,I,F),U=D.clone().sub(E),O=new i.Mesh(new i.CylinderGeometry(C*.62,C,U.length(),7),t);O.position.copy(E.add(D).multiplyScalar(.5)),O.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),U.normalize()),O.castShadow=!0,e.add(O)};function m(_,v,P,R,I,F=0,C=0){d[F%d.length].push([_,v,P,R,I,C])}function g(_,v,P=1,R=0){let I=(5.2+R%3*.55)*P;f(_,I*.37,v,.14*P,.28*P,I*.74);for(let F=0;F<7;F++){let C=F*2.399+R,E=Math.cos(C),D=Math.sin(C),U=(1.25+F%3*.35)*P,O=I*.73+F%3*.23*P;p(_,I*.6,v,_+E*U*.67,O,v+D*U*.67,.09*P);let V=_+E*U*.77,B=v+D*U*.77;for(let G=0;G<14;G++){let X=G*2.4+F,te=(.2+a()*.83)*P,ae=O+(a()-.33)*1.48*P;m(V+Math.cos(X)*te,ae,B+Math.sin(X)*te,(.78+a()*.53)*P,(.6+a()*.45)*P,(G+F)%4,X+a()*.4)}}}function y(_,v,P=4,R=0){f(_,P*.45,v,.095,.18,P*.9);for(let I=0;I<9;I++){let F=I/9,C=.55+F*P*.82,E=.78*(1-F)+.11;for(let D=0;D<7;D++){let U=D*6.283/7+I*.67,O=E*(.6+a()*.4);m(_+Math.cos(U)*O,C+(a()-.5)*.33,v+Math.sin(U)*O,.52+O*.5,.78+O*.5,(D+I+R)%4,U)}}}let u=[[11.08,17.62,-4.73,5.75],[7.05,12.22,7.18,20.85],[-14.38,-9.6,-3.52,.53],[-4.7,4.7,-19,-4.2],[-1.65,1.65,5.55,20.95],[8.68,10.03,-8.5,7.15]],h=(_,v,P)=>u.every(([R,I,F,C])=>_<R-P||_>I+P||v<F-P||v>C+P);[[-14.8,-10.6,1.05],[13.6,-11.6,.97],[-14.7,13.2,.84],[15.8,14.2,.92],[-6.8,-13,.78]].forEach((_,v)=>{h(_[0],_[1],2.8*_[2])&&g(..._,v)}),[[-11.6,4],[-11.2,0],[-10.6,-4],[16.4,-4],[16.4,0],[16.4,4],[5,-9],[-6,-10],[-13,-10]].forEach(([_,v],P)=>{h(_,v,1.3)&&y(_,v,3.15+P%3*.65,P)});for(let _=0;_<14;_++){let v=-8.9+_%7*.57,P=8.2+_%2*1;for(let R=0;R<5;R++){let I=R*6.28/5,F=.25+R%2*.16;m(v+Math.cos(I)*F,.4+R%2*.18,P+Math.sin(I)*F,.5,.42,(_+R)%4,I)}}let x=new i.PlaneGeometry(1,1),b=new i.Matrix4,M=new i.Quaternion,T=new i.Vector3,S=new i.Vector3;for(let[_,v]of d.entries()){let P=new i.InstancedMesh(x,c[_],v.length);for(let R=0;R<v.length;R++){let[I,F,C,E,D,U]=v[R];S.set(I,F,C),M.setFromEuler(new i.Euler(0,U,Math.sin(U)*.17)),T.set(E,D,1),b.compose(S,M,T),P.setMatrixAt(R,b)}P.instanceMatrix.needsUpdate=!0,P.castShadow=!1,P.receiveShadow=!0,P.frustumCulled=!1,e.add(P)}}function pf(i,e,{limestone:t,quartz:n,bronze:s,doorMat:r,roofMat:a,porchElements:o,balconyElements:l}){let c=["classic","italian","modern","estate","kavkaz","coastal","practical","craft"],d=new Map,f={graphite:new i.MeshStandardMaterial({color:"#414f4c",roughness:.45,metalness:.22}),timber:new i.MeshStandardMaterial({color:"#886348",roughness:.82}),pale:new i.MeshStandardMaterial({color:"#e7ddc8",roughness:.85}),stone:new i.MeshStandardMaterial({color:"#bcad92",roughness:.87}),copper:new i.MeshStandardMaterial({color:"#9a6342",roughness:.52,metalness:.25}),glass:new i.MeshStandardMaterial({color:"#a4c6cf",roughness:.18,metalness:.16,transparent:!0,opacity:.72}),white:new i.MeshStandardMaterial({color:"#e9e8e1",roughness:.86})},p=(u,h,x,b,M,T,S,_,v=0)=>{let P=new i.Mesh(new i.BoxGeometry(x,b,M),h);return P.position.set(T,S,_),P.rotation.y=v,P.castShadow=!0,P.receiveShadow=!0,u.add(P),P},m=(u,h,x,b,M,T=t)=>{let S=new i.Mesh(new i.TorusGeometry(M,.1,10,36,Math.PI),T);S.position.set(h,x,b),S.castShadow=!0,u.add(S);let _=x-.5;p(u,T,.2,_,.19,h-M,.5+_/2,b),p(u,T,.2,_,.19,h+M,.5+_/2,b)},g=(u,h)=>{let x=new i.Group;x.name="\u041A\u0410\u0421\u041A\u0410\u0414 \u0410\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,h(x),x.visible=!1,e.add(x),d.set(u,x)};g("classic",u=>{for(let h of[3.43,6.62]){p(u,f.white,13.25,.1,.23,0,h,4.58);for(let x of[-6.55,6.55])p(u,f.white,.19,.1,9.25,x,h,0)}p(u,f.copper,3.15,.19,.78,0,6.8,4.78)}),g("italian",u=>{for(let h of[-3.7,0,3.7])m(u,h,3,6.59,1,f.pale);for(let h of[-4.6,-2.2,2.2,4.6])p(u,f.copper,1.96,.12,.37,h,6.53,4.77);for(let h of[-6.55,6.55])p(u,f.copper,.26,5.68,.25,h,3.9,4.54);p(u,f.copper,13.25,.17,.42,0,6.88,4.67)}),g("modern",u=>{p(u,f.graphite,13.4,.38,.55,0,6.72,4.75),p(u,f.graphite,8.2,.17,2.5,0,3.52,5.52),p(u,f.glass,7.35,.85,.14,0,4.03,4.64);for(let h of[-5.65,-5.12,-4.59,4.59,5.12,5.65])p(u,f.graphite,.19,5.85,.23,h,3.71,4.74);for(let h of[-3.6,-3.1,3.1,3.6])p(u,f.graphite,.16,4.6,.24,6.52,3.75,h,Math.PI/2);p(u,f.glass,4.95,2.17,.09,0,2.1,4.74),p(u,f.graphite,2.9,.1,2.2,0,3.2,5.46)}),g("estate",u=>{for(let h of[-5.15,5.15])p(u,f.white,.75,6.2,.4,h,3.56,4.73),p(u,f.white,1.07,.3,.55,h,6.65,4.76);p(u,f.white,10.9,.35,1.37,0,6.91,5.15),p(u,f.copper,7.1,.1,1.45,0,7.17,5)}),g("kavkaz",u=>{m(u,0,3.3,6.52,1.42,f.stone);for(let h of[-5.98,5.98]){p(u,f.stone,.72,5.9,.37,h,3.9,4.77);for(let x=0;x<10;x++)p(u,f.pale,.8,.16,.42,h,1+x*.52,4.81)}for(let h of[-3.55,3.55])p(u,f.stone,.28,5.78,.75,6.46,3.73,h),p(u,f.pale,.28,5.78,.75,-6.46,3.73,h);p(u,f.stone,12.85,.23,.82,0,7.01,4.92)}),g("coastal",u=>{p(u,f.pale,13.1,.25,.25,0,6.72,4.62),p(u,f.graphite,7.1,.15,2.5,0,3.29,5.41);for(let h of[-4.4,-4.02,-3.64,-3.26,3.26,3.64,4.02,4.4])p(u,f.timber,.14,2.35,.18,h,5.23,4.72);for(let h of[-2.8,-2.42,-2.04,2.04,2.42,2.8])p(u,f.timber,.18,2.6,.18,6.45,5.2,h,Math.PI/2)}),g("practical",u=>{p(u,f.graphite,3.8,.15,2.4,0,3.1,5.68);for(let h of[-2,2])p(u,f.graphite,.16,3.12,.19,h,1.58,6.45);p(u,f.graphite,12.85,.12,.2,0,6.83,4.65)}),g("craft",u=>{for(let h of[-5.7,-3.3,-1,1,3.3,5.7])p(u,f.timber,.13,5.82,.16,h,3.82,4.64);for(let h of[-4.9,-2.64,2.64,4.9])p(u,f.timber,.26,1.55,.18,h-.96,5.39,4.78),p(u,f.timber,.26,1.55,.18,h+.96,5.39,4.78);p(u,f.timber,5.1,.2,2.65,0,3.35,5.56);for(let h of[-2.5,2.5])p(u,f.timber,.2,2.9,.17,h,1.65,6.27);for(let h of[-3.5,3.5])p(u,f.timber,.19,5.6,.19,6.51,3.66,h)});let y=new Set(["modern","coastal","practical","craft"]);return{styles:c,setStyle(u){let h=d.has(u)?u:"classic";for(let[b,M]of d)M.visible=b===h;let x=y.has(h);for(let b of o)b.visible=!x;for(let b of l)b.visible=!x;return h}}}var la=[{id:"courtyardL",name:"\u0413-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u0439 \u0434\u043E\u043C \u0441 \u0441\u0430\u0434\u043E\u0432\u044B\u043C \u0434\u0432\u043E\u0440\u0438\u043A\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"atriumU",name:"\u0414\u043E\u043C \u0441 \u041F-\u043E\u0431\u0440\u0430\u0437\u043D\u044B\u043C \u0434\u0432\u043E\u0440\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"stone"},{id:"crossGableT",name:"\u0414\u043E\u043C \u0441 \u043F\u043E\u043F\u0435\u0440\u0435\u0447\u043D\u044B\u043C \u043A\u0440\u044B\u043B\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"family",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \xB7 \u043E\u0434\u0438\u043D \u044D\u0442\u0430\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:150,facade:"gray"},{id:"farmhouseOne",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u0448\u0438\u0440\u043E\u043A\u0438\u043C \u043A\u0440\u044B\u043B\u044C\u0446\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:130,facade:"plaster"},{id:"brickOne",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0441 \u043F\u0430\u0440\u0430\u0434\u043D\u044B\u043C \u0432\u0445\u043E\u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:140,facade:"brick"},{id:"gardenOne",name:"\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441 \u0434\u0435\u0440\u0435\u0432\u044F\u043D\u043D\u044B\u043C\u0438 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u043C\u0438",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:120,facade:"stone"},{id:"mansardBrick",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u0444\u0440\u043E\u043D\u0442\u043E\u043D",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"brick"},{id:"mansardEstate",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \xB7 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:200,facade:"tuscan"},{id:"mansardHome",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u0444\u0430\u0441\u0430\u0434\u043D\u044B\u043C\u0438 \u043B\u044E\u043A\u0430\u0440\u043D\u0430\u043C\u0438",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"mansard",area:180,facade:"plaster"},{id:"gableAttic",name:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u0430 \u0441 \u043E\u043A\u043D\u0430\u043C\u0438 \u0432\u043E \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u0435",group:"\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"cottage",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"country",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"stone"},{id:"nordic",name:"\u0421\u043A\u0430\u043D\u0434\u0438\u043D\u0430\u0432\u0441\u043A\u0438\u0439 \u0434\u043E\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"chalet",name:"\u0428\u0430\u043B\u0435 \u0441 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"gable",area:180,facade:"stone"},{id:"barnhouse",name:"\u0411\u0430\u0440\u043D\u0445\u0430\u0443\u0441",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"gable",area:150,facade:"gray"},{id:"modernOne",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0441 \u043F\u0430\u043D\u043E\u0440\u0430\u043C\u043D\u044B\u043C\u0438 \u043E\u043A\u043D\u0430\u043C\u0438",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"minimal",name:"\u0421\u0432\u0435\u0442\u043B\u044B\u0439 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0437\u043C",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:150,facade:"plaster"},{id:"estateOne",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"kavkaz",name:"\u041A\u0430\u0432\u043A\u0430\u0437\u0441\u043A\u0438\u0439 \u0441\u0442\u0438\u043B\u044C",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"stone"},{id:"terrace",name:"\u0414\u043E\u043C \u0441 \u0441\u0430\u0434\u043E\u0432\u043E\u0439 \u0442\u0435\u0440\u0440\u0430\u0441\u043E\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"plaster"},{id:"bungalow",name:"\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0441 \u043D\u0430\u0432\u0435\u0441\u043E\u043C \u0434\u043B\u044F \u0430\u0432\u0442\u043E",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:180,facade:"gray"},{id:"italian",name:"\u0418\u0442\u0430\u043B\u044C\u044F\u043D\u0441\u043A\u0438\u0439 \u0434\u0432\u043E\u0440\u0438\u043A",group:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"coastal",name:"\u0421\u0432\u0435\u0442\u043B\u0430\u044F \u0437\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u0430\u044F \u0432\u0438\u043B\u043B\u0430",group:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0435",shape:"flat",area:180,facade:"plaster"},{id:"practical",name:"\u041F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"brick"},{id:"craft",name:"\u0421\u0430\u0434\u043E\u0432\u044B\u0439 \u0434\u043E\u043C",group:"\u041E\u0434\u043D\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:150,facade:"plaster"},{id:"classic",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"tuscan"},{id:"twoClassic",name:"\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u043A\u043E\u0442\u0442\u0435\u0434\u0436",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:220,facade:"gray"},{id:"twoBrick",name:"\u041A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"brick"},{id:"twoColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"stone"},{id:"twoModern",name:"\u0421\u043E\u0432\u0440\u0435\u043C\u0435\u043D\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"flat",area:240,facade:"plaster"},{id:"twoBalcony",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0431\u0430\u043B\u043A\u043E\u043D\u043E\u043C",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:240,facade:"gray"},{id:"twoTerrace",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0432\u0435\u0440\u0430\u043D\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:230,facade:"stone"},{id:"twoEstate",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u0430\u044F \u0443\u0441\u0430\u0434\u044C\u0431\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"hip",area:280,facade:"tuscan"},{id:"twoFamily",name:"\u041A\u043E\u043C\u043F\u0430\u043A\u0442\u043D\u044B\u0439 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"gable",area:180,facade:"brick"},{id:"twoMansard",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u0436\u0438\u043B\u043E\u0439 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:300,facade:"gray"},{id:"twoMansardBrick",name:"\u0414\u0432\u0430 \u044D\u0442\u0430\u0436\u0430, \u043A\u0438\u0440\u043F\u0438\u0447 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u0430",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:320,facade:"brick"},{id:"twoMansardColumns",name:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441 \u043A\u043E\u043B\u043E\u043D\u043D\u0430\u043C\u0438 \u0438 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u043E\u0439",group:"\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435",shape:"mansard",area:350,facade:"stone"}];function mf(i,e,{stone:t,trim:n,windowFrame:s,glass:r,wood:a,dark:o}){let l=new Map,c=(u,h,x,b,M,T,S,_=n)=>{let v=new i.Mesh(new i.BoxGeometry(h,x,b),_);return v.position.set(M,T,S),v.castShadow=!0,v.receiveShadow=!0,u.add(v),v},d=(u,h,x,b=2.5,M=n,T=.19)=>{c(u,T,b,T,h,.5+b/2,x,M),c(u,T+.13,.11,T+.13,h,.51,x,t),c(u,T+.12,.11,T+.12,h,.5+b+.08,x,t)},f=(u,h,x,b,M,T=3,S=n)=>{c(u,b,.19,M,h,T,x,S),c(u,b+.11,.055,M+.12,h,T+.12,x,o)},p=(u,h,x,b,M,T,S=a,_=.28)=>{for(let v=h;v<=x;v+=_)c(u,.095,T-M,.1,v,(T+M)/2,b,S)},m=(u,h,x,b,M,T)=>{c(u,M+.16,T+.18,.11,h,x,b,n),c(u,M,T,.055,h,x,b+.09,s),c(u,M-.18,T-.18,.03,h,x,b+.14,r),c(u,.055,T,.06,h,x,b+.185,s),c(u,M,.055,.06,h,x,b+.185,s)},g=u=>{if(l.has(u))return l.get(u);let h=new i.Group;switch(h.name="\u0410\u0432\u0442\u043E\u0440\u0441\u043A\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 \xB7 "+u,e.add(h),l.set(u,h),u){case"farmhouseOne":f(h,0,5.57,8.9,1.96,3.16,a);for(let x of[-3.95,3.95])d(h,x,6.45,2.53,a,.22);for(let x of[-5.55,5.55])c(h,.18,2.72,.19,x,2.03,4.75,a);break;case"brickOne":f(h,0,5.48,7.35,1.74,3.38,t);for(let x of[-3.2,3.2])d(h,x,6.23,2.73,n,.24);c(h,7.45,.24,.36,0,3.64,4.8,t);break;case"gardenOne":f(h,0,5.52,9.9,1.83,3.19,a);for(let x of[-4.65,-2.1,2.1,4.65])d(h,x,6.36,2.54,a,.18);p(h,-5.9,-5,4.8,.62,3.4,a,.21),p(h,5,5.9,4.8,.62,3.4,a,.21);break;case"mansardBrick":for(let x of[-5.7,5.7])c(h,.3,3.15,.36,x,2.02,4.78,t);f(h,0,5.4,5.75,1.72,3.05,o);for(let x of[-2.5,2.5])d(h,x,6.05,2.44,n,.2);break;case"mansardEstate":f(h,0,5.55,9.2,1.93,3.32,t);for(let x of[-4.18,-2.05,2.05,4.18])d(h,x,6.45,2.66,n,.18);c(h,9.5,.2,.42,0,3.57,4.82,t);break;case"cottage":c(h,.66,3.1,.65,4.5,4.37,-2.5,t),c(h,.94,.16,.94,4.5,6,-2.5,o);for(let x of[-5.9,5.9])c(h,.24,3,.4,x,2.02,4.8,n);break;case"country":for(let x of[-4.7,4.7])d(h,x,5.9,2.18,a,.22);f(h,0,5.35,10.3,1.3,2.94,a);break;case"nordic":p(h,-6.05,-4.8,4.78,.62,3.4,a,.23),p(h,4.8,6.05,4.78,.62,3.4,a,.23);for(let x of[-5.4,5.4])c(h,.18,2.9,.23,x,2.04,4.72,o);break;case"chalet":f(h,0,5.8,11,2.45,3.37,a);for(let x of[-5.1,0,5.1])d(h,x,6.74,2.72,a,.25);for(let x of[-4.8,-2.4,2.4,4.8])c(h,.14,1.18,.18,x,1.28,6.8,a);break;case"barnhouse":for(let x of[-5.95,5.95])c(h,.23,3.12,.18,x,2.05,4.73,o);m(h,-3.8,2,4.83,2.55,2.48),m(h,3.8,2,4.83,2.55,2.48),p(h,-1.36,-.95,4.82,2.95,3.52,a,.15);break;case"modernOne":f(h,0,5.56,9.7,1.7,3.51,o),m(h,-4,1.99,4.92,3.02,2.35),m(h,4,1.99,4.92,3.02,2.35),c(h,2.2,3.02,.3,-5.7,2.04,4.73,t);break;case"minimal":c(h,3.38,3.18,.54,-4.7,2.03,4.72,t),c(h,3.15,.22,2.44,0,3.28,5.43,o);for(let x of[-1.25,1.25])d(h,x,6.15,2.66,n,.14);break;case"estateOne":f(h,0,5.68,7,1.94,3.48,t);for(let x of[-3,-1.9,1.9,3])d(h,x,6.54,2.84,n,.19);c(h,7.1,.26,.56,0,3.69,5.67,n);break;case"kavkaz":for(let x of[-3,3])d(h,x,6.5,2.79,t,.3);f(h,0,5.55,6.7,2.13,3.53,t),p(h,-6.1,-5.05,4.8,1.1,3.52,a,.17),p(h,5.05,6.1,4.8,1.1,3.52,a,.17);break;case"terrace":c(h,9.25,.13,3.2,0,.42,-6,t);for(let x of[-4.1,4.1])for(let b of[-4.78,-7.25])d(h,x,b,2.5,a,.2);for(let x=-4.1;x<=4.11;x+=.52)c(h,.15,.12,3,x,3.05,-6,a);break;case"bungalow":c(h,4.75,.14,6.7,9.13,.18,1.35,t),f(h,9.13,1.35,4.95,7,3.17,o);for(let x of[6.95,11.24])for(let b of[-1.85,4.35])d(h,x,b,2.61,n,.24);break;case"italian":for(let x of[-3.25,3.25])d(h,x,6.32,2.36,t,.24);f(h,0,5.75,7.1,1.45,3.06,a),c(h,2.8,.56,.23,0,3.38,4.86,t);break;case"coastal":f(h,0,5.75,11.05,2.18,3.3,n),p(h,4.7,6.25,4.75,.67,3.44,a,.19),m(h,-3.9,2,4.93,3,2.1);break;case"practical":c(h,4.9,.19,1.4,0,3.13,5.15,o);for(let x of[-2.1,2.1])d(h,x,5.78,2.47,n,.18);c(h,.69,2.86,.75,5,4.25,-2.5,t);break;case"craft":f(h,0,5.44,8.65,1.82,3.08,a);for(let x of[-3.91,-2.2,2.2,3.91])d(h,x,6.28,2.49,a,.18);p(h,-6.1,-5.05,4.83,.87,3.41,a,.24);break;default:break}return h};function y(u){for(let[h,x]of l)x.visible=h===u;u!=="family"&&u!=="mansardHome"&&u!=="classic"&&(g(u).visible=!0)}return{setStyle:y,groups:l,list:la}}function Rl(i,e,{stone:t,trim:n,wood:s,metal:r}){let a=new Map,o=(m,g,y,u,h,x,b,M=n)=>{let T=new i.Mesh(new i.BoxGeometry(g,y,u),M);return T.position.set(h,x,b),T.castShadow=!0,T.receiveShadow=!0,m.add(T),T},l=(m,g,y,u,h,x,b)=>{let M=new i.Mesh(new i.CylinderGeometry(g,g*1.04,y,18),b);return M.position.set(u,h,x),M.castShadow=!0,m.add(M),M},c=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);c.colorSpace=i.SRGBColorSpace,c.wrapS=c.wrapT=i.RepeatWrapping,c.repeat.set(2.2,1.4);let d=new i.MeshStandardMaterial({color:"#a5a094",roughness:.77,map:c}),f=m=>{let g=new i.Group;g.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0433\u0440\u0443\u043F\u043F\u0430 \xB7 "+m,e.add(g),a.set(m,g);let y=m==="columns"?5.55:m==="modern"?5.1:5.12;if(o(g,y,.21,2.38,0,.405,5.55,d),o(g,y+.13,.075,2.52,0,.548,5.55,d),o(g,y+.17,.13,.74,0,.275,7.03,d),m==="simple"){o(g,3.65,.19,1.69,0,3.03,5.38,n),o(g,3.8,.075,1.8,0,3.18,5.38,r);for(let u of[-1.55,1.55])o(g,.15,2.44,.15,u,1.77,6.07,n),o(g,.3,.13,.3,u,.54,6.07,t)}if(m==="columns"){o(g,5.15,.27,2.06,0,3.31,5.41,t),o(g,5.34,.075,2.19,0,3.48,5.41,n);for(let u of[-2.04,2.04])l(g,.2,2.66,u,1.89,6.37,t),o(g,.46,.17,.47,u,.56,6.37,t),o(g,.48,.17,.49,u,3.26,6.37,t);for(let u of[-2.47,2.47])o(g,.19,3.02,.21,u,2,4.8,n)}if(m==="timber"){o(g,4.85,.19,2.08,0,3.08,5.46,s);for(let u of[-2.16,2.16])o(g,.22,2.46,.22,u,1.78,6.38,s),o(g,.31,.13,.31,u,.53,6.38,t);for(let u=-2.1;u<2.15;u+=.62)o(g,.14,.13,2.22,u,3.3,5.46,s)}if(m==="modern"){o(g,4.65,.24,1.86,0,3.18,5.36,r),o(g,4.85,.065,2.06,0,3.34,5.36,n);for(let u of[-2.14,2.14])o(g,.2,2.63,.2,u,1.87,6.18,r),o(g,.34,.15,.34,u,.57,6.18,t),o(g,.34,.12,.34,u,3.19,6.18,r)}return g};function p(m){let g=["simple","columns","timber","modern"].includes(m)?m:"simple";for(let[y,u]of a)u.visible=y===g;(a.get(g)||f(g)).visible=!0}return{setStyle:p,styles:a}}function Pl(i,e,{stone:t,brick:n,wood:s,metal:r}={}){let a=new i.Group;a.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u0434\u0435\u043B\u044C\u043D\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",e.add(a);let o=new i.Group;o.name="\u0426\u043E\u043A\u043E\u043B\u044C \u0434\u043E\u043C\u0430",a.add(o);let l=new i.Group;l.name="\u0422\u0435\u0440\u0440\u0430\u0441\u0430 \u0441 \u043E\u043F\u043E\u0440\u0430\u043C\u0438",a.add(l);let c=(S,_=.85,v=null)=>new i.MeshStandardMaterial({color:S,roughness:_,map:v}),d=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);d.colorSpace=i.SRGBColorSpace,d.wrapS=d.wrapT=i.RepeatWrapping,d.repeat.set(4,1);let f=document.createElement("canvas");f.width=256,f.height=256;let p=f.getContext("2d");p.fillStyle="#4e5151",p.fillRect(0,0,256,256);for(let S=0;S<4;S++)for(let _=0;_<7;_++)p.fillStyle=["#a9aaa5","#c4c4be","#b5b6b0"][(_*3+S)%3],p.fillRect(_*37+2,S*64+2,34,61);let m=new i.CanvasTexture(f);m.colorSpace=i.SRGBColorSpace,m.wrapS=m.wrapT=i.RepeatWrapping,m.repeat.set(4,1);let g={stone:c("#88837a",.88,d),brick:n.clone(),tile:c("#878a88",.79,m),dagestan:c("#c0b6a2",.9,d),decorative:c("#6c6f6d",.92,d),graphite:c("#62605b",.9,d),taupe:c("#71665b",.89,d),light:c("#8c8781")},y=(S,_,v,P,R,I,F,C)=>{let E=new i.Mesh(new i.BoxGeometry(_,v,P),C);return E.position.set(R,I,F),E.castShadow=v>.25,E.receiveShadow=!0,S.add(E),E};for(let S of[-4.82,4.82])y(o,13.45,.59,.12,0,.45,S,g.graphite);for(let S of[-6.72,6.72])y(o,.12,.59,9.54,S,.45,0,g.graphite);let u=y(l,5.5,.15,2.8,0,.37,-5.86,t),h=y(l,5.65,.095,2.95,0,.48,-5.86,s),x=[-2.45,2.45];for(let S of x)y(l,.2,2.46,.2,S,1.82,-6.99,s),y(l,.33,.12,.33,S,.56,-6.99,t),y(l,.17,2.4,.19,S,1.8,-4.74,s);for(let S=-2.48;S<=2.48;S+=.64)y(l,.16,.12,2.64,S,3.19,-5.84,s);for(let S of[-7,-4.73])y(l,5.4,.13,.15,0,3.11,S,s);function b(S){let _=g[S]||g.graphite;o.visible=S!=="none",o.children.forEach(v=>{v.material=_})}function M(S){l.visible=!!S}function T(S,_){let v=(Number(S)||10)/12.8,P=(Number(_)||10)/9;l.scale.x=Math.min(1,Math.max(.7,(Number(S)||10)/6))/v,l.scale.z=1/P,l.position.z=4.5*(1-P)/P}return b("graphite"),M(!1),{root:a,plinth:o,terrace:l,setPlinth:b,setTerrace:M,setDimensions:T}}var ca=new Set(["courtyardL","atriumU","crossGableT"]);function gf(i,e,{brick:t,foundation:n,trim:s,windowFrame:r,glass:a,door:o,roofSystem:l}){let c=new Map,d=.53,f=3.14,p=3.78,m=new i.MeshStandardMaterial({color:"#6b6660",roughness:.89}),g=new i.MeshStandardMaterial({color:"#968e81",roughness:.79}),y=new i.MeshStandardMaterial({color:"#4a4e4b",roughness:.55,metalness:.14}),u=new i.MeshStandardMaterial({color:"#a5c2c5",roughness:.25,metalness:.1}),h=(C,E,D,U,O,V,B,G,X=!0)=>{let te=new i.Mesh(new i.BoxGeometry(E,D,U),G);return te.position.set(O,V,B),te.castShadow=X,te.receiveShadow=!0,C.add(te),te},x=(C,E)=>{let D=new i.BufferGeometry,U=[],O=[];for(let[G,X,te]of E)U.push(G,X,te),O.push(G*.25,te*.25+X*.08);let V=[];for(let G=1;G<E.length-1;G++)V.push(0,G,G+1);D.setAttribute("position",new i.Float32BufferAttribute(U,3)),D.setAttribute("uv",new i.Float32BufferAttribute(O,2)),D.setIndex(V),D.computeVertexNormals();let B=new i.Mesh(D,l.getMaterial());B.userData.distinctRoof=!0,B.material.side=i.DoubleSide,B.castShadow=!0,B.receiveShadow=!0,C.add(B)},b={courtyardL:{blocks:[[-2.73,0,7.34,9],[3.65,-2.28,5.4,4.44]],windows:[[-5.2,4.64,0],[-3.65,4.64,0],[3.55,-.02,0],[-6.51,-2,-Math.PI/2],[-6.51,1.9,-Math.PI/2],[6.5,-2.3,Math.PI/2],[3.4,-4.65,Math.PI]],door:[-.55,4.66],roof:"gable",entrance:"offset"},atriumU:{blocks:[[-4.5,0,3.8,8.95],[4.5,0,3.8,8.95],[0,-3.02,12.8,2.92]],windows:[[-4.5,4.64,0],[4.5,4.64,0],[-6.54,-2,-Math.PI/2],[-6.54,1.8,-Math.PI/2],[6.54,-2,Math.PI/2],[6.54,1.8,Math.PI/2],[-4.5,-4.62,Math.PI],[4.5,-4.62,Math.PI]],door:[0,-1.41],roof:"hip",entrance:"court"},crossGableT:{blocks:[[0,0,5.45,8.95],[0,-2.5,12.8,4]],windows:[[-2.76,1.72,-Math.PI/2],[2.76,1.72,Math.PI/2],[-4.35,-.38,0],[4.35,-.38,0],[-4.5,-4.64,Math.PI],[4.5,-4.64,Math.PI]],door:[0,4.65],roof:"gable",entrance:"center"}};function M(C,E,D,U=0,O=1.35){let V=new i.Group;return V.position.set(E,2,D),V.rotation.y=U,C.add(V),h(V,O+.22,1.52,.13,0,0,0,s),h(V,O+.09,1.36,.15,0,0,.075,r),h(V,O-.1,1.21,.055,0,0,.165,a,!1),h(V,.055,1.29,.07,0,0,.2,r,!1),h(V,O+.29,.11,.26,0,-.81,.18,m),h(V,O+.29,.065,.13,0,.78,.15,s),V}function T(C,E,D,U=1){let O=new i.Group;O.position.set(E,0,D),C.add(O);let V=U>0?1:-1;h(O,1.56,2.27,.15,0,1.69,V*.08,o);for(let B of[-.87,.87])h(O,.11,2.44,.19,B,1.7,V*.16,s);h(O,1.83,.12,.23,0,2.9,V*.13,s),h(O,3.5,.22,2.05,0,.45,V*1,g),h(O,3.76,.15,.6,0,.23,V*2,m);for(let B of[-1.5,1.5])h(O,.18,2.38,.18,B,1.75,V*1.83,s),h(O,.32,.12,.32,B,.55,V*1.83,m);h(O,3.82,.2,2.24,0,3.09,V*1.05,y),h(O,3.82,.085,2.28,0,3.23,V*1.05,s)}function S(C,E,D){let[U,O,V,B]=E,G=U-V/2-.3,X=U+V/2+.3,te=O-B/2-.31,ae=O+B/2+.31,Y=p,z=Y+Math.min(2.25,.73*Math.min(V,B));if(D==="flat"){x(C,[[G,Y+.25,te],[X,Y+.25,te],[X,Y+.25,ae],[G,Y+.25,ae]]);for(let J of[-1,1])h(C,.18,.32,B+.62,U+J*(V/2+.3),Y+.36,O,y),h(C,V+.55,.32,.18,U,Y+.36,O+J*(B/2+.31),y);return}if(D==="gable"){if(B>=V*.82){let J=U;x(C,[[G,Y,te],[J,z,te],[J,z,ae],[G,Y,ae]]),x(C,[[J,z,te],[X,Y,te],[X,Y,ae],[J,z,ae]]);for(let se of[O-B/2-.05,O+B/2+.05]){let[ge,fe]=[U-V/2-.04,U+V/2+.04];x(C,[[ge,Y,se],[fe,Y,se],[J,z-.22,se]])}}else{x(C,[[G,Y,te],[X,Y,te],[X,z,O],[G,z,O]]),x(C,[[G,z,O],[X,z,O],[X,Y,ae],[G,Y,ae]]);for(let J of[U-V/2-.05,U+V/2+.05])x(C,[[J,Y,te],[J,Y,ae],[J,z-.2,O]])}return}let W=Y,K=D==="mansard"?Math.min(1.14,z-Y)*.84:0;if(D==="mansard"){let se=[[G,Y,te],[X,Y,te],[X,Y,ae],[G,Y,ae]],ge=[[G+.65,Y+K,te+.65],[X-.65,Y+K,te+.65],[X-.65,Y+K,ae-.65],[G+.65,Y+K,ae-.65]];for(let Pe=0;Pe<4;Pe++){let Be=(Pe+1)%4;x(C,[se[Pe],se[Be],ge[Be],ge[Pe]])}let fe=z+.42;x(C,[ge[0],ge[1],[U,fe,O]]),x(C,[ge[2],ge[3],[U,fe,O]]),x(C,[ge[3],ge[0],[U,fe,O]]),x(C,[ge[1],ge[2],[U,fe,O]]);return}if(B>=V){let J=Math.max(.25,B*.21);x(C,[[G,W,te],[X,W,te],[U,z,O-J]]),x(C,[[X,W,ae],[G,W,ae],[U,z,O+J]]),x(C,[[G,W,ae],[G,W,te],[U,z,O-J],[U,z,O+J]]),x(C,[[X,W,te],[X,W,ae],[U,z,O+J],[U,z,O-J]])}else{let J=Math.max(.25,V*.22);x(C,[[G,W,te],[G,W,ae],[U-J,z,O]]),x(C,[[X,W,ae],[X,W,te],[U+J,z,O]]),x(C,[[X,W,te],[G,W,te],[U-J,z,O],[U+J,z,O]]),x(C,[[G,W,ae],[X,W,ae],[U+J,z,O],[U-J,z,O]])}}function _(C){let E=b[C],D=new i.Group;D.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u0430\u044F \u043E\u0431\u044A\u0451\u043C\u043D\u0430\u044F \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u0430 "+C,e.add(D),c.set(C,D);let U=new i.Group;U.name="\u0421\u0442\u0435\u043D\u044B \u0438 \u043E\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u044F",D.add(U);for(let G of E.blocks){let[X,te,ae,Y]=G;h(U,ae+.1,.38,Y+.1,X,.34,te,n),h(U,ae,f,Y,X,d+f/2,te,t),h(U,ae+.13,.16,Y+.13,X,3.67,te,s)}for(let[G,X,te]of E.windows)M(U,G,X,te);let[O,V]=E.door;if(T(U,O,V,(E.entrance==="court",1)),C==="atriumU"){h(D,5.1,.075,5.6,0,.16,1.48,g,!1);for(let G of[-2.44,2.44])h(D,.27,.6,5.6,G,.29,1.5,m,!1)}else if(C==="courtyardL"){h(D,4.25,.13,3.55,3.62,.26,2.47,g,!1);for(let G of[1.85,5.35])h(D,.17,2.9,.17,G,1.69,3.96,s);h(D,4.2,.15,1.9,3.62,3.2,3.28,y)}else if(C==="crossGableT"){for(let G of[-4.55,4.55])h(D,.22,2.85,.22,G,1.98,-.4,s),h(D,.34,.19,.34,G,.57,-.4,m);h(D,10.3,.16,1.72,0,3.36,-.5,y)}let B=new Map;for(let G of["gable","hip","mansard","flat"]){let X=new i.Group;X.name="\u041A\u0440\u043E\u0432\u043B\u0438 "+G,D.add(X);for(let te of E.blocks)S(X,te,G);X.visible=!1,B.set(G,X)}return D.userData.roofs=B,D.visible=!1,D}let v=null,P="hip";function R(C){v=ca.has(C)?C:null;for(let[E,D]of c)D.visible=E===v;return v&&!c.has(v)&&(_(v).visible=!0),v&&F(P,l.getMaterial()),!!v}function I(C){let E={graphite:"#55524c",stone:"#77746d",brick:"#6d5148",tile:"#6a6e6a",dagestan:"#9c8f7b",decorative:"#5b5b57",taupe:"#74675a",light:"#807b72",none:"#5b5752"};n.color.set(E[C]||E.graphite),n.needsUpdate=!0}function F(C,E=l.getMaterial()){if(P=["gable","hip","mansard","flat"].includes(C)?C:"hip",!v)return!1;let D=c.get(v);for(let[U,O]of D.userData.roofs)O.visible=U===P,O.visible&&O.traverse(V=>{V.userData.distinctRoof&&(V.material=E,V.material.side=i.DoubleSide)});return!0}return{isDistinct:C=>ca.has(C),setStyle:R,setRoof:F,setPlinth:I,ids:[...ca]}}function _f(i,e,{brick:t,limestone:n,quartz:s,roofSystem:r,windowFrameMetal:a,glassMat:o,doorMat:l}){let c=new i.Group;c.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u0430\u043B\u043E\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0441\u0435\u043C\u0435\u0439\u043D\u044B\u0439 \u0434\u043E\u043C",e.add(c);let d=new i.MeshStandardMaterial({color:"#ddd9cd",roughness:.66,metalness:.02}),f=new i.MeshStandardMaterial({color:"#816347",roughness:.79}),p=new i.MeshStandardMaterial({color:"#41494a",roughness:.47,metalness:.37}),m=new i.MeshStandardMaterial({color:"#476676",roughness:.33,metalness:.13,envMapIntensity:.45}),g=[],y=[],u=new Map,h=(ne,de,Le,be,pe,Ee,Oe,De=n)=>{let Ne=new i.Mesh(new i.BoxGeometry(de,Le,be),De);return Ne.position.set(pe,Ee,Oe),Ne.receiveShadow=!0,Ne.castShadow=!0,ne.add(Ne),Ne},x=(ne,de,Le,be,pe=d)=>{let Ee=new i.Vector3(...de),Oe=new i.Vector3(...Le),De=Ee.distanceTo(Oe),Ne=Ee.clone().add(Oe).multiplyScalar(.5),ke=new i.Mesh(new i.BoxGeometry(be,De,be),pe);return ke.position.copy(Ne),ke.quaternion.setFromUnitVectors(new i.Vector3(0,1,0),Oe.sub(Ee).normalize()),ke.castShadow=!0,ke.receiveShadow=!0,ne.add(ke),ke},b=(ne,de,Le,be=!1)=>{let pe=[],Ee=[],Oe=[];de.forEach(ke=>{pe.push(...ke),Oe.push(ke[0]*.22,ke[2]*.22+ke[1]*.09)});for(let ke=1;ke<de.length-1;ke++)Ee.push(0,ke,ke+1);let De=new i.BufferGeometry;De.setAttribute("position",new i.Float32BufferAttribute(pe,3)),De.setAttribute("uv",new i.Float32BufferAttribute(Oe,2)),De.setIndex(Ee),De.computeVertexNormals();let Ne=new i.Mesh(De,Le);return Ne.material.side=i.DoubleSide,Ne.castShadow=!0,Ne.receiveShadow=!0,be&&(Ne.userData.baseGeometry=De,Ne.userData.corners=de,Ne.userData.profile="none",y.push(Ne)),ne.add(Ne),Ne},M=new i.Group;M.name="\u0414\u043E\u043C \xB7 \u043F\u0435\u0440\u0432\u044B\u0439 \u044D\u0442\u0430\u0436",c.add(M);let T=mf(i,c,{stone:n,trim:d,windowFrame:a,glass:o,wood:f,dark:p}),S=Pl(i,c,{stone:n,brick:t,wood:f,metal:p}),_=gf(i,c,{brick:t,foundation:new i.MeshStandardMaterial({color:"#55524c",roughness:.93}),trim:d,windowFrame:a,glass:o,door:l,roofSystem:r}),v=new i.MeshStandardMaterial({color:"#55524c",roughness:.93});h(M,13.28,.36,9.46,0,.27,0,v);let P=h(M,12.8,3.18,9,0,1.98,0,t);h(M,13.03,.13,9.24,0,.53,0,v),h(M,13.05,.16,9.26,0,3.62,0,d);let R=M.children.length,I=h(M,1.58,2.29,.15,0,1.7,4.64,l);h(M,1.74,.13,.25,0,2.87,4.72,d);for(let ne of[-.9,.9])h(M,.14,2.5,.18,ne,1.65,4.73,d);h(M,.1,.13,.16,.58,1.77,4.76,p);let F=new i.Group;F.name="\u0412\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u0432\u0435\u0440\u044C \xB7 \u0444\u0438\u0437\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0440\u0430\u0437\u043C\u0435\u0440";for(let ne of M.children.slice(R))F.add(ne);M.add(F);let C=M.children.length,E=h(M,3.8,.2,1.82,0,3.03,5.31,d);h(M,3.93,.06,1.94,0,3.17,5.31,p);for(let ne of[-1.7,1.7])h(M,.17,2.46,.17,ne,1.7,6.12,d),h(M,.32,.15,.32,ne,.53,6.12,n),h(M,.3,.15,.3,ne,2.99,6.12,n);h(M,3.94,.13,1.93,0,.46,5.35,n),h(M,4.05,.12,.77,0,.31,6.45,d),h(M,4.15,.1,.78,0,.19,7.17,n);let D=new i.Group;D.name="\u0421\u0442\u0430\u0440\u044B\u0439 \u0432\u0445\u043E\u0434 \u0434\u043B\u044F \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u0438\u043C\u043E\u0441\u0442\u0438";for(let ne of M.children.slice(C))D.add(ne);D.visible=!1,M.add(D);let U=Rl(i,M,{stone:n,trim:d,wood:f,metal:p});U.setStyle("simple");function O(ne,de,Le,be=0,pe=1.48,Ee=1.52,Oe=M){let De=new i.Group;return De.position.set(ne,de,Le),De.rotation.y=be,Oe.add(De),h(De,pe+.28,Ee+.3,.12,0,0,0,d),h(De,pe+.08,Ee+.1,.13,0,0,.08,a),h(De,pe-.1,Ee-.16,.035,0,0,.16,o),h(De,.055,Ee-.12,.075,0,0,.205,a),h(De,pe-.1,.055,.075,0,0,.205,a),h(De,pe+.36,.13,.35,0,-Ee/2-.14,.15,s),g.push(De),De}for(let ne of[-4.8,-2.95,2.95,4.8])O(ne,1.97,4.63),O(ne,1.97,-4.63,Math.PI);for(let ne of[-2.65,0,2.65])O(6.53,1.97,ne,Math.PI/2),O(-6.53,1.97,ne,-Math.PI/2);let V=7.13,B=5.19,G=3.83,X=["gable","hip","mansard","flat"],te=new Map,ae=new Map,Y=ne=>{if(ae.has(ne))return ae.get(ne);let de=new i.Group;de.name="\u041A\u0440\u043E\u0432\u043B\u044F \xB7 "+ne,c.add(de),ae.set(ne,de);let Le=be=>b(de,be,r.getMaterial(),!0);if(ne==="gable"){for(let Ee of[-1,1]){Le([[Ee*V,G,-B],[0,6.55,-B],[0,6.55,B],[Ee*V,G,B]]);for(let Oe of[-B,B])x(de,[Ee*V,G,Oe],[0,6.55,Oe],.16)}for(let Ee of[-4.52,4.52])b(de,[[-6.37,3.68,Ee],[6.37,3.68,Ee],[0,6.34,Ee]],t);x(de,[0,6.56,-B],[0,6.56,B],.13,p);let pe=new i.Group;pe.name="\u0424\u0440\u043E\u043D\u0442\u043E\u043D\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043C\u0430\u043D\u0441\u0430\u0440\u0434\u044B",de.add(pe),te.set("gable",pe);for(let Ee of[-1.45,1.45])h(pe,1,1.16,.16,Ee,4.92,4.7,d),h(pe,.83,.95,.055,Ee,4.93,4.8,p),h(pe,.72,.85,.032,Ee,4.93,4.84,m),h(pe,.06,.96,.058,Ee,4.93,4.89,d),h(pe,1.1,.12,.33,Ee,4.29,4.89,n)}else if(ne==="hip"){Le([[-V,G,-B],[V,G,-B],[0,6.02,-2.14]]),Le([[V,G,B],[-V,G,B],[0,6.02,2.14]]),Le([[-V,G,B],[-V,G,-B],[0,6.02,-2.14],[0,6.02,2.14]]),Le([[V,G,-B],[V,G,B],[0,6.02,2.14],[0,6.02,-2.14]]),x(de,[0,6.02,-2.14],[0,6.02,2.14],.14,p);for(let Ee of[-1,1])for(let Oe of[-B,B])x(de,[Ee*V,G,Oe],[0,6.02,Oe>0?2.14:-2.14],.13,p)}else if(ne==="mansard"){let be=[[-V,G,-B],[V,G,-B],[V,G,B],[-V,G,B]],pe=[[-5.28,5.53,-4.21],[5.28,5.53,-4.21],[5.28,5.53,4.21],[-5.28,5.53,4.21]],Ee=[[-3.45,6.71,-2.77],[3.45,6.71,-2.77],[3.45,6.71,2.77],[-3.45,6.71,2.77]];for(let ke=0;ke<4;ke++){let H=(ke+1)%4;Le([be[ke],be[H],pe[H],pe[ke]]),Le([pe[ke],pe[H],Ee[H],Ee[ke]])}let Oe=7.58,De=1.3;Le([Ee[0],Ee[1],[0,Oe,-De]]),Le([Ee[2],Ee[3],[0,Oe,De]]),Le([Ee[3],Ee[0],[0,Oe,-De],[0,Oe,De]]),Le([Ee[1],Ee[2],[0,Oe,De],[0,Oe,-De]]);let Ne=new i.Group;Ne.name="\u041C\u0430\u043D\u0441\u0430\u0440\u0434\u043D\u044B\u0435 \u043E\u043A\u043D\u0430 \u043D\u0430 \u043F\u0430\u0440\u0430\u0434\u043D\u043E\u043C \u0444\u0430\u0441\u0430\u0434\u0435",de.add(Ne),te.set("mansard",Ne);for(let ke of[-2.05,2.05]){h(Ne,1.36,1.47,.18,ke,4.82,5.02,d),h(Ne,.92,1.04,.055,ke,4.92,5.02+.115,p),h(Ne,.79,.87,.036,ke,4.92,5.02+.151,m),h(Ne,.07,1.03,.07,ke,4.92,5.02+.193,d),h(Ne,1.11,.085,.32,ke,4.23,5.02+.1,n);for(let ut of[-1,1]){let mt=ke+ut*.64;h(Ne,.13,1.41,5.02-4.08+.05,mt,4.88,(5.02+4.08)/2,d),b(Ne,[[ke,6.14,4.08],[ke+ut*.84,5.57,4.08],[ke+ut*.84,5.57,5.02+.16],[ke,6.14,5.02+.16]],r.getMaterial())}b(Ne,[[ke-.66,5.55,5.02+.1],[ke+.66,5.55,5.02+.1],[ke,6.03,5.02+.1]],d),x(Ne,[ke,6.15,4.08],[ke,6.15,5.02+.17],.12,p)}}else{Le([[-V,3.88,-B],[V,3.88,-B],[V,3.88,B],[-V,3.88,B]]);for(let be of[-1,1])h(de,.24,.37,B*2+.2,be*V,4.03,0,p);for(let be of[-B,B])h(de,V*2+.3,.37,.24,0,4.03,be,p)}if(ne!=="flat"){let be=new i.MeshStandardMaterial({color:"#424d52",metalness:.5,roughness:.52}),pe=new i.MeshStandardMaterial({color:"#434c50",metalness:.4,roughness:.58}),Ee=ne==="mansard"?6.46:6.38,Oe=ne==="mansard"?4.64:ne==="gable"?4.13:4.02;for(let De of[-1,1]){for(let Ne of[0,.1])h(de,.06,.058,B*2-.9,De*Ee,Oe+Ne,0,be);for(let Ne of[-3.4,0,3.4])h(de,.08,.21,.11,De*Ee,Oe-.055,Ne,be);h(de,.18,.12,B*2+.03,De*(V+.06),3.75,0,pe),h(de,.11,3.3,.11,De*(V+.06),1.95,De===1?B-.36:-B+.36,pe)}for(let De of[-1,1])h(de,V*2+.1,.12,.18,0,3.75,De*(B+.06),pe);de.userData.guardMetal=be,de.userData.gutterMetal=pe}h(de,12.88,.17,9.1,0,3.74,0,d,!1);for(let be of[-1,1])h(de,.2,.25,9.12,be*6.38,3.72,0,t,!1),h(de,12.83,.25,.2,0,3.72,be*4.48,t,!1);for(let be of[-1,1])b(de,[[be*6.41,3.72,-B],[be*V,3.72,-B],[be*V,3.72,B],[be*6.41,3.72,B]],s),h(de,.17,.18,B*2,be*V,3.77,0,p);for(let be of[-1,1])b(de,[[-V,3.72,be*4.52],[V,3.72,be*4.52],[V,3.72,be*B],[-V,3.72,be*B]],s),h(de,V*2,.16,.16,0,3.77,be*B,d);return de},z=null,W=null,K="family";function J(ne,de){let Le=X.includes(ne)?ne:"hip";if(ca.has(K)){for(let Oe of ae.values())Oe.visible=!1;_.setRoof(Le,r.getMaterial()),z=Le,W=de;return}for(let[Oe,De]of ae)De.visible=Oe===Le;let be=Y(Le);be.visible=!0,te.has("gable")&&(te.get("gable").visible=K==="gableAttic"),z=Le;let pe=oa[de]&&Le!=="flat"?de:"flat",Ee=r.getMaterial();Ee?.color&&be.userData.guardMetal&&(be.userData.guardMetal.color.copy(Ee.color),be.userData.gutterMetal.color.copy(Ee.color).multiplyScalar(.74));for(let Oe of be.children)Oe.userData.corners&&(Oe.material=Ee,Oe.userData.profile!==pe&&(Oe.userData.dynamic&&(Oe.userData.dynamic.dispose(),Oe.userData.dynamic=null),Oe.geometry=pe==="flat"?Oe.userData.baseGeometry:Cl(i,Oe.userData.corners,de),pe!=="flat"&&(Oe.userData.dynamic=Oe.geometry),Oe.userData.profile=pe));W=de}function se(ne){D.visible=!1,U.setStyle(ne)}function ge(ne){K=ne,c.visible=la.some(Le=>Le.id===ne&&Le.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435");let de=_.setStyle(ne);if(M.visible=!de,S.root.visible=!de,T.setStyle(de?"family":ne),de)for(let Le of ae.values())Le.visible=!1;te.has("gable")&&(te.get("gable").visible=ne==="gableAttic")}function fe(ne,de){let Le=Math.max(5,Math.min(14,Number(ne)||10)),be=Math.max(8,Math.min(18,Number(de)||10)),pe=Le/12.8,Ee=be/9;c.scale.set(pe,1,Ee),c.position.z=4.63*(1-Ee),F.scale.x=1/pe;for(let De of U.styles.values())De.scale.x=1/pe,De.scale.z=1/Ee,De.position.z=4.63*(Ee-1)/Ee;let Oe=Le<8.5?2:4;for(let De of g){let Ne=De.userData.baseX??De.position.x,ke=De.userData.baseZ??De.position.z;De.userData.baseX=Ne,De.userData.baseZ=ke;let H=Math.abs(Ne)>6.2;if(De.scale.x=H?1/Ee:1/pe,De.scale.z=H?1/pe:1/Ee,H){De.position.x=Math.sign(Ne)*Math.max(.2,Le/2-.11)/pe;let Nt=ke===0?0:Math.sign(ke)*Math.max(1.4,be/2-1.35);De.position.z=Nt/Ee}else{let Nt=Math.abs(Ne)>4;De.visible=Oe===4||Nt;let ut=Math.sign(Ne)*(Nt?Math.max(1.25,Le/2-1.04):Math.max(.86,Le/2-2.87));De.position.x=ut/pe}}S.setDimensions(Le,be),c.userData.footprint={width:Le,length:be}}function Pe(ne,de=1.35,Le=!1){let be=Le?1.6:1,pe=Math.max(65,(Number(ne)||150)/be),Ee=Math.sqrt(pe*de),Oe=Math.sqrt(pe/de);c.scale.set(Ee/12.8,1,Oe/9),c.userData.footprint={width:Ee,depth:Oe,floors:be}}return{root:c,setStyle:ge,setSize:Pe,setDimensions:fe,setRoof:J,setEntrance:se,setPlinth:ne=>{S.setPlinth(ne),_.setPlinth(ne)},setTerrace:S.setTerrace,getShape:()=>z,getRoof:()=>W}}function xf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 3D \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440, \u043A\u043E\u043D\u0446\u0435\u043F\u0442\u044B \u043E\u0442\u0434\u0435\u043B\u043A\u0438",t.visible=!1,e.add(t);let n=(z,W=.76,K={})=>new i.MeshStandardMaterial({color:z,roughness:W,...K}),s=n("#ede9df",.94),r=n("#dfd6c7",.94),a=n("#f6f2e9",.94),o=n("#fffdf8",.73),l=n("#b68e66",.67),c=n("#806449",.62),d=n("#4e423b",.66),f=n("#c4a170",.38,{metalness:.54}),p=n("#444b4c",.43,{metalness:.65}),m=n("#eee8d9",.92),g=n("#ebeae6",.36),y=n("#b9b3a8",.53),u=n("#9b9887",.97),h=n("#657270",.95),x=n("#c6b9a5",.99),b=n("#c4a17e",.83),M=n("#9bc4c9",.2,{transparent:!0,opacity:.65,side:i.DoubleSide}),T=n("#a3b9c4",.1,{metalness:.43,envMapIntensity:1.1}),S=n("#181e25",.28,{metalness:.34}),_=n("#456947",.95),v=n("#725e49",.94),P=new i.TextureLoader,R=n("#ffffff",.75),I=n("#ffffff",.64),F=(z,W,K,J)=>{P.load(new URL("assets/3d/"+z+".webp",document.baseURI).href,se=>{se.colorSpace=i.SRGBColorSpace,se.wrapS=se.wrapT=i.RepeatWrapping,se.repeat.set(K,J),se.anisotropy=4,W.map=se,W.needsUpdate=!0},void 0,()=>{})};F("wood_planks",R,3,3),F("concrete_pavement_02_1k",I,3,3);function C(z,W,K,J,se,ge,fe,Pe,Be=!0){let ne=new i.Mesh(new i.BoxGeometry(W,K,J),Pe);return ne.position.set(se,ge,fe),ne.castShadow=Be,ne.receiveShadow=!0,z.add(ne),ne}function E(z,W,K,J,se,ge,fe=1,Pe=1,Be=1){let ne=new i.Mesh(new i.SphereGeometry(W,12,9),ge);return ne.position.set(K,J,se),ne.scale.set(fe,Pe,Be),ne.castShadow=!0,z.add(ne),ne}function D(z,W,K,J,se,ge,fe,Pe=16){let Be=new i.Mesh(new i.CylinderGeometry(W,W,K,Pe),fe);return Be.position.set(J,se,ge),Be.castShadow=!0,z.add(Be),Be}function U(z,W,K,J,se=.95,ge=.68,fe=c){C(z,se+.075,ge+.075,.055,W,K,J,fe,!1),C(z,se,ge,.061,W,K,J+.05,n("#91a09a",.94),!1),C(z,se*.56,ge*.25,.065,W,K-.14,J+.09,n("#d6c3ad",.94),!1),C(z,se*.32,ge*.16,.066,W+.14,K+.1,J+.09,n("#c0aa90",.94),!1)}function O(z,W,K,J=.3){D(z,.19,.34,W,J+.16,K,g,12),C(z,.29,.08,.29,W,J+.32,K,y,!1),D(z,.038,.92,W,J+.77,K,v,8);for(let se=0;se<6;se++){let ge=se*Math.PI*2/6;E(z,.38,W+Math.cos(ge)*.22,J+1.15+se%3*.11,K+Math.sin(ge)*.2,_,.67,1,.6)}}function V(z,W,K,J=2.8){let se=n("#f8efdb",.62,{emissive:"#fff0d4",emissiveIntensity:.12});D(z,.29,.2,W,J,K,se,14),D(z,.012,.23,W,J+.16,K,p,8)}function B(z,W=1.85){C(z,2.25,1.58,.11,W,2.03,-3.53,o,!1),C(z,2.03,1.36,.045,W,2.03,-3.45,M,!1),C(z,.055,1.37,.064,W,2.03,-3.4,o,!1),C(z,2.3,.09,.32,W,1.22,-3.35,y,!1),C(z,.065,1.5,.065,W-1.18,2.03,-3.34,m,!1),C(z,.065,1.5,.065,W+1.18,2.03,-3.34,m,!1);for(let K of[-.74,.74])C(z,.07,1.7,.18,W+K,2.03,-3.32,n("#d6cfc0",.95),!1)}let G=new Map;function X(z,W="wood"){let K=new i.Group;K.name="\u041A\u043E\u043C\u043D\u0430\u0442\u0430 \xB7 "+z,K.visible=!1,t.add(K),G.set(z,K),C(K,8.9,.18,7.2,0,.04,0,W==="tile"?I:R),C(K,8.9,.16,7.2,0,3.31,0,a,!1),C(K,8.9,3.14,.16,0,1.69,-3.62,r,!1),C(K,8.9,3.14,.16,0,1.69,3.62,s,!1);for(let se of[-4.45,4.45])C(K,.16,3.14,7.2,se,1.69,0,s,!1);for(let se of[-4.32,4.32])C(K,.07,.14,7,se,.24,0,o,!1);for(let se of[-3.48,3.48])C(K,8.55,.14,.07,0,.24,se,o,!1);C(K,1.25,2.27,.07,-2.85,1.29,3.51,c),C(K,.09,2.4,.13,-3.55,1.29,3.47,o),C(K,.09,2.4,.13,-2.15,1.29,3.47,o),E(K,.055,-2.3,1.22,3.43,f),B(K,1.83);let J=new i.PointLight("#fff1da",8.5,10,2);return J.position.set(.25,2.9,.35),K.add(J),V(K,-1.4,.15),K}{let z=X("living");C(z,4.1,.055,2.75,-1.05,.175,.23,x,!1),C(z,3.1,.38,1.14,-1.45,.53,-1.26,h),C(z,3.1,.78,.28,-1.45,.99,-1.76,h);for(let W of[-2.45,-1.45,-.45])C(z,.85,.18,.88,W,.81,-1.06,u),E(z,.25,W,.99,-1.52,m,1,.35,.82);C(z,.2,.72,1.18,-3.06,.75,-1.25,h),C(z,.2,.72,1.18,.15,.75,-1.25,h),C(z,1.95,.085,.9,-1.2,.54,.6,c);for(let W of[-2,-.4])C(z,.1,.45,.1,W,.29,.58,p);E(z,.14,-1.52,.63,.6,m,1,.4,1),C(z,2.05,1.1,.09,2,1.68,3.44,S,!1),C(z,2.45,.32,.56,2,.36,3.08,l),O(z,3.52,-2.5),U(z,-2.88,1.9,-3.42,.88,.96)}{let z=X("kitchen","tile");for(let W of[-3.15,-2.1,-1.05,0])C(z,1.02,.9,.64,W,.66,-3.16,m),C(z,.99,.025,.055,W,.81,-2.81,f,!1),C(z,1.02,.7,.57,W,2.62,-3.19,l),C(z,.85,.025,.045,W,2.5,-2.87,p,!1);C(z,4.75,.12,.82,-1.6,1.15,-3.1,y),C(z,.76,.06,.5,-2.35,1.23,-2.98,p),D(z,.04,.38,-2.8,1.43,-2.93,f,10),C(z,3.2,.86,1.32,-.3,.62,.25,l),C(z,3.45,.14,1.52,-.3,1.11,.25,y);for(let W of[-1.5,.65])D(z,.24,.08,W,.74,1.57,c,14),D(z,.055,.69,W,.37,1.57,p,12);for(let W of[-1.45,.85])V(z,W,.28,2.54);O(z,3.65,-2.27)}{let z=X("bedroom");C(z,3.33,1.1,.26,-1.1,1.1,-2.83,h),C(z,3.15,.46,4.12,-1.1,.57,-.8,l),C(z,3,.32,3.95,-1.1,.95,-.79,m),C(z,3,.1,2.65,-1.1,1.12,.18,u);for(let W of[-1.85,-.35])E(z,.46,W,1.24,-2.1,m,1,.36,.66);for(let W of[-3.1,.95])C(z,.58,.45,.52,W,.53,-2.29,c),D(z,.12,.35,W,.99,-2.29,f,12),E(z,.18,W,1.2,-2.29,m,1,.67,1);C(z,2.65,.08,1.34,-1.1,.2,2.15,x,!1),C(z,1.55,2.55,.57,3.33,1.55,.72,l);for(let W of[-.04,1.44])C(z,.065,2.25,.6,3.31,1.65,W,c,!1);U(z,-3.1,2.1,-3.42,1,.84)}{let z=X("hall","tile");C(z,2.1,.16,.88,-1.92,.53,-1.24,c);for(let W of[-2.8,-1.15])C(z,.12,.4,.67,W,.28,-1.24,p);C(z,2.65,.16,.1,-1.92,2.31,-3.44,c,!1);for(let W of[-2.95,-2.28,-1.62,-.92])E(z,.07,W,2.12,-3.3,f,1,.68,1),C(z,.05,.2,.08,W,2.03,-3.32,p,!1);C(z,1.5,2.21,.06,2.92,1.58,-3.44,f,!1),C(z,1.39,2.1,.04,2.92,1.58,-3.4,T,!1),C(z,1.55,.19,.55,2.95,.76,-1.25,l);for(let W of[2.4,3.5])C(z,.08,.58,.08,W,.43,-1.25,p);O(z,-3.53,1.72),U(z,.2,1.82,-3.42,.8,1.01)}{let z=X("bath","tile");C(z,2.48,.6,1.14,-1.79,.57,-1.72,g),C(z,2.24,.04,.91,-1.79,.9,-1.72,n("#e6f0ef",.23,{metalness:.12}),!1),C(z,2.58,.13,1.23,-1.79,.95,-1.72,g),D(z,.045,.36,-2.94,1.16,-1.72,p,12),C(z,1.18,.65,.62,1.65,.58,-2.64,l),C(z,1.48,.12,.81,1.65,1.01,-2.62,y),D(z,.39,.14,1.65,1.15,-2.59,g,24),D(z,.035,.29,1.93,1.3,-2.89,f,12),C(z,1,1.27,.055,1.65,2.16,-3.43,T,!1),C(z,1.82,2.12,.045,3.33,1.38,.16,M,!1),C(z,1.8,.08,.07,3.33,2.46,.16,p,!1),D(z,.12,.06,3.3,2.23,-.55,p,20),C(z,.045,.68,.05,3.36,2.7,-.55,p),C(z,1.18,.1,.64,-.1,.28,1.28,x,!1),O(z,-3.4,2.08)}let te={living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},ae="living",Y=z=>{ae=G.has(z)?z:"living";for(let[W,K]of G)K.visible=W===ae;return te[ae]};return Y("living"),{root:t,setRoom:Y,roomNames:te,getRoom:()=>ae}}function yf(i,e,{lawnMaterial:t}={}){let n=new i.Group;n.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043C\u043E\u0449\u0435\u043D\u0438\u0435, \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0446\u0432\u0435\u0442\u043D\u0438\u043A\u0438",e.add(n);let s=new i.MeshStandardMaterial({color:"#faf9f5",roughness:.89});new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href,X=>{X.colorSpace=i.SRGBColorSpace,X.wrapS=X.wrapT=i.RepeatWrapping,X.anisotropy=4,s.map=X,s.needsUpdate=!0},void 0,()=>{});let a=new i.MeshStandardMaterial({color:"#b6afa2",roughness:.93}),o=new i.MeshStandardMaterial({color:"#817f75",roughness:1}),l=new i.MeshStandardMaterial({color:"#604c3b",roughness:1}),c=new i.MeshStandardMaterial({color:"#376b36",roughness:.89,side:i.DoubleSide}),d=new i.MeshStandardMaterial({color:"#567e3c",roughness:.93}),f=["#e8dbbc","#b77d95","#edc999","#b2a5d7","#d87576"].map(X=>new i.MeshStandardMaterial({color:X,roughness:.85})),p=new i.Group;p.name="\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438",n.add(p);let m=new i.Group;m.name="\u041F\u0430\u0440\u043A\u043E\u0432\u043A\u0430 \u0438 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\u043D\u044B\u0439 \u0432\u044A\u0435\u0437\u0434",n.add(m);let g=new i.Group;g.name="\u0421\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u0447\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(g);let y=new i.Group;y.name="\u0421\u0435\u043C\u0435\u0439\u043D\u044B\u0435 \u043A\u043B\u0443\u043C\u0431\u044B",n.add(y);let u=new i.Group;u.name="\u041C\u0438\u043D\u0438\u043C\u0430\u043B\u0438\u0441\u0442\u0438\u0447\u043D\u044B\u0435 \u043F\u043E\u0441\u0430\u0434\u043A\u0438",n.add(u);let h=new i.Group;h.name="\u0417\u0430\u0433\u043E\u0440\u043E\u0434\u043D\u044B\u0439 \u0441\u0430\u0434",n.add(h);let x=new i.Group;x.name="\u0411\u0435\u0441\u0435\u0434\u043A\u0430/\u043F\u0435\u0440\u0433\u043E\u043B\u0430",n.add(x);let b=new i.Group;b.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u0431\u0430\u0441\u0441\u0435\u0439\u043D\u0443",n.add(b);let M=new i.Group;M.name="\u041F\u0435\u0448\u0435\u0445\u043E\u0434\u043D\u0430\u044F \u0434\u043E\u0440\u043E\u0436\u043A\u0430 \u043A \u043F\u0435\u0440\u0433\u043E\u043B\u0435",n.add(M);let T=(X,te,ae,Y,z,W,K,J)=>{let se=new i.Mesh(new i.BoxGeometry(te,ae,Y),J);return se.position.set(z,W,K),se.receiveShadow=!0,se.castShadow=ae>.09,X.add(se),se};function S(X,{x0:te,z0:ae,width:Y,length:z,unitX:W=.39,unitZ:K=.28}){T(X,Y,.08,z,te,.075,ae,o);let J=Math.max(1,Math.floor(Y/W)),se=Math.max(1,Math.floor(z/K)),ge=new i.Matrix4,fe=new i.Quaternion,Pe=new i.Vector3,Be=new i.InstancedMesh(new i.BoxGeometry(1,1,1),s,J*se),ne=["#d8d4c8","#c3c2b6","#e1dcd0","#bbb9ad","#d0cec2"],de=new i.Color,Le=0;for(let be=0;be<se;be++)for(let pe=0;pe<J;pe++){let Ee=Y/J-.016,Oe=z/se-.016,De=te-Y/2+(pe+.5)*Y/J,Ne=ae-z/2+(be+.5)*z/se;Pe.set(Ee,.065,Oe),ge.compose(new i.Vector3(De,.133,Ne),fe,Pe),Be.setMatrixAt(Le,ge),de.set(ne[(pe*7+be*11+Math.floor(be/2))%ne.length]),Be.setColorAt(Le,de),Le++}return Be.instanceMatrix.needsUpdate=!0,Be.instanceColor&&(Be.instanceColor.needsUpdate=!0),Be.receiveShadow=!0,Be.castShadow=!1,X.add(Be),Be}S(p,{x0:0,z0:14.1,width:2.5,length:13.5}),S(p,{x0:0,z0:7.5,width:4.2,length:1.8,unitX:.45,unitZ:.3});for(let X of[-1.34,1.34])T(p,.12,.09,12.8,X,.116,14.15,a);S(m,{x0:9.5,z0:15.1,width:4.5,length:11.2,unitX:.43,unitZ:.34}),S(m,{x0:9.5,z0:9.55,width:5.3,length:4.2,unitX:.44,unitZ:.3});for(let X of[7.14,11.86])T(m,.14,.08,11.2,X,.11,15.1,a);S(b,{x0:9.4,z0:.55,width:1.05,length:13.2,unitX:.35,unitZ:.35}),S(b,{x0:10.32,z0:-5.06,width:2.05,length:.96,unitX:.35,unitZ:.35}),S(M,{x0:-8.75,z0:-1.1,width:1.02,length:8.8,unitX:.34,unitZ:.34}),S(M,{x0:-9.7,z0:-3.64,width:1.92,length:.88,unitX:.34,unitZ:.34});let _=new i.Shape;_.moveTo(0,0),_.bezierCurveTo(.03,.035,.075,.1,0,.16),_.bezierCurveTo(-.075,.1,-.03,.035,0,0);let v=new i.ShapeGeometry(_,5);f.forEach(X=>{X.side=i.DoubleSide});let P=new i.Shape;P.moveTo(0,0),P.bezierCurveTo(.055,.05,.085,.13,.013,.2),P.bezierCurveTo(-.085,.13,-.055,.05,0,0);let R=new i.ShapeGeometry(P,4),I=new i.MeshStandardMaterial({color:"#46713f",roughness:.95}),F=new i.BoxGeometry(1,1,1),C=new i.Object3D;function E(X,te,ae,Y,z,W,K="flower"){let J=new i.Group;J.name="\u041A\u043B\u0443\u043C\u0431\u0430 \xB7 \u043D\u0430\u0442\u0443\u0440\u0430\u043B\u044C\u043D\u044B\u0435 \u0446\u0432\u0435\u0442\u044B",X.add(J),T(J,Y,.105,z,te,.11,ae,l);for(let de of[-1,1])T(J,.14,.19,z+.17,te+de*(Y/2+.04),.17,ae,a);for(let de of[-1,1])T(J,Y+.16,.19,.14,te,.17,ae+de*(z/2+.04),a);let se=Math.max(2,Math.floor(Y/.62)),ge=Math.max(2,Math.floor(z/.83)),fe=new Map,Pe=(de,Le,be,pe,Ee,Oe,De,Ne,ke,H,Nt)=>{let ut=de.uuid+"|"+Le.uuid,mt=fe.get(ut);mt||(mt={geometry:de,material:Le,transforms:[]},fe.set(ut,mt)),C.position.set(be,pe,Ee),C.rotation.set(Oe,De,Ne),C.scale.set(ke,H,Nt),C.updateMatrix(),mt.transforms.push(C.matrix.clone())},Be=W,ne=()=>(Be=Math.imul(Be,1664525)+1013904223>>>0,Be/4294967296);for(let de=0;de<se;de++)for(let Le=0;Le<ge;Le++){let be=te-Y/2+(de+.5)*Y/se+(ne()-.5)*.11,pe=ae-z/2+(Le+.5)*z/ge+(ne()-.5)*.17,Ee=K==="bush"?.24+ne()*.4:.25+ne()*.37;Pe(F,I,be,.24+Ee/2,pe,0,0,0,.023,Ee,.023);for(let Ne=0;Ne<5;Ne++){let ke=ne()*6.283,H=ne()>.4?c:d;Pe(R,H,be+.07*Math.cos(ke),.31+Ee*.4,pe+.07*Math.sin(ke),.27+ne()*.55,ke,.1+(ne()-.5)*.2,.58+ne()*.3,.63+ne()*.37,1)}if(K==="bush")continue;let Oe=f[(de*3+Le+W)%f.length],De=.25+Ee;Pe(v,f[2],be,De,pe,0,0,0,.065,.03,.065);for(let Ne=0;Ne<5;Ne++){let ke=2*Math.PI*Ne/5,H=.65+ne()*.35;Pe(v,Oe,be+.07*Math.cos(ke),De,pe+.07*Math.sin(ke),-Math.PI/2,0,ke,H,H,H)}}for(let{geometry:de,material:Le,transforms:be}of fe.values()){let pe=new i.InstancedMesh(de,Le,be.length);be.forEach((Ee,Oe)=>pe.setMatrixAt(Oe,Ee)),pe.instanceMatrix.needsUpdate=!0,pe.castShadow=!1,pe.receiveShadow=!1,pe.computeBoundingSphere(),J.add(pe)}}for(let X of[-1,1])E(g,X*3.2,13,2.3,8.1,37+(X+1)*7),E(y,X*3.3,13.2,2.6,6.7,123+(X+1)*13,"flower"),E(u,X*3.25,13.4,1.65,7.5,222+(X+1)*19,"bush"),E(h,X*4.15,12.5,3,7.6,471+(X+1)*11);let D=new i.MeshStandardMaterial({color:"#746047",roughness:.81}),U=new i.MeshStandardMaterial({color:"#b4aa92",roughness:.88});T(x,4.5,.12,3.6,-12,.2,-1.5,a);for(let X of[-13.95,-10.05])for(let te of[-2.95,-.05])T(x,.19,2.6,.19,X,1.54,te,D);for(let X of[-13.95,-10.05])T(x,.19,.18,3.15,X,2.84,-1.5,D);for(let X=-2.9;X<=-.1;X+=.54)T(x,4.23,.12,.14,-12,2.92,X,U);T(x,3.9,.15,.48,-12,.37,-1.5,D);function O(X){g.visible=X==="classic",y.visible=X==="family",u.visible=X==="modern",h.visible=X==="garden"}function V(X){m.visible=!!X}function B(X){x.visible=!!X,M.visible=!!X}function G(X){b.visible=!!X}return O("family"),V(!0),B(!1),G(!1),{root:n,path:p,parking:m,classic:g,family:y,modern:u,garden:h,gazebo:x,poolPath:b,pergolaPath:M,setStyle:O,setParking:V,setGazebo:B,setPool:G,getState:()=>({style:g.visible?"classic":y.visible?"family":u.visible?"modern":"garden",parking:m.visible,gazebo:x.visible})}}function vf(i){let e=(r,a=2.7,o=2.2)=>{let l=document.createElement("canvas");l.width=l.height=512;let c=l.getContext("2d",{alpha:!1}),d=280624;r(c,()=>(d=Math.imul(d,1664525)+1013904223>>>0,d/4294967296));let p=new i.CanvasTexture(l);return p.colorSpace=i.SRGBColorSpace,p.wrapS=p.wrapT=i.RepeatWrapping,p.repeat.set(a,o),p.anisotropy=4,p},t=(r,a="#b2aaa0",o=1)=>e((l,c)=>{l.fillStyle=a,l.fillRect(0,0,512,512);let d=95*o,f=34*o;for(let p=-1;p<Math.ceil(512/f)+1;p++)for(let m=-1;m<Math.ceil(512/d)+1;m++){let g=m*d+p%2*d*.5,y=p*f,u=r[Math.floor(c()*r.length)];l.fillStyle=u,l.fillRect(g+2,y+2,d-4,f-4),l.fillStyle="rgba(255,255,255,.09)",l.fillRect(g+3,y+3,d-6,2),l.fillStyle="rgba(0,0,0,.08)",l.fillRect(g+3,y+f-5,d-6,2);for(let h=0;h<10;h++)l.fillStyle=c()>.5?"rgba(255,255,255,.05)":"rgba(0,0,0,.06)",l.fillRect(g+3+c()*(d-6),y+3+c()*(f-6),1+c()*4,1+c()*3)}},3.1,2.4),n=(r,a,o=!1)=>e((l,c)=>{l.fillStyle=r,l.fillRect(0,0,512,512);let d=o?1200:21e3;for(let f=0;f<d;f++){l.fillStyle=c()>.5?"rgba(255,255,255,.07)":"rgba(50,47,41,.035)";let p=o?15+c()*80:1+c()*3;l.fillRect(c()*512,c()*512,p,p)}if(o)for(let f=0;f<7;f++){let p=c()*512,m=c()*512,g=l.createRadialGradient(p,m,3,p,m,100+c()*130);g.addColorStop(0,a),g.addColorStop(1,"rgba(185,178,162,0)"),l.fillStyle=g,l.fillRect(0,0,512,512)}},2.1,1.9),s=e((r,a)=>{r.fillStyle="#795a40",r.fillRect(0,0,512,512);for(let o=0;o<512;o+=37){r.fillStyle=["#a27a57","#896747","#987151","#79573e"][Math.floor(a()*4)],r.fillRect(o+2,0,34,512),r.fillStyle="rgba(43,30,17,.14)",r.fillRect(o+2,0,2,512);for(let l=0;l<32;l++)r.fillStyle="rgba(35,28,18,.07)",r.fillRect(o+4+a()*28,a()*512,1,15+a()*55)}},3.2,2.6);return{klinker:t(["#49352c","#584036","#765447","#61443c","#795a4b"],"#a79b90",.92),brickBeige:t(["#e0c8a7","#d7c4aa","#bca58b","#eed4b7","#cfad86"],"#ddd0bf",1),brickGraphite:t(["#656563","#454a4d","#575c60","#3e4548","#6e7070"],"#9a9c9a",1),brickWhite:t(["#ece7dc","#e0d9cc","#f2ede0","#d6d1c5","#e9e2d4"],"#bfc1b9",1),plasterSand:n("#c8b69a","rgba(148,125,96,.10)"),plasterWhite:n("#eeeae1","rgba(150,138,124,.09)"),venetian:n("#e2d9cc","rgba(142,133,120,.13)",!0),planken:s}}function Mf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u043E\u0442\u043C\u043E\u0441\u0442\u043A\u0430 \u043F\u043E \u043A\u043E\u043D\u0442\u0443\u0440\u0443",e.add(t);let n={graphite:"#51575b",gray:"#8d8980",sand:"#a69a82",brown:"#746d62"},s={concrete:"#858682",tile:"#6e7470",pavers:"#918778",stone:"#888073",wide:"#6d6e68"},r=new i.MeshStandardMaterial({color:s.concrete,roughness:.91}),a=g=>{let y=document.createElement("canvas");y.width=256,y.height=256;let u=y.getContext("2d");u.fillStyle="#565b59",u.fillRect(0,0,256,256);let h=g==="tile"?4:7,x=g==="tile"?4:9;for(let M=0;M<x;M++)for(let T=0;T<h;T++){let S=g==="pavers"&&M%2?-256/h/2:0,_=T*256/h+S,v=M*256/x;u.fillStyle=["#e4e1d9","#cbc9c0","#b9b8b0","#d2d0c7"][(T*7+M*11)%4],u.fillRect(_+2,v+2,256/h-4,256/x-4),_<0&&u.fillRect(_+256+2,v+2,256/h-4,256/x-4)}let b=new i.CanvasTexture(y);return b.colorSpace=i.SRGBColorSpace,b.wrapS=b.wrapT=i.RepeatWrapping,b.repeat.set(3,3),b},o=new i.TextureLoader().load(new URL("assets/3d/concrete_pavement_02_1k.webp",document.baseURI).href);o.colorSpace=i.SRGBColorSpace,o.wrapS=o.wrapT=i.RepeatWrapping,o.repeat.set(3,3);let l=new i.TextureLoader().load(new URL("assets/3d/stone_tile_wall.webp",document.baseURI).href);l.colorSpace=i.SRGBColorSpace,l.wrapS=l.wrapT=i.RepeatWrapping,l.repeat.set(3,3);let c={concrete:o,tile:a("tile"),pavers:a("pavers"),stone:l,wide:a("pavers")},d=[],f=()=>{let g=new i.Mesh(new i.BoxGeometry(1,.12,1),r);return g.castShadow=!1,g.receiveShadow=!0,t.add(g),d.push(g),g};for(let g=0;g<6;g++)f();let p=(g,y,u,h,x,b)=>{let M=d[g];M.visible=x>.08&&b>.08,M.position.set(y,u,h),M.scale.set(Math.max(x,.01),1,Math.max(b,.01))};function m({houseWidth:g=10,houseLength:y=10,type:u="concrete",color:h="graphite",width:x=.9,contour:b="all",verandaOn:M=!1}={}){let T=Math.max(5,Math.min(14,Number(g)||10)),S=Math.max(8,Math.min(18,Number(y)||10)),_=Math.max(u==="wide"?1.2:.6,Math.min(1.6,Number(x)||.9));r.color.set(n[h]||s[u]||s.concrete);let v=c[u]||null;r.map!==v&&(r.map=v,r.needsUpdate=!0),t.visible=u!=="none";let P=4.63,R=P-S,I=-T/2,F=T/2,C=Math.min(4.4,T-.6),E=(T-C)/2;p(0,I+E/2,.095,P+_/2,E,_),p(1,F-E/2,.095,P+_/2,E,_);let D=M?Math.min(T-.25,6.2*(Math.min(6.2,T-.55)/6.2)+.16):0;if(D>0){let B=(T+2*_-D)/2;p(2,I-_+B/2,.095,R-_/2,B,_),p(5,F+_-B/2,.095,R-_/2,B,_)}else p(2,0,.095,R-_/2,T+2*_,_),d[5].visible=!1;p(3,I-_/2,.095,(P+R)/2,_,S),p(4,F+_/2,.095,(P+R)/2,_,S);let U=b==="all",O=b==="front",V=b==="rear";d[0].visible=d[0].visible&&(U||O),d[1].visible=d[1].visible&&(U||O),d[2].visible=d[2].visible&&(U||V),d[5].visible=d[5].visible&&(U||V),d[3].visible=d[3].visible&&U,d[4].visible=d[4].visible&&U}return m(),{root:t,setLayout:m}}function Sf(i,e){let t=new i.Group;t.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0432\u0435\u0440\u0430\u043D\u0434\u0430",e.add(t);let n=(y,u=.81)=>new i.MeshStandardMaterial({color:y,roughness:u}),s=n("#8c8680"),r=n("#929188"),a=n("#806951"),o=n("#47504f"),l=new i.MeshStandardMaterial({color:"#829fa9",roughness:.23,metalness:.1,transparent:!0,opacity:.8}),c=new Map,d=(y,u,h,x,b,M,T,S)=>{let _=new i.Mesh(new i.BoxGeometry(u,h,x),S);return _.position.set(b,M,T),_.castShadow=h>.3,_.receiveShadow=!0,y.add(_),_};function f(y){let u=new i.Group;if(u.name="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \xB7 "+y,t.add(u),c.set(y,u),d(u,6.2,.24,3.1,0,.29,-1.47,r),d(u,6.28,.09,3.16,0,.45,-1.47,y==="modern"?o:s),d(u,4.1,.15,.77,0,.185,-3.45,s),d(u,1.59,2.2,.11,0,1.65,-.09,o),d(u,1.34,1.88,.04,0,1.65,-.17,l),d(u,.065,1.93,.1,0,1.65,-.2,o),y==="open"||y==="garden")for(let h of[-2.93,2.93])d(u,.12,.93,.13,h,.93,-2.76,a),d(u,.12,.93,.13,h,.93,-.43,a),d(u,.12,.1,2.35,h,1.37,-1.6,a);else{let h=y==="modern"?o:y==="columns"?s:a,x=y==="columns"?[-2.82,-1.98,1.98,2.82]:[-2.82,2.82];for(let b of x)d(u,y==="columns"?.24:.2,2.62,.2,b,1.79,-2.8,h),d(u,.36,.13,.38,b,.49,-2.8,s),d(u,.36,.12,.38,b,3.11,-2.8,h);if(d(u,6.4,.19,3.25,0,3.26,-1.5,y==="modern"?o:a),d(u,6.55,.08,3.32,0,3.39,-1.5,y==="modern"?o:s),y!=="modern")for(let b=-2.85;b<=2.85;b+=.65)d(u,.12,.14,3.14,b,3.17,-1.55,a)}return u}for(let y of["open","covered","columns","modern","garden"])f(y);let p="none";function m(y){p=c.has(y)?y:"none",t.visible=p!=="none";for(let[u,h]of c)h.visible=u===p}function g(y,u){let h=Math.max(5,Math.min(14,Number(y)||10)),x=Math.max(8,Math.min(18,Number(u)||10)),b=Math.min(6.2,h-.55);t.scale.set(b/6.2,1,1),t.position.set(0,0,4.63-x)}return g(10,10),m("none"),{root:t,setStyle:m,setDimensions:g,getStyle:()=>p}}function bf(i,e,{stone:t,brick:n,trim:s,wood:r,dark:a,glass:o}){let l=new i.Group;l.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435 \u0430\u0440\u0445\u0438\u0442\u0435\u043A\u0442\u0443\u0440\u043D\u044B\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F",e.add(l);let c=new Map,d=["twoClassic","twoBrick","twoColumns","twoModern","twoBalcony","twoTerrace","twoEstate","twoFamily","twoMansard","twoMansardBrick","twoMansardColumns"],f=(g,y,u,h,x,b,M,T)=>{let S=new i.Mesh(new i.BoxGeometry(y,u,h),T);return S.position.set(x,b,M),S.castShadow=!0,S.receiveShadow=!0,g.add(S),S},p=(g,y,u,h=1)=>{f(g,h,.2,.73,y,.45,u,t),f(g,h+.1,.1,.8,y,.58,u,s)};for(let g of d){let y=new i.Group;if(y.name="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0439 \u0434\u043E\u043C \xB7 "+g,l.add(y),c.set(g,y),g==="twoClassic"){for(let u of[-5.9,5.9])f(y,.33,5.9,.26,u,3.5,4.67,s),f(y,.47,.24,.38,u,6.54,4.7,t),p(y,u,4.91,.43);f(y,12.7,.21,.38,0,3.73,4.67,t),f(y,12.9,.19,.32,0,6.81,4.67,s)}if(g==="twoBrick"){for(let u of[-5.95,5.95])f(y,.64,5.94,.57,u,3.52,4.76,n),p(y,u,4.87,.72),f(y,.78,.18,.64,u,6.62,4.8,t);f(y,12.75,.17,.38,0,3.75,4.76,t)}if(g==="twoColumns"){f(y,12.3,.28,1.54,0,.42,5.06,t),f(y,12.6,.25,1.54,0,6.45,5.05,t);for(let u of[-5.8,5.8])f(y,.3,5.65,.3,u,3.5,5.68,s),f(y,.62,.15,.61,u,.66,5.68,t),f(y,.58,.18,.61,u,6.27,5.68,t)}if(g==="twoModern"){for(let u of[-6,6])f(y,.33,6.18,.35,u,3.69,4.83,a);for(let u of[3.79,6.63])f(y,12.6,.27,.3,0,u,4.78,a);f(y,7.25,.08,.18,0,3.95,4.84,o),f(y,5.4,.17,1.7,0,3.36,5.28,a);for(let u of[-2.48,2.48])f(y,.2,2.51,.2,u,1.8,5.87,a),p(y,u,5.87,.35)}if(g==="twoBalcony"){f(y,6,.23,2.03,0,3.93,-5.48,t);for(let u of[-2.67,2.67])f(y,.24,3.41,.24,u,2.16,-6.28,s),p(y,u,-6.28,.42);for(let u of[-2.85,2.85])f(y,.13,1,.13,u,4.56,-6.44,a);for(let u=-2.78;u<=2.79;u+=.48)f(y,.08,.81,.1,u,4.49,-6.44,a);f(y,5.85,.12,.16,0,5.04,-6.44,a),f(y,1.7,2.4,.13,0,5.1,-4.7,a),f(y,1.52,2.22,.06,0,5.1,-4.8,o),f(y,.065,2.18,.08,0,5.1,-4.85,a),f(y,1.52,.065,.08,0,5.18,-4.85,a),f(y,.09,.13,.11,.47,4.89,-4.88,t)}if(g==="twoTerrace"){for(let u of[-5.62,5.62])f(y,.28,5.85,.25,u,3.56,4.76,r),f(y,.49,.15,.41,u,6.55,4.76,t);for(let u of[3.72,6.83])f(y,12.9,.16,.35,0,u,4.72,r)}if(g==="twoEstate"){for(let u of[-6.1,6.1])f(y,.48,6.16,.35,u,3.68,4.72,t),f(y,.72,.19,.5,u,6.67,4.72,s),p(y,u,4.83,.66);f(y,12.9,.24,.55,0,6.87,4.82,t),f(y,12.7,.22,.47,0,3.69,4.82,s)}if(g==="twoMansard"){for(let u of[-5.85,5.85])f(y,.26,5.88,.3,u,3.51,4.8,s),p(y,u,4.85,.44);for(let u of[3.71,6.73])f(y,12.5,.15,.35,0,u,4.8,t)}if(g==="twoMansardBrick"){for(let u of[-5.9,5.9])f(y,.51,5.95,.42,u,3.54,4.79,n),p(y,u,4.88,.65);f(y,12.7,.18,.38,0,3.7,4.83,t),f(y,12.6,.17,.38,0,6.72,4.83,s)}if(g==="twoMansardColumns"){f(y,9.1,.23,1.75,0,.41,5.36,t),f(y,9.35,.22,1.8,0,6.42,5.36,t);for(let u of[-3.95,-2.15,2.15,3.95])f(y,.24,5.6,.24,u,3.48,6.1,s),f(y,.48,.13,.46,u,.62,6.1,t)}if(g==="twoFamily"){for(let u of[-5.94,5.94])f(y,.29,5.9,.35,u,3.58,4.72,n),f(y,.37,.15,.43,u,6.62,4.72,s),p(y,u,4.86,.4);f(y,12.6,.12,.29,0,3.72,4.75,t)}}function m(g){for(let[y,u]of c)u.visible=y===g}return m("none"),{root:l,groups:c,setStyle:m,ids:d}}var ue={ACESFilmicToneMapping:Jr,BoxGeometry:Ei,BufferAttribute:Sn,BufferGeometry:fn,CanvasTexture:Mr,Color:at,CylinderGeometry:wr,DirectionalLight:Xr,DoubleSide:Rn,EquirectangularReflectionMapping:Ws,Euler:Un,Float32BufferAttribute:Tt,Fog:pr,Group:li,HemisphereLight:kr,InstancedMesh:yr,Matrix4:_t,Mesh:pn,MeshBasicMaterial:Ds,MeshPhysicalMaterial:Fr,MeshStandardMaterial:Os,Object3D:Jt,PCFSoftShadowMap:Io,PerspectiveCamera:en,Plane:an,PlaneGeometry:Ki,PointLight:Hr,Quaternion:on,Raycaster:qr,RepeatWrapping:As,SRGBColorSpace:rn,Scene:mr,Shape:Us,ShapeGeometry:Dr,SphereGeometry:Nr,TextureLoader:zr,TorusGeometry:Ur,Vector2:Fe,Vector3:Z,WebGLRenderer:Ml},Fi=document.getElementById("sceneContainer"),Il=document.getElementById("modelFallback"),ha=document.getElementById("loading3d"),bh=document.getElementById("hourInput"),yy=document.getElementById("hourLabel"),wh=document.getElementById("windowsToggle"),Ah=document.getElementById("facadeSelect"),Th=document.getElementById("roofSelect"),ua=document.getElementById("fenceSelect"),Eh=document.getElementById("roofColorSelect"),Ch=document.getElementById("fenceColorSelect"),da=document.getElementById("houseStyleSelect"),is=document.getElementById("roofShapeSelect"),wf=document.getElementById("houseSizeSelect"),Rh=document.getElementById("houseWidthInput"),Ph=document.getElementById("houseLengthInput"),Af=document.getElementById("houseFloorsSelect"),Tf=document.getElementById("frameColorSelect"),Ef=document.getElementById("doorColorSelect"),Cf=document.getElementById("glassTintSelect"),Rf=document.getElementById("landscapeSelect"),Ll=document.getElementById("poolToggle"),Pf=document.getElementById("entranceStyleSelect"),If=document.getElementById("plinthSelect"),w1=document.getElementById("terraceToggle"),Lf=document.getElementById("yardStyleSelect"),Ih=document.getElementById("parkingToggle"),Df=document.getElementById("gazeboToggle"),Zs=document.getElementById("verandaSelect"),vy=document.getElementById("blindAreaType"),Nf=document.getElementById("blindAreaColor"),Uf=document.getElementById("blindAreaWidth"),Ff=document.getElementById("blindAreaContour"),Dl=document.getElementById("highDetailButton"),Oi=document.getElementById("qualitySelect"),ss=document.getElementById("autoRotate"),Nl=document.getElementById("modelFPS"),My=window.matchMedia("(prefers-reduced-motion: reduce)").matches,Js=(i,e,t)=>Math.max(e,Math.min(t,i)),Ul=()=>{let i=document.createElement("canvas");i.width=512,i.height=512;let e=i.getContext("2d",{alpha:!1});e.fillStyle="#e9d9cd",e.fillRect(0,0,512,512);let t=15,n=512/t,s=88;for(let a=0;a<t;a++)for(let o=-1;o<7;o++){let l=a%2?s/2:0,c=o*s-l,d=(a*37+o*59+1e3)%8,f=["#b46f5e","#b97967","#ad6e5e","#bd7c6a","#b67561","#9f6255","#bf8270","#ac7163"];e.fillStyle=f[d],e.fillRect(c+1,a*n+1,s-2,n-2),e.fillStyle="rgba(255,233,212,.10)",e.fillRect(c+3,a*n+2,s-7,2),e.fillStyle="rgba(55,31,25,.10)",e.fillRect(c+2,a*n+n-5,s-4,2)}let r=new ue.CanvasTexture(i);return r.colorSpace=ue.SRGBColorSpace,r.wrapS=r.wrapT=ue.RepeatWrapping,r.repeat.set(3.25,2.15),r.anisotropy=4,r},fa=(i,e=1,t=1)=>{let n=document.createElement("canvas");n.width=512,n.height=512;let s=n.getContext("2d",{alpha:!1}),r=29617;i(s,()=>(r=Math.imul(r,1664525)+1013904223>>>0,r/4294967296));let o=new ue.CanvasTexture(n);return o.colorSpace=ue.SRGBColorSpace,o.wrapS=o.wrapT=ue.RepeatWrapping,o.repeat.set(e,t),o.anisotropy=4,o},Lh=i=>{let e={slate:["#354044","#434a4b","#30383d","#4e5353","#44484a","#353a3e"],terracotta:["#9b513f","#ad6147","#864333","#b46f53","#a75b42","#8b4a37"],graphite:["#282c30","#34393a","#3b3f43","#292e33","#44474b","#343a3d"]};return fa((t,n)=>{t.fillStyle="#272b2b",t.fillRect(0,0,512,512);let s=e[i],r=59,a=33;for(let o=-1;o<18;o++)for(let l=-1;l<11;l++){let c=l*r+o%2*r/2,d=o*a;t.fillStyle=s[Math.floor(n()*s.length)],t.fillRect(c+1,d+1,r-2,a-2),t.fillStyle="rgba(255,255,255,.075)",t.fillRect(c+3,d+2,r-7,2),t.fillStyle="rgba(0,0,0,.11)",t.fillRect(c+1,d+a-5,r-2,3)}for(let o=0;o<4700;o++)t.fillStyle=n()>.5?"rgba(255,255,255,.035)":"rgba(0,0,0,.05)",t.fillRect(n()*512,n()*512,1+n()*3,1+n()*2)},3,3)},Dh=()=>fa((i,e)=>{i.fillStyle="#d8c9b4",i.fillRect(0,0,512,512);let t=["#e6daca","#d3c0a8","#ccbea9","#e5d3bc","#c4b49e"];for(let n=0;n<12;n++)for(let s=-1;s<7;s++){let o=s*85+n%2*85/2,l=n*44;i.fillStyle=t[Math.floor(e()*t.length)],i.fillRect(o+1,l+1,83,42),i.fillStyle="rgba(255,255,255,.13)",i.fillRect(o+3,l+2,79,2)}for(let n=0;n<9400;n++){let s=e()>.5?"rgba(67,54,42,.045)":"rgba(255,255,255,.08)";i.fillStyle=s,i.fillRect(e()*512,e()*512,1+e()*4,1+e()*3)}},2,1.75),Sy=()=>fa((i,e)=>{i.fillStyle="#e7dfd0",i.fillRect(0,0,512,512);for(let t=0;t<28e3;t++)i.fillStyle=e()>.53?"rgba(255,255,255,.12)":"rgba(107,94,74,.09)",i.fillRect(e()*512,e()*512,1+e()*3,1+e()*3)},2,2),by=()=>fa((i,e)=>{i.fillStyle="#63794e",i.fillRect(0,0,512,512);for(let t=0;t<22e3;t++)i.fillStyle=e()>.52?"rgba(173,194,123,.17)":"rgba(35,69,35,.20)",i.fillRect(e()*512,e()*512,1+e()*2,2+e()*7)},18,18),wy=()=>fa((i,e)=>{i.fillStyle="#c0baab",i.fillRect(0,0,512,512);for(let t=0;t<14;t++)for(let n=-1;n<9;n++){let a=n*69+(t%2?34.5:0),o=t*38,l=Math.floor(168+e()*37);i.fillStyle="rgb("+l+","+(l-3)+","+(l-10)+")",i.fillRect(a+2,o+2,65,34),i.fillStyle="rgba(255,255,255,.10)",i.fillRect(a+3,o+3,63,2);for(let c=0;c<6;c++)i.fillStyle="rgba(65,63,50,.04)",i.fillRect(a+e()*69,o+e()*38,2,2)}},2,5);try{let f=function(L){if(o)return;let ie=l[L]||l.front;c={camera:new ue.Vector3(...ie.camera),target:new ue.Vector3(...ie.target)},a.autoRotate=!1,ss.setAttribute("aria-pressed","false"),ss.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440",d&&(d.value=L in l?L:"front")},zf=function(){new ue.TextureLoader().load(new URL("assets/3d/metal_roof_rough.webp",document.baseURI).href,L=>{L.wrapS=L.wrapT=ue.RepeatWrapping,L.repeat.set(2,2),K.setMetalRoughness(L)},void 0,()=>{})};if(!window.WebGLRenderingContext)throw new Error("WebGL unavailable");let i=new ue.Scene,e=window.matchMedia("(min-width:850px) and (pointer:fine)").matches,t=new ue.WebGLRenderer({antialias:!0,powerPreference:e?"high-performance":"low-power",alpha:!1,stencil:!1});t.setPixelRatio(Math.min(window.devicePixelRatio||1,1.95)),t.outputColorSpace=ue.SRGBColorSpace,t.toneMapping=ue.ACESFilmicToneMapping,t.toneMappingExposure=1.35,t.shadowMap.enabled=!0,t.shadowMap.type=ue.PCFSoftShadowMap,t.domElement.addEventListener("webglcontextlost",L=>{L.preventDefault(),t.domElement.style.visibility="hidden",Il.style.display="block",ha.hidden=!0,Nl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u0435 3D \u043F\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B"},!1),t.domElement.setAttribute("aria-label","\u0422\u0440\u0451\u0445\u043C\u0435\u0440\u043D\u0430\u044F \u043C\u043E\u0434\u0435\u043B\u044C \u0447\u0430\u0441\u0442\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430. \u0412\u0440\u0430\u0449\u0430\u0439\u0442\u0435 \u043F\u0430\u043B\u044C\u0446\u0435\u043C \u0438\u043B\u0438 \u043C\u044B\u0448\u044C\u044E"),Fi.appendChild(t.domElement),t.domElement.style.visibility="hidden";let n=new ue.PerspectiveCamera(48,1,.2,130),s=window.matchMedia("(max-width:730px)").matches,r=s?new ue.Vector3(17,13,49.5):new ue.Vector3(22,14,51);n.position.copy(r);let a=new Al(n,t.domElement);a.enableDamping=!0,a.dampingFactor=.085,a.enablePan=!1,a.minDistance=12.5,a.maxDistance=75,a.minPolarAngle=.18,a.maxPolarAngle=Math.PI*.475,a.autoRotate=!1,a.autoRotateSpeed=2.15,a.target.set(0,2.75,0),a.update();let o=!1,l={front:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]},side:{camera:[31,9,2.5],target:[0,2.8,0]},back:{camera:[12,8,-28],target:[0,2.7,0]},top:s?{camera:[17,62,15],target:[8,1,3]}:{camera:[13,49,12],target:[5,1,3]},yard:{camera:[20,14.5,36],target:[2.4,1.5,9]},facade:s?{camera:[9.7,6.4,16.3],target:[0,2.45,2.4]}:{camera:[12.5,7.2,20],target:[0,2.5,2.7]},roof:s?{camera:[10.2,10,17],target:[0,3.8,1.7]}:{camera:[14.3,12.1,20],target:[0,4,1.7]},fence:{camera:[23,16.5,33],target:[0,3.05,5]},presets:s?{camera:[14,11,37],target:[0,2.6,4]}:{camera:[18,13,43],target:[0,2.65,3.3]}},c=null;window.addEventListener("kaskad:focus-view",L=>{if(o||typeof un<"u"&&un)return;let ie=l[L.detail?.tab];ie&&(c={camera:new ue.Vector3(...ie.camera),target:new ue.Vector3(...ie.target)})}),a.addEventListener("start",()=>{c=null});let d=document.getElementById("sceneViewSelect");d?.addEventListener("change",()=>f(d.value)),document.getElementById("sceneOverviewButton")?.addEventListener("click",()=>f("front"));let p=document.getElementById("sceneGestureTip");a.addEventListener("start",()=>{p&&p.classList.add("is-used")},{once:!0}),f("front");let m=(L,ie=.8,Se={})=>new ue.MeshStandardMaterial({color:L,roughness:ie,...Se}),g={brick:Ul(),stone:Dh(),plaster:Sy(),tuscan:Ul(),gray:Dh(),...vf(ue)},y={slate:Lh("slate"),terracotta:Lh("terracotta"),graphite:Lh("graphite")},u=new ue.MeshBasicMaterial({color:"#ffffff",map:g.brick,toneMapped:!0}),h=m("#e6dece",.79),x=m("#ede7da",.57),b=m("#55534d",.91),M=m("#94877b",.86),T=m("#3e4849",.82),S=m("#4a3a31",.67,{metalness:.08}),_=m("#6f6555",.53,{metalness:.48}),v=m("#6f6555",.46,{metalness:.47}),P=m("#a9b2aa",.35,{metalness:.52}),R=m("#ffffff",.86,{map:wy()}),I=m("#ffffff",.97,{map:by()}),F=m("#777f7b",.9),C=new ue.MeshPhysicalMaterial({color:"#4f9eaa",roughness:.075,metalness:.04,transparent:!0,opacity:.88,clearcoat:.95,clearcoatRoughness:.09,envMapIntensity:1.1,side:ue.DoubleSide}),E=new ue.Mesh(new ue.PlaneGeometry(135,135),I);E.rotation.x=-Math.PI/2,E.receiveShadow=!0,i.add(E);let D=(L,ie,Se,tt,nt,gt,St,dt=!0)=>{let je=new ue.Mesh(new ue.BoxGeometry(L,ie,Se),tt);return je.position.set(nt,gt,St),je.castShadow=dt,je.receiveShadow=!0,i.add(je),je},U=(L,ie,Se,tt,nt,gt,St,dt=16)=>{let je=new ue.Mesh(new ue.CylinderGeometry(L,ie,Se,dt),tt);return je.position.set(nt,gt,St),je.castShadow=!0,je.receiveShadow=!0,i.add(je),je},O=i.children.length;D(13.6,.42,9.65,b,0,.29,0);let V=new ue.BoxGeometry(12.8,6.45,9),B=V.getAttribute("uv");for(let L=0;L<8;L++)B.setX(L,B.getX(L)*(9/12.8));B.needsUpdate=!0;let G=new ue.Mesh(V,u);G.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0435\u0434\u0438\u043D\u044B\u0439 \u043A\u0438\u0440\u043F\u0438\u0447\u043D\u044B\u0439 \u0444\u0430\u0441\u0430\u0434 4 \u0441\u0442\u043E\u0440\u043E\u043D\u044B",G.position.set(0,3.66,0),G.castShadow=!0,G.receiveShadow=!0,i.add(G),D(13.2,.18,9.45,x,0,3.66,0),D(13.4,.28,9.6,h,0,6.86,0),D(13,.16,9.35,x,0,7.1,0),D(12.93,.22,9.13,u,0,6.96,0),D(12.85,.1,9.05,x,0,7.08,0);let X=i.children.length;D(3.85,.2,1.85,h,0,3.06,5.42),D(3.94,.07,1.96,x,0,3.18,5.42);for(let L of[-1.72,1.72])U(.14,.15,2.35,x,L,1.83,6.2,14),U(.23,.23,.13,h,L,.65,6.2,16),U(.22,.22,.12,h,L,3.03,6.2,16);let te=i.children.slice(X),ae=new ue.BufferGeometry,Y=new Float32Array([-7.25,6.98,-5.25,0,9.05,-5.25,0,9.05,5.25,-7.25,6.98,-5.25,0,9.05,5.25,-7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,-5.25,7.25,6.98,5.25,0,9.05,-5.25,7.25,6.98,5.25,0,9.05,5.25]);ae.setAttribute("position",new ue.BufferAttribute(Y,3)),ae.computeVertexNormals(),ae.setAttribute("uv",new ue.Float32BufferAttribute([0,0,.5,1,.5,0,0,0,.5,0,0,1,.5,1,1,0,1,1,.5,1,1,1,.5,0],2));let z=new ue.MeshStandardMaterial({color:"#ffffff",roughness:.78,map:y.slate,side:ue.DoubleSide}),W=new ue.Mesh(ae,z);W.castShadow=!0,W.receiveShadow=!0,i.add(W);let K=uf(ue,i,{tileRoof:W,roofSurface:z}),J=K.metalMat,se=new ue.BufferGeometry;se.setAttribute("position",new ue.Float32BufferAttribute([-6.43,7.03,4.51,6.43,7.03,4.51,0,8.77,4.51,-6.43,7.03,-4.51,0,8.77,-4.51,6.43,7.03,-4.51],3));let ge=(7.03-(3.66-6.45/2))/6.45,fe=(8.77-(3.66-6.45/2))/6.45;se.setAttribute("uv",new ue.Float32BufferAttribute([0,ge,1,ge,.5,fe,1,ge,.5,fe,0,ge],2)),se.computeVertexNormals();let Pe=new ue.Mesh(se,u);Pe.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0444\u0440\u043E\u043D\u0442\u043E\u043D\u044B \u0442\u043E\u0433\u043E \u0436\u0435 \u043C\u0430\u0442\u0435\u0440\u0438\u0430\u043B\u0430",Pe.castShadow=!0,Pe.receiveShadow=!0,i.add(Pe);let Be=D(.2,.24,10.6,T,0,9.03,0);for(let L of[-6.6,6.6])for(let ie of[-4.45,4.45])for(let Se=0;Se<13;Se++){let tt=.84+Se*.455,nt=new ue.Mesh(new ue.BoxGeometry(.43,.31,.53),Se%2?x:h);nt.position.set(L,tt,ie),nt.castShadow=!0,nt.receiveShadow=!0,i.add(nt)}let ne=m("#616767",.38,{metalness:.57});for(let L of[-7.22,7.22]){let ie=new ue.Mesh(new ue.CylinderGeometry(.105,.105,10.65,12),ne);ie.rotation.x=Math.PI/2,ie.position.set(L,6.96,0),ie.castShadow=!0,i.add(ie)}for(let L of[-6.54,6.54])U(.068,.068,6.28,ne,L,3.71,4.69,10),D(.34,.12,.2,ne,L,6.98,4.7,!1),D(.34,.12,.2,ne,L,.53,4.7,!1);for(let L of[-3.45,0,3.45])D(13.02,.11,.08,h,0,3.6,L,!1);D(1.72,2.58,.13,h,0,1.58,4.67),D(1.52,2.34,.2,S,0,1.54,4.79),D(.12,.12,.14,_,.55,1.54,4.95);let de=new ue.MeshStandardMaterial({color:"#a6bdc7",roughness:.17,metalness:.26,emissive:new ue.Color("#ffd68c"),emissiveIntensity:0}),Le=[],be=[],pe=(L,ie,Se,tt=0,nt=1.48,gt=1.58)=>{let St=new ue.Group;St.position.set(L,ie,Se),St.rotation.y=tt,i.add(St);let dt=(Ct,kt,xn,mi,qt,yn,gi)=>{let dn=new ue.Mesh(new ue.BoxGeometry(Ct,kt,xn),mi);return dn.position.set(qt,yn,gi),dn.castShadow=!0,St.add(dn),dn};dt(nt+.25,gt+.32,.13,u,0,0,0),dt(nt+.05,gt+.1,.14,v,0,0,.09);let je=dt(nt-.1,gt-.18,.025,de,0,0,.18);return Le.push(je),dt(.065,gt-.04,.055,x,0,0,.23),dt(nt-.04,.065,.055,x,0,0,.23),dt(nt+.3,.16,.35,x,0,-gt/2-.13,.13),dt(.043,gt-.22,.055,v,-nt*.26,0,.243),dt(.043,gt-.22,.055,v,nt*.26,0,.243),dt(nt-.11,.032,.055,v,0,-gt*.23,.245),dt(nt-.11,.032,.055,v,0,gt*.23,.245),be.push({group:St,x:L,y:ie,z:Se,rot:tt}),St};[-4.55,-2.3,2.3,4.55].forEach(L=>{pe(L,2.12,4.58),pe(L,5.49,4.58)}),pe(0,5.49,4.58,0,1.54,1.72);for(let L of[-4.5,-2.3,2.3,4.5])pe(L,2.12,-4.58,Math.PI),pe(L,5.49,-4.58,Math.PI);for(let L of[-2.65,0,2.65])for(let ie of[2.18,5.43])pe(6.49,ie,L,Math.PI/2,1.45,1.64),pe(-6.49,ie,L,-Math.PI/2,1.45,1.64);let Oe=pf(ue,i,{limestone:h,quartz:x,bronze:_,doorMat:S,roofMat:T,porchElements:te,balconyElements:[]}),De=()=>{let L=da?.value||"classic";Ne.visible=!Nt.has(L),H.setStyle(L);let ie={twoClassic:"classic",twoBrick:"practical",twoColumns:"classic",twoModern:"modern",twoBalcony:"classic",twoTerrace:"classic",twoEstate:"estate",twoFamily:"practical"}[L]||L;Ne.visible&&Oe.setStyle(ie),Ie.setStyle(L);for(let Se of be){let tt=Math.abs(Se.z-4.58)<.2,nt=Math.abs(Se.z+4.58)<.2,gt=Se.y>4,St=Math.abs(Se.x)<2.7,dt=L==="modern"&&tt&&gt,je=L==="coastal"&&tt&&gt&&St,Ct=L==="practical"&&((tt||nt)&&Math.abs(Se.x)>4||!tt&&!nt&&Math.abs(Se.z)<.1),kt=L==="craft"&&tt&&gt&&Math.abs(Se.x)<3;Se.group.visible=!(dt||je||Ct||kt)}},Ne=new ue.Group;Ne.name="KASKAD parametric house volume";for(let L of i.children.slice(O))Ne.add(L);i.add(Ne);let ke=df(ue,Ne,{roofSystem:K,roofRidge:Be,gableFacades:Pe}),H=_f(ue,i,{brick:u,limestone:h,quartz:x,roofSystem:K,windowFrameMetal:v,glassMat:de,doorMat:S}),Nt=new Set(la.filter(L=>L.group!=="\u0414\u0432\u0443\u0445\u044D\u0442\u0430\u0436\u043D\u044B\u0435").map(L=>L.id)),ut=m("#806447",.81),mt=Pl(ue,Ne,{stone:h,brick:u,wood:ut,metal:T}),Ie=bf(ue,Ne,{stone:h,brick:u,trim:x,wood:ut,dark:T,glass:de}),Pt=Mf(ue,i),Ye=Sf(ue,i),Je=()=>{let L=If?.value||"graphite";mt.setPlinth(L),mt.setTerrace(!1),H.setPlinth(L),H.setTerrace(!1);let ie=Number(Rh?.value)||10,Se=Number(Ph?.value)||10;if(da?.value==="twoBalcony"&&Zs?.value!=="none"){Zs.value="none",Zs.dispatchEvent(new Event("change",{bubbles:!0}));let tt=document.getElementById("siteCompatibilityNote");tt&&(tt.textContent="\u0412\u0435\u0440\u0430\u043D\u0434\u0430 \u043E\u0442\u043A\u043B\u044E\u0447\u0435\u043D\u0430: \u0437\u0430\u0434\u043D\u0438\u0439 \u0431\u0430\u043B\u043A\u043E\u043D \u0437\u0430\u043D\u0438\u043C\u0430\u0435\u0442 \u0442\u0443 \u0436\u0435 \u0437\u043E\u043D\u0443.")}Ye.setStyle(Zs?.value||"none"),Ye.setDimensions(ie,Se),Pt.setLayout({houseWidth:ie,houseLength:Se,type:"none",color:Nf?.value||"graphite",width:Number(Uf?.value)||.9,contour:Ff?.value||"all",verandaOn:(Zs?.value||"none")!=="none"})};Pt.root.visible=!1,[If,Zs,vy,Nf,Uf,Ff].forEach(L=>L?.addEventListener("change",Je)),Je();let N=Rl(ue,Ne,{stone:h,trim:x,wood:ut,metal:T}),w=()=>{let L=Pf?.value||"simple";te.forEach(ie=>{ie.visible=!1}),N.setStyle(L),H.setEntrance(L)};Pf?.addEventListener("change",w),w();let Q={classic:1.42,italian:1.5,modern:1.85,estate:1.56,kavkaz:1.4,coastal:1.7,practical:1.36,craft:1.3},me=Float32Array.from(V.getAttribute("uv").array),he=Float32Array.from(se.getAttribute("uv").array),Me=()=>{let L=Math.max(5,Math.min(14,Number(Rh?.value)||10)),ie=Math.max(8,Math.min(18,Number(Ph?.value)||10)),Se=L/12.8,tt=ie/9;Ne.scale.set(Se,1,tt),Ne.position.z=4.58*(1-tt);for(let je of N.styles.values())je.scale.x=1/Se,je.scale.z=1/tt,je.position.z=4.58*(tt-1)/tt;let nt=L<8.5?2:4;for(let je of be){let{group:Ct,x:kt,z:xn,rot:mi}=je,qt=Math.abs(kt)>6,yn=!qt&&xn>0,gi=!qt&&xn<0,dn=Math.abs(kt)>4;if(Ct.visible=!(L<8.5&&!qt&&!dn),Ct.scale.x=qt?1/tt:1/Se,Ct.scale.z=qt?1/Se:1/tt,qt)Ct.position.x=Math.sign(kt)*(L/2-.1)/Se,Ct.position.z=(xn===0?0:Math.sign(xn)*Math.max(1.5,ie/2-1.4))/tt;else if(yn||gi){let ba=dn?L/2-1.05:L/2-2.87;Ct.position.x=Math.sign(kt)*Math.max(.87,ba)/Se}L<8&&Math.abs(kt)<.1&&yn&&(Ct.visible=!1)}let gt=V.getAttribute("uv");for(let je=0;je<gt.count;je++){let Ct=je<8?tt:je>=16?Se:1;gt.setXY(je,me[je*2]*Ct,me[je*2+1])}gt.needsUpdate=!0;let St=se.getAttribute("uv");for(let je=0;je<St.count;je++)St.setXY(je,he[je*2]*Se,he[je*2+1]);St.needsUpdate=!0;let dt=Af?.value||"one";Ne.userData.footprint={width:L,length:ie,floors:dt},H.setDimensions(L,ie),mt.setDimensions(L,ie),Je()};window.addEventListener("kaskad:dimensions-changed",()=>Me());for(let L of[Rh,Ph,Af])L?.addEventListener("change",Me);let Ce=()=>{let L=is?.value||"hip",ie=["modernOne","minimal","coastal","twoModern"].includes(da?.value);L==="flat"&&!ie&&(L="hip",is&&(is.value=L),is?.dispatchEvent(new CustomEvent("kaskad:roof-guard"))),ke.setShape(L),H.setRoof(L,K.getType())},le=()=>{De(),Me(),Ce()};da?.addEventListener("change",()=>{le(),f("front")}),wf?.addEventListener("change",Me),is?.addEventListener("change",Ce),le();for(let L=0;L<3;L++)D(3.35+L*.42,.16,.69,M,0,.34-L*.09,6.54+L*.55);let oe=yf(ue,i,{lawnMaterial:I}),Ae=i.children.length,k=m("#a6a29b",.83),ce=m("#8eb7b6",.72,{metalness:.03});D(5.88,.065,9.85,ce,14.35,.04,.5,!1),D(5.84,.015,9.79,C,14.35,.145,.5,!1);for(let L of[11.2,17.5])D(.32,.22,10.42,k,L,.175,.5,!1);for(let L of[-4.63,5.63])D(6.52,.22,.31,k,14.35,.175,L,!1);let re=m("#d2d3ce",.64);for(let L=0;L<3;L++)D(3.3-L*.25,.035,.55,re,14.35,.123-L*.012,-4.04+L*.38,!1);let xe=new ue.Group;xe.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0431\u0430\u0441\u0441\u0435\u0439\u043D";for(let L of i.children.slice(Ae))xe.add(L);i.add(xe);let ye=m("#6b5847",.96),we=i.children.length;ff(ue,i,{trunkMat:ye});let We=new ue.Group;We.name="\u041A\u0410\u0421\u041A\u0410\u0414 \xB7 \u0434\u0435\u0440\u0435\u0432\u044C\u044F \u0438 \u043A\u0443\u0441\u0442\u0430\u0440\u043D\u0438\u043A\u0438";for(let L of i.children.slice(we))L.isInstancedMesh&&(L.userData.defaultCount=L.count),We.add(L);i.add(We);let Qe=m("#e1d8c6",.84,{map:Dh()}),_e=m("#262c2c",.54,{metalness:.63}),qe=m("#665747",.73,{metalness:.05}),$e=m("#b07c67",.85,{map:g.brick}),ve=m("#ffffff",.88,{map:Ul()}),st=m("#ffffff",.88,{map:Ul()}),Ot=m("#e2d6c2",.64),Kn=[m("#466c45",.94),m("#5b7c51",.96),m("#3a6549",.96),m("#7b8355",.97)],Fl=m("#b88c82",.95),pa=m("#ded4b9",.96),Bi=hf(ue,i,{gardenStone:Qe,postBrick:$e,tuscanBrick:ve,tuscanFenceWall:st,copingStone:Ot,fenceIron:_e,timber:qe}),Pn=new ue.Group;Pn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \u0434\u043E\u043C\u0430",i.add(Pn);for(let L of[Ne,H.root,Ye.root,Pt.root])Pn.add(L);let _n=new ue.Group;_n.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u0433\u0440\u0430\u043D\u0438\u0446\u044B \u0432 \u043C\u0430\u0441\u0448\u0442\u0430\u0431\u0435",i.add(_n);let Bn=m("#2f6d40",.86),ma=m("#c6b89b",.9),zn=document.createElement("div");zn.className="kaskad-site-scene-hint",zn.hidden=!0,zn.textContent="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0435\u043C\u0435\u0441\u0442\u0438\u0442\u0435 \u0434\u043E\u043C \u043F\u0430\u043B\u044C\u0446\u0435\u043C",Fi.append(zn);let $n=[];for(let L=0;L<4;L++){let ie=new ue.Mesh(new ue.BoxGeometry(1,.22,1),Bn);ie.position.y=.16,_n.add(ie),$n.push(ie)}let zi=[];for(let L=0;L<4;L++){let ie=new ue.Mesh(new ue.BoxGeometry(.28,1.15,.28),Bn);ie.position.y=.6,_n.add(ie),zi.push(ie)}let pi=new ue.Mesh(new ue.PlaneGeometry(1,1),new ue.MeshStandardMaterial({color:"#78b46b",transparent:!0,opacity:.38,roughness:1,depthWrite:!1}));pi.rotation.x=-Math.PI/2,pi.position.y=.018,_n.add(pi);let jn=new ue.Group;jn.name="\u0423\u0447\u0430\u0441\u0442\u043E\u043A \xB7 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0438 \u043A\u0430\u043B\u0438\u0442\u043A\u0430",_n.add(jn);let ki=new ue.BoxGeometry(.085,1.25,.085),Ks=m("#354b43",.5,{metalness:.3}),ga=m("#d0c5af",.88),kn=new ue.Mesh(new ue.BoxGeometry(1,.07,1),ga);kn.name="\u0414\u043E\u0440\u043E\u0436\u043A\u0430 \u043E\u0442 \u043A\u0430\u043B\u0438\u0442\u043A\u0438 \u043A \u0432\u0445\u043E\u0434\u0443",kn.position.y=.045,_n.add(kn);let _a=0,xa=0,Ol=(L,ie,Se)=>{if(L===_a&&ie===xa)return;_a=L,xa=ie,jn.clear();let tt=[[-L/2,Se,-1.28,Se],[1.28,Se,L/2,Se],[-L/2,Se,-L/2,Se-ie],[L/2,Se,L/2,Se-ie],[-L/2,Se-ie,L/2,Se-ie]];for(let[gt,St,dt,je]of tt){let Ct=Math.hypot(dt-gt,je-St),kt=Math.max(2,Math.ceil(Ct/.9)),xn=(dt-gt)/Ct,mi=(je-St)/Ct;for(let qt=0;qt<=kt;qt++){let yn=gt+(dt-gt)*qt/kt,gi=St+(je-St)*qt/kt,dn=new ue.Mesh(ki,Ks);dn.position.set(yn,.68,gi),dn.castShadow=!1,jn.add(dn)}for(let qt of[.55,1.09]){let yn=new ue.Mesh(new ue.BoxGeometry(Ct,.075,.075),Ks);yn.position.set((gt+dt)/2,qt,(St+je)/2),yn.rotation.y=-Math.atan2(je-St,dt-gt),jn.add(yn)}}let nt=new ue.Mesh(new ue.BoxGeometry(2.54,.12,.16),Ks);nt.name="\u041A\u0430\u043B\u0438\u0442\u043A\u0430 \xB7 \u0432\u044A\u0435\u0437\u0434 \u043D\u0430 \u0443\u0447\u0430\u0441\u0442\u043E\u043A",nt.position.set(0,.13,Se),jn.add(nt)};_n.visible=!1;let un=!1,A=null,q=0,ee=0,$=()=>{if(!A)return;let{width:L,depth:ie,houseX:Se,houseZ:tt,houseWidth:nt,houseLength:gt,fits:St}=A,dt=20.5,je=dt-ie,Ct=-L/2,kt=L/2,xn=(dt+je)/2,mi=(ei,Qs,Hl,Xf,qf)=>{ei.scale.set(Qs,1,Hl),ei.position.x=Xf,ei.position.z=qf};mi($n[0],L,.12,0,dt),mi($n[1],L,.12,0,je),mi($n[2],.12,ie,Ct,xn),mi($n[3],.22,ie,kt,xn),[[Ct,dt],[kt,dt],[Ct,je],[kt,je]].forEach(([ei,Qs],Hl)=>zi[Hl].position.set(ei,.6,Qs)),pi.scale.set(L,ie,1),pi.position.set(0,.018,xn),Ol(L,ie,dt);let qt=-L/2+Se+nt/2,yn=dt-tt,gi=qt,dn=yn-dt+1,ba=Math.hypot(gi,dn);kn.visible=ba>.4&&St,kn.scale.set(1.32,1,Math.max(.1,ba)),kn.rotation.y=Math.atan2(gi,dn),kn.position.set(qt/2,.045,(dt+yn+1)/2);let Hf=-L/2+Se+nt/2,Wf=dt-tt-4.63;if(Pn.position.set(un?Hf:0,0,un?Wf:0),_n.visible=un,un){n.far=600,n.updateProjectionMatrix(),i.fog&&(i.fog.near=170,i.fog.far=600),oe.root.visible=!1,We.visible=!1,xe.visible=!1;let ei=Bi.setType(ua?.value||"iron");if(ei.visible=!1,L!==q||ie!==ee){let Qs=Math.max(29,Math.max(L,ie)*.92);c={camera:new ue.Vector3(L*.59,Qs,xn+ie*.48),target:new ue.Vector3(0,1.1,xn)},q=L,ee=ie}a.maxDistance=Math.max(100,Math.max(L,ie)*1.9),zn.hidden=!0,zn.textContent="\u{1F3E0} "+L.toFixed(1)+" \xD7 "+ie.toFixed(1)+" \u043C \xB7 "+(L*ie/100).toLocaleString("ru-RU",{maximumFractionDigits:2})+" \u0441\u043E\u0442. \xB7 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0439\u0442\u0435 \u0434\u043E\u043C \u0438 \u0434\u0432\u0438\u0433\u0430\u0439\u0442\u0435"}$n.forEach(ei=>ei.material.color.set(St?"#3b6849":"#a85243"))};window.addEventListener("kaskad:plot-changed",L=>{A=L.detail,$()}),window.addEventListener("kaskad:site-preview",L=>{un=L.detail?.active===!0,un?$():(zn.hidden=!0,q=0,ee=0,n.far=170,n.updateProjectionMatrix(),i.fog&&(i.fog.near=50,i.fog.far=110),Pn.position.set(0,0,0),_n.visible=!1,oe.root.visible=!0,Bi.setType(ua?.value||"iron"),Ge())});let j=new ue.Raycaster,Re=new ue.Vector2,He=new ue.Plane(new ue.Vector3(0,1,0),0),Te=new ue.Vector3,Ue=!1,Xe=null,et=0,ct=0,Ve=L=>{let ie=t.domElement.getBoundingClientRect();return Re.set((L.clientX-ie.left)/ie.width*2-1,-((L.clientY-ie.top)/ie.height)*2+1),j.setFromCamera(Re,n),j.ray.intersectPlane(He,Te)?Te.clone():null};t.domElement.addEventListener("pointerdown",L=>{if(!un||!A||L.button!==0||(Ve(L),!j.intersectObject(Pn,!0).filter(tt=>tt.object.visible&&tt.object.isMesh).length))return;let Se=Ve(L);Se&&(Ue=!0,Xe=L.pointerId,et=Se.x-Pn.position.x,ct=Se.z-Pn.position.z,a.enabled=!1,c=null,t.domElement.setPointerCapture(L.pointerId),L.preventDefault(),L.stopImmediatePropagation())},!0),t.domElement.addEventListener("pointermove",L=>{if(!Ue||L.pointerId!==Xe||!A)return;L.preventDefault(),L.stopImmediatePropagation();let ie=Ve(L);if(!ie)return;let{width:Se,depth:tt,houseWidth:nt,houseLength:gt}=A,St=20.5,dt=ie.x-et,je=ie.z-ct,Ct=Js(dt+Se/2-nt/2,0,Math.max(0,Se-nt)),kt=Js(St-4.63-je,0,Math.max(0,tt-gt));window.dispatchEvent(new CustomEvent("kaskad:plot-move",{detail:{houseX:Ct,houseZ:kt}}))},!0);let ht=L=>{!Ue||L.pointerId!==Xe||(Ue=!1,Xe=null,a.enabled=!0,t.domElement.hasPointerCapture(L.pointerId)&&t.domElement.releasePointerCapture(L.pointerId),L.preventDefault(),L.stopImmediatePropagation())};t.domElement.addEventListener("pointerup",ht,!0),t.domElement.addEventListener("pointercancel",ht,!0);let It={bronze:"#6f6555",graphite:"#394348",white:"#f4eee2",wood:"#7b4b2d"},Mt={walnut:"#4a3a31",graphite:"#373d3e",oak:"#c29c6b",white:"#f4eee2"},yt={clear:"#a6bdc7",smoke:"#768a91",blue:"#8ebdcc"},zt=()=>{v.color.set(It[Tf?.value]||It.bronze),S.color.set(Mt[Ef?.value]||Mt.walnut)},Ge=()=>{if(un)return;let L=Rf?.value||"lush";xe.visible=Ll?.checked!==!1,We.visible=L!=="open",oe.setStyle(L==="open"?"none":Lf?.value||"family"),oe.setParking(Ih?.checked!==!1),oe.setPool(xe.visible),Bi.setVehicleAccess(Ih?.checked!==!1),oe.setGazebo(Df?.checked===!0);for(let ie=0;ie<We.children.length;ie++){let Se=We.children[ie];Se.visible=L==="lush"||L==="modern"&&ie%4!==0,Se.isInstancedMesh&&(Se.count=L==="modern"?Math.ceil(Se.userData.defaultCount*.72):Se.userData.defaultCount)}};[Tf,Ef].forEach(L=>L?.addEventListener("change",zt)),[Rf,Ll,Lf,Ih,Df].forEach(L=>L?.addEventListener("change",Ge)),Ll?.addEventListener("change",()=>{Ll.checked&&f("top")}),zt(),Ge();let Wt=i.children.filter(L=>L.isMesh||L.isGroup||L.isInstancedMesh),rt=null,Qn={hall:"\u041F\u0440\u0438\u0445\u043E\u0436\u0430\u044F",living:"\u0413\u043E\u0441\u0442\u0438\u043D\u0430\u044F",kitchen:"\u041A\u0443\u0445\u043D\u044F",bedroom:"\u0421\u043F\u0430\u043B\u044C\u043D\u044F",bath:"\u0421\u0430\u043D\u0443\u0437\u0435\u043B"},Lt="living",Gn=document.getElementById("sceneEnterInterior"),sn=document.getElementById("sceneRoomPicker");document.getElementById("builderQuickTabs")?.after(sn),sn.classList.add("builder-room-panel");let Vn=document.getElementById("sceneOverviewButton"),ft=document.querySelector(".scene-metric-badge"),bt=document.createElement("img");bt.className="scene-interior-photo",bt.hidden=!0,bt.alt="\u0424\u043E\u0442\u043E\u0433\u0440\u0430\u0444\u0438\u044F \u043F\u0440\u0438\u043C\u0435\u0440\u0430 \u0438\u043D\u0442\u0435\u0440\u044C\u0435\u0440\u0430, \u043D\u0435 \u043F\u043B\u0430\u043D\u0438\u0440\u043E\u0432\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u043E\u0433\u043E \u0434\u043E\u043C\u0430",Fi.append(bt);let Xt=document.createElement("span");Xt.className="scene-interior-photo-caption",Xt.textContent="\u0424\u043E\u0442\u043E-\u043F\u0440\u0438\u043C\u0435\u0440 \u043E\u0442\u0434\u0435\u043B\u043A\u0438",Xt.hidden=!0,Fi.append(Xt);let wt={hall:"room-13.jpg",living:"room-07.jpg",kitchen:"room-11.jpg",bedroom:"room-08.jpg",bath:"room-06.jpg"},At=!0,$t=document.createElement("button");$t.type="button",$t.className="scene-photo-toggle",$t.textContent="\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C 3D-\u044D\u0441\u043A\u0438\u0437",sn.append($t);let $s=()=>{o&&!At&&!rt&&(rt=xf(ue,i),rt.setRoom(Lt)),rt&&(rt.root.visible=o&&!At),bt.hidden=!o||!At,Xt.hidden=bt.hidden,$t.textContent=At?"\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0435\u0442\u044C 3D-\u044D\u0441\u043A\u0438\u0437":"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043A \u0444\u043E\u0442\u043E"};$t.addEventListener("click",()=>{At=!At,$s()});let Nh=new Map,Uh=null,Fh=null,Oh=a.minDistance,Bh=a.maxDistance,zh=a.maxPolarAngle,kh=[...document.querySelectorAll("#sceneRoomPicker [data-room]")],Gh=L=>{Lt=wt[L]?L:"living",rt&&rt.setRoom(Lt),bt.src=new URL("assets/ideas/"+wt[Lt],document.baseURI).href,$s(),kh.forEach(ie=>ie.setAttribute("aria-pressed",String(ie.dataset.room===Lt))),sn.querySelector(".scene-room-heading").textContent="\u0418\u043D\u0442\u0435\u0440\u044C\u0435\u0440 \xB7 "+Qn[Lt],n.position.set(1.05,1.92,2.62),a.target.set(0,1.12,-.55),a.update(),c=null},Of=()=>{if(o=!o,document.body.classList.toggle("kaskad-interior-active",o),o){Nh=new Map(Wt.map(L=>[L,L.visible]));for(let L of Wt)L.visible=!1;Uh=n.position.clone(),Fh=a.target.clone(),Oh=a.minDistance,Bh=a.maxDistance,zh=a.maxPolarAngle,a.minDistance=.95,a.maxDistance=3.55,a.maxPolarAngle=Math.PI*.72,a.autoRotate=!1,rt&&(rt.root.visible=!At),sn.hidden=!1,Vn.hidden=!0,ft.hidden=!0,p&&p.classList.add("is-used"),Gn.textContent="\u2190 \u0421\u043D\u0430\u0440\u0443\u0436\u0438",Gn.setAttribute("aria-pressed","true"),Gh("living")}else{rt&&(rt.root.visible=!1),bt.hidden=!0,Xt.hidden=!0;for(let[L,ie]of Nh)L.visible=ie;a.minDistance=Oh,a.maxDistance=Bh,a.maxPolarAngle=zh,n.position.copy(Uh),a.target.copy(Fh),a.update(),c=null,sn.hidden=!0,Vn.hidden=!1,ft.hidden=!1,Gn.textContent="\u0412\u043E\u0439\u0442\u0438 \u0432 \u0434\u043E\u043C",Gn.setAttribute("aria-pressed","false"),un?$():Ge()}};Gn?.addEventListener("click",Of),kh.forEach(L=>L.addEventListener("click",()=>Gh(L.dataset.room)));let ya={graphite:"#52595e",chocolate:"#594438",burgundy:"#873c48",green:"#426047",black:"#252b30",gray:"#898f93",terracotta:"#bd7254",sand:"#beb3a0"},Bl=null,js=(L=!1)=>{let ie=Ah?.value||"brick",Se=g[ie]||g.brick;!L&&Bl===ie&&u.map===Se||(Bl=ie,u.map=Se,u.needsUpdate=!0)},Vh=()=>{let L=Th?.value||"slate",ie=ya[Eh?.value]||ya.graphite;K.setType(L),K.setColor(ie),ke.setMaterial(),H.setRoof(is?.value||"hip",L),T.color.set(ie)},Hh=()=>{let L=ua?.value||"iron",ie=ya[Ch?.value]||ya.graphite;Bi.setType(L),Bi.setColor(ie)};Ah?.addEventListener("change",()=>js()),[Th,Eh].forEach(L=>L?.addEventListener("change",Vh)),[ua,Ch].forEach(L=>L?.addEventListener("change",Hh)),js(),Vh(),Hh();let Bf=new ue.TextureLoader,zl=!1,Wh=()=>{zl||(zl=!0,js(!0),t.domElement.style.visibility="visible",Il.style.display="none",ha.hidden=!0,Nl.textContent="3D \u0433\u043E\u0442\u043E\u0432 \xB7 \u0412\u0440\u0430\u0449\u0435\u043D\u0438\u0435 360\xB0",window.parent!==window&&window.parent.postMessage({type:"kaskad-builder-first-frame",version:1},location.origin))},Kt=(L,ie,Se,tt)=>{Bf.load(new URL("assets/3d/"+L+".webp",document.baseURI).href,nt=>{nt.colorSpace=ue.SRGBColorSpace,nt.wrapS=nt.wrapT=ue.RepeatWrapping,nt.repeat.set(ie,Se),nt.anisotropy=Math.min(e?8:4,t.capabilities.getMaxAnisotropy()),tt(nt),js(!0)},void 0,()=>{})},Xh=!1,qh=()=>{if(Xh)return;Xh=!0;let L=(ie,Se)=>{g[ie]=Se,Bl===ie&&js(!0)};Kt("red_brick_hd",3.25,2.15,ie=>{L("brick",ie),$e.map=ie,$e.needsUpdate=!0}),Kt("stone_tile_wall_hd",2,1.75,ie=>{L("stone",ie),Qe.map=ie,Qe.needsUpdate=!0}),Kt("rustic_brick_diff_hd",3.2,2.2,ie=>{L("tuscan",ie),ve.map=ie.clone(),ve.map.wrapS=ve.map.wrapT=ue.RepeatWrapping,ve.map.repeat.set(1.9,2.4),ve.map.needsUpdate=!0,ve.needsUpdate=!0,st.map=ie.clone(),st.map.wrapS=st.map.wrapT=ue.RepeatWrapping,st.map.repeat.set(12,2.9),st.map.needsUpdate=!0,st.needsUpdate=!0}),Kt("italian_brick_diff_hd",3.1,2.2,ie=>{L("gray",ie)}),Kt("roof_tile_neutral_hd",3,3,ie=>K.setTileMap(ie)),Kt("wood_planks_hd",1,1,ie=>{qe.map=ie,qe.needsUpdate=!0}),Kt("metal_roof_base_hd",2,2,ie=>K.setPhotoMap(ie)),Kt("concrete_pavement_02_2k",2,5,ie=>{R.map=ie,R.needsUpdate=!0})};Kt("concrete_pavement_02_1k",2,5,L=>{R.map=L,R.needsUpdate=!0}),Kt("leafy_grass_lush_v41",30,30,L=>{I.map=L,I.roughness=.99,I.needsUpdate=!0}),Kt("red_brick",3.25,2.15,L=>{g.brick=L,$e.map=L,$e.color.set("#ffffff"),$e.needsUpdate=!0}),Kt("stone_tile_wall",2,1.75,L=>{g.stone=L,Qe.map=L,Qe.color.set("#ffffff"),Qe.needsUpdate=!0}),Kt("roof_tile_neutral",3,3,L=>{K.setTileMap(L)}),Kt("wood_planks",1,1,L=>{qe.map=L,qe.color.set("#ffffff"),qe.needsUpdate=!0}),Kt("rustic_brick_diff",3.2,2.2,L=>{g.tuscan=L,ve.map=L.clone(),ve.map.wrapS=ve.map.wrapT=ue.RepeatWrapping,ve.map.repeat.set(1.9,2.4),ve.map.needsUpdate=!0,ve.needsUpdate=!0,st.map=L.clone(),st.map.wrapS=st.map.wrapT=ue.RepeatWrapping,st.map.repeat.set(12,2.9),st.map.needsUpdate=!0,st.needsUpdate=!0}),Kt("italian_brick_diff",3.1,2.2,L=>{g.gray=L}),Kt("metal_roof_base",2,2,L=>{K.setPhotoMap(L)}),zf();let Yh=new ue.TextureLoader;((L,ie)=>{Yh.load(new URL("assets/3d/"+L+".webp",document.baseURI).href,Se=>{Se.wrapS=Se.wrapT=ue.RepeatWrapping,Se.repeat.set(2.3,2),ie.normalMap=Se,ie.normalScale.set(.36,.36),ie.needsUpdate=!0},void 0,()=>{})})("rustic_brick_nor_gl",ve),Yh.load(new URL("assets/3d/metal_roof_nor_gl.webp",document.baseURI).href,L=>{L.wrapS=L.wrapT=ue.RepeatWrapping,L.repeat.set(2,2),K.setMetalNormal(L)},void 0,()=>{});let kf=()=>{new El().load(new URL("assets/3d/rooitou_park_1k.hdr",document.baseURI).href,L=>{L.mapping=ue.EquirectangularReflectionMapping,i.environment=L,i.environmentIntensity=.52},void 0,()=>{})};window.setTimeout(kf,e?550:1550);let Zh=new ue.HemisphereLight("#d8e9ff","#b2a28c",1.35);i.add(Zh);let Ut=new ue.DirectionalLight("#fff1d7",2.15);Ut.position.set(14,17,14),Ut.castShadow=!0,Ut.shadow.mapSize.set(e?1536:1024,e?1536:1024),Ut.shadow.camera.left=-28,Ut.shadow.camera.right=28,Ut.shadow.camera.top=28,Ut.shadow.camera.bottom=-28,Ut.shadow.camera.near=.5,Ut.shadow.camera.far=65,Ut.shadow.bias=-35e-5,i.add(Ut,Ut.target);let va=new ue.DirectionalLight("#eef3fa",.4);va.position.set(-19,14,-19),va.castShadow=!1,i.add(va),Ut.target.position.set(0,2.4,0);let kl=new ue.PointLight("#ffcc82",0,15,2);kl.position.set(0,4.1,5.6),i.add(kl),i.fog=new ue.Fog("#e7e9e4",50,110);let Jh=new ue.Color("#e0e9ea"),Gl=new ue.Color("#bb8d80"),Gf=new ue.Color("#151e2c"),rs=new ue.Color,Vf=L=>{let ie=Math.floor(L),Se=Math.round((L-ie)*60);return String(ie).padStart(2,"0")+":"+String(Se).padStart(2,"0")},Ma=()=>{let L=Number(bh.value);yy.textContent=Vf(L);let ie=Math.max(0,Math.sin((L-6)/16*Math.PI)),Se=Js((L-17)/5,0,1),tt=Js((L-15)/3,0,1)*(1-Js((L-20)/2,0,1));Ut.position.set(Math.cos((L-6)/16*Math.PI)*22,1.5+ie*27,Math.sin((L-6)/16*Math.PI)*22),Ut.intensity=Math.max(.06,2.15*ie),Ut.color.set("#fff6e9").lerp(new ue.Color("#efaa72"),tt*.75),Zh.intensity=.78+ie*.78,L<17?rs.copy(Jh):L<20?rs.copy(Jh).lerp(Gl,(L-17)/3):rs.copy(Gl).lerp(Gf,Js((L-20)/2,0,1)),L<8&&rs.lerp(Gl,(8-L)/2*.48),i.background=rs.clone(),i.fog.color.copy(rs),t.toneMappingExposure=L>20?.94:1.07+ie*.12,va.intensity=.15+ie*1.2,i.environment&&(i.environmentIntensity=.2+ie*.47);let nt=wh.checked,gt=nt?.15+Se*1.9:0;de.emissiveIntensity=gt,de.color.set(nt&&Se>.5?"#edc69b":yt[Cf?.value]||yt.clear),kl.intensity=nt?Se*26:0,Ut.shadow.needsUpdate=!0};bh.addEventListener("input",Ma),wh.addEventListener("change",Ma),Cf?.addEventListener("change",Ma),ss.addEventListener("click",()=>{a.autoRotate=!a.autoRotate,ss.setAttribute("aria-pressed",String(a.autoRotate)),a.autoRotate?ss.textContent="\u25A0 \u0421\u0442\u043E\u043F":ss.textContent="\u21BB \u0410\u0432\u0442\u043E\u043E\u0431\u0437\u043E\u0440"}),Oi?.addEventListener("change",()=>{let L=Oi.value,ie=L==="ultra"?3:L==="high"?2.4:L==="economy"?1:1.95,Se=window.devicePixelRatio||1,tt=e?L==="ultra"?Math.max(3,Se):L==="high"?Math.max(2.25,Se):Se:L==="ultra"?Se*1.5:L==="high"?Se*1.25:Se;t.setPixelRatio(Math.min(ie,tt)),(L==="high"||L==="ultra")&&qh();let nt=L==="ultra"?2048:L==="high"?1536:L==="economy"?512:1024;Ut.shadow.mapSize.set(nt,nt),Ut.shadow.map&&(Ut.shadow.map.dispose(),Ut.shadow.map=null),Vl(),t.render(i,n)}),Dl?.addEventListener("click",()=>{Oi.value=Oi.value==="high"?"balanced":"high",Oi.dispatchEvent(new Event("change",{bubbles:!0})),Dl.setAttribute("aria-pressed",String(Oi.value==="high")),Dl.textContent=Oi.value==="high"?"HD \u2713":"HD"}),e&&window.setTimeout(qh,1800),Ma();let Vl=()=>{let L=Math.max(200,Fi.clientWidth),ie=Math.max(250,Fi.clientHeight);t.setSize(L,ie,!1),n.aspect=L/ie,n.updateProjectionMatrix()};new ResizeObserver(Vl).observe(Fi),Vl();let Kh=0,$h=performance.now(),Sa=()=>{$h=performance.now()};a.addEventListener("start",Sa),a.addEventListener("change",Sa);for(let L of["input","change","click","pointerdown"])document.addEventListener(L,Sa,{capture:!0,passive:!0});document.addEventListener("visibilitychange",Sa,{passive:!0});let jh=!0;new IntersectionObserver(L=>{jh=L.some(ie=>ie.isIntersecting)},{threshold:.01}).observe(Fi);let Qh=L=>{if(requestAnimationFrame(Qh),document.hidden||!jh)return;let Se=!!(c||a.autoRotate||L-$h<1100)?31:165;if(!(L-Kh<Se)){if(Kh=L,c){let tt=My?1:.17;n.position.lerp(c.camera,tt),a.target.lerp(c.target,tt),n.position.distanceToSquared(c.camera)<.01&&a.target.distanceToSquared(c.target)<.01&&(n.position.copy(c.camera),a.target.copy(c.target),c=null)}a.update(),t.render(i,n),zl||Wh()}};requestAnimationFrame(()=>{try{a.update(),t.render(i,n),Wh()}catch{Il.style.display="block",ha.hidden=!0,Nl.textContent="\u0424\u043E\u0442\u043E \u0434\u043E\u043C\u0430 \xB7 3D \u043D\u0435\u0434\u043E\u0441\u0442\u0443\u043F\u043D\u043E"}requestAnimationFrame(Qh)})}catch{Il.style.display="block",ha.hidden=!0,ha.textContent="",Nl.textContent="\u0424\u043E\u0442\u043E \u0432\u043C\u0435\u0441\u0442\u043E 3D";for(let e of[bh,wh,Ah,Th,ua,Eh,Ch,da,wf,is,Oi,ss,Dl])e&&(e.disabled=!0)}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
