/*
    Client -> Server -> DataBase -> Server -> Client
*/
// callBack hell
// console.log('Client: Hamma userlar ro`yhati kerak.');
// console.log('...');

// setTimeout(() => {
//     console.log('Server: Data Bazadan zapros so`radim.');
//     console.log('...');

//     setTimeout(() => {
//         console.log('DataBase: Hamma userlarni formot qilayapman.');
//         console.log('...');

//         setTimeout(() => {
//             console.log('Server: Hamma userlarni obrabotka qilayapman.');
//             console.log('...');

//             setTimeout(() => {
//                 console.log('Client: Hamma ma`lumotlarni oldim.');
//             }, 500);
//         }, 500);
//     }, 500);
// }, 1000);

// -------------------------------- Promise // funksiya / global
// console.log('Client: Hamma userlar ro`yhati kerak.');
// console.log('...');

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Server: Data Bazadan zapros so`radim.');
//         console.log('...');

//         // reject('Server: Sizda internet bilan muammo bor')
//         resolve()
//     }, 3000);
// })

// promise.then(() => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('DataBase: Hamma userlarni formot qilayapman.');
//             console.log('...');
//             let users = [
//                 { name: 'Tom', uid: 'id1' },
//                 { name: 'Jack', uid: 'id2' },
//             ]
//             reject('DataBase: Siz so`ragan userlar topilmadi.')
//             resolve(users)
//         }, 2500);
//     })
// }).then((DBUsers) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Server: Hamma userlarni obrabotka qilayapman.', DBUsers);
//             console.log('...');
//             let resolvedUsers = DBUsers.map((val) => {
//                 return {
//                     firstName: val.name,
//                     id: val.uid,
//                     stampTime: new Date().toLocaleDateString()
//                 }
//             })
//             // reject('Server: Ma`lumotlar saralashga ulgurmadim')
//             resolve(resolvedUsers)
//         }, 2000);
//     })
// }).then((users) => {
//     setTimeout(() => {
//         console.log('Client: Hamma ma`lumotlarni oldim.', users);
//     }, 1500);
// }).catch((err) => {
//     console.log(err);
// }).finally(() => {
//     setTimeout(() => {
//         console.log('Finally');
//     }, 2000);
// })

// function sleep(time) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve()
//         }, time);
//     })
// }

// sleep(1500)
//     .then(() => {
//         console.log(1500);
//     })

// sleep(3000).then(() => {
//     console.log(3000);
// })

// let i = 1
// setInterval(() => {
//     console.log(i);
//     i++
// }, 1000);

// // all oxirgi promise ishlagancha kutib turadi
// Promise.all([sleep(1500), sleep(3000), sleep(4000)]).then(() => {
//     console.log('All');
// })

// Promise.race([sleep(1500), sleep(3000), sleep(700)]).then(() => {
//     console.log('Race');
// })

// Try Catch
try {
    function sleep(ts) {
        console.log(ts);
    }
    throw 'Xato bor'
} catch (error) {
    console.log(error);
}