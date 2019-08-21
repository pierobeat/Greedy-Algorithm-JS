    amount = prompt ('Masukkan nilai uang yang akan ditukar')
    coin = [20000, 10000, 5000, 2000, 1000, 500, 100]

    let a=0;
    for (i = 0; i < coin.length; i++)
    {
      while (amount > 0) {
        const c = amount
        console.log(a)
        total_coin = Math.floor(amount / coin[i])
        if (c == 2000){
          let cc = amount/1000;
          alert(cc + " x " + "Rp. 1000")
          console.log(c)
          exit()
        }else{
          if (a < 4){
            if (amount == coin[i]){
              let cc = amount/1000;
                alert(cc + " x " + "Rp. 1000")
              }else{
                if(total_coin !== 0) {
                  alert(total_coin + " x " + "Rp. "+coin[i])
                }
              }
            }else{
              if(total_coin !== 0) {
                alert(total_coin + " x " + "Rp. "+coin[i])
              }
            }
        }

          amount = amount - total_coin * coin[i]
          ++i
        }
    }