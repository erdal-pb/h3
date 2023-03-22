"use strict";(self.webpackChunkh3_website=self.webpackChunkh3_website||[]).push([[5691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=n,y=d["".concat(l,".").concat(u)]||d[u]||p[u]||o;return r?a.createElement(y,i(i({ref:t},m),{},{components:r})):a.createElement(y,i({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={id:"coordsystems",title:"Coordinate systems",sidebar_label:"Coordinate systems",slug:"/core-library/coordsystems"},i=void 0,s={unversionedId:"core-library/coordsystems",id:"core-library/coordsystems",title:"Coordinate systems",description:"The H3 Core Library uses the following coordinate systems internally.",source:"@site/docs/core-library/coordsystems.md",sourceDirName:"core-library",slug:"/core-library/coordsystems",permalink:"/docs/core-library/coordsystems",draft:!1,editUrl:"https://github.com/uber/h3/edit/master/website/docs/core-library/coordsystems.md",tags:[],version:"current",frontMatter:{id:"coordsystems",title:"Coordinate systems",sidebar_label:"Coordinate systems",slug:"/core-library/coordsystems"},sidebar:"someSidebar",previous:{title:"Overview",permalink:"/docs/core-library/overview"},next:{title:"Creating bindings",permalink:"/docs/core-library/creating-bindings"}},l={},c=[{value:"IJK Coordinates",id:"ijk-coordinates",level:2},{value:"FaceIJK Coordinates",id:"faceijk-coordinates",level:2},{value:"Hex2d Coordinates",id:"hex2d-coordinates",level:2},{value:"Local IJ Coordinates",id:"local-ij-coordinates",level:2}],m={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The H3 Core Library uses the following coordinate systems internally."),(0,n.kt)("h2",{id:"ijk-coordinates"},"IJK Coordinates"),(0,n.kt)("p",null,"Discrete hexagon planar grid systems naturally have 3 coordinate axes spaced 120","\xb0"," apart. We refer to such a system as an ",(0,n.kt)("em",{parentName:"p"},"ijk coordinate system"),", for the three coordinate axes ",(0,n.kt)("em",{parentName:"p"},"i"),", ",(0,n.kt)("em",{parentName:"p"},"j"),", and ",(0,n.kt)("em",{parentName:"p"},"k"),". A single ",(0,n.kt)("em",{parentName:"p"},"ijk")," coordinate triplet is represented in the H3 Core Library using the structure type ",(0,n.kt)("inlineCode",{parentName:"p"},"CoordIJK"),"."),(0,n.kt)("p",null,"Using an ",(0,n.kt)("em",{parentName:"p"},"ijk")," coordinate system to address hexagon grid cells provides multiple valid addresses for each cell. ",(0,n.kt)("em",{parentName:"p"},"Normalizing")," an ",(0,n.kt)("em",{parentName:"p"},"ijk")," address (function ",(0,n.kt)("inlineCode",{parentName:"p"},"_ijkNormalize"),") creates a unique address consisting of the minimal positive ",(0,n.kt)("em",{parentName:"p"},"ijk")," components; this always results in at most two non-zero components."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{height:"300",src:"/images/ijkp.png"})),(0,n.kt)("h2",{id:"faceijk-coordinates"},"FaceIJK Coordinates"),(0,n.kt)("p",null,"The H3 Core Library centers an ",(0,n.kt)("em",{parentName:"p"},"ijk")," coordinate system on each face of the icosahedron; the combination of a face number and ",(0,n.kt)("em",{parentName:"p"},"ijk")," coordinates on that face's coordinate system is represented using the structure type ",(0,n.kt)("inlineCode",{parentName:"p"},"FaceIJK"),"."),(0,n.kt)("p",null,"Each grid resolution is rotated ~19.1","\xb0"," relative to the next coarser resolution. The rotation alternates between counterclockwise and clockwise at each successive resolution, so that each resolution will have one of two possible orientations: ",(0,n.kt)("em",{parentName:"p"},"Class II")," or ",(0,n.kt)("em",{parentName:"p"},"Class III")," (using a terminology coined by R. Buckminster Fuller). The base cells, which make up resolution 0, are ",(0,n.kt)("em",{parentName:"p"},"Class II"),"."),(0,n.kt)("div",{align:"center"},(0,n.kt)("img",{height:"300",src:"/images/classII.III.png"})),(0,n.kt)("h2",{id:"hex2d-coordinates"},"Hex2d Coordinates"),(0,n.kt)("p",null,"A ",(0,n.kt)("em",{parentName:"p"},"Hex2d")," coordinate system is a cartesian coordinate system associated with a specific ",(0,n.kt)("em",{parentName:"p"},"ijk")," coordinate system, where:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the origin of the ",(0,n.kt)("em",{parentName:"li"},"Hex2d")," system is centered on the origin cell of the ",(0,n.kt)("em",{parentName:"li"},"ijk")," system, "),(0,n.kt)("li",{parentName:"ul"},"the positive ",(0,n.kt)("em",{parentName:"li"},"x"),"-axis of the ",(0,n.kt)("em",{parentName:"li"},"Hex2d")," system is aligned with the ",(0,n.kt)("em",{parentName:"li"},"i"),"-axis of the ",(0,n.kt)("em",{parentName:"li"},"ijk")," system, and"),(0,n.kt)("li",{parentName:"ul"},"1.0 unit distance in the ",(0,n.kt)("em",{parentName:"li"},"Hex2d")," system is the distance between adjacent cell centers in the ",(0,n.kt)("em",{parentName:"li"},"ijk")," coordinate system.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Hex2d")," coordinates are represented using the structure type ",(0,n.kt)("inlineCode",{parentName:"p"},"Vec2d"),"."),(0,n.kt)("h2",{id:"local-ij-coordinates"},"Local IJ Coordinates"),(0,n.kt)("p",null,"Algorithms working with hexagons may want to refer to grid coordinates that are not interrupted by base cells or faces. These coordinates have 2 coordinate axes spaced 120","\xb0"," apart, with the coordinates anchored by an ",(0,n.kt)("em",{parentName:"p"},"origin")," H3 index."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"local coordinates are only comparable when they have the same ",(0,n.kt)("em",{parentName:"li"},"origin")," index."),(0,n.kt)("li",{parentName:"ul"},"local coordinates are only valid near the ",(0,n.kt)("em",{parentName:"li"},"origin"),". Pratically, this is within the same base cell or a neighboring base cell, except for pentagons."),(0,n.kt)("li",{parentName:"ul"},"the coordinate space may have deleted or warped regions due to pentagon distortion."),(0,n.kt)("li",{parentName:"ul"},"there may be multiple coordinates for the same index, with the same ",(0,n.kt)("em",{parentName:"li"},"origin"),"."),(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("em",{parentName:"li"},"origin")," may not be at ",(0,n.kt)("inlineCode",{parentName:"li"},"(0, 0)")," in the local coordinate space.")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Local IJ")," coordinates are represented using the structure type ",(0,n.kt)("inlineCode",{parentName:"p"},"CoordIJ")," and an associated ",(0,n.kt)("em",{parentName:"p"},"origin")," ",(0,n.kt)("inlineCode",{parentName:"p"},"H3Index"),"."))}p.isMDXComponent=!0}}]);