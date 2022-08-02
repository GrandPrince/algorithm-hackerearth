### Alternative moves

<p>You are given three integers <em>N, A, and B.</em> You have another integer<em> X = 0.</em> You can apply the following move (<em>1</em>-indexed) any number of times:</p>
<ul>
	<li>During the odd-numbered moves<em>(1, 3, 5,....),</em> you have to set <em>X = X + A.</em></li>
	<li>During the even-numbered moves<em>(2, 4, 6,....)</em>, you have to set <em>X = X - B.</em></li>
</ul>
<p>Find the <strong>minimum</strong> number of moves required so that the value of <em>X</em> becomes <strong>greater than or equal</strong> to <em>N</em> or print <em>-1</em> if it is impossible to do so.</p>
<p><strong>Input format</strong></p>
<ul>
	<li>The first line contains <em>T</em> denoting the number of test cases. The description of <em>T</em> test cases is as follows:</li>
	<li>Each test case consists of a single line containing three integers <em>N, A,</em> and <em>B.</em></li>
</ul>
<p><strong>Output format</strong><br>
For each test case, print the minimum number of moves required so that the value of <em>X</em> becomes greater than or equal to <em>N</em> or print <em>-1</em> otherwise.</p>
<p><strong>Constraints</strong></p>
<p><svg width="18.377ex" height="6.276ex" viewBox="0 -977.9 7912.4 2702.1" role="img" focusable="false" style="vertical-align: -4.005ex;" aria-hidden="true"><defs><path stroke-width="1" id="E1-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="E1-MJMAIN-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E1-MJMATHI-54" d="M40 437Q21 437 21 445Q21 450 37 501T71 602L88 651Q93 669 101 677H569H659Q691 677 697 676T704 667Q704 661 687 553T668 444Q668 437 649 437Q640 437 637 437T631 442L629 445Q629 451 635 490T641 551Q641 586 628 604T573 629Q568 630 515 631Q469 631 457 630T439 622Q438 621 368 343T298 60Q298 48 386 46Q418 46 427 45T436 36Q436 31 433 22Q429 4 424 1L422 0Q419 0 415 0Q410 0 363 1T228 2Q99 2 64 0H49Q43 6 43 9T45 27Q49 40 55 46H83H94Q174 46 189 55Q190 56 191 56Q196 59 201 76T241 233Q258 301 269 344Q339 619 339 625Q339 630 310 630H279Q212 630 191 624Q146 614 121 583T67 467Q60 445 57 441T43 437H40Z"></path><path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E1-MJMAIN-35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path><path stroke-width="1" id="E1-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E1-MJMAIN-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path stroke-width="1" id="E1-MJMATHI-41" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path><path stroke-width="1" id="E1-MJMATHI-42" d="M231 637Q204 637 199 638T194 649Q194 676 205 682Q206 683 335 683Q594 683 608 681Q671 671 713 636T756 544Q756 480 698 429T565 360L555 357Q619 348 660 311T702 219Q702 146 630 78T453 1Q446 0 242 0Q42 0 39 2Q35 5 35 10Q35 17 37 24Q42 43 47 45Q51 46 62 46H68Q95 46 128 49Q142 52 147 61Q150 65 219 339T288 628Q288 635 231 637ZM649 544Q649 574 634 600T585 634Q578 636 493 637Q473 637 451 637T416 636H403Q388 635 384 626Q382 622 352 506Q352 503 351 500L320 374H401Q482 374 494 376Q554 386 601 434T649 544ZM595 229Q595 273 572 302T512 336Q506 337 429 337Q311 337 310 336Q310 334 293 263T258 122L240 52Q240 48 252 48T333 46Q422 46 429 47Q491 54 543 105T595 229Z"></path><path stroke-width="1" id="E1-MJMAIN-39" d="M352 287Q304 211 232 211Q154 211 104 270T44 396Q42 412 42 436V444Q42 537 111 606Q171 666 243 666Q245 666 249 666T257 665H261Q273 665 286 663T323 651T370 619T413 560Q456 472 456 334Q456 194 396 97Q361 41 312 10T208 -22Q147 -22 108 7T68 93T121 149Q143 149 158 135T173 96Q173 78 164 65T148 49T135 44L131 43Q131 41 138 37T164 27T206 22H212Q272 22 313 86Q352 142 352 280V287ZM244 248Q292 248 321 297T351 430Q351 508 343 542Q341 552 337 562T323 588T293 615T246 625Q208 625 181 598Q160 576 154 546T147 441Q147 358 152 329T172 282Q197 248 244 248Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E1-MJMATHI-54" x="1834" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="2816" y="0"></use><g transform="translate(3873,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-35" x="1415" y="557"></use></g><g transform="translate(0,-1436)"><use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E1-MJMATHI-4E" x="1834" y="0"></use><use xlink:href="#E1-MJMAIN-2C" x="2723" y="0"></use><use xlink:href="#E1-MJMATHI-41" x="3168" y="0"></use><use xlink:href="#E1-MJMAIN-2C" x="3918" y="0"></use><use xlink:href="#E1-MJMATHI-42" x="4363" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="5401" y="0"></use><g transform="translate(6457,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-39" x="1415" y="557"></use></g></g></g></svg></p>
<table>
    <thead>
        <tr>
            <th>Sample Input</th>
            <th>Sample Output</th>
        </tr>
    <thead>
    <tbody valign="top">
        <tr>
            <td>3<br>5 5 2<br>7 3 4<br>6 4 1</td>
            <td>1<br>-1<br>3</td>
        </tr>
    </tbody>
</table>

### Explanation

<p><strong> The first test case</strong></p>
<ul>
	<li>During the first move you set <em>X = 0 + 5 = 5 >= N = 5</em>. Hence only one move is required.</li>
</ul>
<p><strong>The second test case</strong></p>
<ul>
	<li>It is impossible to make <em>X >= N</em> by applying the given move any number of times.</li>
</ul>
<p><strong>The third test case</strong></p>
<ul>
	<li>During the first move you set <em>X = 0 + 4 = 4.</em></li>
	<li>During the second move you set <em>X = 4 - 1 = 3.</em></li>
	<li>During the third move you set<em> X = 3 + 4 = 7 >= N = 6.</em> Hence minimum three moves are required.</li>
</ul>
<table>
    <tbody valign="top">
        <tr>
            <th>Time Limit:</th>
            <td>1.0 sec(s) for each input file.</td>
        </tr>
        <tr>
            <th>Memory Limit:</th>
            <td>256 MB</td>
        </tr>
        <tr>
            <th>Source Limit:</th>
            <td>1024 KB</td>
        </tr>
        <tr>
            <th>Marking Scheme:</th>
            <td>Score is assigned if any testcase passes.</td>
        </tr>
        <tr>
            <th>Allowed Languages:</th>
            <td>Bash, C, C++, C++14, C++17, Clojure, C#, D, Erlang, F#, Go, Groovy, Haskell, Java, Java 8, Java 14, JavaScript(Rhino), JavaScript(Node.js), Julia, Kotlin, Lisp, Lisp (SBCL), Lua, Objective-C, OCaml, Octave, Pascal, Perl, PHP, Python, Python 3, Python 3.8, Racket, Ruby, Rust, Scala, Swift-4.1, Swift, TypeScript, Visual Basic</td>
        </tr>
    </tbody>
</table>