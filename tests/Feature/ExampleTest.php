<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(200)->assertViewIs('index')->assertSee('使い方含め、このWebページについて');
    }

    public function test_definitionPage_response()
    {
        $response = $this->get('/definition');

        $response->assertStatus(200)->assertViewIs('definition')->assertSee('歌唱中でのテクニックの種類');
    }

    public function test_explanationPage_response()
    {
        $response = $this->get('/explanation');

        $response->assertStatus(200)->assertViewIs('explanation')->assertSee('使い方');
    }

    public function test_indexPage_not_logged_in()
    {
        $response = $this->get('/index');

        $response->assertStatus(302)->assertRedirect('login');
    }

    public function test_songListPage_not_logged_in()
    {
        $response = $this->get('/singing');

        $response->assertStatus(302)->assertRedirect('login');
    }
}
