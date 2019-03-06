
cards = [];
var currentScore = 0;
var totalScore=0;
var roundNumber=0;

dealBlind();
disableWinBtn();
disablePlusBtn()




function createDeck(){ 
    var average = (Math.round(totalScore/roundNumber)*10)/100;
  
    if (cards.length===0){
        randomizeCards() 
        
    }
    else { 
        while(cards.length>0){
            cards.pop()} 
        
        randomizeCards() 
        dealBlindAgain()
        document.getElementById('average').innerText =  average;
      


        }
       
       document.getElementById('dealBtn').disabled=true;
       row1.handSet();
       row2.handSet();  
       row3.handSet(); 
       row4.handSet();  

       row1.countPoints();
       row1.points=row1.countPoints();
       row2.countPoints();
       row2.points = row2.countPoints()
       row3.countPoints();
       row3.points = row3.countPoints()
       row4.countPoints();
       row4.points = row4.countPoints()

       row1.clicks=0,
       row2.clicks=0;
       row3.clicks=0;
       row4.clicks=0;
       currentScore=28;   
       
       
       deal(0)
       enableWinBtn()
       enablePlusBtn()
       clearWiner()

    }
    
    
    var row1 = {
        handSet: function() {this.hand = cards.splice(0,7)},
        name: 1,
        countPoints: function() {
            
                hand=this.hand
                
                var points = 0
                var countPair = 0;
                var countThree = 0;
                poker = 0;
                color = 0; 
                strit = 0; 
                pair = 0;
                three = 0;
                full = 0;
                four = 0;
                    
            
                var num2=0;
                var num3=0;
                var num4=0;
                var num5=0;
                var num6=0;
                var num7=0;
                var num8=0;
                var num9=0;
                var num10=0;
                var numJ=0;
                var numQ=0;
                var numK=0;
                var numA=0;
            
            
                for (i=0; i<7; i++) { //pętla sprawdzająca wynik, liczy, sumuje ilość kart o danej wartości
                    var x = hand[i]
                    switch(true) {
                        case (x == 1 || x == 14 || x == 27 || x == 40 ): 
                        num2=num2+1;
                        break;
                        case (x == 2 || x == 15 || x == 28 || x == 41 ): 
                        num3=num3+1;
                        break;
                        case (x == 3 || x == 16 || x == 29 || x == 42 ): 
                        num4=num4+1;
                        break;
                        case (x == 4 || x == 17 || x == 30 || x == 43 ): 
                        num5=num5+1;
                        break;
                        case (x == 5 || x == 18 || x == 31 || x == 44 ): 
                        num6=num6+1;
                        break;
                        case (x == 6 || x == 19 || x == 32 || x == 45 ): 
                        num7=num7+1;
                        break;
                        case (x == 7 || x == 20 || x == 33 || x == 46 ): 
                        num8=num8+1;
                        break;
                        case (x == 8 || x == 21 || x == 34 || x == 47 ): 
                        num9=num9+1;
                        break;
                        case (x == 9 || x == 22 || x == 35 || x == 48 ): 
                        num10=num10+1;
                        break;
                        case (x == 10 || x == 23 || x == 36 || x == 49 ): 
                        numJ=numJ+1;
                        break;
                        case (x == 11 || x == 24 || x == 37 || x == 50 ): 
                        numQ=numQ+1;
                        break;
                        case (x == 12 || x == 25 || x == 38 || x == 51 ): 
                        numK=numK+1;
                        break;
                        case (x == 13 || x == 26 || x == 39 || x == 52 ): 
                        numA=numA+1;
                        break;
                        default:
                        num2=200
                        num3=300
                        break;
                    }
                }
            
                handValue = [num2,num3,num4,num5,num6,num7,num8,num9,num10,numJ,numQ,numK,numA];
            
            
                for (j=0; j<14; j++) { // liczy pary 
                    if (handValue[j]==2) countPair+=1; }
            
                for (j=0; j<14; j++) { // liczy trójki 
                    if (handValue[j]==3) countThree+=1; }
            
                function onePairpoints() {
            
                    if (color==0 && strit==0 && poker==0)
                        {        
                        switch(true) { //punktacja dla para,
            
                        case (num2==2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 1;
                        //alert('jest para')
                        pair = 1;  //para dwójek
                        break;
                        case (num2<2 && num3==2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 2;
                        //alert('jest para')
                        pair = 1;//para trójek
                        break;
                        case (num2<2 && num3<2 && num4==2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 3;
                        //alert('jest para')
                        pair = 1; //para czwórek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5==2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 4;
                        //alert('jest para')
                        pair = 1;//para piątek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6==2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 5;
                        //alert('jest para')
                        pair = 1;//para szóstek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7==2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 6;
                        //alert('jest para')
                        pair = 1;//para siódemek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8==2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 7;
                        //alert('jest para')
                        pair = 1;//para ósemek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9==2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 8;
                        //alert('jest para')
                        pair = 1;//para dziewiątek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10==2 && numJ<2 && numQ<2 && numK<2 && numA<2):
                        points += 9;
                        //alert('jest para')
                        pair = 1;//para dziesiątek
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ==2 && numQ<2 && numK<2 && numA<2):
                        points = 10;
                        //alert('jest para')
                        pair = 1;//para waletów
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ==2 && numK<2 && numA<2):
                        points += 11;
                        //alert('jest para')
                        pair = 1;//para dam
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK==2 && numA<2):
                        points += 12;
                        //alert('jest para')
                        pair = 1;//para króli
                        break;
                        case (num2<2 && num3<2 && num4<2 && num5<2 && num6<2 && num7<2 && num8<2 && num9<2 && num10<2 && numJ<2 && numQ<2 && numK<2 && numA==2):
                        points += 13;
                        //alert('jest para')
                        pair = 1;//para asów
                        break;
                        default:
                        points +=0;
                        //alert("nie ma pary")   
            
                        break;
                        }
                        }
                        }
                        
            
                //dwie  pary  
            
            
            
            
            
                function twoPairpoints() {
            
                if (color==0) { // filtr gdy jest kolor i dwie pary
            
                    if (countPair>2) { // fitltr 3 dwójek w 7 kartowym układzie
                        for (i=0; i<13; i++) {
                            if (handValue[i]==2) {
                            handValue[i]=0;
                            //alert("są 3 dwójki")
                            break;
                        }
                        }
                        }
            
                    if (handValue[1]==2 && handValue[0]==2) points = points + 14;
                    if (handValue[2]==2 && handValue[0]==2) points = points + 15;
                    if (handValue[2]==2 && handValue[1]==2) points = points + 16;
                    if (handValue[3]==2 && handValue[0]==2) points = points + 17;
                    if (handValue[3]==2 && handValue[1]==2) points = points + 18;
                    if (handValue[3]==2 && handValue[2]==2) points = points + 19; //dwie piątki i dwie czwórki 
            
            
            
                    for (i=0 ; i<4 ; i++) //pętla od dwóch szóstek
                        { if (handValue[4]==2 && handValue[i]==2)  points = points + 20 + i };
                    
                    for (i=0 ; i<5 ; i++) //pętla od dwóch siódemek
                        { if (handValue[5]==2 && handValue[i]==2) points = points + 24 + i};
            
                    for (i=0 ; i<6 ; i++) //pętla od dwóch ósemek
                        { if (handValue[6]==2 && handValue[i]==2) points = points + 29 + i};
            
                    for (i=0 ; i<7 ; i++) //pętla od dwóch dziewiatek
                        { if (handValue[7]==2 && handValue[i]==2) points = points + 35 + i}; 
            
                    for (i=0 ; i<8 ; i++) //pętla od dwóch dziesiątek
                        { if (handValue[8]==2 && handValue[i]==2) points = points + 42 + i}; 
            
                    for (i=0 ; i<9 ; i++) //pętla od dwóch waletów
                        { if (handValue[9]==2 && handValue[i]==2) points = points + 50 + i}; 
            
                    for (i=0 ; i<10 ; i++) //pętla od dwóch dam
                        { if (handValue[10]==2 && handValue[i]==2) points = points + 59 + i}; 
            
                    for (i=0 ; i<11 ; i++) //pętla od dwóch króli
                        { if (handValue[11]==2 && handValue[i]==2) points = points + 69 + i}; 
            
                    for (i=0 ; i<12 ; i++) //pętla od dwóch asów
                        { if (handValue[12]==2 && handValue[i]==2) points = points + 80 + i}; 
                    } 
                }
            
            
                function threePoints() { // trójka
            
            
                    if (countThree>1 ) { // filtr 2 trójek w 7 kartowym układzie
                                for (i=0; i<13; i++) {
                                if (handValue[i]==3) {
                                handValue[i]=2;
                                //alert("są 2 trójki ")
                                break;
                            }
                            
                        }
                    }
                    else if (poker==0 && strit==0 && color==0) {   
            
                        switch(true) { //punktacja dla trójki,
            
                        case (handValue[0]==3 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 92; 
                        three=1;
                        //alert("jest trójka"); //trójka dwójek
                        break;
                        case (handValue[0]<2 && handValue[1]==3 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 93;
                        three=1;
                        //alert("jest trójka");//trójka trójek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]==3 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 94; 
                        three=1;
                        //alert("jest trójka");//trójka czwórek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]==3 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 95;
                        three=1;
                        //alert("jest trójka");//trójka piątek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]==3 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 96;
                        three=1;
                        //alert("jest trójka");//trójka szóstek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]==3 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 97;
                        three=1;
                        //alert("jest trójka");//trójka siódemek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]==3 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 98;
                        three=1;
                        //alert("jest trójka");//trójka ósemek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]==3 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 99;
                        three=1;
                        //alert("jest trójka");//trójka dziewiątek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]==3 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 100;
                        three=1;
                        //alert("jest trójka");//trójka dziesiątek
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]==3 && handValue[10]<2 && handValue[11]<2 && handValue[12]<2):
                        points += 101;
                        three=1;
                        //alert("jest trójka");//trójka waletów
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]==3 && handValue[11]<2 && handValue[12]<2):
                        points += 102;
                        three=1;
                        //alert("jest trójka");//trójka dam
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]==3 && handValue[12]<2):
                        points += 103;
                        three=1;
                        //alert("jest trójka");//trójka króli
                        break;
                        case (handValue[0]<2 && handValue[1]<2 && handValue[2]<2 && handValue[3]<2 && handValue[4]<2 && handValue[5]<2 && handValue[6]<2 && handValue[7]<2 && handValue[8]<2 && handValue[9]<2 && handValue[10]<2 && handValue[11]<2 && handValue[12]==3):
                        points += 104;
                        three=1;
                        //alert("jest trójka");//trójka asów
                        break;
                        default:
                        points +=0;
                        break;
                        }
                        }
                    }
                    
                function stritPoints() { // dopisać ograniczenie na wypadek pokera
                    
            
            
            
                    if (numA>0 && num2>0 && num3>0 && num4>0 && num5>0 && color==0)
                    {
                        points=105 // strit od asa
                        //alert('jest strit od asa')
                        strit = 1;
                    }
            
                    
                    
                    else {
                            for (i=12; i>3; i--) {
                            if (handValue[i]>0 && handValue[i-1]>0 && handValue[i-2]>0 && handValue[i-3]>0 && handValue[i-4]>0 && color==0 )
                            {
                                points=points+114-(12-i);
                                //alert('jest strit')
                                strit = 1;
                                break;
                            } //strit
                    }
                    }
                    }   
                    
                function pokerPoints() {
                    
                    if (color==1 && handValue[12]>0 && handValue[0]>0 && handValue[1]>0 && handValue[2]>0 && handValue[3]>0 && handValue[4]==0 ) 
                            {
                            points=305
                            //alert('jest poker od asa')
                            poker=1;
                            } // poker od asa
            
            
            
            
                    else  {
                            for (i=12; i>3; i--) {
                            if (color==1 && handValue[i]>0 && handValue[i-1]>0 && handValue[i-2]>0 && handValue[i-3]>0 && handValue[i-4]>0 )
                            {points=points+314-(12-i);
                            poker=1;
                            //alert('jest poker')
                            break; }
                            }
                            } // poker (cały poker do poprawy)
            
                    
                }
            
                function colorPoints() { //funkcja kolor
            
                    function stritCheck() { 
                    
                    if (numA>0 && num2>0 && num3>0 && num4>0 && num5>0 && color==0)
                    {
                        strit = 1;
                    }
                    
                    else {
                            for (i=12; i>3; i--) {
                            if (handValue[i]>0 && handValue[i-1]>0 && handValue[i-2]>0 && handValue[i-3]>0 && handValue[i-4]>0 && color==0 )
                            {
                                strit = 1;
                                break;
                            } 
                    }
                    }
                    }  
            
                    stritCheck()
                    
                    color1=0;
                    color2=0;
                    color3=0;
                    color4=0;
            
                    for (i=0; i<7; i++) {
                        
                        if (hand[i]<14) {color1 += 1;}
                        if (hand[i]>13 && hand[i]<27) {color2 += 1;}
                        if (hand[i]>26 && hand[i]<40) {color3 += 1;}
                        if (hand[i]>39 && hand[i]<53) {color4 += 1;}
                        }
            
                    if (color1>4 || color2>4 || color3>4 || color4>4)
                        {color=1;}
            
            
                if (color==1 && strit==0) {
            
                        for (i=12; i>=0; i--) {
                        if (handValue[i]>0) {
                            points=points+123-(12-i);
                            //alert('diała kolor')
                            break;   
                        }
                        }
                        }
                        else {
                            //alert('nie dziala klor')
                        }   
                }
            
                function fullPoints() {
                    
                    if (countThree>1) { // fitltr 2 trójek w 7 kartowym układzie
                        for (i=0; i<13; i++) {
                            if (handValue[i]==3) {
                            handValue[i]=2;
                            //alert("są 2 trójki")
                            break;
                        }
                        }
                        }
                    
            
            
                    for (i=0; i<13; i++) {
                        if (handValue[0]==3 && handValue[i]==2 ) {// full z 3 dwójkami
                            points= points + 124 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[1]==3 && handValue[i]==2 ) {// full z 3 trójakmi
                            points= points + 137 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[2]==3 && handValue[i]==2 ) {// full z 3 czwórkami
                            points= points + 149 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[3]==3 && handValue[i]==2) {// full z 3 piatkami
                            points= points + 162 + i;
                            full=1;
                            ////alert('jest full')
                            }
                            else if (handValue[4]==3 && handValue[i]==2 ) {// full z 3 szóstkami
                            points= points + 175 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[5]==3 && handValue[i]==2 ) {// full z 3 siódemkami
                            points= points + 188 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[6]==3 && handValue[i]==2 ) {// full z 3 ósemkami
                            points= points + 201 + i;
                            full=1;
                            ////alert('jest full')
                            }
                        else if (handValue[7]==3 && handValue[i]==2 ) {// full z 3 dziewiatkami
                            points= points + 214 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else if (handValue[8]==3 && handValue[i]==2 ) {// full z 3 dzisiatkami
                            points= points + 227 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else if (handValue[9]==3 && handValue[i]==2 ) {// full z 3 waletami
                            points= points + 240 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else if (handValue[10]==3 && handValue[i]==2 ) {// full z 3 damami
                            points= points + 253 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else if (handValue[11]==3 && handValue[i]==2 ) {// full z 3 królami
                            points= points + 266 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else if (handValue[12]==3 && handValue[i]==2 ) {// full z 3 asami
                            points= points + 279 + i;
                            full=1;
                            //alert('jest full')
                            }
                        else {
                            //alert('błąd full')
                            //full=0;
                        //}
                    }
                    //if (full==1) //alert('jest full');
                    //if (full==0) //alert('nie ma fula');
                }
                }
            
                function fourPoints() {
                    for (i=0; i<13; i++) {
                        if(handValue[i]==4) {
                            points=points+292+i;
                            four=1;
                            //alert('jest kareta')
            
                        }
                        
                    }
            
                }
            
                function highCardpoints() {
                    if (num2==1) points = points + 0.0001; 
                    if (num3==1) points = points + 0.0002; 
                    if (num4==1) points = points + 0.0003; 
                    if (num5==1) points = points + 0.0006; 
                    if (num6==1) points = points + 0.0012; 
                    if (num7==1) points = points + 0.0024; 
                    if (num8==1) points = points + 0.0048; 
                    if (num9==1) points = points + 0.0096; 
                    if (num10==1) points = points + 0.0192; 
                    if (numJ==1) points = points + 0.0348; 
                    if (numQ==1) points = points + 0.0732; 
                    if (numK==1) points = points + 0.1464; 
                    if (numA==1) points = points + 0.2928; }
            
            
            
            
            
                colorPoints();
                stritPoints() 
                pokerPoints()
                onePairpoints(); // zawiera filtr gdy jest para i kolor, musi być po kolorze
                twoPairpoints(); 
                threePoints();
                fullPoints();
                fourPoints()
                highCardpoints();

                return points;


        },
        clicks: 0,
        unfold: function() {
            j = this.clicks
            p = document.getElementById('card'+this.name+this.clicks)
            p.setAttribute('src',this.hand[j]+'.jpg')
            this.clicks ++ 
            currentScore --
            document.getElementById('currentScore').innerText =  currentScore;
            if (this.clicks==7) {
            document.getElementById('btn'+this.name).disabled=true }
        },
        
           
        
        winner: function() {
            if (row1.points>row2.points && row1.points>row3.points && row1.points>row4.points) {
            alert('YOU WIN !')
            totalScore+=currentScore;
            currentScore=0;
            roundNumber++;
            }
            else{
            alert('YOU LOSE !')
            totalScore-=currentScore
            currentScore=0;
            roundNumber++;
            }
            document.getElementById('totalScore').innerText =  totalScore;
            document.getElementById('roundNumber').innerText =  roundNumber;
            document.getElementById('currentScore').innerText =  currentScore;
            unfoldWin(0);
            disableWinBtn()  
            document.getElementById('dealBtn').disabled=false;  
            disablePlusBtn()
           }
          }
        
     
   

    var row2 = {
        name: 2,
        clicks: 0,
        winner: function() {
            if (row2.points>row1.points && row2.points>row3.points && row2.points>row4.points) {
            alert('YOU WIN !')
            totalScore+=currentScore
            currentScore=0;
            roundNumber++;
            }
            else{
            alert('YOU LOSE !')
            totalScore-=currentScore
            currentScore=0;
            roundNumber++;
            }
            document.getElementById('totalScore').innerText =  totalScore;
            document.getElementById('roundNumber').innerText =  roundNumber;
            document.getElementById('currentScore').innerText =  currentScore;
            unfoldWin(0);
            disableWinBtn()
            document.getElementById('dealBtn').disabled=false; 
            disablePlusBtn()
            }   
        
        }
        
        
    
    var row3 = {
            name: 3,
            clicks: 0,
            winner: function() {
                if (row3.points>row1.points && row3.points>row2.points && row3.points>row4.points) {
                alert('YOU WIN !')
                totalScore+=currentScore;
                currentScore=0;
                roundNumber++;
                }
                else{
                alert('YOU LOSE !')
                totalScore-=currentScore
                currentScore=0;
                roundNumber++;
                }
                document.getElementById('totalScore').innerText =  totalScore;
                document.getElementById('roundNumber').innerText =  roundNumber;
                document.getElementById('currentScore').innerText =  currentScore;
                unfoldWin(0);
                disableWinBtn() 
                document.getElementById('dealBtn').disabled=false; 
                disablePlusBtn()
                }
            }
        
        
    
    var row4 = {
            name: 4,
            clicks: 0,
            winner: function() {
                if (row4.points>row1.points && row4.points>row2.points && row4.points>row3.points) {
                alert('YOU WIN !')
                totalScore+=currentScore;
                currentScore=0;
                roundNumber++;
                }
                else{
                alert('YOU LOSE !')
                totalScore-=currentScore;
                currentScore=0;
                roundNumber++;
                }
                document.getElementById('totalScore').innerText =  totalScore;
                document.getElementById('roundNumber').innerText =  roundNumber;
                document.getElementById('currentScore').innerText =  currentScore;
                unfoldWin(0);
                disableWinBtn() 
                document.getElementById('dealBtn').disabled=false;  
                disablePlusBtn()
                }
            }
        
            row2.handSet=row1.handSet
            row2.unfoldWin=row1.unfoldWin   
            row2.countPoints=row1.countPoints
            
            row2.unfold = row1.unfold
            
            row3.handSet=row1.handSet 
            row3.unfoldWin=row1.unfoldWin     
            row3.countPoints=row1.countPoints
            
            row3.unfold = row1.unfold
            
            row4.handSet=row1.handSet
            row4.unfoldWin=row1.unfoldWin     
            row4.countPoints=row1.countPoints
            
            row4.unfold = row1.unfold        
        

function dealBlind() { 
    for (i=1; i<5; i++) {
        for (j=0; j<7; j++) {
        var p = document.createElement('img');
        p.setAttribute('src','back.jpg');
        p.setAttribute('class','notVisible');
        p.setAttribute('id','card'+i+j);
        document.getElementById('row'+i).appendChild(p);
        
    }
    }
    }

function dealBlindAgain() {
    var pic = document.querySelectorAll('.visible');
    var i
    for (i=0; i<pic.length; i++) {
        pic[i].setAttribute('src','back.jpg');
        pic[i].setAttribute('class','notVisible');
        }
    
}




function deal(j) {
            
        a = document.getElementById('card1'+j);
        b = document.getElementById('card2'+j);
        c = document.getElementById('card3'+j);
        d = document.getElementById('card4'+j);

        if(j<7) {
            setTimeout(function(){
                a.setAttribute('class','visible')
                b.setAttribute('class','visible')
                c.setAttribute('class','visible')
                d.setAttribute('class','visible')
                j=j+1;
                deal(j)} 
                ,200 )
        }
        }


    function unfoldWin(j) {
            a = document.getElementById('card1'+j);
            b = document.getElementById('card2'+j);
            c = document.getElementById('card3'+j);
            d = document.getElementById('card4'+j);
    
            if(j<7) {
                setTimeout(function(){
                    a.setAttribute('src',row1.hand[j]+'.jpg')
                    b.setAttribute('src',row2.hand[j]+'.jpg')
                    c.setAttribute('src',row3.hand[j]+'.jpg')
                    d.setAttribute('src',row4.hand[j]+'.jpg')
                    j=j+1;
                    this.unfoldWin(j)} 
                    ,300 )
            }
            else{
                if (row1.points>row2.points && row1.points>row3.points && row1.points>row4.points) {
                    document.getElementById('row1').setAttribute("class","winner") 
                }
                else if (row2.points>row1.points && row2.points>row3.points && row2.points>row4.points) {
                    document.getElementById('row2').setAttribute("class","winner") 
                }
                else if (row3.points>row1.points && row3.points>row2.points && row3.points>row4.points) {
                    document.getElementById('row3').setAttribute("class","winner") 
                }
                else {
                    document.getElementById('row4').setAttribute("class","winner")
                }

            }
            }

    function disableWinBtn() {
        for(i=1; i<5; i++) {
            x=document.getElementById('win'+i)
            x.disabled=true
    }
    }

    function enableWinBtn() {
        for(i=1; i<5; i++) {
            x=document.getElementById('win'+i)
            x.disabled=false;
    }
    }
    
    function disablePlusBtn() {
        for(i=1; i<5; i++) {
            x=document.getElementById('btn'+i)
            x.disabled=true
    }
    }

    function enablePlusBtn() {
        for(i=1; i<5; i++) {
            x=document.getElementById('btn'+i)
            x.disabled=false;
    }
    }

    function clearWiner() {
        var w = document.querySelectorAll('.winner')
        for (i=0; i<w.length; i++) {
            w[i].setAttribute('class',"row")
        }
    }






    function randomizeCards(){

    for (i=1; i<53; i++) {
        cards.push(i)
        }
        for (i=51; i>=0; i--) {
        random = Math.floor(Math.random() * i);
        var temp = cards[i];
        cards[i] = cards[random];
        cards[random] = temp;
        }
        }

     function newGame() {
        alert(cards)
        alert(row3.hand)
        alert(row4.points)     


    } 

  
 
   
