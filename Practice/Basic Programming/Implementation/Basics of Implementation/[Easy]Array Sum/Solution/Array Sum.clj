(def n (Integer/parseInt (read-line))) ; Reading the size of the array
(def elements (read-line))             ; Reading the array elements as a space-separated string

; Parse the elements into a sequence of long integers
(def array (map #(Long/parseLong %) (clojure.string/split elements #"\s+")))

; Calculate the sum of the elements
(def sum (reduce + array))

; Print the sum
(println sum)