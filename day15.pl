capacity(Su, Sp, Ca, R) :- gez((3 * Su) + (-3 * Sp) + (-1 * Ca), Y), R is Y.
durability(Sp, R) :- gez((3 * Sp), Y), R is Y.
flavor(Ca, Ch, R) :- gez((4 * Ca) + (-2 * Ch), Y), R is Y.
texture(Su, Ch, R) :- gez((-3 * Su) + (2 * Ch), Y), R is Y.
gez(X, Y) :- X > 0, Y is X | Y is 0.

score(Su, Sp, Ca, Ch, R) :- units(Su, Sp, Ca, Ch, 100), capacity(Su, Sp, Ca, X), durability(Sp, Y), flavor(Ca, Ch, Z), texture(Su, Ch, P), R is X * Y * Z * P.
units(Su, Sp, Ca, Ch, R) :- R is (Su + Sp + Ca + Ch).

Vals = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100].
score([Su|ARest], [Sp|BRest], [Ca|CRest], [Ch|DRest], R).
score([Su|AShortList], [Sp|BShortList], [Ca|CShortList], [Ch|DShortList], R) :- score(AShortList, BShortList, CShortList, DShortList, R).
