
    var month = document.getElementById('month')
    var arr = ["January", "February", "March", "April", "May", "June"
        , "July", "August", "September", "October", "November", "December"]
    for (var i = 0; i < arr.length; i++) {
        var m = document.createElement('option')
        m.value = arr[i]
        m.innerText = arr[i]
        document.getElementById('month').appendChild(m)

    }
    var c = 0
    function san() {
        c++
        var month = document.getElementById('month').value

        var income = document.getElementById('income').value

        var ex = document.getElementById('expensive').value

        var saving = income - ex

        var div = document.createElement('div')

        var singsan = "san" + c


        div.id = singsan

        document.getElementById('out').appendChild(div)

        var mo = document.createElement('h2')

        mo.innerText = month

        document.getElementById(singsan).append(mo)



        var sinc = document.createElement('p')

        sinc.innerText = `Your income is Rs ${income}`

        document.getElementById(singsan).append(sinc)





        var exp = document.createElement('p')


        exp.innerText = `Your expensive is Rs ${ex}`

        document.getElementById(singsan).append(exp)


        var sav = document.createElement('p')




        sav.innerText = `Your savings is Rs ${saving}`

        document.getElementById(singsan).append(sav)



    }

