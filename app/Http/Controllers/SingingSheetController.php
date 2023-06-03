<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SingingSheetRequest;
use App\Models\SingingSheet;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class SingingSheetController extends Controller
{

    public function index()
    {
        $userId = Auth::id();
        $singingSheets = SingingSheet::where('user_id', $userId)->get();
        return view('song_list', ['singingSheets' => $singingSheets]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $userId = Auth::id();
        $singingSheets = SingingSheet::where('user_id', $userId)->get();
        return view('song_create', ['singingSheets' => $singingSheets]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(SingingSheetRequest $request)
    {
        $singingSheet = new SingingSheet($request->validated());
        $singingSheet->lyrics = "<div class='editable-inner'>" . $singingSheet->lyrics . "</div>";
        $singingSheet->user_id = Auth::id();
        $singingSheet->save();
        return to_route('singing.create')->with('success', '曲の登録が完了しました');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //歌詞の全画面モード時に使用予定
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(SingingSheet $singing)
    {
        $userId = Auth::id();
        $singingSheets = SingingSheet::where('user_id', $userId)->get();
        return view('edit', ['singing' => $singing, 'singingSheets' => $singingSheets]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(SingingSheetRequest $request, $id)
    {
        $singingSheet = SingingSheet::findOrFail($id);
        $updateData = $request->validated();


        // バリデーションに違反した場合、エラーメッセージをセットして同じページにリダイレクトする
        $validator = Validator::make($request->all(), $request->rules());
        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        $singingSheet->update($updateData);

        return to_route('singing.index')->with('success', '更新が完了しました');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $singingSheet = SingingSheet::findOrFail($id);
        $singingSheet->delete();

        return to_route('singing.index')->with('success', '削除が成功しました');
    }
}
