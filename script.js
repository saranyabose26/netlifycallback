var s=document.createElement("h1");
document.body.append(s);
var n=10
setTimeout(()=>{
            document.querySelector('h1').innerText=n;
            setTimeout(()=>{
                n=n-1;
                document.querySelector('h1').innerText=n;
                setTimeout(()=>{
                    n=n-1;
                    document.querySelector('h1').innerText=n;
                    setTimeout(()=>{
                        n=n-1;
                        document.querySelector('h1').innerText=n;
                        setTimeout(()=>{
                                n=n-1;
                                document.querySelector('h1').innerText=n;
                                setTimeout(()=>{
                                    n=n-1;
                                    document.querySelector('h1').innerText=n;
                                    setTimeout(()=>{
                                        n=n-1;
                                        document.querySelector('h1').innerText=n;
                                        setTimeout(()=>{
                                            n=n-1;
                                            document.querySelector('h1').innerText=n;
                                            setTimeout(()=>{
                                                n=n-1;
                                                document.querySelector('h1').innerText=n;
                                                setTimeout(()=>{
                                                    n=n-1;
                                                    document.querySelector('h1').innerText=n;
                                                    setTimeout(()=>{
                                                        document.querySelector('h1').innerText="Happy Independence Day";
                                                    },1000)
                                                },1000)//10
                                            },1000)//9
                                        },1000)//8
                                    },1000)//7
                                },1000)//6
                        },1000)//5
                    },1000)//4
                },1000)//3
            },1000);//2
},1000);//1

