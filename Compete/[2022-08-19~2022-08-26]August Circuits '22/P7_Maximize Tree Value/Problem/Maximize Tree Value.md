### Maximize Tree Value

<p><strong>Note</strong>: <em>This is an approximate problem. There is no exact solution. You must find the most optimal solution. Please, take a look at the sample explanation to ensure that you understand the problem correctly.</em></p>
<p>Given an undirected tree with <em>N</em> nodes rooted at <em>1</em>. Every node is assigned a weight which is given by an array <em>A</em>. Weight of an edge <em>W(u, v)</em> is defined as <strong><em>(A[u] + A[v]) * (A[u] | A[v])</em></strong>, where | represents Bitwise OR operator.</p>
<p>You are allowed to perform at most <em>K</em> operations on tree and in each operation:</p>
<ul>
	<li>Choose <em>u v</em>, and reverse the weights of the nodes present on the simple path between node <em>u</em> and <em>v</em>.</li>
</ul>
<p>Suppose, <em>X</em> such operations are performed, <strong>maximize</strong> the value of <strong>Z =</strong> <em><strong>(Sum of weight of all the edges of the tree) * (K - X + 1)</strong></em></p>
<p><strong>Input Format:</strong></p>
<ul>
	<li>First line contains two space separated integers <em>N K.</em></li>
	<li>Second line contains <em>N</em> space separated integers denoting the weight of the nodes.</li>
	<li>Next <em>N - 1</em> lines contains two space separated integers <em>u v</em>, denoting an edge between node <em>u</em> and <em>v</em>.</li>
</ul>
<p><strong>Output Format:</strong></p>
<ul>
	<li>Print <em>X</em>, denoting the number of operations performed.</li>
	<li>In next <em>X</em> lines, print the pair of nodes <em>u v</em> choosen in given operation.</li>
</ul>
<p><strong>Constraints:</strong></p>
<p><svg width="14.578ex" height="12.276ex" viewBox="0 -977.9 6276.5 5285.5" role="img" focusable="false" style="vertical-align: -10.005ex;" aria-hidden="true"><defs><path stroke-width="1" id="E1-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E1-MJMAIN-3D" d="M56 347Q56 360 70 367H707Q722 359 722 347Q722 336 708 328L390 327H72Q56 332 56 347ZM56 153Q56 168 72 173H708Q722 163 722 153Q722 140 707 133H70Q56 140 56 153Z"></path><path stroke-width="1" id="E1-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E1-MJMAIN-34" d="M462 0Q444 3 333 3Q217 3 199 0H190V46H221Q241 46 248 46T265 48T279 53T286 61Q287 63 287 115V165H28V211L179 442Q332 674 334 675Q336 677 355 677H373L379 671V211H471V165H379V114Q379 73 379 66T385 54Q393 47 442 46H471V0H462ZM293 211V545L74 212L183 211H293Z"></path><path stroke-width="1" id="E1-MJMATHI-4B" d="M285 628Q285 635 228 637Q205 637 198 638T191 647Q191 649 193 661Q199 681 203 682Q205 683 214 683H219Q260 681 355 681Q389 681 418 681T463 682T483 682Q500 682 500 674Q500 669 497 660Q496 658 496 654T495 648T493 644T490 641T486 639T479 638T470 637T456 637Q416 636 405 634T387 623L306 305Q307 305 490 449T678 597Q692 611 692 620Q692 635 667 637Q651 637 651 648Q651 650 654 662T659 677Q662 682 676 682Q680 682 711 681T791 680Q814 680 839 681T869 682Q889 682 889 672Q889 650 881 642Q878 637 862 637Q787 632 726 586Q710 576 656 534T556 455L509 418L518 396Q527 374 546 329T581 244Q656 67 661 61Q663 59 666 57Q680 47 717 46H738Q744 38 744 37T741 19Q737 6 731 0H720Q680 3 625 3Q503 3 488 0H478Q472 6 472 9T474 27Q478 40 480 43T491 46H494Q544 46 544 71Q544 75 517 141T485 216L427 354L359 301L291 248L268 155Q245 63 245 58Q245 51 253 49T303 46H334Q340 37 340 35Q340 19 333 5Q328 0 317 0Q314 0 280 1T180 2Q118 2 85 2T49 1Q31 1 31 11Q31 13 34 25Q38 41 42 43T65 46Q92 46 125 49Q139 52 144 61Q147 65 216 339T285 628Z"></path><path stroke-width="1" id="E1-MJMAIN-32" d="M109 429Q82 429 66 447T50 491Q50 562 103 614T235 666Q326 666 387 610T449 465Q449 422 429 383T381 315T301 241Q265 210 201 149L142 93L218 92Q375 92 385 97Q392 99 409 186V189H449V186Q448 183 436 95T421 3V0H50V19V31Q50 38 56 46T86 81Q115 113 136 137Q145 147 170 174T204 211T233 244T261 278T284 308T305 340T320 369T333 401T340 431T343 464Q343 527 309 573T212 619Q179 619 154 602T119 569T109 550Q109 549 114 549Q132 549 151 535T170 489Q170 464 154 447T109 429Z"></path><path stroke-width="1" id="E1-MJMAIN-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E1-MJMATHI-41" d="M208 74Q208 50 254 46Q272 46 272 35Q272 34 270 22Q267 8 264 4T251 0Q249 0 239 0T205 1T141 2Q70 2 50 0H42Q35 7 35 11Q37 38 48 46H62Q132 49 164 96Q170 102 345 401T523 704Q530 716 547 716H555H572Q578 707 578 706L606 383Q634 60 636 57Q641 46 701 46Q726 46 726 36Q726 34 723 22Q720 7 718 4T704 0Q701 0 690 0T651 1T578 2Q484 2 455 0H443Q437 6 437 9T439 27Q443 40 445 43L449 46H469Q523 49 533 63L521 213H283L249 155Q208 86 208 74ZM516 260Q516 271 504 416T490 562L463 519Q447 492 400 412L310 260L413 259Q516 259 516 260Z"></path><path stroke-width="1" id="E1-MJMAIN-5B" d="M118 -250V750H255V710H158V-210H255V-250H118Z"></path><path stroke-width="1" id="E1-MJMATHI-69" d="M184 600Q184 624 203 642T247 661Q265 661 277 649T290 619Q290 596 270 577T226 557Q211 557 198 567T184 600ZM21 287Q21 295 30 318T54 369T98 420T158 442Q197 442 223 419T250 357Q250 340 236 301T196 196T154 83Q149 61 149 51Q149 26 166 26Q175 26 185 29T208 43T235 78T260 137Q263 149 265 151T282 153Q302 153 302 143Q302 135 293 112T268 61T223 11T161 -11Q129 -11 102 10T74 74Q74 91 79 106T122 220Q160 321 166 341T173 380Q173 404 156 404H154Q124 404 99 371T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="E1-MJMAIN-5D" d="M22 710V750H159V-250H22V-210H119V710H22Z"></path><path stroke-width="1" id="E1-MJMAIN-36" d="M42 313Q42 476 123 571T303 666Q372 666 402 630T432 550Q432 525 418 510T379 495Q356 495 341 509T326 548Q326 592 373 601Q351 623 311 626Q240 626 194 566Q147 500 147 364L148 360Q153 366 156 373Q197 433 263 433H267Q313 433 348 414Q372 400 396 374T435 317Q456 268 456 210V192Q456 169 451 149Q440 90 387 34T253 -22Q225 -22 199 -14T143 16T92 75T56 172T42 313ZM257 397Q227 397 205 380T171 335T154 278T148 216Q148 133 160 97T198 39Q222 21 251 21Q302 21 329 59Q342 77 347 104T352 209Q352 289 347 316T329 361Q302 397 257 397Z"></path><path stroke-width="1" id="E1-MJMATHI-75" d="M21 287Q21 295 30 318T55 370T99 420T158 442Q204 442 227 417T250 358Q250 340 216 246T182 105Q182 62 196 45T238 27T291 44T328 78L339 95Q341 99 377 247Q407 367 413 387T427 416Q444 431 463 431Q480 431 488 421T496 402L420 84Q419 79 419 68Q419 43 426 35T447 26Q469 29 482 57T512 145Q514 153 532 153Q551 153 551 144Q550 139 549 130T540 98T523 55T498 17T462 -8Q454 -10 438 -10Q372 -10 347 46Q345 45 336 36T318 21T296 6T267 -6T233 -11Q189 -11 155 7Q103 38 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="E1-MJMAIN-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path stroke-width="1" id="E1-MJMATHI-76" d="M173 380Q173 405 154 405Q130 405 104 376T61 287Q60 286 59 284T58 281T56 279T53 278T49 278T41 278H27Q21 284 21 287Q21 294 29 316T53 368T97 419T160 441Q202 441 225 417T249 361Q249 344 246 335Q246 329 231 291T200 202T182 113Q182 86 187 69Q200 26 250 26Q287 26 319 60T369 139T398 222T409 277Q409 300 401 317T383 343T365 361T357 383Q357 405 376 424T417 443Q436 443 451 425T467 367Q467 340 455 284T418 159T347 40T241 -11Q177 -11 139 22Q102 54 102 117Q102 148 110 181T151 298Q173 362 173 380Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E1-MJMATHI-4E" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-3D" x="1166" y="0"></use><g transform="translate(2222,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-34" x="1415" y="557"></use></g><g transform="translate(0,-1320)"><use xlink:href="#E1-MJMATHI-4B" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-3D" x="1167" y="0"></use><g transform="translate(2223,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-32" x="1415" y="557"></use></g></g><g transform="translate(0,-2639)"><use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E1-MJMATHI-41" x="1834" y="0"></use><use xlink:href="#E1-MJMAIN-5B" x="2585" y="0"></use><use xlink:href="#E1-MJMATHI-69" x="2863" y="0"></use><use xlink:href="#E1-MJMAIN-5D" x="3209" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="3765" y="0"></use><g transform="translate(4821,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use transform="scale(0.707)" xlink:href="#E1-MJMAIN-36" x="1415" y="557"></use></g></g><g transform="translate(0,-4004)"><use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E1-MJMATHI-75" x="1834" y="0"></use><use xlink:href="#E1-MJMAIN-2C" x="2407" y="0"></use><use xlink:href="#E1-MJMATHI-76" x="2852" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="3615" y="0"></use><use xlink:href="#E1-MJMATHI-4E" x="4671" y="0"></use></g></g></svg></p>
<p><strong>Verdit and Scoring</strong></p>
<ul>
	<li><em>Z</em> is the score for each test case.</li>
	<li>If the value of X is greater than K or pair of nodes choosen in operation is invalid, then you will receive a <strong>Wrong Answer</strong> verdict.</li>
</ul>
<table>
  <thead>
    <th>Sample Input</th>
    <th>Sample Output</th>
  </thead>
  <tbody valign="top">
    <td>4 2<br>4 1 2 9<br>1 2<br>2 3<br>2 4</td>
    <td>1<br>3 4</td>
  </tbody>
</table>

### Explanation

<p><em>Given X = 1</em>. After operation is applied:</p>
<ul>
	<li><em>Weight of Node 3 = 9</em></li>
	<li><em>Weight of Node 4 = 2</em></li>
</ul>
<p>Now, weight of edges are:</p>
<ul>
	<li>1 - 2 : (4 + 1)*(4 | 1) = 25</li>
	<li>2 - 3 : (1 + 9)*(1 | 9) = 90</li>
	<li>2 - 4 : (1 + 2)*(1 | 2) = 9</li>
</ul>
<p>Value of <em>Z = 124* (2 - 1 + 1) = 248.</em></p>
<p><em>Please note: Sample Input / Output is just for the purpose of understanding. Test files follow the constraints specificed in problem statement.</em></p>
<table>
  <tbody valign="top">
    <tr>
      <th>Time Limit:</th>
      <td>2.0 sec(s) for each input file.</td>
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
      <td>Score is assigned when all the testcases pass.</td>
    </tr>
    <tr>
      <th>Allowed Languages: </th>
      <td>Bash, C, C++, C++14, C++17, Clojure, C#, D, Erlang, F#, Go, Groovy, Haskell, Java, Java 8, Java 14, JavaScript(Rhino), JavaScript(Node.js), Julia, Kotlin, Lisp, Lisp (SBCL), Lua, Objective-C, OCaml, Octave, Pascal, Perl, PHP, Python, Python 3, Python 3.8, R(RScript), Racket, Ruby, Rust, Scala, Swift-4.1, Swift, TypeScript, Visual Basic</td>
    </tr>
  </tbody>
</table>