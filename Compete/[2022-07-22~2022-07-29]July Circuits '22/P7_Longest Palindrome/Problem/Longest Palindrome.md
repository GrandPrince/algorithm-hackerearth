### Longest Palindrome

<p><strong>Note</strong>:<em> This is an approximate problem. There is no exact solution. You must find the most optimal solution. Please, take a look at the sample explanation to ensure that you understand the problem correctly.</em><br></p>
<p><strong>Problem statement</strong></p>
<p>Given a string S of N length consisting of lowercase latin characters (a - z). We need to decompose S into K consecutive non empty substrings such that every character is present in only one substring.<br><br>
Say substrings are S[1], S[2], S[3], .... , S[K]. Choose a array B , which is a permutation of 1 to K i.e. it is of size K and include every element from 1 to K.</p>
<p>Now , form a new string V = S[B[1]] + S[B[2]] + ......  + S[B[k]].</p>
<p>Suppose, X is the length of the longest palindromic substring present in string V.<br><br>Aim is to <strong>maximize</strong> <strong>X.</strong></p>
<p><strong>Input format :</strong></p>
<ul>
	<li>First line contains two space-separated integers : N and K </li>
	<li>Second line contain a string S, of lowercase latin characters.</li>
</ul>
<p><strong>Output format :</strong></p>
<ul>
	<li>In the first K lines, print one integer denoting end index of i-th substring (indexes are 1 based).</li>
	<li>In next line print K space separated integers, denoting array B (permutation of 1 to K)</li>
	<li>End index of substrings should be in increasing order.</li>
</ul>
<p><strong>Verdict and scoring :</strong></p>
<ul>
	<li><p>Your score is equal to the sum of the values of all test files. The value of each test file is equal to the value of X that you found.</p><p>If decomposition of string S is invalid, or array B is invalid you will receive a wrong answer verdict.</p></li>
</ul>
<p><strong>Constraints :</strong></p>
<ul>
	<li><svg width="8.541ex" height="2.543ex" viewBox="0 -977.9 3677.5 1094.7" role="img" focusable="false" style="vertical-align: -0.271ex;" aria-hidden="true"><defs><path stroke-width="1" id="E1-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path stroke-width="1" id="E1-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E1-MJMAIN-33" d="M127 463Q100 463 85 480T69 524Q69 579 117 622T233 665Q268 665 277 664Q351 652 390 611T430 522Q430 470 396 421T302 350L299 348Q299 347 308 345T337 336T375 315Q457 262 457 175Q457 96 395 37T238 -22Q158 -22 100 21T42 130Q42 158 60 175T105 193Q133 193 151 175T169 130Q169 119 166 110T159 94T148 82T136 74T126 70T118 67L114 66Q165 21 238 21Q293 21 321 74Q338 107 338 175V195Q338 290 274 322Q259 328 213 329L171 330L168 332Q166 335 166 348Q166 366 174 366Q202 366 232 371Q266 376 294 413T322 525V533Q322 590 287 612Q265 626 240 626Q208 626 181 615T143 592T132 580H135Q138 579 143 578T153 573T165 566T175 555T183 540T186 520Q186 498 172 481T127 463Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E1-MJMATHI-4E" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-3D" x="1166" y="0"></use><g transform="translate(2222,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-33" x="1415" y="557"></use></g></g></svg></li>
	<li><svg width="13.967ex" height="2.809ex" viewBox="0 -977.9 6013.5 1209.6" role="img" focusable="false" style="vertical-align: -0.538ex;" aria-hidden="true"><defs><path stroke-width="1" id="E2-MJMAIN-35" d="M164 157Q164 133 148 117T109 101H102Q148 22 224 22Q294 22 326 82Q345 115 345 210Q345 313 318 349Q292 382 260 382H254Q176 382 136 314Q132 307 129 306T114 304Q97 304 95 310Q93 314 93 485V614Q93 664 98 664Q100 666 102 666Q103 666 123 658T178 642T253 634Q324 634 389 662Q397 666 402 666Q410 666 410 648V635Q328 538 205 538Q174 538 149 544L139 546V374Q158 388 169 396T205 412T256 420Q337 420 393 355T449 201Q449 109 385 44T229 -22Q148 -22 99 32T50 154Q50 178 61 192T84 210T107 214Q132 214 148 197T164 157Z"></path><path stroke-width="1" id="E2-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E2-MJMAIN-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E2-MJMATHI-4B" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z"></path><path stroke-width="1" id="E2-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="E2-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E2-MJMAIN-35"></use><use xlink:href="#E2-MJMAIN-30" x="500" y="0"></use><use xlink:href="#E2-MJMAIN-2264" x="1278" y="0"></use><use xlink:href="#E2-MJMATHI-4B" x="2335" y="0"></use><use xlink:href="#E2-MJMAIN-2264" x="3502" y="0"></use><g transform="translate(4558,0)"><use xlink:href="#E2-MJMAIN-31"></use><use xlink:href="#E2-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E2-MJMAIN-32" x="1415" y="557"></use></g></g></svg></li>
	<li>25% Test files have at most 8 distinct characters in S</li>
	<li>25% Test files have at most 16 distinct characters in S</li>
	<li>50% Test files have at most 26 distinct characters in S</li>
</ul>
<table>
    <thead>
        <th>Sample Input</th>
        <th>Sample Output</th>
    </thead>
    <tbody valign="top">
        <td>4 2<br>abab</td>
        <td>2<br>4<br>2 1</td>
    </tbody>
</table>

### Explanation

<ul>
	<li>S1 = ab</li>
	<li>S2 = ab</li>
	<li>V = S[B[1]] + S[B[2]] = S[2] + S[1] = ab + ab = abab</li>
	<li>Length of largest palindromic substring = 3, which is either 'aba' or 'bab'</li>
	<li>X = 3</li>
</ul>
<p><br><strong>Sample Test is for understanding purpose. Constraints in test files are as mentioned above.</strong></p>
<table>
    <tbody valign="top">
        <tr>
            <th>Time Limit: </th>
            <td>1.0 sec(s) for each input file.</td>
        </tr>
        <tr>
            <th>Memory Limit: </th>
            <td>256 MB </td>
        </tr>
        <tr>
            <th>Source Limit: </th>
            <td>1024 KB </td>
        </tr>
        <tr>
            <th>Marking Scheme: </th>
            <td>Score is assigned when all the testcases pass.</td>
        </tr>
        <tr>
            <th>Allowed Languages: </th>
            <td>Bash, C, C++, C++14, C++17, Clojure, C#, D, Erlang, F#, Go, Groovy, Haskell, Java, Java 8, Java 14, JavaScript(Rhino), JavaScript(Node.js), Julia, Kotlin, Lisp, Lisp (SBCL), Lua, Objective-C, OCaml, Octave, Pascal, Perl, PHP, Python, Python 3, Python 3.8, Racket, Ruby, Rust, Scala, Swift-4.1, Swift, TypeScript, Visual Basic</td>
        </tr>
    </tbody>
</table>