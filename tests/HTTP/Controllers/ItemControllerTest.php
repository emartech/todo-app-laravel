<?php

use App\Http\Controllers\ItemController;


class ItemControllerTest extends PHPUnit_Framework_TestCase
{
    protected $subject, $request, $mock;

    public function setUp()
    {
        parent::setUp();
        $this->subject = new ItemController();
        $this->request = new \Illuminate\Http\Request();
    }

    /**
     * @test
     */
    public function testStore()
    {
        $this->request->title = 'test data';

        $mock = \Mockery::mock('alias:App\models\Item');
        $mock->shouldReceive('create')->with(['title' => 'test data']);

        $this->subject->store($this->request);
    }
}
