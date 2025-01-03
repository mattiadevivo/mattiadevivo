"use strict";(self.webpackChunkmattiadevivo_dev=self.webpackChunkmattiadevivo_dev||[]).push([[819],{8576:function(e,t,n){n.r(t),n.d(t,{Head:function(){return v},default:function(){return E}});var l=n(1151),a=n(7294);function r(e){const t=Object.assign({h2:"h2",p:"p",em:"em",a:"a",code:"code",pre:"pre"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h2,null,"My journey"),"\n",a.createElement(t.p,null,"I used Gatsby the first time in 2020 for building my portfolio website, I used\nit as main project to learn React and other many things (like DNS\nconfiguration, Netlify, CI/CD, Bootstrap 4) and to practise JavaScript a\nlittle bit."),"\n",a.createElement(t.p,null,"I was in the last semester of my Bachelor's Degree in Computer Science doing great courses such as ",a.createElement(t.em,null,"System Administration, Full-Stack Software Development with MERN stack")," and Covid-19 gave me a lot of time for practising my web development\nknowledges during that period, meanwhile I was also working on mobile development for my ",a.createElement(t.a,{href:"https://github.com/mattiadevivo/thermo-widget"},"thesis project"),"."),"\n",a.createElement(t.p,null,"I became really passionate about Node.js, for the first time I was feeling that the development environment was my friend despite my previous academic experience with Java, C and PHP.\nIn October 2020 I got my BCs while working as Freelance Developer using Flutter, and Express.js for backend, getting in touch with other devs and client companies helped me to understand real development processes."),"\n",a.createElement(t.p,null,"In May 2021 I got a good job offer as DevOps Engineer for the company where I did my BCs internship and I started working on cool microservices projects using cuttin-edge technologies like ",a.createElement(t.em,null,"TypeScript and Go"),".\nOnce I started using TypeScript over JavaScript I soon realized its potentiality and started writing all my projects in TS."),"\n",a.createElement(t.p,null,"During 2022 I got the possibility to work on a React + TS frontend project at work using MUI as a UI library, after some weeks I decided: ",a.createElement(t.em,null,"despite the small amount of free time I want to rewrite my website from JS to TS (Gatsby was 3 major version ahead the one I used)"),".\nI know, you're thinking ",a.createElement(t.code,null,"what a long and boring introduction"),"! But this is my first post and I want to make you know me a little bit :), now we can start with the interesting things!"),"\n",a.createElement(t.h2,null,"Gatsby + TypeScript"),"\n",a.createElement(t.p,null,"Let's setup a Gatsby project using TypeScript."),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"# install Gatsby cli\nnpm install -g gatsby-cli\n# create Gatsby project with TS\nnpm init gatsby -ts\n")),"\n",a.createElement(t.p,null,"This is enough to have a Gatsby + TS working project, but let's setup other interesting things!"),"\n",a.createElement(t.h2,null,"ESlint + Prettier"),"\n",a.createElement(t.p,null,"ESlint and Prettier are ",a.createElement(t.em,null,"standard-de-facto")," tools for Node.js developers, especially when you have big teams is useful to have\nall the members following some kind of code standards and formatting."),"\n",a.createElement(t.p,null,"Generate ESlint config by using:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"npm init @eslint/config\n")),"\n",a.createElement(t.p,null,"Install Prettier:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"npm install --save-dev prettier\n")),"\n",a.createElement(t.p,null,"Install eslint-config-prettier:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-bash"},"npm install --save-dev eslint-config-prettier\n")),"\n",a.createElement(t.p,null,"Then add ",a.createElement(t.code,null,'"prettier"'),' to the "extends" array in your ',a.createElement(t.code,null,".eslintrc.*")," file. Make sure to put it last, so it gets the chance to override other configs:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json"},'{\n  "extends": ["some-other-config-you-use", "prettier"]\n}\n')),"\n",a.createElement(t.h2,null,"Use autogenerated GraphQL Query Types"),"\n",a.createElement(t.p,null,"Ensure GraphQL types are generated in ",a.createElement(t.code,null,"gatsby-config.ts"),":"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-ts"},"module.exports = {\n  graphqlTypegen: true,\n};\n")),"\n",a.createElement(t.p,null,"This will generate ",a.createElement(t.code,null,"gatsby-types.d.ts")," in ",a.createElement(t.code,null,"src")," folder every time ",a.createElement(t.code,null,"npm run develop")," is run."),"\n",a.createElement(t.p,null,"Include ",a.createElement(t.code,null,"gatsby-types.d.ts")," in the list of patterns to be checked in ",a.createElement(t.code,null,"tsconfig.json")," file:"),"\n",a.createElement(t.pre,null,a.createElement(t.code,{className:"language-json"},'  "include": [\n    "./src/**/*",\n    "./gatsby-node.ts",\n    "./gatsby-config.ts",\n    "./plugins/**/*",\n    "./src/gatsby-types.d.ts"\n  ]\n')),"\n",a.createElement(t.p,null,"That's all!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(r,e)):r(e)},i=n(4001),s=n(8630),c=n(5401),m=n(1647),d=n(3483),u=n(8720),p=n(3723),g=n(5505);const h=e=>{var t,n,r,o,i,h,v,E,f,y,b,w,I,k,S;let{data:j,children:x}=e;return a.createElement(s.Z,null,a.createElement(c.Z,{sx:{marginY:2}},a.createElement(m.Z,{variant:"h4",fontWeight:"bold",marginBottom:2},null===(t=j.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title),a.createElement(m.Z,null,null===(r=j.mdx)||void 0===r||null===(o=r.frontmatter)||void 0===o?void 0:o.author," - ",null===(i=j.mdx)||void 0===i||null===(h=i.frontmatter)||void 0===h?void 0:h.date),null===(v=j.mdx)||void 0===v||null===(E=v.frontmatter)||void 0===E||null===(f=E.keywords)||void 0===f?void 0:f.map(((e,t)=>a.createElement(d.Z,{key:e,variant:"outlined",color:"secondary",size:"small",label:"#"+e,sx:{marginInlineStart:0==t?0:1}}))),a.createElement("br",null),a.createElement(u.Z,{marginY:2},a.createElement(p.G,{image:null===(y=j.mdx)||void 0===y||null===(b=y.frontmatter)||void 0===b||null===(w=b.featuredImage)||void 0===w||null===(I=w.childImageSharp)||void 0===I?void 0:I.gatsbyImageData,alt:(null===(k=j.mdx)||void 0===k||null===(S=k.frontmatter)||void 0===S?void 0:S.title)+" photo"})),a.createElement(l.Zo,{components:{pre:g.Z}},x)))},v=e=>{var t,n,l,r,o,s,c,m,d,u,p,g;let{data:h}=e;return a.createElement(i.Z,{title:(null===(t=h.mdx)||void 0===t||null===(n=t.frontmatter)||void 0===n?void 0:n.title)+" | Mattia De Vivo",description:null!==(l=null===(r=h.mdx)||void 0===r||null===(o=r.frontmatter)||void 0===o?void 0:o.description)&&void 0!==l?l:"",url:"blog/"+(null===(s=h.mdx)||void 0===s||null===(c=s.frontmatter)||void 0===c?void 0:c.slug),keywords:null===(m=h.mdx)||void 0===m||null===(d=m.frontmatter)||void 0===d?void 0:d.keywords,image:null===(u=h.mdx)||void 0===u||null===(p=u.frontmatter)||void 0===p||null===(g=p.featuredImage)||void 0===g?void 0:g.absolutePath})};function E(e){return a.createElement(h,e,a.createElement(o,e))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-frontmatter-slug-tsx-content-file-path-home-runner-work-mattiadevivo-mattiadevivo-src-pages-blog-building-with-gatsby-mdx-273dbb9b4b0e995e28bc.js.map