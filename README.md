### Practicas

#### #1
**Command**       
```
node ./file_1.js 9999 ./a_0.txt ./b_0.txt
```

**input**     
A.txt
```
1.3 1.6
4.8 8.5
3.6 9.4
3.6 8.4
4.2 9.9
1.3 2.8
4.8 0.1
```

B.txt
```
2.3 4.6
6.8 5.5
9.6 0.4
3.6 8.2
3.5 1.1
2.6 3.3
0.1 0.0
```

**Output**      
```
Tamaño del matching: 5
Matches: 
(A -> B)
1,3 1,6 -> 0,1 0,0
3,6 8,4 -> 0,1 0,0
3,6 9,4 -> 2,3 4,6
4,2 9,9 -> 2,6 3,3
4,8 8,5 -> 0,1 0,0
```

------

#### #2
**Command**       
```
node ./file_1.js 9999 ./a_1.txt ./b_1.txt
```

**input**     
A.txt
```
1,3 1,6
4,8 8,5
30,6 9,4
30,6 8,4
4,2 9,9
1,3 2,8
4,8 0,1
```

B.txt
```
2,3 4,6
6,8 5,5
9,6 0,4
3,6 8,2
3,5 1,1
2,6 3,3
0,1 0,0
```

**Output**      
```
Tamaño del matching: 5
Matches: 
(A -> B)
1,3 1,6 -> 0,1 0,0
4,2 9,9 -> 0,1 0,0
4,8 8,5 -> 0,1 0,0
30,6 8,4 -> 2,3 4,6
30,6 9,4 -> 2,6 3,3
```

------

#### #3
**Command**       
```
node ./file_1.js 9999 ./a_2.txt ./b_2.txt
```

**input**     
A.txt
```
21 1
22 12
26 16
29 3
30 16
```

B.txt
```
3 28
5 4
17 10
24 1
27 17
```

**Output**      
```
Tamaño del matching: 3
Matches: 
(A -> B)
22,0 12,0 -> 5,0 4,0
26,0 16,0 -> 17,0 10,0
29,0 3,0 -> 24,0 1,0
```

------

#### #4
**Command**       
```
node ./file_1.js 9999 ./a_3.txt ./b_3.txt
```

**input**     
A.txt
```
1,3 1,6
4,8 8,5
4,2 9,9
1,3 2,8
4,8 0,1
```

B.txt
```
2,2 2,2
2,2 2,2
2,2 2,2
2,2 2,2
```

**Output**      
```
Tamaño del matching: 2
Matches: 
(A -> B)
4,2 9,9 -> 2,2 2,2
4,8 8,5 -> 2,2 2,2
```

------

