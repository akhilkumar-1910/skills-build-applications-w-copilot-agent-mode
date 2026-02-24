from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Team, Activity, Leaderboard, Workout

User = get_user_model()

class ModelTests(TestCase):
    def test_create_team(self):
        team = Team.objects.create(name='Test Team')
        self.assertEqual(str(team), 'Test Team')

    def test_create_activity(self):
        activity = Activity.objects.create(user='testuser', activity_type='Run', duration=10, team='Test Team')
        self.assertEqual(str(activity), 'testuser - Run')

    def test_create_leaderboard(self):
        leaderboard = Leaderboard.objects.create(team='Test Team', points=100)
        self.assertEqual(str(leaderboard), 'Test Team: 100')

    def test_create_workout(self):
        workout = Workout.objects.create(name='Test Workout', description='desc', suggested_for='Test Team')
        self.assertEqual(str(workout), 'Test Workout')

    def test_create_user(self):
        user = User.objects.create_user(username='testuser', email='test@example.com', password='pass')
        self.assertEqual(user.username, 'testuser')
