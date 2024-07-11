from collections import namedtuple
from itertools import combinations
from math import sqrt


Point = namedtuple('Point', 'x y')


def distance_squared(first_point, second_point):
    return (first_point.x - second_point.x) ** 2 + (first_point.y - second_point.y) ** 2


def minimum_distance_squared(points):
    if len(points) == 2:
        return distance_squared(points[0], points[1])

    sorted_points = sorted(points, key=lambda point: point.x)
    mid = len(sorted_points) // 2
    left_points = sorted_points[:mid]
    right_points = sorted_points[mid:]

    left_min_distance = minimum_distance_squared(left_points)
    right_min_distance = minimum_distance_squared(right_points)
    min_distance = min(left_min_distance, right_min_distance)

    mid_x = sorted_points[mid].x
    strip_points = [point for point in sorted_points if abs(point.x - mid_x) < min_distance]
    strip_points.sort(key=lambda point: point.y)

    for i, point in enumerate(strip_points):
        for j in range(i + 1, min(i + 8, len(strip_points))):
            min_distance = min(min_distance, distance_squared(strip_points[i], strip_points[j]))

    return min_distance


if __name__ == '__main__':
    input_n = int(input())
    input_points = []
    for _ in range(input_n):
        x, y = map(int, input().split())
        input_point = Point(x, y)
        input_points.append(input_point)

    print("{0:.9f}".format(sqrt(minimum_distance_squared(input_points))))
