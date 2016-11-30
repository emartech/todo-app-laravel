<?php

use App\Http\Controllers\ItemController;


class ItemControllerTest extends TestCase
{
    /** @var  ItemController */
    protected $subject;
    /** @var  \Illuminate\Http\Request */
    protected $request;



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

        $this->response = $this->subject->store($this->request);

        $this->assertResponseOk();
        $this->seeJsonEquals(['success' => true]);
    }
}
