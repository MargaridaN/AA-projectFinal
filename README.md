# Recoding project
    Artwork: Flur from Georg Nees

# pseudo code
    We started by drawing the canvas with the dimensions of the artwork, but duplicate it to see the artwork with more detail.
We create a function to design the retangles in a bidimensional way. So, we do it with a loop with 50 randomly positioned bricks. There is a part of the left wall that don’t have retangles, so we tried to exclude them with a if according to dimensions. The boxes are always drawn from a central point.
We do the same for the top left retangles. So, through a loop we distribute 100 bricks on the top wall, changing the coordinates.
We repeat the process for the right side and top right wall, only changing the coordinates of the image, so the retangles could be arranged in the right side of the hall.
To draw the ceiling we add a 3D, so now we have 3 dimensions (coordinates) to be represented in the ceiling. The process is almost the same but with one more coordinate. With a loop we draw the retangles only on 1/3 of the ceiling. And we do another loop to represent only 6 retangles that are on the other part of the ceiling.
The next step was to draw the grid in a bidimensional way. So we define a variable offSetX to divide the grid in 8 parts like in the original artwork.
To design longitudinal lines we use also a loop to arrange the 8 lines. So we design it like a box but only give one dimension to do a line (coordinate z) related to the depth.
To design horizontal lines, the method is the same but we deal with the coordinate x.
In the end, we know that the artwork is not centered in the middle, so with the camera we can change the perpetive of the hallway, tilting it as if we were seeing in the right corner of the hall.








