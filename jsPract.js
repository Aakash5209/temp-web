


// function mulBy2(arr){
//     return arr.map(num=>2*num)
// }

// console.log(mulBy2([1,2,3,4,5]))

// function getEven(arr){
//     return arr.filter(num=>num%2==0)
// }

// console.log(getEven([1,2,3,4,5]))

// function getSum(arr){
//     return arr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getSum([1,2,3,4,5]))



// function getEvenSum(arr){
//     let evenArr = arr.filter(num=>num%2==0)
//     return evenArr.reduce((acc,cur)=>acc+cur,0)
// }

// console.log(getEvenSum([1,2,3,4,5]))


// function getEvenSum(arr){
//    return arr.filter(num=>num%2==0).reduce((acc,cur)=>acc+cur,0)
  
// }

// console.log(getEvenSum([1,2,3,4,5]))

// function getSum(arr,key){
//     return arr.map(num=>num*num).filter(num=>num<key).reduce((acc,cur)=>acc+cur,0)

// }
// console.log(getSum([1,2,3,4,5],16))

// function getSum(arr,key){
//     return arr.reduce((acc,cur)=>{
//         let sqNum = cur*cur

//         if(sqNum<key){
//             acc = acc+ sqNum
//         }

//         return acc


//     })

// }
// console.log(getSum([1,2,3,4,5],16))



// function notCommon(arr1,arr2){
//     let res1 = arr1.filter(num=>!arr2.includes(num))
//     let res2 = arr2.filter(num=>!arr1.includes(num))
//     return [...res1,...res2]
// }

// console.log(notCommon([1,2,3,4,5],[4,5,6,7,8]))


// function getChunk(arr,key){
//     let res = []
//     for(let i=0;i<arr.length;i+=key){
//         res.push(arr.slice(i,i+key))
//     }
//     return res;

// }

// console.log(getChunk([1,2,3,4,5,6,7],3))


// function transformMap1(arr){
//   return  arr.map((itr)=>[itr,itr*itr])

// }

// function transformMap1(arr){
//   return  arr.map((itr)=>{
//     return[itr,itr*itr]
//     // let arr
//   })

// }

// console.log(transformMap1([1,2,3,4,5]))



// function transformMap2(arr){
//     // return arr.map(itr=>({
//     //     fname:itr,
//     //     len:itr.length
//     // }))
//     return arr.map(itr=>{

//        return { fname:itr,
//         len:itr.length}
//     })
// }

// console.log(transformMap2(['apple','banana','cherry']))


// function transformMap3(arr){
//     return arr.map(itr=>()=>itr*itr)
// }

// console.log(transformMap3([1,2,3,4,5]))
// let op1 = transformMap3([1,2,3,4,5])
// console.log('element call',op1[1]())
// console.log(op1.map(f=>f()))




// function productArr(arr){
//     return arr.map(pair=>pair.reduce((acc,cur)=>acc*cur,1))
// }
// console.log(productArr([[1,2,3],[3,4],[5,6]]))

// function flatArr(arr){
//     return arr.reduce((acc,subArr)=>acc.concat(subArr),[])
// }
// console.log(flatArr([[1,2],[3,4],[5,6]]))

// let arr = ['apple','banana','apple','apple','banana']

// function freqObject(arr){
//     let freq = {}
//     for(let i = 0;i<arr.length;i++){
//         let key = arr[i]
//         if(freq[key]){
//             freq[key]++
//         }else{
//             freq[key] = 1
//         }

//     }
//     return freq
// }

// console.log(freqObject(arr))

// function freqObject(arr){
//     return arr.reduce((acc,cur)=>{
//         if(acc[cur]){
//             acc[cur]++
//         }else{
//             acc[cur] = 1
//         }
//         return acc


//     },{})

// }

// console.log(freqObject(arr))

let arr = [
    { name:"aman",age:12,city:'delhi'},
    { name:"shivam",age:22,city:'delhi'},
    { name:"aman",age:32,city:'jaipur'},
    { name:"chaman",age:22,city:'rajasthan'},
    { name:"kamal",age:32,city:'jaipur'},
    { name:"chaman",age:22,city:'delhi'},
]

function groupBykey(arr,prop){
    return arr.reduce((acc,cur)=>{
        let key=cur[prop]
        if(!acc[key]){
            acc[key] = []
        }
        acc[key].push(cur)
        return acc
    },{})

}

console.log(groupBykey(arr,'city'))