### Light Up the Bulbs

<p>Demon has a warehouse and he wants to light up the warehouse by lighting <strong>N</strong> bulbs on the ceiling. Consider the ceiling as a coordinate axis and Demon knows the X - Y coordinates of the bulbs that need to be put at the ceiling. Now the bulbs need to be connected with each other using wires. Demon wants to know the minimum sum of the square of the length of wires required to connect the bulbs.</p>
<p><strong>Note:</strong> If bulb <strong>A</strong> and <strong>B</strong> are connected, bulb <strong>B</strong> and bulb <strong>C</strong> are connected, then bulb <strong>A</strong> and <strong>C</strong> are also connected.</p>
<p><strong>Input Format:</strong><br>The first line contains an integer <strong>N</strong> - the number of bulbs needed to light up the warehouse. The next N lines contain two space-separated integers x and y - representing the coordinates of the bulb.</p>
<p><strong>Output Format:</strong><br>Output the minimum length of wire required to connect the light bulbs.</p>
<p><strong>Constraints:</strong><br><svg width="14.073ex" height="2.276ex" viewBox="0 -748.3 6059.1 979.9" role="img" focusable="false" style="vertical-align: -0.538ex;" aria-hidden="true"><defs><path stroke-width="1" id="E1-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path><path stroke-width="1" id="E1-MJMAIN-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E1-MJMATHI-4E" d="M234 637Q231 637 226 637Q201 637 196 638T191 649Q191 676 202 682Q204 683 299 683Q376 683 387 683T401 677Q612 181 616 168L670 381Q723 592 723 606Q723 633 659 637Q635 637 635 648Q635 650 637 660Q641 676 643 679T653 683Q656 683 684 682T767 680Q817 680 843 681T873 682Q888 682 888 672Q888 650 880 642Q878 637 858 637Q787 633 769 597L620 7Q618 0 599 0Q585 0 582 2Q579 5 453 305L326 604L261 344Q196 88 196 79Q201 46 268 46H278Q284 41 284 38T282 19Q278 6 272 0H259Q228 2 151 2Q123 2 100 2T63 2T46 1Q31 1 31 10Q31 14 34 26T39 40Q41 46 62 46Q130 49 150 85Q154 91 221 362L289 634Q287 635 234 637Z"></path><path stroke-width="1" id="E1-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E1-MJMAIN-31" x="0" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E1-MJMATHI-4E" x="1834" y="0"></use><use xlink:href="#E1-MJMAIN-2264" x="3000" y="0"></use><g transform="translate(4057,0)"><use xlink:href="#E1-MJMAIN-31"></use><use xlink:href="#E1-MJMAIN-30" x="500" y="0"></use><use xlink:href="#E1-MJMAIN-30" x="1001" y="0"></use><use xlink:href="#E1-MJMAIN-30" x="1501" y="0"></use></g></g></svg><br><svg width="15.528ex" height="2.409ex" viewBox="0 -748.3 6685.8 1037.3" role="img" focusable="false" style="vertical-align: -0.671ex;" aria-hidden="true"><defs><path stroke-width="1" id="E2-MJMAIN-30" d="M96 585Q152 666 249 666Q297 666 345 640T423 548Q460 465 460 320Q460 165 417 83Q397 41 362 16T301 -15T250 -22Q224 -22 198 -16T137 16T82 83Q39 165 39 320Q39 494 96 585ZM321 597Q291 629 250 629Q208 629 178 597Q153 571 145 525T137 333Q137 175 145 125T181 46Q209 16 250 16Q290 16 318 46Q347 76 354 130T362 333Q362 478 354 524T321 597Z"></path><path stroke-width="1" id="E2-MJMAIN-2264" d="M674 636Q682 636 688 630T694 615T687 601Q686 600 417 472L151 346L399 228Q687 92 691 87Q694 81 694 76Q694 58 676 56H670L382 192Q92 329 90 331Q83 336 83 348Q84 359 96 365Q104 369 382 500T665 634Q669 636 674 636ZM84 -118Q84 -108 99 -98H678Q694 -104 694 -118Q694 -130 679 -138H98Q84 -131 84 -118Z"></path><path stroke-width="1" id="E2-MJMATHI-78" d="M52 289Q59 331 106 386T222 442Q257 442 286 424T329 379Q371 442 430 442Q467 442 494 420T522 361Q522 332 508 314T481 292T458 288Q439 288 427 299T415 328Q415 374 465 391Q454 404 425 404Q412 404 406 402Q368 386 350 336Q290 115 290 78Q290 50 306 38T341 26Q378 26 414 59T463 140Q466 150 469 151T485 153H489Q504 153 504 145Q504 144 502 134Q486 77 440 33T333 -11Q263 -11 227 52Q186 -10 133 -10H127Q78 -10 57 16T35 71Q35 103 54 123T99 143Q142 143 142 101Q142 81 130 66T107 46T94 41L91 40Q91 39 97 36T113 29T132 26Q168 26 194 71Q203 87 217 139T245 247T261 313Q266 340 266 352Q266 380 251 392T217 404Q177 404 142 372T93 290Q91 281 88 280T72 278H58Q52 284 52 289Z"></path><path stroke-width="1" id="E2-MJMAIN-2C" d="M78 35T78 60T94 103T137 121Q165 121 187 96T210 8Q210 -27 201 -60T180 -117T154 -158T130 -185T117 -194Q113 -194 104 -185T95 -172Q95 -168 106 -156T131 -126T157 -76T173 -3V9L172 8Q170 7 167 6T161 3T152 1T140 0Q113 0 96 17Z"></path><path stroke-width="1" id="E2-MJMATHI-79" d="M21 287Q21 301 36 335T84 406T158 442Q199 442 224 419T250 355Q248 336 247 334Q247 331 231 288T198 191T182 105Q182 62 196 45T238 27Q261 27 281 38T312 61T339 94Q339 95 344 114T358 173T377 247Q415 397 419 404Q432 431 462 431Q475 431 483 424T494 412T496 403Q496 390 447 193T391 -23Q363 -106 294 -155T156 -205Q111 -205 77 -183T43 -117Q43 -95 50 -80T69 -58T89 -48T106 -45Q150 -45 150 -87Q150 -107 138 -122T115 -142T102 -147L99 -148Q101 -153 118 -160T152 -167H160Q177 -167 186 -165Q219 -156 247 -127T290 -65T313 -9T321 21L315 17Q309 13 296 6T270 -6Q250 -11 231 -11Q185 -11 150 11T104 82Q103 89 103 113Q103 170 138 262T173 379Q173 380 173 381Q173 390 173 393T169 400T158 404H154Q131 404 112 385T82 344T65 302T57 280Q55 278 41 278H27Q21 284 21 287Z"></path><path stroke-width="1" id="E2-MJMAIN-31" d="M213 578L200 573Q186 568 160 563T102 556H83V602H102Q149 604 189 617T245 641T273 663Q275 666 285 666Q294 666 302 660V361L303 61Q310 54 315 52T339 48T401 46H427V0H416Q395 3 257 3Q121 3 100 0H88V46H114Q136 46 152 46T177 47T193 50T201 52T207 57T213 61V578Z"></path></defs><g stroke="currentColor" fill="currentColor" stroke-width="0" transform="matrix(1 0 0 -1 0 0)"><use xlink:href="#E2-MJMAIN-30" x="0" y="0"></use><use xlink:href="#E2-MJMAIN-2264" x="778" y="0"></use><use xlink:href="#E2-MJMATHI-78" x="1834" y="0"></use><use xlink:href="#E2-MJMAIN-2C" x="2407" y="0"></use><use xlink:href="#E2-MJMATHI-79" x="2852" y="0"></use><use xlink:href="#E2-MJMAIN-2264" x="3627" y="0"></use><g transform="translate(4683,0)"><use xlink:href="#E2-MJMAIN-31"></use><use xlink:href="#E2-MJMAIN-30" x="500" y="0"></use><use xlink:href="#E2-MJMAIN-30" x="1001" y="0"></use><use xlink:href="#E2-MJMAIN-30" x="1501" y="0"></use></g></g></svg></p>
<table>
    <thead>
        <tr>
            <th>Sample Input</th>
            <th>Sample Output</th>
        </tr>
    </thead>
    <tbody valign="top">
        <tr>
            <td>3<br>0 10<br>10 0<br>0 0</td>
            <td>200</td>
        </tr>
    </tbody>
</table>

### Explanation
<p>We can connect the bulbs <strong>A</strong>(10, 0) and <strong>B</strong>(0, 0) which will require the length of 10 units. Similarly, we can connect the bulbs <strong>B</strong>(0, 0) and <strong>C</strong>(0, 10) which will require the length of 10 units. Therefore, the total length required to connect the bulbs is 10<sup>2</sup> + 10<sup>2</sup> = 200 units.</p>
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