import router from "../../router";

export default {
	namespaced: true,
	state: {
		coinTest: 1,
		resultCoins: null,
		pointsSkill: [
			{
				name: 'language',
				point: 0,
				number: 1
			},
			{
				name: 'music',
				point: 0,
				number: 2
			},
			{
				name: 'sport',
				point: 0,
				number: 3
			},
			{
				name: 'vitalization',
				point: 0,
				number: 4
			},
			{
				name: 'draw',
				point: 0,
				number: 5
			},
			{
				name: 'artist',
				point: 0,
				number: 6
			},
			{
				name: 'communication',
				point: 0,
				number: 7
			},
			{
				name: 'math',
				point: 0,
				number: 8
			},
		],
	},
	mutations: {
		coinsPlus(state) {
			state.coinTest++
		},
		sortt(state) {
			let sortable = state.pointsSkill.slice(0);
			sortable.sort(function (a, b) {
				return b.point - a.point
			})
			function assignment() {
				state.resultCoins = sortable[0].number
			}
			if (sortable[0].point === sortable[1].point) {
				state.coinTest++
				if (state.coinTest == 7) {
					router.push({
						name: 'Result'
					});
					assignment()
				}
			} else {
				router.push({
					name: 'Result'
				});
				assignment()
			}
		},
		pointPlus(state, id) {
			if (id === 1) {
				state.pointsSkill[0].point++;
			} else if (id === 2) {
				state.pointsSkill[1].point++;
			} else if (id === 3) {
				state.pointsSkill[2].point++;
			} else if (id === 4) {
				state.pointsSkill[3].point++;
			} else if (id === 5) {
				state.pointsSkill[4].point++;
			} else if (id === 6) {
				state.pointsSkill[5].point++;
			} else if (id === 7) {
				state.pointsSkill[6].point++;
			} else if (id === 8) {
				state.pointsSkill[7].point++;
			}
		},
		reset(state) {
			state.pointsSkill.forEach(item => {
				item.point = 0
			});
			state.coinTest = 1
		}
	},
	actions: {
		testMath({
			commit,
		}, id) {
				commit('pointPlus', id)
		},
		plus({
			commit,
			state
		}) {
			if (state.coinTest < 5) {
				commit('coinsPlus')
			} else {
				commit('sortt')
			}
		},
	}
}
