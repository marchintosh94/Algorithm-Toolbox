from sys import stdin

# use best time complexity algorithm to solve the problem
def points_cover(starts, ends, points):
    # create a list of tuples to store the start and end points
    segments = list(zip(starts, ends))
    # sort the segments
    segments.sort(key=lambda x: x[1])
    # sort the points
    points.sort()
    # create a list to store the count of points in each segment
    count = [0] * len(points)
    # create a list to store the index of the segment
    index = 0
    # iterate through the points
    for i in range(len(points)):
        # iterate through the segments
        while index < len(segments) and points[i] >= segments[index][0]:
            # check if the point is in the segment
            if points[i] <= segments[index][1]:
                # increment the count of the point in the segment
                count[i] += 1
            # move to the next segment
            index += 1
    return count
    


if __name__ == '__main__':
    data = list(map(int, stdin.read().split()))
    n, m = data[0], data[1]
    input_starts, input_ends = data[2:2 * n + 2:2], data[3:2 * n + 2:2]
    input_points = data[2 * n + 2:]

    output_count = points_cover(input_starts, input_ends, input_points)
    print(*output_count)
