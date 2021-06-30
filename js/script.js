
let player1
let player2 
let totalHits = 0
let currentHits = 0

$(".start").on("click", function (e) {
    player1 = e.target.value
    if (e.target.value === "player1_start") {
        $('.player').html(`<span> Current player: 1 </span>`)
        $('.item').on("click", function () {
            currentHits+=1
            $('.hits').html(`<span> Hits: ${currentHits} </span>`)
            totalHits = currentHits
            $('.win-or-lose').html(`<span> TotalHits: ${totalHits} </span>`)
        }) 
    }
    $("#stopwatch").timer({
        duration: "30s",
        callback: function name() {
            alert("hit player2_start to begin for player 2")
            $("#stopwatch").timer('reset')
            $("#stopwatch").timer('pause')
            $('#stopwatch').timer('remove')
            currentHits = 0
            $('.hits').html(`<span> Hits: ${currentHits} </span>`)
            $(".start").off("click")
            $(".item").off("click")
    }
    })
})

$(".player2").on("click", function (e) {
    player2 = e.target.value
    if (e.target.value === "player2_start") {
        $('.player').html(`<span> Current player: 2 </span>`)
        $('.item').on("click", function () {
            currentHits+=1
            $('.hits').html(`<span> Hits: ${currentHits}</span>`)
        })
    }
    $("#stopwatch").timer({
        duration: "30s",
        callback: function name() {
           $("#stopwatch").timer('reset')
            $("#stopwatch").timer('pause')
            $('#stopwatch').timer('remove')
            if (currentHits > totalHits) {
                alert(`player 2 wins by ${currentHits} and player 1 had ${totalHits}`)
                $(".player2").off("click")
            } else if (currentHits < totalHits) {
                alert(`player 1 wins by ${totalHits} and player 2 had ${currentHits}`)
                $(".player2").off("click")
            } else {
                alert("it is a tie")
                $(".player2").off("click")
            }
            totalHits = 0
            currentHits = 0
            $('.win-or-lose').html(`<span> TotalHits: ${totalHits} </span>`)
            $('.hits').html(`<span> Hits: ${currentHits} </span>`)
            alert("time up wait for the player to hit reset and player1 hit player1_start")
        $(".item").off("click")
    }
    })
})


$(".reset1").on("click", function () {
    $("#stopwatch").timer({
        duration: "0.00000000000000000000000000001s",
        callback: function () {
           $("#stopwatch").timer('reset')
            $("#stopwatch").timer('pause')
            $('#stopwatch').timer('remove')
            totalHits = 0
            currentHits = 0
            $('.win-or-lose').html(`<span> TotalHits: ${totalHits} </span>`)
            $('.hits').html(`<span> Hits: ${currentHits} </span>`)
            $('.player').html(`<span> Current player: 1 </span>`)
            $(".reset1").off("click")
            $(".item").off("click")
            location.reload()
    }
    })
})
