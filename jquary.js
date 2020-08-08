$(document).ready(function(){
// mouse event
    $('#jq').css('border','2px solid black');

    $('.pra').click(function(){
        $(this).css('color', 'black');
    });

    $('.pra').dblclick(function(){
        var a = $(this).html();
        console.log(a);
    });

    $('.pra').mouseleave(function(){
        $(this).css('color','royalblue');
        
    });
// keybord event
    $('body').keypress(function(){
        $(this).css('background-color', 'pink')
    });

    $('body').keyup(function(){
        $(this).css('background-color', '')
    });

//form event
    $('#fname, #lname, #city').focus(function(){
        $(this).css('background-color', 'lime');    
    });

    $('#fname, #lname').select(function(){
        $(this).css('background-color', 'yellow');    
    });


    $('#fname, #lname, #city').blur(function(){
        $(this).css('background-color', '');    
    });

    $('#city').change(function(){
        $(this).css('background-color', 'pink');
        var b = $(this).val();
        $('#jq').html(b);    
    });

    $('#form').submit(function(){
        alert('Form submited');    
    });

//window event
    $(window).scroll(function(){
        console.log('you are scrolling');
    });

    $(window).resize(function(){
        console.log('you are re-size');
    });

//get meyhod
    var c = $('#jq').text(); // .html() .text() .attr('xyz') .val
    console.log(c);
    
    $('#form').submit(function(){
        var name = $('#fname').val();
        var lname = $('#lname').val();
        var cityss = $('#city').val();
        alert("Name " + name + " " + lname + " From " + cityss);    
    });

//set method
    $('#jq h1').click(function(){
        $(this).text("sachin");
        $('.pra').html("<i>kahrana</i.");
        $('#form').attr('id', 'fourm');
    });

// class method
    $('#adclass').click(function(){
        $('#js p').addClass('pras');
        
    });

    $('#reclass').click(function(){
        $('#js p').removeClass();
        
    });

    $('#toclass').click(function(){
        $('#js p').toggleClass('pra');
        
    });

//css method
    $('#js p').click(function(){
        $(this).css({
            'color': 'red',
            'font-size': '20px',
            'border': '2px solid pink'
        });
    });

// on /off method
   /* $('#js p').on("mouseover mouseout", function(){
       $(this).toggleClass('pras');
    });*/

    $('#box').on({
        

        "mouseover" : function(){
            $(this).css('background-color', 'pink')},
        

        "mouseout" : function(){
            $(this).css('background-color', 'yellow')},
        
    });

    $('#box').click(function(){
        $(this).off("mouseover mouseout")
    });

//appand("text tag")/prepand
// $(this).appand("<h1> Hello Appand</h>");
// $(this).prepand("<h1> Hello Prepand</h>");


//after("") /befor("")
// $(this).after("<h1>Afer this</h1>");
// $(this).befor("<h1>Befor this</h1>");


//remove("") empty("")
//$(this).empty(""); empty inside taget
//$(this).remove(""); remove the targe


//appendTo("") prependTo("")
//$(<h1>append to</h1>).appendTo(this);
//$(<h1>prepend to</h1>).prependTo(this);


//clon mathod
    $('#box h2').click(function(){
        $('#jq h1').clone().prependTo('#box');
       
    });
        

// replaceWith("") replaceAll("") 
    $('#box p').click(function(){
       // $(this).replaceWith("sachin"); // replace all elements
       $("<p>this<p>").replaceAll("#box p");  //replace only tag
    });


//wrap(), unwrapp()
    $('#adclass').click(function(){
       //$('#box p').wrap('<div class="pra"></div>');

    });

    $('#reclass').click(function(){
        //$('#box p').unwrap('');
        
    });


//wrapAll(),   wrapInner()
    $('#adclass').click(function(){
        $('#box p').wrapAll('<div class="pra"></div>');

    });

    $('#reclass').click(function(){
        $('#box p').wrapInner('<i></i>');
        
    });


//Height(), Width() 8typpe
    $('#adclass').click(function(){
        console.log($('#jq').height());
        console.log($('#jq').innerHeight());
        console.log($('#jq').outerHeight());
        console.log($('#jq').outerHeight(true));
    });


//position(), offset()
    $('#adclass').click(function(){
        console.log($('#box p').position());
    });

    $('#adclass').click(function(){
        console.log($('#box p').offset({}));
    });// watch video


//scrollTop, scrollLeft 

//hasClass()
//hide(), show(), toggel

//fadein(1000, , callbank), fadeout(), 
//fadeTo(100, opecity, function)

//slide method  (up() doWn() toggle())

//animate({params},speed,callback)
 
//stop method

// method Chainig
 //$(selector).css().click(function(){}).slidUp();


//Ancestor method;
// perent();
// perents(#target);
// perentsUntil(#target tk)
// offsetPerent(select fist position perent)
// closest('value to target')

//Descendants method
//children(find own children'.test')
//find("class id in any dom tre")


//siblings method
/* siblings()   all siblings with sing also
    nest() nest sibs
    nextAll() next all sibs
    nextUntil() jaha tk id nhi miegi
    prev() pichle sibs
    prevAll() pichle all sibs
    prevUntil() jaha tk id nhi milegi
*/

//filter mehod
    /*  first() select first in dom tree
        last() slect last in dom tree
        eq()    define number of target index value
        filter() find class id
        not() note reverse select not 1 mens select all ot of one
        slice(index valur 1 to 3) 
    */    

//has() selsect styled by tegs in childern
//is() true flase
// each()
/*****************function name is event ****************/
//pageX(get x) pageY( get y)

// type() find event trigered

//witch() find what type of mouse is down left , right, center weel,

//target()
//preventDefault() 
//isDefaultPrevented()
//stoppropregation()
//
//data
//










});
