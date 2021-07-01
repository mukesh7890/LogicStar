//Test//
// for (let i = 0; i <= 5; i++) {
//     document.write(i);
// }

                //Star Print//
                
//Simple star line
    // for (let i = 1; i <= 5; i++) {
    //     document.write("*");
    // }

//Portrait Star line 
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 1; j++){
    //         document.write("*");
    //     }
    //     document.write("<br>");
    // }

//Pattern 1
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 5; j++) {
    //         if (i >= j) {
    //             document.write("*");
    //         }else{
    //             document.write(" ");
    //         }
    //     }
    //     document.write("<br>");
    // }

//Pattern 2
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 5; j++) {
    //         if (i <= j) {
    //             document.write("*");
    //         }else{
    //             document.write(" ");
    //         }
    //     }
    //     document.write("<br>");
    // }

//Pattern 3
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 10; j++) {
    //         if(i==1 | i==5){
    //             document.write("*");
    //         }else{
    //             if(1<i<5){
    //                 if(j==1 | j==10 ){
    //                     document.write("*");
    //                 }else{
    //                     document.write("_");
    //                 }
    //             }
    //         }
    //     }
    //     document.write("<br>");
    // }

//Pattern 4
    // for (let i = 1; i <= 5; i++) {
    //     for (let j = 1; j <= 5; j++) {
    //         if (i >= j) {
    //             document.write("*");
    //         }else{
    //             document.write(" ");
    //         }
    //     }
    //     document.write("<br>");
    // }

//Pattern  5  not complete
    for (let i = 1; i <= 5; i++) {
        for (let j = 5; j >= 1; j--) {
            if (i+1<=j-i && j) {
                document.write("*");
            }else{
                document.write("*");
            }
        }
        document.write("<br>");
    }

   